import React from 'react';
import { useStyles } from './styles';
import CloseIcon from '@mui/icons-material/Close';

export const CloseButton = () => {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <div className={classes.border}>
                <CloseIcon className={classes.icon} alt='Botao Fechar' />
            </div>
        </div>
    );
};
