
// Khai bao express de co the xai duoc express
const express = require('express')

const connectDB = require('./config/db')

// Khoi dong app
const app = express()

// Khoi dong express middleware ( cai nay la thu tuc can lam truoc khi tao 1 app )
app.use(express.json())

// * Ket noi CSDL
connectDB()

// Tao 1 cong (port)
const PORT = 5000;
// Khoi dong port - lang nghe port
app.listen(PORT, () => console.log(`Server started at http://localhost:${PORT}`));