import React from 'react'
import styled from 'styled-components'
import AppStats from './AppStats';
import SubscriptionBox from './subscription';
import ScheduleBox from './ScheduleBox';


const ContentWrapper = styled.div`
    grid-area: c;
    background: white;
    display: grid;
    grid-template-columns: repeat(12, 1fr);
    grid-template-rows: repeat(12, 1fr);
`


const Owner =styled.div`
    grid-column: 1/5;
    margin: auto;
    color: #454B54;
    font-size: 16px;
`

const Content = React.memo(() => {

    return (
        <ContentWrapper>
            <Owner> Jeffrey Archer's Dashboard </Owner>

            <AppStats />

            <SubscriptionBox />

            <ScheduleBox />
        </ContentWrapper>
    )
})

export default Content