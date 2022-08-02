import React, { forwardRef } from 'react';
import { CloseButton } from './CloseButton';
import { useStyles } from './styles';

export const EliminacaoCard = forwardRef((_, ref) => {
    const classes = useStyles();

    return (
        <div className={classes.mainCard} ref={ref}>
            <CloseButton />
        </div>
    );
});
