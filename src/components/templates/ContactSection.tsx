import { useState } from 'react';
import { motion } from 'framer-motion';
import { FancyButton } from '../molecules/FancyButton';
import { z } from 'zod';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';

export default function ContactSection() {
  type ContactFormData = z.infer<typeof contactSchema>;
  const contactSchema = z.object({
    name: z.string().min(1, 'Name is required'),
    email: z.string().min(1, 'Email is required').email('Invalid email'),
    message: z.string().min(1, 'Message is required'),
    website: z.string().optional(),
  });

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  });

  const [status, setStatus] = useState<string | null>(null);

  const onSubmit = async (data: ContactFormData) => {
    setStatus('Sending message...');

    try {
      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        setStatus('Your message has been sent!');
        reset();
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
      className="text-gunmetal-black dark:text-salt-white font-inter"
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
        className="bg-gunmetal-black border border-salt-white p-8 rounded-2xl shadow-lg"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <form onSubmit={handleSubmit(onSubmit)} noValidate>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label htmlFor="name" className="block text-lg font-medium mb-2">
                Your Name
              </label>
              <input
                id="name"
                {...register('name')}
                className="w-full p-3 border rounded-md text-salt-white bg-transparent"
                placeholder="Your name"
              />
              {errors.name && (
                <p className="text-red-400 mt-1 text-sm">
                  {errors.name.message}
                </p>
              )}
            </div>

            <div>
              <label htmlFor="email" className="block text-lg font-medium mb-2">
                Your Email
              </label>
              <input
                id="email"
                type="email"
                {...register('email')}
                className="w-full p-3 border rounded-md text-salt-white bg-transparent"
                placeholder="Your email"
              />
              {errors.email && (
                <p className="text-red-400 mt-1 text-sm">
                  {errors.email.message}
                </p>
              )}
            </div>
          </div>

          <div className="mt-6">
            <label htmlFor="message" className="block text-lg font-medium mb-2">
              Your Message
            </label>
            <textarea
              id="message"
              rows={6}
              {...register('message')}
              className="w-full p-3 border rounded-md text-salt-white bg-transparent"
              placeholder="Write your message here..."
            />
            {errors.message && (
              <p className="text-red-400 mt-1 text-sm">
                {errors.message.message}
              </p>
            )}

            <input
              type="text"
              {...register('website')}
              style={{ display: 'none' }}
              tabIndex={-1}
              autoComplete="off"
            />
          </div>

          <div className="mt-6 text-center">
            <FancyButton
              type="submit"
              title={isSubmitting ? 'Sending...' : 'Send Message'}
              flairColor="bg-mint-green dark:bg-mint-green"
              backgroundColor="bg-salt-white"
              textColor="text-gunmetal-black"
              hoverBackgroundColor="hover:bg-salt-white"
              hoverTextColor="hover:text-gunmetal-black dark:hover:text-gunmetal-black"
            />
          </div>
        </form>

        {status && (
          <div className="mt-6 text-center text-mint-green font-semibold">
            {status}
          </div>
        )}
      </motion.div>
    </section>
  );
}
