import MotionSection from "./UI/MotionSection";
import Card from "./UI/Card";
import { FiMail, FiMapPin, FiLinkedin, FiGithub, FiInstagram } from "react-icons/fi";

const Contact = () => {
  const contactDetails = [
    {
      label: "Email",
      value: "naveenvkumar945@gmail.com",
      href: "mailto:naveenvkumar945@gmail.com",
      Icon: FiMail,
      color: "text-blue-500 bg-blue-500/10"
    },
    {
      label: "Address",
      value: "Chitradurga, Karnataka",
      href: "https://maps.google.com/?q=Chitradurga,+Karnataka",
      Icon: FiMapPin,
      color: "text-red-500 bg-red-500/10"
    },
    {
      label: "LinkedIn",
      value: "LinkedIn Profile",
      href: "https://www.linkedin.com/in/naveen-v-8198b6376?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
      Icon: FiLinkedin,
      color: "text-indigo-500 bg-indigo-500/10"
    },
    {
      label: "GitHub",
      value: "GitHub Profile",
      href: "https://github.com/naveenvkumar408-dev",
      Icon: FiGithub,
      color: "text-slate-800 bg-slate-800/10 dark:text-slate-200 dark:bg-slate-200/10"
    },
    {
      label: "Instagram",
      value: "Insta profile",
      href: "https://www.instagram.com/navin_creatives?igsh=NWwxcG9yajk5aHA4",
      Icon: FiInstagram,
      color: "text-pink-800 bg-pink-500/10 dark:text-pink-900 dark:bg-pink-800/10"
    }
  ];

  return (
    <MotionSection id="contact" className="px-5 pt-16 pb-8 bg-slate-50 dark:bg-slate-950">
      <div className="mx-auto max-w-6xl">
        <div className="mb-8 text-center">
          <h2 className="text-center text-3xl font-bold text-blue-600 dark:text-white">
            Contact
          </h2>
        </div>

        <div className="flex justify-center">
          <Card className="w-full max-w-[600px] bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800/80 p-6">
            <h3 className="text-xl font-bold text-slate-950 dark:text-white mb-6">
              Get in Touch
            </h3>

            <div className="space-y-4">
              {contactDetails.map(({ label, value, href, Icon, color }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-3 rounded-xl hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors group"
                >
                  <div className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-lg ${color} transition-transform group-hover:scale-110`}>
                    <Icon className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-slate-400 dark:text-slate-500 uppercase tracking-wider">
                      {label}
                    </p>
                    <p className="text-sm font-semibold text-slate-800 dark:text-slate-200 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors break-all">
                      {value}
                    </p>
                  </div>
                </a>
              ))}
            </div>
          </Card>
        </div>
      </div>
    </MotionSection>
  );
};

export default Contact;
