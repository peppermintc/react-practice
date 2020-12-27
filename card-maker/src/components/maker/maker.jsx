import React, { useState, useEffect } from "react";
import Header from "../header/header";
import Footer from "../footer/footer";
import styles from "./maker.module.css";
import { useHistory } from "react-router-dom";
import Editor from "../editor/editor";
import Preview from "../preview/preview";

const Maker = ({ FileInput, authService }) => {
  const [cards, setCards] = useState({
    1: {
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
    2: {
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
    3: {
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
  });

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

  const createOrUpdateCard = (card) => {
    setCards((cards) => {
      const updated = { ...cards };
      updated[card.id] = card;
      return updated;
    });
  };

  const deleteCard = (card) => {
    setCards((cards) => {
      const updated = { ...cards };
      delete updated[card.id];
      return updated;
    });
  };

  return (
    <section className={styles.maker}>
      <Header onLogout={onLogout} />
      <div className={styles.container}>
        <Editor
          FileInput={FileInput}
          cards={cards}
          addCard={createOrUpdateCard}
          updateCard={createOrUpdateCard}
          deleteCard={deleteCard}
        />
        <Preview cards={cards} />
      </div>
      <Footer />
    </section>
  );
};

export default Maker;
