import React from 'react';
import { Typography } from '@mui/material';
import { images } from '../../../assets/images';
import { useStyles } from './styles';
import { VOTACAO_TEXT } from '../../../constants/votacaoText';

export const CardHeader = () => {
    const classes = useStyles();

    return (
        <div className={classes.titulo}>
            <img src={images.paredaoIcone} className={classes.icone} alt='Icone de paredao' />
            <Typography className={classes.texto}>{VOTACAO_TEXT.titulo}</Typography>
        </div>
    );
};
