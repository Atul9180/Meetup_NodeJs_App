const mongoose=require('mongoose');

function createConnection(params){
    const connectionUrl="mongodb://localhost:27017/meetups";
    return mongoose.connect(connectionUrl)
}

module.exports={createConnection};
