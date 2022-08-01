import { useState, useEffect } from "react";

const getConnection = () => {
  return navigator.onLine;
};
const useConnection = () => {
  let [connection, updateNetworkConnection] = useState(getConnection());
  useEffect(() => {
    const switchOnline = () => updateNetworkConnection(true);
    const switchOffline = () => updateNetworkConnection(false);

    window.addEventListener("online", switchOnline);
    window.addEventListener("offline", switchOffline);
    return () => {
      window.removeEventListener("online", switchOnline);
      window.removeEventListener("offline", switchOffline);
    };
  }, [connection]);

  return connection;
};

export default useConnection;
