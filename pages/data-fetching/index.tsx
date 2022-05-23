import { GetStaticPropsResult } from 'next';
import Link from 'next/link';
import styled from 'styled-components';

type Todo = {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
};

export async function getStaticProps(): Promise<GetStaticPropsResult<{ data: Todo[] }>> {
  const response = await fetch('https://jsonplaceholder.typicode.com/todos');
  const todos: Todo[] = await response.json();
  return {
    props: {
      data: todos,
    },
  };
}

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

function DataFetchingPage({ data }: { data: Todo[] }) {
  return (
    <>
      <h1>Retrieved Data</h1>
      <LitList>
        {data && data.map((todo) => (
          <li key={todo.id}>
            <p>
              <Link href={`/todos/${todo.id}`}>
                {todo.title}
              </Link>

              {' '}
              \
              {' '}
              <strong>
                USER:
                {' '}
                {todo.userId}
              </strong>
            </p>
            <p>
              {todo.id}
              {' '}
              \\
              {' '}
              <strong>COMPLETED</strong>
              {' '}
              <Completed falseOrTrue={todo.completed}>{String(todo.completed)}</Completed>
            </p>
          </li>
        ))}
      </LitList>
    </>
  );
}

export default DataFetchingPage;
