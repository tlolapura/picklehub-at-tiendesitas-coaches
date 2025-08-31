'use client';

import React, { useState } from 'react';
import CoachCard from '@/components/CoachCard';
import { coaches } from '@/data/coaches';

const CoachesSection: React.FC = () => {
  const [showAll, setShowAll] = useState(false);
  const [selectedSpecialty, setSelectedSpecialty] = useState<string>('All');

  // Get unique specialties
  const allSpecialties = ['All', ...new Set(coaches.flatMap(coach => coach.specialties))];

  // Filter coaches based on selected specialty
  const filteredCoaches = selectedSpecialty === 'All'
    ? coaches
    : coaches.filter(coach => coach.specialties.includes(selectedSpecialty));

  // Show only first 6 coaches unless "Show All" is clicked
  const displayedCoaches = showAll ? filteredCoaches : filteredCoaches.slice(0, 6);

  return (
    <section id="coaches" className="py-20 bg-[var(--gray-50)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-[var(--primary)]/10 rounded-full text-[var(--primary)] font-medium mb-4">
            <span className="w-2 h-2 bg-[var(--primary)] rounded-full mr-2"></span>
            Meet Our Team
          </div>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[var(--gray-900)] font-[var(--font-poppins)] mb-6">
            Expert <span className="text-gradient-primary">Coaches</span>
          </h2>
          <p className="text-xl text-[var(--gray-700)] max-w-3xl mx-auto">
            Our certified professionals bring years of experience and passion to help you master the game of pickleball
          </p>
        </div>

        {/* Specialty Filter */}
        <div className="mb-12">
          <div className="flex flex-wrap justify-center gap-3">
            {allSpecialties.slice(0, 8).map((specialty) => (
              <button
                key={specialty}
                onClick={() => setSelectedSpecialty(specialty)}
                className={`px-6 py-3 rounded-full font-medium transition-all duration-200 ${selectedSpecialty === specialty
                  ? 'bg-[var(--primary)] text-white shadow-sport'
                  : 'bg-white text-[var(--gray-700)] hover:bg-[var(--primary)]/10 hover:text-[var(--primary)]'
                  }`}
              >
                {specialty}
              </button>
            ))}
          </div>
        </div>

        {/* Coaches Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {displayedCoaches.map((coach, index) => (
            <CoachCard
              key={coach.id}
              coach={coach}
              featured={index === 0} // Make first coach featured
            />
          ))}
        </div>

        {/* Show More/Less Button */}
        {filteredCoaches.length > 6 && (
          <div className="text-center">
            <button
              onClick={() => setShowAll(!showAll)}
              className="px-6 py-3 bg-white text-gray-700 rounded-xl font-bold border border-gray-200 hover:bg-gray-100 transform hover:scale-105 transition-all duration-300"
            >
              {showAll ? 'Show Less' : `Show All ${filteredCoaches.length} Coaches`}
            </button>
          </div>
        )}

        {/* Stats Section */}
        <div className="mt-20 bg-white rounded-3xl p-8 shadow-sport">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-3xl sm:text-4xl font-bold text-[var(--primary)] mb-2">
                {coaches.length}+
              </div>
              <div className="text-[var(--gray-700)] font-medium">Expert Coaches</div>
            </div>
            <div className="text-center">
              <div className="text-3xl sm:text-4xl font-bold text-[var(--primary)] mb-2">
                {coaches.reduce((sum, coach) => sum + parseInt(coach.experience), 0)}+
              </div>
              <div className="text-[var(--gray-700)] font-medium">Years Experience</div>
            </div>
            <div className="text-center">
              <div className="text-3xl sm:text-4xl font-bold text-[var(--primary)] mb-2">
                {coaches.reduce((sum, coach) => sum + coach.certifications.length, 0)}+
              </div>
              <div className="text-[var(--gray-700)] font-medium">Certifications</div>
            </div>
            <div className="text-center">
              <div className="text-3xl sm:text-4xl font-bold text-[var(--primary)] mb-2">
                {(coaches.reduce((sum, coach) => sum + coach.rating, 0) / coaches.length).toFixed(1)}★
              </div>
              <div className="text-[var(--gray-700)] font-medium">Average Rating</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CoachesSection;
