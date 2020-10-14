import React, { useEffect, useState } from "react";
import { useRouteMatch } from "react-router-dom";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import GridList from "@material-ui/core/GridList";
import withWidth, { isWidthUp } from "@material-ui/core/withWidth";
import GridListTile from "@material-ui/core/GridListTile";
import GridListTileBar from "@material-ui/core/GridListTileBar";

const Categories = (props) => {
  const { path } = useRouteMatch();
  const slug = path.slice(1); // could be "cooking" or "dyi"
  const [categoryData, setCategoryData] = useState([]);
  const url = `${process.env.REACT_APP_APILINK}/gifs?category=${slug}`;
  console.log(url);
  const useStyles = makeStyles((theme) => ({
    root: {
      display: "flex",
      flexWrap: "wrap",
      justifyContent: "space-around",
      overflow: "hidden",
      backgroundColor: theme.palette.background.paper,
    },
    gridList: {
      width: 1300,
      // Promote the list into his own layer on Chrome. This cost memory but helps keeping high FPS.
      transform: "translateZ(0)",
    },
    titleBar: {
      background:
        "linear-gradient(to bottom, rgba(0,0,0,0.7) 0%, " +
        "rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)",
    },
    slug: {
      textAlign: "center",
      margin: "10px",
    },
  }));

  const classes = useStyles();
  useEffect(() => {
    const APIKEY = process.env.REACT_APP_APIKEY;

    const baseURL =
      "https://api.gfycat.com/v1/gfycats/search?search_text=cooking";
    const fetchData = async () => {
      const response = await fetch(url, { method: "get" });
      const categoryResponseData = await response.json();
      setCategoryData(categoryResponseData);
      if (slug === "cooking") {
        await fetchGfyCat();
      }
    };
    const fetchGfyCat = async () => {
      const gfyCatResponse = await fetch(baseURL, {
        method: "get",
        Authorization: `${APIKEY}`,
      });
      const allReturnedData = await gfyCatResponse.json();
      const allGifs = allReturnedData.gfycats.map((gif) => {
        return {
          name: gif.title,
          gif_url: gif.gifUrl,
        };
      });
      setCategoryData((prev) => [...prev, ...allGifs]);
    };
    fetchData();
  }, [url]);

  /* const gfyCatGifs = (
    <GridList cellHeight={500} spacing={2} className={classes.gridList}>
      {allReturnedObjects.map((tile) => (
        <GridListTile key={tile.gifUrl} cols={0.5} rows={0.5}>
          <img src={tile.gifUrl} alt={tile.title} />
          <GridListTileBar
            title={tile.title}
            titlePosition="top"
            className={classes.titleBar}
          />
        </GridListTile>
      ))}
    </GridList>
  ); */
  /* allReturnedObjects.map((gfyCatGif, index) => {
    return (
      <div key={index}>
        <img src={gfyCatGif.gifUrl} />
      </div>
    );
  }); */
  const getCols = () => {
    if (isWidthUp("lg", props.width)) {
      return 4;
    }
    if (isWidthUp("md", props.width)) {
      return 3;
    }
    if (isWidthUp("sm", props.width)) {
      return 2;
    }
    if (isWidthUp("xs", props.width)) {
      return 1;
    }
  };
  const categoryGifs = (
    <GridList
      cellHeight={500}
      spacing={2}
      className={classes.gridList}
      cols={getCols()}
    >
      {categoryData.map((tile) => (
        <GridListTile key={tile.gif_url} cols={1} rows={0.5}>
          <img src={tile.gif_url} alt={tile.name} />
          <Link to={{ pathname: "/show", state: { tile } }}>
            <GridListTileBar
              title={tile.name}
              titlePosition="top"
              className={classes.titleBar}
            />
          </Link>
          {tile.description && (
            <GridListTileBar
              title={tile.description}
              titlePosition="bottom"
              className={classes.titleBar}
            />
          )}
        </GridListTile>
      ))}
    </GridList>
  );

  /* categoryData.map((categoryItem, index) => {
    console.log(categoryItem.id);
    return (
      <div key={index}>
        <Link to={{ pathname: "/show", state: { categoryItem } }}>
          <h2>{categoryItem.name}</h2>
          <img src={categoryItem.gif_url} />
          <p>{categoryItem.description}</p>
        </Link>
      </div>
    );
  }); */

  return (
    <div className="display">
      <h1 className={classes.slug}>{slug}</h1>
      <div className={classes.root}>
        {/*slug == `cooking` ? gfyCatGifs : null*/}
        {categoryGifs}
        {/* {gfyCatGifs} */}
      </div>
    </div>
  );
};
export default withWidth()(Categories);
