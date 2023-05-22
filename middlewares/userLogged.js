const db = require('../database/models');

//MIDDLEWARE QUE DETECTA SI HAY UN USUARIO LOGEADO O NO
function userLogged(req, res, next) {

	res.locals.isLogged = false;

	// let emailInCookie = req.cookies.userEmail;
	// let userFromCookie = db.Usuario.findOne({
	//     where: {
	// 		email: emailInCookie || null
	// 	}
	// })

	// if (userFromCookie) {
	// 	req.session.userLogged = userFromCookie;
	// }

	if (req.session.userLogged) {
		res.locals.isLogged = true;
		res.locals.userLogged = req.session.userLogged;
	}


	next();
}

module.exports = userLogged;