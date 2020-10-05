import React, { Component } from "react";
import { makeStyles } from "@material-ui/core/styles";

export default function Show(props) {
  const useStyles = makeStyles((theme) => ({
    showImg: {
      height: "50vh",
      width: "80vh",
    },
  }));
  const classes = useStyles();
  return (
    <div>
      {props.location.state.tile.name}
      <br />
      <img
        className={classes.showImg}
        src={props.location.state.tile.gif_url}
      />
      <br />
      {props.location.state.tile.description}
    </div>
  );
}
