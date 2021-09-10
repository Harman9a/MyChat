import React, { useState } from "react";

import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import IconButton from "@material-ui/core/IconButton";
import SendIcon from "@material-ui/icons/Send";
import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonInput,
  IonItem,
  IonLabel,
  IonList,
  IonItemDivider,
} from "@ionic/react";
const customStyles = makeStyles(() => ({
  root: {
    bottom: 0,
    zIndex: 999,
    position: "fixed",
    width: "100vw !important",
    backgroundColor: "#1f1f1f",
  },
  input: {
    backgroundColor: "#1f1f1f",
    padding: "1rem",
  },
  realInput: {
    backgroundColor: "#ffffffba",
    borderRadius: "50px",
    width: "100%",
    color: "black",
    margin: "5px",
  },
}));

const InputField: React.FC = () => {
  const [message, setMessage] = useState("");

  const handleSubmit = (e: any) => {
    e.preventDefault();
    setMessage("");
  };

  const styles = customStyles();
  return (
    <div className={styles.root}>
      <Grid container className={styles.input}>
        <Grid item xs={10} sm={10} md={10}>
          <IonInput
            className={styles.realInput}
            placeholder="Enter Input"
          ></IonInput>
        </Grid>
        <Grid item xs={2} sm={2} md={2}>
          <IconButton aria-label="delete" style={{ color: "#cd19d7" }}>
            <SendIcon style={{ fontSize: 27 }} />
          </IconButton>
        </Grid>
      </Grid>
    </div>
  );
};

export default InputField;
