import SmallFilmCard from '../../components/small-film-card.tsx';
import {Films} from '../../types/film.ts';
import {useState} from 'react';

type MyListScreenProps = {
  films: Films;
}

export default function MyListScreen({films}: MyListScreenProps) {
  const [, setActiveCardId] = useState('initialValue');

  const handleCardFocusEvent = (evt: any) => {
    setActiveCardId(evt.currentTarget.id);
  };

  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8"/>
        <title>WTW</title>
        <meta name="robots" content="noindex, nofollow"/>
        <meta name="viewport" content="width=device-width, initial-scale=1"/>
        <link rel="stylesheet" href="css/main.min.css"/>
      </head>

      <body>
        <div className="visually-hidden"></div>

        <div className="user-page">
          <header className="page-header user-page__head">
            <div className="logo">
              <a href="main.html" className="logo__link">
                <span className="logo__letter logo__letter--1">W</span>
                <span className="logo__letter logo__letter--2">T</span>
                <span className="logo__letter logo__letter--3">W</span>
              </a>
            </div>

            <h1 className="page-title user-page__title">My list <span className="user-page__film-count">9</span></h1>
            <ul className="user-block">
              <li className="user-block__item">
                <div className="user-block__avatar">
                  <img src="img/avatar.jpg" alt="User avatar" width="63" height="63"/>
                </div>
              </li>
              <li className="user-block__item">
                <a className="user-block__link">Sign out</a>
              </li>
            </ul>
          </header>

          <section className="catalog">
            <h2 className="catalog__title visually-hidden">Catalog</h2>

            <div className="catalog__films-list">
              {films.map((film) =>
                <SmallFilmCard
                  id={film.id}
                  key={film.title}
                  title={film.title}
                  preview={film.preview}
                  handleCardFocus={handleCardFocusEvent}
                />
              )}
            </div>
          </section>

          <footer className="page-footer">
            <div className="logo">
              <a href="main.html" className="logo__link logo__link--light">
                <span className="logo__letter logo__letter--1">W</span>
                <span className="logo__letter logo__letter--2">T</span>
                <span className="logo__letter logo__letter--3">W</span>
              </a>
            </div>

            <div className="copyright">
              <p>© 2019 What to watch Ltd.</p>
            </div>
          </footer>
        </div>
      </body>
    </html>
  );
}
