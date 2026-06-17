import { Mail, Linkedin, Github } from "lucide-react";
import { personalInfo, styling } from "@/config/portfolio-config";

const Contact = () => {
  return (
    <section id="contact" className={`section-padding bg-gradient-to-br ${styling.gradients.contact}`}>
      <div className="container mx-auto">
        <h2 className="section-title">Get in Touch</h2>
        <div className="max-w-md mx-auto text-center space-y-6">
          <h3 className="text-xl font-semibold text-primary">Contact Information</h3>
          <div className="flex flex-col items-center space-y-4">
            <a
              href={`mailto:${personalInfo.email}`}
              className="flex items-center space-x-3 text-gray-600 hover:text-secondary transition-colors"
            >
              <Mail className="w-5 h-5" />
              <span>{personalInfo.email}</span>
            </a>
            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-3 text-gray-600 hover:text-secondary transition-colors"
            >
              <Linkedin className="w-5 h-5" />
              <span>LinkedIn Profile</span>
            </a>
            <a
              href={personalInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-3 text-gray-600 hover:text-secondary transition-colors"
            >
              <Github className="w-5 h-5" />
              <span>GitHub Profile</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
