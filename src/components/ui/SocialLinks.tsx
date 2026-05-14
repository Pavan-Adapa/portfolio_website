import { FaGithub, FaLinkedin } from "react-icons/fa";

import { SiLeetcode, SiGeeksforgeeks } from "react-icons/si";

const socialLinks = [
  {
    icon: FaGithub,
    href: "https://github.com/Pavan-Adapa",
  },

  {
    icon: FaLinkedin,
    href: "https://www.linkedin.com/in/pavan-adapa-3795023b4?utm_source=share_via&utm_content=profile&utm_medium=member_android",
  },

  {
    icon: SiLeetcode,
    href: "https://leetcode.com/u/Adapa_pavan/",
  },

  {
    icon: SiGeeksforgeeks,
    href: "https://www.geeksforgeeks.org/profile/padaprpqs",
  },
];

function SocialLinks() {
  return (
    <div className="flex items-center gap-5">
      {socialLinks.map((social, index) => {
        const Icon = social.icon;

        return (
          <a
            key={index}
            href={social.href}
            target="_blank"
            rel="noreferrer"
            className="
              glass
              p-4
              rounded-2xl
              border
              border-white/10
              text-zinc-300
              hover:text-cyan-300
              hover:border-cyan-400
              hover:shadow-[0_0_30px_rgba(0,255,255,0.25)]
              hover:-translate-y-1
              transition-all
              duration-300
            "
          >
            <Icon size={22} />
          </a>
        );
      })}
    </div>
  );
}

export default SocialLinks;
