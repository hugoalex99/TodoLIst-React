import styled from 'styled-components'
import { BiSolidTrashAlt, BiSolidCheckCircle  } from "react-icons/bi";

export const Container = styled.div`
    background: linear-gradient(90deg, #383838 0%, #5e11daff 81.25%);
    width: 100%;
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    h1{
        color: #FFFFFF;
    }
`
export const ToDoList = styled.div`
    background-color: #FFFFFF;
    padding: 30px 20px;
    border-radius: 5px;
    

    ul{
        padding: 0;
        margin-top: 60px;
    }
`    
export const Input = styled.input`
    border: 2px solid rgba(209, 211, 212, 0.4);
    border-radius: 5px;
    height: 40px;
    margin-bottom: 30px;
    width: 340px;
    font-size: 1.0rem;
    font-weight: bold;
`    
export const Button = styled.button`
    background: rgb(253, 171, 61);
    border-radius: 5px;
    font-weight: 900;
    font-size: 17px;
    line-height: 2px;
    height: 40px;
    margin-bottom: 30px;
    border: none;
    color: #000;
    width: 130px;
    cursor: pointer;

    &:hover{
        opacity: 0.8;
    }
    &:active{
        opacity: 0.6;
    }
`    
export const ListItem = styled.div`
    background: ${ props => props.isFinished ? 'rgb(253, 171, 61)' : 'rgb(120, 75, 209)' };
    box-shadow: 1px 4px 10px rgba(0, 0, 0, 0.2);
    border-radius: 5px;
    height: 60px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 30px;
    padding: 0 10px;
    width: 500px;

    li{
        list-style: none;
        font-size: 1rem;
        font-weight: bold;
        color: ${ props => props.isFinished ? '#000000' : '#FFFFFF' };
    }
`
export const Trash = styled(BiSolidTrashAlt)`
    cursor: pointer;
    color: #fff;
    font-size: 1.6rem;
`
export const Ok = styled(BiSolidCheckCircle )`
    cursor: pointer;
    color: #fff;
    font-size: 1.6rem;
`
export const StatusOk = styled.button`
    background-color: rgb(253, 171, 61);
    border-radius: 5px;
    border: none;
`
export const StatusPendente = styled.button`
    background-color: rgb(120, 75, 209);
    border-radius: 5px;
    border: none;
    margin-right: 10px;
    color: #fff;
`
