import { Container } from '@mui/material'
import React from 'react'
import { banner } from '../../setting/constants'
function SingleBanner() {
    return (
        <>
            <Container fluid maxWidth={false}>
                <img src={banner.img} style={{ width: '100%', height: '500px',margin:'20px 0px 10px 0px' }} alt='' />
            </Container>

        </>
    )
}

export default SingleBanner
