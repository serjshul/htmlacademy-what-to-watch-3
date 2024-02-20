import {useEffect, useRef, useState} from 'react';

type VideoPlayerProps = {
  src: string;
  poster: string;
  isFocused: boolean;
}

function VideoPlayer({src, poster, isFocused}: VideoPlayerProps): JSX.Element {
  const [isLoaded, setIsLoaded] = useState(true);

  const videoRef = useRef<HTMLVideoElement | null>(null);

  const handleDataLoaded = () => {
    setIsLoaded(true);
  };

  useEffect(() => {
    const playerElement = videoRef.current;

    if (!playerElement) {
      return;
    }

    playerElement.addEventListener('loadeddata', handleDataLoaded);

    return () => {
      playerElement.removeEventListener('loadeddata', handleDataLoaded);
    };
  }, []);

  useEffect(() => {
    const playerElement = videoRef.current;

    if (!isLoaded || !playerElement) {
      return;
    }

    if (isFocused) {
      playerElement.play();
    } else {
      playerElement.load();
    }
  }, [isLoaded, isFocused]);

  return (
    <div className="trailer__status">
      <video
        loop muted autoPlay={false}
        width="280" height="175"
        src={src}
        poster={poster}
        ref={videoRef}
      />
    </div>
  );
}

export default VideoPlayer;
