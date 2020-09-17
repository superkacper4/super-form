import styled from 'styled-components'

const Button = styled.button`
    width: 200px;
    height: auto;
    margin: 10px;
    border: white;
    background-color: cadetblue;
    transition: background-color .5s;
    cursor:pointer;

    &:hover{
        background-color:#a1e3dd;
    }

    @media (min-width:768px) {
        width: 100px;
        height: 30px;
        max-width: 10vw;

    }
`;

export default Button