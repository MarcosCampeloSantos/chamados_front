<template>
<!-- Tela Home -->
    <div class="row justify-content-center mb-5 index">
        <div class="overflow-hidden card perfil text-center">
            <fa class="mx-auto mt-2 iconPerfil" :icon="['fas','address-card']"/>
            <div class="card-body lh-1">
                <a href=""><h6 class="display-6">Perfil</h6></a>
                <div class="">
                    <p class="card-title text-center">Bem vindo, <b>{{GetName}}</b></p>
                </div>
                <router-link v-if="isAdm" to="/Painel_Adm" class="btn btn-primary btn-sm mt-3"><fa :icon="['fa','tachometer-alt']"/> Painel de Administração</router-link>
                <div class="row">
                    <button v-if="isAdm && !isOpADM" @click="AlterarModo(true)" class="btn btn-primary btn-sm mt-3 m-1 col"><fa :icon="['fa','tachometer-alt']"/> Modo Operador</button>
                    <button v-if="isOpADM" @click="AlterarModo(false)" class="btn btn-primary btn-sm mt-3 m-1 col"><fa :icon="['fa','tachometer-alt']"/> Modo Adm</button>
                    <a @click="Sair" class="btn btn-primary btn-sm mt-3 m-1 col"><fa :icon="['fa','door-open']"/> Sair</a>
                </div>
            
            </div>
        </div>
        <router-link to="/Chamado" class="style-card hvr-bob cor-cartao1 cartao rounded-2 text-center">Criar um novo Chamado</router-link>
        <router-link v-if="isAdm && !isOpADM" to="/Criar_User" class="style-card hvr-bob cor-cartao2 cartao rounded-2 text-center">Criar e Editar Usuarios</router-link>
        <router-link v-if="isUser" to="/Chamados_Finalizados" class="style-card hvr-bob cor-cartao3 cartao rounded-2 text-center">Chamados Finalizados</router-link>
    </div>
    

    <div>
        <h3 class="display-6 text-center">Chamados em Aberto</h3>
    </div>
    <div>
        <nav>
            <div class="nav nav-tabs sticky-top" id="nav-tab" role="tablist">
                <button @click="buscarChamados(1)" class="nav-link active position-relative" id="nav-home-tab" data-bs-toggle="tab" data-bs-target="#nav-home" type="button" role="tab" aria-controls="nav-home" aria-selected="true">
                    Todos os Chamados
                    <span class="badge rounded-pill bg-secondary">{{count.all}}</span>
                </button>
                <button @click="buscarChamados(2)" class="nav-link" id="nav-profile-tab" data-bs-toggle="tab" data-bs-target="#nav-profile" type="button" role="tab" aria-controls="nav-profile" aria-selected="false">
                    Chamados Atribuidos
                    <span class="badge rounded-pill bg-secondary">{{count.atribuido}}</span>
                </button>
                <button @click="buscarChamados(3)" class="nav-link" id="nav-fechado-tab" data-bs-toggle="tab" data-bs-target="#nav-fechado" type="button" role="tab" aria-controls="nav-profile" aria-selected="false">
                    Chamados Fechados
                    <span class="badge rounded-pill bg-secondary">{{count.close}}</span>
                </button>

                <nav class="navbar navbar-light">
                    <div class="container-fluid">
                    <form class="d-flex" method="POST" action="{{route('homeAdm')}}">
                        <input class="form-control me-2" name="search" type="search" placeholder="Filtro" aria-label="Search">
                        <button class="btn btn-outline-primary" type="submit">Pesquisar</button>
                    </form>
                        <form class="d-flex" method="POST" action="{{route('homeAdm')}}">
                            <input class="form-control me-2" name="search" type="hidden" value="" aria-label="Search">
                            <button class="btn btn-danger ms-1" type="submit">Limpar</button>
                        </form>
                    </div>
                </nav>
            </div>
        </nav>
    </div>
    <div class="overflow-auto listagem-chamados border rounded-2">
        <div class="tab-content" id="nav-tabContent">
            <div class="tab-pane fade show active" id="nav-home" role="tabpanel" aria-labelledby="nav-home-tab">
                <table class="table table-striped table-hover">
                    <thead class="sticky-top table-dark">
                        <tr class="text-center">
                            <th scope="row">Nª</th>
                            <th scope="row">STATUS</th>
                            <th scope="row">ATENDIMENTO</th>
                            <th scope="row">CRIADO POR</th>
                            <th scope="row">ASSUNTO</th>
                            <th scope="row">TOPICO</th>
                            <th scope="row">DATA DE CRIAÇÃO</th>
                            <th scope="row"></th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr class="text-center" v-for="(chamado, id) in chamados.chamadosall" :key="id">
                            <th>{{chamado.id}}</th>
                                <td v-if="chamado.estado == 'ABERTO'"><span class="badge bg-success">Aberto</span></td>
                                <td v-if="chamado.estado == 'FECHADO'"><span class="badge bg-danger">Fechado</span></td>
                                <td v-if="chamado.estado == 'EM ATENDIMENTO'"><span class="badge bg-warning text-dark">Em Atendimento</span></td>
                                <td v-if="chamado.estado == 'PAUSADO'"><span class="badge bg-info text-dark">Pausado</span></td>
                            <td>
                                <select class="form-select" name="status_chamado" aria-label="Default select example">
                                    <option selected>Calculando...</option>
                                    <option selected></option>
                                    <option selected> Tempo: </option>
                                </select> 
                            </td>
                            <td >{{chamado.name}}</td>
                            <td>
                                <div class="row">
                                      <div class="col">
                                        {{chamado.title}} 
                                    </div>
                                    <div class="col-2">
                                        <div class="justify-content-right" v-for="(anexo, id) in chamados.anexos" :key="id" >
                                            <fa v-if="anexo == chamado.id" :icon="['fa','paperclip']"/>
                                        </div>
                                    </div>
                                </div>
                            </td>
                            <td>
                                {{chamado.topicos}}
                            </td>
                            <td>{{chamado.created_at}}</td>
                            <td><button @click="buscarInteracoes(chamado.id)" class="btn btn-primary" data-bs-toggle="modal" :data-bs-target="'#exampleModal' + chamado.id">Visualizar Chamado</button></td>
                        </tr>
                    </tbody>
                </table>
            </div>
            
            <div class="tab-pane fade" id="nav-fechado" role="tabpanel" aria-labelledby="nav-fechado-tab"> 
                <table class="table table-striped table-hover">
                    <thead class="sticky-top table-dark">
                        <tr class="text-center">
                            <th scope="row">Nª</th>
                            <th scope="row">STATUS</th>
                            <th scope="row">ATENDIMENTO</th>
                            <th scope="row">CRIADO POR</th>
                            <th scope="row">ASSUNTO</th>
                            <th scope="row">TOPICO</th>
                            <th scope="row">DATA DE CRIAÇÃO</th>
                            <th scope="row"></th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr class="text-center" v-for="(chamado, id) in chamados.chamadosall" :key="id">
                            <th>{{chamado.id}}</th>
                                <td v-if="chamado.estado == 'ABERTO'"><span class="badge bg-success">Aberto</span></td>
                                <td v-if="chamado.estado == 'FECHADO'"><span class="badge bg-danger">Fechado</span></td>
                                <td v-if="chamado.estado == 'EM ATENDIMENTO'"><span class="badge bg-warning text-dark">Em Atendimento</span></td>
                                <td v-if="chamado.estado == 'PAUSADO'"><span class="badge bg-info text-dark">Pausado</span></td>
                            <td>
                                <select class="form-select" name="status_chamado" aria-label="Default select example">
                                    <option selected>Calculando...</option>
                                    <option selected></option>
                                    <option selected> Tempo: </option>
                                </select> 
                            </td>
                            <td >{{chamado.name}}</td>
                            <td>
                                <div class="row">
                                      <div class="col">
                                        {{chamado.title}} 
                                    </div>
                                    <div class="col-2">
                                        <div class="justify-content-right" v-for="(anexo, id) in chamados.anexos" :key="id" >
                                            <fa v-if="anexo == chamado.id" :icon="['fa','paperclip']"/>
                                        </div>
                                    </div>
                                </div>
                            </td>
                            <td>
                                {{chamado.topicos}}
                            </td>
                            <td>{{chamado.created_at}}</td>
                            <td><button @click="buscarInteracoes(chamado.id)" class="btn btn-primary" data-bs-toggle="modal" :data-bs-target="'#exampleModal' + chamado.id">Visualizar Chamado</button></td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <div class="tab-pane fade" id="nav-profile" role="tabpanel" aria-labelledby="nav-profile-tab"> 
                <table class="table table-striped table-hover">
                    <thead class="sticky-top table-dark">
                        <tr class="text-center">
                            <th scope="row">Nª</th>
                            <th scope="row">STATUS</th>
                            <th scope="row">ATENDIMENTO</th>
                            <th scope="row">CRIADO POR</th>
                            <th scope="row">ASSUNTO</th>
                            <th scope="row">TOPICO</th>
                            <th scope="row">DATA DE CRIAÇÃO</th>
                            <th scope="row"></th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr class="text-center" v-for="(chamado, id) in chamados.chamadosall" :key="id">
                            <th>{{chamado.id}}</th>
                                <td v-if="chamado.estado == 'ABERTO'"><span class="badge bg-success">Aberto</span></td>
                                <td v-if="chamado.estado == 'FECHADO'"><span class="badge bg-danger">Fechado</span></td>
                                <td v-if="chamado.estado == 'EM ATENDIMENTO'"><span class="badge bg-warning text-dark">Em Atendimento</span></td>
                                <td v-if="chamado.estado == 'PAUSADO'"><span class="badge bg-info text-dark">Pausado</span></td>
                            <td>
                                <select class="form-select" name="status_chamado" aria-label="Default select example">
                                    <option selected>Calculando...</option>
                                    <option selected></option>
                                    <option selected> Tempo: </option>
                                </select> 
                            </td>
                            <td >{{chamado.name}}</td>
                            <td>
                                <div class="row">
                                      <div class="col">
                                        {{chamado.title}} 
                                    </div>
                                    <div class="col-2">
                                        <div class="justify-content-right" v-for="(anexo, id) in chamados.anexos" :key="id" >
                                            <fa v-if="anexo == chamado.id" :icon="['fa','paperclip']"/>
                                        </div>
                                    </div>
                                </div>
                            </td>
                            <td>
                                {{chamado.topicos}}
                            </td>
                            <td>{{chamado.created_at}}</td>
                            <td><button @click="buscarInteracoes(chamado.id)" class="btn btn-primary" data-bs-toggle="modal" :data-bs-target="'#exampleModal' + chamado.id">Visualizar Chamado</button></td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
        
        
        <div v-for="(chamado, id) in chamados.chamadosall" :key="id" class="modal fade" :id="'exampleModal' + chamado.id" tabindex="-1" data-bs-backdrop="static" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog modal-lg">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title ms-auto" id="exampleModalLabel">Chamado Nª <b>{{chamado.id}}</b></h5>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                        <div>
                            <div class="mb-3 text-center lh-sm">
                                <h4 class="form-label display-6">{{chamado.title}}</h4>
                            </div>
                            <div v-if="erroalert" class="alert alert-danger m-3" role="alert">
                                <li>{{$erroChat}}</li>
                            </div>
                            <div class="scroll chat chat_content rounded-top p-3 border border-1">
                                <div v-for="(msg, id) in chat.interacoes" :key="id" class="mb-3 text-break chat_color shadow p-3 rounded">
                                    <p><b>{{msg.nome_chat}}</b></p>
                                    <p v-html="msg.chat"></p>
                                    <div class="row">
                                        <div v-for="(anexo, id) in chat.anexos" :key="id">
                                            <div v-if="anexo.interacoe_id == msg.id">
                                                <fa :icon="['fa','paperclip']"/> <a href="#" class="fs-6 fw-light text-top mt-4">{{anexo.nameanexo}}</a>
                                            </div>
                                        </div>
                                        <div class="col">
                                            <p class="fs-6 fw-light text-end">{{msg.created_at}}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <div v-if="chamado.estado != 'ABERTO' && chamado.estado != 'FECHADO'">
                                    <textarea type="text" v-model="mensagens.chat" class="form-label w-100 mt-2 text-break p-2" rows="3" placeholder="Escreva Aqui..."></textarea>
                                    <input class="form-control" @change="SelectedFile" type="file" multiple>
                                </div>
                                <div class="row mt-3">
                                    <div v-if="chamado.estado != 'ABERTO' && chamado.estado != 'FECHADO'" class="col-5">
                                        <select class="form-select" v-model="mensagens.status_novo">
                                            <option value="" selected hidden>SELECIONE UM STATUS</option>
                                            <option value='EM ATENDIMENTO'>CONTINUAR ATENDIMENTO</option>
                                            <option value='FECHADO'>FECHADO</option>
                                            <option value='PAUSADO'>PAUSAR</option>
                                        </select>
                                    </div>
                                    <div class="col">
                                        <button v-if="chamado.estado == 'EM ATENDIMENTO' " @click="chatInteracoes(chamado.id, chamado.estado)" class="btn btn-primary" type="submit">
                                            Enviar
                                        </button>
                                        <button v-if="chamado.estado != 'EM ATENDIMENTO'" @click="chatInteracoes(chamado.id, chamado.estado, 'true')" class="btn btn-primary" type="submit">
                                            Iniciar Atendimento
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>

    import {mapGetters} from 'vuex'
    import Cookies from "js-cookie"
    import getPost from '../../services/Axios/getpost'

    export default {
        name: 'Component_Home',
        data(){
            return{
                erroalert: false,
                chamados: {
                    chamadosall:[],
                    anexos:[],
                    estado:[]
                },
                chat: {
                    interacoes:[],
                    anexos: [],
                    
                },

                mensagens:{
                    chat: '',
                    status_novo: '',
                    id_chamado: '',
                    status_atual: '',
                    user: '',
                    operador: '',
                    adm: '',
                    
                },
                file: null,
                anexo: null,
                count: {
                    all: '',
                    close: '',
                    atribuido: ''
                },
                permissao: {
                    id_usuario: '',
                    modo_acesso: ''
                },
                SeachChamados: {
                    adm: '',
                    user: '',
                    relacionado: null,
                    fechado: null,
                    todos: null
                }
            }
        },

        mounted(){
            this.buscarChamados(1)
        },

        methods:{
            Sair(){
                getPost.Logout(this.GetDados)
                .then(resposta =>{
                    if(resposta.errors){
                        this.erros = resposta.errors
                        this.erroalert = true
                    }else{
                        this.erroalert = false
                        localStorage.removeItem("auth")
                        Cookies.remove("_app_token")
                        this.$router.go();
                    }
                })
            },

            AlterarModo(dado){

                this.permissao.modo_acesso = dado
                this.permissao.id_usuario = this.GetDados.user.id

                getPost.modo_operador(this.permissao)
                .then(resposta =>{
                    if(resposta.errors){
                        this.erros = resposta.errors
                        this.erroalert = true
                    }else{
                        this.erroalert = false
                        localStorage.setItem("user",JSON.stringify(resposta.user))
                        this.$store.commit('increment_user', JSON.parse(localStorage.getItem('user') || "{}"))
                    }
                })
            },

            SelectedFile(event){
                
                this.file = []

                for (let index = 0; index < event.target.files.length; index++) {
                    this.file.push(event.target.files[index])
                }

                console.log(this.file)
            },

            chatInteracoes(id, estado, inicio){
                this.mensagens.user = this.GetDados.user.id
                this.mensagens.operador = this.isOp
                this.mensagens.adm = this.isAdm
                this.mensagens.id_chamado = id
                this.mensagens.status_atual = estado

                if(inicio){
                    console.log('CHEGOU AQUI')
                    this.mensagens.chat = "<h5 style='background-color: #90EE90; text-align: center; border-radius: 5px'>"+this.GetName+" iniciou o Atendimento</h5>"
                    this.mensagens.status_atual = 'ABERTO'
                }

                if(this.file != null){
                    this.CriarMensagem(id)

                    for (let index = 0; index < this.file.length; index++) {
                        
                        this.anexo = new FormData()
                        this.anexo.append('Imagem', this.file[index])
                        this.anexo.append('Name', this.file[index].name)
                        this.anexo.append('idUser', this.GetDados.user.id)

                        this.CriarMensagemAnexo(this.anexo)
                    }
                }else{
                    this.CriarMensagem(id)
                }

                this.mensagens.chat = ''
            },

            CriarMensagem(id){
                getPost.criar_mensagem(this.mensagens)
                .then(resposta =>{
                    if(resposta.errors){
                        this.erros = resposta.errors
                        this.erroalert = true
                    }else{
                        this.erroalert = false
                        this.buscarInteracoes(id)
                        this.buscarChamados()
                    }
                })
            }, 

            CriarMensagemAnexo(dados){
                getPost.criar_mensagem_anexo(dados)
                .then(resposta =>{
                    if(resposta.errors){
                        this.erros = resposta.errors
                        this.erroalert = true
                    }else{
                        this.erroalert = false
                    }
                })
            },

            buscarChamados(filtro){
                this.SeachChamados.adm = this.isAdm
                this.SeachChamados.user = this.GetDados.user.id

                if(filtro == 3){
                    this.SeachChamados.fechado = true;
                    this.SeachChamados.todos = null;
                    this.SeachChamados.relacionado = null;
                }else if(filtro == 1){
                    this.SeachChamados.todos = true
                    this.SeachChamados.relacionado = null;
                    this.SeachChamados.fechado = null;
                }else if(filtro == 2){
                    this.SeachChamados.todos = null
                    this.SeachChamados.relacionado = true;
                    this.SeachChamados.fechado = null;
                }


                getPost.buscar_chamados(this.SeachChamados) 
                    .then(resposta =>{
                        if(resposta.errors){
                            this.erros = resposta.errors
                            this.erroalert = true
                        }else{
                            this.erroalert = false
                            this.chamados.chamadosall = resposta.data.chamados
                            this.chamados.anexos = resposta.data.chamado_anexo
                            this.count.all = resposta.data.count.all
                            this.count.close = resposta.data.count.close
                            this.count.atribuido = resposta.data.count.atribuido
                            
                        }
                    })
            },

            buscarEstado(id){
                getPost.buscar_estado(id)
                .then(resposta => {
                    if(resposta.errors){
                            this.erros = resposta.errors
                            this.erroalert = true
                        }else{
                            this.erroalert = false
                            this.chamados.estado = resposta.data
                        }
                })
            },

            buscarInteracoes(id){
                getPost.buscar_interacoes(id) 
                    .then(resposta =>{
                        if(resposta.errors){
                            this.erros = resposta.errors
                            this.erroalert = true
                        }else{
                            this.chat.interacoes = resposta.data.interacoes
                            this.chat.anexos = resposta.data.anexos
                            this.erroalert = false
                            this.buscarEstado(id)
                            
                        }
                    })
            }

        },

        computed:{
            ...mapGetters(['GetDados', 'GetName', 'isAdm', 'isOp', 'isUser', 'isOpADM']),
            
        }
    }
</script>

<style scoped>
    .iconPerfil{
        font-size: 5rem;
    }
</style>