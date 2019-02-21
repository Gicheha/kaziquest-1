import React from 'react'
import UseInputValue from '../resources/useinputvalue';
import styled from 'styled-components'

const Input = styled.input`
  padding: 0.5em;
  margin-left: 30px;
  color: ${props => props.inputColor || "palevioletred"};
  border: none;
  max-width: 300px;
  height: 25px;
  max-width: 230px;
  border-radius: 40px;
`;

const Search = React.memo(function() {

    const searchValue = UseInputValue('')

    return (
        <div>
            <Input {...searchValue}/> search
        </div>
    )
})

export default Search