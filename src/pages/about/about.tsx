import {Link} from 'react-router-dom';
import {Counter} from '../../components/counter/counter';

function AboutPage(): JSX.Element {

  return (
    <div>
      <h1>About page</h1>
      <Link to={'/'}>Go main</Link>

      <Counter/>
    </div>
  );
}

export default AboutPage;