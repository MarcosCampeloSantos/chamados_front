<template>
    <LayoutDefault>
        <Home />
    </LayoutDefault>
</template>

<script>

    import Home from '../../components/Home/Component_Home'
    import LayoutDefault from '../../components/Layouts/Component_LayoutDefault.vue'

    export default {
        name: 'Home ',
        data(){
            return{
                
            }
        },
        components:{
            Home,
            LayoutDefault
        }
    }
</script>