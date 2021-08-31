<template>
    <div class="camada mx-auto">
        <div class="login mt-5 cor container-fluid shadow p-3 mb-5 rounded">
            <div class="mb-3 mx-auto">
                <h1 class="display-6 text-center">Login</h1>
                <form action="{{route('login')}}" method="POST">
                    <div class="mb-3">
                        <label class="form-label">E-mail</label>
                        <input type="email" class="form-control" name="loginemail" id="loginemail" placeholder="Digite seu Email">
                    </div>
                    <div class="mb-3">
                        <label class="form-label">Senha</label>
                        <input type="password" class="form-control" name="loginpassword" id="loginpassword" placeholder="Digite Sua Senha">
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
    export default {
        name: 'CompLogin'
    }
</script>