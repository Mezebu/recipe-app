import { Typography } from "@material-ui/core";
import React from "react";
import food from "../../assets/food.png";

import { useStyles } from "./styles";

const Home = () => {
  const classes = useStyles();

  return (
    <>
      <div className={classes.root}>
        <div>
          <Typography
            variant="body2"
            color="textPrimary"
            className={classes.fonts}
          >
            It's not just food, it's an experience.
          </Typography>
        </div>
        <div>
          <img src={food} alt="dish" className={classes.image} />
        </div>
      </div>
    </>
  );
};

export default Home;
