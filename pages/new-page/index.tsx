import Head from 'next/head';
import Image from 'next/image';
import styled from 'styled-components';
import python from '@/images/python.png';

const DivImage = styled.div`
  width: 200px;
  height: 200px;
  background-color: black;
  background-image: url("/images/python.png");
`;

function NewPage() {
  return (
    <>
      <Head>
        <title>New Page WOW!!!!</title>
      </Head>
      <Image src={python} alt="python-logo" />
      <h1>New Page WOW!!!</h1>
      <DivImage />
    </>
  );
}

export default NewPage;
