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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('Sending message...');

    try {
      const response = await fetch(
        `${import.meta.env.VITE_API_URL}/send-email`,
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(formData),
        }
      );

      if (response.ok) {
        setStatus('Your message has been sent!');
        setFormData({ name: '', email: '', message: '' });
      } else {
        setStatus('Something went wrong. Please try again.');
      }
    } catch {
      setStatus('Error sending message. Please try again.');
    }

    setTimeout(() => setStatus(null), 4000);
  };

  return (
    <section
      id="contact"
      className="pt-20 text-gunmetal-black dark:text-salt-white font-inter"
    >
      <motion.h2
        className="text-4xl font-bold text-center mb-10"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Let's Talk
      </motion.h2>

      <motion.div
        className=" bg-gunmetal-black dark:bg-salt-white p-8 rounded-2xl shadow-lg"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <form onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label
                htmlFor="name"
                className="block text-lg text-salt-white dark:text-gunmetal-black font-medium mb-2"
              >
                Your Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                className="w-full p-3 border border-salt-white dark:border-gunmetal-black text-salt-white dark:text-gunmetal-black rounded-md"
                placeholder="Your name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>

            <div>
              <label
                htmlFor="email"
                className="block text-lg text-salt-white dark:text-gunmetal-black font-medium mb-2"
              >
                Your Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="w-full p-3 border border-salt-white dark:border-gunmetal-black text-salt-white dark:text-gunmetal-black rounded-md"
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
              className="block text-lg text-salt-white dark:text-gunmetal-black font-medium mb-2"
            >
              Your Message
            </label>
            <textarea
              id="message"
              name="message"
              className="w-full p-3 border border-salt-white dark:border-gunmetal-black text-salt-white dark:text-gunmetal-black rounded-md"
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
              flairColor="bg-mint-green dark:bg-mint-green"
              backgroundColor="bg-salt-white dark:bg-gunmetal-black"
              textColor="text-gunmetal-black dark:text-salt-white"
              hoverBackgroundColor="hover:bg-mint-green dark:hover:bg-gunmetal-black"
              hoverTextColor="hover:text-gunmetal-black dark:hover:text-gunmetal-black"
            />
          </div>
        </form>

        {status ? (
          <div className="mt-6 text-center text-mint-green font-semibold">
            {status}
          </div>
        ) : null}
      </motion.div>
    </section>
  );
}
