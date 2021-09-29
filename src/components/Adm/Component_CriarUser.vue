<template>
    <h1 class="display-6 text-center">CRIAR USUARIO</h1>
    <div class="m-3">
        <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
            Novo Usuario
        </button>
    </div>
    <div class="mx-auto mb-3">
        <div class="overflow-auto listagem-chamados cor border rounded-2 m-3">
            <table class="table table-striped table-hover">
                <thead>
                    <tr class="table-dark sticky-top">
                        <th scope="row">CODIGO</th>
                        <th scope="row">NOME</th>
                        <th scope="row">DEPARTAMENTO</th>
                        <th scope="row">NIVEL DE ACESSO</th>
                        <th scope="row">DATA</th>
                        <th scope="row" class="text-center">EDITAR</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="(user, id) in listuser" :key="id">
                        <th scope="row">{{user.id}}</th>
                        <td>{{user.name}}</td>
                        <td>{{user.departamento}}</td>
                        <td v-if="user.nivel == 1">Administrador</td>
                        <td v-if="user.nivel == 2">Usuario</td>
                        <td v-if="user.nivel == 3">Supervisor</td>
                        <td v-if="user.nivel == 4">Operador</td>
                        <td>{{user.created_at}}</td>
                        <td class="text-center"></td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>

     <!-- Modal Criação de Usuario -->
    <div class="modal fade" data-bs-backdrop="static" id="exampleModal" tabindex="-1" aria-hidden="true">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="exampleModalLabel">Criação de Novo Usuario</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
            <div class="modal-body">
                <div class="alert alert-danger" v-show="erroalert" role="alert">
                    <li v-for="(erro, index) in erros" :key="index">{{erro}}</li>
                </div>
                <form @submit.prevent="criarUser">
                    <div class="mb-3">
                        <label class="form-label">Nome</label>
                        <input type="text" class="form-control" v-model="user.name" placeholder="Digite o Nome">
                    </div>
                    <div class="mb-3">
                        <label class="form-label">Nivel</label>
                        <select class="form-select overflow-auto"  v-model="user.nivel">
                            <option value="" selected>Selecione um Nivel de Acesso</option>
                            <option value="1">Administrador</option>
                            <option value="2">Usuario</option>
                            <option value="3">Supervisor</option>
                            <option value="4">Operador</option>
                        </select>
                    </div>
                    <div class="mb-3">
                        <label class="form-label">Departamento</label>
                        <select class="form-select"  v-model="user.departamento">
                            <option value="" selected>Selecione um Departamento</option>
                            <option v-for="(dep, id) in listdep" :key="id" :value="dep.id">{{dep.departamentos}}</option>
                        </select>
                    </div>
                    <div class="mb-3">
                        <label class="form-label">E-mail</label>
                        <input type="email" class="form-control" v-model="user.email" placeholder="Digite o E-mail">
                    </div>
                    <div class="mb-3">
                        <label class="form-label">Senha</label>
                        <input type="password" class="form-control" v-model="user.password" placeholder="Digite a Senha">
                    </div>
                    <div class="mb-3">
                        <label class="form-label">Confirmar Senha</label>
                        <input type="password" class="form-control" v-model="user.password_confirmation" placeholder="Digite a Senha">
                    </div>
                    <div class="mb-3">
                        <button type="submit" class="btn btn-primary">Criar</button>
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
    name: 'Component_Criar_User',
    data(){
        return{
            erroalert: false,
            erros:[],
            listuser:[],
            listdep: [],
            user:{
                name:'',
                nivel: '',
                departamento: '',
                email: '',
                password: '',
                password_confirmation: '',
            },
            
            
        }
    },

    methods:{
        criarUser(){
            getPost.criar_user(this.user)
            .then(resposta =>{
                if(resposta.errors){
                    this.erros = resposta.errors
                    this.erroalert = true
                }else{
                    this.erroalert = false
                    this.buscarUsuarios()
                    // document.location.reload(true)
                }
            })
        },
        buscarUsuarios(){
            getPost.buscar_users()
                .then(resposta => {
                this.listuser = resposta.data
            })
        }
    },

    mounted(){
        
        getPost.buscar_users()
        .then(resposta => {
            this.listuser = resposta.data
        })

        getPost.buscar_dep()
        .then(resposta => {
            this.listdep = resposta.data
        })
                

    },
}
</script>