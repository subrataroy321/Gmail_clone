import React from 'react'
import styled from 'styled-components'

import AddIcon from '@material-ui/icons/Add';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';


function SideIcons() {
    return (
        <Wrapper>
            <IconsWrapper>
                <img src="https://www.gstatic.com/companion/icon_assets/calendar_2020q4_2x.png" />
                <img src="https://www.gstatic.com/companion/icon_assets/keep_2020q4v3_2x.png" />
                <img src="https://www.gstatic.com/companion/icon_assets/tasks2_2x.png" />
                <img src="https://www.gstatic.com/companion/icon_assets/contacts_2x.png" />
            </IconsWrapper>
            <AddIconWrapper>
                <AddIcon />
            </AddIconWrapper>
        </Wrapper>
    )
}

export default SideIcons

const Wrapper = styled.div`
    width: 55px;
    display: grid;
    grid-template-rows: 30% auto;
    border-left: 1px solid lightgray;

    img {
        width: 26px;
    }
`
const IconsWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    place-items: center;
`
const AddIconWrapper = styled.div`
    display: flex;
    flex-direction: column;
    place-items: center;


    .MuiSvgIcon-root {
        border-top: 1px solid lightgray;
        padding-top: 30px;
        margin: 10px;
        color: #3c4043;

    }
`