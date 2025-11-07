import React, { useState } from 'react';
import { Mail } from 'lucide-react';

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [sent, setSent] = useState(false);

  const onChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const onSubmit = (e) => {
    e.preventDefault();
    // For now, simulate a send. Backend can be added later.
    setSent(true);
  };

  return (
    <section id="contact" className="border-t border-white/10 bg-neutral-950/60 py-16">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-8 flex items-center gap-3">
          <Mail className="h-5 w-5 text-blue-300" />
          <h2 className="text-2xl font-semibold sm:text-3xl">Get in touch</h2>
        </div>
        <div className="grid gap-10 md:grid-cols-2">
          <p className="text-white/70">
            Want to collaborate or chat about robotics and programming? Feel free to reach out.
            Im always excited to learn and build new things.
          </p>
          <form onSubmit={onSubmit} className="grid gap-4">
            <input
              name="name"
              value={form.name}
              onChange={onChange}
              placeholder="Your name"
              className="rounded-md border border-white/10 bg-white/5 px-3 py-2 text-sm outline-none placeholder:text-white/40 focus:border-white/20"
              required
            />
            <input
              name="email"
              type="email"
              value={form.email}
              onChange={onChange}
              placeholder="Your email"
              className="rounded-md border border-white/10 bg-white/5 px-3 py-2 text-sm outline-none placeholder:text-white/40 focus:border-white/20"
              required
            />
            <textarea
              name="message"
              value={form.message}
              onChange={onChange}
              placeholder="Your message"
              rows={5}
              className="rounded-md border border-white/10 bg-white/5 px-3 py-2 text-sm outline-none placeholder:text-white/40 focus:border-white/20"
              required
            />
            <button
              type="submit"
              className="rounded-md bg-blue-500 px-4 py-2 text-sm font-medium text-white shadow transition hover:bg-blue-400 focus:outline-none focus:ring-2 focus:ring-blue-400"
            >
              Send Message
            </button>
            {sent && (
              <p className="text-sm text-green-400">Thanks! Your message has been noted.</p>
            )}
          </form>
        </div>
        <p className="mt-12 text-center text-xs text-white/40">© {new Date().getFullYear()} Student Portfolio</p>
      </div>
    </section>
  );
}
