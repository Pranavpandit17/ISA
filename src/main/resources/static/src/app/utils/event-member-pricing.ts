import { User } from '../services/auth.service';

/** Matches backend membership fee plan tiers (see EventRegistrationService.resolvePlanLevel). */
export function getActivePlanLevel(user: User | null): number {
  if (!user) return 0;
  if (user.role === 'admin' || user.type === 'ADMIN') return 999;
  if (!user.currentPlanId) return 0;
  if (user.planExpiryDate) {
    const expiry = new Date(user.planExpiryDate);
    if (expiry < new Date(new Date().toDateString())) return 0;
  }
  return user.currentPlanLevel || 0;
}

/** Paid membership tier (fee plan level ≥ 2). */
export function isPaidPlanMember(user: User | null): boolean {
  return getActivePlanLevel(user) >= 2;
}

/** Free / entry membership tier (₹0-style plan → level 1). */
export function isFreePlanMember(user: User | null): boolean {
  return getActivePlanLevel(user) === 1;
}

export function normalizeTicketTypes(event: any): Array<{
  id: number;
  type: string;
  name?: string;
  price: number;
  availableQuantity: number | null;
}> {
  const list = Array.isArray(event?.ticketTypes) ? event.ticketTypes : [];
  return list
    .filter((t: any) => t && t.id != null)
    .map((t: any) => ({
      ...t,
      type: String(t.type || '').toUpperCase(),
      price: Number(t.price ?? 0),
      availableQuantity: t.availableQuantity != null ? Number(t.availableQuantity) : null
    }));
}

/**
 * Unit price the current user should see for member-context UI (cards, lists, payment fallback).
 * Prefer explicit ticket tiers: MEMBER (paid members) vs FREE_MEMBER (free-tier members).
 */
export function resolveMemberFacingUnitPrice(event: any, user: User | null): number {
  if (!event) return 0;

  const tickets = normalizeTicketTypes(event);
  const level = getActivePlanLevel(user);
  const memberTicket = tickets.find(t => t.type === 'MEMBER');
  const freeMemberTicket = tickets.find(t => t.type === 'FREE_MEMBER');
  const nonMemberTicket = tickets.find(t => t.type === 'NON_MEMBER');

  if (tickets.length > 0) {
    if (!user || level === 0) {
      if (nonMemberTicket) return Number(nonMemberTicket.price || 0);
    } else if (level >= 2 && memberTicket) {
      return Number(memberTicket.price || 0);
    } else if (level >= 2 && !memberTicket && freeMemberTicket) {
      return Number(freeMemberTicket.price || 0);
    } else if (level === 1) {
      if (freeMemberTicket) return Number(freeMemberTicket.price || 0);
      const legacy = Number(event.memberPrice ?? event.pricing?.memberPrice ?? 0);
      return legacy;
    } else if (level < 2 && nonMemberTicket) {
      return Number(nonMemberTicket.price || 0);
    }
  }

  const pricingType = event.pricingType || event.pricing?.type;
  const memberPrice = Number(event.memberPrice ?? event.pricing?.memberPrice ?? 0);
  const nonMemberPrice = Number(event.nonMemberPrice ?? event.pricing?.nonMemberPrice ?? 0);

  if (pricingType === 'FREE') return 0;

  if (pricingType === 'PAID' || pricingType === 'DISCOUNTED') {
    if (level >= 2 && memberPrice > 0) return memberPrice;
    if (level === 1) return memberPrice > 0 ? memberPrice : 0;
    if (!user || level === 0) return nonMemberPrice > 0 ? nonMemberPrice : memberPrice;
  }

  return Number(event.price ?? memberPrice ?? 0);
}

export function formatMemberFacingCost(event: any, user: User | null): string {
  const n = resolveMemberFacingUnitPrice(event, user);
  if (n <= 0) return 'Free';
  return `₹${n.toLocaleString('en-IN')}`;
}
