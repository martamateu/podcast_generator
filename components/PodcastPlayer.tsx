
import React, { useState, useRef, useEffect } from 'react';
import type { Podcast } from '../types';
import { Icon } from './Icon';

interface PodcastPlayerProps {
  podcast: Podcast;
}

export const PodcastPlayer: React.FC<PodcastPlayerProps> = ({ podcast }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const audioRef = useRef<HTMLAudioElement>(null);

  const togglePlayPause = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const handleTimeUpdate = () => {
    if (audioRef.current) {
      const { currentTime, duration } = audioRef.current;
      if (duration) {
        setProgress((currentTime / duration) * 100);
      }
    }
  };

  const handleEnded = () => {
    setIsPlaying(false);
    setProgress(0);
  };
  
  const handleScrub = (e: React.ChangeEvent<HTMLInputElement>) => {
    if(audioRef.current) {
        const scrubTime = (Number(e.target.value) / 100) * audioRef.current.duration;
        audioRef.current.currentTime = scrubTime;
    }
  }

  useEffect(() => {
    // Reset state when the podcast source changes
    setIsPlaying(false);
    setProgress(0);
    if(audioRef.current) {
      audioRef.current.currentTime = 0;
    }
  }, [podcast]);

  return (
    <div className="bg-brand-surface rounded-2xl p-6 shadow-2xl border border-white/10 flex flex-col items-center animate-fade-in">
      <div className="relative w-full aspect-square mb-6">
         <img
            key={podcast.coverImage}
            src={podcast.coverImage}
            alt={podcast.title}
            className="w-full h-full object-cover rounded-lg shadow-lg"
          />
      </div>
      
      <div className="text-center w-full">
        <h2 className="text-2xl font-bold tracking-tight text-brand-text">{podcast.title}</h2>
        <p className="text-sm text-brand-secondary mt-1">Today's Featured Episode</p>
      </div>

      <div className="w-full mt-6">
        <input
            type="range"
            value={progress}
            onChange={handleScrub}
            className="w-full h-1 bg-white/20 rounded-lg appearance-none cursor-pointer range-sm accent-brand-primary"
            />
      </div>

      <button
        onClick={togglePlayPause}
        className="mt-6 bg-brand-primary text-brand-bg rounded-full w-16 h-16 flex items-center justify-center shadow-lg transform hover:scale-105 transition-transform duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-brand-surface focus:ring-brand-primary"
        aria-label={isPlaying ? 'Pause Podcast' : 'Play Podcast'}
      >
        <Icon name={isPlaying ? 'pause' : 'play'} className="w-8 h-8" />
      </audio>
      <audio
        ref={audioRef}
        src={podcast.audioUrl}
        onTimeUpdate={handleTimeUpdate}
        onLoadedMetadata={handleTimeUpdate}
        onEnded={handleEnded}
        preload="metadata"
      />
    </div>
  );
};
