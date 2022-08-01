import React, { useState } from 'react';
import { useStyles } from './styles';
import ReCAPTCHA from 'react-google-recaptcha';
import { Fade } from '@material-ui/core';
import { Box } from '@material-ui/system';

export const Home = () => {
    const classes = useStyles();
    const [showCaptcha, setShowCaptcha] = useState(true);

    function onChange() {
        setShowCaptcha(false);
    }

    return (
        <Box className={classes.centralBox}>
            <Fade in={showCaptcha} appear timeout={{ exit: 1000 }}>
                <div className={classes.fadeCard}>
                    <ReCAPTCHA sitekey='6LdmFTUhAAAAAPevvoVHnrdIEz13FvNq5CdkFp0z' onChange={onChange} />
                </div>
            </Fade>
        </Box>
    );
};
