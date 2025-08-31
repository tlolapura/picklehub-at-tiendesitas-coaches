import React from 'react';
import { ScrollHandler } from './components/ScrollHandler';
import { CoachContent } from './components/CoachContent';

export default function CoachPage({ params }: { params: { id: string } }) {
  return (
    <ScrollHandler>
      <CoachContent id={params.id} isScrolled={false} />
    </ScrollHandler>
  );
}