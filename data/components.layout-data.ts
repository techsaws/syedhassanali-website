export const headerNavLinks = [
  { label: "My Work", href: "#projects" },
  { label: "What I Do", href: "#expertise" },
  { label: "How I Solved It", href: "/case-studies" },
  { label: "About Me", href: "#about" },
] as const;

export const footerNavLinks = [
  { label: "My Work", href: "#projects" },
  { label: "What I Do", href: "#expertise" },
  { label: "How I Solved It", href: "/case-studies" },
  { label: "About Me", href: "#about" },
] as const;

export const footerSocialLinks: {
  label: string;
  href: string | null;
  external?: boolean;
  download?: boolean;
}[] = [
  {
    label: "LinkedIn",
    href: process.env.NEXT_PUBLIC_LINKEDIN_URL || null,
    external: true,
  },
  {
    label: "Email",
    href: process.env.NEXT_PUBLIC_CONTACT_EMAIL
      ? `mailto:${process.env.NEXT_PUBLIC_CONTACT_EMAIL}`
      : null,
  },
  {
    label: "WhatsApp",
    href: process.env.NEXT_PUBLIC_WHATSAPP_NUMBER
      ? `https://wa.me/${process.env.NEXT_PUBLIC_WHATSAPP_NUMBER.replace(/\D/g, "")}`
      : null,
    external: true,
  },
  {
    label: "Call",
    href: process.env.NEXT_PUBLIC_CONTACT_PHONE
      ? `tel:${process.env.NEXT_PUBLIC_CONTACT_PHONE}`
      : null,
  },
];
