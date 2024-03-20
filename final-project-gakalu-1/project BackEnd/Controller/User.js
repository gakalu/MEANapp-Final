const UserCollection = require('../Model/User')
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const PRIVATE_KEY = "react-native-project"

exports.signup = async (req, res) => {
    const {name, password,email,phoneNumber,address,notes}= req.body;
    const user = await UserCollection.getUserByUsername(name);

    if(name && password&&!user){
    const hashedPassword = bcrypt.hashSync(password, 4);
    const user = await UserCollection.create(name, hashedPassword, email,phoneNumber,address,notes);
    res.send(user);
    }else{
        res.send("user already exist");
    }
}

exports.login = async (req, res) => {
    const {name, password} = req.body;
    if(name && password){
        const user = await UserCollection.getUserByUsername(name);
        if(user){
            if(bcrypt.compareSync(password, user.password)){
                const accessToken = jwt.sign({name}, PRIVATE_KEY);
                res.send(accessToken);
            }else{
                res.send('Wrong password');
            }
        }else{
            res.send("Wrong username or password")
        }
    }else{
        res.send("Please input username and password");
    }
}
exports.authorize = (req, res, next) => {
    if(req.headers.authorization){
        const token = req.headers.authorization.split(' ')[1];
        jwt.verify(token, PRIVATE_KEY, (err, payload) => {
            if(err){
                res.status(403).send("It is not allowed");
            }else{
                next();
            }
        })
    }else{
        res.status(401).send('Unauthorized');
    }
}