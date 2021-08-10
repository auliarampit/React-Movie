import React from 'react'
import { makeStyles, withStyles } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'
import { Button, IconButton, Typography, Slider, Tooltip } from '@material-ui/core'
import { PlayArrow, ShareRounded, VolumeUp, Fullscreen, VolumeOff, Pause } from '@material-ui/icons'

const useStyles = makeStyles({
    controlsWrapper: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        // backgroundImage: 'rgba(0, 0, 0, 6)',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        zIndex: 999,
    },
    controlsIcon: {
        color: '#777',
        fontSize: 50,
        transform: 'scale(0.9)',
        '&:hover': {
            color: '#fff',
            transform: 'scale(1)'
        }
    },
    bottonIcons: {
        color: '#999',
        '&:hover': {
            color: '#fff',
        }
    },
    volumeSlider: {
        width: 100,
    }
})

function ValueLabelComponent(props) {
    const { children, open, value } = props;

    return (
        <Tooltip open={open} enterTouchDelay={0} placement="top" title={value}>
            {children}
        </Tooltip>
    );
}

const PrettoSlider = withStyles({
    root: {
        height: 8,
    },
    thumb: {
        height: 15,
        width: 15,
        backgroundColor: '#fff',
        border: '2px solid currentColor',
        marginLeft: -12,
        '&:focus, &:hover, &$active': {
            boxShadow: 'inherit',
        },
    },
    active: {},
    valueLabel: {
        left: 'calc(-50% + 4px)',
    },
    track: {
        height: 5,
        borderRadius: 4,
    },
    rail: {
        height: 8,
        borderRadius: 4,
    },
})(Slider);

function PlayerControls({ handlePlaying, handleMuted, playing, muted, data }) {
    const classes = useStyles()
    return (
        <div className={classes.controlsWrapper} style={{
            backgroundImage: `url(${data && data.Poster})`,
        }}>
            {/* top controls */}
            <Grid
                container
                direction='row'
                alignItems='center'
                justify='space-between'
                style={{
                    padding: 16,
                }}
            >
                <Grid item >
                    <Typography varian='h5' style={{ color: '#fff', fontWeight: 'bold' }}>{data && data.Title}</Typography>
                </Grid>

                <Grid item >
                    <Button
                        varian='contained'
                        color='primary'
                        startIcon={<ShareRounded />}
                    >Share</Button>
                </Grid>
            </Grid>

            {/* middle controls */}
            <Grid
                container
                direction='row'
                alignItems='center'
                justify='center'>
                <IconButton className={classes.controlsIcon} arial-label='reqind' >
                    <PlayArrow fontSize='inherit' />
                </IconButton>
            </Grid>

            {/* bottom controls */}
            <Grid
                container
                direction='row'
                alignItems='center'
                justify='space-between'
                style={{
                    padding: 16
                }}
            >
                <Grid item xs={12}>
                    <PrettoSlider
                        min={0}
                        max={100}
                        defaultValue={5}
                        ValueLabelComponent={ValueLabelComponent}
                    />
                </Grid>

                <Grid item>
                    <Grid container alignItems='center' direction='row'>
                        <IconButton oClick={handlePlaying} className={classes.bottonIcons}>
                            {
                                playing ?
                                    <Pause fontSize='large' />
                                    :
                                    <PlayArrow fontSize='large' />
                            }
                        </IconButton>

                        <IconButton onClick={handleMuted} className={classes.bottonIcons}>
                            {
                                muted ?
                                    <VolumeOff fontSize='medium' />
                                    :
                                    <VolumeUp fontSize='medium' />
                            }
                        </IconButton>

                        <Slider
                            min={0}
                            max={100}
                            defaultValue={!muted ? 100 : 0}
                            className={classes.volumeSlider}
                        />

                        <Button variant="text" style={{ color: '#fff', marginLeft: 16 }}>
                            <Typography>05:05</Typography>
                        </Button>
                    </Grid>
                </Grid>
                <Grid item>
                    <Button variant="text" className={classes.bottonIcons}>
                        <Typography>1X</Typography>
                    </Button>

                    <IconButton className={classes.bottonIcons}>
                        <Fullscreen />
                    </IconButton>
                </Grid>
            </Grid>
        </div>
    )
}

export default PlayerControls
