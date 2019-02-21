import React from 'react'
import Search from './search';
import styled from 'styled-components'
import Profile from './profile';

const HeaderWrapper = styled.div`
    grid-area: h;
    background: #2362AF;
    display: grid;
    grid-template-columns: 1fr 1fr;
    width: 100%;
    align-items: center;
`
const SearchWrapper = styled.div`

`
const ProfileWrapper = styled.div`
    display: flex;
    justify-content: flex-end;
    padding-top: 5px;
    align-items: center;
    margin-right: 30px;
`

const DashHeader = React.memo(() => {

    return (
        <>
            {console.log('in DashHeader')}
            <HeaderWrapper>
           <SearchWrapper>
                <Search />
            </SearchWrapper>
            <ProfileWrapper>
                <Profile />
            </ProfileWrapper>
            </HeaderWrapper>
        </>
       
    )
})

export default DashHeader