<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
  
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción

    .row.justify-content-center.intro.align-items-center
      .col-lg-7
        p.text-white Apreciado aprendiz, bienvenido a este componente formativo, donde se explorará una serie de conceptos relevantes para el muestreo de la fauna y para la realización de inventarios faunísticos, entre los cuales tenemos: las características de organización, comportamiento, alimentación y reproducción de la fauna silvestre. Así mismo, se abordarán temas relacionados con el marco normativo, la fauna de importancia médica y los diferentes métodos de muestreo, que sirven de base para reconocer la importancia de estos procesos en la investigación y el análisis de los diferentes ecosistemas.
        p.text-white En el siguiente video conocerá, de forma general, la temática que se estudiará a lo largo del componente formativo:

      .col-lg-4
        figure
        img(src='@/assets/curso/temas/Introduccion/img1.svg' ).imagen-deco

    .row.mt-4
        figure
          .video
            iframe(width="560" height="315" src="https://www.youtube.com/embed/2L91WMqw96A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
          figcaption VIDEO
      
</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass"></style>
