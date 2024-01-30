import {Link} from 'react-router-dom';


function PageNotFoundScreen() {
  return (
    <section>
      <h1>Ошибка 404. Страница не существует.</h1>
      <Link to="/l" style={{padding: 20}}>Main</Link>
    </section>
  );
}

export default PageNotFoundScreen;
