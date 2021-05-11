import React from 'react'
import styled from 'styled-components'

import CheckBox from '@material-ui/core/CheckBox';
import RefreshIcon from '@material-ui/icons/Refresh';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import IconButton from '@material-ui/core/IconButton';
import KeyboardArrowRightIcon from '@material-ui/icons/KeyboardArrowRight';
import KeyboardArrowLeftIcon from '@material-ui/icons/KeyboardArrowLeft';

import { emailData } from '../../Data/temp/EmailData'
import EmailItem from '../EmailItme/EmailItem'

function EmailsView() {
    return (
        <Wrapper>
            <TopWrapper>
                <TopLeft>
                    <CheckBox />
                    <IconButton>
                        <RefreshIcon />
                    </IconButton>
                    <IconButton>
                        <MoreVertIcon />
                    </IconButton>
                </TopLeft>
                <TopRight>
                    <IconButton>
                        <KeyboardArrowRightIcon />
                    </IconButton>
                    <IconButton>
                        <KeyboardArrowLeftIcon/>
                    </IconButton>
                </TopRight>

            </TopWrapper>
            <BodyWrapper>
            {
                emailData.map( email => (

                    <EmailItem  emailData={email}/>
                ))
            }

            </BodyWrapper>
        </Wrapper>
    )
}

export default EmailsView

const Wrapper = styled.div``
const TopWrapper = styled.div`
    display: grid;
    grid-template-columns: 50% 50%;
    border-bottom: 1px solid lightgray;

`
const BodyWrapper = styled.div``
const TopLeft = styled.div`
    margin-left: 15px;
`
const TopRight = styled.div`
    display: flex;
    flex-direction: row-reverse;
`
