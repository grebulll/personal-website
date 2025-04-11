import { useState } from 'react';
import { motion } from 'framer-motion';
import { FancyButton } from '../molecules/FancyButton';

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [status, setStatus] = useState<string | null>(null);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('Your message has been sent! ✨');
    setFormData({ name: '', email: '', message: '' });
    setTimeout(() => setStatus(null), 4000);
  };

  return (
    <section id="contact" className="pt-20 text-gunmetal-black font-inter">
      <motion.h2
        className="text-4xl font-bold text-center mb-10"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Let's Talk
      </motion.h2>

      <motion.div
        className=" bg-gunmetal-black p-8 rounded-2xl shadow-lg"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <form onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label
                htmlFor="name"
                className="block text-lg text-salt-white font-medium mb-2"
              >
                Your Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                className="w-full p-3 border border-salt-white text-salt-white rounded-md"
                placeholder="Your name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>

            <div>
              <label
                htmlFor="email"
                className="block text-lg text-salt-white font-medium mb-2"
              >
                Your Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="w-full p-3 border border-salt-white text-salt-white rounded-md"
                placeholder="Your email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
          </div>

          <div className="mt-6">
            <label
              htmlFor="message"
              className="block text-lg text-salt-white font-medium mb-2"
            >
              Your Message
            </label>
            <textarea
              id="message"
              name="message"
              className="w-full p-3 border border-salt-white text-salt-white rounded-md"
              placeholder="Write your message here..."
              rows={6}
              value={formData.message}
              onChange={handleChange}
              required
            />
          </div>

          <div className="mt-6 text-center">
            <FancyButton
              type="submit"
              title="Send Message"
              flairColor="bg-neon-blue"
              backgroundColor="bg-salt-white"
              textColor="text-gunmetal-black"
              hoverBackgroundColor="hover:bg-salt-white"
              hoverTextColor="hover:text-salt-white"
            />
          </div>
        </form>

        {status ? (
          <div className="mt-6 text-center text-green-500 font-semibold">
            {status}
          </div>
        ) : null}
      </motion.div>
    </section>
  );
}
