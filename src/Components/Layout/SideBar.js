import React from 'react'
import styled from 'styled-components'

import Compose from '../Buttons/Compose'
import SideBarButtons from '../Buttons/SideBarButtons'


function SideBar() {
    return (
        <Wrapper>
            <ComposeWrapper>
                {/* Compose Button*/}
                <Compose />
            </ComposeWrapper>
            <SideButtonsWrapper>
                {/* all side buttons */}
                <SideBarButtons />
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
const SideButtonsWrapper = styled.div``
const MeetWrapper = styled.div``
const HangoutWrapper = styled.div``
const ButtomIconsWrapper = styled.div``