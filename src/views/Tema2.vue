<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-botones
      .titulo-principal__numero
        span 2
      h1  Técnicas de limpieza y transformación de datos
    
    .row.justify-content-center.align-items-center.mb-4(data-aos="fade-left")
      .col-lg-4.col-8
        img.mb-lg-0.mb-3(src="@/assets/curso/temas/tema2/img1.png" alt="")
        .bbb
      .col-lg-8.col-12
          p.mb-4 Una de las inversiones más largas, a menudo, suele ser el proceso de limpieza de datos; sin duda es necesario realizar por cada fuente de datos una revisión sobre los datos, tales como características, bases de datos, tamaño, formato de cada registro, unicidad según cada campo, completitud, consistencia entre tablas, etc. Determinar calidad de los datos y verificar qué elementos requieren limpieza. Es normal que en cada fuente de datos se deba aplicar un proceso de limpieza y refinación de los datos diferente.
          .cajon.color-secundario.cajaa.p-4.mb-2.my-4
            p.mb-3 El proceso de limpieza de datos es muy importante para contar con los datos adecuados que van a ser utilizados, consultados, investigados, extraídos o buscados con el propósito de que la información sea precisa y válida para los diferentes análisis que se requieren hacer en el proceso, garantizando la seguridad de los datos obtenidos.

    .mb-5
    .row.cajon.cajas.align-items-center.md-5
      .col-lg-12.col-12.px-lg-5.px-0
        .row.justify-content-center.mb-4(data-aos="fade-down")   
          .row.align-items-center.justify-content-center.mb-4(data-aos="zoom-in-left")
          .col-lg-3.my-3
            img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/tema2/img2.png', alt='')
          .col-lg-9.my-2
            h4.mb-4.mx-2.my-4 Las organizaciones en la preparación de datos deben tener en cuenta:
            ul.lista-ul--color.mx-0
              li.mb-0.pb-0 
                i.fas.fa-chevron-right
                p Claridad de la información y seguridad en el acceso de un lugar seguro. 
              li.mb-0 
                i.fas.fa-chevron-right
                p Confiabilidad de los datos obteniendo información fidedigna veraz, visible y auditable por si se debe modificar. 
              li.mb-0 
                i.fas.fa-chevron-right
                p Comprensible y con capacidad de repetición asegurando su entendimiento para generar estrategias. 
    p.mb-5
    p.mb-4 #[b Ahora, para preparar los datos estructurados se siguen las siguientes fases:]
    
    .row.text-left-cus.mb-4
      .col-lg-4.my-3.text-left-cus
        .bg191.bg-card.bg-img-1.d-flex.px-3.he-6-cus.flex-column
          img.w-auto-cus.bg12.mx-3(src='@/assets/curso/temas/tema2/img3.1.png', alt='')
          .ml-1-custom 
            p.ml-1-custom 
            p.ml-1-custom #[b Identificacion]<br><br>Identificar los datos que se necesitan, adquirirlos, compilarlos y generar un canal o línea de acceso permanente.
      .col-lg-4.my-3.text-left-cus
        .bg191.bg-card.bg-img-1.d-flex.px-3.he-6-cus.flex-column
          img.w-auto-cus.bg12.mx-3(src='@/assets/curso/temas/tema2/img3.2.png', alt='')
          .ml-1-custom 
            p.ml-1-custom 
            p.ml-1-custom.my-2 #[b Revision]<br><br>Revisar la calidad de los datos compilados, según la relación con la actividad o situación que se quiere solucionar.
      .col-lg-4.my-3.text-left-cus
        .bg191.bg-card.bg-img-1.d-flex.px-3.he-6-cus.flex-column
          img.w-auto-cus.bg12.mx-3(src='@/assets/curso/temas/tema2/img3.3.png', alt='')
          .ml-1-custom 
            p.ml-1-custom 
            p.ml-1-custom #[b Limpieza]<br><br>Limpieza de la información que consiste en corregir, eliminar duplicidad, suprimir datos incompletos y salvaguardar información confidencial.
      
    separador
    #t_2_1.titulo-segundo.color-acento-contenido
      h2 2.1  Open Refine
    
    p.mb-5 Es una aplicación de descarga libre y código abierto muy útil para realizar estas tareas de limpieza de datos y adaptarlos a los formatos y condiciones previas a otros procesos propios de ETL o minería de datos.
    
    .row.justify-content-center.align-items-center(data-aos="zoom-in-left")
      .col-lg-10
        .fondo21.p-3.mb-5(data-aos="zoom-in")
          .row.justify-content-center.align-items-center
            .col-3.col-sm-2.col-lg-2.mx-5
              img.my-3.d-none.d-lg-block(src="@/assets/curso/temas/tema2/open.svg")

            .col
              .row.justify-content-center.align-items-center
                .col.mb-3.mb-sm-0
                  h3.text-white.mb-1 Funcionalidades Open Refine          
                  p.text-white.mb-1 Configuración básica de la interfaz de usuario de OpenRefibe
                .col-sm-auto
                  a.boton.color-acento-botones.mx-5(href="https://www.youtube.com/watch?v=tzXExfZCA1w&feature=youtu.be" target="_blank")
                    span Ver Video
                    i.fab.fa-youtube

    p.mb-4  Su uso es relativamente fácil, lo importante es tener claridad de los conceptos y funcionalidades que se requieren. Para la transformación y refinamiento de datos usa su propio lenguaje #[em (General Refine Expression Language -GREL),] sin embargo, como ventaja, se puede seleccionar entre otras opciones de lenguajes para codificar las expresiones de transformación de datos.           
    p.mb-4 #[b La aplicación permite adicionar columnas basadas en expresiones, dividir campos, ordenar, quitar columnas, reorganizarlas, renombrarlas y realizar otras transformaciones.]
    
    .row.justify-content-center.mb-4(data-aos="zoom-in")
      .col-lg-10.mb-3.mb-lg-0
        .titulo-sexto.color-acento-contenido.mb-5
          h5 Figura 1
          span Limpieza y conciliación de datos  
          
        figure
          img.mb-3(src='@/assets/curso/temas/tema2/img4.png', alt='Texto que describa la imagen')
    p.mb-5     
    p.mb-3 En el ejemplo anterior, se refinan los datos de manera que la información en los sistemas analíticos tenga una homogeneidad de formatos y estructuras, independiente de la fuente transaccional o archivos de entrada.
    p Para valores numéricos también se presentan múltiples funcionalidades, entre otras, la aplicación muestra valores poco típicos entre la colección de las columnas, ejemplo, si se tiene en fecha de nacimiento un año que marque por ejemplo 1890 (lo más probable es que se quería digitar 1990), sería una fecha atípica y se presenta una desviación muy grande en relación con el promedio de fechas registradas en la gran mayoría de registros. 

    separador
    #t_2_2.titulo-segundo.color-acento-contenido
      h2 2.2  Astera

    .row.justify-content-center.align-items-center.mb-4
      .col-lg-8.order-lg-1.order-2(data-aos="fade-right")
        p Es otra alternativa, pero más integral, es decir, no se dedica solo a la limpieza de datos, sino que se está definida para la administración de datos de extremo a extremo. 
        .BG13.p-4.mb-3
          p.mb-0 Enfocándose en el proceso de refinamiento, al cual se denomina wrangle, usa su herramienta llamada ReportMiner, la cual suele ser muy buena, entre otras características, permite incluso extraer y hacer wrangle a archivos PDF y otras fuentes de datos. 
        .d-flex.align-items-center.justify-content-center
          img.img-a.img-t.d-none.d-lg-block(src='@/assets/curso/temas/tema2/pun.svg', alt='')
          p.mt-20.mx-3 En apartados siguientes, cuando se hable de herramientas para ETL, se mencionará de nuevo esta herramienta que, sin duda, debe estar entre el ramillete de opciones para las empresas que deseen entrar en la tendencia de la inteligencia de negocio.
    
      .col-lg-4.col-10.order-lg-2.order-1.mb-lg-0.mb-4(data-aos="fade-left")
        img(src="@/assets/curso/temas/tema2/img5.png")
    
    p.mb-5 Una de las maneras para garantizar que los datos tengan integridad y unicidad entre varios sistemas transaccionales y el sistema analítico mismo es el empleo de datos maestros #[em #[b (Master Data Management).]]

    .row.justify-content-center.align-items-center.mb-4(data-aos="fade-left")
      .col-lg-4.col-8
        img.mb-lg-0.mb-3(src="@/assets/curso/temas/tema2/img6.png" alt="")
      .col-lg-8.col-12
        p.mb-3.my-3 #[b Los datos maestros] son una arquitectura para administrar, centralizar, organizar, clasificar, localizar, sincronizar y enriquecer los datos según las reglas de negocio. La gestión de datos maestros (MDM, por sus siglas en inglés) se resume en un repositorio central que garantiza una única visión autorizada de la información y optimiza costos e ineficiencias causadas por los almacenamientos de datos dispersos, apoya reportes de negocio mediante la ubicación exacta, vinculación y propiedades de entidades y de la información a través de productos, clientes, tiendas, ciudades, empleados, proveedores, activos digitales y más. 
        .cajon.color-secun.p-4.mb-4
          p.mb-2 Por ello, se convierte en habilitador clave para proporcionar una vista única y confiable de la información empresarial crítica. Las fuentes de datos confiables ayudan a reducir los costos de integración de aplicaciones, mejoran la experiencia del cliente y generan información analítica accionable (Stibo System MDM, 2019).  
          
    .row.fondoos.align-items-center.py-4.py-md-5
      .col-lg-12.col-12.px-lg-5.px-4
        .row.justify-content-center.mb-4(data-aos="fade-down")

        .row.align-items-center.justify-content-center.mb-4(data-aos="zoom-in-left")
          .col-lg-12.my-2
            h4.mb-5 Una solución de MDM procura superar algunos desafíos comunes en las organizaciones como:
            ul.lista-ul--color.mx-0
              li.mb-0.pb-0 
                i.fas.fa-chevron-right
                p Silos de datos dispersos y múltiples versiones de sus datos.
              li.mb-0 
                i.fas.fa-chevron-right
                p Datos errados como resultado de ingresos manuales y datos no validados.
              li.mb-0 
                i.fas.fa-chevron-right
                p Costos en almacenamiento y seguridad en la información, tanto para su acceso, su conservación y disponibilidad.
      
        .row.justify-content-center.mb-4(data-aos="zoom-in")
          .col-lg-10.mb-3.mb-lg-0
            .titulo-sexto.color-acento-contenido.mb-3
              h5 Figura 2
              span Ventajas de implementar Datos Maestros en los sistemas de información   
          .col-lg-5.col-8
            img.mb-lg-5.mb-3(alt="" src="@/assets/curso/temas/tema2/img7.svg")
      .row.align-items-center
        .col-sm-12.col-lg-12
          p.mb-5.mx-5 Se deben tener presentes estas ventajas al momento de implementar la gestión de los datos maestros.

</template>

<script>
export default {
  name: 'Tema2',
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
