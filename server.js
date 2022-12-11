const dotenv = require('dotenv');
dotenv.config({ path: './.env' })
const app = require('./app');
const mongoose = require('mongoose')
const Tour = require('./models/tour')

mongoose.set('strictQuery', false)
mongoose.connect(process.env.DATABASE_LOCAL, {
        useNewUrlParser: true,
        useUnifiedTopology: true,

    }).then(() => {
        console.log('DB Connection Successful')

    })
    // const tour = new Tour({
    //     name: 'Lasabi Olalekan',
    //     rating: 4.17,
    //     price: 500

// })

// tour.save().
// then(doc => { console.log(doc) })
//     .catch(err => {
//         console.log('An error Occured', err)
//     })
const port = process.env.port || 8000
app.listen(port, () => {
    console.log(`App is listening on ${port}`)
});