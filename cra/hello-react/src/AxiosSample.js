import { useEffect } from "react";
import axios from "axios";

function AxiosSample() {
  useEffect(() => {
    const url = `https://jsonplaceholder.typicode.com/todos`;
    axios
      .get(url)
      .then((response) => console.log(response))
      .catch((error) => console.log(error));
  }, []);

  return (
    <div>
      <h1>AxiosSample</h1>
    </div>
  );
}

export default AxiosSample;
