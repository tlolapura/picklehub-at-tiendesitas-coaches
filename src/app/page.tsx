'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [selectedFilter, setSelectedFilter] = useState('all');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const coaches = [
    {
      id: 'maria',
      name: 'Maria',
      title: 'HEAD COACH',
      dupr: 5.2,
      specialties: ['Singles Strategy', 'Mental Game', 'Tournament Prep'],
      experience: '15+ Years',
      students: 200,
      image: '/coaches/maria.jpg',
      color: 'from-orange-500 to-red-600',
      contact: {
        messenger: 'https://m.me/mariasantos.pickleball',
        email: 'maria@pickleballhub.ph',
        phone: '+63 917 123 4567'
      },
      programs: [
        { name: 'Elite Singles Mastery', price: '₱35,000', duration: '12 weeks' },
        { name: 'Tournament Prep', price: '₱25,000', duration: '8 weeks' },
        { name: 'Private Coaching', price: '₱3,000/hr', duration: 'Flexible' }
      ]
    },
    {
      id: 'james',
      name: 'James',
      title: 'TECHNICAL SPECIALIST',
      dupr: 4.8,
      specialties: ['Fundamentals', 'Youth Development', 'Beginners'],
      experience: '10+ Years',
      students: 150,
      image: '/coaches/james.jpg',
      color: 'from-blue-500 to-purple-600',
      contact: {
        messenger: 'https://m.me/jamesrodriguez.pickleball',
        email: 'james@pickleballhub.ph',
        phone: '+63 917 234 5678'
      },
      programs: [
        { name: 'Beginner Bootcamp', price: '₱15,000', duration: '6 weeks' },
        { name: 'Youth Program', price: '₱20,000', duration: '3 months' },
        { name: 'Technique Clinic', price: '₱12,000', duration: '4 weeks' }
      ]
    },
    {
      id: 'lisa',
      name: 'Lisa',
      title: 'DOUBLES EXPERT',
      dupr: 5.0,
      specialties: ['Doubles Strategy', 'Team Dynamics', 'Mixed Doubles'],
      experience: '12+ Years',
      students: 180,
      image: '/coaches/lisa.jpg',
      color: 'from-green-500 to-teal-600',
      contact: {
        messenger: 'https://m.me/lisachen.pickleball',
        email: 'lisa@pickleballhub.ph',
        phone: '+63 917 345 6789'
      },
      programs: [
        { name: 'Doubles Domination', price: '₱22,000', duration: '8 weeks' },
        { name: 'Partner Synergy', price: '₱8,000', duration: '2 weeks' },
        { name: 'Mixed Doubles', price: '₱18,000', duration: '6 weeks' }
      ]
    },
    {
      id: 'miguel',
      name: 'Miguel',
      title: 'FITNESS COACH',
      dupr: 4.5,
      specialties: ['Conditioning', 'Injury Prevention', 'Performance'],
      experience: '8+ Years',
      students: 120,
      image: '/coaches/miguel.jpg',
      color: 'from-purple-500 to-pink-600',
      contact: {
        messenger: 'https://m.me/miguel.pickleball',
        email: 'miguel@pickleballhub.ph',
        phone: '+63 917 456 7890'
      },
      programs: [
        { name: 'Peak Performance', price: '₱28,000', duration: '12 weeks' },
        { name: 'Injury Prevention', price: '₱10,000', duration: '4 weeks' },
        { name: 'Speed & Agility', price: '₱15,000', duration: '6 weeks' }
      ]
    },
    {
      id: 'sarah',
      name: 'Sarah',
      title: 'JUNIOR DEVELOPMENT',
      dupr: 4.6,
      specialties: ['Kids Programs', 'Teen Training', 'School Teams'],
      experience: '7+ Years',
      students: 95,
      image: '/coaches/sarah.jpg',
      color: 'from-yellow-500 to-orange-600',
      contact: {
        messenger: 'https://m.me/sarah.pickleball',
        email: 'sarah@pickleballhub.ph',
        phone: '+63 917 567 8901'
      },
      programs: [
        { name: 'Little Champions', price: '₱8,000', duration: '8 weeks' },
        { name: 'Teen Excellence', price: '₱12,000', duration: '10 weeks' },
        { name: 'School Team Training', price: '₱15,000', duration: '3 months' }
      ]
    },
    {
      id: 'alex',
      name: 'Alex',
      title: 'STRATEGY COACH',
      dupr: 4.9,
      specialties: ['Game Analysis', 'Mental Training', 'Competition Prep'],
      experience: '11+ Years',
      students: 130,
      image: '/coaches/alex.jpg',
      color: 'from-indigo-500 to-blue-600',
      contact: {
        messenger: 'https://m.me/alex.pickleball',
        email: 'alex@pickleballhub.ph',
        phone: '+63 917 678 9012'
      },
      programs: [
        { name: 'Strategic Mindset', price: '₱20,000', duration: '8 weeks' },
        { name: 'Competition Ready', price: '₱16,000', duration: '6 weeks' },
        { name: 'Video Analysis Pack', price: '₱18,000', duration: '4 weeks' }
      ]
    }
  ];

  const filteredCoaches = coaches.filter(coach => {
    if (selectedFilter === 'all') return true;
    if (selectedFilter === 'beginners') return coach.specialties.some(s => s.toLowerCase().includes('beginner') || s.toLowerCase().includes('fundamental'));
    if (selectedFilter === 'advanced') return coach.dupr >= 5.0;
    if (selectedFilter === 'youth') return coach.specialties.some(s => s.toLowerCase().includes('youth') || s.toLowerCase().includes('kid') || s.toLowerCase().includes('teen'));
    if (selectedFilter === 'doubles') return coach.specialties.some(s => s.toLowerCase().includes('doubles'));
    return true;
  });

  return (
    <main className="min-h-screen bg-black text-white overflow-x-hidden">
      {/* Navigation */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-black/95 backdrop-blur-lg py-4' : 'bg-transparent py-6'
        }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
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
            </div>

            <div className="hidden md:flex items-center space-x-8">
              <a href="#coaches" className="text-white/80 hover:text-orange-500 transition-colors font-bold tracking-wide">
                COACHES
              </a>
              <a href="#how-it-works" className="text-white/80 hover:text-orange-500 transition-colors font-bold tracking-wide">
                HOW IT WORKS
              </a>
              <a href="#contact" className="text-white/80 hover:text-orange-500 transition-colors font-bold tracking-wide">
                CONTACT
              </a>
              <a
                href="https://picklehub-court-reservation.vercel.app"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 bg-gradient-to-r from-orange-500 to-orange-600 text-white rounded-full font-black tracking-wide hover:scale-105 transition-transform shadow-lg shadow-orange-500/30 text-center"
              >
                BOOK NOW
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section - Coach Focused */}
      <section className="relative min-h-[90vh] sm:min-h-[80vh] flex items-center justify-center pt-16 sm:pt-20">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black"></div>
          <div className="absolute top-20 -left-32 w-64 h-64 bg-orange-500/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 -right-32 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-20">
          <div className="text-center space-y-8">
            <div className="inline-flex items-center px-4 sm:px-6 py-2 sm:py-3 bg-orange-500/20 backdrop-blur-lg rounded-full border border-orange-500/50">
              <span className="w-2 h-2 bg-green-400 rounded-full mr-2 sm:mr-3 animate-pulse"></span>
              <span className="text-xs sm:text-sm font-bold tracking-widest text-orange-400">6 ELITE COACHES AVAILABLE</span>
            </div>

            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black tracking-tighter leading-tight">
              <span className="block text-white">FIND YOUR PERFECT</span>
              <span className="block bg-gradient-to-r from-orange-400 via-orange-500 to-red-500 bg-clip-text text-transparent">
                PICKLEBALL COACH
              </span>
            </h1>

            <p className="text-lg sm:text-2xl text-gray-300 max-w-3xl mx-auto px-2">
              Browse our elite coaching team. Compare programs and specialties. Book your perfect match.
            </p>

            {/* Quick Stats */}
            <div className="grid grid-cols-3 md:grid-cols-6 gap-4 max-w-4xl mx-auto pt-8">
              <div className="bg-white/5 backdrop-blur-lg rounded-xl p-4 border border-white/10">
                <div className="text-2xl font-black text-orange-500">6</div>
                <div className="text-xs text-gray-400">Coaches</div>
              </div>
              <div className="bg-white/5 backdrop-blur-lg rounded-xl p-4 border border-white/10">
                <div className="text-2xl font-black text-orange-500">4.5+</div>
                <div className="text-xs text-gray-400">Avg DUPR</div>
              </div>
              <div className="bg-white/5 backdrop-blur-lg rounded-xl p-4 border border-white/10">
                <div className="text-2xl font-black text-orange-500">₱1.5k</div>
                <div className="text-xs text-gray-400">From/Hour</div>
              </div>
              <div className="bg-white/5 backdrop-blur-lg rounded-xl p-4 border border-white/10">
                <div className="text-2xl font-black text-orange-500">875+</div>
                <div className="text-xs text-gray-400">Students</div>
              </div>
              <div className="bg-white/5 backdrop-blur-lg rounded-xl p-4 border border-white/10">
                <div className="text-2xl font-black text-orange-500">20+</div>
                <div className="text-xs text-gray-400">Programs</div>
              </div>
              <div className="bg-white/5 backdrop-blur-lg rounded-xl p-4 border border-white/10">
                <div className="text-2xl font-black text-orange-500">4.9★</div>
                <div className="text-xs text-gray-400">Rating</div>
              </div>
            </div>

            <div className="pt-4">
              <a href="#coaches">
                <button className="group px-8 py-4 bg-gradient-to-r from-orange-500 to-orange-600 rounded-full font-black text-lg tracking-wide hover:scale-105 transition-transform shadow-2xl shadow-orange-500/30">
                  BROWSE ALL COACHES
                  <span className="ml-2 group-hover:translate-x-1 transition-transform inline-block">↓</span>
                </button>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Coaches Browse Section */}
      <section id="coaches" className="py-20 bg-gradient-to-b from-black to-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl sm:text-5xl font-black tracking-tighter mb-4">
              MEET OUR <span className="text-orange-500">COACHES</span>
            </h2>
            <p className="text-xl text-gray-400">
              Each coach brings unique expertise and personalized programs
            </p>
          </div>

          {/* Filters */}
          <div className="flex flex-col sm:flex-row gap-4 justify-start sm:justify-center mb-12 overflow-x-auto pb-4 px-4 sm:px-0 no-scrollbar">
            <div className="flex gap-2 min-w-max">
              <button
                onClick={() => setSelectedFilter('all')}
                className={`px-4 sm:px-6 py-3 rounded-full font-bold text-sm sm:text-base transition-all ${selectedFilter === 'all'
                  ? 'bg-orange-500 text-white'
                  : 'bg-white/5 text-gray-400 hover:bg-white/10'
                  }`}
              >
                All Coaches
              </button>
              <button
                onClick={() => setSelectedFilter('beginners')}
                className={`px-4 sm:px-6 py-3 rounded-full font-bold text-sm sm:text-base transition-all ${selectedFilter === 'beginners'
                  ? 'bg-orange-500 text-white'
                  : 'bg-white/5 text-gray-400 hover:bg-white/10'
                  }`}
              >
                Beginners
              </button>
              <button
                onClick={() => setSelectedFilter('advanced')}
                className={`px-4 sm:px-6 py-3 rounded-full font-bold text-sm sm:text-base transition-all ${selectedFilter === 'advanced'
                  ? 'bg-orange-500 text-white'
                  : 'bg-white/5 text-gray-400 hover:bg-white/10'
                  }`}
              >
                Advanced
              </button>
              <button
                onClick={() => setSelectedFilter('youth')}
                className={`px-4 sm:px-6 py-3 rounded-full font-bold text-sm sm:text-base transition-all ${selectedFilter === 'youth'
                  ? 'bg-orange-500 text-white'
                  : 'bg-white/5 text-gray-400 hover:bg-white/10'
                  }`}
              >
                Youth
              </button>
              <button
                onClick={() => setSelectedFilter('doubles')}
                className={`px-4 sm:px-6 py-3 rounded-full font-bold text-sm sm:text-base transition-all ${selectedFilter === 'doubles'
                  ? 'bg-orange-500 text-white'
                  : 'bg-white/5 text-gray-400 hover:bg-white/10'
                  }`}
              >
                Doubles
              </button>
            </div>
          </div>

          {/* Coaches Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredCoaches.map((coach) => (
              <div key={coach.id} className="group">
                <div className="bg-gradient-to-br from-gray-900 to-black rounded-3xl overflow-hidden border border-gray-800 hover:border-orange-500 transition-all hover:scale-[1.02] relative group">
                  {/* Coach Header */}
                  <div className="relative">
                    {/* Square Photo Container */}
                    <div className="aspect-[4/3] sm:aspect-square relative overflow-hidden">
                      <div className={`w-full h-full bg-gradient-to-br ${coach.color} flex items-center justify-center relative`}>
                        <span className="text-7xl sm:text-6xl font-black text-white/90">
                          {coach.name.split(' ').map(n => n[0]).join('')}
                        </span>
                        {/* Animated Gradient Overlay */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                      </div>
                      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent"></div>
                    </div>

                    {/* Coach Info Overlay */}
                    <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/90 via-black/80 to-transparent">
                      <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-2 sm:gap-0">
                        <div>
                          <h3 className="text-3xl sm:text-2xl font-black text-white">{coach.name}</h3>
                          <p className="text-base sm:text-sm font-bold text-white/80">{coach.title}</p>
                        </div>
                        <div className="flex items-center justify-between sm:flex-col sm:items-end">
                          <div className="text-2xl font-black text-white">DUPR {coach.dupr}</div>
                          <div className="text-sm sm:text-xs text-white/80">{coach.experience}</div>
                        </div>
                      </div>
                    </div>

                    {/* Availability Badge */}
                    <div className="absolute top-4 right-4 px-3 py-1 bg-green-500/20 backdrop-blur-lg rounded-full border border-green-500/50">
                      <span className="text-xs font-bold text-green-400">AVAILABLE</span>
                    </div>
                  </div>

                  {/* Coach Details */}
                  <div className="p-6 space-y-4">
                    {/* Specialties */}
                    <div className="flex flex-wrap gap-2 mt-4">
                      {coach.specialties.slice(0, 3).map((specialty, idx) => (
                        <span key={idx} className="px-3 sm:px-3 py-1.5 bg-white/5 rounded-full text-sm sm:text-xs font-bold">
                          {specialty}
                        </span>
                      ))}
                    </div>

                    {/* Stats */}
                    <div className="grid grid-cols-2 gap-3 mt-6">
                      <div className="bg-white/5 rounded-xl p-3 text-center">
                        <div className="text-xl font-black text-orange-500">{coach.students}</div>
                        <div className="text-xs text-gray-400">Students</div>
                      </div>
                      <div className="bg-white/5 rounded-xl p-3 text-center">
                        <div className="text-xl font-black text-orange-500">{coach.experience}</div>
                        <div className="text-xs text-gray-400">Experience</div>
                      </div>
                    </div>

                    {/* Programs Preview */}
                    <div className="mt-6">
                      <p className="text-sm font-bold text-gray-400 uppercase tracking-wider mb-3">Programs:</p>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                        {coach.programs.slice(0, 2).map((program, idx) => (
                          <div key={idx} className="bg-white/5 rounded-lg px-4 py-2 text-base text-gray-300">
                            {program.name}
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Contact Options */}
                    <div className="grid grid-cols-3 gap-2 sm:gap-3 mt-6">
                      <a
                        href={coach.contact.messenger}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 flex items-center justify-center gap-2 py-3 bg-[#0084FF] rounded-xl hover:opacity-90 transition-all hover:scale-105"
                      >
                        <svg className="w-6 h-6 sm:w-5 sm:h-5" viewBox="0 0 24 24" fill="currentColor">
                          <path d="M12 2C6.477 2 2 6.145 2 11.259c0 2.913 1.454 5.512 3.726 7.21V22l3.405-1.869c.909.252 1.871.388 2.869.388 5.523 0 10-4.145 10-9.259C22 6.146 17.523 2 12 2z" />
                        </svg>
                      </a>
                      <a
                        href={`mailto:${coach.contact.email}`}
                        className="flex-1 flex items-center justify-center gap-2 py-3 bg-gray-700 rounded-xl hover:opacity-90 transition-all hover:scale-105"
                      >
                        <svg className="w-6 h-6 sm:w-5 sm:h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        </svg>
                      </a>
                      <a
                        href={`tel:${coach.contact.phone}`}
                        className="flex-1 flex items-center justify-center gap-2 py-3 bg-gray-700 rounded-xl hover:opacity-90 transition-all hover:scale-105"
                      >
                        <svg className="w-6 h-6 sm:w-5 sm:h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <path d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                        </svg>
                      </a>
                    </div>

                    {/* CTAs */}
                    <div className="space-y-3 mt-6">
                      <a
                        href="https://picklehub-court-reservation.vercel.app"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block w-full py-4 bg-gradient-to-r from-orange-500 to-orange-600 rounded-xl font-black text-lg text-center tracking-wide hover:scale-105 transition-transform shadow-lg shadow-orange-500/20"
                      >
                        BOOK A SESSION
                      </a>
                      <Link href={`/coach/${coach.id}`}>
                        <button className="w-full py-4 bg-white/5 rounded-xl font-bold text-lg tracking-wide hover:bg-white/10 transition-all hover:scale-105 group">
                          VIEW FULL PROFILE
                          <span className="ml-2 group-hover:translate-x-1 transition-transform inline-block">→</span>
                        </button>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section id="how-it-works" className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-black tracking-tighter mb-4">
              HOW IT <span className="text-orange-500">WORKS</span>
            </h2>
            <p className="text-xl text-gray-400">
              Start your pickleball journey in 3 simple steps
            </p>
          </div>

          <div className="flex md:grid md:grid-cols-3 gap-6 md:gap-8 overflow-x-auto pb-6 -mx-4 px-4 md:mx-0 md:px-0 no-scrollbar">
            <div className="relative flex-none w-[85vw] max-w-[320px] md:w-auto bg-white/5 rounded-2xl p-6 border border-white/10 snap-center transform transition-transform hover:scale-[1.02] hover:bg-white/[0.07]">
              <div className="absolute top-0 left-0 w-16 h-16 -translate-x-2 -translate-y-2 bg-gradient-to-br from-orange-500 to-orange-600 rounded-2xl flex items-center justify-center text-3xl font-black text-white shadow-xl ring-4 ring-black">
                1
              </div>
              <div className="h-32 flex items-center justify-center mb-4 mt-4">
                <svg className="w-16 h-16 text-orange-500/90" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
                </svg>
              </div>
              <h3 className="text-xl font-black mb-2">BROWSE COACHES</h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                Find the perfect coach based on your goals and preferred playing style
              </p>
            </div>

            <div className="relative flex-none w-[85vw] max-w-[320px] md:w-auto bg-white/5 rounded-2xl p-6 border border-white/10 snap-center transform transition-transform hover:scale-[1.02] hover:bg-white/[0.07]">
              <div className="absolute top-0 left-0 w-16 h-16 -translate-x-2 -translate-y-2 bg-gradient-to-br from-orange-500 to-orange-600 rounded-2xl flex items-center justify-center text-3xl font-black text-white shadow-xl ring-4 ring-black">
                2
              </div>
              <div className="h-32 flex items-center justify-center mb-4 mt-4">
                <svg className="w-16 h-16 text-orange-500/90" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5" />
                </svg>
              </div>
              <h3 className="text-xl font-black mb-2">BOOK A SESSION</h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                Schedule your first lesson or join a program that fits your schedule
              </p>
            </div>

            <div className="relative flex-none w-[85vw] max-w-[320px] md:w-auto bg-white/5 rounded-2xl p-6 border border-white/10 snap-center transform transition-transform hover:scale-[1.02] hover:bg-white/[0.07]">
              <div className="absolute top-0 left-0 w-16 h-16 -translate-x-2 -translate-y-2 bg-gradient-to-br from-orange-500 to-orange-600 rounded-2xl flex items-center justify-center text-3xl font-black text-white shadow-xl ring-4 ring-black">
                3
              </div>
              <div className="h-32 flex items-center justify-center mb-4 mt-4">
                <svg className="w-16 h-16 text-orange-500/90" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z" />
                </svg>
              </div>
              <h3 className="text-xl font-black mb-2">START TRAINING</h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                Begin your pickleball journey with expert guidance at our facility
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            <div className="space-y-8">
              <h2 className="text-5xl font-black tracking-tighter">
                READY TO <span className="text-orange-500">START?</span>
              </h2>

              <p className="text-xl text-gray-300">
                Can&apos;t decide which coach is right for you? Contact us for a free consultation and we&apos;ll help match you with the perfect coach.
              </p>

              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-orange-500/20 rounded-xl flex items-center justify-center flex-shrink-0">
                    <span className="text-xl">📍</span>
                  </div>
                  <div>
                    <h3 className="font-black text-lg mb-1">LOCATION</h3>
                    <p className="text-gray-400">Tiendesitas Complex, Frontera Verde<br />Ortigas Ave, Pasig City</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-orange-500/20 rounded-xl flex items-center justify-center flex-shrink-0">
                    <span className="text-xl">📞</span>
                  </div>
                  <div>
                    <h3 className="font-black text-lg mb-1">CONTACT</h3>
                    <p className="text-gray-400">+63 917 123 4567<br />coaches@pickleballhub.ph</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-gray-900 to-black rounded-3xl p-8 border border-gray-800">
              <h3 className="text-2xl font-black mb-8">GET MATCHED WITH A COACH</h3>

              <a
                href="https://picklehub-court-reservation.vercel.app"
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full py-5 bg-gradient-to-r from-orange-500 to-orange-600 rounded-2xl font-black text-xl tracking-wide text-center hover:scale-105 transition-transform shadow-lg shadow-orange-500/30 mb-8"
              >
                RESERVE A COURT NOW
              </a>

              <h4 className="text-xl font-black mb-4">CONNECT WITH US</h4>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-6">
                <a
                  href="https://m.me/pickleballhub.tiendesitas"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 py-4 bg-[#0084FF] rounded-xl font-bold hover:opacity-90 transition-opacity"
                >
                  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2C6.477 2 2 6.145 2 11.259c0 2.913 1.454 5.512 3.726 7.21V22l3.405-1.869c.909.252 1.871.388 2.869.388 5.523 0 10-4.145 10-9.259C22 6.146 17.523 2 12 2z" />
                  </svg>
                  <span>Messenger</span>
                </a>
                <a
                  href="mailto:coaches@pickleballhub.ph"
                  className="flex items-center justify-center gap-2 py-4 bg-gray-700 rounded-xl font-bold hover:opacity-90 transition-opacity"
                >
                  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  <span>Email</span>
                </a>
                <a
                  href="tel:+639171234567"
                  className="flex items-center justify-center gap-2 py-4 bg-gray-700 rounded-xl font-bold hover:opacity-90 transition-opacity"
                >
                  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  <span>Call</span>
                </a>
              </div>

              <p className="text-gray-400 text-center text-sm">
                Have questions? Reach out to us and we&apos;ll help match you with the perfect coach.
              </p>
            </div>
          </div>
        </div>
      </section>

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