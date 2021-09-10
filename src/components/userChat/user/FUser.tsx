import React from "react";

import { makeStyles } from "@material-ui/core/styles";

const customStyles = makeStyles(() => ({
  Froot: {
    width: "100%",
  },
  Fmessage: {
    padding: 15,
    background: "linear-gradient(245deg, #5a0490 6.25%, #cd19d7 100%)",
    color: "white",
    maxWidth: "57vw",
    width: "max-content",
    borderTopLeftRadius: 30,
    borderBottomLeftRadius: 30,
    borderTopRightRadius: 35,
    fontSize: 14,
    float: "right",
    margin: "1rem 0rem",
  },
}));
const FUser: React.FC = () => {
  const styles = customStyles();
  return (
    <div className={styles.Froot}>
      <div className={styles.Fmessage}>
        Hello Daniel, Godaddy here. We saw your works lately and we would like
        to know if you're available to work with us as a frontend engineer.
      </div>
    </div>
  );
};

export default FUser;
