import React, { useEffect } from "react";
import Header from "../header/header";
import Footer from "../footer/footer";
import styles from "./maker.module.css";
import { useHistory } from "react-router-dom";

const Maker = ({ authService }) => {
  const history = useHistory();
  const onLogout = () => {
    authService.logout();
  };

  useEffect(() => {
    authService.onAuthChange((user) => {
      if (!user) {
        history.push("/");
      }
    });
  });

  return (
    <section className={styles.maker}>
      <Header onLogout={onLogout} />
      <Footer />
    </section>
  );
};

export default Maker;
