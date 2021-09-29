<template>
    <div>
        <div class="camada cor mx-auto">
            <div class="tamanho_padrao mx-auto mt-5 shadow p-3 mb-5 rounded">
                <slot></slot>
                <footer class="navbar-fixed-bottom text-center">
                    <p>&copy;Chamados 2021</p>
                </footer>
            </div>
        </div>
    </div>
</template>

<script>

export default {
    name: 'Layout_Default'
}
</script>
