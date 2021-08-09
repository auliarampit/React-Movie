import React from 'react'
import './home.css'
import { Carousel, Movies, TopBar, ModalComp } from '../../components'
import { useHistory } from 'react-router-dom'


function HomeScreen() {
    const nav = useHistory()
    const [open, setOpen] = React.useState(false);

    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <div className='home'>
            <TopBar />
            <Carousel />

            <div className="container-movies-home">
                <Movies onTap={() => handleOpen()} />
                <ModalComp
                    handleClose={handleClose}
                    nav={() => nav.push('/detail-movie')}
                    open={open}
                />
            </div>
        </div>
    )
}

export default HomeScreen
