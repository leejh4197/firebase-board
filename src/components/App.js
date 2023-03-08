import { useEffect, useState } from "react";
import { auth } from "fbase";
import Router from "components/Router";
import { onAuthStateChanged } from "firebase/auth";

function App() {
  const [init, setInit] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if (user) {
        setIsLoggedIn(true);
      } else {
        setIsLoggedIn(false);
      }
      setInit(true);
    });
  }, []);
  return (
    <>
      {init ? <Router isLoggedIn={isLoggedIn} /> : "Initailizing"}
      <span>&copy; {new Date().getFullYear()}파이어베이스 연습</span>
    </>
  );
}

export default App;
