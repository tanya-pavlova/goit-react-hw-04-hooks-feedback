import React from "react";
import PropTypes from "prop-types";
import styles from './feedbackOptions.module.css'

const FeedbackOption = ({ options, onLeaveFeedback }) => {
    return (

        <div className={styles.buttonContainer}>
            {options.map(option => (
                <button
                    className={styles.button}
                    type="button"
                    onClick={() => onLeaveFeedback(option)}
                    key={option}

                >
                    {option}
                </button>
            ))}
        </div>

    );
};

FeedbackOption.propTypes = {
    onLeaveFeedback: PropTypes.func.isRequired,
};

export default FeedbackOption;