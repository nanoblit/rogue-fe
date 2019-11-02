import io from "socket.io-client";

console.log("hello");

const socket = io("ws://127.0.0.1:8081/");

socket.on("test", (message: string) => {
  console.log(message);
});
