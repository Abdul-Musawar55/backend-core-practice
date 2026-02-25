const checkAge = (req, res, next) =>{
    const {age} = req.query;

    if(Number(age) < 18){
        return res.status(401).send({isSuccess: false, message: "Age key not found!"})
    }
    next();
}

module.exports = checkAge;