
import React, { useState, useEffect } from 'react';
import { PodcastPlayer } from './components/PodcastPlayer';
import { Podcast, Weekday } from './types';
import { PODCAST_DATA, WEEKDAY_NAMES } from './constants';

const App: React.FC = () => {
  const [today, setToday] = useState<Weekday>(new Date().getDay() as Weekday);
  const [currentPodcast, setCurrentPodcast] = useState<Podcast | null>(null);

  useEffect(() => {
    const day = new Date().getDay() as Weekday;
    setToday(day);
    setCurrentPodcast(PODCAST_DATA[day] || null);
  }, []);

  const todayName = WEEKDAY_NAMES[today];

  return (
    <div className="bg-brand-bg min-h-screen text-brand-text font-sans flex items-center justify-center p-4 sm:p-6 lg:p-8">
      <main className="w-full max-w-md mx-auto">
        <header className="text-center mb-8">
          <h1 className="text-4xl sm:text-5xl font-black tracking-tighter">DailyCast</h1>
          <p className="text-brand-secondary mt-2 text-lg">Your daily dose of inspiration.</p>
        </header>

        {currentPodcast ? (
          <>
            <div className="text-center mb-6 p-4 bg-brand-surface/50 rounded-lg border border-white/10">
              <p className="font-bold text-xl">It's <span className="text-brand-primary">{todayName}</span>!</p>
              <p className="text-brand-secondary text-sm">Here is your podcast for the day. Press play and enjoy.</p>
            </div>
            <PodcastPlayer podcast={currentPodcast} />
          </>
        ) : (
          <div className="bg-brand-surface p-8 rounded-2xl text-center shadow-2xl border border-white/10">
            <h2 className="text-2xl font-bold mb-4">It's the Weekend!</h2>
            <p className="text-brand-secondary">
              Time to relax and recharge. Come back on Monday for a brand new episode.
            </p>
            <div className="mt-6 text-4xl">🎉</div>
          </div>
        )}

        <footer className="text-center mt-12 text-xs text-brand-secondary/50">
          <p>Created by a Senior Frontend React Engineer</p>
        </footer>
      </main>
    </div>
  );
};

export default App;
