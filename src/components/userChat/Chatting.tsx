import React, { useContext } from "react";
import { makeStyles } from "@material-ui/core/styles";
import FUser from "./user/FUser";
import SUser from "./user/SUser";

const customStyles = makeStyles(() => ({
  root: {
    margin: 10,
    marginTop: 77,
    marginBottom: 80,
  },
  chatSectionDay: {
    backgroundColor: "#1f1f1f",
    borderRadius: "20px",
    padding: 8,
    width: 70,
    color: "white",
    fontSize: 13,
    textAlign: "center",
  },
  day: {
    display: "flex",
    justifyContent: "center",
  },
}));
const Chatting: React.FC = () => {
  const styles = customStyles();
  return (
    <div className={styles.root}>
      <div className={styles.day}>
        <p className={styles.chatSectionDay}>
          <b>TODAY</b>
        </p>
      </div>
      <SUser />
      <FUser />
      <SUser />
    </div>
  );
};

export default Chatting;
