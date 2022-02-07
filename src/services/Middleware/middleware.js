import Cookies from "js-cookie"
import getPost from '../../services/Axios/getpost'

export default{

    auth(to, from, next){
        if(Cookies.get('_app_token')){
            getPost.Verificacao(localStorage.getItem('auth'))
            .then(resposta => {
                if(resposta.erro || resposta.exception == 'Error'){
                    next('/')
                }else{
                    // console.log("chegou aqui")
                    next()
                }
            })
        }else{
            next('/')
        }
    },

    authAdm(to, from, next){
        if(Cookies.get('_app_token')){
            getPost.Verificacao(localStorage.getItem('auth'))
            .then(resposta => {
                console.log(resposta)
                if(resposta.erro || resposta.exception == 'Error'){
                    next('/')
                }else{
                    var dados = JSON.parse(localStorage.getItem('auth'));
                    if(dados.user.nivel == '1'){
                        next()
                    }else{
                        next(from)
                    }
                }
            })
        }else{
            next('/')
        }
    }
}