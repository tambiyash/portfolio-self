import { useCallback, useEffect, useState } from 'react';

interface UseSoundOptions {
  volume?: number;
  loop?: boolean;
}

export const useSound = (src: string, options: UseSoundOptions = {}) => {
  const [audio, setAudio] = useState<HTMLAudioElement | null>(null);

  useEffect(() => {
    const newAudio = new Audio(src);
    newAudio.volume = options.volume || 1;
    newAudio.loop = options.loop || false;
    setAudio(newAudio);

    return () => {
      newAudio.pause();
    };
  }, [src, options.volume, options.loop]);

  const play = useCallback(() => {
    if (audio) {
      if (options.loop) {
        // For looping sounds, only start playing if it's paused.
        if (audio.paused) {
          audio.play().catch(e => console.error("Could not play audio:", e));
        }
      } else {
        // For one-off sounds, always play from the beginning.
        audio.currentTime = 0;
        audio.play().catch(e => console.error("Could not play audio:", e));
      }
    }
  }, [audio, options.loop]);

  const pause = useCallback(() => {
    if (audio) {
      audio.pause();
    }
  }, [audio]);

  return { play, pause };
};