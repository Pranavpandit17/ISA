// --- Interfaces ---

export interface Attendee {
  id: string;
  name: string;
  email: string;
  type: 'MEMBER' | 'GUEST';
  paymentStatus: 'PAID' | 'PENDING' | 'FREE';
  checkedIn: boolean;
  registrationDate: Date;
}

export interface Member {
  id: string;
  email: string;
  password?: string;
  name: string;
  title: string;
  company: string;
  image: string;
  type: 'REGULAR' | 'PREMIUM' | 'ADMIN';
  industry: string;
  experience: number;
  skills: string[];
  bio: string;
  location: string;
  status: 'ACTIVE' | 'SUSPENDED' | 'PENDING' | 'REJECTED';
  teamSize?: string;
  directors?: string;
  website?: string;
  phone?: string;
  socialLinks: { linkedin?: string; twitter?: string; website?: string };
  joinedDate: Date;
  connections: string[];
}

export interface Event {
  id: string;
  title: string;
  name?: string; // Alternative name field
  date: string;
  startDate?: string;
  endDate?: string;
  startTime?: string;
  endTime?: string;
  location: string;
  venue?: string;
  venueUrl?: string;
  mode: 'ONLINE' | 'OFFLINE' | 'HYBRID';
  category: 'WORKSHOP' | 'WEBINAR' | 'NETWORKING' | 'CONFERENCE';
  type: 'Public' | 'Member Only';
  price: number;
  guestPrice: number;
  pricingType?: 'FREE' | 'PAID' | 'DISCOUNTED'; // Pricing type
  memberPrice?: number; // Member price
  nonMemberPrice?: number; // Non-member price
  pricing?: { // Nested pricing object
    type?: 'FREE' | 'PAID' | 'DISCOUNTED';
    memberPrice?: number;
    nonMemberPrice?: number;
  };
  description: string;
  shortDescription?: string;
  fullDescription?: string;
  speaker: string;
  speakers?: Array<{ name?: string; title?: string; company?: string; bio?: string }>;
  registeredCount: number;
  registrationCount?: number; // Alternative field name
  totalRegisteredSeats?: number; // Total seats registered (sum of quantities)
  availableSeats?: number; // Available seats = capacity - totalRegisteredSeats
  maxCapacity: number;
  capacity?: number; // Alternative field name
  status: 'PUBLISHED' | 'DRAFT' | 'CANCELLED';
  image?: string;
  poster?: string;
  isRegistered?: boolean;
  attendees: Attendee[];
  quantity?: number; // For event registration quantity
}

export interface Resource {
  id?: number | string; // Support both number (from API) and string (from mock data)
  role: string;
  stack: string;
  experience: string;
  availability: string;
  postedBy?: number | string; // User ID - support both number (from API) and string (from mock data)
  postedByName?: string;
  postedByEmail?: string;
  postedByCompany?: string;
  posterId?: string | number; // Legacy field for backward compatibility
  hourlyRate?: number;
  currency?: string;
  description?: string;
  expiryDate?: Date | string;
  status?: 'ACTIVE' | 'ARCHIVED' | 'HIRED' | 'EXPIRED';
  contactEmail?: string;
  contactPhone?: string;
  location?: string;
  isRemote?: boolean;
  skills?: string[];
  certifications?: string;
  previousProjects?: string;
  createdAt?: Date | string;
  updatedAt?: Date | string;
}

export interface Project {
  id: string;
  title: string;
  budget: string;
  duration: string;
  techStack: string[];
  postedBy: string;
  posterId: string;
  description: string;
  postedDate: Date;
  status: 'OPEN' | 'CLOSED';
}

export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  authorName: string;
  authorId: string;
  date: string;
  category: string;
  readTime: string;
  content?: string;
  likes: number;
  status: 'PUBLISHED' | 'PENDING' | 'REJECTED';
}

export interface Transaction {
  id: string;
  user: string;
  type: 'MEMBERSHIP' | 'EVENT';
  amount: number;
  date: Date;
  status: 'SUCCESS' | 'FAILED';
}

export interface Announcement {
  id: number;
  title: string;
  date: string;
  type: 'INFO' | 'ALERT';
}

export interface BoardMember {
  name: string;
  role: string;
  company: string;
  image: string;
}

export interface FaqItem {
  question: string;
  answer: string;
  isOpen: boolean;
}

export interface JobPosting {
  id?: number;
  title: string;
  description: string;
  fullDescription?: string;
  type: 'JOB' | 'PROJECT';
  category?: string;
  location?: string;
  isRemote?: boolean;
  employmentType?: string;
  salaryMin?: number;
  salaryMax?: number;
  salaryCurrency?: string;
  budget?: string;
  duration?: string;
  techStack?: string[];
  requirements?: string[] | string;
  tags?: string[];
  postedBy?: number; // User ID
  postedByName?: string;
  postedByEmail?: string;
  postedByCompany?: string;
  posterId?: number; // Legacy field for backward compatibility
  postedDate?: Date | string;
  expiryDate?: Date | string;
  closingDate?: Date | string;
  status: 'OPEN' | 'CLOSED' | 'FILLED' | 'PUBLISHED' | 'DRAFT' | 'ARCHIVED';
  visibility?: 'VISIBLE' | 'HIDDEN';
  adminReviewStatus?: 'PENDING' | 'APPROVED' | 'REJECTED';
  adminReviewNotes?: string;
  reviewedAt?: Date | string;
  publishedAt?: Date | string;
  createdAt?: Date | string;
  updatedAt?: Date | string;
  proposals?: Proposal[];
  proposalCount?: number;
  applicationCount?: number;
}

export interface Proposal {
  id?: number;
  postingId?: number;
  jobPostingId?: number; // Legacy field
  applicantId?: number;
  applicantName?: string;
  applicantEmail?: string;
  applicantCompany?: string;
  coverLetter?: string;
  coverMessage?: string; // Backend uses coverMessage
  resumeUrl?: string;
  resumeFileName?: string;
  proposedBudget?: string;
  proposedDuration?: string;
  relevantExperience?: string;
  submittedDate?: Date | string;
  appliedAt?: Date | string;
  status?: 'PENDING' | 'ACCEPTED' | 'REJECTED' | 'UNDER_REVIEW' | 'SHORTLISTED' | 'WITHDRAWN';
  reviewedAt?: Date | string;
  reviewedById?: number;
  reviewedByName?: string;
  reviewNotes?: string;
  rejectionReason?: string;
  updatedAt?: Date | string;
}

export type ViewState = 'HOME' | 'DASHBOARD' | 'ADMIN_DASHBOARD' | 'DIRECTORY' | 'BENCH' | 'EVENTS' | 'BLOGS' | 'PROFILE_EDIT' | 'RESOURCE_POST' | 'PROJECT_POST' | 'BLOG_CREATE' | 'EVENT_DETAIL' | 'BLOG_DETAIL' | 'MEMBER_MANAGEMENT' | 'EVENT_MANAGEMENT' | 'POST_MANAGEMENT' | 'EVENT_CREATE' | 'JOBS_PROJECTS' | 'JOB_POST' | 'PAYMENT';
export type AdminSubView = 'OVERVIEW' | 'ANALYTICS' | 'MEMBERS' | 'EVENTS' | 'FINANCE' | 'CONTENT';
export type BenchTab = 'TALENT' | 'PROJECTS';
export type MemberTab = 'ALL' | 'PENDING';

