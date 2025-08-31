'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { coaches } from '../data/coaches';

interface CoachContentProps {
  id: string;
  isScrolled: boolean;
}

export function CoachContent({ id, isScrolled }: CoachContentProps) {
  const coach = coaches.find(c => c.id === id) || coaches[0];

  return (
    <main className="min-h-screen bg-black text-white">
      {/* Navigation */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-black/95 backdrop-blur-lg py-4' : 'bg-transparent py-6'
        }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center space-x-2">
              <div className="bg-white p-2 rounded-xl">
                <Image
                  src="/logo.png"
                  alt="Pickleball Hub"
                  width={40}
                  height={40}
                  className="w-10 h-10"
                  style={{ objectFit: 'contain' }}
                />
              </div>
              <div>
                <div className="text-xl font-black tracking-tighter">PICKLEBALL HUB</div>
                <div className="text-xs text-orange-500 font-bold tracking-widest">TIENDESITAS</div>
              </div>
            </Link>
          </div>
        </div>
      </nav>

      {/* Coach Profile */}
      <div className="pt-24 sm:pt-32 pb-16 sm:pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Hero Section */}
          <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden mb-8 sm:mb-12">
            <div className={`aspect-[4/3] sm:aspect-[21/9] md:aspect-[21/7] relative overflow-hidden bg-gradient-to-br ${coach.color}`}>
              <div className="absolute inset-0 bg-black/30"></div>
              <div className="absolute inset-0 flex items-center">
                <div className="w-full max-w-5xl mx-auto px-6">
                  <div className="flex flex-col sm:flex-row items-center gap-6 sm:gap-8">
                    {/* Coach Photo */}
                    <div className="w-40 h-40 sm:w-56 md:w-64 sm:h-56 md:h-64 rounded-2xl overflow-hidden border-4 border-white/10 shadow-2xl transform hover:scale-105 transition-transform">
                      <div className={`w-full h-full bg-gradient-to-br ${coach.color} flex items-center justify-center`}>
                        <span className="text-5xl sm:text-6xl font-black text-white/90">
                          {coach.name[0]}
                        </span>
                      </div>
                    </div>
                    {/* Coach Info */}
                    <div className="text-center sm:text-left">
                      <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black text-white mb-3 sm:mb-4">{coach.name}</h1>
                      <div className="flex flex-wrap justify-center sm:justify-start items-center gap-2 sm:gap-4 text-base sm:text-lg text-white/90">
                        <div className="font-bold">{coach.title}</div>
                        <div className="hidden sm:block text-white/50">•</div>
                        <div>DUPR {coach.dupr}</div>
                        <div className="hidden sm:block text-white/50">•</div>
                        <div>{coach.experience}</div>
                      </div>
                      <div className="flex items-center justify-center sm:justify-start gap-2 text-white/70 mt-4">
                        <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                          <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                        <span className="text-sm sm:text-base">Tiendesitas, Pasig City, Metro Manila, Philippines</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Left Column */}
            <div className="lg:col-span-2 space-y-8">
              {/* Background */}
              <div className="bg-white/5 rounded-2xl p-6 border border-white/10">
                <h2 className="text-2xl font-black mb-4">About</h2>
                <p className="text-gray-300 mb-6">{coach.background}</p>
                <h3 className="text-xl font-bold mb-3">Teaching Style</h3>
                <p className="text-gray-300">{coach.teaching_style}</p>
              </div>

              {/* Achievements */}
              <div className="bg-white/5 rounded-2xl p-6 border border-white/10">
                <h2 className="text-2xl font-black mb-4">Achievements</h2>
                <div className="space-y-3">
                  {coach.achievements.map((achievement, idx) => (
                    <div key={idx} className="flex items-center gap-3">
                      <div className="flex-shrink-0 w-2 h-2 bg-orange-500 rounded-full"></div>
                      <p className="text-gray-300">{achievement}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Specialties */}
              <div className="bg-white/5 rounded-2xl p-6 border border-white/10">
                <h2 className="text-2xl font-black mb-4">Specialties</h2>
                <div className="flex flex-wrap gap-2">
                  {coach.specialties.map((specialty, idx) => (
                    <span key={idx} className="px-4 py-2 bg-white/10 rounded-full text-sm font-bold">
                      {specialty}
                    </span>
                  ))}
                </div>
              </div>

              {/* Programs */}
              <div className="bg-white/5 rounded-2xl p-6 border border-white/10">
                <h2 className="text-2xl font-black mb-4">Programs</h2>
                <div className="grid sm:grid-cols-2 gap-4">
                  {coach.programs.map((program, idx) => (
                    <div key={idx} className="bg-white/5 rounded-xl p-4 border border-white/10">
                      <h3 className="font-bold mb-2">{program.name}</h3>
                    </div>
                  ))}
                </div>
              </div>

              {/* Certifications */}
              <div className="bg-white/5 rounded-2xl p-6 border border-white/10">
                <h2 className="text-2xl font-black mb-4">Certifications</h2>
                <div className="space-y-3">
                  {coach.certifications.map((cert, idx) => (
                    <div key={idx} className="flex items-center gap-3">
                      <svg className="w-5 h-5 text-orange-500" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
                      </svg>
                      <p className="text-gray-300">{cert}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Testimonials */}
              <div className="bg-white/5 rounded-2xl p-6 border border-white/10">
                <h2 className="text-2xl font-black mb-6">Student Testimonials</h2>
                <div className="grid gap-6">
                  {coach.testimonials.map((testimonial, idx) => (
                    <div key={idx} className="bg-white/5 rounded-xl p-6 border border-white/10">
                      <div className="flex items-center gap-2 mb-1">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <svg key={i} className="w-5 h-5 text-yellow-500" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M12 2l2.4 7.2h7.6l-6 4.8 2.4 7.2-6-4.8-6 4.8 2.4-7.2-6-4.8h7.6z" />
                          </svg>
                        ))}
                      </div>
                      <p className="text-gray-300 italic mb-4">&quot;{testimonial.content}&quot;</p>
                      <div className="flex flex-col">
                        <span className="font-bold text-white">{testimonial.name}</span>
                        {testimonial.role && (
                          <span className="text-sm text-gray-400">{testimonial.role}</span>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Column */}
            <div className="space-y-8">
              {/* Stats */}
              <div className="bg-white/5 rounded-2xl p-6 border border-white/10">
                <h2 className="text-2xl font-black mb-4">Stats</h2>
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-white/5 rounded-xl p-4 text-center">
                    <div className="text-3xl font-black text-orange-500">{coach.students}</div>
                    <div className="text-sm text-gray-400">Students</div>
                  </div>
                  <div className="bg-white/5 rounded-xl p-4 text-center">
                    <div className="text-3xl font-black text-orange-500">{coach.dupr}</div>
                    <div className="text-sm text-gray-400">DUPR Rating</div>
                  </div>
                </div>
              </div>

              {/* Contact */}
              <div className="bg-white/5 rounded-2xl p-6 border border-white/10">
                <h2 className="text-2xl font-black mb-4">Contact</h2>
                <div className="space-y-3">
                  <a
                    href={coach.contact.messenger}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 w-full py-3 px-4 bg-[#0084FF] rounded-xl font-bold hover:opacity-90 transition-opacity"
                  >
                    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 2C6.477 2 2 6.145 2 11.259c0 2.913 1.454 5.512 3.726 7.21V22l3.405-1.869c.909.252 1.871.388 2.869.388 5.523 0 10-4.145 10-9.259C22 6.146 17.523 2 12 2z" />
                    </svg>
                    Message on Facebook
                  </a>
                  <a
                    href={`mailto:${coach.contact.email}`}
                    className="flex items-center gap-3 w-full py-3 px-4 bg-gray-700 rounded-xl font-bold hover:opacity-90 transition-opacity"
                  >
                    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    {coach.contact.email}
                  </a>
                  <a
                    href={`tel:${coach.contact.phone}`}
                    className="flex items-center gap-3 w-full py-3 px-4 bg-gray-700 rounded-xl font-bold hover:opacity-90 transition-opacity"
                  >
                    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                    {coach.contact.phone}
                  </a>
                </div>
              </div>

              {/* Book Session */}
              <a
                href="https://picklehub-court-reservation.vercel.app"
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full py-4 bg-gradient-to-r from-orange-500 to-orange-600 rounded-xl font-black text-center tracking-wide hover:scale-105 transition-transform shadow-lg shadow-orange-500/30"
              >
                BOOK A SESSION
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="py-12 bg-gray-900 border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex items-center space-x-2">
              <div className="bg-white p-2 rounded-xl">
                <Image
                  src="/logo.png"
                  alt="Pickleball Hub"
                  width={32}
                  height={32}
                  className="w-8 h-8"
                  style={{ objectFit: 'contain' }}
                />
              </div>
              <div>
                <div className="text-lg font-black tracking-tighter">PICKLEBALL HUB</div>
                <div className="text-xs text-orange-500 font-bold tracking-widest">TIENDESITAS</div>
              </div>
            </div>

            <div className="text-center">
              <div className="text-sm text-gray-400 mb-1">
                <span className="font-bold text-orange-500">Open Daily</span> • 8AM to 11PM
              </div>
              <div className="text-sm text-gray-500">
                © 2024 Pickleball Hub at Tiendesitas. All rights reserved.
              </div>
            </div>

            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-orange-500 transition-colors">
                <span className="font-bold text-sm">f</span>
              </a>
              <a href="#" className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-orange-500 transition-colors">
                <span className="font-bold text-sm">ig</span>
              </a>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}
