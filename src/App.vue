<template>
  
  <router-view></router-view>
  

</template>

<script>


export default {
  name: 'App',
  components: {
    
  }
}
</script>

<style>

body {
  margin: 0;
  padding: 0;
  background-color: #ffe766 !important;
  color: #282828 !important;
  font-family:'Opens Sans' !important;
  font-size: 22px !important;
}

.container-box {
  width: 90%;
  padding-left: 2.5rem;
  padding-bottom: 2.5rem;
  max-width: 50rem;
  /* height: 70vh; */
  margin: 12vh auto;
  background-color: white;
  border-radius: 25px;
  box-shadow: 0 2px 6px rgba(71, 71, 71, 0.555);
}

.load-bar-step1 {
  padding-top: 10px;
  background-color: #483698;
  height: 2vh;
  color: #483698;
  border-radius: 6px 0 0 6px;
}

.load-bar-step2 {
  padding-top: 10px;
  background-color: #483698;
  height: 2vh;
  color: #483698;
  border-radius: 0 6px 6px 0;
}

.load-bar-empty {
  background-color: rgb(248, 246, 246);
  height: 2vh;
  color: #483698;
  border-radius: 0 6px 6px 0;
}

.warning {
  color: red;
  font-family: 'Opens Sans' !important;
  font-weight: bold !important;
  font-size: 14px !important;
}

.invalidData {
  border-color: red !important;
}

.img {
    width: 1.1rem;
}

img {
  width: 100%;
}

h1 {
  font-family:'Comfortaa' !important;
  font-size: 40px !important;
  font-weight: bold !important;
}

h3 {
  font-family:'Comfortaa' !important;
  font-size: 25px !important;
  font-weight: bold !important;
}

p {
  font-family: 'Comfortaa' !important;
  font-weight: bold !important;
  font-size: 18px !important;
}

input {
  border-color: #483698 !important;
}

button {
  border: none;
  background-color: transparent;
}

.form-select {
  border-color: #483698 !important;
}

label {
  font-size: 18px;
}

.checkbox-label {
  margin: 1rem 0 0 0;
  padding: 0.5rem 2rem;
  background-color: rgb(245, 243, 243);
  box-shadow: 0 2px 6px rgba(71, 71, 71, 0.555);
  border-radius: 6px;
}

.back-button {
    position: absolute;
    top: -4rem;
}


@import url('https://fonts.googleapis.com/css2?family=Comfortaa:wght@400;700&family=Open+Sans:wght@400;700&display=swap');

@media only screen and (max-width: 990px) {

  .container {
    border-radius: 30px 30px 0 0;
    background-color: white;
    min-height: 700px;
  }

  .container-box {
    background-color: transparent;
    margin: 15vh auto 0;
    margin-top: calc();
    padding-left: 0;
    width: 100%;
    /* min-height: 630px; */
    border-radius: 25px 25px 0 0;
    box-shadow: 0 0 0 0;
  }

  h1 {
    font-size: 32px !important;
  }

  h3 {
    font-size: 22px !important;
  }


  img {
    display: none;
  }

  .img {
    display: block;
  }
}

@media only screen and (max-height: 700px) {

  .container-box {
    margin-top: 5vh;
  }

  h1 {
    font-size: 30px !important;
  }

  h3 {
    font-size: 20px !important;
  }

  .back-button {
    top: -2rem;
    left: 1rem;
}
}

</style>
