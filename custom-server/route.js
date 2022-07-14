const {createRoomController, joinRoomController, getNewJoinee, matchLike , isAllRecordMatch} = require("./controller")

const appRouter= (app) => {
    
    app.post("/createRoom", createRoomController);
    app.post("/joinRoom", joinRoomController);
    app.post("/getNewJoine", getNewJoinee);
    app.post("/matchLike", matchLike);
    app.post("/isAllRecordMatch", isAllRecordMatch);
}

module.exports = appRouter