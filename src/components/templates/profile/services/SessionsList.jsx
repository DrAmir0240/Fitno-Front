import React from 'react';
import { SessionCard } from './SessionCard';

export const SessionsList = ({ sessions }) => {
  return (
    <div className="space-y-4">
      {sessions?.map((session) => (
        <SessionCard key={session.id} session={session} />
      ))}
    </div>
  );
};