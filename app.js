const express = require('express')
const productRoute = require('./routes/products')
const app = express()
require('dotenv').config()
const connectDB = require('./db/connect')


// routes
app.use(express.json())
app.use('/api/v1/products', productRoute)   
// app.get('/api/v1/products')  - get all products
// app.post('/api/v1/products')       - create a new product
// app.get('/api/v1/products/:id')  - get single product
// app.patch('/api/v1/priducts/:id') - update product
// app.delete('api/v1/products/:id')    - delete products.







const port = process.env.PORT

const start = async () => {
    try {
        await connectDB(process.env.MONGO_URI)
        app.listen(port, console.log(`Server listening on port ${port}...`))

    } catch (error) {
        console.log(error)
    }
}

start()


