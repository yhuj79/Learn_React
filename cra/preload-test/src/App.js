import { useState, useEffect } from "react";
import logo from "./logo.svg";
import "./App.css";

function App() {
  function preloading(imageArray) {
    imageArray.forEach((url) => {
      const image = new Image();
      image.src = url;
    });
  }

  useEffect(() => {
    preloading([
      "https://lh3.googleusercontent.com/u/0/drive-viewer/AKGpihbPQSyTMSmmkOCruRV1l_3cX9tJs9NXeTXQ_xIA2Z18-Ed4YGmHZ-zIY0ZdD5NtjH0fDMu2a6rjbW5mmNxzDoCbuUo7GT5aCA=w2048-h2012-rw-v1",
      "https://lh3.googleusercontent.com/u/0/drive-viewer/AKGpihYifwHaoDqGQldBRMmNZ4GJt40cnQs5-Rc5H6_rT033cgf0a3GUE3KYcnTYvB_S3OzZRdi6tlqvegldJoBWlQvsaBiJrjMqgw4=w2048-h2012-rw-v1",
      "https://lh3.googleusercontent.com/u/0/drive-viewer/AKGpihYrHipSp9uwIfcBZhdZwlzuwTFcvD1Yd74dgsF5k20gezp_iwnoEHNqYubttNjOPx956uBo-JwAXd58pvkpKBErhXQNFT9fDw=w2048-h2012-rw-v1",
      "https://lh3.googleusercontent.com/u/0/drive-viewer/AKGpihZIBlEwMvqnwwOkDLo5OSFKwXk9b2lzK0Ijs_9VNUpfasm_kMYKsilR_4cv1fpWfYW1AiI2M_wqr2glVyRiHSOVd39b7Id8_NQ=w2048-h2012-rw-v1",
      "https://lh3.googleusercontent.com/u/0/drive-viewer/AKGpihbzzfN_xGr1qMuAnIqy2zY8M5yDcqkdeEgh_AWqpFOpiFedzCVv6NnZGWUDHudjTzlGiFgax_-K1FuThhhmY_Ja3RBbKa1H70k=w2048-h2012-rw-v1",
      "https://lh3.googleusercontent.com/u/0/drive-viewer/AKGpihYQSBlB1iVNErSF4CGJHUjxz0HpA41bWvi9YHK_TwPxkSmGTxeyvxqnkKJAzte5FsOsK4G6yhn9OjQY-W_5VjDM4B7bbvJ_jQ=w2048-h2012-rw-v1",
      "https://lh3.googleusercontent.com/u/0/drive-viewer/AKGpihZM7t6SzaahnXFSJWBRk9fasMEHa6eohEDg1Yhh1ZB9HExAXn1s9EOp_mqjxZzSplld7iUzuseGWCvj-2sINSOW4rWGVanLaQ=w2048-h2012-rw-v1",
      "https://lh3.googleusercontent.com/u/0/drive-viewer/AKGpihawMFko7-Rt-j7HsAdpgrl16Nl_53Te5Le5BMteV4sVqrz0VWuNQ73xY6mlyZHkrHMEW5HEg8oW9J6J6SeZsEOvq4IBOXefaoo=w2048-h2012-rw-v1",
      "https://lh3.googleusercontent.com/u/0/drive-viewer/AKGpihaUZsFb1gTWS8LERLchQ1jah9twGrkhIPCc8jUPsRfkPecFlMZE8v_VxsHfCMnHz6eO03Yj97CpIC0CCgylO3XaK_YmOo8bfvo=w2048-h2012-rw-v1",
    ]);
  }, []);

  const arrImg = [
    "https://lh3.googleusercontent.com/u/0/drive-viewer/AKGpihbPQSyTMSmmkOCruRV1l_3cX9tJs9NXeTXQ_xIA2Z18-Ed4YGmHZ-zIY0ZdD5NtjH0fDMu2a6rjbW5mmNxzDoCbuUo7GT5aCA=w2048-h2012-rw-v1",
    "https://lh3.googleusercontent.com/u/0/drive-viewer/AKGpihYifwHaoDqGQldBRMmNZ4GJt40cnQs5-Rc5H6_rT033cgf0a3GUE3KYcnTYvB_S3OzZRdi6tlqvegldJoBWlQvsaBiJrjMqgw4=w2048-h2012-rw-v1",
    "https://lh3.googleusercontent.com/u/0/drive-viewer/AKGpihYrHipSp9uwIfcBZhdZwlzuwTFcvD1Yd74dgsF5k20gezp_iwnoEHNqYubttNjOPx956uBo-JwAXd58pvkpKBErhXQNFT9fDw=w2048-h2012-rw-v1",
    "https://lh3.googleusercontent.com/u/0/drive-viewer/AKGpihZIBlEwMvqnwwOkDLo5OSFKwXk9b2lzK0Ijs_9VNUpfasm_kMYKsilR_4cv1fpWfYW1AiI2M_wqr2glVyRiHSOVd39b7Id8_NQ=w2048-h2012-rw-v1",
    "https://lh3.googleusercontent.com/u/0/drive-viewer/AKGpihbzzfN_xGr1qMuAnIqy2zY8M5yDcqkdeEgh_AWqpFOpiFedzCVv6NnZGWUDHudjTzlGiFgax_-K1FuThhhmY_Ja3RBbKa1H70k=w2048-h2012-rw-v1",
    "https://lh3.googleusercontent.com/u/0/drive-viewer/AKGpihYQSBlB1iVNErSF4CGJHUjxz0HpA41bWvi9YHK_TwPxkSmGTxeyvxqnkKJAzte5FsOsK4G6yhn9OjQY-W_5VjDM4B7bbvJ_jQ=w2048-h2012-rw-v1",
    "https://lh3.googleusercontent.com/u/0/drive-viewer/AKGpihZM7t6SzaahnXFSJWBRk9fasMEHa6eohEDg1Yhh1ZB9HExAXn1s9EOp_mqjxZzSplld7iUzuseGWCvj-2sINSOW4rWGVanLaQ=w2048-h2012-rw-v1",
    "https://lh3.googleusercontent.com/u/0/drive-viewer/AKGpihawMFko7-Rt-j7HsAdpgrl16Nl_53Te5Le5BMteV4sVqrz0VWuNQ73xY6mlyZHkrHMEW5HEg8oW9J6J6SeZsEOvq4IBOXefaoo=w2048-h2012-rw-v1",
    "https://lh3.googleusercontent.com/u/0/drive-viewer/AKGpihaUZsFb1gTWS8LERLchQ1jah9twGrkhIPCc8jUPsRfkPecFlMZE8v_VxsHfCMnHz6eO03Yj97CpIC0CCgylO3XaK_YmOo8bfvo=w2048-h2012-rw-v1",
  ];

  const [num, setNum] = useState(0);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <h1>{num}</h1>
      <button onClick={() => setNum(num + 1)}>+</button>
      <button onClick={() => setNum(num - 1)}>-</button>
      <br />
      <img className="App-img" alt="" src={arrImg[num]} />
    </div>
  );
}

export default App;
