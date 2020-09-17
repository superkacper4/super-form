import React from 'react'
import styled from 'styled-components'
import Td from '../Td'
const StyledInput = styled.input`
    width: 100%;
    background-color: transparent;
    border: 1px white solid;
    color: white;
    padding: 3px;
`;

const Input = ({ type, setData, name, options }) => {
    const handleChange = (e) => {
        setData(e.target.value)
    }
    return (
        <Td>
            <StyledInput type={type} onChange={handleChange} name={name} required {...options} />
        </Td>
    )
}

export default Input 