import MainScreen from '../../pages/main-screen/main-screen.tsx';

type AppProps = {
  name: string;
  genre: string;
  year: number;
}

export default function App({name, genre, year}: AppProps) {
  return (
    <MainScreen
      name={name}
      genre={genre}
      year={year}
    />
  );
}
