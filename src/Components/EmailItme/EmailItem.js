import React, { useState } from 'react'
import styled from 'styled-components'

import StarOutlineIcon from '@material-ui/icons/StarOutline';
import StarIcon from '@material-ui/icons/Star';
import IconButton from '@material-ui/core/IconButton';
import CheckBox from '@material-ui/core/CheckBox';



function EmailItem({emailData}) {

    const [star, setStar ] = useState(emailData.started)

    const changeStar = () => {
        if(star) {
            setStar(false)
        } else {
            setStar(true)
        }
    }
    
    return (
        <Wrapper>
            {console.log(emailData)}
            <CheckBox />
            <IconButton onClick={changeStar}>
                {
                    star ? 
                    <StarIcon htmlColor='#f7cb69' />
                    :
                    <StarOutlineIcon />
                }
            </IconButton>
            <EmailDataWrapper>
                <div>
                    <p>{emailData.from}</p>
                </div>
                <div>
                    <p>{emailData.subject} - {emailData.message}</p>
                </div>
                <div>
                    <p>{emailData.received}</p>
                </div>
            </EmailDataWrapper>
        </Wrapper>
    )
}

export default EmailItem

const Wrapper = styled.div`
    display: inline-flex;
    align-content: space-between;
    place-items: center;
    margin-left: 15px;
    border-bottom: 1px solid lightgray;
    width: 98%;
`
const EmailDataWrapper = styled.div`
    display: grid;
    grid-template-columns: 40% auto 10%;
    place-items: center;
    text-align: left;
`
