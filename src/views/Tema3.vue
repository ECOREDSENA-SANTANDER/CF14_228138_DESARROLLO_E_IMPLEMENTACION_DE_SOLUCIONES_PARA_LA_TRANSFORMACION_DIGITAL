<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 3
      h1  Modelo de datos transaccionales
    
    .row.justify-content-center.align-items-center.mb-4(data-aos="fade-left")
      .col-lg-4.col-8
        img.mb-lg-0.mb-3(src="@/assets/curso/temas/tema3/img1.png" alt="")
      .col-lg-8.col-12
        p Desde el contexto de inteligencia de negocios, los sistemas transaccionales son las fuentes de datos que alimentan los sistemas ETL, si bien existen otras fuentes tales como reportes de internet (analíticas de web y redes sociales, entre otros), archivos multimedia, archivos planos, tablas de Excel, etc. Los sistemas transaccionales son las fuentes más convencionales en las fases de carga y transformación. 
        .cajon.color-secundario.p-4.mb-4
          p.mb-0 Los modelos de administración de datos se basan en ubicar donde se almacena la información, así como la extracción o consulta de la misma; estos son:
    
      .tarjeta.tarjeta--azul.p-3.py-5.mb-0
        SlyderA(tipo="b")
          .row.justify-content-center
            .col-lg-5.col-12
              h4.mb-4 Por rango
              p.mb-lg-0.mb-3 Se utiliza cuando se administra una gran cantidad de información y se hace como un árbol invertido donde la raíz es la fuente de datos y las hojas no producen información, tiene falencias cuando los datos son repetidos o redundantes.
            .col-lg-5.col-8  
              img.mb-0(alt="" src="@/assets/curso/temas/tema3/img3.1.svg")

          .row.justify-content-center
            .col-lg-5.col-12
              h4.mb-4 Por red
              p.mb-lg-0.mb-3 Se utiliza para resolver solución frente a gran volumen de datos evitando la redundancia, pero tiene fallas en el proceso de administración.
            .col-lg-5.col-8
              img.mb-5(alt="" src="@/assets/curso/temas/tema3/img3.2.svg")

          .row.justify-content-center
            .col-lg-5.col-12
              h4.mb-4 Multidimensional
              p.mb-lg-0.mb-3 Se maneja para actividades directas y concretas de forma eficiente, brinda soluciones tipo relacional.
            .col-lg-5.col-8
              img.mb-0(alt="" src="@/assets/curso/temas/tema3/img3.3.svg")

          .row.justify-content-center
            .col-lg-5.col-12
              h4.mb-4 Por transacciones
              p.mb-lg-0.mb-3 Se utiliza para remitir y recibir información de forma rápida y su uso debe contar con un buen sistema, ya que las operaciones que se generen deben ser al mismo tiempo, es decir, envío y recepción inmediata para garantizar el uso óptimo.
            .col-lg-5.col-8
              img.mb-0(alt="" src="@/assets/curso/temas/tema3/img3.4.svg")

          .row.justify-content-center
            .col-lg-5.col-12
              h4.mb-4 Por guía a objetos
              p.mb-lg-0.mb-3 Este modelo hace uso de su administración y creación por funciones lo que permite manejar programas y operaciones por separado, tiene la capacidad de trabajar sobre volúmenes altos de información de forma óptima.
            .col-lg-5.col-8
              img.mb-0(alt="" src="@/assets/curso/temas/tema3/img3.5.svg")

          .row.justify-content-center
            .col-lg-5.col-12
              h4.mb-4 Por relación
              p.mb-lg-0.mb-3 Se utiliza para dar solución a situaciones reales y que la administración de los datos sea totalmente dinámica, tiene la facilidad de manejar volúmenes grandes de información de forma eficiente
            .col-lg-5.col-8
              img.mb-0(alt="" src="@/assets/curso/temas/tema3/img3.6.svg")

          .row.justify-content-center
            .col-lg-5.col-12
              h4.mb-4 Por distribución
              p.mb-lg-0.mb-3 Este modelo contempla su administración a través de la red en diferentes sitios, generando varias opciones para su edición y control; contiene alta capacidad de volumen de datos.
            .col-lg-5.col-8
              img.mb-0(alt="" src="@/assets/curso/temas/tema3/img3.7.svg")

          .row.justify-content-center
            .col-lg-5.col-12
              h4.mb-4 Por deducción
              p.mb-lg-0.mb-3 Su administración se basa en situaciones presentadas, a través de la lógica que brinda las matemáticas, tiene la capacidad de almacenar y manejar volúmenes altos de datos.
            .col-lg-5.col-8
              img.mb-0(alt="" src="@/assets/curso/temas/tema3/img3.8.svg")

    separador
    #t_3_1.titulo-segundo.color-acento-contenido
      h2 3.1  OLTP

    .row.justify-content-center.align-items-center.mb-5(data-aos="fade-right")
      .col-lg-12.col-12
        .bloque-texto-g.color-acento-contenido.p-lg-5.p-2
          .bloque-texto-g__img(
            :style="{'background-image': `url(${require('@/assets/curso/temas/tema3/img4.svg')})`}"
          )
          .bloque-texto-g__texto.p-lg-4.py-lg-5.p-2
            p.mb-0 El procesamiento de transacciones en línea (Online Transaction Processing), en las gráficas típicas de los ETL, aparecen los OLTP como fuentes importantes de datos, esto se refiere a sistemas de información desarrollados o implementados en áreas específicas del negocio. Sirven como apoyo tecnológico específico de un área en particular; estas aplicaciones pueden ser de tipo administrativo en lo referente a las transacciones de las dependencias como Talento humano, área financiera, contable, nómina, etc.
    p Otro tipo de aplicaciones de apoyo, son aquellas que se emplean en los procesos de producción, por ejemplo, si una compañía se dedica a la comercialización de productos de infraestructuras y equipos eléctricos de gran envergadura, tendrá un área de mercadeo, otra de ofertas, licitaciones y ventas.
    
    .row.justify-content-center.align-items-center.mb-0(data-aos="fade-right")      
        .col-lg-8.col-12
          .cajon.color-secunda.p-4.mb-lg-0.mb-3
            p.mb-0  Si bien pueden ser áreas separadas, tienen entre sí una cadena que debe estar bien tejida y coordinada para mejorar los procesos; por ejemplo, el departamento de mercadeo para detectar clientes potenciales con alta probabilidad de compra, estos solicitan la cotización de un proyecto. El área de ofertas construye el proyecto y el camino ideal es que el departamento de ventas cierre el negocio. De manera resumida es muy fácil explicarlo, sin embargo, no lo es, pues se debe tener registros de cada paso; es decir, desde las campañas de mercadeo, hasta el momento que el cliente pide cotización y luego la respuesta de la oferta para finalizar la fecha de la confirmación y cierre del negocio; pero no solo tiene que ver con momentos y acciones, también se involucran personas para saber quién es el responsable, identificar plenamente el cliente y otros detalles.
        .col-lg-4.col-8
          img.mb-0(alt="" src="@/assets/curso/temas/tema3/img5.svg")

    p.mb-0 Adicionalmente, se debe llevar registro no solo de quienes cierran el negocio, es clave en este caso, tener todos los datos entre la campaña marketing, eficiencia de las ofertas y eficacia de los vendedores para determinar el porcentaje de éxito del negocio.<br><br>
        
    .row.justify-content-center.align-items-center.mb-4(data-aos="fade-left")
      .col-lg-1.col-12
        img.mb-lg-0.mb-3(src="@/assets/curso/temas/tema4/img17.svg" alt="")
      .col-lg-11.col-12
          p.mb-0 Los datos que se surgen de estos sistemas, serán claves para el proceso de centralización, limpieza e integración de datos del negocio y como ejemplo se ilustra en la siguiente figura.    
        
        

    .row.justify-content-center.mb-4(data-aos="zoom-in")
      .col-lg-6.mb-3.mb-lg-0
        .titulo-sexto.color-acento-contenido.mb-3
          h5 Figura 3
          span Sistemas transaccionales OLTP  
          
        figure
          img(src='@/assets/curso/temas/tema3/img6.svg', alt='Texto que describa la imagen')
          
    p.mb-5 Estos son ejemplos de sistemas transaccionales basados en OLTP que, generalmente, existen en las organizaciones.<br><br>También hay otras fuentes de información que se deben tener en cuenta, pues no todas las áreas funcionan con aplicaciones conectadas a bases de datos, además, existen procesos que podrían llegar a ser muy eficientes y con información adecuada que alimente el sistema de inteligencia de negocios con el uso de otros recursos, esto se conoce como fuentes de no transaccionales y las más comunes son:
    
    .row(data-aos="zoom-in")
      .col-lg-7.mb-4
        AcordionA(tipo="a" clase-tarjeta="tarjeta tarjeta--gris")
          .row(titulo="Hojas de cálculo")
            .col-12.ps-5
                  p.mb-0 Este tipo de información, aunque suele ser compleja en su calidad de datos y consistencia, no se deben descartar y, si es el caso, apoyar al proceso para optimizar su flujo de datos hacia el sistema BI. Para emplear estos recursos se hace necesario que exista un responsable que entregue o cargue de manera periódica los archivos actualizados para ir incrementando los datos.

          .row(titulo="Archivos planos")
            .col-12.ps-5
                  p.mb-0 Por lo general en CSV o TXT, suelen ser exportaciones de sistemas que no permiten conexión directa a las bases de datos.
                    
          .row(titulo="Fuentes externas")
            .col-12.ps-5
                  p.mb-0 Dependiendo de la solución, se hace necesario cruzar datos abiertos ya sea para garantizar consistencias o para incluir datos de big data. Por ejemplo: traer información del clima de cada ciudad de operaciones podría incluirse en los reportes de analítica en caso de presentarse la hipótesis de que el clima influencia con las ventas.

          .row(titulo="Internet de las cosas (IoT).")
            .col-12.ps-5
                  p.mb-0 Cada vez se usan sensores y dispositivos que registran acciones; los datos de estas tecnologías podrían incluirse en los sistemas de inteligencia de negocios para monitorear accesos, procesos de producción y otros controles que podrían estar también a disposición del nivel de decisión.

          .row(titulo="Analítica de internet")
            .col-12.ps-5
                  p.mb-0 Los sitios web, redes sociales y comercios electrónicos tienen sus herramientas propias para llevar reportes sobre diferentes estadísticas y mediciones, estas herramientas se pueden conectar a los tableros de mando o reportes que se realizan para la organización.
          
                                                
      .col-lg-5.mb-4(data-aos="fade-left")
        figure.d-lg-block.d-none
          img(src='@/assets/curso/temas/tema3/img7.svg', alt='imagen decorativa') 
    
    separador
    #t_3_2.titulo-segundo.color-acento-contenido
      h2 3.2  SQL
    
    .row.justify-content-center.align-items-center.mb-4(data-aos="fade-left")
      .col-lg-4.col-8
        img.mb-lg-0.mb-3(src="@/assets/curso/temas/tema3/img8.svg" alt="")
      .col-lg-8.col-12
        p.mb-0 Lenguaje estructurado de datos (Structured Query Language); es un lenguaje de programación para la gestión de bases de datos, a través de sentencias SQL, se accede y manipula datos de cualquier base de datos relacional del mercado, entre las más comunes MySQL, ORACLE, DB2, SQL SERVER, etc.<br><br>Como todo lenguaje, se compone de sentencias, cada una con utilidades y funciones diferentes; para administrar bases de datos y ejecutar sentencias SQL es necesario también un ambiente de desarrollo llamado IDE; existen múltiples opciones, las más recomendadas para descargar a la computadora son:
    
    .tarjeta--container.row.mb-5
      .col-md.tarjeta.color-secundari.p-5(data-aos="flip-right")
        .row.justify-content.mb-4
          .col-3
            img(src="@/assets/curso/temas/tema3/img18.svg")
            p <b> DB Browser for SQLite.</b>
          p Aplicación liviana y muy fácil de instalar y manejar.
        a.anexo.mb-4.mb-lg-0(href="https://en.wikipedia.org/wiki/Main_Page" target="_blank")
          .anexo__icono
            img(src="@/assets/template/icono-link.svg")
          .anexo__texto
            p Sitio web.
            p https://sqlitebrowser.org/

      .col-md.bg--piel.br.p-5(data-aos="flip-left")
        .row.justify-content.mb-4
          .col-3
            img(src="@/assets/curso/temas/tema3/img19.svg")
            p <b> MySQL Workbnech</b>
          p.mb-0 Es una herramienta muy popular entre los desarrolladores, es de uso libre y presenta muy buenas funciones para la gestión. 
        a.anexo.mb-4.mb-lg-0(href="https://en.wikipedia.org/wiki/Main_Page" target="_blank")
          .anexo__icono
            img(src="@/assets/template/icono-link.svg")
          .anexo__texto
            p Sitio web.
            p https://www.mysql.com/products/workbench/


    

      p.mb-0 Independientemente del ambiente y herramienta seleccionada (ya sea de uso libre o de pago), la mayoría cuentan con el siguiente esquema visual.

    .row.justify-content-center.mb-4(data-aos="zoom-in")
      .col-lg-10.mb-3.mb-lg-0
        .titulo-sexto.color-acento-contenido.mb-3
          h5 Figura 4
          span Ambiente de las herramientas de gestion de bases de datos.
        figure
          img(src='@/assets/curso/temas/tema3/img10.png', alt='Texto que describa la imagen')
      
      p.mb-0 <b>A continuación, se presentan las sentencias de gestión de estructura de datos, más usadas:</b><br><br>

      .row.justify-content(data-aos="fade-left")
        .col-lg-5.col-12.d-flex
          .px-lg-4.py-lg-4.px-3.mb-lg-0.mb-3.w-100.tarjeta1.p-3
            ul.lista-ul--color.mb-0
              li.mb-0
                i.fas.fa-check(style="color:#FF6148")
                p.mb-0 <b>CREATE TABLE</b> crear una tabla.
              li.mb-0
                i.fas.fa-check(style="color:#FF6148")
                p.mb-0 <b>NULL</b> para indicar valor nulo (ninguno).
              li.mb-0
                i.fas.fa-check(style="color:#FF6148")
                p.mb-0 <b>UNIQUE</b> limita a un único valor en un campo.
              li.mb-0
                i.fas.fa-check(style="color:#FF6148")
                p.mb-0 <b>PRIMARY KEY</b> asigna identificadora un campo.
              li.mb-0
                i.fas.fa-check(style="color:#FF6148")
                p.mb-0 <b>DROP</b> eliminar tabla o base de datos completa.
              li.mb-0
                i.fas.fa-check(style="color:#FF6148")
                p.mb-0 <b>TRUNCATE</b> borrar datos completos de una tabla.

      p.mb-0 <b>Las sentencias básicas de consulta:</b>        
      
      .row.justify-content(data-aos="fade-left")
        .col-lg-5.col-12.d-flex
          .px-lg-4.py-lg-4.px-3.mb-lg-0.mb-3.w-100.tarjeta1.p-3
            ul.lista-ul--color.mb-0
              li.mb-0
                i.fas.fa-check(style="color:#FF6148")
                p.mb-0 <b>SELECT</b> para llamar datos.
              li.mb-0
                i.fas.fa-check(style="color:#FF6148")
                p.mb-0 <b>WHERE</b> para incluir condiciones.
              li.mb-0
                i.fas.fa-check(style="color:#FF6148")
                p.mb-0 <b>ORDER BY</b> ordenar los resultados.
              li.mb-0
                i.fas.fa-check(style="color:#FF6148")
                p.mb-0 <b>INSERT INTO</b> para adicionar o insertar datos.
              li.mb-0
                i.fas.fa-check(style="color:#FF6148")
                p.mb-0 <b>UPDATE</b> para actualizar datos.
              li.mb-0
                i.fas.fa-check(style="color:#FF6148")
                p.mb-0 <b>DELETE</b> para borrar datos.
        
        p.mb-0 <b>Las sentencias avanzadas:</b>  
        .row.justify-content(data-aos="fade-left")
          .col-lg-5.col-12.d-flex
            .px-lg-4.py-lg-4.px-3.mb-lg-0.mb-3.w-100.tarjeta2.p-3
              ul.lista-ul--color.mb-0
                li.mb-0
                  i.fas.fa-check(style="color:#FF6148")
                  p.mb-0 <b>LIMIT </b> el número de registros de consulta.
                li.mb-0
                  i.fas.fa-check(style="color:#FF6148")
                  p.mb-0 <b>LIKE</b> busca en datos alfanuméricos por patrones dados.
                li.mb-0
                  i.fas.fa-check(style="color:#FF6148")
                  p.mb-0 <b>JOIN </b> unir o combinar datos de diferentes tablas.
            

      p.mb-0 Para llevar a la práctica los primeros pasos con las sentencias SQL, se usará un recurso en línea que, además de tener el ambiente gráfico para construir y ejecutar sentencias SQL, ya tiene una base de datos precargada para manipular los datos.

    .bg_cta.p-3.mb-5(data-aos="zoom-in")
      .row.justify-content-around.align-items-center
        .col-auto
          img(src="@/assets/curso/temas/tema3/extra.svg").img75
        .col
          .row.justify-content-between.align-items-center
            .col.mb-3.mb-sm-0  
              h3.text-white Programiz Online SQL Editor          
              p.text-white.mb-0 Ingresar a la plataforma:
            .col-sm-auto
              a.boton.color-acento-botones(href="https://www.programiz.com/sql/online-compiler" target="_blank")
                span ir al sitio
                i.fas.fab-youtube

    p.mb-0 <b>Este ambiente cuenta con una base de datos que contiene tres tablas: customers, orders y shipings. Realiza los siguiente ejercicios y práctica de las sentencias SQL que se proponen a continuación:</b>
    
    .row.justify-content-center.mb-4(data-aos="zoom-in")
          .col-lg-8.mb-3.mb-lg-0
            .bg-49.p-4
    
              p.mb-0 <b>Sentencia: Select.</b>
              p Para iniciar, el ejemplo sencillo de presentar todas las columnas de la tabla Orders.
    
    .row.justify-content-center.mb-4(data-aos="zoom-in")
      .col-lg-8.mb-3.mb-lg-0
        .titulo-sexto.color-acento-contenido.mb-3
          h5 Figura 5
          span Sentencia simple de SQL
        
        figure
          img(src='@/assets/curso/temas/tema3/img11.png', alt='Texto que describa la imagen')
      
      p.mb-0 <b>Ahora, se ejecuta una sentencia que solo llame ciertas columnas de la tabla, con una condición: que filtre los resultados y que organice los datos a razón de una de las columnas.</b>
    
    .row.justify-content-center.mb-4(data-aos="zoom-in")
      .col-lg-9.mb-3.mb-lg-0
        .titulo-sexto.color-acento-contenido.mb-3
          h5 Figura 6
          span Sentencia SQL con condicion y ordenamiento
        
        figure
          img(src='@/assets/curso/temas/tema3/img12.png', alt='Texto que describa la imagen')
      
      p.mb-0 <b>Para agregar un nuevo registro, debe usar la sentencia: INSERT INTO.</b>
    
    .row.justify-content-center.mb-4(data-aos="zoom-in")
      .col-lg-9.mb-3.mb-lg-0
        .titulo-sexto.color-acento-contenido.mb-3
          h5 Figura 7
          span Insertar registro en SQL
        
        figure
          img(src='@/assets/curso/temas/tema3/img13.png', alt='Texto que describa la imagen')
    
    .row.justify-content-center.align-items-center.mb-4
      .col-lg-6.order-lg-1.order-2(data-aos="fade-right")
        p.MB-0 <b>Para unir tablas o traer datos de otras tablas, es necesario tener claridad sobre las columnas que relacionan una tabla a otras, pues las uniones solo son posibles si se tiene un campo en común que asocie los conjuntos de datos.</b>
        p.mb-0 <b>En el siguiente ejemplo se tienen las tablas Orders (órdenes) y Customers (clientes), el campo en común en la tabla ordenes que asocia un cliente a través de “customer_id”. A continuación, se desea ver en una sola tabla el id de la orden y el monto (que están en la tabla ‘Orders’), pero también el nombre del cliente (que está en la tabla Customers)<br><br></b>
        p.mb-0 En el proceso ETL se presentan necesidades que en el ambiente gráfico se queda corto y será imposible de realizar, si bien la mayoría de las herramientas son basadas en gráficos y ventanas, se hace necesario codificar algunas tareas del proceso de carga y transformación, por esto es importante tener claridad y habilidades sobre el manejo especialmente de SQL y otros lenguajes de consulta de datos.<br><br>
      .col-lg-6.col-10.order-lg-2.order-1.mb-lg-0.mb-4(data-aos="fade-left")
        img(src="@/assets/curso/temas/tema3/img14.png")
    
    .row.justify-content-center.mb-4(data-aos="zoom-in")
      .col-lg-9.mb-3.mb-lg-0
        .titulo-sexto.color-acento-contenido.mb-3
          h5 Figura 8
          span JOIN - Uniones en SQL
        
          figure
            img(src='@/assets/curso/temas/tema3/img15.png', alt='Texto que describa la imagen')
    
    p.mb-0 <b>Ahora, se invita a realizar sus propias uniones y practicar diferentes sentencias SQL.<br><br></b>
    
    .bg_cta.p-3.mb-5(data-aos="zoom-in")
      .row.justify-content-center-align-items-center
        .col-auto
          img(src="@/assets/curso/temas/tema3/sqll.svg").img75
        .col
          .row.justify-content-between.align-items-center
            .col.mb-3.mb-sm-0  
              h3.text-white SQL Joins         
              p.text-white.mb-0 En este sitio indican cómo usar cada sentencia SQL, para que seguir profundizando en el tema:
            .col-sm-auto
              a.boton.color-acento-botones(href="https://www.w3schools.com/sql/sql_join.asp" target="_blank")
                span ir al sitio
                i.fas.fab-youtube





    p.mb-0 Para dominar este lenguaje, existen múltiples recursos en línea al respecto y también puede consultar en material complementario recomendado.


    separador
    #t_3_3.titulo-segundo.color-acento-contenido
      h2 3.3  No-SQL
    
    p.mb-0 Es importante reconocer las diferencias entre las bases de datos relacionales SQL y las no relacionales (no SQL), para mejor entendimiento, por eso en la siguiente tabla se realiza un cuadro comparativo entre estos tipos de bases de bases de datos, empleando como ejemplo el motor de base de datos Mongo DB que actualmente es el gestor NoSQL más usado y especializado en este tipo de conceptos de arreglo de datos.
    
    .row.justify-content-center.mb-5
      .col-lg-10
        .titulo-sexto.color-acento-contenido.mb-4(data-aos="fade-right")
          h5 Tabla 1
          span Diferencias entre SQL y NoSQL
      
      .row.justify-content-center.mb-5
        .col-lg-10  
          .tabla-a.color-acento-contenido(data-aos="zoom-in")
            table
            thead(style="border-color: #993A2B")
              tr
              th(style="background-color: #FF6148;").text-center SQL
              th(style="background-color: #FF6148;").text-center NoSQL
            tbody    
              tr
              th.text-center Relacionales: se asocia directamente otras colecciones de datos estructuradas
              td No relacionales: no es requisito asociarse con otras colecciones de datos.
            tr
              th.text-center Estructura lenguaje SQL.
              td Estructura JavaScript.
            tr
              th.text-center Tablas: usa índices para ordenar y ubicar datos.
              td Colecciones de documentos (JSON, BSON).
            tr
              th.text-center Las bases de datos se componen de tablas asociadas.
              td Se establece la base de datos como un objeto llamado colección que contiene documentos y estos a su vez pueden tener más objetos dentro, y tener otras colecciones embebidas.
            tr
              th.text-center Su velocidad se afecta a medida que incrementa los datos.
              tdEs muy veloz, incluso con altos volúmenes de datos.
            tr
              th.text-center Los datos deben estar configurados estrictamente(tipo, tamaño, formato, etc.).
              td Es más libre. No es estricto con los esquemas.


    p Si bien las bases de datos NoSQL tienen una estructura conceptual distinta, podría verse en su equivalencia de la siguiente manera:

    .row.justify-content-center.mb-4(data-aos="zoom-in")
      .col-lg-10.mb-3.mb-lg-0
        .titulo-sexto.color-acento-contenido.mb-3
          h5 Figura 9
          span Equivalencias de estructuras
        
        figure
          img(src='@/assets/curso/temas/tema3/img16.png', alt='Texto que describa la imagen')
    
    p.mb-0 En síntesis, las columnas en NoSQL son campos, los registros de cada campo se llaman Datos del documento y las filas pasarían a denominarse Documento.

    .row.justify-content-center.mb-4(data-aos="zoom-in")
      .col-lg-7.mb-3.mb-lg-0
        .titulo-sexto.color-acento-contenido.mb-3
          h5 Figura 10
          span Denominaciones de la estructura en NoSQL
        
        figure
          img(src='@/assets/curso/temas/tema3/img17.png', alt='Texto que describa la imagen')
    
    .bg-52.py-lg-5.py-3
      .row.justify-content-center.align-items-center.mb-0.position-relative(data-aos="fade-left")
        .col-lg-11.col-12
          p.mb-0 Al igual que otros lenguajes, para realizar consultas y gestiones y estructuras de datos es necesario instalar la herramienta necesaria, en este caso MongoDB, para realizar consultas y crear estructuras de datos. Aprender MongoDB es de gran utilidad, pues la tendencia del almacenamiento y gestión de grandes volúmenes de datos prefiere esta alternativa porque presenta grandes ventajas de desempeño para soluciones big data. En el material complementario se relaciona material para profundizar en el aprendizaje de MongoDB.


</template>

<script>
export default {
  name: 'Tema3',
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
