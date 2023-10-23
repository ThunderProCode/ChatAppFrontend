import React, { FC } from "react";
import './Chat.styles.css';
import ChatItem from "../../Components/ChatItem/ChatItem";
import { ChatProps } from "../../interfaces";

const Chat:FC<ChatProps> = (props) => {
    return(
        <section className="chat-container">
            <header className="chat-header">
                <h2>Connected to:</h2>
                <p className="chat-id">{props.userId}</p>
            </header>
            <div className="chat-content">
                <ul className="chat-list">
                    <ChatItem sent={false} message="Hi there!"/>
                    <ChatItem  sent={true} message="Who is this?"/>
                    <ChatItem  sent={true} message="What do you want?"/>
                </ul>
                <form action="" className="chat-form">
                    <input type="text" className="chat-input" placeholder="Type a message"/>
                    <button className="chat-button">Send</button>
                </form>
            </div>
        </section>
    )
}

export default Chat;