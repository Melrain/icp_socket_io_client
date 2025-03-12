"use client";

// socketService.js
import { io, Socket } from "socket.io-client";

let socket: Socket;

export const initializeSocket = ({ url }: { url: string }) => {
  // if (socket) {
  //   socket.disconnect();
  // }
  socket = io(url, {});
  return socket;
};

export const getSocket = () => {
  if (!socket) {
    throw new Error(
      "Socket not initialized. Please call initializeSocket first."
    );
  }
  return socket;
};
