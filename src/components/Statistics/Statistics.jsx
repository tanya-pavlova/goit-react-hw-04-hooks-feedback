import React from 'react';
import PropTypes from 'prop-types';
import styles from './statistics.module.css'

const Statistics = ({ good, neutral, bad, total, positivePercentage }) => {
    return (
        <ul className={styles.feedbackList}>
            <li className={styles.feedbackItem} >Good: {good}</li>
            <li className={styles.feedbackItem}>Neutral: {neutral}</li>
            <li className={styles.feedbackItem}>Bad: {bad}</li>
            <li className={styles.feedbackItem}>Total:{total}</li>
            <li className={styles.feedbackItem}>Positive feedback:{positivePercentage}%</li>
        </ul>
    );
}

Statistics.propTypes = {
    good: PropTypes.number,
    neutral: PropTypes.number,
    bad: PropTypes.number,
    total: PropTypes.number,
    positiveFeedback: PropTypes.number,
};

export default Statistics;