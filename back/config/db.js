// database connection
const mongoose = require('mongoose')
const connectDB = async () => {
    try{
        const conn = await mongoose.connect(process.env.MONGODBURI)

        console.log(`monmgoDB connected: ${conn.connection.host}`.cyan.underline)


    } catch(error){
        console.log(error)
        proces.exit(1) // 1 means failure

    }

}

module.exports = connectDB
