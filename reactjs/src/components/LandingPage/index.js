import React from 'react';
import styled from 'styled-components';
import Cookies from "js-cookie";
import "../../css/header-and-body.css";

const Container = styled.div`
        background-color: #444;
        position: absolut;
        display: none;
        color: black;  
    `;


export default class Notification extends React.Component{
    render() {
        let className = 'menu';
        if (Cookies.get("Authorization") === undefined){
            className += 'menu-active';
        }
        return (
            <Container> <div className={className}> Please login first</div></Container>
        );
    }

}