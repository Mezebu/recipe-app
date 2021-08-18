import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import clsx from "clsx";
import {
  Card,
  Grid,
  IconButton,
  CardHeader,
  CardMedia,
  CardContent,
  CardActions,
  Collapse,
  Typography,
} from "@material-ui/core";
import Avatar from "@material-ui/core/Avatar";
import { green } from "@material-ui/core/colors";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

const useStyles = makeStyles((theme) => ({
  root: {
    background: "rgba( 255, 255, 255, 0.40 )",
    "&:hover": {
      background: "rgba(255, 255, 255, 0)",
      backdropFilter: "blur(4px)",
      WebkitBackdropFilter: "blur(4px)",
      boxShadow: "0 8px 32px 0 rgba( 31, 38, 135, 0.37 )",
      border: "3px solid rgba( 255, 255, 255, 0.28 )",
    },
  },
  media: {
    height: 0,
    paddingTop: "56.25%", // 16:9
  },
  expand: {
    transform: "rotate(0deg)",
    marginLeft: "auto",
    transition: theme.transitions.create("transform", {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: "rotate(180deg)",
  },
  avatar: {
    backgroundColor: green[400],
    background: "rgba( 255, 255, 255, 0.25 )",
  },
}));

//prettier-ignore
const Recipe = ({ dishType, calories, image, cuisine, ingredients, title, healthInfo}) => {
  const classes = useStyles();

  const [expanded, setExpanded] = useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Grid item xs={12} sm={6} md={4}>
      <Card className={classes.root}>
        <CardHeader
          avatar={
            <Avatar aria-label="recipe" className={classes.avatar}>
              E
            </Avatar>
          }
          title={title}
          subheader={cuisine}
        />
        <CardMedia className={classes.media} image={image} title={title} />
        <CardContent>
          {title && (
            <>
              <Typography variant="body2" color="textPrimary">
            <strong>Calories</strong> : {Math.ceil(calories)} kcal <br />
            <strong>Diet Labels</strong> : {healthInfo.join(", ")} <br />
            <strong>Dish Type</strong> : {dishType}
          </Typography>
            </>
          )} 
        </CardContent>
        <CardActions disableSpacing>
          <IconButton
            className={clsx(classes.expand, {
              [classes.expandOpen]: expanded,
            })}
            onClick={handleExpandClick}
            aria-expanded={expanded}
            aria-label="show more"
          >
            <ExpandMoreIcon />
          </IconButton>
        </CardActions>
        <Collapse in={expanded} timeout="auto" unmountOnExit>
          <CardContent>
            <Typography style={{ fontWeight: "600" }} paragraph>
              Ingredients:
            </Typography>
            {ingredients.map(({ text, id }) => (
              <Typography key={id} paragraph>
                {text}
              </Typography>
            ))}
          </CardContent>
        </Collapse>
      </Card>
    </Grid>
  );
};

export default Recipe;
