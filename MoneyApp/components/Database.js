var MongoClient = require('mongodb').MongoClient;
var uri = "mongodb+srv://William:William007@mycluster-gea94.mongodb.net/test?retryWrites=true";
MongoClient.connect(uri, function(err, client) {
    if(!err){
        console.log("Connected");
    }
   const collection = client.db("test").collection("devices");
   // perform actions on the collection object
   client.close();
});