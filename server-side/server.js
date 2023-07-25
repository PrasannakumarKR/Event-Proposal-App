const express = require('express');
const app = express();
const cors = require('cors')
const mongoose = require('mongoose');
const vendorSignup = require('./routes/vendorRoutes/vendorSignup');
const vendorSignin = require('./routes/vendorRoutes/vendorSignin');
const dotenv = require('dotenv').config();
const userSignup = require('./routes/userRoutes/userSignup');
const userSignin = require('./routes/userRoutes/userSignin');
const authCheck = require('./routes/authCheck')
const createEvent = require('./routes/vendorRoutes/createEvent')
const getVendorEvents = require('./routes/vendorRoutes/getVendorEvents');
const deleteevent = require('./routes/vendorRoutes/deleteEvent')

const getallevents = require('./routes/userRoutes/getAllEvents');
const getVendorEvent = require('./routes/userRoutes/getVendor');
const selectEvent = require('./routes/userRoutes/selectEvent');
const getselections = require('./routes/userRoutes/getSelections')

app.use(express.json({ limit: '50mb' }));
app.use(express.urlencoded({ limit: '50mb', extended: true }));
app.use(cors());
mongoose.connect(process.env.MONGO).then(() => {
    console.log('Mongoose connected to DB')
    app.listen(process.env.PORT, () => {
        console.log('Connected to port 3003')
    })
}).catch((err) => {
    console.log(err)
})

app.get('/', (req, res) => {
    res.send('Server running...')
})

app.use('/vendor/', vendorSignup);
app.use('/vendor/', vendorSignin);
app.use('/vendor', createEvent);
app.use('/vendor', getVendorEvents);
app.use('/vendor', deleteevent);

app.use('/user', userSignin);
app.use('/user', userSignup);
app.use('/user', authCheck);
app.use('/user', getallevents);
app.use('/user', getVendorEvent);
app.use('/user', selectEvent);
app.use('/user', getselections)

