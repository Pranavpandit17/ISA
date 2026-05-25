/** Normalize membership date values from API (camelCase, snake_case, arrays, ISO strings). */

export function pickMembershipDate(value: unknown): string | null {
  if (value == null || value === '') {
    return null;
  }
  if (Array.isArray(value) && value.length >= 3) {
    const y = Number(value[0]);
    const m = Number(value[1]);
    const d = Number(value[2]);
    if (!Number.isFinite(y) || !Number.isFinite(m) || !Number.isFinite(d)) {
      return null;
    }
    return `${y}-${String(m).padStart(2, '0')}-${String(d).padStart(2, '0')}`;
  }
  if (typeof value === 'string') {
    const trimmed = value.trim();
    if (!trimmed) {
      return null;
    }
    // ISO date, ISO datetime, or MySQL "yyyy-MM-dd HH:mm:ss"
    const datePart = trimmed.split('T')[0].split(' ')[0];
    if (/^\d{4}-\d{2}-\d{2}$/.test(datePart)) {
      return datePart;
    }
    // dd/MM/yyyy or dd-MM-yyyy
    const slash = datePart.match(/^(\d{1,2})[\/\-](\d{1,2})[\/\-](\d{4})$/);
    if (slash) {
      const [, d, m, y] = slash;
      return `${y}-${String(m).padStart(2, '0')}-${String(d).padStart(2, '0')}`;
    }
    return trimmed.length ? trimmed : null;
  }
  return null;
}

export function resolveSubscriptionStart(member: Record<string, unknown> | null | undefined): string | null {
  if (!member) {
    return null;
  }
  return pickMembershipDate(
    member['subscriptionStartDate'] ??
      member['subscription_start_date'] ??
      member['planStartDate'] ??
      member['plan_start_date']
  );
}

export function resolveSubscriptionEnd(member: Record<string, unknown> | null | undefined): string | null {
  if (!member) {
    return null;
  }
  return pickMembershipDate(
    member['subscriptionEndDate'] ??
      member['subscription_end_date'] ??
      member['planExpiryDate'] ??
      member['plan_expiry_date']
  );
}

export function formatMembershipDateDisplay(value: unknown): string {
  const normalized = pickMembershipDate(value);
  if (!normalized) {
    return '—';
  }
  const iso = normalized.includes('T') ? normalized : `${normalized}T00:00:00`;
  const parsed = new Date(iso);
  if (Number.isNaN(parsed.getTime())) {
    return '—';
  }
  return parsed.toLocaleDateString(undefined, {
    year: 'numeric',
    month: 'short',
    day: 'numeric'
  });
}
