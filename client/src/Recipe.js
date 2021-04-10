import React from "react";

import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Collapse,
  Container,
  IconButton,
  Typography,
} from "@material-ui/core";

import { Favorite, Share } from "@material-ui/icons";

const Recipe = ({ data }) => {
  return (
    // <div>
    //   <h4>{data.label}</h4>
    //   <img src={data.image} />
    //   <p></p>
    //   <p> Time: {data.totalTime} minutes </p>
    //   <p> Calories: {Math.round(data.calories)} </p>
    //   <h4>Cooking Instructions</h4>
    //   <ul>
    //     {data.instructions.map((line) => {
    //       return <li>{line}</li>;
    //     })}
    //   </ul>
    //   <hr />
    // </div>

    <Card>
      <CardMedia
        style={{ height: 250, width: 250 }}
        image={data.image}
        title={data.label}
      />
      <CardContent>
        <Typography component="h4">{data.label}</Typography>

        <Typography variant="body2" color="textSecondary" component="p">
          Time: {data.totalTime}
        </Typography>

        <Typography>Calories: {Math.round(data.calories)}</Typography>
      </CardContent>

      <CardActions>
        <IconButton>
          <Favorite />
        </IconButton>
        <IconButton>
          <Share />
        </IconButton>
      </CardActions>
    </Card>
  );
};

export default Recipe;
