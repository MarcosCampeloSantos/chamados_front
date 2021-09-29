<template>
    <LayoutDefault>
        <PainelAdm titulo="Painel de Administração"/>
    </LayoutDefault>
</template>

<script>

    import PainelAdm from '../../components/Adm/Component_PainelAdm.vue'
    import LayoutDefault from '../../components/Layouts/Component_LayoutDefault.vue'

    export default {
        name: 'Painel',
        components:{
            PainelAdm,
            LayoutDefault
        }
    }
</script>