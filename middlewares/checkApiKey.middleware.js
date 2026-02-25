const checkApiKey = (req, res, next) =>{
    const {token} = req.query;

    if(token !== "12345"){
        return res.status(401).send({isSuccess: false, message:"Page not find"})
    }
    next();
}

module.exports = checkApiKey;