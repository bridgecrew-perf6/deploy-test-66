import mongoose from 'mongoose'

const connection = { /* creating connection object*/
    isConnected: false
}

const dbConnect = async () => {
    /* check if we have connection to our databse*/
    if (connection.isConnected) {
        return
    }

    /* connecting to our database */
    const db = await mongoose.connect(process.env.MONGODB_URI)
    connection.isConnected = db.connections[0].readyState;
}

export default dbConnect