<template>
    <div class="camada cor mx-auto">
        <div class="tamanho_padrao mx-auto mt-5 shadow p-3 mb-5 rounded">
            <div class="row ">
                <div class="w-25 mx-auto col">
                <h5 class="text-center">Departamentos</h5>
                <div class="overflow-auto border rounded-3 listagem-dp">
                    <table class="table table-striped table-hover">
                    <thead>
                        <tr class="text-center table-dark sticky-top">
                            <th scope="row">ID</th>
                            <th scope="row">DEPARTAMENTOS</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr class="text-center" v-for="(departamentos, id) in listdep" :key="id">
                            <th scope="row" class="border">{{departamentos.id}}</th>
                            <td >{{departamentos.departamentos}}</td>
                            <td>
                                <button data-bs-target="#excluirdep" class="btn btn-danger" data-bs-toggle="modal">
                                    <fa :icon="['fa','trash-alt']"/>
                                </button>
                            </td>
                        </tr>
                    </tbody>
                </table>
                </div>
                <button type="button" class="btn btn-primary mt-2" data-bs-toggle="modal" data-bs-target="#dep">
                    Inserir
                </button>
                </div>

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
                                <button data-bs-target="#excluirtop" class="btn btn-danger" data-bs-toggle="modal">
                                    <fa :icon="['fa','trash-alt']"/>
                                </button>
                            </td>
                        </tr>
                    </tbody>
                </table>
                </div>
                <button type="button" class="btn btn-primary mt-2" data-bs-toggle="modal" data-bs-target="#top">
                    Inserir
                </button>
                </div>
            </div>
            <div class="row mt-3">
                <div class="w-25 mx-auto col">
                <h5 class="text-center">Relacionamentos</h5>
                <div class="overflow-auto border rounded-3 listagem-dp">
                    <table class="table table-striped table-hover">
                    <thead>
                        <tr class="text-center table-dark sticky-top">
                            <th scope="row">ID</th>
                            <th scope="row">DEPARTAMENTO</th>
                            <th scope="row">TOPICOS</th>
                            <th scope="row">ATRIBUIDO</th>
                            <th scope="row">EDIÇÃO</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr class="text-center" v-for="(rel, id) in listrel" :key="id">
                            <th scope="row" class="border">{{rel.id}}</th>
                            <td>{{rel.departamento_name}}</td>
                            <td>{{rel.topico_name}}</td>
                            <td>
                                <div class="row">
                                    <div class="col">
                                        <div v-for="(rel_atrib, id) in rel.atribuidos" :key="id">
                                            {{rel_atrib.name}}
                                        </div>
                                    </div> 
                                    <div class="col-auto">
                                        <button :data-bs-target="'#excluirreluser' + rel.id" class="btn btn-danger" data-bs-toggle="modal">
                                            <fa :icon="['fa','minus-circle']"/>
                                        </button>
                                    </div>                
                                    <div class="col-auto">
                                        <button :data-bs-target="'#aditreluser' + rel.id" class="btn btn-primary" data-bs-toggle="modal">
                                            <fa :icon="['fa','plus-circle']"/>
                                        </button>
                                    </div> 
                                </div>
                            </td>
                            <td>
                            <button type="button" class="btn btn-primary" data-bs-toggle="modal" :data-bs-target="'#editrel' + rel.id">
                                Editar
                            </button>
                            <button type="button" class="btn btn-danger" data-bs-toggle="modal" data-bs-target="#excluirel">
                                <fa :icon="['fa','trash-alt']"/>
                            </button>
                            </td>
                        </tr>
                    </tbody>
                </table>
                </div>
                <button type="button" class="btn btn-primary mt-2"  data-bs-toggle="modal" data-bs-target="#rel">
                    Inserir
                </button>
                </div>
            </div>
        </div>
    </div>

  <!-- Modal Criar Departamentos -->
    <div class="modal fade" id="dep" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="staticBackdropLabel">Criar Departamento</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    <div class="alert alert-danger" v-show="erroalert" role="alert">
                        <li v-for="(erro, index) in erros" :key="index">{{erro}}</li>
                    </div>
                    <form @submit.prevent="CriarDep">
                        <div class="mb-3">
                            <label class="form-label">Departamento</label>
                            <input type="text" class="form-control mb-3" rows="3" v-model="dep.cria_dep" placeholder="Digite o Departamento">
                            <label class="form-label">E-mail de Notificação</label>
                            <input type="email" class="form-control" rows="3" v-model="dep.cria_dep_email" placeholder="Digite o Email">
                        </div>
                        <div class="mb-3">
                            <button type="submit" class="btn btn-primary">Criar</button>
                        </div>
                    </form>
                </div>
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
                    <form @submit.prevent="CriarTop">
                        <div class="mb-3">
                            <label class="form-label">Topico</label>
                            <input type="text" class="form-control" rows="3" v-model="top.cria_top" id="cria_email" placeholder="Digite o Topico">
                        </div>
                        <div class="mb-3">
                            <button type="submit" class="btn btn-primary">Criar</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>

    <!-- Modal Criar Relacionamentos -->
    <div class="modal fade" id="rel" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="staticBackdropLabel">Criar Relacionamentos</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    <div class="alert alert-danger" v-show="erroalert" role="alert">
                        <li v-for="(erro, index) in erros" :key="index">{{erro}}</li>
                    </div>
                    <form @submit.prevent="CriarRel">
                        <div class="mb-3">
                            <label class="form-label">Departamento</label>
                            <select class="form-select" v-model="rel.rel_dep" size="1" aria-label="size 3 select example">
                                <option value="" selected>Selecione um Departamento</option>
                                <option v-for="(departamento, id) in listdep" :key="id" :value="departamento.id">{{departamento.departamentos}}</option>
                            </select>
                            <label class="form-label mt-3">Relacionado a</label>
                            <select class="form-select" v-model="rel.rel_top" size="1" aria-label="size 3 select example">
                                <option value="" selected>Selecione um Topico</option>
                                <option v-for="(topicos, id) in listtop" :key="id" :value="topicos.id">{{topicos.topicos}}</option>
                            </select>
                            <label class="form-label mt-3">Relacionado a</label>
                            <select class="form-select" v-model="rel.rel_user" size="1" aria-label="size 3 select example">
                                <option value="" selected>Selecione um Usuario</option>
                                <option v-for="(user, id) in listuser" :key="id" :value="user.id">{{user.id}} - {{user.name}}</option>
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

    <!-- Modal Editar Relacionamentos -->
    <div class="modal fade" v-for="(edit_rel, id) in listrel" :key="id" :id="'editrel' + edit_rel.id" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="staticBackdropLabel">Editar Relacionamento</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    <div class="alert alert-danger" v-show="erroalert" role="alert">
                        <li v-for="(erro, index) in erros" :key="index">{{erro}}</li>
                    </div>
                    <form @submit.prevent="EditRel">
                    <div class="mb-3">
                        <label class="form-label">Departamento</label>
                        <select class="form-select" v-model="rel_edit.dep" size="1" aria-label="size 3 select example">
                            <option value="" selected>Selecione um Departamento</option>
                            <option v-for="(dep, id) in listdep" :key="id" :value="dep.id">{{dep.departamentos}}</option>
                        </select>
                        <label class="form-label mt-3">Relacionado a</label>
                        <select class="form-select" v-model="rel_edit.top" size="1" aria-label="size 3 select example">
                            <option value="" selected>Selecione um Topico</option>
                            <option v-for="(top, id) in listtop" :key="id" :value="top.id">{{top.topicos}}</option>
                        </select>
                    </div>
                    <div class="mb-3">
                        <button type="submit" @click="EnvIdRel(edit_rel.id)" class="btn btn-primary">Editar</button>
                    </div>
                    </form>
                </div>
            </div>
        </div>
    </div>

    <!-- Modal Adicionar Atribuição ao Relacionamento -->
    <div class="modal fade" v-for="(edit_rel, id) in listrel" :key="id" :id="'aditreluser' + edit_rel.id" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="staticBackdropLabel">Adicionar Atribuição</h5>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div class="modal-body">
            <div class="alert alert-danger" v-show="erroalert" role="alert">
                <li v-for="(erro, index) in erros" :key="index">{{erro}}</li>
            </div>
            <form @submit.prevent="AdicionarAtrib">
              <div class="mb-3">
                    <label class="form-label">Atribuir a</label>
                    <select class="form-select" v-model="adc_atribuido.rel_user_edit" size="1" aria-label="size 3 select example">
                        <option value="" selected>Selecione um Usuario</option>
                        <option v-for="(user, id) in listuser" :key="id" :value="user.id">{{user.name}}</option>
                    </select>
              </div>
              <div class="mb-3">
                  <button type="submit" @click="EnvIdRel(edit_rel.id)" class="btn btn-primary">Adicionar</button>
              </div>
          </form>
          </div>
        </div>
      </div>
    </div>

    <div class="modal fade" id="excluirreluser" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="staticBackdropLabel">Excluir Atribuição</h5>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div class="modal-body">
            <form action="{{route('delete_atributo')}}" method="POST">
              <div class="mb-3">
                  <input type="hidden" name="id_relacionamento" value="{{$item->id}}">
                  <select class="form-select" name="rel_user_edit" size="1" aria-label="size 3 select example">
                        <option value="" selected></option>
                  </select>
              </div>
              <div class="mb-3">
                  <button type="submit" class="btn btn-danger">Excluir</button>
              </div>
          </form>
          </div>
        </div>
      </div>
    </div>

    <div class="modal fade" id="excluirdep" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="staticBackdropLabel">Excluir Atribuição</h5>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div class="modal-body">
            <form action="{{route('excluirdep')}}" method="POST">
              <div class="mb-3 text-center">
                  <input type="hidden" name="id_departamento" value="">
                  <label class="form-label">Realmente quer Excluir o Departamento <b></b></label>
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

    <div class="modal fade" id="excluirtop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="staticBackdropLabel">Excluir Atribuição</h5>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div class="modal-body">
            <form action="{{route('excluirtop')}}" method="POST">
              <div class="mb-3 text-center">
                  <input type="hidden" name="id_topico" value="">
                  <label class="form-label">Realmente quer Excluir o Topico <b></b></label>
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

    <div class="modal fade" id="excluirel" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="staticBackdropLabel">Excluir Atribuição</h5>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div class="modal-body">
            <form action="{{route('excluirel')}}" method="POST">
              <div class="mb-3 text-center">
                  <input type="hidden" name="id_rel" value="{{$item->id}}">
                  <label class="form-label">Realmente quer Excluir o Relacionamento <b></b></label>
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
    import getPost from '../../services/getpost'

    export default {
        name: 'Component_Painel',
        data(){
            return{
                listdep:[],
                listtop:[],
                listuser:[],
                listrel:[],
                erros:[],
                erroalert: false,
                adc_atribuido: {
                    id_rel: '',
                    rel_user_edit: '',
                },
                rel_edit: {
                    top: '',
                    dep: '',
                    id_rel: ''
                },
                rel:{
                    rel_dep: '',
                    rel_user: '',
                    rel_top: ''
                },
                dep:{
                    cria_dep: '',
                    cria_dep_email: ''
                },
                top:{
                    cria_top: ''
                }
            }
        },

        mounted(){

            getPost.buscar_dep()
            .then(resposta => {
                this.listdep = resposta.data
            })

            getPost.buscar_top()
            .then(resposta => {
                this.listtop = resposta.data
            })

            getPost.buscar_users()
            .then(resposta => {
                this.listuser = resposta.data
            })
            
            getPost.buscar_rel()
            
            .then(resposta => {
                this.listrel = resposta.data
                console.log(resposta.data)
            })
        },

        methods:{
            CriarDep(){
                getPost.criar_dep(this.dep)
                .then(resposta =>{
                    if(resposta.errors){
                        this.erros = resposta.errors
                        this.erroalert = true
                    }else{
                        this.erroalert = false
                        this.buscarDep()
                        // document.location.reload(true)
                    }
                })
            },
            
            CriarRel(){
                getPost.criar_rel(this.rel)
                .then(resposta =>{
                    if(resposta.errors){
                        this.erros = resposta.errors
                        console.log(this.erros)
                        this.erroalert = true
                    }else{
                        this.erroalert = false
                        this.buscarRel()
                        // document.location.reload(true)
                    }
                })
            },

            CriarTop(){
                getPost.criar_top(this.top)
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
                        this.buscarRel()
                        // document.location.reload(true)
                    }
                })
            },

            buscarDep(){
                getPost.buscar_dep()
                .then(resposta => {
                    this.listdep = resposta.data
                })
            },

            buscarTop(){
                getPost.buscar_top()
                .then(resposta => {
                    this.listtop = resposta.data
                })
            },

            buscarRel(){
                getPost.buscar_rel()
                .then(resposta => {
                    this.listrel = resposta.data
                })
            },

            EnvIdRel(a){
                this.rel_edit.id_rel = a
                this.adc_atribuido.id_rel = a
            }
        }
        
    }
</script>