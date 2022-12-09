//const { default: mongoose } = require("mongoose");
const mongoose=require("mongoose");
const {Schema} = mongoose;
const {Types} = Schema;
const {String,Number,Array} = Types;


    //this is schema for a meetup and meetup will have data as:
        //date,title,location,image
const meeetupSchema= new Schema({
        date:{
            type:Date,
            default:Date.now
        },
        title:{
            type:String,
            required:true
        } ,
        description: {
            type:String,
            required:true
        },
        location:{
            type:String,
            required:true
        },
        image:{
            type:String,
            required:true
        }
})

//modal for meetupschema
const Meetup= mongoose.model("Model",meeetupSchema);

module.exports={Meetup};