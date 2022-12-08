<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 1
      h1 Fauna silvestre

    .row.mt-5.justify-content-center.intro2
      .col-lg-9.mb-5
        p.texto-blanco Se denomina fauna a todas aquellas especies animales que viven de manera libre en un espacio determinado, que no dependen del humano para la satisfacción de sus necesidades básicas como alimento, refugio, reproducción y que interactúan con factores bióticos y abióticos para asegurar su supervivencia. Dentro de la fauna silvestre se pueden encontrar tres subtipos que se clasifican de acuerdo con su relación con el ambiente que habitan, estos se dividen en: 
      
      .col-lg-3
        figure
          img(src='@/assets/curso/temas/Tema1/img1.png', alt='Texto que describa la imagen').imagen-deco

    .row.mt-5
      .col-lg-12
        p A continuación, se verán las diferentes características y formas de organización de las diferentes especies que cohabitan en un mismo ecosistema.
      

    h3 1.1 Características y organización

    .row.mt-5
      .col-lg-8
        p La fauna silvestre, ya sea autóctona, exótica o invasora, se caracteriza porque se ha desarrollado evolutivamente sin la intervención humana, sus ciclos de vida se dan de acuerdo con el área en que están, dado que se han adaptado a este lugar para suplir sus necesidades. De esta manera, su ubicación condiciona los procesos de reproducción que se llevan a cabo en los ambientes en que estos se desarrollan, rigiéndose estrictamente por las leyes de selección natural y preservación de la especie en donde

      .col-lg-4
        figure
          img(src='@/assets/curso/temas/Tema1/img2.png', alt='Texto que describa la imagen').imagen-deco


</template>

<script>
export default {
  name: 'Tema1',
  components: {},
  data: () => ({
    // variables de vue
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass"></style>
