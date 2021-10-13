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
                    <a href="{{route('homeOp')}}" class="btn btn-primary btn-sm mt-3 m-1 col"><i class="fas fa-tachometer-alt"></i> Modo Operador</a>
                    <a @click="Sair" class="btn btn-primary btn-sm mt-3 m-1 col"><fa :icon="['fa','door-open']"/> Sair</a>
                </div>
            
            </div>
        </div>
        <router-link to="/Chamado" class="style-card hvr-bob cor-cartao1 cartao rounded-2 text-center">Criar um novo Chamado</router-link>
        <router-link to="/Criar_User" class="style-card hvr-bob cor-cartao2 cartao rounded-2 text-center">Criar e Editar Usuarios</router-link>
        <a href="{{route('finalizadosadm')}}" class="style-card hvr-bob cor-cartao3 cartao rounded-2 text-center">Chamados Finalizados</a>
    </div>

    <div>
        <h3 class="display-6 text-center">Chamados em Aberto</h3>
    </div>
    <div>
        <nav>
            <div class="nav nav-tabs sticky-top" id="nav-tab" role="tablist">
                <button class="nav-link active position-relative" id="nav-home-tab" data-bs-toggle="tab" data-bs-target="#nav-home" type="button" role="tab" aria-controls="nav-home" aria-selected="true">
                    Todos os Chamados
                    <span class="badge rounded-pill bg-secondary">{{$contagemalladm}}</span>
                </button>
                <button class="nav-link position-relative" id="nav-dep-tab" data-bs-toggle="tab" data-bs-target="#nav-dep" type="button" role="tab" aria-controls="nav-dep" aria-selected="false">
                    Chamados Departamento
                    <span class="badge rounded-pill bg-secondary">{{$contagemadpadm}}</span>
                </button>
                @if ($contagematributoadm != 0)
                    <button class="nav-link" id="nav-profile-tab" data-bs-toggle="tab" data-bs-target="#nav-profile" type="button" role="tab" aria-controls="nav-profile" aria-selected="false">
                        Chamados Atribuidos
                        <span class="badge rounded-pill bg-secondary">{{$contagematributoadm}}</span>
                    </button>
                @endif
                
                <button onclick="refresh()" class="btn m-2 ms-3"><i class="fas fa-sync-alt"></i></button>

                <nav class="navbar navbar-light">
                    <div class="container-fluid">
                    <form class="d-flex" method="POST" action="{{route('homeAdm')}}">
                        @csrf
                        <input class="form-control me-2" name="search" type="search" placeholder="Filtro" aria-label="Search">
                        <button class="btn btn-outline-primary" type="submit">Pesquisar</button>
                    </form>
                    @if ($limpafiltro == true)
                        <form class="d-flex" method="POST" action="{{route('homeAdm')}}">
                            @csrf
                            <input class="form-control me-2" name="search" type="hidden" value="" aria-label="Search">
                            <button class="btn btn-danger ms-1" type="submit">Limpar</button>
                        </form>
                    @endif
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
                                @if ($item->status_id == '1')
                                    <td><span class="badge bg-success">Aberto</span></td>
                                @elseif($item->status_id == '2')
                                    <td><span class="badge bg-danger">Fechado</span></td>
                                @elseif($item->status_id == '3' || $item->status_id == '5')
                                    <td><span class="badge bg-warning text-dark">Em Atendimento</span></td>
                                @elseif($item->status_id == '4')
                                    <td><span class="badge bg-info text-dark">Pausado</span></td>
                                @endif
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
            <div class="tab-pane fade" id="nav-dep" role="tabpanel" aria-labelledby="nav-profile-tab">
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
                                <td><button class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal{{$item->id}}">Visualizar Chamado</button></td>
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
                        @foreach ($chamadosatributoadm as $item)
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
                        @endforeach
                    </tbody>
                </table>
            </div>
        </div>
        
        
            <div class="modal fade" id="exampleModal{{$item->id}}" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog modal-lg">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title" id="exampleModalLabel">Chamado Nª<b></b> (IP: )</h5>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="modal-body">
                            <div>
                                <div class="mb-3 text-center lh-sm">
                                    <h4 class="form-label display-6"></h4>
                                </div>
                                    <div class="alert alert-danger m-3" role="alert">
                                        <li>{{$erroChat}}</li>
                                    </div>
                                <div class="scroll chat chat_content rounded-top p-3 border border-1">
                                                <div class="mb-3 text-break chat_color shadow p-3 rounded">
                                                            <p><b></b></p>
                                                    <p>{!!$item1->chat!!}</p>
                                                    <div class="row">
                                                        @if ($item1->anexo)
                                                            <div class="col">
                                                                <a href="/anexo/{{$item1->anexo}}" class="fs-6 fw-light text-top mt-4"><i class="fas fa-paperclip"></i></a>
                                                            </div>
                                                        @endif
                                                        <div class="col">
                                                            <p class="fs-6 fw-light text-end"></p>
                                                        </div>
                                                    </div>
                                                </div>
                                            @endif
                                        @endif
                                        @if ($item1->chamado_id == $item->id)
                                            @if ($item1->inicio == '1')
                                                <div class="mb-3 chat_color shadow p-3 text-center chat_color_inicio">
                                                    <p class="text-break">
                                                        @foreach ($usuarios as $item3)
                                                            @if ($item1->user_id == $item3->id)
                                                                
                                                            @endif
                                                        @endforeach
                                                        
                                                    </p>
                                                </div>
                                            @endif
                                        @endif 
                                    @endforeach  
                                </div>
                                <div>
                                    <form action="{{route('envchat')}}" method="POST" enctype="multipart/form-data">
                                        @csrf
                                        @if ($item->status_id != '4')
                                            @if ($item->status_id != '2')
                                                @php
                                                    $cont = array();
                                                    array_push($cont, $item->id);
                                                @endphp
                                                <textarea id="txtArtigo" type="text" class="chat{{$item->id}} form-label w-100 mt-2 text-break p-2" rows="3" name="chat" placeholder="Digite o Aqui..."></textarea>
                                            @endif
                                        @endif
                                        @if ($item->status_id == '5' || $item->status_id == '3')
                                            <input class="form-control w-50 mt-2" name="anexo" type="file" id="formFile">
                                        @endif
                                        <div class="row mt-3">
                                            
                                            <input type="hidden" name="id_chamado" value="{{$item->id}}">
                                            <input type="hidden" name="id_Chat" id="id_Chat" value="#exampleModal{{$item->id}}">
                                            <input type="hidden" name="url_ver" id="url_ver" value="{{Request::segment(1)}}">

                                            <div class="col-3">
                                                    <select class="form-select" name="status_chamado" aria-label="Default select example">
                                                        @if ($item->status_id == '3' || $item->status_id == '5')
                                                            <option value="2">Fechar</option>
                                                        @endif
                                                        @if ($item->status_id != '3' && $item->status_id != '5')
                                                            <option value="3">Iniciar Atendimento</option>
                                                        @endif
                                                        @if ($item->status_id != '4' && $item->status_id != '1')
                                                            <option value="4">Pausar</option>
                                                        @endif
                                                        @if ($item->status_id == '3' || $item->status_id == '5')
                                                            <option value="5" selected>Mensagem</option>
                                                        @endif
                                                    </select>
                                            </div>
                                            <div class="col">
                                                <button class="btn btn-primary" type="submit">
                                                    @if ($item->status_id == '1' || $item->status_id == '4')
                                                        Inicar
                                                    @endif
                                                    @if ($item->status_id == '5' || $item->status_id == '3')
                                                        Enviar
                                                    @endif
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
                erroalert: false
            }
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