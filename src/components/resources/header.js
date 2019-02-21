import React from 'react';
import styled from 'styled-components';
import Logo from '../../img/logo.png';

const HeaderWrapper = styled.div`
    background: blue;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: 100px;
    background: inherit;
`;

const MenuDivs = styled.div`
    color: ${props => props.light ? "blue" : "black"}
`

const LogoWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-left: 50px;
`;

const Img = styled.img`
    width: 150px;
`

const MenuWrapper = styled.div`
    display: grid;
    align-items: center;
    grid-template-columns: repeat(6, 1fr);
`


const Header = () => {

    return (
        <HeaderWrapper> 
            <LogoWrapper>
                <Img src={Logo} alt="Logo" />
            </LogoWrapper>
            <MenuWrapper>
                <MenuDivs>
                    Home
                </MenuDivs>
                <MenuDivs>
                    Find Talent
                </MenuDivs>
                <MenuDivs light>
                    Find a Job
                </MenuDivs>
                <MenuDivs>
                    Pricing
                </MenuDivs>
                <MenuDivs>
                    Contact
                </MenuDivs>
                <MenuDivs>
                    Profile
                </MenuDivs>
            </MenuWrapper>
        </HeaderWrapper>
    )
}

export default Header