'use client';

import React from 'react';
import { Coach } from '@/types/coach';

interface CoachCardProps {
  coach: Coach;
  featured?: boolean;
}

const CoachCard: React.FC<CoachCardProps> = ({ coach, featured = false }) => {
  const handleBookSession = () => {
    // Scroll to contact section
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleViewProfile = () => {
    // In a real app, this would navigate to a detailed profile page
    alert(`View full profile for ${coach.name}`);
  };

  return (
    <div className={`group relative bg-white rounded-2xl shadow-sport hover:shadow-sport-hover transform hover:-translate-y-2 transition-all duration-300 overflow-hidden ${featured ? 'ring-4 ring-[var(--primary)] ring-opacity-50' : ''
      }`}>
      {featured && (
        <div className="absolute top-4 right-4 z-10">
          <span className="bg-gradient-primary text-white px-3 py-1 rounded-full text-sm font-medium">
            Featured
          </span>
        </div>
      )}

      {/* Coach Image */}
      <div className="relative h-64 overflow-hidden">
        <div className="w-full h-full bg-gradient-to-br from-[var(--primary)] to-[var(--secondary)] flex items-center justify-center">
          {/* Placeholder for coach image */}
          <div className="w-32 h-32 bg-white/20 rounded-full flex items-center justify-center">
            <span className="text-white text-4xl font-bold">
              {coach.name.split(' ').map(n => n[0]).join('')}
            </span>
          </div>
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
      </div>

      {/* Coach Info */}
      <div className="p-6">
        {/* Name and Title */}
        <div className="mb-4">
          <h3 className="text-xl font-bold text-[var(--gray-900)] font-[var(--font-poppins)]">
            {coach.name}
          </h3>
          <p className="text-[var(--primary)] font-medium">{coach.title}</p>
        </div>

        {/* Rating */}
        <div className="flex items-center mb-4">
          <div className="flex items-center">
            {[...Array(5)].map((_, i) => (
              <svg
                key={i}
                className={`w-4 h-4 ${i < Math.floor(coach.rating) ? 'text-[var(--energy-yellow)]' : 'text-gray-300'
                  }`}
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
            ))}
            <span className="ml-2 text-sm text-[var(--gray-800)]">{coach.rating}</span>
          </div>
          <span className="ml-auto text-sm text-[var(--gray-600)]">{coach.experience}</span>
        </div>

        {/* Specialties */}
        <div className="mb-4">
          <div className="flex flex-wrap gap-2">
            {coach.specialties.slice(0, 3).map((specialty, index) => (
              <span
                key={index}
                className="px-3 py-1 bg-[var(--gray-100)] text-[var(--gray-800)] text-sm rounded-full"
              >
                {specialty}
              </span>
            ))}
          </div>
        </div>

        {/* Bio */}
        <p className="text-[var(--gray-700)] text-sm mb-6 line-clamp-3">
          {coach.bio}
        </p>

        {/* Achievements Preview */}
        <div className="mb-6">
          <h4 className="text-sm font-semibold text-[var(--gray-900)] mb-2">Key Achievement:</h4>
          <p className="text-sm text-[var(--gray-700)]">
            {coach.achievements[0]}
          </p>
        </div>

        {/* Action Buttons */}
        <div className="flex gap-3">
          <button
            onClick={handleBookSession}
            className="flex-1 px-4 py-2 bg-gradient-to-r from-orange-500 to-orange-600 text-white rounded-xl font-bold hover:opacity-90 transition-all"
          >
            Book Session
          </button>
          <button
            onClick={handleViewProfile}
            className="flex-1 px-4 py-2 bg-white/10 text-gray-700 rounded-xl font-bold border border-gray-200 hover:bg-gray-100 transition-all"
          >
            View Profile
          </button>
        </div>
      </div>

      {/* Hover Effect Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-[var(--primary)]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
    </div>
  );
};

export default CoachCard;
