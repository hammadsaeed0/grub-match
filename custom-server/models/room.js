const mongoose = require("mongoose");

const roomSchema = new mongoose.Schema({
  expire_at: {
    type: Date, 
    default: Date.now, 
    expires: 7200
  },
  name: { // host 
    type: String,
    required:true  
  }, 
  zip: {
    type: Number,  
    required:true  
  },
  radius: {
    type: String,
    required:true  
  },
  code: {
    type: String,
    unique:true,
    required:true  
  },
  location: {
    type: Object,
    required:true  
  },
  resturentData : {
    type: Array,
    default:[] 
  },
  matchList:{
    type: Array,
    default:[] 
  },
  user_list:{
    type: Array,
    default: []
  }
});


module.exports = new mongoose.model("room", roomSchema);
