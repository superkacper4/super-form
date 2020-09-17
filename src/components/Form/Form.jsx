import React, { useState } from 'react'
import styled from 'styled-components'

import Button from 'components/Button'
import FormRow from './FormRow'

const StyledForm = styled.form`
    background-color: #333;
    width: 100vw;
    color: white;
    margin: 10px auto;
    font-size: 15px;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    border: none;

    @media (min-width:768px) {
        width: 60vw;
    }
`;

const Table = styled.table`
    border-collapse:collapse;
    border: none;
    width: 100%;
`;

const TableHead = styled.thead`
    background-color: cadetblue;
    min-height: 50px;
    line-height: 50px;
`;

const StyledError = styled.p`
    width: 80%;
    height: 30px;
    background-color: #cc8787;
    border: red 2px solid;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 10px;
`;

const StyledDataDisplay = styled.p`
    width: 80%;
    background-color: gray;
`;

const Form = () => {
    const [numberOfRows, setNumberOfRows] = useState([1])
    const [formValues, setFormValues] = useState([])
    const [err, setErr] = useState('')
    const [isGood, setIsGood] = useState(false)


    const handleAddRow = (e) => {
        e.preventDefault()
        setNumberOfRows([...numberOfRows, numberOfRows.length + 1]);
        setErr('')
    }

    const handleDeleteRow = (e) => {
        e.preventDefault()
        if (numberOfRows.length === 1) return setErr("nie usuwaj ostatniego wiersza")
        setNumberOfRows(numberOfRows.filter(item => item !== numberOfRows.length))
        setFormValues(formValues.filter(item => item.id !== numberOfRows.length));
        setErr('')
    }

    const handleSend = (e) => {
        e.preventDefault()
        if (formValues.length === 0) return setErr('Nie dodałeś żadnych wartości. Po wpisaniu kliknij zatwierdź')

        setErr('')
        setIsGood(true)

        alert('Poprawnie wysłano dane.')

        console.log(formValues)
    }

    const handleChange = () => {
        setIsGood(false)
    }

    return (
        <StyledForm onChange={handleChange}>
            <Table >
                <TableHead >
                    <tr>
                        <th>#</th>
                        <th>Nazwa produktu</th>
                        <th>Ilość</th>
                        <th>Cena netto</th>
                        <th>Podatek VAT</th>
                        <th>Cena brutto</th>
                    </tr>
                </TableHead>
                <tbody>
                    {numberOfRows.map(row => (
                        <FormRow id={row} key={row} setFormValues={setFormValues} formValues={formValues} setErr={setErr} />
                    ))}
                </tbody>
            </Table>
            <Button onClick={handleAddRow}>Dodaj wiersz</Button>
            <Button onClick={handleDeleteRow}>Usuń wiersz</Button>
            <Button onClick={handleSend}>Wyślij</Button>
            {err ? <StyledError>{err}</StyledError> : null}
            {isGood ? <StyledDataDisplay>{JSON.stringify(formValues)}</StyledDataDisplay> : null}

        </StyledForm>
    )
}

export default Form