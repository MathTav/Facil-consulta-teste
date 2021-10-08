<template>
    
    <base-card style="position: relative">
        <template v-slot:backbtn>
            <div class="back-button"><button @click="backToStep1"><img class="img" src="../img/left-arrow.png"></button></div>
        </template>
        <template v-slot:title>
            Sobre o atendimento
        </template>
        <template v-slot:subtitle>
            Detalhes do atendimento
        </template>
        <template v-slot:form>
            <form @submit.prevent="onSubmit" class="row g-3 needs-validation" novalidate>
                        <div class="row">
                            <div class="col-12 position-relative">
                            <label style="margin-top: 1.5rem" for="validationTooltip03" class="form-label">Especialidade principal*</label>
                            <select class="form-select" :class="{'invalidData' : checkSpecialty}" id="validationTooltip04" v-model="specialty" required>
                            <option selected disabled value="">Selecione a especialidade</option>
                            <option v-for="(specialty, index) in specialties"
                            :key="index">{{specialty.nameSpecialty}}</option>
                            </select>
                            <p v-if="checkSpecialty" class="warning">
                            Por favor selecione uma especialidade!
                            </p>
                            </div>
                        </div>
                        <div class="row">
                            
                            <div class="col-10 position-relative">
                            <label style="margin-top: 1rem" for="validationTooltip01" class="form-label">Informe o preco da consulta*</label>
                            <div class="input-group mb-3">
                            <div class="input-group-prepend">
                                <span class="input-group-text test" style="background-color: #483698" id="inputGroup-sizing-default"><p style="color: white">R$</p></span>
                            </div>
                                <input type="text" :class="{'invalidData' : checkValue}" class="form-control" id="validationTooltip01" v-model.number="value" placeholder="Valor" required>
                            </div>
                            <p v-if="checkValue" class="warning">
                                Valor invalido!
                            </p>
                            

                        </div>
                        </div>
                        <div class="row">
                            <div class="col-12 position-relative">
                                <label style="margin-top: 1rem">Formas de pagamento da consulta*</label>
                                <p v-if="checkPayment" class="warning">
                                    Selecione um metodo de pagamento!
                                </p>
                                <div class="checkbox-label">
                                    <input type="checkbox" value="Dinheiro" v-model="paymentMethod"/>
                                    <label style="margin-left: 1.5rem">Em dinheiro</label>
                                </div>
                            </div>
                            <div class="col-12 position-relative">
                                <div class="checkbox-label">
                                    <input type="checkbox" value="PIX" v-model="paymentMethod"/>
                                    <label style="margin-left: 1.5rem">Pix</label>
                                </div>
                            </div>
                            <div class="col-12 position-relative">
                                <div class="checkbox-label">
                                    <input @click="changeStatus" type="checkbox" value="card" v-model="card"/>
                                    <label style="margin-left: 1.5rem">Cartão  de crédito</label>
                                    <div v-if="credit">
                                        <div class="form-check">
                                            <label>Parcelamento em</label> <br>
                                            <input  type="radio" name="flexRadioDefault" value="Parcelamento em 1x sem juros" v-model="opt" id="flexRadioDefault1">
                                            <label  for="flexRadioDefault1">
                                                1x, sem juros
                                            </label>
                                        </div>
                                        <div class="form-check">
                                            <input  type="radio" name="flexRadioDefault" value="Parcelamento em 2x sem juros" v-model="opt" id="flexRadioDefault2" checked>
                                            <label  for="flexRadioDefault2">
                                                2x, sem juros
                                            </label>
                                        </div>
                                        <div class="form-check">
                                            <input  type="radio" name="flexRadioDefault" value="Parcelamento 3x sem juros" v-model="opt" id="flexRadioDefault2" checked>
                                            <label  for="flexRadioDefault2">
                                                3x, sem juros
                                            </label>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="row mt-4">
                        <div class="col load-bar-step1 ms-2 mt-2">
                            
                        </div>
                        <div class="col load-bar-step2 mt-2">

                        </div>
                        <div class="col" style="color: #483698">
                            2 de 2
                        </div>
                        </div>
                        <div class="col-12 ma-0">
                            <base-button>Próximo</base-button>
                        </div>
                    </form>
        </template>
        <template v-slot:img>
            <img src="../img/page2.png">
        </template>
    </base-card>
</template>

<script>
export default {
    props: ['step1', 'step2' ,'backup2'],
    data() {
        return {
                checkSpecialty: false,
                checkValue: false,
                checkPayment: false,
                card: false,
                credit: false,
                index: 1,
                specialties: [
                    {
                        nameSpecialty: 'Cardiologia',
                    },
                    {
                        nameSpecialty: 'Dermatologia',
                    },
                    {
                        nameSpecialty: 'Neurologia',
                    },
                    {
                        nameSpecialty: 'Oftalmologia',
                    },
                    {
                        nameSpecialty: 'Psiquiatria',
                    },
                    {
                        nameSpecialty: 'Urologia',

                    },
                    
                ],
                specialty: '',
                value: null,
                paymentMethod: [],
                opt: 'Parcelamento 3x sem juros'
        }
    },
    mounted () {
    if (this.backup2) {
        this.specialty = this.step2.specialty;
        this.value = this.step2.value;
        this.paymentMethod = this.step2.paymentMethod;
        this.opt = this.step2.opt;
        this.$emit('backup2');
    } 
    },
    methods: {
        onSubmit(){
            const findIndex = this.paymentMethod.findIndex(pay => pay == 'Cartão  de crédito')
            if (findIndex != -1) {
                this.paymentMethod.splice(findIndex, 1);
            }
            if (this.card) {
                this.paymentMethod.push('Cartão  de crédito');
            }
            console.log('PM', this.paymentMethod);

            let count = 0;

            this.checkSpecialty = false;
            this.checkValue = false;

            if (this.specialty == '') {
                this.checkSpecialty = true;
                count++;
            }
            if (this.value == null || this.value < 30 || this.value > 350) {
                this.checkValue = true;
                count++;
            }
            if (this.paymentMethod.length == 0) {
                this.checkPayment = true;
                count++;
            } 
            if (count == 0) {
                const step2 = {
                    name: this.step1.name,
                    cpf: this.step1.cpf,
                    phone: this.step1.phone,
                    state: this.step1.state,
                    city: this.step1.city,
                    specialty :this.specialty,
                    value: this.value,
                    paymentMethod: this.paymentMethod,
                    opt: this.opt,
                }
            this.$emit('step-2', step2);
            }
        },
        changeStatus() {
            this.credit = !this.credit;
        },
        backToStep1 () {
            const step2 = {
                 name: this.step1.name,
                cpf: this.step1.cpf,
                phone: this.step1.phone,
                state: this.step1.state,
                city: this.step1.city,
                specialty :this.specialty,
                value: this.value,
                paymentMethod: this.paymentMethod,
                opt: this.opt,
            }
            this.$emit('back-to-step1', step2);
            }
    },
    computed: {
    },
    watch: {
    }
}
</script>

<style scoped>

p {
    margin: 0;
}

.input-group-text {
    border-radius: 0.25rem 0 0 0.25rem;
}

.invalidData {
    border-color: red !important;
}

</style>
