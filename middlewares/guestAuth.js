//EVITA EL QUE USUARIO INTENTE REGISTRARSE-LOGUEARSE SI YA TIENE SESION INICIADA
function guestAuth (req, res, next){
	if(req.session.userLogged) {
		return res.redirect('/user/profile');
	}
	next();
}

module.exports = guestAuth;