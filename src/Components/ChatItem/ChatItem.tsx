import React, { FC } from "react";
import './ChatItem.styles.css';
import { ChatItemProps } from "../../interfaces";

const ChatItem:FC<ChatItemProps> = (props) => {

    const className = props.sent ? 'chat-sent-item' : 'chat-received-item';
    return (
        <li className={className}>
            <p>
                {props.message}
            </p>
        </li>
        
    )
}

export default ChatItem;