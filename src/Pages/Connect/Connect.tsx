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
            <div className="connect-header">
                <h2 className="connect-title">My user-id:</h2>
                <div className="connect-user-id">
                    <p>{props.userId}</p>
                </div>
            </div>
            <div className="input-container">
                <div className="form-control">
                    <label className="connect-label"  htmlFor="connection-id">User Id: </label>
                    <input
                        className="connect-input"
                        id="connection-id" 
                        type="number" 
                        max="999999" 
                        min="0"
                        placeholder="Connection id"
                    />
                </div>
            </div>
            <div className="input-container">
               <button className="connect-button">Connect</button>
            </div>
        </form>
    )
}

export default Connect;