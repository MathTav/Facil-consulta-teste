<template>
    <base-card>
        <template v-slot:title>
            Profissionais
        </template>
        <template v-slot:subtitle>
            Lista de profissionais
        </template>
        <template v-slot:form>
            <div class="list-group" v-for="profissional in profissionals" :key="profissional">
                <button type="button" class="list-group-item list-group-item-action">{{profissional.name}} - {{profissional.specialty}}</button>
            </div>
            <div class="col-12 mt-3">
                <base-button @click="$emit('final-step')" style="background-color: #FBDE40; color: black">novo profissional</base-button>
            </div>
        </template>
        <template v-slot:img>
            <img src="../img/page1.png">
        </template>
    </base-card>
</template>

<script>
export default {
    props: ['profissionals'],

}
</script>

