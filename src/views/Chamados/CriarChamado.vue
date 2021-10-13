<template>
    <LayoutDefault>
        <Chamado titulo="Criar Chamado" />
    </LayoutDefault>
</template>

<script>

    import Chamado from '../../components/Chamados/Component_chamado.vue'
    import LayoutDefault from '../../components/Layouts/Component_LayoutDefault.vue'

    export default {
        data(){
            return{

            }
        },

        components:{
            Chamado,
            LayoutDefault
        }
    }
</script>