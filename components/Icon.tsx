
import React from 'react';

interface IconProps {
  name: 'play' | 'pause';
  className?: string;
}

const PlayIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M8 5v14l11-7z" />
  </svg>
);

const PauseIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z" />
  </svg>
);

export const Icon: React.FC<IconProps> = ({ name, className = 'w-6 h-6' }) => {
  if (name === 'play') {
    return <PlayIcon className={className} />;
  }
  if (name === 'pause') {
    return <PauseIcon className={className} />;
  }
  return null;
};
