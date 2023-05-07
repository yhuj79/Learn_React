import { GoogleLogin } from "@react-oauth/google";
import { GoogleOAuthProvider } from "@react-oauth/google";
import jwtDecode from "jwt-decode";

const GoogleLoginButton = () => {
  return (
    <div style={{ margin: "30px" }}>
      <GoogleOAuthProvider clientId={process.env.REACT_APP_CLIENT_ID}>
        <GoogleLogin
          onSuccess={(res) => {
            console.log(jwtDecode(res.credential));
            window.localStorage.setItem(
              "user_email",
              jwtDecode(res.credential).email
            );
            window.localStorage.setItem(
              "user_name",
              jwtDecode(res.credential).given_name
            );
            window.localStorage.setItem(
              "user_img",
              jwtDecode(res.credential).picture
            );
            // Local Storage 만료시간 설정
            window.location.reload();
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
