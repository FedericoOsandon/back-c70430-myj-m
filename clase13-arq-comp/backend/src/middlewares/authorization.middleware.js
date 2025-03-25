const authorization = role => {
    return async (req, res, next) => {
        if(!req.user) return res.status(401).send({error: 'Unathorized'})
        console.log(req.user)
        if(req.user.role !== role)  return res.status(401).send({error: 'No permissions'})
        next()
    }
}

module.exports = {
    authorization
}

// cantidad de parámetros 
// 256 ->  óptimo >= 2 - 1 -> {} 