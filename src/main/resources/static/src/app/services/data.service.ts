import { Injectable } from '@angular/core';
import { Member, Event, Resource, Project, BlogPost, Transaction, Announcement, BoardMember, FaqItem } from '../models/interfaces';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  
  boardMembers: BoardMember[] = [
    { name: 'Sachin Saboo', role: 'Vice President', company: 'Computronics Systems (India) Pvt. Ltd', image: 'https://ui-avatars.com/api/?name=Neelam+Singh&background=random' },
    { name: 'Swapnil Bansal', role: 'Treasurer', company: 'Mastrics Consulting India Pvt. Ltd', image: 'https://ui-avatars.com/api/?name=Vikram+Seth&background=random' },
    { name: 'Vipin Maru', role: 'Member Benifit Officer', company: 'Infowind Technologies IT Pvt. Ltd', image: 'https://ui-avatars.com/api/?name=Amit+Rathi&background=0D8ABC&color=fff' },
   // { name: 'Sarvesh Sharma', role: 'Program Coordinator', company: 'Exatip', image: 'https://ui-avatars.com/api/?name=Rahul+Jain&background=random' }
  ];

  faqs: FaqItem[] = [
    { question: 'Who can join ISA?', answer: 'Membership is open to IT companies registered in Indore, as well as individual consultants and startups.', isOpen: false },
    { question: 'What is the approval process?', answer: 'Applications are reviewed by the board within 48 hours.', isOpen: false }
  ];

  events: Event[] = [
    { 
      id: '1', title: 'AI in SaaS Workshop', date: '2025-12-28', location: 'Brilliant Conv. Centre', mode: 'OFFLINE', category: 'WORKSHOP', type: 'Public', price: 0, guestPrice: 500, description: 'LLM Integration', speaker: 'Dr. Rao', registeredCount: 2, maxCapacity: 100, status: 'PUBLISHED', 
      attendees: [
        { id: 'a1', name: 'Rajesh Kumar', email: 'rajesh@techsoft.com', type: 'MEMBER', paymentStatus: 'FREE', checkedIn: false, registrationDate: new Date() },
        { id: 'a2', name: 'John Guest', email: 'john@gmail.com', type: 'GUEST', paymentStatus: 'PAID', checkedIn: true, registrationDate: new Date() }
      ]
    },
    { 
      id: '2', title: 'StartUp Grind Indore', date: '2026-01-15', location: 'Workie Coworking', mode: 'HYBRID', category: 'NETWORKING', type: 'Public', price: 0, guestPrice: 200, description: 'Networking Mixer', speaker: 'Panel', registeredCount: 20, maxCapacity: 50, status: 'PUBLISHED', 
      attendees: []
    },
    { 
      id: '3', title: 'Cloud Security Summit', date: '2026-01-22', location: 'Sheraton Grand', mode: 'OFFLINE', category: 'CONFERENCE', type: 'Member Only', price: 1000, guestPrice: 2500, description: 'Cybersecurity trends', speaker: 'CyberSec Team', registeredCount: 8, maxCapacity: 200, status: 'PUBLISHED', 
      attendees: []
    },
    { 
      id: '4', title: 'Hr Round Table', date: '2026-02-05', location: 'Sayaji Hotel', mode: 'OFFLINE', category: 'WORKSHOP', type: 'Public', price: 500, guestPrice: 1000, description: 'HR Best Practices', speaker: 'HR Leaders', registeredCount: 15, maxCapacity: 60, status: 'PUBLISHED', 
      attendees: []
    },
    { 
      id: '5', title: 'Indore Tech Expo', date: '2026-03-10', location: 'Labh Ganga', mode: 'OFFLINE', category: 'CONFERENCE', type: 'Public', price: 0, guestPrice: 0, description: 'Biggest tech expo', speaker: 'Multiple', registeredCount: 150, maxCapacity: 500, status: 'PUBLISHED', 
      attendees: []
    }
  ];

  members: Member[] = [
    { id: '1', email: 'rajesh@techsoft.com', name: 'Rajesh Kumar', title: 'CTO', company: 'TechSoft', image: 'https://ui-avatars.com/api/?name=Rajesh+Kumar&background=0D8ABC&color=fff', type: 'PREMIUM', industry: 'Fintech', experience: 15, skills: ['Java', 'Cloud'], bio: 'Fintech innovator.', location: 'Indore', status: 'ACTIVE', socialLinks: {}, joinedDate: new Date(), connections: [] },
    { id: '2', email: 'sandeep@cloudminds.com', name: 'Sandeep Gupta', title: 'CEO', company: 'CloudMinds', image: 'https://ui-avatars.com/api/?name=Sandeep+Gupta&background=random', type: 'PREMIUM', industry: 'SaaS', experience: 12, skills: ['AI', 'Sales'], bio: 'SaaS scaling expert.', location: 'Indore', status: 'ACTIVE', socialLinks: {}, joinedDate: new Date(), connections: [] },
    { id: '3', email: 'neha@datasystems.com', name: 'Neha Kapoor', title: 'VP Eng', company: 'DataSystems', image: 'https://ui-avatars.com/api/?name=Neha+Kapoor&background=random', type: 'REGULAR', industry: 'EdTech', experience: 8, skills: ['Python', 'Data'], bio: 'Data driven.', location: 'Indore', status: 'ACTIVE', socialLinks: {}, joinedDate: new Date(), connections: [] },
    { id: '4', email: 'amit@codeworks.com', name: 'Amit Verma', title: 'Founder', company: 'CodeWorks', image: 'https://ui-avatars.com/api/?name=Amit+Verma&background=random', type: 'PREMIUM', industry: 'Services', experience: 10, skills: ['React', 'Node'], bio: 'Service based startup.', location: 'Indore', status: 'ACTIVE', socialLinks: {}, joinedDate: new Date(), connections: [] },
    { id: '5', email: 'priya@softsol.com', name: 'Priya Singh', title: 'HR Head', company: 'SoftSol', image: 'https://ui-avatars.com/api/?name=Priya+Singh&background=random', type: 'REGULAR', industry: 'Services', experience: 6, skills: ['Hiring'], bio: 'People first.', location: 'Indore', status: 'ACTIVE', socialLinks: {}, joinedDate: new Date(), connections: [] },
    { id: '6', email: 'vikram@healthify.com', name: 'Vikram Malhotra', title: 'COO', company: 'Healthify', image: 'https://ui-avatars.com/api/?name=Vikram+M&background=random', type: 'PREMIUM', industry: 'HealthTech', experience: 18, skills: ['Ops', 'Compliance'], bio: 'Digital Health.', location: 'Indore', status: 'ACTIVE', socialLinks: {}, joinedDate: new Date(), connections: [] },
    { id: '7', email: 'sara@designstudio.com', name: 'Sara Khan', title: 'Design Lead', company: 'PixelPerfect', image: 'https://ui-avatars.com/api/?name=Sara+Khan&background=random', type: 'REGULAR', industry: 'Services', experience: 5, skills: ['Figma', 'UI/UX'], bio: 'Creative director.', location: 'Indore', status: 'SUSPENDED', socialLinks: {}, joinedDate: new Date(), connections: [] },
    { id: '8', email: 'arjun@logistics.com', name: 'Arjun Das', title: 'Founder', company: 'LogiTech', image: 'https://ui-avatars.com/api/?name=Arjun+Das&background=random', type: 'PREMIUM', industry: 'SaaS', experience: 9, skills: ['Supply Chain'], bio: 'Logistics automated.', location: 'Indore', status: 'ACTIVE', socialLinks: {}, joinedDate: new Date(), connections: [] },
    { id: '9', email: 'meera@finserve.com', name: 'Meera Joshi', title: 'CFO', company: 'FinServe', image: 'https://ui-avatars.com/api/?name=Meera+Joshi&background=random', type: 'PREMIUM', industry: 'Fintech', experience: 20, skills: ['Finance', 'Audit'], bio: 'Financial strategist.', location: 'Indore', status: 'ACTIVE', socialLinks: {}, joinedDate: new Date(), connections: [] },
    { id: '10', email: 'rohit@edulearn.com', name: 'Rohit Sharma', title: 'CTO', company: 'EduLearn', image: 'https://ui-avatars.com/api/?name=Rohit+S&background=random', type: 'REGULAR', industry: 'EdTech', experience: 7, skills: ['LMS', 'Video'], bio: 'Learning tech.', location: 'Indore', status: 'ACTIVE', socialLinks: {}, joinedDate: new Date(), connections: [] },
    { id: '12', email: 'anil@cyber.com', name: 'Anil Mehta', title: 'CEO', company: 'CyberSafe', image: 'https://ui-avatars.com/api/?name=Anil+Mehta&background=random', type: 'REGULAR', industry: 'Services', experience: 15, skills: ['Security'], bio: 'Cybersecurity expert.', location: 'Indore', status: 'ACTIVE', socialLinks: {}, joinedDate: new Date(), connections: [] },
    { id: '13', email: 'deepa@ai.com', name: 'Deepa Rao', title: 'Lead AI', company: 'IntellectAI', image: 'https://ui-avatars.com/api/?name=Deepa+Rao&background=random', type: 'PREMIUM', industry: 'AI', experience: 8, skills: ['Python', 'ML'], bio: 'AI Researcher.', location: 'Indore', status: 'ACTIVE', socialLinks: {}, joinedDate: new Date(), connections: [] },
    { id: '14', email: 'karan@freelance.com', name: 'Karan Singh', title: 'Consultant', company: 'Freelance', image: 'https://ui-avatars.com/api/?name=Karan+S&background=random', type: 'REGULAR', industry: 'Services', experience: 4, skills: ['React'], bio: 'Frontend specialist.', location: 'Indore', status: 'ACTIVE', socialLinks: {}, joinedDate: new Date(), connections: [] },
    { id: '15', email: 'pooja@hr.com', name: 'Pooja Verma', title: 'HR Manager', company: 'TalentPool', image: 'https://ui-avatars.com/api/?name=Pooja+V&background=random', type: 'REGULAR', industry: 'HR', experience: 6, skills: ['Recruitment'], bio: 'Talent acquisition.', location: 'Indore', status: 'ACTIVE', socialLinks: {}, joinedDate: new Date(), connections: [] },
    { id: '11', email: 'admin@isa.com', name: 'ISA Admin', title: 'System Admin', company: 'ISA', image: 'https://ui-avatars.com/api/?name=Admin&background=000&color=fff', type: 'ADMIN', industry: 'Non-Profit', experience: 10, skills: ['Admin'], bio: 'System Admin', location: 'Indore', status: 'ACTIVE', socialLinks: {}, joinedDate: new Date(), connections: [] },
    { id: '99', email: 'new@startup.com', name: 'New Founder', title: 'CEO', company: 'Stealth Startup', image: 'https://ui-avatars.com/api/?name=New+F', type: 'REGULAR', industry: 'AI', experience: 2, skills: ['Python'], bio: 'Applying for membership', location: 'Indore', status: 'PENDING', socialLinks: {}, joinedDate: new Date(), connections: [], teamSize: '1-10', phone: '9876543210' }
  ];

  resources: Resource[] = [
    { id: '1', role: 'Sr. Dev', stack: 'React, Node.js', experience: '5 Yrs', availability: 'Immediate', postedBy: 'Nexus Tech', posterId: '99', expiryDate: new Date(), status: 'ACTIVE', description: 'Full stack dev available.' },
    { id: '2', role: 'QA Lead', stack: 'Selenium, Java', experience: '8 Yrs', availability: '< 2 Weeks', postedBy: 'QualityFirst', posterId: '98', expiryDate: new Date(), status: 'ACTIVE', description: 'Automation expert.' },
    { id: '3', role: 'DevOps Eng', stack: 'AWS, Docker', experience: '4 Yrs', availability: 'Immediate', postedBy: 'CloudOps', posterId: '97', expiryDate: new Date(), status: 'ACTIVE', description: 'Certified AWS Pro.' },
    { id: '4', role: 'UI Designer', stack: 'Figma, Adobe', experience: '3 Yrs', availability: '1 Month', postedBy: 'PixelPerfect', posterId: '7', expiryDate: new Date(), status: 'ACTIVE', description: 'Creative UI designer.' },
    { id: '5', role: 'Mobile Dev', stack: 'Flutter, Dart', experience: '4 Yrs', availability: 'Immediate', postedBy: 'AppWiz', posterId: '96', expiryDate: new Date(), status: 'ACTIVE', description: 'Cross platform mobile dev.' },
    { id: '6', role: 'Data Scientist', stack: 'Python, ML', experience: '6 Yrs', availability: '2 Weeks', postedBy: 'DataSystems', posterId: '3', expiryDate: new Date(), status: 'ACTIVE', description: 'NLP Specialist.' },
    { id: '7', role: 'Backend Dev', stack: 'Java, Spring', experience: '7 Yrs', availability: 'Immediate', postedBy: 'FinServe', posterId: '9', expiryDate: new Date(), status: 'ACTIVE', description: 'Banking domain exp.' },
    { id: '8', role: 'Frontend Dev', stack: 'Angular, RxJS', experience: '3 Yrs', availability: 'Immediate', postedBy: 'WebSols', posterId: '10', expiryDate: new Date(), status: 'ACTIVE', description: 'Enterprise app exp.' }
  ];

  projects: Project[] = [
    { id: '1', title: 'E-commerce Mobile App', budget: '₹ 5L - ₹ 8L', duration: '3 Months', techStack: ['Flutter', 'Firebase'], postedBy: 'RetailKing', posterId: '101', description: 'Need a team to build a grocery delivery app similar to Zepto. Design ready.', postedDate: new Date(), status: 'OPEN' },
    { id: '2', title: 'Hospital Management System', budget: '₹ 12L - ₹ 15L', duration: '6 Months', techStack: ['Java', 'Angular', 'MySQL'], postedBy: 'MediCare', posterId: '102', description: 'Migration of legacy desktop app to cloud-based web app. HIPAA compliance required.', postedDate: new Date(), status: 'OPEN' },
    { id: '3', title: 'Fintech KYC Module', budget: '₹ 3L - ₹ 4L', duration: '1 Month', techStack: ['Python', 'OCR', 'AI'], postedBy: 'FinServe', posterId: '9', description: 'Automated document verification module using AI.', postedDate: new Date(), status: 'OPEN' },
    { id: '4', title: 'Corporate Website Revamp', budget: '₹ 1L - ₹ 2L', duration: '1 Month', techStack: ['WordPress', 'PHP'], postedBy: 'LogiTech', posterId: '8', description: 'Modernizing our corporate presence. SEO focus.', postedDate: new Date(), status: 'OPEN' },
    { id: '5', title: 'IoT Dashboard', budget: '₹ 8L - ₹ 10L', duration: '4 Months', techStack: ['React', 'Node.js', 'MQTT'], postedBy: 'SmartHome', posterId: '103', description: 'Real-time dashboard for smart meters.', postedDate: new Date(), status: 'OPEN' },
    { id: '6', title: 'AI Chatbot Integration', budget: '₹ 2L - ₹ 3L', duration: '2 Months', techStack: ['Python', 'OpenAI API'], postedBy: 'ServicePro', posterId: '104', description: 'Customer support chatbot integration.', postedDate: new Date(), status: 'OPEN' }
  ];

  blogPosts: BlogPost[] = [
    { id: '1', title: 'The Future of AI in Indore', excerpt: 'How local companies are leveraging LLMs.', authorName: 'Rajesh Kumar', authorId: '1', date: 'Dec 20, 2025', category: 'Technology', readTime: '5 min', likes: 12, status: 'PUBLISHED' },
    { id: '2', title: 'Scaling SaaS', excerpt: 'Lessons learned growing a $1M ARR startup.', authorName: 'Sandeep Gupta', authorId: '2', date: 'Dec 18, 2025', category: 'Business', readTime: '8 min', likes: 45, status: 'PUBLISHED' },
    { id: '3', title: 'Remote Work Policy', excerpt: 'Best practices for hybrid teams.', authorName: 'Priya Singh', authorId: '5', date: 'Dec 22, 2025', category: 'HR', readTime: '4 min', likes: 0, status: 'PENDING' },
    { id: '4', title: 'Cybersecurity Trends 2026', excerpt: 'What to watch out for.', authorName: 'Amit Verma', authorId: '4', date: 'Dec 23, 2025', category: 'Tech', readTime: '6 min', likes: 0, status: 'PENDING' },
    { id: '5', title: 'MP Startup Policy Review', excerpt: 'Impact on IT sector.', authorName: 'Vikram M', authorId: '6', date: 'Dec 25, 2025', category: 'Policy', readTime: '5 min', likes: 20, status: 'PUBLISHED' },
    { id: '6', title: 'Hiring Tech Talent', excerpt: 'Strategies for 2026.', authorName: 'Pooja V', authorId: '15', date: 'Dec 26, 2025', category: 'HR', readTime: '4 min', likes: 15, status: 'PUBLISHED' }
  ];

  transactions: Transaction[] = [
    { id: 'TXN_1001', user: 'Rajesh Kumar', type: 'MEMBERSHIP', amount: 12000, date: new Date('2025-12-01'), status: 'SUCCESS' },
    { id: 'TXN_1002', user: 'Sandeep Gupta', type: 'EVENT', amount: 500, date: new Date('2025-12-10'), status: 'SUCCESS' },
    { id: 'TXN_1003', user: 'Neha Kapoor', type: 'EVENT', amount: 500, date: new Date('2025-12-15'), status: 'FAILED' },
    { id: 'TXN_1004', user: 'Vikram Malhotra', type: 'MEMBERSHIP', amount: 12000, date: new Date('2025-12-20'), status: 'SUCCESS' },
    { id: 'TXN_1005', user: 'Amit Verma', type: 'MEMBERSHIP', amount: 12000, date: new Date('2025-12-21'), status: 'SUCCESS' },
    { id: 'TXN_1006', user: 'Priya Singh', type: 'EVENT', amount: 500, date: new Date('2025-12-22'), status: 'SUCCESS' },
    { id: 'TXN_1007', user: 'Arjun Das', type: 'MEMBERSHIP', amount: 12000, date: new Date('2025-12-23'), status: 'SUCCESS' },
    { id: 'TXN_1008', user: 'Meera Joshi', type: 'EVENT', amount: 1000, date: new Date('2025-12-24'), status: 'SUCCESS' },
    { id: 'TXN_1009', user: 'Rohit Sharma', type: 'EVENT', amount: 500, date: new Date('2025-12-25'), status: 'SUCCESS' },
    { id: 'TXN_1010', user: 'Deepa Rao', type: 'MEMBERSHIP', amount: 12000, date: new Date('2025-12-26'), status: 'SUCCESS' }
  ];

  announcements: Announcement[] = [
    { id: 1, title: 'New Premium Benefits Available', date: '2025-12-20', type: 'INFO' },
    { id: 2, title: 'Upcoming Annual General Meeting', date: '2025-12-25', type: 'ALERT' }
  ];

  getEvents(): Event[] {
    return this.events;
  }

  getMembers(): Member[] {
    return this.members;
  }

  getResources(): Resource[] {
    return this.resources;
  }

  getProjects(): Project[] {
    return this.projects;
  }

  getBlogPosts(): BlogPost[] {
    return this.blogPosts;
  }

  getTransactions(): Transaction[] {
    return this.transactions;
  }

  getBoardMembers(): BoardMember[] {
    return this.boardMembers;
  }

  getFaqs(): FaqItem[] {
    return this.faqs;
  }

  getAnnouncements(): Announcement[] {
    return this.announcements;
  }

  addMember(member: Member): void {
    this.members.push(member);
  }

  addEvent(event: Event): void {
    this.events.unshift(event);
  }

  addResource(resource: Resource): void {
    this.resources.push(resource);
  }

  addProject(project: Project): void {
    this.projects.push(project);
  }

  addBlogPost(post: BlogPost): void {
    this.blogPosts.push(post);
  }
}

