export default {
  global: {
    componenteFormativo: 'Características y muestreo de la fauna silvestre',
    descripcionCurso:
      'Se denomina fauna a todas aquellas especies animales que se desarrollan en un espacio determinado, interactuando con factores bióticos y abióticos y sin intervención humana; el inventario faunístico proporciona información relevante sobre dichas especies, y permite disponer, de manera adecuada, el uso de la tierra y los recursos biológicos, así como el manejo y conservación de las especies y áreas protegidas.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-princiapal.svg'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.png'),
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        icono: 'far fa-file-alt',
        numero: '1',
        titulo: 'Fauna silvestre',
        desarrolloContenidos: true,
      },

      {
        nombreRuta: 'tema2',
        icono: 'far fa-file-alt',
        numero: '2',
        titulo: 'Paisajes',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema3',
        icono: 'far fa-file-alt',
        numero: '3',
        titulo: 'Muestreo faunístico',
        desarrolloContenidos: true,
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  complementario: [
    {
      tema: 'Muestreo faunístico',
      referencia:
        'Martínez, C. (2020). <i>Técnicas de muestreo de fauna silvestre</i>.',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=kmLudxYudAo',
    },
    {
      tema: 'Muestreo faunístico',
      referencia:
        'Villagra, P. (2020). <i>Muestreo de poblaciones animales</i>. ',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=8939Jyt2QqI ',
    },
    {
      tema: 'Muestreo faunístico',
      referencia:
        'Ministerio del Ambiente de Perú (2015). <i>Guía de inventario de la fauna silvestre</i>.',
      tipo: 'Guía',
      link:
        'https://www.minam.gob.pe/patrimonio-natural/wp-content/uploads/sites/6/2013/10/GU%C3%83-A-DE-FAUNA-SILVESTRE.compressed.pdf',
    },
    {
      tema: 'Muestreo faunístico',
      referencia:
        'FMCN, CONAFOR, USAID y USFS (2018). <i>Manual para trazar la Unidad de Muestreo en bosques, selvas, zonas áridas y semiáridas, BIOCOMUNI-Monitoreo Comunitario de la Biodiversidad, una guía para núcleos agrarios, Comisión Nacional Forestal-Fondo Mexicano para la Conservación de la Naturaleza, México</i>.',
      tipo: 'Formatos de registro',
      link:
        'https://www.fonnor.org/wp-content/uploads/2019/02/3.-Manual-de-Monitoreo-de-Fauna.pdf ',
    },
  ],
  glosario: [
    {
      termino: 'Cataplasma',
      significado:
        'pasta blanda que se forma con los productos de fauna silvestre.',
    },
    {
      termino: 'Cebos',
      significado:
        'alimentos atrayentes que se instalan dentro de las trampas para atrapar a los animales',
    },
    {
      termino: 'Detritívoro',
      significado: 'que se alimenta de materia orgánica en descomposición ',
    },
    {
      termino: 'Dosel',
      significado:
        'parte alta de los bosques, formada por las copas de los árboles.',
    },
    {
      termino: 'Ecolocación',
      significado: 'ondas sonoras transmitidas por murciélagos para ubicarse.',
    },
    {
      termino: 'Enfermedades zoonóticas',
      significado:
        'enfermedades que son transmitidas por los animales a los humanos.',
    },
    {
      termino: 'Gametos',
      significado:
        'Gametos:	corresponden a las células sexuales masculinas (espermatozoides) y femeninas (óvulos).',
    },
    {
      termino: 'Ovíparos',
      significado:
        'tipo de reproducción que involucra huevos en la que la fecundación se da por fuera de la hembra.',
    },
    {
      termino: 'Ovovivíparo',
      significado:
        'tipo de reproducción que involucra huevos, los cuales son fecundados dentro de la hembra y el embrión sale del huevo después que este es expulsado por la madre.',
    },
    {
      termino: 'Vivíparo',
      significado:
        'tipo de reproducción en el que la fecundación se da dentro de la hembra y el individuo se desarrolla en una estructura diferente al huevo llamada placenta. ',
    },
  ],
  referencias: [
    {
      referencia:
        'Darwin, C. (2020). <i>El Origen de Las Especies Mediante la Selección Natural</i>. Aubiblio.',
    },
    {
      referencia:
        'Espadas, R. & Guiascón, O. (2017). Uso Medicinal de la Fauna Silvestre por Comunidades Mayas, en la Región de Los Chenes, Campeche, México. <i>Revista Etnobiología</i>, 15(2), p. 68-83.',
      link: 'https://revistaetnobiologia.mx/index.php/etno/article/view/136 ',
    },
    {
      referencia:
        'Farias, A. (2019).<i> Captura y manejo de mamíferos medianos y grandes en campo, capítulo 13 Experimentación con animales no tradicionales en Uruguay</i>.',
      link:
        'https://www.chea.edu.uy/sites/chea/files/libro_experimentacion_con_animales_no_tradicionales_en_uruguay.pdf',
    },
    {
      referencia:
        'Lamprea, S., Ochoa, J., Castillo, A., Zárrate, D., Gómez, G., Jiménez, J., Moreno, C. & González, J. (2019). <i>Guía técnica para el manejo de fauna silvestre dentro del territorio CAR</i>.',
      link:
        'https://sie.car.gov.co/bitstream/handle/20.500.11786/37372/37665.pdf?sequence=1&isAllowed=y',
    },
    {
      referencia:
        'Medina, S., Gastélum, E., Lara, E. & Piña, H. (2015). Inventario Participativo de Mamíferos Silvestres en El Ejido San Ignacio, Municipio de Morelos, Chihuahua. <i>Acta Zoológica Mexicana</i>, 31(2), p. 221-233.',
      link:
        'https://pdfs.semanticscholar.org/0402/57b87db6834168cce18eef04a4ea07b6da96.pdf',
    },
    {
      referencia:
        'Pereira, N. (2021).<i> Elaboración de un Manual de Manejo y Toma de Muestras en Fauna Silvestre para la Reserva Natural Cabildo Verde en Sabana de Torres.</i> [Tesis de pregrado, Universidad de Santander, España]. Repositorio Institucional UDES.',
    },
  ],
  creditos: {
    liderEquipo: [
      {
        nombre: 'Maria Camila Garcia Santamaria',
        cargo: 'Líder del equipo',
        centro: 'Dirección General',
      },
    ],
    contenidoInstruccional: [
      {
        nombre: 'Rafael Neftalí Lizcano Reyes',
        cargo: 'Asesor metodológico y pedagógico',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
    ],
    desarrolloProducto: [
      {
        nombre: 'Francisco José Lizcano Reyes',
        cargo: 'Responsable del equipo',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Nombre',
        cargo: 'Diseño web',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Nombre',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Nombre',
        cargo: 'Desarrollo front-end',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Nombre',
        cargo: 'Validación de diseño y contenido',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
    ],
    gestoresRepositorio: [
      {
        nombre: 'Álvaro Andrés Angarita Ramirez',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
      {
        nombre: 'Daniel Felipe Varón Molina',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
      {
        nombre: 'Milady Tatiana Villamil Castellanos',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
    ],
  },
  // creditosInicio: [
  //   {
  //     titulo: 'En alianza',
  //     contenido: [
  //       require('@/assets/template/logo-sena-naranja.svg'),
  //       require('@/assets/template/mintic.jpg'),
  //       require('@/assets/template/minsalud.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'En compañía',
  //     contenido: [
  //       require('@/assets/template/presidencia.jpg'),
  //       require('@/assets/template/ecopetrol.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'Una iniciativa',
  //     contenido: [require('@/assets/template/santander.jpg')],
  //   },
  // ],
}
