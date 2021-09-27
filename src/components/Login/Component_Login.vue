<template>
    <div class="camada mx-auto">
        <div class="login mt-5 cor container-fluid shadow p-3 mb-5 rounded">
            <div class="mb-3 mx-auto">
                <h1 class="display-6 text-center">Login</h1>
                <div class="alert alert-danger" v-show="erroalert" role="alert">
                    <li v-for="(erro, index) in erros" :key="index">{{erro}}</li>
                </div>
                <form @submit.prevent="AuthLogin">
                    <div class="mb-3">
                        <label class="form-label">E-mail</label>
                        <input type="email" class="form-control" v-model="Login.email" placeholder="Digite seu Email">
                    </div>
                    <div class="mb-3">
                        <label class="form-label">Senha</label>
                        <input type="password" class="form-control" v-model="Login.password" placeholder="Digite Sua Senha">
                    </div>
                    <div claas="mb-3">
                        <button type="submit" class="btn btn-primary">Entrar</button>
                    </div>
                </form>
            </div>
        </div>
    </div>
    <!-- <fa :icon="['fab','coffee']"/> -->
</template>

<script>

    import getPost from '../../services/Axios/getpost'
    import Cookie from 'js-cookie'


    export default {
        name: 'CompLogin',
        data(){
            return{
                Login:{
                    email: '',
                    password: ''
                },
                erros: [],
                erroalert: false
            }
        },
        methods:{
            AuthLogin(){
                getPost.Login(this.Login)
                .then(resposta =>{
                    if(resposta.errors){
                        var erro = resposta.errors
                        this.erros = []
                        if(erro.password){
                            erro.password.forEach(element => {
                                this.erros.push(element)
                            });
                        }

                        if(erro.email){
                            erro.email.forEach(element => {
                                this.erros.push(element)
                            });
                        }
                        this.erroalert = true
                    }else{
                        this.erroalert = false
                        Cookie.set('_app_token', resposta.auth_token)
                        localStorage.setItem("auth",JSON.stringify(resposta))
                        this.$router.push({name: 'Home'})
                    }
                })
            },
        },
        
    }
</script>