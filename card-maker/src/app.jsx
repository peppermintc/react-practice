import React from "react";
import Login from "./components/login/login";
import styles from "./app.module.css";

function App({ authService }) {
  return (
    <div class={styles.app}>
      <Login authService={authService} />
    </div>
  );
}

export default App;
