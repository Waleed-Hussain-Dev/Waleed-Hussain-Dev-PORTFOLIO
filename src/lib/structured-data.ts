import { selfData, skillsData } from "@/constant";

export function generatePersonStructuredData() {
  const skills = skillsData.flatMap((category) =>
    category.data.map((skill) => skill.title)
  );

  return {
    "@context": "https://schema.org",
    "@type": "Person",
    name: selfData.name,
    givenName: selfData.first_name,
    familyName: selfData.last_name,
    jobTitle: selfData.jobTitle,
    worksFor: {
      "@type": "Organization",
      name: selfData.workFor,
    },
    email: selfData.email,
    address: {
      "@type": "PostalAddress",
      addressLocality: selfData.current_location.city,
      addressRegion: selfData.current_location.state,
      addressCountry: selfData.current_location.country,
    },
    sameAs: [
      `https://www.linkedin.com/in/${selfData.socials_username.linkedin}`,
      `https://x.com/${selfData.socials_username.twitter}`,
      `https://www.youtube.com/${selfData.socials_username.youtube}`,
      `https://www.facebook.com/${selfData.socials_username.facebook}`,
      `https://bsky.app/profile/${selfData.socials_username.bluesky}`,
    ],
    url: "https://waleed-hussain-dev.vercel.app",
    description: selfData.bio,
    knowsAbout: skills,
  };
}

export function generateWebsiteStructuredData() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Waleed Hussain - Portfolio",
    url: "https://waleed-hussain-dev.vercel.app",
    description:
      "Waleed Hussain's portfolio featuring web development projects built with HTML, CSS, and JavaScript",
    author: {
      "@type": "Person",
      name: selfData.name,
    },
    publisher: {
      "@type": "Person",
      name: selfData.name,
    },
    inLanguage: "en-US",
    copyrightYear: new Date().getFullYear(),
    copyrightHolder: {
      "@type": "Person",
      name: selfData.name,
    },
  };
}

export function generateOrganizationStructuredData() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: selfData.name,
    url: "https://waleed-hussain-dev.vercel.app",
    logo: "https://waleed-hussain-dev.vercel.app/images/logo.png",
    description: selfData.bio,
    founder: {
      "@type": "Person",
      name: selfData.name,
    },
    sameAs: [
      `https://www.linkedin.com/in/${selfData.socials_username.linkedin}`,
      `https://x.com/${selfData.socials_username.twitter}`,
      `https://www.youtube.com/${selfData.socials_username.youtube}`,
      `https://www.facebook.com/${selfData.socials_username.facebook}`,
    ],
  };
}

export function generateResumeStructuredData() {
  return {
    "@context": "https://schema.org",
    "@type": "DigitalDocument",
    name: "Waleed Hussain Resume",
    description:
      "Professional resume of Waleed Hussain - Web Developer specializing in HTML, CSS, JavaScript, and Responsive Web Design",
    url: "https://waleed-hussain-dev.vercel.app/resume",
    author: {
      "@type": "Person",
      name: selfData.name,
      email: selfData.email,
      jobTitle: selfData.jobTitle,
      worksFor: {
        "@type": "Organization",
        name: selfData.workFor,
      },
      address: {
        "@type": "PostalAddress",
        addressLocality: selfData.current_location.city,
        addressRegion: selfData.current_location.state,
        addressCountry: selfData.current_location.country,
      },
      sameAs: [
        `https://www.linkedin.com/in/${selfData.socials_username.linkedin}`,
        `https://x.com/${selfData.socials_username.twitter}`,
      ],
    },
    dateModified: new Date().toISOString(),
    fileFormat: "application/pdf",
    contentUrl: "https://waleed-hussain-dev.vercel.app/docs/Waleed_Hussain_Resume.pdf",
    downloadUrl: "https://waleed-hussain-dev.vercel.app/docs/Waleed_Hussain_Resume.pdf",
    keywords: [
      "Web Developer",
      "Frontend Developer",
      "HTML Developer",
      "CSS Developer",
      "JavaScript Developer",
      "Responsive Design",
      "Pakistan",
    ],
  };
}
