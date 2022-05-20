import Error from 'next/error';

function NotFound() {
  return <Error title="NOTHING HERE LOL" statusCode={404} />;
}

export default NotFound;
