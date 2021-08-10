import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import imgDefault from '../../assets/images/placeholder.png'
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
    modal: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: '10px',
        border: '0px solid white',
    },
    paper: {
        backgroundColor: theme.palette.background.paper,
        border: '0px solid white',
        boxShadow: theme.shadows[5],
        padding: theme.spacing(2, 4, 1),
        borderRadius: '10px',

    },
    imgPoster: {
        width: '100%',
        objectFit: 'cover',
    },
    textTitle: {
        textAlign: 'center',
    },
    button: {
        width: '100%',
        marginBottom: '5px',
        marginTop: '5px',
    }
}));

export default function ModalComp({ nav, handleClose, open, data }) {
    const classes = useStyles();

    return (
        <div>
            <Modal
                aria-labelledby="transition-modal-title"
                aria-describedby="transition-modal-description"
                className={classes.modal}
                open={open}
                onClose={handleClose}
                closeAfterTransition
                BackdropComponent={Backdrop}
                BackdropProps={{
                    timeout: 500,
                }}
            >
                <Fade in={open}>
                    <div className={classes.paper}>
                        <img src={data && data.Poster ? data.Poster : imgDefault} alt="" className={classes.imgPoster} />

                        <p id="transition-modal-description" className={classes.textTitle}>
                            {data && data.Title}
                        </p>

                        <Link to={{
                            pathname: '/detail-movie',
                            state: data
                        }}>
                            <Button
                                className={classes.button}
                                variant="contained"
                                color="primary"
                            >
                                watching movies
                            </Button>
                        </Link>

                        <Button
                            onClick={handleClose}
                            className={classes.button}
                            variant="outlined"
                        >
                            cancel
                        </Button>
                    </div>
                </Fade>
            </Modal>
        </div>
    );
}
