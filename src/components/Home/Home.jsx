import { CircularProgress, Container, Typography } from "@material-ui/core";
import React from "react";
import food from "../../assets/food.png";

import { useStyles } from "./styles";

const Home = ({ loading }) => {
  const classes = useStyles();

  return (
    <>
      <Container>
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
          {loading && (
            <div className={classes.icon}>
              <CircularProgress size="7vw" />
            </div>
          )}
          <div>
            <img src={food} alt="dish" className={classes.image} />
          </div>
        </div>
      </Container>
    </>
  );
};

export default Home;
