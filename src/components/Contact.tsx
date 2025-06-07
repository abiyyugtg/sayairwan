import React, { useState, useRef, useEffect } from "react";
import { useInView } from "../hooks/useInView";
import emailjs from "@emailjs/browser"; // Pastikan sudah install emailjs
import {
  Phone,
  Mail,
  MapPin,
  Instagram,
  Linkedin,
  Github,
  Send,
  CheckCircle,
  AlertCircle,
} from "lucide-react";

const Contact: React.FC = () => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, threshold: 0.1 });

  // State untuk form
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<
    "idle" | "success" | "error"
  >("idle");
  useEffect(() => {
    if (submitStatus === "success" || submitStatus === "error") {
      const timer = setTimeout(() => {
        setSubmitStatus("idle");
      }, 3000); // 3 detik
      return () => clearTimeout(timer);
    }
  }, [submitStatus]);

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

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // SOLUSI 1: Menggunakan EmailJS (Recommended)
  const sendEmailWithEmailJS = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus("idle");

    try {
      // Install: npm install @emailjs/browser
      // Import: import emailjs from '@emailjs/browser';

      // Konfigurasi EmailJS (ganti dengan data Anda)
      const serviceId = "service_yum19q8"; // Dari EmailJS dashboard
      const templateId = "template_g6xlnis"; // Dari EmailJS dashboard
      const publicKey = "Ry_x12UNkOrlz7p30"; // Dari EmailJS dashboard

      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        message: formData.message,
        to_name: "Irwan Abiyyu", // Nama Anda
      };

      // Uncomment jika sudah setup EmailJS
      await emailjs.send(serviceId, templateId, templateParams, publicKey);

      // Simulasi berhasil (hapus ini jika sudah setup EmailJS)
      // await new Promise((resolve) => setTimeout(resolve, 1000));

      setSubmitStatus("success");
      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      console.error("Error:", error);
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  // SOLUSI 2: Menggunakan Web3Forms (Alternative)
  // const sendEmailWithWeb3Forms = async (
  //   e: React.FormEvent<HTMLFormElement>
  // ) => {
  //   e.preventDefault();
  //   setIsSubmitting(true);
  //   setSubmitStatus("idle");

  //   try {
  //     const formDataObj = new FormData();
  //     formDataObj.append("access_key", "YOUR_WEB3FORMS_ACCESS_KEY"); // Dari web3forms.com
  //     formDataObj.append("name", formData.name);
  //     formDataObj.append("email", formData.email);
  //     formDataObj.append("message", formData.message);

  //     const response = await fetch("https://api.web3forms.com/submit", {
  //       method: "POST",
  //       body: formDataObj,
  //     });

  //     if (response.ok) {
  //       setSubmitStatus("success");
  //       setFormData({ name: "", email: "", message: "" });
  //     } else {
  //       throw new Error("Failed to send");
  //     }
  //   } catch (error) {
  //     console.error("Error:", error);
  //     setSubmitStatus("error");
  //   } finally {
  //     setIsSubmitting(false);
  //   }
  // };

  // SOLUSI 3: Direct WhatsApp redirect
  // const sendToWhatsApp = () => {
  //   const message = `Halo! Saya ${formData.name} (${formData.email}). ${formData.message}`;
  //   const whatsappUrl = `https://wa.me/6285229599463?text=${encodeURIComponent(
  //     message
  //   )}`;
  //   window.open(whatsappUrl, "_blank");

  //   setFormData({ name: "", email: "", message: "" });
  //   setSubmitStatus("success");
  // };

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
            <div className="grid grid-cols-1 lg:grid-cols-2">
              {/* Contact Information */}
              <div className="bg-gradient-to-br from-purple-600 to-indigo-700 p-6 md:p-8 text-white">
                <h3 className="text-xl md:text-2xl font-bold mb-6">
                  Contact Information
                </h3>

                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="rounded-full p-2 bg-white/10 flex-shrink-0">
                      <Phone size={18} />
                    </div>
                    <div className="min-w-0">
                      <p className="text-sm text-purple-200">Phone</p>
                      <a
                        href="tel:+6285229599463"
                        className="hover:underline transition-all duration-300 text-sm md:text-base break-all"
                      >
                        +62 852 2959 9463
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="rounded-full p-2 bg-white/10 flex-shrink-0">
                      <Mail size={18} />
                    </div>
                    <div className="min-w-0">
                      <p className="text-sm text-purple-200">Email</p>
                      <a
                        href="mailto:nawriabiyyu@gmail.com"
                        className="hover:underline transition-all duration-300 text-sm md:text-base break-all"
                      >
                        nawriabiyyu@gmail.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="rounded-full p-2 bg-white/10 flex-shrink-0">
                      <MapPin size={18} />
                    </div>
                    <div>
                      <p className="text-sm text-purple-200">Location</p>
                      <p className="text-sm md:text-base">
                        Yogyakarta, Indonesia
                      </p>
                    </div>
                  </div>
                </div>

                <div className="mt-8 md:mt-12">
                  <p className="text-purple-200 mb-4 text-sm md:text-base">
                    Connect with me
                  </p>
                  <div className="flex flex-wrap gap-3">
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
              <div className="p-6 md:p-8">
                <h3 className="text-xl md:text-2xl font-bold mb-6 text-gray-800 dark:text-white">
                  Send a Message
                </h3>

                {/* Status Messages */}
                {submitStatus === "success" && (
                  <div className="mb-4 p-3 bg-green-100 dark:bg-green-900 border border-green-400 text-green-700 dark:text-green-300 rounded-lg flex items-center gap-2">
                    <CheckCircle size={18} />
                    <span className="text-sm">Pesan berhasil dikirim!</span>
                  </div>
                )}

                {submitStatus === "error" && (
                  <div className="mb-4 p-3 bg-red-100 dark:bg-red-900 border border-red-400 text-red-700 dark:text-red-300 rounded-lg flex items-center gap-2">
                    <AlertCircle size={18} />
                    <span className="text-sm">
                      Gagal mengirim pesan. Silakan coba lagi.
                    </span>
                  </div>
                )}

                <form className="space-y-4" onSubmit={sendEmailWithEmailJS}>
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
                    >
                      Your Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 focus:ring-2 focus:ring-purple-500 focus:border-transparent bg-white dark:bg-gray-800 text-gray-900 dark:text-white text-sm md:text-base"
                      placeholder="John Doe"
                      required
                      disabled={isSubmitting}
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
                    >
                      Your Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 focus:ring-2 focus:ring-purple-500 focus:border-transparent bg-white dark:bg-gray-800 text-gray-900 dark:text-white text-sm md:text-base"
                      placeholder="john@example.com"
                      required
                      disabled={isSubmitting}
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="message"
                      className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
                    >
                      Your Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      value={formData.message}
                      onChange={handleInputChange}
                      className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 focus:ring-2 focus:ring-purple-500 focus:border-transparent bg-white dark:bg-gray-800 text-gray-900 dark:text-white text-sm md:text-base resize-none"
                      placeholder="How can I help you?"
                      required
                      disabled={isSubmitting}
                    ></textarea>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-3">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="flex-1 px-6 py-3 rounded-lg bg-gradient-to-r from-purple-500 to-indigo-600 text-white font-medium hover:from-purple-600 hover:to-indigo-700 transition-all duration-300 shadow-lg hover:shadow-purple-500/30 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2 text-sm md:text-base"
                    >
                      {isSubmitting ? (
                        <>
                          <div className="animate-spin rounded-full h-4 w-4 border-2 border-white border-t-transparent"></div>
                          Sending...
                        </>
                      ) : (
                        <>
                          <Send size={16} />
                          Send Email
                        </>
                      )}
                    </button>

                    {/* <button
                      type="button"
                      onClick={sendToWhatsApp}
                      disabled={!formData.name || !formData.message}
                      className="flex-1 px-6 py-3 rounded-lg bg-gradient-to-r from-green-500 to-green-600 text-white font-medium hover:from-green-600 hover:to-green-700 transition-all duration-300 shadow-lg hover:shadow-green-500/30 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2 text-sm md:text-base"
                    >
                      <Phone size={16} />
                      WhatsApp
                    </button> */}
                  </div>
                </form>

                <div className="mt-6 text-center">
                  <p className="text-xs text-gray-500 dark:text-gray-400">
                    * Required fields
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
