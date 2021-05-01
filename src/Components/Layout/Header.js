import React from 'react'
import styled from 'styled-components'
import logo from '../../images/gmail_logo.png'

import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import HelpIcon from '@material-ui/icons/Help';
import SettingsIcon from '@material-ui/icons/Settings';
import AppsIcon from '@material-ui/icons/Apps';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';

function Header() {
    return (
        <Wrapper>
            <LogoWrapper>
                <div>
                    {/* menu icon */}
                    <MenuIcon />
                </div>
                <Logo>
                    <img src={logo} height='50'/>
                </Logo>
            </LogoWrapper>
            
            <SearchWrapper>
                <SearchBarWrapper>
                    <SearchIconWrapper />
                    <input type='text' placeholder='Search mail'/>
                    <ExpandMoreIcon />
                </SearchBarWrapper>

            </SearchWrapper>

            <IconsWrapper>
                <HelpIcon />
                <SettingsIcon />
                <AppsIcon />
                <AccountCircleIcon />
            </IconsWrapper>
        </Wrapper>
    )
}

export default Header

const Wrapper = styled.div`
    display: grid;
    grid-template-columns: 20% auto 15%;
    border-bottom: 1px solid lightgray;
    align-items: center;
    height: 70px;

    .MuiSvgIcon-root {
        color: #5f6368;
        font-size: 2rem;
    }
`
const LogoWrapper = styled.div`
    width: 200px;
    display: grid;
    grid-template-columns: 30% auto;
    align-items: center;
    place-items: center;
`

const Logo = styled.div`
    display: flex;
`
const SearchWrapper = styled.div``
const SearchBarWrapper = styled.div`
    background-color: #f1f3f4;
    width: 100%;
    max-width: 750px;
    display: grid;
    grid-template-columns: 7% auto 5%;
    border-radius: 7px;
    height: 45px;
    place-items: center;
    align-items: center;
    grid-gap: 15px;


    input {
        width: 100%;
        height: 30px;
        background: None;
        border: None;
        font-size: 18px;

        :focus{
            outline: none;
        }

    }

`
const SearchIconWrapper = styled(SearchIcon)`
    color: #5f6368;
`
const IconsWrapper = styled.div`
    display: grid;
    grid-template-columns: repeat(4, auto);
    margin-left: 10px;
    margin-right: 10px;
    grid-gap: 5px;
`