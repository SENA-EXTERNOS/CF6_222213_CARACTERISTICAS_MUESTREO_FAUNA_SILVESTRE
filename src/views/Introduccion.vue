<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
  
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción

    .row.mt-5.justify-content-center.intro
      .col-lg-8.mb-5
        p.texto-blanco Apreciado aprendiz, le damos la bienvenida a una nueva experiencia de conocimiento, de aquí en adelante se explorarán una serie de conceptos relevantes para el muestreo de fauna y para la realización de inventarios faunísticos, entre ellos se verán las características de organización, comportamiento, alimentación y reproducción de la fauna silvestre. Así mismo, se abordarán temas relacionados con el marco normativo, la fauna de importancia médica y los diferentes métodos de muestreo que sirven de base para reconocer la importancia de estos procesos en la investigación y el análisis de los diferentes ecosistemas.
        p.texto-blanco Se considera importante que antes de iniciar, revise el siguiente video para contextualizar el momento de aprendizaje y pueda entender con mayor claridad los temas relacionados con la clasificación de los seres vivos que conforman la fauna silvestre, así como las formas de recolección de información que se usan para los procesos de muestreo. ¡Éxitos en este recorrido!

      .col-lg-4
        figure
          img(src='@/assets/curso/temas/Introduccion/img1.svg', alt='Texto que describa la imagen').imagen-deco

      .col-lg-12.mt-3
       figure
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/2L91WMqw96A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
      figcaption   VIDEO
      
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
