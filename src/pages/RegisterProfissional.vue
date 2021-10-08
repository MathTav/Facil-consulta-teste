<template>
    <component :is="componentSelect"
    @step-1="submitStep1"
    @step-2="submitStep2"
    @step-3="submitStep3"
    @final-step="submitFinalStep"
    @back-to-step1="backToStep1"
    @back-to-step2="backToStep2"
    @edit-register="editRegister"
    @backup1="this.backup1 = false"
    @backup2="this.backup2 = false"
    :backup1="backup1"
    :backup2="backup2"
    :step1="step1"
    :step2="step2"
    :about-profissional="step2"
    :profissionals="Profissionals"></component >
</template>

<script>
import registerStep1 from '../components/registerStep1.vue';
import registerStep2 from '../components/registerStep2.vue';
import registerStep3 from '../components/registerStep3.vue';
import ProfissionalsStorage from '../components/ProfissionalsStorage.vue'
export default {
    components: {
        registerStep1,
        registerStep2,
        registerStep3,
        ProfissionalsStorage,
    },
    data() {
        return {
            Profissionals: [],
            componentSelect: 'register-step-2',
            step1: {},
            step2: {},
            backup1: false,
            backup2: false,
        }
    },
    methods: {
        submitStep1 (payload) {
            this.step1 = payload;
            this.componentSelect = 'register-step-2';
        },
        submitStep2 (payload) {
            this.step2 = payload;
            this.componentSelect = 'register-step-3';
        },
        submitStep3 () {
            this.componentSelect = 'profissionals-storage';
            this.Profissionals.push(this.step2);
        },
        submitFinalStep () {
            this.componentSelect = 'register-step-1';
        },
        backToStep1 (payload) {
            this.backup1 = true;
            this.backup2 = true;
            this.step2 = payload;
            this.componentSelect = 'register-step-1'
        },
        backToStep2 () {
            this.backup2 = true;
            this.componentSelect = 'register-step-2'
        },
        editRegister () {
            this.backup1 = true;
            this.backup2 = true;
            this.componentSelect = 'register-step-1'
        }

    }
}
</script>

<style scoped>


</style>


