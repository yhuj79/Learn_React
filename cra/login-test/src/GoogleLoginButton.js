import { GoogleLogin } from "@react-oauth/google";
import { GoogleOAuthProvider } from "@react-oauth/google";
import axios from "axios";

const GoogleLoginButton = () => {
  return (
    <div style={{ margin: "30px" }}>
      <GoogleOAuthProvider clientId={process.env.REACT_APP_CLIENT_ID}>
        <GoogleLogin
          onSuccess={(res) => {
            axios
              .post("http://localhost:8000/api/login", {
                data: res,
              })
              .then((res) => {
                if (res.status === 200) {
                  console.log("login success!");
                } else {
                  console.log("login error...");
                }
              });
          }}
          onFailure={(err) => {
            console.log(err);
          }}
        />
      </GoogleOAuthProvider>
    </div>
  );
};

export default GoogleLoginButton;
