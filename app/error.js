const notFountHandeler = ((_req,_res,next)=>{
    const error = new Error("Resource not found")
    error.status = 404
    next(error)
})

const errorHandeler = ((error,_req,res,_next)=>{
    if (error.status) {
        res.status(error.status).json({message:error.message})
    }
    res.status(500).json({message: "something went wrong"})
})

module.exports = {
    notFountHandeler,
    errorHandeler
}