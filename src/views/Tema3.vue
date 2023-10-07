<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 3
      h1 Muestreo faunístico

    .row.justify-content-center.intro3
      .col-lg-9
        p.texto-blanco La relación existente entre las comunidades y la fauna silvestre ha estado marcada por los usos que estas dan a los animales, ya sea por la obtención de alimentos a bajo costo (caza), suplementar sus dietas con los productos de los animales cazados, aprovecharlos como materias primas para artesanías, utilizar partes de su cuerpo o fluidos como medicina o eliminarlos porque representan un peligro para los humanos y las actividades que estos realizan, desde una perspectiva sociocultural también han sido utilizados como objetos de apropiación (mascotas) o recreativos además de formar parte de los imaginarios que construyen cultura en una sociedad como mitos, leyendas, arte, folclor o elementos significativos de diversos pueblos y desde un contexto económico ya que durante años la presencia de la fauna silvestre en zoológicos ha sostenido la economía de familias y ciudades enteras.

      .col-lg-3.mt-3
        figure
          img(data-aos="fade-left" src='@/assets/curso/temas/Tema3/img1.png', alt='Texto que describa la imagen').fade-left

    .row.mt-2.justify-content-center
      .col-lg-12.mb-5
        p Los inventarios faunísticos participativos permiten a las comunidades participar de primera mano con las acciones adelantadas para determinar la presencia y abundancia de una especie en un ecosistema determinado, es allí donde la comunidad entra en juego, no solo por el conocimiento de primera mano de la fauna silvestre de una región y las características que moldean sus hábitos y comportamientos sino por las acciones de educación ambiental que se pueden adelantar durante el desarrollo del inventario pues las actividades de seguimiento para la toma de muestras (como la instalación de transectos, trampas, cámaras trampa u observaciones directas) generan conciencia en las comunidades sobre los usos que dan a la fauna silvestre y aportan a los procesos de conservación de las mismas, abandonando viejas prácticas como la cacería, la tenencia de mascotas distintas a las domesticadas, usos medicinales o asesinatos por representar un peligro.


    .row.mt-2.justify-content-center
      .col-lg-7.mb-5
        figure
          img(data-aos="flip-right" src='@/assets/curso/temas/Tema3/img2.png', alt='Texto que describa la imagen')

      .col-lg-5.mb-5
        p.mt-5 Las metodologías de inventario faunístico, sirven para identificar la presencia de vertebrados (mamíferos, reptiles, aves), y hacer una estimación de las especies que existen en un área determinada para, posteriormente, disponer de información útil para el mejoramiento del uso de la tierra, los recursos biológicos, y el manejo y conservación de las áreas protegidas.

    .bg3
      .row.justify-content-around.align-items-centerrd.mt-5
            .col-10
              .tarjeta.bg8.mt-2.p-3
                .row.justify-content-around.align-items-center
                  .col-lg-1.mb-4
                    img(src="@/assets/curso/temas/Tema3/img14.svg" width='200px' height='100px')
                  .col-lg-11
                    .row.justify-content-between.align-items-center
                      .col.mb-4.mb-sm-0
                        p.mb-0.texto-blanco Conozca, a profundidad, los métodos de muestreo, los lineamientos descriptivos y todo lo necesario, para un adecuado inventario faunístico. Explore con atención, el siguiente documento:
                      .col-sm-auto
                        a.boton.color-acento-botones.texto-negro(:href="obtenerLink('/downloads/Metodos_de_muestreo.pdf')" target="_blank")
                          span Descargar
                          i.fas.fa-file-download
    h3.mt-5 Métodos de inventario

    .row.mt-3.justify-content-center
      .col-lg-12.mb-5
        p Para definir los métodos de inventario se ha optado por dividir estos en los principales grupos de estudio (mamíferos, anfibios y reptiles, aves), los métodos de inventario de mamíferos se subdividen en 3:

    TabsC.color-primario.mt-5
      .py-3.py-md-4(titulo="Método 1").fondo1
        .row
          .col-md-4
            figure
              img(src='@/assets/curso/temas/Tema3/img3.png', alt='Texto que describa la imagen')

          .col-md-7
            p El primero de ellos corresponde a los mamíferos pequeños para los cuales se utilizan trampas con cebos que se caracterizan por atraer a los animales con olores atractivos, la elección del cebo va depender de la experiencia del evaluador y del conocimiento que tenga sobre los hábitos alimenticios del mamífero a capturar, se dividen en trampas de captura viva o trampas caja que consisten en cubículos cerrados con una o dos puertas conectadas a un gatillo que el animal pisa al entrar a la jaula y por la presión de su peso libera el cerrojo que mantenía la caja abierta y queda encerrado dentro de la misma, ejemplo de este tipo de trama son las trampas #[em Sherman, Tomahawk y Havahart], trampas de golpeo que consisten en una lámina en donde se coloca el cebo ajustado a un mecanismo que se acciona cuando el animal se acerca y lo toma capturándolo al instante, ejemplo de este tipo de trampas son las trampas #[em Victor] y las trampas #[em Museum Special], además de trampas sin cebos como los cepos, que al activarse presionan las patas del animal impidiéndole escapar.


      .py-3.py-md-4(titulo="Método 2").fondo1
        .row
          .col-md-4
            figure
              img(src='@/assets/curso/temas/Tema3/img4.png', alt='Texto que describa la imagen')

          .col-md-7
            p El segundo corresponde a los métodos utilizados con los murciélagos que implican la captura utilizando redes de niebla, redes de mano o trampas arpa ubicados en la entrada de los refugios y la detección acústica por medio de las señales acústicas que los murciélagos envían para localizarse, estas serán procesadas por detectores acústicos o ultrasonidos para identificar las especies.

      .py-3.py-md-4(titulo="Método 3").fondo1
        .row
          .col-md-4
            figure
              img(src='@/assets/curso/temas/Tema3/img5.png', alt='Texto que describa la imagen')

          .col-md-7
            p El tercer subgrupo de mamíferos medianos y grandes que hace uso de métodos directos como los avistamientos o las vocalizaciones para una correcta determinación de la especie y métodos indirectos como rastros y fotografías usualmente a través de huellas, heces, refugios, huesos, pelos, rasguños, madrigueras y otros resaltando las trampas de pelo, huellas y trampas cámara y entrevistas a los pobladores de manera informal para que ellos describan de manera muy precisa las especies y sus hábitats.

    .row.mt-5.justify-content-center
      .col-lg-12.mb-5
        p Para los anfibios y reptiles son utilizados métodos muy similares para reunir evidencias de la presencia de ciertas especies en un área determinada por métodos directos como la búsqueda por encuentro visual que consiste en un desplazamiento lento y constante por un área revisando vegetación, cuerpos de agua, piedras y material que sirva de refugio a los animales dentro del hábitat.

    .row.mt-5.justify-content-center.imgslider
      SlyderA(tipo="b")
        .row.justify-content-center.align-items-center.my-lg-4
          .col-lg-5
            .number(data-number="01")
              .ps-2.mb-0.mt-2
                h4 Duración de la búsqueda
                p La búsqueda debe durar entre 20 y 30 minutos, esta técnica deberá realizarse tanto en la noche como en el día y se podrá llevar a cabo de 2 maneras, una aleatoria caminando por un determinado número de metros sin seguir un patrón o siguiendo un diseño en línea o múltiples líneas en paralelo. Cada unidad de muestreo deberá estar separada por 50 metros de la otra para garantizar que se puedan registrar salamandras, lagartijas, culebras y tortugas.

          .col-lg-6
            figure
              img(src='@/assets/curso/temas/Tema3/img6.png')

        .row.justify-content-center.align-items-center.my-lg-4
          .col-lg-5
            .number(data-number="02")
              .ps-2.mb-0.mt-2
                h4 Transectos de banda fija
                p Otro de los métodos utilizados para el muestreo de anfibios y reptiles es el de transectos de banda fija en donde se instalan unidades de muestreo de 100 metros de largo x 2 metros de ancho en terrenos abiertos y accesibles o 50 metros de largo  x 2 metros de ancho en zonas con acceso más difícil, dispuestos de manera perpendicular y alejados entre 5 y 10 metros de la “entrada” al terreno y separados entre 50 y 250 metros cada uno para realizar desplazamientos minuciosos y a baja velocidad para registrar de forma visual y auditiva la especies presentes, dichos transectos se establecen 24 horas antes de iniciar el inventario.

          .col-lg-6
            figure
              img(src='@/assets/curso/temas/Tema3/img7.png')

        .row.justify-content-center.align-items-center.my-lg-4
          .col-lg-5
            .number(data-number="03")
              .ps-2.mb-0.mt-2
                h4 Parcelas de hojarasca
                p Por su parte las parcelas de hojarasca se pueden realizar en otros microhábitats como musgo, raíces, piedras, bromelias y troncos realizando parcelas cuadrangulares de 5x5m o 10x10m, se deberá realizar de día y requerirá de la presencia de dos o más personas para remover todo el material vegetal desde los extremos del límite de la parcela hasta el centro de la misma registrando de manera minuciosa las especies presentes allí, también se emplean otras estrategias como las cercas de desvío y trampas de caída que consisten en ubicar barreras de plástico a modo de cerca mayores o iguales a 10 metros con una altura de 0,8 – 1 metro que interceptarán el camino de los individuos que se desplazan dentro de un área determinada haciéndolos seguir por un camino que conduce a la trampa que generalmente consiste en varios recipientes de plástico de 3 a 20 litros ubicados en agujeros, estas trampas se colocan 4 días y son revisadas cada 6 u 8 horas.

          .col-lg-6
            figure
              img(src='@/assets/curso/temas/Tema3/img8.png')

        .row.justify-content-center.align-items-center.my-lg-4
          .col-lg-5
            .number(data-number="04")
              .ps-2.mb-0.mt-2
                h4 Puntos de conteo
                p Las aves por su parte cuentan con métodos como los puntos de conteo que involucran conteos en puntos fijos de acuerdo a datos como la composición según el tipo de hábitat y la abundancia, consiste en tomar nota de los individuos vistos y oídos en un intervalo de tiempo de 10 a 15 minutos y se puede realizar durante 4 horas en la mañana y 3 horas antes de anochecer realizándolo en, aproximadamente, 20 puntos separados 200 metros entre ellos en áreas de bosque y 500 metros en carreteras, este método cuenta con una variable que consiste en contar todas las especies dentro de una radio fijo de 25 metros.

          .col-lg-6
            figure
              img(src='@/assets/curso/temas/Tema3/img9.png')

        .row.justify-content-center.align-items-center.my-lg-4
          .col-lg-5
            .number(data-number="05")
              .ps-2.mb-0.mt-2
                h4 Conteos directos
                p Otro método es el de conteos directos que se dan generalmente en hábitats abiertos y con buena visibilidad y consiste en identificar la especie y conocer el número y distribución de grupos y contar el número de individuos de cada grupo, la búsqueda intensiva se puede considerar como un método complementario y consiste en una serie de tres censos de 20 minutos en tres áreas distintas utilizando parcelas de 1 o 2 hectáreas, se debe realizar en las primeras 5 horas del día (con luz) se deben anotar todas las aves vista u oídas y el censador debe contar con preparación previa para el reconocimiento de aves.

          .col-lg-6
            figure
              img(src='@/assets/curso/temas/Tema3/img10.png')

        .row.justify-content-center.align-items-center.my-lg-4
          .col-lg-5
            .number(data-number="06")
              .ps-2.mb-0.mt-2
                h4 Listas de especies
                p Las listas de especies es un método para detectar especies en áreas pequeñas, consiste en realizar registros de manera visual o auditiva en recorridos por trochas o senderos establecidos hasta completar una lista de 20 especies con un distanciamiento de 250 metros entre trocha o sendero establecido, se elaborarán varias listas y después se evaluará la abundancia relativa de una especie de acuerdo al número de veces que aparezca en las listas realizadas, también se pueden realizar transectos los cuales tienen una metodología similar a los puntos fijos sin embargo en esta el evaluador registra todas las aves mientras camina en línea recta sin devolverse, mirar hacia atrás o retroceder. Finalmente, los evaluadores pueden valerse de otras estrategias para identificar aves y conocer sobre su abundancia en un área determinada estas son la reproducción de sonidos grabados, observaciones relacionadas con la reproducción y búsqueda de nidos.

          .col-lg-6
            figure
              img(src='@/assets/curso/temas/Tema3/img11.png')

    h3.mt-5 Muestreo participativo

    .row.mt-5.justify-content-center
      .col-lg-12.mb-5
        p La relación existente entre las comunidades y la fauna silvestre ha estado marcada por los usos que estas dan a los animales, ya sea por la obtención de alimentos a bajo costo (caza), suplementar sus dietas con los productos de los animales cazados, aprovecharlos como materias primas para artesanías, utilizar partes de su cuerpo o fluidos como medicina o eliminarlos porque representan un peligro para los humanos y las actividades que estos realizan.

    .container.tarjeta.p-3-md-3
      SlyderB.ps-4.mb-0(:datos="datosSlyder").imgslider3

    h3.mt-5 Materiales e insumos

    .row.justify-content-center.align-items-center.mt-5
      .col-lg-8
        .tarjeta.bg8.mt-2.p-3
          .row.justify-content-around.align-items-center
            .col-lg-1.mb-4
              img(src="@/assets/curso/temas/Tema3/img14.svg" width='200px' height='100px')
            .col-lg-11
              .row.justify-content-between.align-items-center
                .col.mb-4.mb-sm-0
                  p.texto-blanco.mb-0 En el siguiente anexo, se detallan los <b>materiales e insumos</b> que hacen posible el estudio y ejecución de los muestreos, para realizar los inventarios faunísticos.
                .col-sm-auto
                  a.boton.color-acento-botones.texto-negro(:href="obtenerLink('/downloads/Materiales_e_insumos.pdf')" target="_blank")
                    span Descargar
                    i.fas.fa-file-download


        .cajon.color-acento-contenido.p-4.mt-5
          p.mb-0 El siguiente video expone el funcionamiento y utilidad de los equipos que se utilizan en inventarios faunísticos; obsérvelo atentamente y procure llevar registro de lo más destacado en su libreta personal de apuntes:

      .col-lg-4
        figure
          img(src='@/assets/curso/temas/Tema3/img15.png')


    .row.mt-5
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/P2zVkIvo5sE" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)

    .row.mt-5.justify-content-center
      .col-lg-12.mb-5
        p Las actividades de muestreo de fauna silvestre son susceptibles a diversas situaciones, las cuales pueden poner en riesgo la salud humana, la de los animales, o el medio ambiente; entre ellas se encuentran las enfermedades zoonóticas, reacciones alérgicas y accidentes laborales de todo tipo. Por eso, las acciones deben estar dirigidas a la prevención de este tipo de incidentes.

    h3.mt-5 Bioseguridad

    .row.justify-content-center.intro2
      .col-lg-9
        p.texto-blanco En este punto, es clave considerar las estrategias para evitar riesgos al llevar a cabo los trabajos de campo. La exigencia de esquemas de vacunación contra la rabia, tétanos, fiebre tifoidea y otras enfermedades, puede ser de utilidad si se tiene en cuenta la zona en la que se realizan los estudios y los riesgos epidemiológicos, asociados, que se pueden contrarrestar. Es muy importante el uso de elementos de bioseguridad, como guantes, tapabocas, ropa que cubra los brazos y piernas, gafas de seguridad y calzado de fácil limpieza y desinfección, así como también, la existencia de un botiquín de primeros auxilios con medicamentos para infecciones intestinales, dolor de cabeza, fiebre, antiinflamatorios y vendas para casos de caídas leves.

      .col-lg-3
        figure
          img.editimg(data-aos="fade-left" src='@/assets/curso/temas/Tema3/img16.png', alt='Texto que describa la imagen')

    h3.mt-5 Manejo de registros

    .row.mt-2.justify-content-center
      .col-lg-12.mb-5
        p Existe otro elemento fundamental para llevar a cabo en un inventario faunístico: el registro de la información. De su riguroso registro depende, en gran parte, el éxito de un inventario faunístico, el cual cuenta con varios formatos y una libreta de campo, donde se registran la mayoría de los datos, con gran escala de precisión.

    .row.mt-5.justify-content-center.imgslider
      SlyderA(tipo="b")
        .row.justify-content-center.align-items-center.my-lg-4
          .col-lg-6
            .number(data-number="01")
              p.ps-2.mb-0.mt-2 Esta información también debe ser consignada en formatos especiales como, por ejemplo, el de conteo de aves, en el cual se registra información importante tanto de los animales como de las unidades de muestreo, datos meteorológicos, fechas, horas de inicio y final del muestreo.

          .col-lg-6
            figure
              img(src='@/assets/curso/temas/Tema3/img17.png')

        .row.justify-content-center.align-items-center.my-lg-4
          .col-lg-6
            .number(data-number="02")
              p.ps-2.mb-0.mt-2 Los registros de los animales vistos (con nombre común y científico), el tipo de registro (visual – auditivo), número de individuos y las actividades que realizaban durante la observación, para el registro de huellas y excrementos se utilizan datos similares como la fecha, datos meteorológicos, claves de la unidad de muestreo pero varían en cuanto a información como los transectos y la ubicación de estos, las características de estas como medidas y si la huella pertenece a patas delanteras o traseras.

          .col-lg-6
            figure
              img(src='@/assets/curso/temas/Tema3/img18.png')

        .row.justify-content-center.align-items-center.my-lg-4
          .col-lg-7
            .number(data-number="03")
              p.ps-2.mb-0.mt-2 En cuanto a excrementos se toman también las medidas (largo y ancho) y diámetro, para el fototrampeo se utilizan datos como la clave de la unidad de muestreo, fecha de colocación de la cámara, hora de activación, temporada meteorológica, coordenadas geográficas, tipo de vegetación en donde fue colocada la cámara, fecha y hora de retiro y temporada al momento del retiro, cada uno de estos registros deberá contener además de la información mencionada un espacio para observaciones que permitirá ampliar la información proporcionada con otros datos que pueden estar relacionadas con fallas humanas, daños de los equipos o cualquier otro tipo de situación presentada en campo que pueda entorpecer la toma de muestras o captura de animales.

          .col-lg-5
            figure
              img(src='@/assets/curso/temas/Tema3/img19.png')



    .row.justify-content-center.align-items-center
      .col-lg-8
        .cajon.color-acento-contenido.p-4.mt-5
          p.mb-0 Recuerde explorar los demás recursos que se encuentran disponibles en este componente formativo; para ello, diríjase al menú principal, donde encontrará la síntesis, una actividad didáctica para reforzar los conceptos estudiados, material complementario, entre otros.
</template>

<script>
export default {
  name: 'Tema3',
  data: () => ({
    datosSlyder: [
      {
        titulo: '',
        texto:
          'El concepto de manejo de fauna se basa en que la “producción” de animales es un proceso mucho más lento que la producción de plantas, porque los humanos pueden intervenir en este restringiendo los básicos para que se dé, como la disponibilidad de alimento, agua y lugares adecuados para refugiarse, por eso se hace necesario comenzar a implementar técnicas de manejo y conservación de las especies.',
        imagen: require('@/assets/curso/temas/Tema3/img12.png'),
        // leyendaImagen: 'Leyenda de la imagen',
      },
      {
        titulo: '',
        texto:
          'Principalmente en la realización de inventarios faunísticos se utilizan métodos de cambios de localización, captura y manipulación de animales silvestres que, en varias ocasiones, pueden generar afectaciones en los mismos (enfermedades) y a los ecosistemas (disminución de la diversidad faunística), por ello, se utilizan también métodos en los que no se hace uso de dichas estrategias, sino que, a través de la observación directa, se obtienen los datos relevantes sobre la diversidad de un ecosistema. Estos métodos incluyen la visualización de huellas, instalación de cámaras trampa, estudios de tricología (rasgos morfológicos de los pelos) y uso de técnicas de condicionamiento.',
        imagen: require('@/assets/curso/temas/Tema3/img13.png'),
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
