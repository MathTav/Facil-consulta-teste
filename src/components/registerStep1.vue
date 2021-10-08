<template>
    <base-card>
        <template v-slot:title>
            Sobre o profissional
        </template>
        <template v-slot:subtitle>
            Dados do profissional
        </template>
        <template v-slot:form>
            <form @submit.prevent="onSubmit" class="row g-3 needs-validation" novalidate>
                        <div class="row">
                            <div class="col-12 position-relative">
                                <label for="validationTooltip01" class="form-label mt-5">Nome completo*</label>
                                <input type="text" :class="{'invalidData' : checkName}" class="form-control" id="validationTooltip01" v-model="name" placeholder="Digite o nome completo" required>
                                <p v-if="checkName" class="warning">
                                Nome inválido!
                                </p>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-10 position-relative">
                            <label for="validationTooltip01" class="form-label mt-4">CPF*</label>
                            <input type="text" :class="{'invalidData' : checkCPF}" class="form-control" id="validationTooltip01" v-model="cpf"  v-mask="'###.###.###-##'" placeholder="Digite um CPF" required>
                            <p v-if="checkCPF" class="warning">
                            CPF inválido!
                            </p>
                        </div>
                        </div>
                        <div class="row">
                            <div class="col-10 position-relative">
                            <label for="validationTooltip01" class="form-label mt-4">Número  de celular*</label>
                            <input type="text" :class="{'invalidData' : checkPhone}" class="form-control" id="validationTooltip01" v-model="phone" v-mask="'(##) #####-####'" placeholder="(00) 0 0000-0000" required>
                            <p v-if="checkPhone" class="warning">
                            Número inválido!
                            </p>
                        </div>
                        </div>
                        <div class="col position-relative mt-4">
                            <label for="validationTooltip03" class="form-label">Estado*</label>
                            <select class="form-select" :class="{'invalidData' : checkState}" id="validationTooltip04" v-model="state" required>
                            <option selected disabled value="">Selecione</option>
                            <option v-for="(state, index) in states"
                            :key="index">{{state.nameState}}</option>
                            </select>
                            <p v-if="checkState" class="warning">
                            Por favor selecione um estado!
                            </p>
                        </div>
                        <div class="col position-relative mt-4">
                            <label for="validationTooltip04" :class="{'invalidData' : checkCity}" class="form-label">Cidade*</label>
                            <select class="form-select" id="validationTooltip04" v-model="city" required>
                            <option selected disabled value="">Selecione</option>
                             
                            <option v-if="cityIndex == -1">...</option>

                            <option v-else v-for="(state, index) in states[cityIndex].citys"
                            :key="index">{{state.nameCity}}</option>
                            
                            </select>
                            <p v-if="checkCity" class="warning">
                            Por favor selecione uma cidade!
                            </p>
                        </div>
                        <div class="row mt-4">
                        <div class="col load-bar-step1 ms-2 mt-2">
                            
                        </div>
                        <div class="col load-bar-empty mt-2">

                        </div>
                        <div class="col" style="color: #483698">
                            1 de 2
                        </div>
                        </div>
                        <div class="col-12 mt-3">
                            <base-button>Próximo</base-button>
                        </div>
                    </form>
        </template>
        <template v-slot:img>
            <img src="../img/page1.png">
        </template>
    </base-card>
</template>

<script>
export default {
    props: ['step1', 'backup1'],
    data() {
        return {
                checkName: false,
                checkCPF: false,
                checkPhone: false,
                checkState: false,
                checkCity: false,
                index: 1,
                states: [
                    {
                        nameState: 'Paraná',
                        citys: [
                            {
                                nameCity: 'Londrina',
                            },
                            {
                                nameCity: 'Maringá',
                            }
                        ]
                    },
                    {
                        nameState: 'Rio Grande do Sul',
                        citys: [
                            {
                                nameCity: 'Pelotas',
                            },
                            {
                                nameCity: 'Porto Alegre',
                            }
                        ]
                    },
                    {
                        nameState: 'Santa Catarina',
                        citys: [
                            {
                                nameCity: 'Florianópolis',
                            },
                            {
                                nameCity: 'Joinville',
                            }
                        ]
                    },
                    
                ],
                name: '',
                cpf: null,
                phone: null,
                state: '',
                city: ''    
        }
    },
    mounted () {
        if (this.backup1) {
            this.name = this.step1.name;
            this.cpf = this.step1.cpf;
            this.phone = this.step1.phone;
            this.state = this.step1.state;
            this.city = this.step1.city;
            this.$emit('backup1');
        } 
    },
    methods: {
        onSubmit(){
            this.checkName = false;
            this.checkCPF = false;
            this.checkPhone = false;
            this.checkState = false;
            this.checkCity = false;

            let count = 0;

            if (this.name == '' || this.name.length < 3 || this.name.length > 48) {
                this.checkName = true;
                count++;
            }
            if (this.cpf == null || this.cpf.length < 14) {
                this.checkCPF = true;
                count++;
            }
            if (this.phone == null || this.phone.length < 15) {
                this.checkPhone = true;
                count++;
            }
            if (this.state == '') {
                this.checkState = true;
                count++;
            }
            if (this.city == '') {
                this.checkCity = true;
                count++;
            }
            if (count == 0) {
                const step1 = {
                name: this.name,
                cpf: this.cpf,
                phone: this.phone,
                state: this.state,
                city: this.city
            }
            this.$emit('step-1', step1);
            }


        }
    },
    computed: {
        cityIndex(){
            return this.states.findIndex(state => state.nameState == this.state);      
        }   
    }
}
</script>

<style scoped>

.invalidData {
    border-color: red !important;
}

</style>
