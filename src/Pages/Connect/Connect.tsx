import React, { FC, useEffect, useState } from "react";
import './Connect.styles.css';
import { socket } from "../../socket";
import { Routes, Route, Link, Navigate } from 'react-router-dom';
import { ConnectProps } from "../../interfaces";

const Connect: FC<ConnectProps> = (props): JSX.Element => {

    if(!(props.userId)){
        return <Navigate to="/" replace/>
    }

    return(
        <form className="connect-form">
            <div className="user-id">
                <p>{ props.userId }</p>
            </div>
            <label className="connect-label"  htmlFor="connection-id">Connect to a User: </label>
            <input
                className="connect-input"
                id="connection-id" 
                type="number" 
                max="999999" 
                min="0"
                placeholder="Type user's connection id:"
            />
            <button className="connect-button">Connect</button>
        </form>
    )
}

export default Connect;