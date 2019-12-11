module.exports = io => {
  io.on("connection", socket => {
    console.log(
      `A socket connection to the server has been made: ${socket.id}`
    );
    socket.on("APP", msg => {
      console.log("msg", msg);
      io.emit("APP", msg);
    });
    socket.on("disconnect", () => {
      console.log(`Connection ${socket.id} has left the building`);
    });
  });
};
