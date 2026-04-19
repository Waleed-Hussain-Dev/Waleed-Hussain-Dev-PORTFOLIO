import type { Metadata } from "next";
import { resumeKeywords } from "@/constant";
import { generateResumeStructuredData } from "@/lib/structured-data";

export const metadata: Metadata = {
  title: "Resume - Waleed Hussain",
  description:
    "View and download Waleed Hussain's professional resume. Web Developer with expertise in HTML, CSS, JavaScript, and responsive web design.",
  keywords: resumeKeywords,
  openGraph: {
    title: "Resume - Waleed Hussain",
    description:
      "View and download Waleed Hussain's professional resume featuring his experience and skills as a Web Developer.",
    url: "https://waleed-hussain-dev.vercel.app/resume",
    siteName: "Waleed Hussain",
    images: [
      {
        url: "/images/thumbnail.png",
        width: 1200,
        height: 630,
        alt: "Waleed Hussain Resume",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Resume - Waleed Hussain",
    description:
      "View Waleed Hussain's professional resume and experience as a Web Developer.",
    images: ["/images/thumbnail.png"],
  },
};

export default function ResumeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const resumeStructuredData = generateResumeStructuredData();

  return (
    <>
      <link
        rel="preload"
        href="/docs/Waleed_Hussain_Resume.pdf"
        as="fetch"
        type="application/pdf"
        crossOrigin="anonymous"
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(resumeStructuredData),
        }}
      />
      {children}
    </>
  );
}
