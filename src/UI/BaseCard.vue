<template>
<div class="container"> 
    <div class="container-box" style="position: relative">
        <div class="row">
            <div class="col">
                <slot name="backbtn"></slot>
            </div>
        </div>
        <div class="row">
            <div class="col mt-5">
                <h1 style="color: #483698"><slot name="title"></slot></h1>
            </div>
        </div>
        <div class="row">
            <div class="col-sm mt-3">
                <h3><slot name="subtitle"></slot></h3>
                    <div class="mt-0">
                        <slot name="form"></slot>
                    </div>
            </div>
            <div class="col-lg mt-5">   
                <div class="row mt-5">
                    <div class="col mt-5">
                        <slot name="img"></slot>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>

</template>

<style scoped>


</style>