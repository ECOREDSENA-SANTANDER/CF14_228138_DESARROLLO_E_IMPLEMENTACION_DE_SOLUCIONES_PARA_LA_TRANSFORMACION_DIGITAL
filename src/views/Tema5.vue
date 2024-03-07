<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 5
      h1  Herramientas Tecnológicas de ETL 
    
    .bloque1.p-0.mb-5
      .bloque-texto-b.extra.color-secundario.p-3.px-0.mb-0(data-aos="fade-left")
        .bloque-texto-b__texto
          .row.justify-content-center.align-items-center.d-flex
            .col-lg-10.col-12
              p.mb-0 La identificación de las fuentes de datos es el comienzo técnico para la extracción de todos los datos necesarios para los reportes y la creación de los tableros de mando para visualizar la información de la organización; su contraparte, es decir, el final de muchos ciclos de inteligencia de negocios, es la minería de datos como una de las alternativas luego de la extracción y limpieza de datos.<br><br>Los datos encierran patrones y comportamientos de los que es posible extraer conocimiento sobre los eventos que los han generado; frecuentemente las cosas no son como aparentan ser, por esta razón, la visualización de datos, aunque necesarias, no son del todo suficientes para llegar hasta el conocimiento que se esconde detrás de estructuras y relaciones poco superficiales en los datos (Gorenés, Casas y Minguillón, 2017). 
            .col-lg-2.col-8.px-5
              img.mb-5(alt="" src="@/assets/curso/temas/tema5/img1.svg")
      
    .row.justify-content-center.align-items-center.mb-4(data-aos="fade-left")
      .col-lg-4.col-8
        img.mb-lg-0.mb-3(src="@/assets/curso/temas/tema5/img2.png" alt="")
      .col-lg-8.col-12
        .cajon.color-se.p-4.mb-4
          p.mb-0 A la hora de decidirse por cuál ecosistema digital decidirse, es importante tener cuenta varios aspectos: entre otros, debe proporcionar herramientas Front end para usuarios con diferentes perfiles, debe permitir conexiones a diversas fuentes de datos, debe tener una infraestructura robusta y muy eficiente para el almacenamiento de Data Warehouse y DataMart que integre, además, componentes ETL como calidad de datos, diccionarios, repositorios centralizados y otras características importantes a la hora de elegir una herramienta o colección de herramientas. 

    .row.justify-content-center.mb-4(data-aos="zoom-in")
      .col-lg-8.mb-3.mb-lg-0
        .bg-55.p-4
          .row.justify-content-center-
            .col-lg-10.col-8
              p.mb-0 No está de más recalcar que, más que las herramientas para el desarrollo de inteligencia de negocios, debe estar tras una estrategia clara y objetivos concretos para que el planteamiento de la arquitectura de soluciones analíticas tenga mayor éxito.
            .col-lg-2
              img(src='@/assets/curso/temas/tema5/img3.svg', alt='imagen decorativa') 
              
      .mb-4.d-flex
        .d-flex.flex-wrap.align-items-center.pe-4
          h3.col.px-4.mb-0.text-white(data-aos="fade-right") Herramientas para el desarrollo de BI
          img.col-lg.d-none.d-lg-flex(src='@/assets/curso/temas/tema5/titulo.svg' style="max-width: 70px; left: 16px; position: absolute" data-aos="fade-left")

      p.mb-0 Las marcas más destacadas actualmente y que sirven para implementaciones completas de soluciones analíticas son: 
    .row.justify-content-center.mb-5
      .col-lg-12
        .titulo-sexto.color-acento-contenido.mb-4(data-aos="fade-right")
          h5 Tabla 2
          span Herramientas disponibles para soluciones analíticas 
      
        .tabla-a.color-acento-contenido(data-aos="zoom-in")
          table
            thead(style="border-color: transparent")
              tr
                th(style="background-color: #FED9D3;").text-center Marca 
                th(style="background-color: #FED9D3;").text-center Sitio Web 
                th(style="background-color: #FED9D3;").text-center Características         
            tbody    
              tr
                th(style="background-color: #F6F6F6;").text-center SAS Institute 
                td(style="background-color: #F6F6F6;").text-center https://www.sas.com/es_co/software/visual-analytics.html  
                td(style="background-color: #F6F6F6;").text-center Solución integral. Reportes interactivos. Descubrimiento visual. Analítica de autoservicio. Escalabilidad y gobierno desde un mismo entorno.
              tr
                th(style="background-color: #E8E8E8;") Salesforce 
                td(style="background-color: #E8E8E8;") https://www.salesforce.com/mx/products/analytics/overview/  
                td(style="background-color: #E8E8E8;") Tableau ha seguido creciendo como parte de Salesforce. 
              tr
                th(style="background-color: #F6F6F6;") SAP 
                td(style="background-color: #F6F6F6;") https://www.sap.com/latinamerica/products/technology-platform/bpc.html  
                td(style="background-color: #F6F6F6;") Con muchos softwares corporativos, incorpora ahora herramientas de ETL y de inteligencia de negocios 
              tr
                th(style="background-color: #E8E8E8;") Microsoft 
                td(style="background-color: #E8E8E8;") https://powerbi.microsoft.com/es-es/what-is-business-intelligence/  
                td(style="background-color: #E8E8E8;") Visualizaciones de Power BI dentro de Power Apps y Dynamics 365 aumenta las capacidades analíticas integradas de Microsoft Power Platform al permitir a los usuarios incorporar activos de inteligencia empresarial. 
              tr
                th(style="background-color: #F6F6F6;") Oracle 
                td(style="background-color: #F6F6F6;") https://www.oracle.com/lad/business-analytics/  
                td(style="background-color: #F6F6F6;") Oracle Analytics Cloud se ha convertido en la herramienta analítica y de informes para las pequeñas empresas, más allá de las grandes corporaciones que lo usan. 
              tr
                th(style="background-color: #E8E8E8;") Informática 
                td(style="background-color: #E8E8E8;") https://www.informatica.com/products/cloud-data-integration.html  
                td(style="background-color: #E8E8E8;") Integración de computación en la nube con herramientas de integración y procesos de datos hacia la inteligencia de negocios. 
              tr
                th(style="background-color: #F6F6F6;") Quantexa 
                td(style="background-color: #F6F6F6;") https://www.quantexa.com/platform/scoring-analytics/  
                td(style="background-color: #F6F6F6;") Contextos completos de datos, incluye módulos de soluciones de inteligencia corporativa 
              tr
                th(style="background-color: #E8E8E8;") IBM 
                td(style="background-color: #E8E8E8;") https://www.ibm.com/products/environmental-intelligence-suite  
                td(style="background-color: #E8E8E8;") Anunciaron una solución comercial de gestión de datos empresariales en la nube híbrida con tecnología de datos de fuente abierta: IBM Environmental Intelligence Suite. 
              tr
                th(style="background-color: #F6F6F6;") Qlik 
                td(style="background-color: #F6F6F6;") https://www.qlik.com/es-es/products 
                td(style="background-color: #F6F6F6;") Una gran marca que integra herramientas de infraestructura, bases de datos y analítica. Promete cerrar la brecha entre los datos, los conocimientos y la acción con Qlik Cloud®, la única plataforma que reúne todos los datos y con su analítica. 
      p.mb-0 En el mercado existen más de un centenar de posibilidades, es un sector de alto crecimiento y sus herramientas se van siendo más especializadas, integrándose con IA, grandes capacidades de infraestructura y facilidad de manejo.

</template>

<script>
export default {
  name: 'Tema5',
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
