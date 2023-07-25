const express = require('express');
const app = express();
const userData = require('../../model/userData');
const bcrypt = require('bcrypt')

app.post('/signup', async (req, res) => {
    const { username, email, contact, password } = req.body;
    const isEmailExist = await userData.findOne({ email: email })
    if (isEmailExist) {
        res.send({ message: 'Email already exists', success: false })
    } else {
        const isContactExists = await userData.findOne({ contact: contact })
        if (isContactExists) {
            res.send({ message: 'Contact exists', success: false })
        } else {
            const hashPassword = await bcrypt.hash(password, 10);
            const user = await userData.create({
                username, email, contact, password: hashPassword
            })
            res.send({ message: `hi ${user.username}! your account created successfully`, success: true })
        }
    }
})

module.exports = app