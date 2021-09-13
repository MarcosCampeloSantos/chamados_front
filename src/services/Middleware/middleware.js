import Cookies from "js-cookie"

export default{
    auth(next){
        const token = Cookies.get('_app_token')
        
        if(token){
            next()
        }else{
            next('/')
        }

       
    }
}