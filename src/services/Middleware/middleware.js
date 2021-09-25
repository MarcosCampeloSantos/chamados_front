import Cookies from "js-cookie"
import getPost from '../../services/Axios/getpost'

export default{
    auth(to, from, next){
        const token = Cookies.get('_app_token')
        
        if(token){
            getPost.Verificacao()
                .then(resposta =>{
                    if(resposta.errors){
                        this.erros = resposta.errors
                    }else{
                        // next()
                    }
                })
            
        }else{
            next('/')
        }
    }
}