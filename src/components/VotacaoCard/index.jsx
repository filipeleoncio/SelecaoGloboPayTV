import React, { forwardRef } from 'react';
import { CardContent } from './CardContent';
import { CardHeader } from './CardHeader';
import { CloseButton } from './CloseButton';
import { useStyles } from './styles';

export const VotacaoCard = forwardRef(({ info }, ref) => {
    const classes = useStyles();

    return (
        <div className={classes.mainCard} ref={ref}>
            <CloseButton />
            <div className={classes.cardTop}>
                <CardHeader />
                <CardContent info={info} />
            </div>
        </div>
    );
});
