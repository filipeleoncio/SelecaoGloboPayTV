import React from 'react';
import { Button } from '@material-ui/core';
import { VOTACAO_TEXT } from '../../../../constants/votacao';
import { useStyles } from './styles';

export const ContentFooter = ({ onClickButton }) => {
    const classes = useStyles();

    return (
        <div className={classes.footerBox}>
            <Button variant='contained' className={classes.footerButton} onClick={onClickButton}>
                {VOTACAO_TEXT.BUTTON_CONFIRMAR}
            </Button>
        </div>
    );
};
