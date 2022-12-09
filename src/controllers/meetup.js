//directly created request handler fucntion(that will be returning response as requested url) to get all meetups and export
const {Meetup} = require('../models/meetup');


module.exports.allMeetupPage = async (request,response)=>{
    const allMeetups= await Meetup.find();
    response.render('meetup/meetup_List',{allMeetups});
}

//for particular meetup get
module.exports.meetupDetailPage = async (request,response)=>{
     const meetupId= await Meetup.findById(request.params.id);
     response.render('meetup/meetup_Detail',{meetupId});
}

// form req handler to serve form
module.exports.meetupForm = (request,response)=>{    
    response.render('meetup/meetup_Form');
}

//req handler to create new meetup to be called after meetupForm submit
module.exports.createMeetup = (request,response)=>{
    const meetup=request.body;
    Meetup.create(meetup).then((meetup)=> {
    //console.log("Created..",meetup);
    response.render('meetup/meetup_Form',{message: "Meetup created.."});
 }).catch(error=>{
    response.render("meetup/meetup_Form",{error: error.message})
 })
}

//req handler to delete new meetup
module.exports.deleteMeetup = (request,response)=>{
    Meetup.deleteOne({_id:request.params.id})
    .then(()=>response.redirect('/meetups'))
    .catch(err=>console.log("Error while deleting",err.message))
}

//req handler to edit and update meetup
module.exports.updateMeetup = (request,response)=>{
    
    response.json('../views/meetup/meetup_List');
}
