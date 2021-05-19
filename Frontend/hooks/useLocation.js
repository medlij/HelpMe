import { useEffect, useState } from "react";
import * as Location from "expo-location";

export default function useLocation() {
  const [location, setLocation] = useState(null);
  const [errorMsg, setErrorMsg] = useState(null);

  useEffect(() => {
    (async () => {
      let { granted } = await Location.requestForegroundPermissionsAsync();
      if (!granted) {
        setErrorMsg("Permission to access location was denied");
        return;
      }

      const {
        coords: { latitude, longitude },
      } = await Location.getCurrentPositionAsync({});
      setLocation({ latitude, longitude });
    })();
  }, []);

  let res = "Waiting..";
  if (errorMsg) {
    res = errorMsg;
  } else if (location) {
    res = JSON.stringify(location);
  }

  return res;
}
