import { Badge } from "@material-ui/core";
import { img_300, unavailable } from "../../config/config";
import "./SingleContent.css";
import ContentModal from "../ContentModal/ContentModal";
import { Classnames } from "react-alice-carousel";
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import React, { useReducer } from "react";

const useStyles = makeStyles((theme) => ({
  margin: {
    margin: theme.spacing(1),
  },
  extendedIcon: {
    marginRight: theme.spacing(1),
  },
}));

function ButtonSizes() {
  const classes = useStyles();
};

const SingleContent = ({
  id,
  poster,
  title,
  date,
  media_type,
  vote_average,
  handleClick,
  likes,
  dislikes,
}) => {
  return (
    <ContentModal media_type={media_type} id={id}>
      <Badge
        badgeContent={vote_average}
        color={vote_average > 6 ? "primary" : "secondary"}
      />
      <div className="div-movie-button-delete">
        <button className="movie-button-delete" onClick={() => handleClick(id)}>
          x
        </button> 
        </div>
      <img
        className="poster"
        src={poster ? `${img_300}${poster}` : unavailable}
        alt={title}
      />
      <b className="title">{title}</b>
      <span className="subTitle">
        {media_type === "tv" ? "TV Series" : "Movie"}
        <span className="subTitle">{date}</span>
      </span>

        <div className="ratingButtons">
        <div>
        <Button variant="contained" size="small" color="primary" className="movie-p-like">
        Like{likes}
        </Button>
        </div>

        <div>
        <Button variant="contained" size="small" color="secondary" className="movie-p-like">
        Dislike{dislikes}
        </Button>
        </div>
        </div>

        <div className="ratiobar">
          <div>
          </div>
        </div>

    </ContentModal>
  );
};

  

export default SingleContent;