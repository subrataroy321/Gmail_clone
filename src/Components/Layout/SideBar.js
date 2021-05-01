import React from 'react'
import styled from 'styled-components'


function SideBar() {
    return (
        <Wrapper>
            <p>SideBar</p>
            <ComposeWrapper>
                {/* Compose Button*/}
            </ComposeWrapper>
            <SideButtonsWrapper>
                {/* all side buttons */}
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