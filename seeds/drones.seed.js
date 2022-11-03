// Iteration #1
const mongoose = require("mongoose")
const Drone = require("../models/Drone.model")
const MONGO_URI = process.env.MONGODB_URI || "mongodb://localhost/lab-express-drones";
const drones = [
    {
        name: "The Zap 3000",
        propellers: 3,
        maxSpeed: 20        
    }, 
    {
        name: "TurboQ 2x",
        propellers: 5,
        maxSpeed: 30
    },
    {
        name: "Little Lazy 3",
        propellers: 2,
        maxSpeed: 10
    }
]

const createDrones = async function() {
    try{
        const connect = await mongoose.connect(MONGO_URI)
        //console.log(`Connected to database: ${connect.connections[0].name}`)
        //creating the drones
        const dbDrones = await Drone.create(drones)
        console.log(`${dbDrones.length} - drones created `)
        //closing the connection
        const dbClose = await mongoose.connection.close()
        console.log("Connection closed")
    }
    catch(err){
        console.log(err)
    }
}

createDrones();