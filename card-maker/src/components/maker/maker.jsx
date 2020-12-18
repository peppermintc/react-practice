import React, { useState, useEffect } from "react";
import Header from "../header/header";
import Footer from "../footer/footer";
import styles from "./maker.module.css";
import { useHistory } from "react-router-dom";
import Editor from "../editor/editor";
import Preview from "../preview/preview";

const Maker = ({ authService }) => {
  const [cards, setCards] = useState([
    {
      id: "1",
      name: "Ellie",
      company: "Samsung",
      theme: "dark",
      title: "Software Engineer",
      email: "ellie@gmail.com",
      message: "Go for it",
      fileName: "ellie",
      fileURL: null,
    },
    {
      id: "2",
      name: "Ellie",
      company: "Samsung",
      theme: "light",
      title: "Software Engineer",
      email: "ellie@gmail.com",
      message: "Go for it",
      fileName: "ellie",
      fileURL: "ellie.png",
    },
    {
      id: "3",
      name: "Ellie",
      company: "Samsung",
      theme: "colorful",
      title: "Software Engineer",
      email: "ellie@gmail.com",
      message: "Go for it",
      fileName: "ellie",
      fileURL: null,
    },
  ]);
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
      <div className={styles.container}>
        <Editor cards={cards} />
        <Preview cards={cards} />
      </div>
      <Footer />
    </section>
  );
};

export default Maker;
