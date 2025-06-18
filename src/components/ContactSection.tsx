import { useState, type ChangeEvent, type FormEvent } from "react";
import { ToastContainer, toast } from "react-toastify";
import { motion } from "framer-motion";
import "react-toastify/dist/ReactToastify.css";
const MAIL_API = import.meta.env.VITE_MAIL_API || "http://localhost:4000";

export const ContactSection = () => {
  const [status, setStatus] = useState(""); // success | error | loading

  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    message: "",
  });

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("loading");
    try {
      const res = await fetch(`${MAIL_API}/api/contact`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      setStatus("success");
      toast.success("Message sent!", { position: "bottom-center" }); //! 🔝
      setForm({ firstName: "", lastName: "", email: "", message: "" });
    } catch (err) {
      console.error(err);
      setStatus("error");
      toast.error("Error sending message.", { position: "bottom-center" }); //! 🔝
    }
  };

  console.log("MAIL_API:", import.meta.env.VITE_MAIL_API);

  return (
    <section
      id="contact"
      className="min-h-screen flex items-center justify-center p-8"
    >
      <motion.div
        className="flex flex-col md:flex-row rounded-2xl justify-center  overflow-hidden w-full max-w-5xl"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.4 }}
      >
        {/* Left Side - Contact Info */}
        <div className="md:w-1/ p-8 flex flex-col justify-center text-secondary gap-2">
          <h2 className="text-3xl font-bold mb-4 ">Contact Information</h2>
          <div>
            <h3 className="font-bold text-highlight">Email</h3>
            <p className="mb-2">tonyhchiii@gmail.com</p>
          </div>
          <div>
            <h3 className="font-bold text-highlight">Phone</h3>
            <p className="mb-2">(917) 742-1112</p>
          </div>
          <div>
            <h3 className="font-bold text-highlight">Location</h3>
            <p className="mb-2">New York, NY</p>
          </div>
        </div>

        {/* Right Side - Contact Form */}
        <form
          onSubmit={handleSubmit}
          className="h-[420px] p-8 flex flex-col gap-5 bg-tertiary shadow-lg rounded-2xl text-highlight"
        >
          <h1 className="font-bold text-highlight text-2xl md:text-3xl">
            Send a Message!
          </h1>
          <div className="flex gap-4">
            <input
              type="text"
              name="firstName"
              placeholder="First Name"
              onChange={handleChange}
              className="w-1/2 p-2 border border-highlight placeholder-highlight rounded focus:outline-none"
              required
            />
            <input
              type="text"
              name="lastName"
              placeholder="Last Name"
              onChange={handleChange}
              className="w-1/2 p-2 border border-highlight placeholder-highlight rounded focus:outline-none"
              required
            />
          </div>
          <input
            type="email"
            name="email"
            placeholder="Email"
            onChange={handleChange}
            className="p-2 border border-highlight placeholder-highlight rounded focus:outline-none"
            required
          />
          <textarea
            name="message"
            placeholder="Your Message"
            onChange={handleChange}
            className="p-2 border border-highlight placeholder-highlight rounded h-32 focus:outline-none"
            required
          ></textarea>
          <button
            type="submit"
            onSubmit={(e) => {
              e.preventDefault();
            }}
            className="transition-all transform-gpu hover:scale-105 hover:border-1 shadow-highlight px-4 py-2 rounded-2xl bg-primary text-highlight"
          >
            {status === "loading" ? "Sending..." : "Send Message"}
          </button>
        </form>
      </motion.div>
      <ToastContainer
        position="bottom-center"
        autoClose={3000}
        hideProgressBar
        newestOnTop={false}
        closeOnClick
        pauseOnHover
      />
    </section>
  );
};
