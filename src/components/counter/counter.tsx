import {useState} from 'react';
import s from './style.module.scss';

export const Counter = () => {

  const [count, setCount] = useState<number>(0);

  const increment = () => {
    setCount(count + 1);
  }
  return (
    <div className={s.buttonComponent}>
      <h1>{count}</h1>
      <button className={s.buttonComponent__button} onClick={increment}>increment</button>
    </div>
  );
}
