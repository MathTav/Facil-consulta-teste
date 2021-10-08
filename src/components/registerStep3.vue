<template>
    <base-card style="position: relative">
        <template v-slot:backbtn>
            <div class="back-button"><button @click="$emit('back-to-step2')"><img class="img" src="../img/left-arrow.png"></button></div>
        </template>
        <template v-slot:title>
            Revisão do cadastro
        </template>
        <template v-slot:form>
            <form @submit.prevent="onSubmit" class="row g-3 needs-validation" novalidate>
                        <div class="row">
                            <div class="col-12 position-relative">
                                <p style="margin-top: 1.5rem" for="validationTooltip03" class="form-label">Nome completo</p>
                                <label>{{aboutProfissional.name}}</label>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-12 position-relative">
                                <p style="margin-top: 1.5rem" for="validationTooltip03" class="form-label">CPF</p>
                                <label>{{aboutProfissional.cpf}}</label>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-12 position-relative">
                                <p style="margin-top: 1.5rem" for="validationTooltip03" class="form-label">Número de celular ou telefone</p>
                                <label>{{aboutProfissional.phone}}</label>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-12 position-relative">
                                <p style="margin-top: 1.5rem" for="validationTooltip03" class="form-label">Estado/Cidade</p>
                                <label>{{aboutProfissional.state}} - {{aboutProfissional.city}}</label>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-12 position-relative">
                                <p style="margin-top: 1.5rem" for="validationTooltip03" class="form-label">Especialidade principal</p>
                                <label>{{aboutProfissional.specialty}}</label>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-12 position-relative">
                                <p style="margin-top: 1.5rem" for="validationTooltip03" class="form-label">Preco da consulta</p>
                                <label>R$ {{aboutProfissional.value}}</label>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-12 position-relative">
                                <p style="margin-top: 1.5rem" for="validationTooltip03" class="form-label">Formas de pagamento da consulta</p>
                                <div style="font-size:18px" v-for="pay in aboutProfissional.paymentMethod" :key="pay"
                                    >{{ pay }} <span v-if="pay == 'Cartão  de crédito'"> - {{aboutProfissional.opt}}</span>
                                </div>
                            </div>
                        </div>

                        <div class="col-12 ma-0">
                            <base-button style="background-color: #FBDE40; color: black">cadastrar profissional</base-button>
                        </div>
                        <div class="row mt-3 align-items-center">
                            <button @click="editRegister" class="btn-no-style">Editar cadastro</button>
                        </div>
                    </form>
        </template>
        <template v-slot:img>
            <img src="../img/page3.png">
        </template>
    </base-card>
</template>

<script>
export default {
    props: ['about-profissional'],
    data() {
        return {
            payment: [
                "PIX",
                "Cartao de Creditos"
            ]
        }
    },
    methods: {
        editRegister() {
            this.$emit('edit-register');
        },
        onSubmit() {
            this.$emit('step-3');
            
        }
    },
  
}
</script>

<style scoped>

.btn-no-style {
    font-family: 'Comfortaa';
    font-weight: bold;
    font-size: 20px;
    border: none;
    background: none;
    color: #483698;
}


</style>
