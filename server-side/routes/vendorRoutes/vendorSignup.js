const express = require('express');
const app = express();
const vendorData = require('../../model/vendorData');
const bcrypt = require('bcrypt')

app.post('/signup', async (req, res) => {
    const { username, email, contact, password } = req.body;
    const isEmailExist = await vendorData.findOne({ email: email })
    if (isEmailExist) {
        res.send({ message: 'Email already exists', success: false })
    } else {
        const isContactExists = await vendorData.findOne({ contact: contact })
        if (isContactExists) {
            res.send({ message: 'Contact exists', success: false })
        } else {
            const hashPassword = await bcrypt.hash(password, 10);
            const user = await vendorData.create({
                username, email, contact, password: hashPassword
            })
            res.send({ message: `hi ${user.username}! your account created successfully`, success: true })
        }
    }
})

module.exports = app