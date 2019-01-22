<template>
    <div class="loader valign-wrapper">
        <div class="lds-hourglass"></div>
    </div>
</template>

<script>
  export default {
    name: 'Spinner',
    
  }
</script>

<style scoped>
  .loader {
    height: 100vh;
  }
  .lds-hourglass {
    display: block;
    position: relative;
    width: 64px;
    height: 64px;
    margin: auto;
  
  }
  .lds-hourglass:after {
    content: " ";
    display: block;
    border-radius: 50%;
    width: 0;
    height: 0;
    margin: 6px;
    box-sizing: border-box;
    border: 26px solid #fff;
    border-color: #fff transparent #fff transparent;
    animation: lds-hourglass 0.3s infinite;
    background: teal;
    margin: auto 0;

  }
  @keyframes lds-hourglass {
    0% {
      transform: rotate(0);
      animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
    }
    50% {
      transform: rotate(900deg);
      animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
    }
    100% {
      transform: rotate(1800deg);
    }
  }

</style>
