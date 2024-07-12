<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-botones
      .titulo-principal__numero
        span 4
      h1  Bodegas de datos
    
    .row.justify-content-center.align-items-center.mb-4
      .col-lg-12.order-lg-1.order-2(data-aos="fade-right")
        p La información de las organizaciones provienen de fuentes de datos heterogéneas, muchas veces sin estar integradas, por lo cual tener reportes e información dispersa por áreas de la organización es un asunto que en la actualidad no debería presentarse, pues el fin de la inteligencia de negocios es facilitar el proceso y la disponibilidad de la información más relevante del negocio; para lograr esto se hace necesario centralizar los datos a través de bodegas de datos o #[em Data Warehouse] (DWH).
    
    
    .row.justify-content-center.mb-2(data-aos="zoom-in")
      .col-lg-10.mb-3.mb-lg-0
        .cajon.BGR07.p-2.mb-0
          .row.justify-content-center.align-items-center.mb-0
            .col-lg-2.p-4
              img.img-a.img-t(alt="" src="@/assets/curso/temas/tema4/img1.svg")
            .col-lg-9.col-12
              p.mb-3 La bodega de datos es una estructura diseñada y desarrollada para almacenar y procesar datos de múltiples fuentes y centralizadas para la elaboración de reportes y datos analíticos.
              

    .row.justify-content-center.align-items-center.mb-4
      .col-lg-8.order-lg-1.order-2(data-aos="fade-right")
        p.mb-4.my-3 Las bodegas de datos son el corazón de la inteligencia de negocios, pues allí se almacena de manera incremental toda la información producida por la organización. De otra parte, cuando se establecen desarrollos completos de analítica de datos es necesario contar con infraestructura y gestión de almacenamiento robustas que den respuesta a las exigencias de la cantidad y variedad de datos que se presentan.
        p.mb-2 Para grandes empresas, es posible que se cuente con especialistas para cada proceso del flujo de datos y el almacenamiento de las bodegas de datos requieren especialistas en gestión de bases de datos y manejar muy bien las arquitecturas y disposición de la información en los diversos clústeres de datos que se puedan emplear.
      .col-lg-4.col-10.order-lg-2.order-1.mb-lg-0(data-aos="fade-left")
        img.img-a.img-t(src="@/assets/curso/temas/tema4/img2.png")
    

    .row.justify-content-center.align-items-center.mb-4(data-aos="zoom-in-left")
      .col-lg-12
        .bloque-texto-a.color-acento-contenido.p-2.p-md-3
          .row.m-0.align-items-center.justify-content-between
            .col-lg-2.col-md-4.mb-4.mb-lg-0
              img.w-75-cus.mx-5.img-a.img-t(src='@/assets/curso/temas/tema4/img3.svg', alt='')
            .col-lg-10
              .bloque-texto-a__texto.p-4
                p.mb-0 Esta estructura contiene diversas tablas de hechos y dimensiones, que permiten estructurar la información para visualizar mejor las tablas que componen la bodega de datos y que se pueden presentar en diversos diseños, como tipo estrella, copo de nieve, constelaciones, etc.



    p.mb-0 El fin de un proceso ETL será la de almacenar la información transformada en una o varias bases de datos destino; de esta manera, muchas pequeñas tareas y transformaciones se van almacenando de forma masiva y centralizada en una base de datos principal denominada #[em Data Warehouse] o bodega de datos.
    
    separador
    #t_4_1.titulo-segundo.color-acento-contenido
      h2 4.1  Diseño de Mercados
    
    .row.justify-content-center.align-items-center
      .col-lg-12.order-lg-1.order-2(data-aos="fade-right")
        p.mb-4 Uno de los aspectos más importantes a tener en cuenta son las tendencias tecnológicas y de consumo, pues a partir de ello los proyectos empiezan a tener aceptación y éxito. Se debe tener siempre presente qué está funcionando en la industria, cuáles son las prácticas de las grandes corporaciones, qué consume el público objetivo y cómo compra, para alinearse hacia estas tendencias buscando mejorar las probabilidades de éxito de las organizaciones.
    
    .row.bgf.align-items-center.py-md-5.p-3
      .col-lg-12.col-12.px-lg-5.px-4
        .row.justify-content-center(data-aos="fade-down")
    
        .row.justify-content-center.mb-0.ch
          .col-lg-4
            p.mb-0
          .col-lg-8.col-md-12.col-12
            .row.justify-content-center.align-items-center
              .col-lg-12
                SlyderF(columnas="col-lg-12 col-md-12 col-12")
                  .tarjeta.tarjeta--slyder.blanco.p-3
                    .row.justify-content-center
                      .col-lg-12
                        p.mb-0.my-5 Las tendencias y estar pendiente de las nuevas herramientas de los proveedores de computación en la nube ayudan a estar a la vanguardia en la implementación de herramientas tecnológicas y permanece competitivo alineándose a las necesidades de los nuevos clientes, cada día con más opciones por ofertas de la competencia haciéndolos al tiempo más y más exigentes pretendiendo soluciones ágiles y eficientes.
                  .tarjeta.tarjeta--slyder.blanco.p-3
                    .row.justify-content-center
                      .col-lg-12
                        p.mb-0 En el proceso mediante el cual la empresa u organización #[b obtiene, procesa y analiza la información de mercado o de la industria en la que compite] conformada por fuentes secundarias puede contener información clave de los clientes, los productos de la competencia, la venta de estos productos, información sobre participación de mercados y perfiles de los clientes, o información específica sobre los posibles canales de distribución como tipos de establecimientos, ubicación geográfica, frecuencias de compra, tamaño o superficie, cantidades de compra con miras a usarla como soporte de sus planes de mercadeo y planeación comercial.  
                  .tarjeta.tarjeta--slyder.blanco.p-3
                    .row.justify-content-center
                      .col-lg-12
                        p.mb-0 Esta información es elaborada por entidades públicas o privadas, instituciones académicas o empresariales que buscan ampliar el conocimiento del sector o brindar cifras estadísticas del comportamiento de las variables. Para el caso colombiano hay empresas como Nielsen, Meiko o Servinformación que se dedican a procesos de investigación de mercados para posteriormente comercializar esta información a empresas interesadas en adquirirla. Brindando información sobre georreferenciación, aspectos demográficos, psicográficos y conductuales.
    

  
    separador
    #t_4_2.titulo-segundo.color-acento-contenido
      h2 4.2  Hechos, dimensiones
    
    .row.justify-content-center.align-items-center.mb-4(data-aos="fade-right")
      .col-lg-12.col-md-12.col-12
        p.mb-0 Las bodegas de datos están representadas en una base de datos que por lo general son de tipo #[em SQL] con un diseño Dimensional, es decir, cada #[em Datamart] cuenta con una tabla de hechos y otras tablas a modo de catálogos que se denominan dimensiones. A continuación.
    
    .row.justify-content-center.align-items-center.mb-4(data-aos="fade-right")      
      .col-sm-12.col-lg-10
        .cajon.color-secu.p-4.mb-lg-0.mb-3
          p.mb-3.my-4.mx-4 #[b Las tablas de hechos (#[em Fact]):] representan los eventos que suceden en determinado contexto-tiempo. Se caracterizan por permitir el análisis de los datos con el máximo detalle, son tablas que no tienen medida y suelen ser tablas más robustas, que contienen miles o millones de registros; además son las que más se actualizan. Por esta razón, cuando las transacciones en los sistemas OLTP son de manera masiva, se debe aplicar ingeniería de optimización de hechos, ya sea traer datos por periodo (snapshot), tablas agregadas, particionadas, etc.

    .row.justify-content-center.align-items-center.mb-4(data-aos="zoom-in")
      .col-sm-12.col-lg-8.mb-3.mb-lg-0
        .bg-555.p-4
          .row.justify-content-center.mx-4
            .col-sm-12.col-lg-10
              p.my-4 Almacenar este tipo de datos requiere una infraestructura robusta, pues en estas contienen la historia de las organizaciones y debe estar en permanente actualización.
            .col-lg-2
              img.my-3.img-a.img-t(src='@/assets/curso/temas/tema4/img6.svg', alt='imagen decorativa') 
    
    .row.justify-content-center.align-items-center.mb-4(data-aos="fade-right")      
      .col-lg-10.col-12
        .cajon.color-secu.p-4.mb-lg-0.mb-3
          p.mb-3.my-4.mx-4  #[b Las tablas de dimensiones:] estas no suelen ser tan dinámicas como los hechos, en las dimensiones se recogen los puntos de análisis de un hecho. Por ejemplo, una venta se puede analizar respecto al día de venta, producto, cliente, vendedor, ciudad, entre otros, a su vez, estos elementos recién nombrados podrían categorizarse como dimensiones, como la dimensión tiempo, dimensión productos, dimensión cliente, etc.
        
    .row.justify-content-center(data-aos="zoom-in")
      .col-lg-8.mb-3.mb-lg-0
        .titulo-sexto.color-acento-contenido.mb-4
          h5 Figura 11.
          span Ejemplo estructura dimensional
        figure
          img(src='@/assets/curso/temas/tema4/img7.png', alt='el diagrama representa la manera en que los contenidos de una tabla de hechos  se puede categorizar como dimensiones, y crear nuevas tablas.')    
    
    separador
    #t_4_3.titulo-segundo.color-acento-contenido
      h2 4.3  Cubos OLAP y ROLAP

    p.mb-3 Los cubos de datos, no son precisamente parte del proceso ETL, los cubos es una estructura en la que la bodega de datos o el #[em Data Warehouse] (DWH) entrega datos para consumirlos a través de visualización en tablas o gráficos multidimensionales.
    
    .row.justify-content-center.align-items-center.mb-4(data-aos="fade-left")
      .col-lg-2.col-8
        img.po.d-none.d-lg-block(alt="" src="@/assets/curso/temas/tema4/img8.svg")
      .col-lg-8.col-12.p-0
        .cajon.BGR08.p-4.mb-0
          .row.justify-content-center
            .col-lg-11.col-12
              p.mb-0 #[b OLAP (#[em OnLine Analytical Processing ]]- Procesamiento Analítico en Línea): se refiere a una estructura multidimensional que contiene información con objetivos analíticos; se compone principalmente de dimensiones y medidas. Las dimensiones definen la estructura del cubo que se utiliza para segmentar y dividir los datos, y las medidas proporcionan valores numéricos.
    p.mb-4 Como estructura lógica, un cubo permite a una aplicación cliente recuperar valores de medidas, como si estuvieran almacenados en las celdas del cubo, adicional se presentan estructuras por jerarquía de datos que podrían definir de alguna manera la profundidad o detalle de las consultas; el ejemplo más común de datos jerárquicos es el tiempo, que tiene año, trimestre, mes, semana, día; esto puede definir el detalle de los reportes.
    
    .row.justify-content-center.align-items-center(data-aos="fade-right")      
      .col-lg-8.col-12
        .cajon.color-serv.p-4.mb-lg-0
          p.mx-0.my-0 #[b Las aplicaciones OLAP] son uno de los pilares de cualquier solución de Inteligencia de Negocios, debido a que provee información sumarizada a los que toman las decisiones, mediante métodos convenientes de navegación que les permiten analizar y mantener una conversación fluida con los datos de la organización, en óptimos tiempos de respuesta.
        p.mb-5.my-3 Parte de la utilidad de los cubos de datos es que podrían ser consumidos por cada área del negocio, es decir, por cada departamento o área tener acceso a sus datos específicos y construir sus reportes en una aplicación local ya sea #[em Excel, Power BI, Tableau] u otro disponible.
      .col-lg-4.col-8
        img.mx-0.my-1.jar.d-none.d-lg-block(alt="" src="@/assets/curso/temas/tema4/img9.png")

    .row.justify-content-center.mb-4(data-aos="zoom-in")
      .col-lg-9.mb-3.mb-lg-0
        .titulo-sexto.color-acento-contenido.mb-3
          h5 Figura 12.
          span Autoconsumo de datos mediante OLAP
        figure
          img(src='@/assets/curso/temas/tema4/img10.svg', alt='el diagrama define la relación entre un Data Warehouse y diferentes tipos de datos (RRHH, financiero, comercial y ventas)  y usuarios finales (Reportes BI, excel, tableau)')    
    
    .row.justify-content-center.align-items-center(data-aos="fade-left")
      .col-lg-2.col-8
        img.poo.d-none.d-lg-block(alt="" src="@/assets/curso/temas/tema4/img8.svg")
      .col-lg-8.col-12.p-0
        .cajon.BGR08.p-4.mb-0
          .row.justify-content-center
            .col-lg-11.col-12
              p.mb-0 #[b ROLAP (procesamiento analítico online relacional)]: a partir de datos tabulares, se construyen cubos con diferentes dimensiones, pero su arquitectura interna se aplica sobre tablas relacionales clásicas. Si bien pudiera ser más rápido su desarrollo, no es muy recomendado, a no ser que no tenga muchas transacciones y los datos del sistema transaccional sean de plena confianza y calidad de datos.

    separador
    #t_4_4.titulo-segundo.color-acento-contenido
      h2 4.4  Llenado de almacén de datos
      
    .row.justify-content-center.align-items-center.mb-0(data-aos="fade-right")      
      .col-lg-12.col-12
        p.mb-4  Existen diversos conceptos del llenado de datos para la bodega de datos o almacén de datos #[em (Data Warehouse),] se presentan diversas arquitecturas, en otros materiales de formación se amplía los dos modelos predominantes: modelo #[em Inmon] y el modelo #[em Kimball]. Independientemente del modelo empleado, todos los procesos ETL contienen los tres elementos principales: extracción, transformación y carga.
    
    .row.justify-content-center.mb-4(data-aos="zoom-in")
      .col-lg-12.mb-3.mb-lg-0
        .titulo-sexto.color-acento-contenido.mb-3
          h5 Figura 13.
          span Arquitectura inteligencia de negocios
        figure
          img.mb-4(src='@/assets/curso/temas/tema4/img12.svg', alt='La imagen muestra un diagrama del proceso de ETL y el desarrollo de reportes en un sistema de almacenamiento de datos, se representa el flujo desde la extracción de datos hasta la construcción de informes para el consumo de los datos.')    
    
    .row.justify-content-center.align-items-center.mb-0(data-aos="fade-right")      
      .col-lg-12.col-12
        .cajon.color-bloq.p-5.mb-lg-0.mb-3
          p.mb-4 La arquitectura o estructura completa se puede resumir en dos grandes procesos: el proceso ETL y el desarrollo de reportes con los cuales los datos toman valor y conocimiento para el negocio.
          p.mb-0 #[b ETL:] consta de tres etapas, el desarrollador de inteligencia de negocio deberá tener en cuenta la extracción, identificando las fuentes de datos de los sistemas OLPT y otros no transaccionales, pero que aportan al conocimiento del negocio, así como su transformación y carga en bases de datos robustas que conservan las dimensiones, tablas de hechos y medidas de pertinentes.
    
    .mb-5
    p.mb-4 #[b La extracción de datos de los procesos:] las organizaciones actuales, tienen enfoques hacia los procesos, y todos los procesos deberían de ir asociados de manera directa o indirecta a los clientes; de allí se denomina que organizaciones no dependen de personas sino de procesos y adicional, tienen enfoque hacia el cliente.
    
    .row.justify-content-center.align-items-center.mb-2(data-aos="fade-left")
      .col-lg-4.col-8
        img.mb-lg-0.mb-3(src="@/assets/curso/temas/tema4/img13.svg" alt="")
      .col-lg-8.col-12
        .cajon.color-serv.p-4.mb-3.my-1
          p.mb-3 En este sentido, cada proceso o área de la organización, debe tener claridad no solo sus funciones, sino además los objetivos y las metas según las funciones en toda la cadena general de la empresa. 
          p.mb-0 Si bien algunas empresas consideran que no tienen necesidad de capturar datos de sus procesos, pues cada área tiene un responsable y basta con que la gerencia llame a cada uno de estos líderes para saber cómo va el negocio; aunque es tradicional, este enfoque no es el más adecuado; y menos cuando existen las posibilidades de la analítica y la inteligencia de negocios al alcance de todos.
        p Otro caso particular, entre muchas empresas, es que usan los programas informáticos en alguna de sus áreas, pero no se encuentran integrados o relacionados. Si bien usan tecnología digital para mejorar y optimizar tareas y procesos, ante los ojos de la gerencia y desde la mirada holística corporativa podría existir carencia de sinergia; en el mismo caso en que la gerencia requiera información sobre su negocio, deberá llamar o solicitar a cada líder los informes para que se sepa cómo marcha la organización.
    
    .row.justify-content-center.align-items-center.mb-4(data-aos="fade-left")
      .col-lg-1.col-12
        img.d-none.d-lg-block(src="@/assets/curso/temas/tema4/puntos.svg" alt="")
      .col-lg-11.col-12
        p.mb-0 Un elemento indispensable para la gestión de los datos en las organizaciones es determinar área por área los métodos y tecnologías que usan para la captura de los registros o de los hechos de cada departamento. Algunos requisitos de captura de datos de todas las áreas deberán cumplir con los siguientes parámetros:
    
    .row(data-aos="zoom-in")
      .col-lg-7.mb-4.my-4
        AcordionA.activo(tipo="a" clase-tarjeta="tarjeta tarjeta--gris")
          .row(titulo="[Qué] Registrar hechos. ")
            .col-12.ps-5
                  p.mb-0 Todas las áreas deben registrar las tareas o acciones (compras, terminación de tareas, visitas, publicación de campañas, etc.). 

          .row(titulo="[Cuándo] Registrar momentos. ")
            .col-12.ps-5
                  p.mb-0 Una de las características de la analítica es llevar una historia, no es posible que exista una historia si no hay fechas. Es importante determinar las fechas de cada hecho. 
                    
          .row(titulo="[Quién] Registrar responsable. ")
            .col-12.ps-5
                  p.mb-0 Cada tarea deberá tener un responsable, más cuando hay tareas entre diferentes áreas, de esta manera es posible identificar quién o en dónde se encuentran los embudos en los diferentes o procesos del negocio.

          .row(titulo="[Cuánto] Registrar cantidades. ")
            .col-12.ps-5
                  p.mb-0 La mayoría de los hechos, contienen un número que acompaña las características, ejemplo, una venta tiene detalles como cantidad de elementos y un monto de dinero, estas cifras siempre deberán registrarse; en otras tareas, como por ejemplo aprobar una solicitud, donde no hay un monto numérico si contiene un estado, por lo que también debe registrar los estados de estas tareas. 

          .row(titulo="[A quién o de quién] Registrar clientes o proveedores. ")
            .col-12.ps-5
                  p.mb-0 Cada hecho o acción debe tener un cliente, si bien puede ser externo como las ventas también podría ser interno, por ejemplo, la aprobación de presupuesto, el cliente interno sería la dirección responsable de lo financiero; todos los hechos deben tener a quién para quién se le hace la acción. 
          
                                                
      .col-lg-5(data-aos="fade-left")
        figure.d-lg-block.d-none
          img(src='@/assets/curso/temas/tema4/img14.png', alt='imagen decorativa') 
    
    
      p.mb-4 No basta con tener registrados estos cinco mínimos componentes de las tareas más relevantes para que los datos muestran una radiografía clara sobre cada proceso. Además, es importante tener claridad sobre la calidad de los datos para que se puedan integrar y tener plena confianza. 
    
    
    .tarjeta--container.parr.row.mb-4
      .col-md.tarjeta.color-priimario.p-4.p-lg-5
        .row.justify-content-center.mb-4
          .h4.text-center.mb-4 La transformación e integración de datos:
          .col-6.col-md-6.col-lg-4
            img.mb-3(src="@/assets/curso/temas/tema4/img15.svg")
        
        p.mb-5 Cuando se tienen identificadas las fuentes de datos de cada área, se procede a extraer estos datos, se debe emplear metodologías para que los datos tengan una copia óptima en sistemas de almacenamiento centralizados y homogeneizados que garanticen la calidad de los datos y estén disponibles para la realización de reportes de todas las áreas.
      
      .col-md.tarjetas.color-acento-contenidot.p-4.p-lg-5
        .row.justify-content-center.mb-4
          .h4.text-center.mb-4 Diseño de reportes:
          .col-6.col-md-6.col-lg-4
            img.mb-3(src="@/assets/curso/temas/tema4/img16.svg")
        
        p Si bien estrictamente esta etapa no corresponde al proceso ETL, el objetivo es que todos esos datos recolectados, copiados y optimizados sean consumidos por el nivel de decisión, no necesariamente son los gerentes, los empleados también deben conocer sus gestiones y resultados en gráficos y dashboards que den cuenta de su propio rendimiento, allí también se genera una acción de autoevaluación y toman decisiones sobre sus propias funciones en la empresa.
    
    p En términos generales, la gerencia ya no tendrá que llamar a los líderes de cada proceso para que les dé explicación de una situación general, ya las directivas tendrán las cifras en sus teléfonos celulares, en cualquier lugar a cualquier hora. Esto permite tener empresas más eficientes, con capacidad de reaccionar más pronto y tomar mejores decisiones. 

</template>

<script>
export default {
  name: 'Tema4',
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
