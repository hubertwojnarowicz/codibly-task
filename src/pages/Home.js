import { useSearchParams } from 'react-router-dom';
import Header from '../components/Header';
import Main from '../components/Main';

export default function Home() {
  const [searchParams] = useSearchParams();
  const query = searchParams.get('page');
  return (
    <>
      <Header />
      <Main query={query} />
    </>
  );
}
