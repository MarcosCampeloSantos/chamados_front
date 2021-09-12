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

    adc_atribuido:(adc_atrib) => {
        return http.post('adc_atribuido', adc_atrib, {
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


// Methods Post
    trash_atribuido:(trash_rel_id, trash_id_user) => {
        return http.delete('trash_atribuido', {
            params:{
                'id_rel': trash_rel_id,
                'id_user': trash_id_user
            }
        }, 
        {
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

    trash_relacionamento:(trash_rel) => {
        return http.delete('trash_relacionamento', {params: {'id': trash_rel}}, {
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

    trash_departamento:(trash_dep) => {
        return http.delete('trash_departamento', {params: {'id': trash_dep}}, {
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

    trash_topico: (trash_top) => {
        return http.delete('trash_topico', {params: {'id': trash_top}}, {
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
