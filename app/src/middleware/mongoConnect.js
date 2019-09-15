const mongoose                  =   require('mongoose');
const MONGODB_URI               =   process.env.DB_MONGO_URL;
const mongoConnection           =   mongoose.set('debug', process.env.MONGO_DEBUG).connect(MONGODB_URI, { useNewUrlParser: true });

const connctionFunction = (connectionAttemptCount = 1) => {
    mongoConnection.then(db => {
        console.log(`Successfully connected to ${MONGODB_URI} MongoDB cluster in ${process.env.APP_ENV} mode.`);
        return db;
    }).catch(err => {
        if (err.message.code === 'ETIMEDOUT') {
            console.log('Attempting to re-establish database connection.');
            if (connectionAttemptCount < 3) {
                connectionAttemptCount++;
                connctionFunction(connectionAttemptCount);
            } else {
                console.log('Error while attempting to connect to database Server timeout Error');
                //Error mail send to all Syatem Admin Persons with err object
            }
        } else {
            console.log('Error while attempting to connect to database:');
            console.log(err);
            //Error mail send to all Syatem Admin Persons with err object
        }
    });
}
connctionFunction(1);
module.exports = mongoConnection;