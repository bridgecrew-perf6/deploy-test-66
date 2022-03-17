import mongoose from 'mongoose'

// const connection = { /* creating connection object*/
//     isConnected: false
// }

// const dbConnect = async () => {
//     /* check if we have connection to our databse*/
//     if (connection.isConnected) {
//         return
//     }

//     /* connecting to our database */
//     const db = await mongoose.connect(process.env.MONGODB_URI)
//     connection.isConnected = db.connections[0].readyState;
// }

const dbConnect = handler => async (req, res) => {
    if(mongoose.connection[0].readyState) {
        return handler(req, res)
    }
    await mongoose.connect(process.env.MONGODB_URI)
    return handler(req, res)
}

export default dbConnect