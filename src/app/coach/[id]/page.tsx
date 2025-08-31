import React from 'react';
import { ScrollHandler } from './components/ScrollHandler';
import { CoachContent } from './components/CoachContent';
import { use } from 'react';

interface PageProps {
  params: Promise<{ id: string }>;
}

export default function CoachPage({ params }: PageProps) {
  const { id } = use(params);

  return (
    <ScrollHandler>
      <CoachContent id={id} isScrolled={false} />
    </ScrollHandler>
  );
}