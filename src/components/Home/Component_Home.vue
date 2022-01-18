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
                    <a href="" class="btn btn-primary btn-sm mt-3 m-1 col"><i class="fas fa-tachometer-alt"></i> Modo Operador</a>
                    <a @click="Sair" class="btn btn-primary btn-sm mt-3 m-1 col"><fa :icon="['fa','door-open']"/> Sair</a>
                </div>
            
            </div>
        </div>
        <router-link to="/Chamado" class="style-card hvr-bob cor-cartao1 cartao rounded-2 text-center">Criar um novo Chamado</router-link>
        <router-link to="/Criar_User" class="style-card hvr-bob cor-cartao2 cartao rounded-2 text-center">Criar e Editar Usuarios</router-link>
        <a href="" class="style-card hvr-bob cor-cartao3 cartao rounded-2 text-center">Chamados Finalizados</a>
    </div>
    

    <div>
        <h3 class="display-6 text-center">Chamados em Aberto</h3>
    </div>
    <div>
        <nav>
            <div class="nav nav-tabs sticky-top" id="nav-tab" role="tablist">
                <button class="nav-link active position-relative" id="nav-home-tab" data-bs-toggle="tab" data-bs-target="#nav-home" type="button" role="tab" aria-controls="nav-home" aria-selected="true">
                    Todos os Chamados
                    <span class="badge rounded-pill bg-secondary">{{cont_allchamados}}</span>
                </button>
                    <button class="nav-link" id="nav-profile-tab" data-bs-toggle="tab" data-bs-target="#nav-profile" type="button" role="tab" aria-controls="nav-profile" aria-selected="false">
                        Chamados Atribuidos
                        <span class="badge rounded-pill bg-secondary">{{}}</span>
                    </button>
                <button onclick="refresh()" class="btn m-2 ms-3"><i class="fas fa-sync-alt"></i></button>

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
                        <tr class="text-center" v-for="(cham, id) in chamados.chamadosall" :key="id">
                            <th>{{cham.id}}</th>
                                <td v-if="cham.estado_id == 1"><span class="badge bg-success">Aberto</span></td>
                                <td v-if="cham.estado_id == 2"><span class="badge bg-danger">Fechado</span></td>
                                <td v-if="cham.estado_id == 3"><span class="badge bg-warning text-dark">Em Atendimento</span></td>
                                <td v-if="cham.estado_id == 4"><span class="badge bg-info text-dark">Pausado</span></td>
                            <td>
                                <select class="form-select" name="status_chamado" aria-label="Default select example">
                                    <option selected>Calculando...</option>
                                    <option selected></option>
                                    <option selected> Tempo: </option>
                                </select> 
                            </td>
                            <td >{{cham.name}}</td>
                            <td>
                                <div class="row justify-content-center">
                                    <div>
                                        {{cham.title}} 
                                    </div>

                                    <div class="col-1" v-for="(anexo, id) in chamados.anexos" :key="id">
                                        <div  v-if="anexo.chamado_id == cham.id">
                                           <fa :icon="['fa','paperclip']"/>
                                        </div>
                                    </div>
                                </div>
                                
                                
                            </td>
                            <td>
                                {{cham.topicos}}
                            </td>
                            <td>{{cham.created_at}}</td>
                            <td><button @click="buscarInteracoes(cham.id)" class="btn btn-primary" data-bs-toggle="modal" :data-bs-target="'#exampleModal' + cham.id">Visualizar Chamado</button></td>
                        </tr>
                    </tbody>
                </table>
                
            </div>
            
            <div class="tab-pane fade" id="nav-profile" role="tabpanel" aria-labelledby="nav-profile-tab"> 
                <table class="table table-striped table-hover">
                    <thead class="sticky-top table-dark">
                        <tr>
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
                        <tr>
                            <th scope="row"></th>
                                <td><span class="badge bg-success">Aberto</span></td>
                                <td><span class="badge bg-danger">Fechado</span></td>
                                <td><span class="badge bg-warning text-dark">Em Atendimento</span></td>
                                <td><span class="badge bg-info text-dark">Pausado</span></td>
                            <td>
                                <select class="form-select" name="status_chamado" aria-label="Default select example">
                                    <option selected>Calculando...</option>
                                    <option selected></option>
                                    <option selected> Tempo: </option>
                                </select> 
                            </td>
                            <td ></td>
                            <td>
                                <i class="fas fa-paperclip"></i>
                            </td>
                            <td>
                            </td>
                            <td></td>
                            <td><button class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal{{$item->id}}">Visualizar Chamado</button></td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
        
        
        <div v-for="(cham, id) in chamados.chamadosall" :key="id" class="modal fade" :id="'exampleModal' + cham.id" tabindex="-1" data-bs-backdrop="static" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog modal-lg">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title ms-auto" id="exampleModalLabel">Chamado Nª <b>{{cham.id}}</b></h5>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                        <div>
                            <div class="mb-3 text-center lh-sm">
                                <h4 class="form-label display-6">{{cham.title}}</h4>
                            </div>
                            <div v-if="erroalert" class="alert alert-danger m-3" role="alert">
                                <li>{{$erroChat}}</li>
                            </div>
                            <div class="scroll chat chat_content rounded-top p-3 border border-1">
                                <div v-for="(msg, id) in chat.interacoes" :key="id" class="mb-3 text-break chat_color shadow p-3 rounded">
                                            <p><b>{{msg.nome_chat}}</b></p>
                                    <p>{{msg.chat}}</p>
                                    <div class="row">
                                        <div v-for="(anexo, id) in chat.anexos" :key="id" class="col">
                                            <a href="#" class="fs-6 fw-light text-top mt-4">{{anexo.nameanexo}}<i class="fas fa-paperclip"></i></a>
                                        </div>
                                        <div class="col">
                                            <p class="fs-6 fw-light text-end">{{msg.created_at}}</p>
                                        </div>
                                    </div>
                                </div>
                                <div class="mb-3 chat_color shadow p-3 text-center chat_color_inicio">
                                    <p class="text-break">
                                        
                                    </p>
                                </div>
                            </div>
                            <div>
                                <form action="{{route('envchat')}}" method="POST" enctype="multipart/form-data">
                                    <div id="editor">

                                    </div>
                                    <!-- <textarea id="txtArtigo" type="text" class="chat{{$item->id}} form-label w-100 mt-2 text-break p-2" rows="3" name="chat" placeholder="Digite o Aqui..."></textarea> -->
                                    <input class="form-control w-50 mt-2" name="anexo" type="file" id="formFile">
                                    <div class="row mt-3">
                                        
                                        <input type="hidden" name="id_chamado" value="{{$item->id}}">
                                        <input type="hidden" name="id_Chat" id="id_Chat" value="#exampleModal{{$item->id}}">
                                        <input type="hidden" name="url_ver" id="url_ver" value="{{Request::segment(1)}}">

                                        <div class="col-3">
                                                <select class="form-select" name="status_chamado" aria-label="Default select example">
                                                    <option value="2">Fechar</option>
                                                    <option value="3">Iniciar Atendimento</option>
                                                    <option value="4">Pausar</option>
                                                    <option value="5" selected>Mensagem</option>
                                                </select>
                                        </div>
                                        <div class="col">
                                            <button class="btn btn-primary" type="submit">
                                                Enviar
                                            </button>
                                        </div>
                                    </div>
                                </form>
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
                    anexos:[]
                },
                chat: {
                    interacoes:[],
                    anexos: []
                },
                cont_allchamados: ''
            }
        },

        mounted(){
            this.buscarChamados()
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

            buscarChamados(){
                getPost.buscar_chamados(this.isAdm) 
                    .then(resposta =>{
                        if(resposta.errors){
                            this.erros = resposta.errors
                            this.erroalert = true
                        }else{
                            this.erroalert = false
                            this.chamados.chamadosall = resposta.data.chamados
                            this.chamados.anexos = resposta.data.anexos
                            this.cont_allchamados = resposta.data.length
                            console.log(resposta.data)
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
                            console.log(this.chat.anexos)
                        }
                    })
            }

        },

        computed:{
            ...mapGetters(['GetDados', 'GetName', 'isAdm'])
        }
    }
</script>

<style scoped>
    .iconPerfil{
        font-size: 5rem;
    }
</style>