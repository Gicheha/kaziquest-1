import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
    width: 50px;
    height: 50px;
    background: white;
    border-radius: 50%;
`

const AlertWrapper = styled.div`
    width: 50px;
    height: 50px;
    background: white;
    margin-right: 40px;
`

const MainWrapper = styled.div`
    display: flex;
    height: 70px;
    justify-content: space-around;
    align-items: center;
`
const ProfileWrapper = styled.div`
    display: grid;
`

const Profile = React.memo(() => {

    return (
        <MainWrapper>
            <AlertWrapper>

            </AlertWrapper>
            <Wrapper>
            
            </Wrapper>
            <ProfileWrapper>
                <div> some content </div>
                <div> name </div>
            </ProfileWrapper>
        </MainWrapper>
       
    )
})

export default Profile