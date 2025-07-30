'use client';
import { useState } from 'react';
import Image from 'next/image';
import { motion } from 'motion/react';
import { assets } from '@/assets/assets';

const Contact = () => {
  const [result, setResult] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setResult('Sending…');

    const form = e.currentTarget;
    const data = new FormData(e.currentTarget);
    data.append('access_key', '68ecde17-d368-45d9-835a-7999c661eb71'); //my key
    data.append('subject', 'Portfolio contact form');

    const res = await fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      body: data,
    });
    const json = await res.json();

    setResult(json.success ? 'Thanks! I’ll reply soon.' : `Error: ${json.message}`);
    if (json.success) form.reset();
  };

  return (
    <motion.section
      id="contact"
      className='w-full px-[12%] py-20 scroll-mt-20
                 bg-[url("/footer-bg-color.png")] bg-no-repeat bg-center bg-[length:90%_auto] dark:bg-none'
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      {/* Heading */}
      <motion.h4
        className="text-center mb-2 text-lg font-Ovo"
        initial={{ y: -20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.5 }}
      >
        Connect with me
      </motion.h4>

      <motion.h2
        className="text-center text-5xl font-Ovo"
        initial={{ y: -20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.5 }}
      >
        Get in touch
      </motion.h2>

      <motion.p
        className="text-center max-w-2xl mx-auto mt-5 mb-12 font-Ovo"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.7, duration: 0.5 }}
      >
        I&apos;d love to hear from you! If you have any questions, comments, or feedback, please use the form below.
      </motion.p>

      {/* Contact form */}
      <motion.form
        onSubmit={handleSubmit}
        className="max-w-2xl mx-auto"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.9, duration: 0.5 }}
      >
        {/* Honeypot */}
        <input type="checkbox" name="botcheck" className="hidden" />

        <div className="grid gap-6 mt-10 mb-8 grid-cols-1 sm:grid-cols-2">
          <input
            name="name"
            type="text"
            placeholder="Your name"
            autoComplete="name"
            required
            className="flex-1 p-3 outline-none border-[0.5px] border-gray-400 rounded-md bg-white
                       dark:bg-darkHover/30 dark:border-white/90"
          />
          <input
            name="email"
            type="email"
            placeholder="you@example.com"
            autoComplete="email"
            required
            className="flex-1 p-3 outline-none border-[0.5px] border-gray-400 rounded-md bg-white
                       dark:bg-darkHover/30 dark:border-white/90"
          />
        </div>

        <label className="sr-only" htmlFor="message">Your message</label>
        <textarea
          id="message"
          name="message"
          rows={6}
          placeholder="Your message"
          required
          className="w-full p-4 outline-none border-[0.5px] border-gray-400 rounded-md bg-white mb-6
                     dark:bg-darkHover/30 dark:border-white/90 resize-none"
        />

        <motion.button
          type="submit"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.3 }}
          className="py-3 px-8 flex items-center gap-2 bg-black/80 text-white rounded-full mx-auto
                     hover:bg-black duration-500 dark:bg-transparent dark:border dark:border-white/70
                     dark:hover:bg-darkHover"
        >
          Send Message
          <Image src={assets.right_arrow_white} alt="" className="w-4 h-4" />
        </motion.button>

        <p className="mt-4 text-center">{result}</p>
      </motion.form>

      {/* Calendly link — optional */}
      <p className="mt-10 text-center text-sm text-neutral-500">
        Prefer a call?{' '}
        <a
          href="https://calendly.com/dahiyahimanshu27"   /* TODO: replace or remove */
          className="underline text-accent"
          target="_blank"
          rel="noopener noreferrer"
        >
          Book 30&nbsp;min on my Calendly »
        </a>
      </p>
    </motion.section>
  );
};

export default Contact;
