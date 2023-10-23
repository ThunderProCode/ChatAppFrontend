import React, { ChangeEvent, FC, FormEvent, useEffect, useState } from "react";
import './Connect.styles.css';
import { socket } from "../../socket";
import { Routes, Route, Link, Navigate } from 'react-router-dom';
import { ConnectProps } from "../../interfaces";

const Connect: FC<ConnectProps> = (props): JSX.Element => {

    const [inputId,setInputId] = useState("");
    
    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        // 👇 Store the input value to local state
        setInputId(e.target.value);
    };


    if(!(props.userId)){
        return <Navigate to="/" replace/>
    }

    const handleSubmit = (event:FormEvent) => {
        event.preventDefault();
        console.log('Emitting:'+inputId);
        socket.emit('connectionUsername',inputId);
    }

    return(
        <form onSubmit={handleSubmit} className="connect-form">
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
                        onChange={handleChange}
                    />
                </div>
            </div>
            <div className="input-container">
               <button className="connect-button" type="submit">Connect</button>
            </div>
        </form>
    )
}

export default Connect;