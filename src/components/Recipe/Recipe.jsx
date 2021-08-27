import React, { useState } from "react";
import clsx from "clsx";
//prettier-ignore
import { Card, Grid, IconButton, CardHeader, CardMedia, CardContent, CardActions, Collapse, Typography,} from "@material-ui/core";

import Avatar from "@material-ui/core/Avatar";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

import { useStyles } from "./styles";

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
