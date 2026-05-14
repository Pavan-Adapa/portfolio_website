import { FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa";
import { motion } from "framer-motion";
import { SiLeetcode, SiGeeksforgeeks } from "react-icons/si";

import Container from "../components/layout/Container";

import GlowCard from "../components/common/GlowCard";
import SectionTitle from "../components/common/SectionTitle";

import resumePDF from "../assets/resume/pavan_resume.pdf";

const contactLinks = [
  {
    icon: FaEnvelope,
    label: "Email",
    value: "padapa102@gmail.com",
    href: "mailto:padapa102@gmail.com",
  },

  {
    icon: FaGithub,
    label: "GitHub",
    value: "github.com/Pavan-Adapa",
    href: "https://github.com/Pavan-Adapa",
  },

  {
    icon: FaLinkedin,
    label: "LinkedIn",
    value: "linkedin.com",
    href: "https://linkedin.com",
  },

  {
    icon: SiLeetcode,
    label: "LeetCode",
    value: "leetcode.com",
    href: "https://leetcode.com",
  },

  {
    icon: SiGeeksforgeeks,
    label: "GeeksforGeeks",
    value: "geeksforgeeks.org",
    href: "https://geeksforgeeks.org",
  },
];

function Contact() {
  return (
    <section id="contact" className="py-32 relative">
      <Container>
        <motion.div
          initial={{
            opacity: 0,
            y: 120,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 1,
            ease: [0.22, 1, 0.36, 1],
          }}
          viewport={{
            once: true,
            amount: 0.2,
          }}
        >
          <SectionTitle
            title="Contact"
            subtitle="Feel free to connect with me for opportunities, collaborations, or technical discussions."
          />

          <GlowCard>
            <div
              className="
              flex
              flex-col
              gap-8
            "
            >
              <div
                className="
                grid
                grid-cols-1
                md:grid-cols-2
                gap-6
              "
              >
                {contactLinks.map((item, index) => {
                  const Icon = item.icon;

                  return (
                    <a
                      key={index}
                      href={item.href}
                      target="_blank"
                      rel="noreferrer"
                      className="
                      glass
                      rounded-2xl
                      p-5
                      border
                      border-white/10
                      hover:border-cyan-400
                      transition-all
                      duration-300
                      flex
                      items-center
                      gap-5
                    "
                    >
                      <div
                        className="
                        p-4
                        rounded-xl
                        bg-cyan-500/10
                        text-cyan-300
                      "
                      >
                        <Icon size={22} />
                      </div>

                      <div>
                        <p className="text-sm text-zinc-500">{item.label}</p>

                        <p className="text-zinc-200">{item.value}</p>
                      </div>
                    </a>
                  );
                })}
              </div>

              <div className="flex flex-wrap gap-6">
                <a
                  href={resumePDF}
                  download
                  className="
                  glass
                  neon-border
                  px-8
                  py-4
                  rounded-2xl
                  hover:scale-105
                  transition-all
                  duration-300
                "
                >
                  Download Resume
                </a>

                <a
                  href="mailto:padapa102@gmail.com"
                  className="
                  border
                  border-white/10
                  px-8
                  py-4
                  rounded-2xl
                  hover:border-fuchsia-500
                  hover:text-fuchsia-400
                  transition-all
                  duration-300
                "
                >
                  Send Email
                </a>
              </div>
            </div>
          </GlowCard>
        </motion.div>
      </Container>
    </section>
  );
}

export default Contact;
