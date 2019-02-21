import React from 'react'
import { Box, Wrapper, Label, SmallBox, HR, H1, Display, BasicDiv, LabelButton } from './common'


const AppStats = () => {
    return (
        <>
            <Wrapper col="2/6">
                <Label> <div> New Applicants </div> last 7 days  </Label>
                <Box>
                <SmallBox> <H1> 31 </H1> </SmallBox>
                 <HR />
                <Display> 
                    <BasicDiv> 30 Intervewed</BasicDiv>
                    <BasicDiv> 5 seen </BasicDiv> 
                </Display>
                </Box>
                <LabelButton> View Applications </LabelButton>
            </Wrapper>
        </>
    )
}

export default AppStats