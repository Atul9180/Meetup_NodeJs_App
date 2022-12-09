//directly created request handler fucntion(that will be returning response as requested url) to get all meetups and export
module.exports.allMeetupPage = (request,response)=>{
    response.render('meetup/meetup_List');
}

//for particular meetup get
module.exports.meetupDetailPage = (request,response)=>{
    response.render('meetup/meetup_Detail');
}

// form req handler to serve form
module.exports.meetupForm = (request,response)=>{    
    response.render('meetup/meetup_Form');
}

//req handler to create new meetup to be called after meetupForm submit
module.exports.createMeetup = (request,response)=>{
    const meetup=request.body;
    console.log({meetup});
    response.render('meetup/meetup_Form');
}

//req handler to delete new meetup
module.exports.deleteMeetup = (request,response)=>{
    response.render('meetup/meetup_List');
}

//req handler to edit and update meetup
module.exports.updateMeetup = (request,response)=>{
    response.json('../views/meetup/meetup_List');
}
