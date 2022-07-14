const yelp = require("yelp-fusion");
const createRoom = require("./models/room");
const joinRoom = require("./models/user");
const config = require("./config");
const user = require("./models/user");

const YELP_CLIENT = yelp.client(config.YELP_KEY );

const createRoomController = async  (req, res) => {
  console.log("create room controller hit")
    try {
      const{ name, zip, radius, code, deviceId }= req.body
      YELP_CLIENT
        .search({
          term: "food",
          longitude: -89.5,
          latitude: 44.5,
        })
        .then((response) => {
          var apiData = response.jsonBody;
          console.log("api data================",apiData)
          const users = new user({name : name, deviceId:deviceId})
          const userSaved = users.save();
          console.log(userSaved);
          const Data = new createRoom({
            name,    
            zip,  
            radius,
            code,
            location: {
              longitude: -89.5,
              latitude: 44.5,
            },
            resturentData: apiData.businesses,
          });
          Data.save();
          const responce = {
            message: "create",
            error: false,
            data: { name, zip, radius, code, apiData},
          };
          res.send(responce);
        })
        .catch((e) => {
          console.log(e);
        });
    } catch (error) {
      const responce = {
        error: true,
        error: error,
      };
      res.send(responce);
    }
  }

 const joinRoomController = async (req, res) => {
    const name = req.body.name;
    const code = req.body.inputCode;
    if (code === "") {
      res.send("Please Fill The Input Correctly");
    } else {
      const data = await createRoom.find({ code: code });
      const dt = data.toString();
      if (dt === "") {
        res.send({
          error: true,
          message: "Invalid Code",
        });
      } else {
        const Data = new joinRoom({
          name: name,
          code: code,
        });
        Data.save();
        res.send({
          message: "join",
          error: false,
          data: {
            mydata: {
              name: name,
              code: code,
            },
            roomData: data,
          },
        });
      }
    }
  }


  const getNewJoinee = async (req, res)=>{
    const {code , id} = req.body;
    const checkUser = await createRoom.find({code : code});
    const convert = checkUser.toString();
    if (convert === "") {
      res.send({
        error: true,
        message: "Room Not "
      })
    }else{
      res.send(checkUser)
    }
    // console.log("get ")
    // get code and session id check if the room exist
    // return the all users 
    // on client side compare both arrays and show the notfication toast of the new joinee
  }

  const isAllRecordMatch =async(req,res)=>{
    const sessionId = req.body.sessionId;
    //on client side call a timer after 5secs call this api
    // get the sessionid from the req
    // check if all the elements if the match array have same restaurant id then show a status match and return that object to the client side 
    // else return false
  }

  const matchLike= async (req, res)=>{
    //get the object and userid and session id or code from request
    // check if the session id is in the record
    // get the match list and search the userid/username/device id in it
    //if the record not found add the record in arrary and if found update in array
    //check if the restaurant object is similar with all or not if yes return status match to all users
    // and update the record in db
  }

  module.exports={
    createRoomController, joinRoomController, getNewJoinee, matchLike, isAllRecordMatch
  }