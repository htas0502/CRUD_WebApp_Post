
// Khai bao mongoose
const mongoose = require('mongoose')

// Khai bao config
const config = require('config')

// Khai bao database
const db = config.get('mongoURI')

// Ket noi toi CSDL
const connectDB = async () => {
    try {
        await mongoose.connect(db, {
            // useCreateIndex: true,
            useNewUrlParser: true,
            useUnifiedTopology: true,
            // useFindAndModify: false
        })

        // Log thong bao thanh cong!
        console.log('Da ket noi Co So Du Lieu!');

    } catch (error) {
        // Log thong bao that bai!
        console.log(error.message)
        process.exit(1)
    }
}

module.exports = connectDB