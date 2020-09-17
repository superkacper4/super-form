import React, { useEffect, useState } from 'react'
import styled from 'styled-components'

import Input from '../Input'
import Td from '../Td'

const StyledTr = styled.tr`
    width: 100%;
    margin-bottom: 20px;
`;

const StyledSelect = styled.select`
    width: 100%;
    background-color: transparent;
    border: 1px white solid;
    color: white;
    padding: 3px;
`;

const StyledOption = styled.option`
    background-color: #555;
    color: white;
    padding: 3px;
`

const StyledSubmit = styled.input`
    width: 100%;
    height: 30px;
    margin: auto;
    max-width: 10vw;
    border: white;
    background-color: cadetblue;
    transition: background-color .5s;
    cursor:pointer;
    padding: 0;
    margin: 0;

    &:hover{
        background-color:#a1e3dd;
    }
`;

const FormRow = ({ id, setFormValues, formValues, setErr }) => {
    const [titleVal, setTitleVal] = useState('')
    const [quantityVal, setQuantityVal] = useState('')
    const [priceNettoVal, setPriceNettoVal] = useState('')
    const [taxVal, setTaxVal] = useState('')
    const [priceBruttoVal, setPriceBruttoVal] = useState('')
    const [rowValues, setRowValues] = useState({
        id: id,
        title: '',
        quantity: '',
        priceNetto: '',
        tax: '',
        priceBrutto: ''
    })

    const handleClick = (e) => {
        e.preventDefault()
        if (titleVal === '') return setErr('popraw pole nazwy')
        if (quantityVal === '' || quantityVal <= 0) return setErr('popraw pole ilości')
        if (priceNettoVal === '' || priceNettoVal <= 0) return setErr('popraw pole netto')
        if (taxVal === '') return setErr('wybierz podatek')

        setErr('')

        let condition = formValues.some(e => e.id === id)

        if (!condition) setFormValues([...formValues, rowValues])
        else if (condition && formValues.some(e => e.title !== titleVal)) formValues[id - 1] = rowValues
    }



    useEffect(() => {
        if (priceNettoVal && taxVal && quantityVal) setPriceBruttoVal(Math.round((priceNettoVal * quantityVal * taxVal + priceNettoVal * quantityVal + Number.EPSILON) * 100) / 100)
        else setPriceBruttoVal('---')

        setRowValues({
            id: id,
            title: titleVal,
            quantity: quantityVal,
            priceNetto: priceNettoVal,
            tax: taxVal,
            priceBrutto: priceBruttoVal
        })

    }, [taxVal, priceNettoVal, quantityVal, titleVal, priceBruttoVal, id])

    return (
        <StyledTr >
            <td>{id}</td>
            <Input type="text" name="title" value={titleVal} setData={setTitleVal} options={{ maxLength: '20', minLength: '2' }} />
            <Input type="number" name="quantity" value={quantityVal} setData={setQuantityVal} options={{ min: '0' }} />
            <Input type="number" name="priceNetto" value={priceNettoVal} setData={setPriceNettoVal} options={{ min: '0' }} />
            <Td>
                <StyledSelect name="tax" value={taxVal} onChange={(e) => setTaxVal(e.target.value)} required>
                    <StyledOption value='' disabled>----</StyledOption>
                    <StyledOption value={0.08}>8%</StyledOption>
                    <StyledOption value={0.23}>23%</StyledOption>
                    <StyledOption value={0.32}>32%</StyledOption>
                </StyledSelect>
            </Td>
            <Td>
                {priceBruttoVal}
            </Td>
            <Td>
                <StyledSubmit type="submit" onClick={handleClick} value="Zatwierdź" />
            </Td>
        </StyledTr>
    )
}

export default FormRow