function authentication(req, res, next) {
    if(req.session.user.email !== 'f@gmail.com' || !req.session.user.isAdmin ) {
        return res.send('error de autenticación ')
    }
    next()
}

module.exports = {
    authentication
}