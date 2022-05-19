// domain.com/news/1
// Dynamic paths are created using brackets on file name
import { useRouter } from 'next/router';
import styled from 'styled-components';

const Memes = styled.div`
  background-color: black;
  width: 200px;
  height: 200px;
  h1 {
    color: #f6f6f6;
  }
`;

function NewsDetails() {
  // through the query propety it's possible to retrieve the dynamic path
  const { query: { id } } = useRouter();

  return (
    <Memes>
      <h1>
        News
        {' '}
        {id}
      </h1>
    </Memes>
  );
}

export default NewsDetails;
