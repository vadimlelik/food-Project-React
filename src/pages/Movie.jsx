import { useHistory, useParams } from 'react-router-dom';

export default function Movie() {
  const { title } = useParams();
  const { goBack } = useHistory();
  return (
    <>
      {' '}
      <h1> Movie{title}</h1>
      <button onClick={goBack} className="btn">
        Go back
      </button>
    </>
  );
}
