import React, { useRef } from "react";
import { useInView } from "../hooks/useInView";
import { Phone, Mail, MapPin, Instagram, Linkedin, Github } from "lucide-react";
import emailjs from "emailjs-com"; // Import EmailJS

const Contact: React.FC = () => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, threshold: 0.1 });

  const socialLinks = [
    {
      name: "WhatsApp",
      icon: <Phone size={20} />,
      href: "https://wa.me/6285229599463",
      color: "bg-green-500 hover:bg-green-600",
    },
    {
      name: "Instagram",
      icon: <Instagram size={20} />,
      href: "https://instagram.com/irwannaby",
      color: "bg-pink-500 hover:bg-pink-600",
    },
    {
      name: "LinkedIn",
      icon: <Linkedin size={20} />,
      href: "https://www.linkedin.com/in/irwan-abiyyu-saputra-042896343",
      color: "bg-blue-600 hover:bg-blue-700",
    },
    {
      name: "GitHub",
      icon: <Github size={20} />,
      href: "https://github.com/abiyyugtg",
      color:
        "bg-gray-800 hover:bg-black dark:bg-gray-700 dark:hover:bg-gray-600",
    },
  ];

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault(); // Mencegah reload halaman

    emailjs
      .sendForm(
        "YOUR_SERVICE_ID", // Ganti dengan Service ID Anda
        "YOUR_TEMPLATE_ID", // Ganti dengan Template ID Anda
        e.currentTarget, // Menggunakan form yang dikirim
        "YOUR_USER_ID" // Ganti dengan User ID Anda
      )
      .then(
        (result: { text: any }) => {
          console.log(result.text);
          alert("Message sent successfully!");
        },
        (error: { text: any }) => {
          console.log(error.text);
          alert("Failed to send message, please try again.");
        }
      );
  };

  return (
    <section
      id="contact"
      ref={ref}
      className="py-20 bg-gray-50 dark:bg-gray-800 transition-colors duration-300"
    >
      <div className="container mx-auto px-4">
        <div
          className={`max-w-4xl mx-auto transition-all duration-1000 ease-out ${
            isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-6 text-gray-800 dark:text-white">
            Get In Touch
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-purple-500 to-indigo-600 mx-auto mb-8 rounded-full"></div>

          <div className="bg-white dark:bg-gray-900 rounded-2xl shadow-xl overflow-hidden">
            <div className="grid grid-cols-1 md:grid-cols-2">
              {/* Contact Information */}
              <div className="bg-gradient-to-br from-purple-600 to-indigo-700 p-8 text-white">
                <h3 className="text-2xl font-bold mb-6">Contact Information</h3>

                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="rounded-full p-2 bg-white/10">
                      <Phone size={20} />
                    </div>
                    <div>
                      <p className="text-sm text-purple-200">Phone</p>
                      <a
                        href="tel:+6285229599463"
                        className="hover:underline transition-all duration-300"
                      >
                        +62 852 2959 9463
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="rounded-full p-2 bg-white/10">
                      <Mail size={20} />
                    </div>
                    <div>
                      <p className="text-sm text-purple-200">Email</p>
                      <a
                        href="mailto:nawriabiyyu@gmail.com"
                        className="hover:underline transition-all duration-300"
                      >
                        nawriabiyyu@gmail.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="rounded-full p-2 bg-white/10">
                      <MapPin size={20} />
                    </div>
                    <div>
                      <p className="text-sm text-purple-200">Location</p>
                      <p>Yogyakarta, Indonesia</p>
                    </div>
                  </div>
                </div>

                <div className="mt-12">
                  <p className="text-purple-200 mb-4">Connect with me</p>
                  <div className="flex gap-4">
                    {socialLinks.map((link) => (
                      <a
                        key={link.name}
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={link.name}
                        className="p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors duration-300"
                      >
                        {link.icon}
                      </a>
                    ))}
                  </div>
                </div>
              </div>

              {/* Contact Form */}
              <div className="p-8">
                <h3 className="text-2xl font-bold mb-6 text-gray-800 dark:text-white">
                  Send a Message
                </h3>

                <form className="space-y-4" onSubmit={sendEmail}>
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
                    >
                      Your Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name" // Tambahkan name untuk EmailJS
                      className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 focus:ring-2 focus:ring-purple-500 focus:border-transparent bg-white dark:bg-gray-800 text-gray-900 dark:text-white"
                      placeholder="John Doe"
                      required // Tambahkan required
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
                    >
                      Your Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email" // Tambahkan name untuk EmailJS
                      className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 focus:ring-2 focus:ring-purple-500 focus:border-transparent bg-white dark:bg-gray-800 text-gray-900 dark:text-white"
                      placeholder="john@example.com"
                      required // Tambahkan required
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="message"
                      className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
                    >
                      Your Message
                    </label>
                    <textarea
                      id="message"
                      name="message" // Tambahkan name untuk EmailJS
                      rows={4}
                      className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 focus:ring-2 focus:ring-purple-500 focus:border-transparent bg-white dark:bg-gray-800 text-gray-900 dark:text-white"
                      placeholder="How can I help you?"
                      required // Tambahkan required
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="w-full px-6 py-3 rounded-lg bg-gradient-to-r from-purple-500 to-indigo-600 text-white font-medium hover:from-purple-600 hover:to-indigo-700 transition-all duration-300 shadow-lg hover:shadow-purple-500/30"
                  >
                    Send Message
                  </button>
                </form>

                {/* <div className="mt-6 text-center">
                  <a
                    href="#"
                    className="text-purple-600 dark:text-purple-400 hover:underline text-sm"
                  >
                    Download CV
                  </a>
                </div> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
