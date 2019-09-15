const userModel         =   require('./../models/userModel');

module.exports = {

    userList    :   ()          =>  {
        return userModel.find();
    },
    userDetail  :   (userId)    =>  {
        var userdata = userModel.findById(userId);
        //cache server save

        //next time vist => 
        //check cache server UserId ==> return from cache Server 
        //If data not exist in cache Server => 
        //get data from Mongo Server => return data + save in cache Server
        
        return userdata ;
    },
    
    userInsert  :   (data)      =>  {

    },

    userUpdate  :   (userId, data)  =>  {

    },

    userDelete  :   (userid)    =>  {

    }
}