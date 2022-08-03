import React from 'react';
import { Button } from '@material-ui/core';
import { VOTACAO_TEXT } from '../../../constants/votacaoText';
import { useStyles } from './styles';

export const CardFooter = () => {
    const classes = useStyles();

    return (
        <div className={classes.footerBox}>
            <Button variant='contained' className={classes.footerButton}>
                {VOTACAO_TEXT.buttonConfirmarText}
            </Button>
        </div>
    );
};
