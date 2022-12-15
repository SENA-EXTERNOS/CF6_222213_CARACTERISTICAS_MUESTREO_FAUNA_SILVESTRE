<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 2
      h1 Paisajes

    .row.justify-content-center.align-items-center
      .col-lg-7
        .bloque-texto-b.color-cajon3.p-4
          .bloque-texto-b__texto
            p Características como el hábitat de la fauna son determinantes en los estudios relacionados con la misma. Para estudiar el hábitat es necesario analizar de manera particular el paisaje, que consiste en una región física en donde confluyen factores bióticos y abióticos para formar distintos ecosistemas y permitir el desarrollo de varias especies. El paisaje está compuesto por una matriz o espacio dominante que contiene unos parches o fragmentos que son áreas pequeñas dentro de las mismas y unos corredores que son elementos lineales que conectan dos parches o que se diferencian del terreno de la matriz (Figura 1). La evaluación del paisaje es la más adecuada para llevar a cabo estudios relacionados con la diversidad porque permite realizar medidas a múltiples escalas espacio-temporales que varían con el tiempo y van mostrando patrones que son imprescindibles para el estudio de procesos o fenómenos en torno a una especie. 
          
      .col-lg-4
        figure
          img(data-aos="fade-left" src='@/assets/curso/temas/Tema2/img1.png', alt='Texto que describa la imagen')

    separador

    #t_2_1.titulo-segundo.color-acento-contenido
      h3 2.1 Ubicación geográfica

    .row.justify-content-center
      .col-lg-12
        .bloque-texto-g.tarjetaimgcar.p-sm-4.p-md-5
          .bloque-texto-g__img.carimg(
            :style="{'background-image': `url(${require('@/assets/curso/temas/Tema2/img2.png')})`}"
          )
          .bloque-texto-g__texto2
            .col-lg-11
              p.text-small.texto-blanco Para la ubicación geográfica de las zonas de estudio se hace necesaria la utilización de sistemas de información geográfica (SIG), que son sistemas encargados de recopilar información geográfica mostrando la información de dicha zona a nivel espacial.
              p.text-small.texto-blanco Los SIG se basan principalmente en mapas que respaldan el trabajo ya sea individual o de organizaciones, se crean mapas a partir de teledetección, fotografía aérea e imágenes de satélites permitiendo modelar y predecir condiciones que pueden afectar un hábitat. 
              p.text-small.texto-blanco  Una vez en campo, se hace necesario obtener datos como coordenadas geográficas y altura de los puntos de muestreo de acuerdo con la metodología que se vaya a aplicar, estos datos incluyen también a los individuos colectados (ya sean observados o colectados en inventario), así como las trampas y redes que sean instaladas. 
        
    #t_2_2.titulo-segundo.color-acento-contenido.mt-3
      h3 2.2 Manipulación

    .row.mt-5.justify-content-center
      .col-lg-12
        p El manejo de fauna silvestre se centra en acciones que interfieren en la forma en que se relacionan las poblaciones de animales silvestres, su hábitat y los humanos con la finalidad de alcanzar ciertos objetivos por medio de estos.

    .container.tarjeta.p-3-md-3
      SlyderB.ps-4.mb-0(:datos="datosSlyder").imgslider3

    separador

    #t_2_3.titulo-segundo.color-acento-contenido.mt-3
      h3 2.3 Fauna de importancia médica

    .row.mt-3.justify-content-center.mt-2
      .col-lg-1.mb-4
        .bloque-texto-b.color-cajon4
          .bloque-texto-b__texto
            i.fas.fa-quote-left
      .col-lg-6    
        p Desde aquí, conviene empezar a estudiar el papel que hasta ahora ha desempeñado la fauna silvestre en el ámbito de la medicina y la búsqueda constante del equilibrio y bienestar humano. Desde los inicios de la humanidad, tanto las especies faunísticas como las especies florísticas han servido para satisfacer las necesidades humanas, especialmente en épocas prehispánicas la fauna jugó un papel determinante en la salud de las poblaciones indígenas por el uso de diversas partes (huesos, uñas, garras, pelos, plumas, cuernos, astas) o productos (huevos, sangre, leche, bilis grasa y orina) de la misma para fines medicinales que eran proporcionados a las comunidades a través de infusiones, cataplasmas, oraciones, ofrendas y baños purificadores para curar diversas afecciones como acidez, asma, cólicos, diabetes, diarreas de bebés, dolores de cabeza, corazón, espalda, estómago, huesos, oídos y pies, gastritis, gripa, heridas, inflamación del colon, mal olor, nariz tapada, problemas de riñones, tos, verrugas, falta de apetito, entre otras. Haciendo uso de partes de animales vertebrados como armadillos, conejos, ardillas, zorros, caballos, chivos, gallinas, pavos de monte, palomas, loros, golondrinas, colibríes, iguanas, tortugas y de animales invertebrados como abejas, grillos, hormigas, alacranes, lombrices de tierra y caracoles.
      
      .col-lg-5
        figure
          img(data-aos="fade-left" src='@/assets/curso/temas/Tema2/img6.png', alt='Texto que describa la imagen')

      .col-lg-4
        .bloque-texto-b.color-cajon4
          .bloque-texto-b__texto
            b Espadas y Guiascón, 2017
            i.fas.fa-quote-right
    

 


</template>

<script>
export default {
  name: 'Tema2',
  data: () => ({
    datosSlyder: [
      {
        titulo: '',
        texto:
          'El concepto de manejo de fauna se basa en que la “producción” de animales es un proceso mucho más lento que la producción de plantas, porque los humanos pueden intervenir en este restringiendo los básicos para que se dé, como la disponibilidad de alimento, agua y lugares adecuados para refugiarse, por eso se hace necesario comenzar a implementar técnicas de manejo y conservación de las especies.',
        imagen: require('@/assets/curso/temas/Tema2/img3.png'),
        // leyendaImagen: 'Leyenda de la imagen',
      },
      {
        titulo: '',
        texto:
          'Principalmente en la realización de inventarios faunísticos se utilizan métodos de cambios de localización, captura y manipulación de animales silvestres que, en varias ocasiones, pueden generar afectaciones en los mismos (enfermedades) y a los ecosistemas (disminución de la diversidad faunística), por ello, se utilizan también métodos en los que no se hace uso de dichas estrategias, sino que, a través de la observación directa, se obtienen los datos relevantes sobre la diversidad de un ecosistema. Estos métodos incluyen la visualización de huellas, instalación de cámaras trampa, estudios de tricología (rasgos morfológicos de los pelos) y uso de técnicas de condicionamiento.',
        imagen: require('@/assets/curso/temas/Tema2/img4.png'),
        // leyendaImagen: 'Leyenda de la imagen',
      },
      {
        titulo: '',
        texto:
          'En caso de que se usen métodos que involucren la captura de la fauna se deberá dar un trato ético durante la captura, toma de datos, colecta o liberación de los animales, teniendo en cuenta que las colectas y número de especímenes colectados serán mínimos evitando la captura de hembras en estado de gestación o de lactancia.',
        imagen: require('@/assets/curso/temas/Tema2/img5.png'),
        // leyendaImagen: 'Leyenda de la imagen',
      },
    ],
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
