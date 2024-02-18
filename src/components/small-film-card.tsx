type SmallFilmCardProps = {
  id: string;
  title: string;
  preview: string;
  handleCardFocus: (evt: any) => void;
}

export default function SmallFilmCard({id, title, preview, handleCardFocus}: SmallFilmCardProps) {
  return (
    <article className="small-film-card catalog__films-card" id={id} onMouseOver={handleCardFocus}>
      <div className="small-film-card__image">
        <img src={preview} alt={title} width="280" height="175" />
      </div>
      <h3 className="small-film-card__title">
        <a className="small-film-card__link" href="film-page.html">{title}</a>
      </h3>
    </article>
  );
}
