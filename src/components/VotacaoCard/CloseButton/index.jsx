import React from 'react';
import { images } from '../../../assets/images';
import { useStyles } from './styles';

export const CloseButton = () => {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <div className={classes.border}>
                <img src={images.closeButton} className={classes.icon} alt='Botao Fechar' />
            </div>
        </div>
    );
};
