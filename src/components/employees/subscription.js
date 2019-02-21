import React from 'react'
import { Box, Wrapper, Label, SmallBox, HR, H1, Display, BasicDiv, LabelButton } from './common'


const SubscriptionBox = React.memo(() => {
    return (
        <>
            <Wrapper col="8/-2">
                <Label> <div> My Subscription </div> BRONZE </Label>
                <Box>
                <SmallBox> <H1> 31 </H1> </SmallBox>
                 <HR />
                <Display> 
                    <BasicDiv> 30 Emails Left</BasicDiv>
                    <BasicDiv> 5 SMS Left </BasicDiv> 
                </Display>
                </Box>
                <LabelButton> Upgrade/Renew </LabelButton>
            </Wrapper>
        </>
    )
})

export default SubscriptionBox