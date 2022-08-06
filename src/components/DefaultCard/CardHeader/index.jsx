import React from 'react';
import { images } from '../../../assets/images';
import { useStyles } from './styles';
import { VOTACAO_TEXT } from '../../../constants/votacao';
import { CustomDivider } from './CustomDivider';

export const CardHeader = () => {
    const classes = useStyles();

    return (
        <div className={classes.headerBox}>
            <div className={classes.titulo}>
                <img src={images.paredaoIcone} className={classes.icone} alt='Icone de paredao' />
                <p className={classes.texto}>{VOTACAO_TEXT.TITULO}</p>
            </div>
            <CustomDivider />
        </div>
    );
};
