import { GetStaticPaths, GetStaticProps, GetStaticPropsContext } from 'next';
import { useRouter } from 'next/router';
import styled from 'styled-components';

interface QueryParams extends NodeJS.Dict<string | string[]> {
  id?: string
}

type Todo = {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
};

export const getStaticProps: GetStaticProps = async (
  context: GetStaticPropsContext<QueryParams>,
) => {
  const { params } = context;
  const response = await fetch(`https://jsonplaceholder.typicode.com/todos/${params?.id}`);
  const todos: Todo = await response.json();
  return {
    props: {
      data: todos,
    },
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const response = await fetch('https://jsonplaceholder.typicode.com/todos/');
  const maxTodos = 20;

  const data: Todo[] = await response.json();
  const paths = data.filter((val) => val.id <= maxTodos).map((val) => ({
    params: { id: String(val.id) },
  }));

  return { paths, fallback: true };
};

const LitList = styled.ul`
  list-style-type: none;
  color: #f2f2f2;
  background-color: #464242;
  width: 50%;
  padding: 0.4rem;
  text-align: center;
  li {
    border-bottom: 1px solid black;
  }
`;

const Completed = styled.span<{ falseOrTrue: boolean }>`
  color: ${({ falseOrTrue }) => (falseOrTrue ? '#4de4e4' : '#f12626')} ;
`;

function TodoDetails({ data }: { data: Todo }) {
  const router = useRouter();

  if (router.isFallback) return <h1>Loading</h1>;

  return (
    <>
      <h1>ITEM</h1>
      <LitList>
        {data
          && (
          <li key={data.id}>
            <p>
              {data.title}
              {' '}
              \\
              {' '}
              <strong>
                USER:
                {' '}
                {data.userId}
              </strong>
            </p>
            <p>
              {data.id}
              {' '}
              \\
              {' '}
              <strong>COMPLETED</strong>
              {' '}
              <Completed falseOrTrue={data.completed}>{String(data.completed)}</Completed>
            </p>
          </li>
          )}
      </LitList>
    </>
  );
}

export default TodoDetails;
