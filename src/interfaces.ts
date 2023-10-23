export interface ServerToClientEvents {
    noArg: () => void;
    username:(value:string) => void
    connectedToUser:() => void;
    basicEmit: (a: number, b: string, c: Buffer) => void;
    withAck: (d: string, callback: (e: number) => void) => void;
}

export interface ClientToServerEvents {
    hello: () => void;
    connectionUsername:(value:string) => void;
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