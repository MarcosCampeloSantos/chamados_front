<template>
  <router-view />
  <Footer />
</template>

<script>

  import Footer from './components/Layouts/Component_Footer.vue'

  export default {
    name: 'App',
    components:{
      Footer
    }
  }
</script>

<style lang="scss">
    $primary: rgb(0, 153, 255);
</style>

<style>
  body{
    background-color: azure;
  }

  a{
    text-decoration: none;
    color: black;
  }

  a:hover{
    color: rgb(101, 101, 189);
  }

  /*::-webkit-scrollbar {
      width: 0px;
  }*/

  .scroll{
    display: flex;
    overflow: auto;
    flex-direction: column-reverse;
  }

  .chat_color{
    background-color: rgb(255, 255, 255);
  }

  .chat_content{
    height: 25rem;
  }

  .chat_content_interno{
    max-width: 27rem;
  }

  .chat_color_inicio{
    background-color: rgb(142, 250, 214);
  }

  .chat{
    background-color: rgb(240, 255, 255);
    box-shadow: 1px 1px 5px rgba(0, 0, 0, 0.288) inset;
      
  }

  .cor{
    background-color: white;
  }

  .home{
    width: 80rem;
  }

  .perfil{
    width: 26%;
    height: 20rem;
  }

  .cartao{
    width: 20%;
    margin-left: 1rem;
    -webkit-box-shadow: 9px 7px 5px rgba(50, 50, 50, 0.77);
    -moz-box-shadow:    9px 7px 5px rgba(50, 50, 50, 0.288);
    box-shadow:         9px 7px 5px rgba(50, 50, 50, 0.226);
  }

  .alt-card{
    margin-top: auto;
    margin-bottom: auto;
  }

  .cor-cartao1{
    background-color: rgb(118, 206, 125);
    box-shadow: 2rem;
  }

  .cor-cartao2{
    background-color: rgb(110, 127, 202);
    box-shadow: 2rem;
  }

  .cor-cartao3{
    background-color: rgb(179, 132, 115);
  }

  .style-card{
    font-size: 2rem;
    font-family: Arial, Helvetica, sans-serif;
    color: white;
    text-decoration: none;
    text-align: center;
    float: left;
    top: 50%;

    /* flex para alinhar conteúdo*/
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .style-card:hover{
    color: white;
  }

  .listagem-chamados{
    height: 30rem;
  }

  .listagem-dp{
    height: 13rem;
  }

  .voltar{
    color: black;
    top: 42px;
    position: relative;
    text-decoration: none;
    justify-content: center;
  }

  .n-chamado{
    width: 75%;
  }

  .login{
    width: 22rem;
  }

  .camada{
    width: 90rem;
  }

  .ck-editor__editable_inline{
    min-height: 10rem;
  }
</style>
