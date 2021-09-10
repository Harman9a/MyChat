import React from "react";

import { makeStyles } from "@material-ui/core/styles";
import Avatar from "@material-ui/core/Avatar";
const customStyles = makeStyles(() => ({
  Sroot: {
    display: "flex",
    width: "100%",
  },
  Savatar: {
    display: "inline-block",
    width: 50,
    height: 50,
    marginTop: "auto",
    marginRight: 7,
  },
  Smessage: {
    padding: 15,
    backgroundColor: "#005be3",
    maxWidth: "55vw",
    width: "max-content",
    borderTopRightRadius: 30,
    borderBottomRightRadius: 30,
    borderTopLeftRadius: 35,
    fontSize: 14,
    color: "white",
  },
}));
const SUser: React.FC = () => {
  const styles = customStyles();
  return (
    <div className={styles.Sroot}>
      <Avatar
        className={styles.Savatar}
        src="http://localhost:8100/img/one.jfif"
      />
      <div className={styles.Smessage}>
        Hello, thanks for reaching out. How is the terms
      </div>
    </div>
  );
};

export default SUser;
