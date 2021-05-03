import React from 'react'
import styled from 'styled-components'

import Compose from '../Buttons/Compose'
import { sideBarButtons } from '../../Data/SideBarButtons'
import { buttomIcons } from '../../Data/ButtomIcons'

import VideocamIcon from '@material-ui/icons/Videocam';
import KeyboardIcon from '@material-ui/icons/Keyboard';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import MaximizeIcon from '@material-ui/icons/Maximize';



function SideBar() {
    return (
        <Wrapper>
            <TopSectionWrapper>

                <ComposeWrapper>
                    {/* Compose Button*/}
                    <Compose />
                </ComposeWrapper>
                <SideButtonsWrapper>
                    {/* all side buttons */}
                    {
                        sideBarButtons.map(button => (
                            <SideBarButton>{button.icon} {button.text}</SideBarButton>
                        ))
                    }
                </SideButtonsWrapper>
            </TopSectionWrapper>
            <ButtomSectionWrapper>

                <MeetWrapper>
                    {/* all meet button  */}
                    <MaximizeIconWrapper><MaximizeIcon/></MaximizeIconWrapper>
                    <SideBarButton><p>Meet</p></SideBarButton>
                    <SideBarButton><VideocamIcon />New meeting</SideBarButton>
                    <SideBarButton><KeyboardIcon />Join a meeting</SideBarButton>
                </MeetWrapper>
                <HangoutWrapper>
                    {/* all hangout stuffs */}
                    <SideBarButton><p>Hangouts</p></SideBarButton>
                    <SideBarButton><AccountCircleIcon />Account Name</SideBarButton>
                </HangoutWrapper>
                <ButtomIconsWrapper>
                    {/* all buttom icons  */}
                    {
                        buttomIcons.map(button => (
                            <p>{button.icon}</p>
                        ))
                    }
                </ButtomIconsWrapper>
            </ButtomSectionWrapper>
        </Wrapper>
    )
}

export default SideBar

const Wrapper = styled.div`
    min-width: 230px;
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    border-right: 1px solid lightgray;

`
const ComposeWrapper = styled.div``
const TopSectionWrapper = styled.div`
    
`
const ButtomSectionWrapper = styled.div`
    min-height: 300px;
    margin-bottom: 15px;
    
`
const SideButtonsWrapper = styled.div`

`
const SideBarButton = styled.div`
    display: grid;
    grid-template-columns: 18% auto;
    align-items: center;
    color: #3c4043;
    padding: 6px 0 6px 32px;
    cursor: pointer;
    border-radius: 0 20px 20px 0;
    margin-right: 8px;

    :hover {
        background: #eee;
    }

    p {
        font-weight: bold;
        width: 100px;
    }

    span {
        font-size: 2rem;
    }
`
const MaximizeIconWrapper = styled.div`
        color: #3c4043;
        text-align: center;
        cursor: ns-resize;
`
const MeetWrapper = styled.div`
    border-bottom: 1px solid lightgray;
    border-top: 1px solid lightgray;

`
const HangoutWrapper = styled.div`
    border-bottom: 1px solid lightgray;
    
`
const ButtomIconsWrapper = styled.div`
    display: flex;
    justify-content: center;
    border-top: 1px solid lightgray;
    margin-top: 5px;
    padding-top: 5px;
    cursor: pointer;


    .MuiSvgIcon-root {
        padding: 2px 5px;
        color: #3c4043;
        border-radius: 10px;
        :hover {
            background: #eee;
            color: black;

        }
    }

`