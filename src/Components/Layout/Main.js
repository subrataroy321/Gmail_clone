import React from 'react'
import styled from 'styled-components'

import SideBar from './SideBar'
import EmailsView from './EmailsView'
import SideIcons from './SideIcons'

function Main() {
    return (
        <Wrapper>
            <SideBar />
            <EmailsView />
            <SideIcons />
        </Wrapper>
    )
}

export default Main

const Wrapper = styled.div`
    display: grid;
    grid-template-columns: 20% auto 15%;

`
