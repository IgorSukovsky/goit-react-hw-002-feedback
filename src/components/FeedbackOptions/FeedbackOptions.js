import React from "react";
import PropTypes from "prop-types";
import style from "./FeedbackOptions.module.css";

const FeedbackOptions = ({ handleChange }) => {
  return (
    <div className={style.boxBtn}>
      <button
        className={style.button}
        type="button"
        name="good"
        onClick={handleChange}
      >
        good
      </button>
      <button
        className={style.button}
        type="button"
        name="neutral"
        onClick={handleChange}
      >
        neutral
      </button>
      <button
        className={style.button}
        type="button"
        name="bad"
        onClick={handleChange}
      >
        bad
      </button>
    </div>
  );
};

FeedbackOptions.propTypes = {
  handleChange: PropTypes.func.isRequired,
};

export default FeedbackOptions;
