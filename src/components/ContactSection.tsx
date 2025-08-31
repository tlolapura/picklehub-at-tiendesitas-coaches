'use client';

import React, { useState } from 'react';
import Button from '@/components/ui/Button';

const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    coach: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const services = [
    'Private Coaching Session',
    'Group Lessons',
    'Court Rental',
    'Tournament Training',
    'Youth Program',
    'Corporate Events',
    'General Inquiry'
  ];

  const coaches = [
    'No Preference',
    'Coach Maria Santos',
    'Coach James Rodriguez',
    'Coach Lisa Chen',
    'Coach Miguel Dela Cruz',
    'Coach Sarah Kim',
    'Coach Roberto Fernandez'
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    alert('Thank you for your inquiry! We\'ll get back to you within 24 hours.');
    setFormData({
      name: '',
      email: '',
      phone: '',
      service: '',
      coach: '',
      message: ''
    });
    setIsSubmitting(false);
  };

  return (
    <section id="contact" className="py-20 bg-[var(--gray-50)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-[var(--accent)]/10 rounded-full text-[var(--accent)] font-medium mb-4">
            <span className="w-2 h-2 bg-[var(--accent)] rounded-full mr-2"></span>
            Get In Touch
          </div>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[var(--gray-900)] font-[var(--font-poppins)] mb-6">
            Start Your Pickleball
            <br />
            <span className="text-gradient-primary">Journey Today</span>
          </h2>
          <p className="text-xl text-[var(--gray-700)] max-w-3xl mx-auto">
            Ready to book a session, rent a court, or learn more about our programs? We're here to help you get started.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact Form */}
          <div className="bg-white rounded-3xl p-8 shadow-sport">
            <h3 className="text-2xl font-bold text-[var(--gray-900)] mb-6 font-[var(--font-poppins)]">
              Send Us a Message
            </h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name and Email */}
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-[var(--gray-700)] mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-[var(--gray-300)] rounded-lg focus:ring-2 focus:ring-[var(--primary)] focus:border-transparent transition-all duration-200"
                    placeholder="Your full name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-[var(--gray-700)] mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-[var(--gray-300)] rounded-lg focus:ring-2 focus:ring-[var(--primary)] focus:border-transparent transition-all duration-200"
                    placeholder="your.email@example.com"
                  />
                </div>
              </div>

              {/* Phone */}
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-[var(--gray-700)] mb-2">
                  Phone Number
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-[var(--gray-300)] rounded-lg focus:ring-2 focus:ring-[var(--primary)] focus:border-transparent transition-all duration-200"
                  placeholder="+63 917 123 4567"
                />
              </div>

              {/* Service and Coach */}
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="service" className="block text-sm font-medium text-[var(--gray-700)] mb-2">
                    Service Interested In *
                  </label>
                  <select
                    id="service"
                    name="service"
                    required
                    value={formData.service}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-[var(--gray-300)] rounded-lg focus:ring-2 focus:ring-[var(--primary)] focus:border-transparent transition-all duration-200"
                  >
                    <option value="">Select a service</option>
                    {services.map((service) => (
                      <option key={service} value={service}>
                        {service}
                      </option>
                    ))}
                  </select>
                </div>
                <div>
                  <label htmlFor="coach" className="block text-sm font-medium text-[var(--gray-700)] mb-2">
                    Preferred Coach
                  </label>
                  <select
                    id="coach"
                    name="coach"
                    value={formData.coach}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-[var(--gray-300)] rounded-lg focus:ring-2 focus:ring-[var(--primary)] focus:border-transparent transition-all duration-200"
                  >
                    <option value="">Select a coach</option>
                    {coaches.map((coach) => (
                      <option key={coach} value={coach}>
                        {coach}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Message */}
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-[var(--gray-700)] mb-2">
                  Additional Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  value={formData.message}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-[var(--gray-300)] rounded-lg focus:ring-2 focus:ring-[var(--primary)] focus:border-transparent transition-all duration-200 resize-none"
                  placeholder="Tell us about your experience level, goals, or any specific questions..."
                />
              </div>

              {/* Submit Button */}
              <Button
                type="submit"
                size="lg"
                className="w-full transform hover:scale-105 transition-all duration-300"
                disabled={isSubmitting}
              >
                {isSubmitting ? 'Sending Message...' : 'Send Message'}
              </Button>
            </form>
          </div>

          {/* Contact Info & Quick Actions */}
          <div className="space-y-8">
            {/* Contact Info */}
            <div className="bg-white rounded-3xl p-8 shadow-sport">
              <h3 className="text-2xl font-bold text-[var(--gray-900)] mb-6 font-[var(--font-poppins)]">
                Contact Information
              </h3>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-[var(--primary)]/10 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                    <span className="text-[var(--primary)] text-xl">📍</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-[var(--gray-900)] mb-1">Location</h4>
                    <p className="text-[var(--gray-700)]">
                      Tiendesitas Complex<br />
                      Pasig City, Metro Manila<br />
                      Philippines
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-12 h-12 bg-[var(--primary)]/10 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                    <span className="text-[var(--primary)] text-xl">📞</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-[var(--gray-900)] mb-1">Phone</h4>
                    <p className="text-[var(--gray-700)]">+63 2 8123 4567</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-12 h-12 bg-[var(--primary)]/10 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                    <span className="text-[var(--primary)] text-xl">✉️</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-[var(--gray-900)] mb-1">Email</h4>
                    <p className="text-[var(--gray-700)]">info@picklehub.ph</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-12 h-12 bg-[var(--primary)]/10 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                    <span className="text-[var(--primary)] text-xl">🕒</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-[var(--gray-900)] mb-1">Hours</h4>
                    <p className="text-[var(--gray-700)]">
                      Monday - Sunday<br />
                      6:00 AM - 10:00 PM
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Actions */}
            <div className="bg-gradient-hero text-white rounded-3xl p-8">
              <h3 className="text-2xl font-bold mb-6 font-[var(--font-poppins)]">
                Quick Actions
              </h3>
              
              <div className="space-y-4">
                <Button
                  variant="outline"
                  size="lg"
                  className="w-full border-white text-white hover:bg-white hover:text-[var(--primary)] justify-start"
                >
                  📅 Book a Court Online
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="w-full border-white text-white hover:bg-white hover:text-[var(--primary)] justify-start"
                >
                  🎓 Schedule a Lesson
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="w-full border-white text-white hover:bg-white hover:text-[var(--primary)] justify-start"
                >
                  🏟️ Tour Our Facility
                </Button>
              </div>

              <div className="mt-8 pt-6 border-t border-white/20">
                <h4 className="font-semibold mb-3">Follow Us</h4>
                <div className="flex space-x-4">
                  <a href="#" className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center hover:bg-white/30 transition-colors">
                    📘
                  </a>
                  <a href="#" className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center hover:bg-white/30 transition-colors">
                    📷
                  </a>
                  <a href="#" className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center hover:bg-white/30 transition-colors">
                    🐦
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
