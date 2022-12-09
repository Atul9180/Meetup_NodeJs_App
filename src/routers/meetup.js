const express=require('express');
const { allMeetupPage, meetupForm, createMeetup, deleteMeetup, updateMeetup, meetupDetailPage } = require('../controllers/meetup');
const meetupRouter= express.Router();




//baseurl :  meetups
//TIP: Always put dynamic(/:id) routers at last to avoid conflict 
meetupRouter.get("/",allMeetupPage)
meetupRouter.get("/create",meetupForm)
meetupRouter.post("/create",createMeetup)
meetupRouter.get("/:id",meetupDetailPage)
meetupRouter.delete("/:id",deleteMeetup)
meetupRouter.put("/:id",updateMeetup)

module.exports={meetupRouter};