import {Fragment, useEffect, useRef, useState} from 'react';

type VideoPlayerProps = {
  src: string;
}

function VideoPlayer({src}: VideoPlayerProps): JSX.Element {
  const [isLoaded, setIsLoaded] = useState(false);

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

    playerElement.play();
  }, [isLoaded]);

  return (
    <Fragment>
      <div className="trailer__status">
        <video
          src={src}
          ref={videoRef}
          data-testid="video"
        />
      </div>
    </Fragment>
  );
}

export default VideoPlayer;
