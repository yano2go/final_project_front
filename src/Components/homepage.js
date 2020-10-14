import React from "react";
import { Link } from "react-router-dom";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
    overflow: "hidden",
  },
  homeGifs: {
    height: "230px",
    width: "230px",
  },
}));

export default function Homepage(props) {
  const classes = useStyles();
  const categories = [
    {
      name: "Cooking Gifs",
      image_url:
        "https://thumbs.gfycat.com/FrighteningGivingCaimanlizard-max-1mb.gif",
      slug: "/cooking",
    },
    {
      name: "Drinks",
      image_url:
        "https://media3.giphy.com/media/3oKIPuGIRtjn3vAaFW/giphy.gif?cid=ecf05e47p1f54hek3wc8c63ldp0w5gjy199m6ws4j0im7ggd&rid=giphy.gif",
      slug: "/drinks",
    },
    {
      name: "Arts and Crafts",
      image_url: "https://media.giphy.com/media/YBkTzzyNewWtUANTso/giphy.gif",
      slug: "/artsandcrafts",
    },

    {
      name: "Programming",
      image_url: "https://media.giphy.com/media/fAnzw6YK33jMwzp5wp/giphy.gif",
      slug: "/programming",
    },
    {
      name: "Random",
      image_url: "https://media.giphy.com/media/3orieYvhT5EVfSFyBa/giphy.gif",
      slug: "/random",
    },
  ];

  return (
    <div className={classes.root}>
      <Grid container spacing={2}>
        {categories.map((category, i) => {
          return (
            <Grid
              item
              xs={12}
              sm={6}
              md={4}
              lg={3}
              key={`${i}-${category.name}`}
            >
              <Paper className={classes.paper}>
                <Link className="homepageLinks" to={category.slug}>
                  <div className="category">
                    <h3>{category.name}</h3>
                    <img
                      className={classes.homeGifs}
                      src={category.image_url}
                    />
                  </div>
                </Link>
              </Paper>
            </Grid>
          );
        })}
      </Grid>
    </div>
  );
}
