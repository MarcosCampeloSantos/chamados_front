import { http } from './config'

export default{

    // Methods Post
    criar_user: (user) => {
        return http.post('criar_user', user,{
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            }
        })
        .then(response => {
            return response.data;
        })
        .catch(erro => {
            if(erro.response){
                return erro.response.data;
            }
        })
    },

    criar_dep:(dep) => {
        return http.post('criar_dep', dep, {
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            }
        })
        .then(response => {
            return response;
        })
        .catch(erro => {
            if(erro.response){
                return erro.response.data;
            }
            
        })
    },

    criar_top:(top) => {
        return http.post('criar_top', top, {
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            }
        })
        .then(response => {
            return response;
        })
        .catch(erro => {
            if(erro.response){
                return erro.response.data;
            }
            
        })
    },

    criar_rel:(rel) => {
        return http.post('criar_rel', rel, {
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            }
        })
        .then(response => {
            return response;
        })
        .catch(erro => {
            if(erro.response){
                return erro.response.data;
            }
            
        })
    },

    editar_rel:(edit_rel) => {
        return http.post('editar_rel', edit_rel, {
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            }
        })
        .then(response => {
            return response;
        })
        .catch(erro => {
            if(erro.response){
                return erro.response.data;
            }
            
        })
    },

    // Methods Get
    buscar_users: () => {
        return http.get('buscar_users')
        .then(response => {
            return response;
        })
        .catch(erro => {
            return erro;
        })
    },

    buscar_dep: () => {
        return http.get('buscar_dep')
        .then(response => {
            return response;
        })
        .catch(erro => {
            return erro;
        })
    },

    buscar_top: () => {
        return http.get('buscar_top')
        .then(response => {
            return response;
        })
        .catch(erro => {
            return erro;
        })
    },

    buscar_rel: () => {
        return http.get('buscar_rel')
        .then(response => {
            return response;
        })
        .catch(erro => {
            return erro;
        })
    },
}
