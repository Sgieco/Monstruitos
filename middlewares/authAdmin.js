//PROTEGE LAS RUTAS A LAS QUE SOLO PUEDEN ACCEDER EL ADMINISTRADOR CUANDO ESTA LOGEADO
function authAdm(req, res, next) {
	if (!req.session.admLogged) {
		return res.render('loginAdmin');
	}
	next();
}

module.exports = authAdm;