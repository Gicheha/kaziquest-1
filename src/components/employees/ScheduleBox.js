import React from 'react'
import styled from 'styled-components'
import { Box, Wrapper, Label, SmallBox, HR, H1, Display, BasicDiv, LabelButton, DoubleWrapper } from './common'


const LowerWrapper = styled.div`
    background: yellow;
`

const UpperWrapper = styled.div`
    background: yellow;
`

const LittleBox = styled.div`
    height: 100px;
    width: 300px;
    margin-left: 5px;
    margin-right: 5px;
    background: white;
`

const ScheduleBox = React.memo(() => {
    return (
        <>
            <DoubleWrapper col="2/-2" row="6/10">
                <UpperWrapper>
                    <Label> Some </Label>
                    <LittleBox></LittleBox>
                </UpperWrapper>
                <LowerWrapper>
                   <Label> Other </Label>
                  
                </LowerWrapper>
            </DoubleWrapper>
        </>
    )
})

export default ScheduleBox