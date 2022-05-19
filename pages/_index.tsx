// domail.com/
import Link from 'next/link';

function HomePage() {
  return (
    <>
      <h1>The News Page</h1>
      <ul>
        <li>
          <Link href="news/1">
            First News
          </Link>
        </li>
        <li>
          <Link href="news/2">
            Second News
          </Link>
        </li>
        <li>
          <Link href="news/3">
            Third News
          </Link>
        </li>
      </ul>
    </>
  );
}

export default HomePage;
