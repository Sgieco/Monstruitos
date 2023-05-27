const administradorController ={
    
    loginAdmin:(req,res) =>{
        let amdUser = {
            email: 'administrador@gmail.com',
            password: 'Administrador1234'
        }

        let admLogin = amdUser;

       
        if(req.body.emailadmin === admLogin.email){
            let isOkThePassword = admLogin.password == req.body.passwordadmin;

            if(isOkThePassword){
                delete admLogin.password;
                req.session.admLogged = admLogin

                if(req.body.rememberadm){
                    res.cookie('admEmail', req.body.emailadmin,{maxAge: (1000 * 60) * 30})
                }

                return res.redirect('/products/newProduct')
            }

            return res.render('loginAdmin', {
                errors: {
                    passwordadm: {
                        msg: 'Ups! Parece que la constraseña ingresada es incorrecta'
                    }
                }
            })
    
        }

        
        return res.render('loginAdmin', {
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