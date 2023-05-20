const {validationResult} = require('express-validator');

const administradorController ={
    
    loginProcess:(req,res) =>{
        let amdUser = {
            email: 'administrador@gmail.com',
            password: 'Administrador1234'
        }

        let admLogin = amdUser;

        if(req.body.emailadm === admLogin.email){
            let isOkThePassword = admLogin.password == req.body.passwordadm;

            if(isOkThePassword){
                delete admLogin.password;
                req.session.admLogged = admLogin

                if(req.body.rememberadm){
                    res.cookie('admEmail', req.body.emailadm,{maxAge: (1000 * 60) * 30})
                }

                return res.redirect('/')
            }

            return res.render('loginAdministrador', {
                errors: {
                    passwordadm: {
                        msg: 'Ups! Parece que la constraseña ingresada es incorrecta'
                    }
                }
            })
    
        }

        
        return res.render('loginAdministrador', {
			errors: {
				emailadm: {
					msg: 'El email mencionado es incorrecto'
				}
			}
		});

       
    },

    logout: (req,res) => {
        res.clearCookie('admEmail');
        req.session.destroy();

        return res.redirect('/')
    },
}


module.exports = administradorController;