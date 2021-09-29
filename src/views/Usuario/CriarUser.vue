<template>
    <LayoutDefault>
        <CriarUser />
    </LayoutDefault>
</template>

<script>

    import CriarUser from '../../components/Adm/Component_CriarUser.vue'
    import LayoutDefault from '../../components/Layouts/Component_LayoutDefault.vue'

    export default {
        name: 'Criar_Usuario',
        components:{
            CriarUser,
            LayoutDefault
        }
    }
</script>