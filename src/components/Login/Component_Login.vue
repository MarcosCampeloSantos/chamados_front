<template>
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
                    var erro = [];

                    if(resposta.erro){
                        this.erros = resposta

                        this.erroalert = true
                    }else if(resposta.errors){
                        erro = resposta.errors
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
                        
                        if(erro.erro){
                            erro.erro.forEach(element => {
                                this.erros.push(element)
                            })
                        }
                        
                        this.erroalert = true
                    }else{
                        this.erroalert = false
                        Cookie.set('_app_token', resposta.auth_token)
                        localStorage.setItem("auth",JSON.stringify(resposta))
                        localStorage.setItem("user",JSON.stringify(resposta.user))
                        this.$store.commit('increment', JSON.parse(localStorage.getItem('auth') || "{}"))
                        this.$router.push({name: 'Home'})
                    }
                })
            },
        }
        
    }
</script>