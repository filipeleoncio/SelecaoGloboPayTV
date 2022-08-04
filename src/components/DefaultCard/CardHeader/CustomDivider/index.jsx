import React from 'react';
import { useStyles } from './styles';

export const CustomDivider = () => {
    const classes = useStyles();

    return (
        <>
            <div className={classes.divider} />
            <div className={classes.divider} />
            <div className={classes.divider} />
            <div className={classes.divider} />
            <div className={classes.divider} />
        </>
    );
};
