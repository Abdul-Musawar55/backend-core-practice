const notFound = (req, res)=> {
    return res.status(404).send({isSuccess: false, message: "Not found"})
}

module.exports = notFound;