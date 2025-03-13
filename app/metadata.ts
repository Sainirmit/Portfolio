export const siteConfig = {
  name: "Sai Nirmit Portfolio",
  description:
    "Professional portfolio of Sai Nirmit - iOS Developer, Full Stack Developer, Product Manager and AI/ML Enthusiast",
  url: "https://sainirmit.com",
  ogImage: "https://sainirmit.com/og.png",
  links: {
    github: "https://github.com/Sainirmit",
    linkedin: "https://www.linkedin.com/in/sainirmit",
  },
};

export const defaultMetadata = {
  title: {
    default: siteConfig.name,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: [
    "Sai Nirmit",
    "iOS Developer",
    "Full Stack Developer",
    "Product Manager",
    "AI/ML",
    "Portfolio",
    "Next.js",
    "React",
    "JavaScript",
    "TypeScript",
  ],
  authors: [
    {
      name: "Sai Nirmit",
      url: siteConfig.url,
    },
  ],
  creator: "Sai Nirmit",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteConfig.url,
    title: siteConfig.name,
    description: siteConfig.description,
    siteName: siteConfig.name,
    images: [
      {
        url: siteConfig.ogImage,
        width: 1200,
        height: 630,
        alt: siteConfig.name,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.name,
    description: siteConfig.description,
    images: [siteConfig.ogImage],
    creator: "@sainirmit",
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },
  manifest: `${siteConfig.url}/site.webmanifest`,
};
