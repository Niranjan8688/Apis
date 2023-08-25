var jwt = require('jsonwebtoken')
function authentication() {
}
authentication.prototype.login = async function (req,res) {
    payload ={
        "username" : req.body.username,
        "password" : req.body.password
    }
    token = await auth(payload)
    res.send({
        "token" : token
    })
}

async function auth(payload) {
    secretKey = "Niranjan"
    const token = jwt.sign(payload, secretKey, { expiresIn: '1h' });
    return token;
}
login = () => {
    return new authentication();
}
module.exports = {
    login
}