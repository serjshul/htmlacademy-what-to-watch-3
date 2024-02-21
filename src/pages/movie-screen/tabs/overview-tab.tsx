type OverviewTabProps = {
  description: string;
  director: string;
  cast: string[];
  rating: number;
  ratingDescription: string;
  ratingCounter: number;
}

export default function OverviewTab(
  {description, director, cast, rating, ratingDescription, ratingCounter}: OverviewTabProps
) {
  return (
    <div className="film-card__desc">
      <div className="film-rating">
        <div className="film-rating__score">{rating}</div>
        <p className="film-rating__meta">
          <span className="film-rating__level">{ratingDescription}</span>
          <span className="film-rating__count">{ratingCounter} ratings</span>
        </p>
      </div>

      <div className="film-card__text">
        <p>{description}</p>
        <p className="film-card__director"><strong>Director: {director}</strong></p>
        <p className="film-card__starring"><strong>Starring: {cast.join(', ')}</strong></p>
      </div>
    </div>
  );
}
