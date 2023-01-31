import {Link} from 'react-router-dom';

function MainPage(): JSX.Element {

  return (
    <div>
      <h1>Main page</h1>
      <Link to={'/about'}>Go about</Link>
    </div>
  );
}

export default MainPage;
