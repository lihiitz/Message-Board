const express = require('express')
const router = express.Router()
const jwt = require("jsonwebtoken")
const {verify} = require('..//../middleware')

require('dotenv').config()



let users = {}
let logInTokens = {}
let id = 1
let offers = {
    1 : {id: 1, title : "car",descriptionHeader : "2017 Cadil ...", description : "2017 Cadillac CT6. AWD 3.6L Luxury 4dr Sedan. $30,999 $461/mo*", phone : "0544257318", email : "lihiitz@gmail.com", viewing : 0}
}
// let viewers = {} // {1 : ["lihi", "mai"] }



const setViewing = function(id, num, res){
    for (const [k, v] of Object.entries(offers)){
        if (k === id){
            v.viewing += num
        }
    }
    res.send()
}

// router.post('/viewDown/:offerId', verify, function(req, res){
//     let id = Number(req.params.offerId)
//     let token = req.headers.authorization.split(' ')[1]
//     let email = logInTokens[token]
//     let offerViewers = [...viewers[id]]
//     let viewerIndex = offerViewers.findIndex(v => v === email)
//     if (viewerIndex !== -1){
//         offerViewers.splice(viewerIndex, 1)
//         viewers[id] = [...offerViewers]
//         setViewing(id, -1, res)
//     }
// })

// router.post('/viewUp/:offerId', verify, function(req, res){
//     let id = Number(req.params.offerId)
//     let token = req.headers.authorization.split(' ')[1]
//     let email = logInTokens[token]
//     let offerViewers = []
//     if(viewers[id]){
//         offerViewers = [...viewers[id]]
//     }
//     let viewerIndex = offerViewers.findIndex(v => v === email)
//     if (viewerIndex === -1){
//         offerViewers.push(email)
//         viewers[id] = [...offerViewers]
//         setViewing(id, 1, res)
//     }

// })
router.post('/viewingUp/:id', function(req, res) {
    setViewing(req.params.id, 1, res)
})

router.post('/viewingDown/:id', function(req, res) {
    setViewing(req.params.id, -1, res)
})

router.post('/offer', verify, function(req, res) {
    let offer = req.body.offer
    offer["id"] = ++id
    offers[id] = offer
    res.send(offers)
})

router.get('/offers', verify, function(req, res) {
    res.send(offers)
})

router.post('/login', function (req, res) {//TO DO - change to get?
    let email = req.body.email
    let password = req.body.password

    if (users[email] && users[email].password === password){
        let payLoad = {email}
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
    let newUser = req.body
    users[newUser.email] = newUser
    res.send({code : 200})
})

module.exports = router