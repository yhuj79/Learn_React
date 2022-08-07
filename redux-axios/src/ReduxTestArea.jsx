import "./ReduxTestArea.css";
import { useState, useEffect } from "react";
import axios from "axios";
import { useStateValue } from "./store/StateProvider";

function ReduxTestArea() {
  const [user, setUser] = useState([]);
  const [initialState, dispatch] = useStateValue();
  const [activeOne, setActiveOne] = useState(false);
  const [activeTwo, setActiveTwo] = useState(false);

  const SetTrue = () => {
    if (!activeOne) {
      dispatch({
        type: "SET_TRUE",
      });
      setActiveOne(true);
    } else {
      dispatch({
        type: "DEL_TRUE",
      });
      setActiveOne(false);
    }
  };
  const SetOne = () => {
    if (!activeTwo) {
      dispatch({
        type: "SET_ONE",
      });
      setActiveTwo(true);
    } else {
      dispatch({
        type: "DEL_ONE",
      });
      setActiveTwo(false);
    }
  };

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
      <button
        className="margin"
        style={activeOne ? { backgroundColor: "green" } : {}}
        onClick={() => SetTrue()}
      >
        SetTrue Click
      </button>
      <button
        className="margin"
        style={activeTwo ? { backgroundColor: "green" } : {}}
        onClick={() => SetOne()}
      >
        SetOne Click
      </button>
      <br />
      <div
        className="margin"
        style={{ display: "flex", justifyContent: "center" }}
      >
        <textarea
          className="margin"
          rows={40}
          cols={50}
          value={JSON.stringify(initialState)}
          readOnly={true}
        />
        <textarea
          className="margin"
          rows={40}
          cols={50}
          value={JSON.stringify(user, null, 3)}
          readOnly={true}
        />
      </div>
    </div>
  );
}

export default ReduxTestArea;
