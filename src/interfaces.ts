export interface ServerToClientEvents {
    noArg: () => void;
    username:(value:string) => void
    connectedToUser:(value:string) => void;
    basicEmit: (a: number, b: string, c: Buffer) => void;
    chatMessage: (message:string) => void;
    withAck: (d: string, callback: (e: number) => void) => void;
}

export interface ClientToServerEvents {
    hello: () => void;
    connectionUsername:(value:string) => void;
    chatMessageToServer: (message: string, to:string) => void;
}

export interface InterServerEvents {
ping: () => void;
}

export interface SocketData {
name: string;
age: number;
}

export interface ConnectProps {
    userId:string;
}

export interface ChatItemProps {
    sent: boolean;
    message: string;
}

export interface ChatProps {
    userId: string;
}
