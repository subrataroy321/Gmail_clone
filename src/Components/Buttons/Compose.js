import React from 'react'
import styled from 'styled-components'
import addIcon from '../../images/gmail_compose_logo.png';

function Compose() {
    return (
        <Wrapper>
            <IconWrapper>
                <img src={addIcon} height='40px'/>
            </IconWrapper>
            <p>Compose</p>
        </Wrapper>
    )
}

export default Compose

const IconWrapper = styled.div`
    margin-right: 5px;
`
const Wrapper = styled.div`
    box-shadow: 0 1px 2px 0 rgb(60 64 67 / 30%), 0 1px 3px 1px rgb(60 64 67 / 15%);
    font-family: 'Google Sans', Roboto,RobotoDraft,Helvetica,Arial,sans-serif;
    font-size: 16px;
    font-weight: 500;
    background-color: #fafafb;
    border-radius: 25px;
    color: #3c4043;
    display: inline-flex;
    align-items: center;
    height: 48px;
    min-width: 56px;
    padding: 0 20px 0 10px;
    cursor: pointer;
    margin: 16px 16px;

    :hover {
        box-shadow: 0 1px 3px 0 rgb(60 64 67 / 30%), 0 4px 8px 3px rgb(60 64 67 / 15%);
        background-color: #fafafb;
    }
    
`
