export default {
  global: {
    componenteFormativo: 'Proceso de integración de datos y ETL',
    descripcionCurso:
      'El recurso educativo presenta los conceptos, teorías, técnicas y herramientas empleadas en sistematización de datos. Se dan las pautas de las metodologías y paradigmas usados para el proceso ETL, el cual quizás, es el más importante a nivel técnico en la gestión de información, para la transformación y carga que deben realizarse para la visualización y análisis de datos. ',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-principal.svg'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.jpg'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-1.svg'),
      },
      {
        clases: ['banner-principal-decorativo-2'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-2.svg'),
      },
    ],
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
        icono: 'fas fa-info-circle',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        numero: '1',
        titulo: 'Extracción y minería de datos',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema2',
        numero: '2',
        titulo: 'Técnicas de limpieza y transformación de datos',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '2.1',
            titulo: 'Open Refine',
            hash: 't_2_1',
          },
          {
            numero: '2.2',
            titulo: 'Astera',
            hash: 't_2_2',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        numero: '3',
        titulo: 'Modelo de datos transaccionales',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '3.1',
            titulo: 'OLTP',
            hash: 't_3_1',
          },
          {
            numero: '3.2',
            titulo: 'SQL',
            hash: 't_3_2',
          },
          {
            numero: '3.3',
            titulo: 'NO-SQL',
            hash: 't_3_2',
          },
        ],
      },
      {
        nombreRuta: 'tema4',
        numero: '4',
        titulo: 'Bodegas de datos',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '4.1',
            titulo: 'Diseño de Mercados',
            hash: 't_4_1',
          },
          {
            numero: '4.2',
            titulo: 'Hechos, dimensiones',
            hash: 't_4_2',
          },
          {
            numero: '4.3',
            titulo: 'Cubos OLAP y ROLAP',
            hash: 't_4_3',
          },
          {
            numero: '4.4',
            titulo: 'Llenado de almacén de datos',
            hash: 't_4_4',
          },
        ],
      },
      {
        nombreRuta: 'tema5',
        numero: '5',
        titulo: 'Herramientas Tecnológicas de ETL',
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
        icono: 'fas fa-file-pdf',
        titulo: 'Descargar PDF',
        download: 'downloads/prueba.pdf',
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
      tema: 'Extracción y minería de datos',
      referencia:
        'Conesa Caralt, J. & Curto Díaz, J. (2013). Introducción al Business Intelligence.. Editorial UOC. https://elibro-net.bdigital.sena.edu.co/es/lc/senavirtual/titulos/56524 ',
      tipo: 'Libro ',
      link:
        'https://elibro-net.bdigital.sena.edu.co/es/lc/senavirtual/titulos/56524 ',
    },
    {
      tema: 'Astera',
      referencia:
        'Astera software. (2020). Extracción de PDF y exportación a Excel en Astera ReportMiner [Archivo de Vídeo]. YouTube. https://youtu.be/Fzk4wgYhY4Y ',
      tipo: 'Video ',
      link: 'https://youtu.be/Fzk4wgYhY4Y',
    },
    {
      tema: 'SQL',
      referencia:
        'Quintana, G. (2014). Aprende SQL Repositorio Sena eLibro. https://elibro-net.bdigital.sena.edu.co/es/lc/senavirtual/titulos/53252 ',
      tipo: 'Libro ',
      link:
        'https://elibro-net.bdigital.sena.edu.co/es/lc/senavirtual/titulos/53252  ',
    },
    {
      tema: 'NO-SQL',
      referencia:
        'Canal Ecosistema de Recursos Educativos Digitales SENA. (13 de diciembre de 2021). NOSQL [Archivo de Vídeo]. ',
      tipo: 'Video clase ',
      link: 'https://youtu.be/u1IKJMISMgs  ',
    },
    {
      tema: ' Herramientas Tecnológicas de ETL',
      referencia:
        'Apps Run The World. (2021). Top 10 Analytics and BI Software Vendors, Market Size and Market Forecast 2021-2026. https://www.appsruntheworld.com/top-10-analytics-and-bi-software-vendors-and-market-forecast/ ',
      tipo: 'Artículo ',
      link:
        'https://www.appsruntheworld.com/top-10-analytics-and-bi-software-vendors-and-market-forecast/ ',
    },
  ],
  glosario: [
    {
      termino: 'Bytes ',
      significado:
        'Unidad de medida de información. 1 byte corresponde a 8 bits, y a partir de esta unidad se determina el volumen de la información. ',
    },
    {
      termino: 'Dashboard ',
      significado:
        'Tableros de mando, es el recurso que resulta a partir del proceso de ETL. Es la manera de consumir datos y proporcionar conocimiento del negocio ',
    },
    {
      termino: '<em>Datamart</em>',
      significado:
        'Es la versión específica de cada área del Data Warehouse, son los datos concentrados por cada área del negocio. Son subconjuntos de colección de datos que alimentan a la bodega de datos y el resto de los recursos analíticos ',
    },
    {
      termino: '<em>Machine Learning </em>',
      significado:
        'Area de la IA que se responsabiliza de procesos de aprendizaje en el contexto de los datos se establecen aprendizaje supervisado y no supervisado, dependiendo del modelo de aprendizaje se establecen los algoritmos para desarrollar modelos predictivos y prescriptivos según el modelo analítico. ',
    },
    {
      termino: 'IDE ',
      significado:
        '"Integrated Development Environment", en su traducción: Entorno de desarrollo integrado, se trata de una herramienta o entorno que integra otras herramientas, de esta manera el desarrollador no se preocupa de instalar recursos adicionales, todo estará en una sola herramienta que integra otras para que así, el profesional se dedique solo a la programación ',
    },
    {
      termino: 'IA ',
      significado:
        'Abreviación de Inteligencia artificial. Área informática que simula procesos cognitivos humanos tales como aprendizaje, decisiones, y procesos complejos. ',
    },
  ],
  referencias: [
    {
      referencia:
        'Curto Díaz, J. (2016). Introducción al business intelligence. Barcelona: Editorial UOC. eLibro.',
      link:
        'https://elibro-net.bdigital.sena.edu.co/es/lc/senavirtual/titulos/101030 ',
    },
    {
      referencia:
        'Gorenés Roig, J., Casas Roma, J., & Minguillón Alfonso, J. (2017). Minería de datos: modelos y algoritmos. Barcelona: Editorial UOC. eLibro.',
      link:
        ' https://elibro-net.bdigital.sena.edu.co/es/lc/senavirtual/titulos/58656',
    },
    {
      referencia:
        'Pang, A., Markovski, M., & Ristik, M. (22 de septiembre de 2022). Los 10 principales proveedores de software de análisis y BI, tamaño del mercado y pronóstico del mercado 2021-2026. Apps Run the World.',
      link:
        'https://www.appsruntheworld.com/top-10-analytics-and-bi-software-vendors-and-market-forecast/',
    },
    {
      referencia:
        'Stibo system MDM. (octubre de 2019). ¿Qué es la gestión de datos maestros?. Stibo system.',
      link: 'https://www.stibosystems.com/es/what-is-master-data-management',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Milady Tatiana Villamil Castellanos',
          cargo: 'Responsable del Ecosistema',
          centro: 'Dirección General',
        },
        {
          nombre: 'Olga Constanza Bermúdez Jaimes',
          cargo: 'Responsable de Línea de Producción',
          centro: 'Centro de Servicios de Salud - Regional Antioquia',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Jaime Hernán Tejada ',
          cargo: 'Experto Temático ',
          centro: 'Regional Norte de Santander- Centro CIES',
        },
        {
          nombre: 'Giovanna Andrea Escobar Ospina ',
          cargo: 'Diseñador Instruccional ',
          centro: 'Regional Norte de Santander- Centro CIES ',
        },
        {
          nombre: 'Silvia Milena Sequeda Cárdenas ',
          cargo: 'Asesora pedagógica y metodológica  ',
          centro: 'Regional Distrito Capital - Centro de Diseño y Metrología ',
        },
        {
          nombre: 'Rafael Neftalí Lizcano Reyes ',
          cargo: 'Responsable Desarrollo Curricular ',
          centro:
            'Regional Santander - Centro Industrial del Diseño y la Manufactura. ',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Giovanna Andrea Escobar Ospina',
          cargo: 'Diseñador de Contenidos Digitales',
          centro: 'Centro de Servicios de Salud - Regional Antioquia',
        },
        {
          nombre: 'Pedro Alonso Bolivar Gonzalez',
          cargo: 'Desarrollador Fullstack',
          centro: 'Centro de Servicios de Salud - Regional Antioquia',
        },
        {
          nombre: 'Nombre',
          cargo: 'Animador y Producción audiovisual',
          centro: 'Centro de Servicios de Salud - Regional Antioquia',
        },
        {
          nombre: 'Nombre',
          cargo: 'Actividad Didáctica',
          centro: 'Centro de Servicios de Salud - Regional Antioquia',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: 'Luis Gabriel Urueta Alvarez',
          cargo: 'Validador de Recursos Educativos Digitales',
          centro: 'Centro de Servicios de Salud - Regional Antioquia',
        },
        {
          nombre: 'Jaime Hernan Tejada',
          cargo: 'Validador de Recursos Educativos Digitales',
          centro: 'Centro de Servicios de Salud - Regional Antioquia',
        },
        {
          nombre: 'Daniel Ricardo Mutis Gómez',
          cargo: 'Evaluador para contenidos inclusivos y accesibles',
          centro: 'Centro de Servicios de Salud - Regional Antioquia',
        },
        {
          nombre: 'Margarita Marcela Medrano',
          cargo: 'Evaluador para contenidos inclusivos y accesibles',
          centro: 'Centro de Servicios de Salud - Regional Antioquia',
        },
      ],
    },
  ],
  creditosAdicionales: {
    imagenes:
      'Fotografías y vectores tomados de <a href="https://www.freepik.es/" target="_blank">www.freepik.es</a>, <a href="https://www.shutterstock.com/" target="_blank">www.shutterstock.com</a>, <a href="https://unsplash.com/" target="_blank">unsplash.com </a>y <a href="https://www.flaticon.com/" target="_blank">www.flaticon.com</a>',
    creativeCommons:
      'Licencia creative commons CC BY-NC-SA<br><a href="https://creativecommons.org/licenses/by-nc-sa/2.0/" target="_blank">ver licencia</a>',
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
