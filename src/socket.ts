import { io,Socket } from "socket.io-client";
import { ClientToServerEvents, ServerToClientEvents } from "./interfaces";

const url: string = process.env.NODE_ENV === 'production' ? "" : 'http://localhost:8080';
export const socket:Socket<ServerToClientEvents, ClientToServerEvents> = io(url);