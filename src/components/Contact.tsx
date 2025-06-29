import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Github, Linkedin, Mail } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [errors, setErrors] = useState({ name: '', email: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const isValidEmail = (email: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: '' });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const { name, email, message } = formData;

    const newErrors = {
      name: name ? '' : 'Name is required',
      email: email ? (isValidEmail(email) ? '' : 'Enter a valid email') : 'Email is required',
      message: message ? '' : 'Message is required',
    };

    setErrors(newErrors);
    if (Object.values(newErrors).some((err) => err !== '')) return;

    setIsSubmitting(true);
    try {
      const response = await fetch('https://getform.io/f/allzgora', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({ name, email, message }),
      });

      if (response.ok) {
        toast({
          title: 'Message sent successfully!',
          description: "I'll get back to you soon. Thanks for reaching out!",
        });
        setFormData({ name: '', email: '', message: '' });
      } else {
        toast({ title: 'Error!', description: 'Something went wrong. Please try again later.' });
      }
    } catch {
      toast({ title: 'Submission failed', description: 'Network issue or something went wrong.' });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-24 bg-slate-900 text-white">
      <div className="max-w-6xl mx-auto px-6">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4 text-violet-400">Contact Me</h2>
          <p className="text-lg text-slate-400">Let’s connect! Send me a message below.</p>
        </motion.div>

        {/* Grid Layout */}
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Name */}
            <div>
              <label htmlFor="name" className="text-sm text-slate-300">Name</label>
              <Input
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="bg-slate-800 text-white border border-slate-700 focus:border-violet-500"
                placeholder="Your name"
              />
              {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
            </div>

            {/* Email */}
            <div>
              <label htmlFor="email" className="text-sm text-slate-300">Email</label>
              <Input
                id="email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                className="bg-slate-800 text-white border border-slate-700 focus:border-violet-500"
                placeholder="Your email"
              />
              {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
            </div>

            {/* Message */}
            <div>
              <label htmlFor="message" className="text-sm text-slate-300">Message</label>
              <Textarea
                id="message"
                name="message"
                rows={5}
                value={formData.message}
                onChange={handleChange}
                className="bg-slate-800 text-white border border-slate-700 focus:border-violet-500"
                placeholder="Your message"
              />
              {errors.message && <p className="text-red-500 text-sm mt-1">{errors.message}</p>}
            </div>

            {/* Submit */}
            <Button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-violet-600 hover:bg-violet-700 text-white text-lg py-3 rounded-lg shadow-md"
            >
              {isSubmitting ? 'Sending...' : 'Send Message'}
            </Button>
          </form>

          {/* Info Section */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="bg-slate-800/60 backdrop-blur-md border border-slate-700 p-8 rounded-2xl shadow-lg"
          >
            <h3 className="text-2xl font-semibold text-violet-300 mb-4">Let’s Collaborate</h3>
            <p className="text-slate-400 mb-6">
              Looking for a developer, collaborator, or just want to connect? Let’s talk!
            </p>

            <div className="space-y-4">
              <a
                href="mailto:smaswini006@gmail.com"
                className="flex items-center gap-3 text-slate-300 hover:text-violet-400 transition-colors"
              >
                <Mail className="w-5 h-5" />
                smaswini006@gmail.com
              </a>

              <a
                href="https://github.com/Aswini1008"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-slate-300 hover:text-violet-400 transition-colors"
              >
                <Github className="w-5 h-5" />
                GitHub
              </a>

              <a
                href="https://www.linkedin.com/in/aswini-sm-97292629a"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-slate-300 hover:text-violet-400 transition-colors"
              >
                <Linkedin className="w-5 h-5" />
                LinkedIn
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
