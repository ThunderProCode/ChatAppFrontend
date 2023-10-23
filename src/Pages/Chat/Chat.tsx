import React, { ChangeEvent, FC, FormEvent, useEffect, useState } from "react";
import './Chat.styles.css';
import ChatItem from "../../Components/ChatItem/ChatItem";
import { ChatItemProps, ChatProps } from "../../interfaces";
import { socket } from "../../socket";

const Chat:FC<ChatProps> = (props) => {

    const [inputMessage, setInputMessage] = useState('');
    const [ messages, setMessages ] = useState<ChatItemProps[]>([]);

    const handleChange = (event:ChangeEvent<HTMLInputElement>) => {
        setInputMessage(event.target.value);
    }

    const handleSubmit = (event:FormEvent) => {
        event.preventDefault();
        socket.emit('chatMessageToServer',inputMessage,props.userId);
        setMessages(previous => 
            [
                ...previous,{
                    sent: true,
                    message:inputMessage
                }
            ])
        console.log(messages);
    }

    useEffect(() => {
        socket.on('chatMessage',(message:string) => {
            console.log('Received: '+message);
            setMessages(previous => 
                [...previous,{ 
                        sent:false,
                        message:message 
                    }
                ]
            );
            console.log(messages);
        });
    },[socket.connected])

    return(
        <section className="chat-container">
            <header className="chat-header">
                <h2>Connected to:</h2>
                <p className="chat-id">{props.userId}</p>
            </header>
            <div className="chat-content">
                <ul className="chat-list">
                    {
                        messages.map(({ sent,message }:ChatItemProps, index:number ) => {
                            return <ChatItem key={index} sent={sent} message={message}/>
                        })
                    }
                </ul>
                <form onSubmit={handleSubmit} className="chat-form">
                    <input 
                        type="text" 
                        className="chat-input" 
                        placeholder="Type a message"
                        onChange={handleChange}
                    />
                    <button type="submit" className="chat-button">Send</button>
                </form>
            </div>
        </section>
    )
}

export default Chat;