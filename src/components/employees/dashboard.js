import React from 'react'
import styled from 'styled-components'
import DashHeader from './dashheader';
import Logo from '../../img/logo.png';
import SideBar from './sidebar';
import Content from './Content';


//Duplicated in header JS will fix later
const LogoWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-left: 10px;
`;


const MainWrapper = styled.div`
    height: 900px;
    width: 100vw;
    display: grid;
    grid-template-columns: repeat(12, 1fr);
    grid-template-rows: repeat(12, 1fr);
    grid-template-areas:"s s h h h h h h h h h h"
                        "s s c c c c c c c c c c"
                        "s s c c c c c c c c c c"
                        "s s c c c c c c c c c c"
                        "s s c c c c c c c c c c"
                        "s s c c c c c c c c c c"
                        "s s c c c c c c c c c c"
                        "s s c c c c c c c c c c"
                        "s s c c c c c c c c c c"
                        "s s c c c c c c c c c c"
                        "s s c c c c c c c c c c"
                        "s s c c c c c c c c c c";
`

const MenuWrapper = styled.div`
    grid-area: s;
    background: #0B3364;
`


const Img = styled.img`
    padding-top: 14px;
    width: 100px;
    margin: auto;
`



const Dashboard = React.memo(() => {

    return (
        <MainWrapper>
            <MenuWrapper>
                <LogoWrapper>
                    <Img src={Logo} alt="Logo" />
                </LogoWrapper>
                <SideBar />
            </MenuWrapper>
            <DashHeader />
            <Content />
        </MainWrapper>
    )
})

export default Dashboard