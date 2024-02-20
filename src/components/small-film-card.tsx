import {Link} from 'react-router-dom';
import VideoPlayer from './video-player.tsx';

type SmallFilmCardProps = {
  id: number;
  title: string;
  preview: string;
  video: string;
  isFocused: boolean;
  handleCardFocus: (evt: any) => void;
}

export default function SmallFilmCard({id, title, preview, video, isFocused, handleCardFocus}: SmallFilmCardProps) {
  const currentLink = `/films/${id}`;

  return (
    <article className="small-film-card catalog__films-card" id={id.toString()} onMouseOver={handleCardFocus}>
      <div className="small-film-card__image">
        <VideoPlayer
          src={video}
          poster={preview}
          isFocused={isFocused}
        />
      </div>
      <Link to={currentLink}>
        <h3 className="small-film-card__title">
          <a className="small-film-card__link">{title}</a>
        </h3>
      </Link>
    </article>
  );
}
