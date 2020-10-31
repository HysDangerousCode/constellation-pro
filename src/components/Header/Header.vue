<template>
    <div class="header">
        <img src="../../assets/img/cons.png"/>
        <h1><slot></slot></h1>
    </div>
</template>
<script>
export default {
    name:"MyHeader",

}
</script>
<style lang="scss" scoped>
    .header{
        width: 100%;
        height: .44rem;
        display: flex;
        justify-content: center;
        align-items: center;
        position: fixed;
        top: 0;
        left: 0;
        z-index: 1;
        background: #DB7093;
        color: #ffffff;
        font-size: .18rem;
        img{
            width: .23rem;
            margin-right: .05rem;
        }
    }
</style>