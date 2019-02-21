import React from 'react'
import styled from 'styled-components'

const LinkWrapper = styled.div`
    height: 50px;
    display: flex;
    align-items: center;
    margin-left: 10px;
    color: white;
    font-size: 15px;
`


const SideBar = React.memo(function() {

    return (
        <>  
            {console.log("in sidebar")}
            <LinkWrapper>
                Home
            </LinkWrapper>
            <LinkWrapper>
                My Jobs
            </LinkWrapper>
            <LinkWrapper>
                All Candidates
            </LinkWrapper>
            <LinkWrapper>
                Events / Schedule
            </LinkWrapper>
            <LinkWrapper>
                Reports
            </LinkWrapper>
            <LinkWrapper>
                Message Center
            </LinkWrapper>
            <LinkWrapper>
                Settings
            </LinkWrapper>
            <LinkWrapper>
                
            </LinkWrapper>
            <LinkWrapper>
                Help
            </LinkWrapper>
            <LinkWrapper>
                Account
            </LinkWrapper>
            <LinkWrapper>
                Log Out
            </LinkWrapper>
        </>
    )
})

export default SideBar