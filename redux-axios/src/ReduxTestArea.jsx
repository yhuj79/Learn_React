import { useState, useEffect } from "react";
import axios from "axios";

import { useStateValue } from "./store/StateProvider";

function ReduxTestArea() {
  const [user, setUser] = useState([]);
  const [active, setActive] = useState(false);
  const [optionOne, setOptionOne] = useState();
  const [optionTwo, setOptionTwo] = useState();

  const [initialState, dispatch] = useStateValue();
  const TrueAndTwo = () => {
    dispatch({
      type: "SET_TRUE_TWO",
    });
  };
  const FalseAndOne = () => {
    dispatch({
      type: "SET_FALSE_ONE",
    });
  };

  function ClickOne() {
    setActive(!active);
    if (!active) {
      setOptionOne("true");
    } else {
      setOptionOne();
    }
  }
  function ClickTwo() {
    setOptionTwo("2");
  }

  useEffect(() => {
    axios
      .get(`https://jsonplaceholder.typicode.com/todos`, {
        params: {
          completed: initialState.completed,
          userId: initialState.userId,
        },
      })
      .then((response) => setUser(response.data))
      .catch((error) => console.log(error));
  }, [initialState.completed, initialState.userId]);

  return (
    <div>
      <button onClick={() => TrueAndTwo()}>TrueAndTwo Click</button>
      <button onClick={() => FalseAndOne()}>FalseAndOne Click</button>
      <br />
      <textarea
        rows={15}
        cols={83}
        value={JSON.stringify(initialState)}
        readOnly={true}
      />
      <br />
      <button
        onClick={() => ClickOne()}
        style={active ? { backgroundColor: "green" } : {}}
      >
        Completed True
      </button>
      <button onClick={() => ClickTwo()}>UserID 2</button>
      <br />
      <textarea
        rows={30}
        cols={83}
        value={JSON.stringify(user, null, 3)}
        readOnly={true}
      />
    </div>
  );
}

export default ReduxTestArea;
