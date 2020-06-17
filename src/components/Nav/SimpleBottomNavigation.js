import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import BottomNavigation from "@material-ui/core/BottomNavigation";
import BottomNavigationAction from "@material-ui/core/BottomNavigationAction";
import { Link } from "react-router-dom";
import CreateIcon from "@material-ui/icons/Create";
import MenuBookIcon from "@material-ui/icons/MenuBook";

const useStyles = makeStyles({
  root: {
    width: 400,
    marginTop: 10,
  },
  test: {
    color: "black",
  },
});

export default function SimpleBottomNavigation() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  return (
    <BottomNavigation
      value={value}
      onChange={(event, newValue) => {
        setValue(newValue);
      }}
      showLabels
      className={classes.root}
    >
      <BottomNavigationAction
        component={Link}
        to="/"
        label="Log"
        icon={<CreateIcon />}
      />
      <BottomNavigationAction
        component={Link}
        to="/stat"
        label="Stats"
        icon={<MenuBookIcon />}
      />
    </BottomNavigation>
  );
}
