import {Link} from 'react-router-dom';

function AboutPage(): JSX.Element {

  return (
    <div>
      <h1>About page</h1>
      <Link to={'/'}>Go main</Link>
    </div>
  );
}

export default AboutPage;