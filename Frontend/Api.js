import axios from "axios";

export default function checkLogin(props) {
  const result = axios
    .post("http://127.0.0.1:8000/api/login", props)
    .then((response) => {
      if (response.status === 200) {
        navigation.replace("UserTypeNav", {
          usertype: response.data.is_provider,
        });
      }
    })
    .catch((error) => {
      console.log("the error is", error);
      
    });
  return result;
}
