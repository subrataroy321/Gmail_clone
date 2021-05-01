import React from 'react'
import styled from 'styled-components'

import Compose from '../Buttons/Compose'
import { sideBarButtons } from '../../Data/SideBarButtons'


function SideBar() {
    return (
        <Wrapper>
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
            <MeetWrapper>
                {/* all meet button  */}
            </MeetWrapper>
            <HangoutWrapper>
                {/* all hangout stuffs */}
            </HangoutWrapper>
            <ButtomIconsWrapper>
                {/* all buttom icons  */}
            </ButtomIconsWrapper>
        </Wrapper>
    )
}

export default SideBar

const Wrapper = styled.div``
const ComposeWrapper = styled.div``
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

    :hover {
        background: #eee;
    }


`
const MeetWrapper = styled.div``
const HangoutWrapper = styled.div``
const ButtomIconsWrapper = styled.div``