import React from 'react';
import PropTypes from 'prop-types';
import styles from "./notification.module.css";

const Notification = ({ message }) => {
    return (
        <p className={styles.message}>{message}</p>
    )
}

Notification.propTypes = {
    message: PropTypes.string,
};

export default Notification;