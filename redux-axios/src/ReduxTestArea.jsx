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
  };

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/todos/", {
        params: { completed: false },
        params: { userId: 3 },
        // params: { id: "22" },
      })
      .then((response) => setUser(response.data))
      .catch((error) => console.log(error));
  }, []);

  return (
    <div>
      <textarea
        rows={15}
        cols={83}
        value={JSON.stringify(data)}
        readOnly={true}
      />
      <br />
      <button onClick={() => addDogData}>Click a4</button>
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
