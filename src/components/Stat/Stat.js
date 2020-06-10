import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import VirtualizedList from "./VirtualizedList";
import FolderList from "./FolderList";

const useStyles = makeStyles({
  root: {
    minWidth: 400,
    minHeight: 280,
  },
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)",
  },
  title: {
    fontSize: 14,
    color: "black",
  },
  pos: {
    marginBottom: 12,
  },
  buttongroup: {
    margin: 12,
  },
  submit: {
    display: "flex",
    justifyContent: "center",
  },
  content: {
    display: "flex",
    justifyContent: "center",
  },
});

export default function Stat() {
  const [value, onChange] = useState(new Date());
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardContent className={classes.content}>
        <VirtualizedList />
      </CardContent>
    </Card>
  );
}
