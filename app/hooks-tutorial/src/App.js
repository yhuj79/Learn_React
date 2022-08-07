import { useState } from 'react';
import Counter from './Counter';
import UseStateArray from './UseStateArray';

const App = () => {
  const [visible, setVisible] = useState(false);
  return (
    <div style={{ padding: '30px' }}>
      <button onClick={() => {
        setVisible(!visible);
      }}>{visible ? '숨기기' : '보이기'}</button>
      <hr />
      {visible && <Counter />}
      <br />
      <UseStateArray />
    </div>
  )
}

export default App;