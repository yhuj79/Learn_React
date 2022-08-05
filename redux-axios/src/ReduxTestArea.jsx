import { connect } from "react-redux";
import { useState, useEffect } from "react";
import axios from "axios";

const mapStateToProps = (state) => {
  return {
    dogData: state.dogData,
  };
};

function ReduxTestArea({ dogData }) {
  const [data, setData] = useState(dogData);
  const [user, setUser] = useState([]);

  function addDogData() {
    console.log("data");
    dogData.dispatch({
      type: "ADD_DOG_DATA",
      item: {
        a4: "text4",
      },
    });
    setData(dogData);
  }

  const [active, setActive] = useState(false);

  const [optionOne, setOptionOne] = useState();
  const [optionTwo, setOptionTwo] = useState();

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
          completed: optionOne,
          userId: optionTwo,
        },
      })
      .then((response) => setUser(response.data))
      .catch((error) => console.log(error));
  }, [optionOne, optionTwo]);

  return (
    <div>
      <textarea
        rows={15}
        cols={83}
        value={JSON.stringify(data)}
        readOnly={true}
      />
      <br />
      <button onClick={() => addDogData()}>Click a4</button>
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

export default connect(mapStateToProps)(ReduxTestArea);
