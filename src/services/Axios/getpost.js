import { http } from './config'
import Cookies from "js-cookie"

export default{

    Login: async (login) => {
        try {
            const response = await http.post('login', login,
                {
                    headers: {
                        Authorization: `Bearer ${Cookies.get('_app_token')}`,
                        'Content-Type': 'application/json',
                    }
                });
            return response.data;
        } catch (erro) {
            if (erro.response) {
                return erro.response.data;
            }
        }
    },

    Logout: async (logout) => {
        try {
            const response = await http.post('logout', logout,
                {
                    headers: {
                        Authorization: `Bearer ${Cookies.get('_app_token')}`,
                        'Content-Type': 'application/json',
                    }
                });
            return response.data;
        } catch (erro) {
            if (erro.response) {
                return erro.response.data;
            }
        }
    },

    Verificacao: async (verificacao) => {
        try {
            const response = await http.post('verificacao', verificacao,
                {
                    headers: {
                        Authorization: `Bearer ${Cookies.get('_app_token')}`,
                        'Content-Type': 'application/json',
                    }
                });
            return response.data;
        } catch (erro) {
            if (erro.response) {
                return erro.response.data;
            }
        }
    },

// Methods Post
    criar_user: async (user) => {
        try {
            const response = await http.post('criar_user', user,
                {
                    headers: {
                        Authorization: `Bearer ${Cookies.get('_app_token')}`,
                        'Content-Type': 'application/json',
                    }
                });
            return response.data;
        } catch (erro) {
            if (erro.response) {
                return erro.response.data;
            }
        }
    },

    criar_dep: async (dep) => {
        try {
            const response = await http.post('criar_dep', dep,
                {
                    headers: {
                        Authorization: `Bearer ${Cookies.get('_app_token')}`,
                        'Content-Type': 'application/json',
                    }
                });
            return response;
        } catch (erro) {
            if (erro.response) {
                return erro.response.data;
            }
        }
    },

    criar_top: async (top) => {
        try {
            const response = await http.post('criar_top', top,
                {
                    headers: {
                        Authorization: `Bearer ${Cookies.get('_app_token')}`,
                        'Content-Type': 'application/json',
                    }
                });
            return response;
        } catch (erro) {
            if (erro.response) {
                return erro.response.data;
            }
        }
    },

    criar_rel: async (rel) => {
        try {
            const response = await http.post('criar_rel', rel,
                {
                    headers: {
                        Authorization: `Bearer ${Cookies.get('_app_token')}`,
                        'Content-Type': 'application/json',
                    }
                });
            return response;
        } catch (erro) {
            if (erro.response) {
                return erro.response.data;
            }
        }
    },

    editar_rel: async (edit_rel) => {
        try {
            const response = await http.post('editar_rel', edit_rel,
                {
                    headers: {
                        Authorization: `Bearer ${Cookies.get('_app_token')}`,
                        'Content-Type': 'application/json',
                    }
                });
            return response;
        } catch (erro) {
            if (erro.response) {
                return erro.response.data;
            }
        }
    },

    adc_atribuido: async (adc_atrib) => {
        try {
            const response = await http.post('adc_atribuido', adc_atrib,
                {
                    headers: {
                        Authorization: `Bearer ${Cookies.get('_app_token')}`,
                        'Content-Type': 'application/json',
                    }
                });
            return response;
        } catch (erro) {
            if (erro.response) {
                return erro.response.data;
            }
        }
    },

    criar_chamado:async (criar_chamado) => {
        try {
            const response = await http.post('chamado', criar_chamado,
                {
                    headers: {
                        Authorization: `Bearer ${Cookies.get('_app_token')}`,
                        'Content-Type': 'application/json',
                    }
                });
            return response;
        } catch (erro) {
            if (erro.response) {
                return erro.response.data;
            }
        }
    },

    criar_chamado_anexos: async (criar_chamado) => {
        try {
            const response = await http.post('chamado', criar_chamado,
                {
                    headers: {
                        Authorization: `Bearer ${Cookies.get('_app_token')}`,
                        'Content-Type': 'multipart/form-data',
                    }
                });
            return response;
        } catch (erro) {
            if (erro.response) {
                return erro.response.data;
            }
        }
    },


// Methods Delete
    trash_atribuido: async (trash_rel_id, trash_id_user) => {
        try {
            const response = await http.delete('trash_atribuido',
                {
                    headers: {
                        Authorization: `Bearer ${Cookies.get('_app_token')}`,
                        'Content-Type': 'application/json',
                    },
                    params: {
                        'id_rel': trash_rel_id,
                        'id_user': trash_id_user
                    }
                });
            return response;
        } catch (erro) {
            if (erro.response) {
                return erro.response.data;
            }
        }
    },

    trash_relacionamento: async (trash_rel) => {
        try {
            const response = await http.delete('trash_relacionamento',
                {
                    headers: {
                        Authorization: `Bearer ${Cookies.get('_app_token')}`,
                        'Content-Type': 'application/json',
                    },

                    params: {
                        'id': trash_rel
                    }
                });
            return response;
        } catch (erro) {
            if (erro.response) {
                return erro.response.data;
            }
        }
    },

    trash_departamento: async (trash_dep) => {
        try {
            const response = await http.delete('trash_departamento',
                {
                    headers: {
                        Authorization: `Bearer ${Cookies.get('_app_token')}`,
                        'Content-Type': 'application/json',
                    },

                    params: {
                        'id': trash_dep
                    }
                });
            return response;
        } catch (erro) {
            if (erro.response) {
                return erro.response.data;
            }
        }
    },

    trash_topico: async (trash_top) => {
        try {
            const response = await http.delete('trash_topico',
                {
                    headers: {
                        Authorization: `Bearer ${Cookies.get('_app_token')}`,
                        'Content-Type': 'application/json',
                    },

                    params: {
                        'id': trash_top
                    }
                });
            return response;
        } catch (erro) {
            if (erro.response) {
                return erro.response.data;
            }
        }
    },

// Methods Get

    buscar_users: async () => {
        try {
            const response = await http.get('buscar_users',
                {
                    headers: {
                        Authorization: `Bearer ${Cookies.get('_app_token')}`,
                        'Content-Type': 'application/json',
                    }
                });
            return response;
        } catch (erro) {
            return erro;
        }
    },

    buscar_dep: async () => {
        try {
            const response = await http.get('buscar_dep',
                {
                    headers: {
                        Authorization: `Bearer ${Cookies.get('_app_token')}`,
                        'Content-Type': 'application/json',
                    }
                });
            return response;
        } catch (erro) {
            return erro;
        }
    },

    buscar_top: async () => {
        try {
            const response = await http.get('buscar_top',
                {
                    headers: {
                        Authorization: `Bearer ${Cookies.get('_app_token')}`,
                        'Content-Type': 'application/json',
                    },
                    
                });
            return response;
        } catch (erro) {
            return erro;
        }
    },

    buscar_rel: async () => {
        try {
            const response = await http.get('buscar_rel',
                {
                    headers: {
                        Authorization: `Bearer ${Cookies.get('_app_token')}`,
                        'Content-Type': 'application/json',
                    }
                });
            return response;
        } catch (erro) {
            return erro;
        }
    },

    buscar_chamados: async (adm) => {
        try {
            const response = await http.get('chamado',
                {
                    headers: {
                        Authorization: `Bearer ${Cookies.get('_app_token')}`,
                        'Content-Type': 'application/json',
                    },

                    params: {
                        'Adm': adm
                    }
                });
            return response;
        } catch (erro) {
            return erro;
        }
    },

    buscar_interacoes: async (id) => {
        try {
            const response = await http.get('interacoes/' + id,
                {
                    headers: {
                        Authorization: `Bearer ${Cookies.get('_app_token')}`,
                        'Content-Type': 'application/json',
                    }
                });
            return response;
        } catch (erro) {
            return erro;
        }
    },
}
