import React, { useEffect, useState } from "react";
import Loading from "./layout/loading";
import Frame from "./layout/frame";
import MessengerLogin from "./containers/messengerLogin";
import MessengerSignUp from "./containers/messengerSignUp";
import { Route, Switch, BrowserRouter as Router } from "react-router-dom";

function App() {
  const [loading, setLoading] = useState(true);
  const [dotCount, setDotCount] = useState(1);
  const [mode, setMode] = useState();

  const Login = ["login 1", "login 2", "wellcome"];
  const SignUp = ["signup 1", "signup 2", "signup 3", "wellcome"];

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  const handleMode = (text) => {
    if (text === "go to signup 1") {
      setMode("signup 1");
      setDotCount(1);
    } else if (text === "go to login 1") {
      setMode("login 1");
      setDotCount(1);
    } else if (text === "wellcome") {
      // call server for entering the app
    } else {
      setDotCount(dotCount + 1);
      const [newMode, _] = text.split(" ");
      if (newMode === "login") setMode(Login[dotCount]);
      if (newMode === "signup") setMode(SignUp[dotCount]);
    }
  };

  if (loading) {
    return <Loading />;
  }
  return (
    <Router>
      <Switch>
        <Frame>
          <Route path="/login">
            <MessengerLogin
              mode={mode || "login 1"}
              onModeChange={handleMode}
              dotCount={dotCount}
            />
          </Route>
          <Route path="/signup">
            <MessengerSignUp
              mode={mode || "signup 1"}
              onModeChange={handleMode}
              dotCount={dotCount}
            />
          </Route>
        </Frame>
      </Switch>
    </Router>
    //
  );
}

export default App;
