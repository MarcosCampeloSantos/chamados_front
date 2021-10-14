<template>
    <div class="n-chamado mx-auto mb-3">
        <h1 class="display-6 text-center">{{titulo}}</h1>
        <form @submit.prevent="CriarChamado">
            <div class="mb-3">
                <label class="form-label">Topicos de Ajuda</label>
                <select class="form-select" v-model="chamado.top">
                    <option value="">Selecione um Topico</option>
                    <option v-for="(topicos, id) in listtop" :key="id" :value="topicos.id">{{topicos.topicos}}</option>
                </select>
            </div>
            <div class="mb-3">
                <label class="form-label">Titulo</label>
                <input type="text" class="form-control" v-model="chamado.titulo" placeholder="Digite o Titulo">
            </div>
            <div class="mb-3">
                <label for="exampleFormControlTextarea1" class="form-label">Conteudo</label>
                <textarea class="form-control" v-model="chamado.conteudo" rows="3" placeholder="Digite o Assunto"></textarea>
            </div>
            <div class="mb-3">
                <label for="formFile" class="form-label">Anexo</label>
                <input class="form-control" type="file">
            </div>
            <div class="mb-3">
                <button type="submit" class="btn btn-primary">Criar</button>
            </div>
        </form>
    </div>
</template>

<script>

    import getPost from '../../services/Axios/getpost'

    export default {
        data(){
            return{
                listtop: [],
                chamado:{
                    top: '',
                    titulo: '',
                    conteudo: '',
                    anexo: '',
                }
            }
        },

        props:{
            titulo: String
        },

        mounted(){
            this.buscarTop()
        },

        methods:{
            buscarTop(){
                getPost.buscar_top()
                .then(resposta => {
                    this.listtop = resposta.data
                })
            },

            CriarChamado(){
                getPost.criar_chamado(this.chamado)
                .then(resposta =>{
                    if(resposta.errors){
                        this.erros = resposta.errors
                        this.erroalert = true
                    }else{
                        this.erroalert = false
                        // document.location.reload(true)
                    }
                })
            }
        }
    }
</script>