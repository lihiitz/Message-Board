const express = require('express')
const router = express.Router()
const jwt = require("jsonwebtoken")
const {verify} = require('..//../middleware')

require('dotenv').config()



let users = {}
let logInTokens = {}
let id = 1
let offers = [{id : id, title : "car", description : "nice black car", phone : "0544257318", email : "lihiitz@gmail.com", viewing : 0}]
let viewers = {} // {1 : ["lihi", "mai"] }



const setViewing = function(id, num, res){
    // console.log("in setViewing: ", offers);
    let offer = offers.find(o => o.id === Number(id))
    // console.log("in setViewing: ", offer)
    offer.viewing += num
    // console.log("in setViewing: ", offer);
    res.send()
}

router.post('/viewDown/:offerId', verify, function(req, res){
    let id = Number(req.params.offerId)
    let token = req.headers.authorization.split(' ')[1]
    let email = logInTokens[token]
    let offerViewers = [...viewers[id]]
    let viewerIndex = offerViewers.findIndex(v => v === email)
    if (viewerIndex !== -1){
        offerViewers.splice(viewerIndex, 1)
        viewers[id] = [...offerViewers]
        setViewing(id, -1, res)
    }
})

router.post('/viewUp/:offerId', verify, function(req, res){
    let id = Number(req.params.offerId)
    let token = req.headers.authorization.split(' ')[1]
    let email = logInTokens[token]
    let offerViewers = []
    if(viewers[id]){
        offerViewers = [...viewers[id]]
    }
    let viewerIndex = offerViewers.findIndex(v => v === email)
    if (viewerIndex === -1){
        offerViewers.push(email)
        viewers[id] = [...offerViewers]
        setViewing(id, 1, res)
    }

})
router.post('/viewingUp/:id', function(req, res) {
    setViewing(req.params.id, 1, res)
})

router.post('/viewingDown/:id', function(req, res) {
    console.log(offers);
    setViewing(req.params.id, -1, res)
    console.log(offers);
})

router.post('/offer', function(req, res) {
    let offer = req.body.offer
    offer.id = ++id
    offers.push(offer)
    res.send(offers)
})

router.get('/offers', verify, function(req, res) {
    res.send(offers)
})

router.post('/login', function (req, res) {//TO DO - change to get?
    let email = req.body.email
    let password = req.body.password
    console.log("email and pass: ", email, password);

    if (users[email] && users[email].password === password){
        let payLoad = {email}
        //create the access token with the shorter lifespan
        // let accessToken = jwt.sign(payLoad, process.env.ACCESS_TOKEN_SECRET, {
        //     algorithm: "HS256",
        //     expiresIn: process.env.ACCESS_TOKEN_LIFE
        // })
        let accessToken = jwt.sign(payLoad, process.env.ACCESS_TOKEN_SECRET)
        logInTokens[accessToken] = email
        //create the refresh token with the longer lifespan
        // let refreshToken = jwt.sign(payLoad, process.env.REFRESH_TOKEN_SECRET, {
        //     algorithm: "HS256",
        //     expiresIn: process.env.REFRESH_TOKEN_LIFE
        // })
        //store the refresh token in the user array
        // users[email].refreshToken = refreshToken
        res.json(accessToken)
        res.status(200).send()
    }
    else if (users[email]){
        res.status(204).send()
    }
    else {
        res.status(206).send()
    }
})

router.post('/register', function (req, res) {
console.log("in register api: ", req.body);
    let newUser = req.body
    users[newUser.email] = newUser
    console.log("users:", users);
    res.send({code : 200})
})

module.exports = router