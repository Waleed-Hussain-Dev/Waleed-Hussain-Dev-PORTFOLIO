import Link from "next/link";
import { IconType } from "react-icons";
import { motion } from "framer-motion";

import { FaFacebook, FaLinkedinIn, FaTwitter, FaYoutube } from "react-icons/fa6";
import { SiBluesky } from "react-icons/si";

import { selfData } from "@/constant";

export const ContactSocials = () => {
  const socialLinks = [
    {
      Icon: FaLinkedinIn,
      link: `https://www.linkedin.com/in/${selfData.socials_username.linkedin}`,
      initial: -10,
    },
    {
      Icon: FaYoutube,
      link: `https://www.youtube.com/${selfData.socials_username.youtube}`,
      initial: 10,
    },
    {
      Icon: FaFacebook,
      link: `https://www.facebook.com/${selfData.socials_username.facebook}`,
      initial: -10,
    },
    {
      Icon: FaTwitter,
      link: `https://x.com/${selfData.socials_username.twitter}`,
      initial: 10,
    },
    {
      Icon: SiBluesky,
      link: `https://bsky.app/profile/${selfData.socials_username.bluesky}`,
      initial: -10,
    },
  ];

  return (
    <ul className="flex mt-12 space-x-4">
      {socialLinks.map((social, index) => (
        <ContactSocialItem
          key={index}
          Icon={social.Icon}
          link={social.link}
          initial={social.initial}
        />
      ))}
    </ul>
  );
};

const ContactSocialItem = ({
  Icon,
  link,
  initial,
}: {
  Icon: IconType;
  link: string;
  initial: number;
}) => {
  return (
    <motion.li
      whileInView={{ opacity: 1, y: 0 }}
      initial={{ opacity: 0, y: initial }}
      transition={{
        duration: 0.5,
        type: "spring",
        stiffness: 400,
        damping: 10,
      }}
      whileHover={{
        scale: 1.1,
      }}
      className="bg-purple-700 text-slate-300 hover:bg-slate-400 hover:text-purple-700 h-10 w-10 rounded-full flex items-center justify-center shrink-0"
    >
      <Link
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center"
      >
        <Icon className="text-slate-300 hover:text-purple-700 w-6 h-6" />
      </Link>
    </motion.li>
  );
};
