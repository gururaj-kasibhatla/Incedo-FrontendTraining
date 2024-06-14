import { useParams } from 'react-router-dom';

export default function About() {
  var { name } = useParams();

  return (
    <>
      <h1>About Page: {name}</h1>
    </>
  );
}