export const socialLinks = [
  { name: "LinkedIn", icon: "/icons/linkedin.svg", href: process.env.NEXT_PUBLIC_LINKEDIN_URL?.trim() || "https://www.linkedin.com/in/your-profile/" },
  { name: "GitHub", icon: "/icons/github.svg", href: process.env.NEXT_PUBLIC_GITHUB_URL?.trim() || "https://github.com/your-profile" },
  { name: "X", icon: "/icons/x.svg", href: process.env.NEXT_PUBLIC_X_URL?.trim() || "https://x.com/your-profile" },
  { name: "Facebook", icon: "/icons/facebook.svg", href: process.env.NEXT_PUBLIC_FACEBOOK_URL?.trim() || "https://www.facebook.com/your-profile" },
  { name: "Instagram", icon: null, href: process.env.NEXT_PUBLIC_INSTAGRAM_URL?.trim() || "https://www.instagram.com/your-profile/" },
  { name: "Reddit", icon: "/icons/reddit.svg", href: process.env.NEXT_PUBLIC_REDDIT_URL?.trim() || "https://www.reddit.com/user/your-profile/" },
  { name: "Threads", icon: "/icons/threads.svg", href: process.env.NEXT_PUBLIC_THREADS_URL?.trim() || "https://www.threads.net/@your-profile" },
  { name: "Telegram", icon: "/icons/telegram.svg", href: process.env.NEXT_PUBLIC_TELEGRAM_URL?.trim() || "https://t.me/your-profile" },
  { name: "Discord", icon: "/icons/discord.svg", href: process.env.NEXT_PUBLIC_DISCORD_URL?.trim() || "https://discord.gg/your-invite" },
];
