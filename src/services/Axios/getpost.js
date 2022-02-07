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

    modo_operador: async (id) => {
        try {
            const response = await http.post('modo_operador', id,
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

    criar_mensagem: async (dados) => {
        try {
            const response = await http.post('interacoes', dados,
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

    criar_mensagem_anexo: async (anexo) => {
        try {
            const response = await http.post('interacoes', anexo,
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

    criar_top: async (dado) => {
        try {
            const response = await http.post('topico', dado,
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

    criar_atribuicao: async (dados) => {
        try {
            const response = await http.post('atribuicao', dados,
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
    trash_atribuicao: async (dado) => {
        try {
            const response = await http.delete('atribuicao/' + dado,
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

    trash_topico: async (dado) => {
        try {
            const response = await http.delete('topico/' + dado,
                {
                    headers: {
                        Authorization: `Bearer ${Cookies.get('_app_token')}`,
                        'Content-Type': 'application/json',
                    },
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

    buscar_top: async () => {
        try {
            const response = await http.get('topico',
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

    buscar_chamados: async (dados) => {
        try {
            const response = await http.get('chamado',
                {
                    headers: {
                        Authorization: `Bearer ${Cookies.get('_app_token')}`,
                        'Content-Type': 'application/json',
                    },
                    
                    params: {
                        'adm': dados.adm,
                        'relacionado': dados.relacionado,
                        'fechado': dados.fechado,
                        'todos': dados.todos,
                        'user_id': dados.user
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

    buscar_estado: async (id) => {
        try {
            const response = await http.get('estados/' + id,
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

    buscar_atribuicoes : async () => {
        try {
            const response = await http.get('atribuicao',
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
