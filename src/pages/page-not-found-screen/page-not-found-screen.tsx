import {Link} from 'react-router-dom';
import {AppRoute} from '../../components/const.ts';


function PageNotFoundScreen() {
  return (
    <section>
      <h1>Ошибка 404. Страница не существует.</h1>
      <Link to={AppRoute.Main} style={{padding: 20}}>Main</Link>
    </section>
  );
}

export default PageNotFoundScreen;
