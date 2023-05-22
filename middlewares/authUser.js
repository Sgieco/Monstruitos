//PROTEGE LAS RUTAS A LAS QUE SOLO PUEDE ACCEDER EL USUARIO CUANDO ESTA LOGUEADO
function authUser(req, res, next) {
	if (!req.session.userLogged) {
		return res.render('/login');
	}
	next();
}

module.exports = authUser;