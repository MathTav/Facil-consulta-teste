<template>
    <button>
        <slot></slot>
    </button>
</template>

<style scoped>

button {
    background-color: #483698;
    font-family: 'Comfortaa';
    color: white;
    border: none;
    border-radius: 10px;
    width: 100%;
    text-transform: uppercase;
}

button:hover {
    background-color: #6251ac;
}

</style>