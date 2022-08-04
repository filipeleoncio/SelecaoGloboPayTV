import React from 'react';
import { CardHeader } from './CardHeader';
import { CloseButton } from './CloseButton';
import { useStyles } from './styles';

export const DefaultCard = ({ children }) => {
    const classes = useStyles();

    return (
        <div className={classes.mainCard}>
            <CloseButton />
            <div className={classes.cardTop}>
                <CardHeader />
            </div>
            {children}
        </div>
    );
};
