<template>
    <div class="register">
        <div class="register-container">
            <div class="register-title">
                <h2 class="title">Crie sua conta</h2>
                <span
                    >Já possui conta?
                    <span class="btn" @click="$emit('switchComponent', 'TheLogin')">Login</span>
                </span>
            </div>

            <AuthWithService type="register" />

            <hr />

            <div class="form-container">
                <form action="/login" class="register-form">
                    <input type="text" class="input" name="username" placeholder="Nome de usuário" />

                    <input type="text" class="input" name="email" placeholder="Email" />

                    <input type="password" class="input" name="password" placeholder="Senha" />
                </form>

                <button class="register-btn">Cadastrar</button>
            </div>
        </div>
    </div>
</template>

<style scoped>
.register {
    display: flex;
    flex-direction: column;
    align-items: center;
    position: absolute;
    width: 100%;
    height: 100%;
}

.register-container {
    display: flex;
    justify-content: center;
    flex-direction: column;
    background-color: #fff;
    overflow: auto;
    border-radius: 0.6rem;
    height: 70%;
    width: 85%;
    box-shadow: 0 0 20px 2px #bbb;
}

.register-title {
    align-self: center;
    line-height: 0.6rem;
    margin-bottom: 1rem;
}

.title {
    text-align: center;
}

hr {
    height: 1px;
    width: 80%;
    border: 0;
    background-color: #ddd;
}

.btn {
    color: var(--kaitos-purple-3);
    cursor: pointer;
}

.btn:hover {
    text-decoration: underline;
}

.form-container {
    display: flex;
    flex-direction: column;
    align-items: center;
}

.register-form {
    width: 100%;
}

.input {
    display: block;
    border: 1px solid #bbb;
    outline: 0;
    border-radius: 0.3rem;
    padding: 0.6rem;
    margin: 0.6rem auto;
    width: 80%;
}

.input:focus {
    border-color: var(--kaitos-purple-5);
}

.register-btn {
    margin-top: 1rem;
    padding: 0.6rem;
    width: 80%;
    border: 1px solid var(--kaitos-purple-3);
    background-color: var(--kaitos-purple-3);
    border-radius: 0.4rem;
    color: white;
    cursor: pointer;
    transition: background-color 0.3s;
}

.register-btn:hover {
    background-color: var(--kaitos-purple-4);
    border-color: 0;
}

.register-btn:active {
    background-color: var(--kaitos-purple-5);
}

@media (min-width: 768px) and (min-height: 600px) {
    .register {
        height: 100%;
    }
    .register-container {
        width: 30%;
    }
}

@media (min-height: 800px) {
    .register-container {
        width: 80%;
    }
}
</style>

<script>
import AuthWithService from './AuthWithService.vue';

export default {
    components: {
        AuthWithService,
    },
};
</script>
