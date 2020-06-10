import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import ButtonGroup from "@material-ui/core/ButtonGroup";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import firebase from "../../firebase";

const db = firebase.firestore();

const useStyles = makeStyles({
  root: {
    minWidth: 400,
    minHeight: 350,
  },
  title: {
    fontSize: 14,
    color: "black",
  },
  buttongroup: {
    margin: 12,
  },
  submit: {
    display: "flex",
    justifyContent: "center",
  },
});

export default function Log() {
  const classes = useStyles();
  const [mood, setMood] = useState(-1);
  const [description, setDescription] = useState("");

  const handleClick = (which) => {
    setMood(which);
    console.log(which);
  };

  const handleSubmit = () => {
    if (mood === -1) alert("Select mood!");
    else {
      db.collection("mood")
        .add({
          mood: mood,
          description: description,
          timestamp: Date.now(),
        })
        .then(function (docRef) {
          console.log("Document written with ID: ", docRef.id);
          alert("added to database");
          // alert(`${mood} ${description}`);
        })
        .catch(function (error) {
          console.error("Error adding document: ", error);
        });
    }
  };

  return (
    <Card className={classes.root}>
      <CardContent>
        <Typography
          className={classes.title}
          color="textSecondary"
          gutterBottom
        >
          Today's Mood
        </Typography>
        <ButtonGroup
          variant="contained"
          color="primary"
          aria-label="contained primary button group"
          className={classes.buttongroup}
        >
          <Button
            color={mood === 0 ? "secondary" : "primary"}
            onClick={() => handleClick(0)}
          >
            Good
          </Button>
          <Button
            color={mood === 1 ? "secondary" : "primary"}
            onClick={() => handleClick(1)}
          >
            Soso
          </Button>
          <Button
            color={mood === 2 ? "secondary" : "primary"}
            onClick={() => handleClick(2)}
          >
            Angry
          </Button>
        </ButtonGroup>
        <Typography
          className={classes.title}
          color="textSecondary"
          gutterBottom
        >
          Description
        </Typography>
        <TextField
          id="outlined-multiline-static"
          label="Text"
          multiline
          rows={4}
          placeholder="Write Here"
          variant="outlined"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
      </CardContent>
      <CardActions className={classes.submit}>
        <Button variant="contained" color="primary" onClick={handleSubmit}>
          Submit
        </Button>
      </CardActions>
    </Card>
  );
}
