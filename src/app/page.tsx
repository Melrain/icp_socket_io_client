/* eslint-disable react-hooks/rules-of-hooks */
"use client";

import { initializeSocket } from "@/lib/socketService";
import React, { useEffect } from "react";

const page = () => {
  const [isConnected, setIsConnected] = React.useState(false);
  const [message, setMessage] = React.useState("");

  useEffect(() => {
    const socket = initializeSocket({
      url: "http://localhost:8080/",
    });

    function onConnect() {
      console.log("connected");
      setIsConnected(true);
    }
    function onDisconnect() {
      console.log("disconnected");
      setIsConnected(false);
    }

    function onMessage(data: string) {
      console.log("message", data);
      setMessage(data as string);
    }

    socket.on("connect", onConnect);
    socket.on("disconnect", onDisconnect);
    socket.on("message", onMessage);

    return () => {
      socket.off("connect", onConnect);
      socket.off("disconnect", onDisconnect);
      socket.off("message", onMessage);
    };
  }, []);

  return (
    <div className="flex flex-col justify-center h-screen items-center space-y-6">
      <h1>TEST SOCKET IO</h1>
      <h1>{isConnected ? "Connected" : "Disconnected"}</h1>
      <h1>Message:{message}</h1>
    </div>
  );
};

export default page;
