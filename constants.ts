
import { Podcast, Weekday } from './types';

export const WEEKDAY_NAMES: { [key in Weekday]: string } = {
  [Weekday.Sunday]: 'Sunday',
  [Weekday.Monday]: 'Monday',
  [Weekday.Tuesday]: 'Tuesday',
  [Weekday.Wednesday]: 'Wednesday',
  [Weekday.Thursday]: 'Thursday',
  [Weekday.Friday]: 'Friday',
  [Weekday.Saturday]: 'Saturday',
};

// Using royalty-free music from Pixabay
export const PODCAST_DATA: { [key in Weekday]?: Podcast } = {
  [Weekday.Monday]: {
    title: 'Mindful Monday',
    coverImage: 'https://picsum.photos/seed/monday/800/800',
    audioUrl: 'https://cdn.pixabay.com/audio/2023/10/17/audio_169a79786a.mp3',
  },
  [Weekday.Tuesday]: {
    title: 'Tech Tuesday',
    coverImage: 'https://picsum.photos/seed/tuesday/800/800',
    audioUrl: 'https://cdn.pixabay.com/audio/2022/11/22/audio_1f72a39a8c.mp3',
  },
  [Weekday.Wednesday]: {
    title: 'Wellness Wednesday',
    coverImage: 'https://picsum.photos/seed/wednesday/800/800',
    audioUrl: 'https://cdn.pixabay.com/audio/2023/04/29/audio_f523f063e5.mp3',
  },
  [Weekday.Thursday]: {
    title: 'Thinking Thursday',
    coverImage: 'https://picsum.photos/seed/thursday/800/800',
    audioUrl: 'https://cdn.pixabay.com/audio/2022/10/26/audio_9648c69777.mp3',
  },
  [Weekday.Friday]: {
    title: 'Focus Friday',
    coverImage: 'https://picsum.photos/seed/friday/800/800',
    audioUrl: 'https://cdn.pixabay.com/audio/2024/02/09/audio_659e414c78.mp3',
  },
};
