import React, { useRef, useState } from "react";
import { Toaster, toast } from "react-hot-toast";
import emailjs, { EmailJSResponseStatus } from "@emailjs/browser";

const Contact = () => {
  const formRef = useRef<HTMLFormElement>(null);

  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  // ✅ Handle input changes
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  // ✅ Handle form submit
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    try {
      await emailjs.send(
        "service_1m8pf3c", // your EmailJS service ID
        "template_6yt2x1n", // your EmailJS template ID
        {
          name: form.name,
          to_name: "Parth Nandwalkar",
          email: form.email,
          to_email: "nandwalkarparth1234@gmail.com",
          message: form.message,
        },'5WLnX7M3v6mFAqYxh'
      );

      toast.success("Message sent successfully 🚀", {
        style: {
          background: "#1f1f1f",
          color: "#fff",
          border: "1px solid #333",
        },
        iconTheme: {
          primary: "#00FFFF",
          secondary: "#1f1f1f",
        },
      });

      setForm({ name: "", email: "", message: "" });
    } catch (error) {
      console.error("EmailJS Error:", error);

      toast.error("Failed to send message ❌", {
        style: {
          background: "#1f1f1f",
          color: "#fff",
          border: "1px solid #333",
        },
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="c-space my-20" id="contact">
      {/* ✅ Toast Container */}
      <Toaster position="top-center" reverseOrder={false} />

      <div className="relative min-h-screen flex flex-col items-center justify-center">
        <img
          src="/assets/terminal.png"
          alt="terminal background"
          className="absolute inset-0 min-h-screen "
        />

        <div className="contact-container z-10 max-w-2xl w-full -md pt-20 rounded-2xl shadow-lg">
          <h3 className="head-text text-white text-center mb-4">
            Let’s Work Together
          </h3>
          <p className="text-lg text-gray-300 text-center mb-8">
            Whether you're looking to build a new website, improve your existing
            platform, or bring a unique project to life, I'm here to help.
          </p>

          {/* ✅ Contact Form */}
          <form
            ref={formRef}
            onSubmit={handleSubmit}
            className="flex flex-col space-y-6"
          >
            <label className="flex flex-col space-y-2">
              <span className="field-label text-gray-200 font-medium">
                Full Name
              </span>
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                required
                className="bg-transparent border border-gray-600 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-cyan-400"
                placeholder="John Doe"
              />
            </label>

            <label className="flex flex-col space-y-2">
              <span className="field-label text-gray-200 font-medium">
                Email
              </span>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                required
                className="bg-transparent border border-gray-600 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-cyan-400"
                placeholder="john@example.com"
              />
            </label>

            <label className="flex flex-col space-y-2">
              <span className="field-label text-gray-200 font-medium">
                Message
              </span>
              <textarea
                name="message"
                value={form.message}
                onChange={handleChange}
                rows={5}
                required
                className="bg-transparent border border-gray-600 rounded-lg px-4 py-3 text-white resize-none focus:outline-none focus:ring-2 focus:ring-cyan-400"
                placeholder="Write your message..."
              ></textarea>
            </label>

            <button
              type="submit"
              disabled={loading}
              className="bg-neutral-900 hover:bg-neutral-800 text-white font-semibold py-3 rounded-lg transition duration-200 border border-gray-700 hover:shadow-[0_0_10px_rgba(255,255,255,0.1)]"
            >
              {loading ? "Sending..." : "Send Message"}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;