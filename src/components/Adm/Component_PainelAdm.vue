<template>
    <div class="mb-6">
        <h1 class="display-6 text-center">{{titulo}}</h1>
    </div>
    <div class="row ">
        <div class="w-25 mx-auto col">
            <h5 class="text-center">Topicos de Atendimento</h5>
            <div class="overflow-auto border rounded-3 listagem-dp">
                <table class="table table-striped table-hover">
                <thead>
                    <tr class="text-center table-dark sticky-top">
                        <th scope="row">ID</th>
                        <th scope="row">TOPICO</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    <tr class="text-center" v-for="(topico, id) in listtop" :key="id">
                        <th scope="row" class="border">{{topico.id}}</th>
                        <td >{{topico.topicos}}</td>
                        <td>
                            <button :data-bs-target="'#excluirtop' + topico.id" class="btn btn-danger" data-bs-toggle="modal">
                                <fa :icon="['fa','trash-alt']"/>
                            </button>
                        </td>
                    </tr>
                </tbody>
            </table>
            </div>
            <div class="w-100 ">
                <button type="button" class="btn btn-primary mt-2" data-bs-toggle="modal" data-bs-target="#top">
                Inserir
                </button>
            </div>
            
        </div>

        <div class="w-25 mx-auto col">
            <h5 class="text-center">Atribuição</h5>
            <div class="overflow-auto border rounded-3 listagem-dp">
                <table class="table table-striped table-hover">
                    <thead>
                        <tr class="text-center table-dark sticky-top">
                            <th scope="row">ID</th>
                            <th scope="row">TOPICO</th>
                            <th scope="row">ATRIBUIDOS</th>
                            <th scope="row">EDIÇÃO</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr class="text-center align-middle" v-for="(atributo, id) in listatribuicoes" :key="id">
                            <th scope="row" class="border">{{atributo.id}}</th>
                            <td>{{atributo.topicos}}</td>
                            <td>
                                {{atributo.name}}
                            </td>
                            <td>
                                <div class="row">     
                                    <div class="col">
                                        <button type="button" class="btn btn-danger" data-bs-toggle="modal" :data-bs-target="'#excluiatributo' + atributo.id">
                                            <fa :icon="['fa','trash-alt']"/>
                                        </button>
                                    </div>
                                </div>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <div class="w-100 ">
                <button type="button" class="btn btn-primary mt-2"  data-bs-toggle="modal" data-bs-target="#atributo">
                Inserir
                </button>
            </div>
        </div>
    </div>

    <!-- Modal Criar Topicos -->
    <div class="modal fade" id="top" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="staticBackdropLabel">Criar Topico</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    <div class="alert alert-danger" v-show="erroalert" role="alert">
                        <li v-for="(erro, index) in erros" :key="index">{{erro}}</li>
                    </div>
                    <form @submit.prevent="CriarTopico">
                        <div class="mb-3">
                            <label class="form-label">Topico</label>
                            <input type="text" class="form-control" v-model="topico.name_topico" placeholder="Digite o Topico">
                        </div>
                        <div class="mb-3">
                            <button type="submit" class="btn btn-primary">Criar</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>

    <!-- Modal Criar Atribuicão -->
    <div class="modal fade" id="atributo" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="staticBackdropLabel">Criar Atribuição</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    <div class="alert alert-danger" v-show="erroalert" role="alert">
                        <li v-for="(erro, index) in erros" :key="index">{{erro}}</li>
                    </div>
                    <form @submit.prevent="CriarAtribuicao">
                        <div class="mb-3">
                            <label class="form-label mt-3">Topico</label>
                            <select class="text-center form-select" v-model="atribuicao.topico" size="1" aria-label="size 3 select example">
                                <option class="text-center" value="" hidden selected>Selecione um Topico</option>
                                <option class="text-center" v-for="(topicos, id) in listtop" :key="id" :value="topicos.id">{{topicos.topicos}}</option>
                            </select>
                            <label class="form-label mt-3">Atribuido a</label>
                            <select class="text-center form-select" v-model="atribuicao.user" size="1" aria-label="size 3 select example">
                                <option class="text-center" value="" hidden selected>Selecione um Usuario</option>
                                <option class="text-center" v-for="(user, id) in listuser" :key="id" :value="user.id">{{user.name}}</option>
                            </select>
                        </div>
                        <div class="mb-3">
                            <button type="submit" class="btn btn-primary">Criar</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>

    <!-- Modal Excluir Relacionamento -->
    <div class="modal fade" v-for="(atributo, id) in listatribuicoes" :key="id" :id="'excluiatributo' + atributo.id" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="staticBackdropLabel">Excluir Atribuição</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    <div class="alert alert-danger" v-show="erroalert" role="alert">
                        <li v-for="(erro, index) in erros" :key="index">{{erro}}</li>
                    </div>
                    <form @submit.prevent="ExcluirAtributo(atributo.id)">
                        <div class="mb-3 text-center">
                            <label class="form-label">Realmente quer Excluir o Relacionamento <b>{{atributo.id}}</b></label>
                        </div>
                        <div class="mb-3 text-center">
                            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cancelar</button>
                            <button type="submit" class="btn btn-danger ms-3">Excluir</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>

    <!-- Modal Excluir Topico -->
    <div class="modal fade" v-for="(topicos, id) in listtop" :key="id" :id="'excluirtop' + topicos.id" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="staticBackdropLabel">Excluir Atribuição</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    <div class="alert alert-danger" v-show="erroalert" role="alert">
                        <li v-for="(erro, index) in erros" :key="index">{{erro}}</li>
                    </div>
                    <form @submit.prevent="ExcluirTop(topicos.id)">
                        <div class="mb-3 text-center">
                            <label class="form-label">Realmente quer Excluir o Topico <b>{{topicos.topicos}}</b></label>
                        </div>
                        <div class="mb-3 text-center">
                            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cancelar</button>
                            <button type="submit" class="btn btn-danger ms-3">Excluir</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import getPost from '../../services/Axios/getpost'

    export default {
        name: 'Component_Painel',
        data(){
            return{
                listdep:[],
                listtop:[],
                listuser:[],
                listatribuicoes:[],
                erros:[],
                erroalert: false,
                trash_user: '',
                rel_edit: {
                    top: '',
                    dep: '',
                    id_rel: ''
                },
                atribuicao:{
                    user: '',
                    topico: ''
                },
                dep:{
                    cria_dep: '',
                    cria_dep_email: ''
                },
                topico:{
                    name_topico: ''
                },
            }
        },

        props:{
            titulo: String
        },

        mounted(){

            getPost.buscar_top()
            .then(resposta => {
                this.listtop = resposta.data
            })

            this.BuscarUsers()
            this.BuscarAtribuicoes()
        },

        methods:{
            BuscarAtribuicoes(){
                getPost.buscar_atribuicoes()
                .then(resposta => {
                    console.log(resposta)
                    this.listatribuicoes = resposta.data
                })
            },

            BuscarUsers(){
                getPost.buscar_users()
                .then(resposta => {
                    this.listuser = resposta.data
                })
            },
            
            CriarAtribuicao(){
                getPost.criar_atribuicao(this.atribuicao)
                .then(resposta =>{
                    if(resposta.errors){
                        this.erros = resposta.errors
                        
                        this.erroalert = true
                    }else{
                        this.erroalert = false
                        this.BuscarAtribuicoes()
                        // document.location.reload(true)
                    }
                })
            },

            CriarTopico(){
                getPost.criar_top(this.topico)
                .then(resposta =>{
                    var erro

                    if(resposta.errors){
                        erro = resposta.errors

                        erro.cria_top.forEach(element => {
                            this.erros.push(element)
                        });

                        this.erroalert = true
                    }else{
                        this.erroalert = false
                        this.buscarTop()
                        // document.location.reload(true)
                    }
                })
            },

            EditRel(){
                getPost.editar_rel(this.rel_edit)
                .then(resposta =>{
                    if(resposta.errors){
                        this.erros = resposta.errors
                        this.erroalert = true
                    }else{
                        this.erroalert = false
                        this.buscarRel()
                        // document.location.reload(true)
                    }
                })
            },

            AdicionarAtrib(){
                getPost.adc_atribuido(this.adc_atribuido)
                .then(resposta =>{
                    if(resposta.errors){
                        this.erros = resposta.errors
                        this.erroalert = true
                    }else{
                        this.erroalert = false
                        this.BuscarAtribuicoes()
                        // document.location.reload(true)
                    }
                })
            },

            ExcluirAtributo(dado){
                getPost.trash_atribuicao(dado)
                .then(resposta =>{
                    if(resposta.errors){
                        this.erros = resposta.errors
                        this.erroalert = true
                    }else{
                        this.erroalert = false
                        this.BuscarAtribuicoes()
                        // document.location.reload(true)
                    }
                })
            },

            ExcluirTop(dado){
                getPost.trash_topico(dado)
                .then(resposta =>{
                    if(resposta.errors){
                        this.erros = resposta.errors
                        this.erroalert = true
                    }else{
                        this.erroalert = false
                        this.buscarTop()
                        // document.location.reload(true)
                    }
                })
            },

            buscarTop(){
                getPost.buscar_top()
                .then(resposta => {
                    this.listtop = resposta.data
                })
            },
        }
        
    }
</script>