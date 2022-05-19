// domain.com/news
import styled from 'styled-components';

const Memes = styled.div`
  background-color: black;
  width: 200px;
  height: 200px;
  h1 {
    color: #f6f6f6;
  }
`;

function News() {
  return (
    <Memes>
      <h1>News Page</h1>
    </Memes>
  );
}

export default News;
