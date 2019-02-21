import styled from 'styled-components'

export const Box = styled.div`
    display: flex;
`
export const Wrapper = styled.div`
    grid-column: ${props => props.col};
    grid-row: ${props => props.row ? props.row : "2/5"};
    background: white;
    display: grid;
    grid-template-rows: 1fr 3fr 1fr;
    box-shadow: 0px 0px 5px 5px #DEF3FA;
    align-items: center;
    border-radius: 5px;
    padding: 5px;
`

export const DoubleWrapper = styled.div`
    grid-column: ${props => props.col};
    grid-row: ${props => props.row ? props.row : "2/5"};
    background: white;
    display: grid;
    grid-template-rows: 1fr;
    grid-template-columns: 1fr 1fr;
    box-shadow: 0px 0px 5px 5px #DEF3FA;
    border-radius: 5px;
    padding: 5px;
`

export const Label = styled.div`
    display: flex;
    margin-left: 10px;
    margin-right: 10px;
    justify-content: space-between;     
    font-weight: bold;
    color: #454B54;
`
//will find a better name
export const SmallBox = styled.div`
    display: grid;
    align-items: center;
    margin: auto;
    grid-gap: 15px;
    font-size: 12px;
    color: #0B3364;
`

export const HR = styled.hr`
    border: 1px solid #0B3364;
    height: 80px;
    align-items: center;
`
export const H1 = styled.h1`
    margin: auto;
    font-size: 70px;
`

export const Display = styled.div`
    display: grid;
    margin: auto;
    grid-gap: 15px;
`
export const BasicDiv = styled.div`
    color: #454B54;
`

export const LabelButton = styled.div`
    align-items: center
    font-weight: bold;
    color: white;
    margin: auto;
    background: #0B3364;
    width: fit-content;
    padding: 7px;
    border-radius: 20px;
    :hover {
        cursor: pointer;
    }
`