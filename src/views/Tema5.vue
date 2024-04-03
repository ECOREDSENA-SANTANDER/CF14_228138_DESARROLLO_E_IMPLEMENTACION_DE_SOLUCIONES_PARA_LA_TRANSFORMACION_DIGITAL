<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-botones
      .titulo-principal__numero
        span 5
      h1  Herramientas Tecnológicas de ETL 
    
    .bloque-texto-b.extrax.color-secundario(data-aos="fade-left")
      .bloque-texto-b__texto
        .row.justify-content-center.align-items-center.d-flex
          .col-lg-10.col-12
            p.mb-0 Para la construcción de soluciones analíticas es fundamental seleccionar las herramientas adecuadas que permitan soportar cada uno de los procesos que se ejecutan en el ecosistema de procesamiento analítico. La oferta en el mercado de herramientas de inteligencia de negocios es muy alta, con algunos proveedores que representan corporaciones y tendencias tecnológicas y de negocio.
          .col-lg-2.col-8.px-5
            img.mb-3(alt="" src="@/assets/curso/temas/tema5/img1.svg")
      
    .row.justify-content-center.align-items-center.mb-4(data-aos="fade-left")
      .col-lg-4.col-8
        img.mb-lg-0.mb-3(src="@/assets/curso/temas/tema5/img2.png" alt="")
      .col-lg-8.col-12
        .cajon.color-se.p-4.mb-2
          p.mb-5 A la hora de decidirse por cuál ecosistema digital decidirse, es importante tener cuenta varios aspectos: entre otros, debe proporcionar herramientas Front end para usuarios con diferentes perfiles, debe permitir conexiones a diversas fuentes de datos, debe tener una infraestructura robusta y muy eficiente para el almacenamiento de Data Warehouse y DataMart que integre, además, componentes ETL como calidad de datos, diccionarios, repositorios centralizados y otras características importantes a la hora de elegir una herramienta o colección de herramientas. 

    .row.justify-content-center.mb-4(data-aos="zoom-in")
      .col-lg-8.mb-3.mb-lg-0
        .bg-55.p-4
          .row.justify-content-center.align-items-center.mb-0
            .col-lg-10.col-8
              p.mb-0.mx-2 #[b No está de más recalcar que, más que las herramientas para el desarrollo de inteligencia de negocios, debe estar tras una estrategia clara y objetivos concretos para que el planteamiento de la arquitectura de soluciones analíticas tenga mayor éxito.]
            .col-lg-2
              img(src='@/assets/curso/temas/tema5/img3.svg', alt='imagen decorativa') 
      
      .mb-5        
      .mb-4.d-flex
        .d-flex.flex-wrap.align-items-center.pe-4.bg-img-blue(style="border-radius: 25px; padding: 10px")
          h3.col.px-4.mb-0.text-white(data-aos="fade-right") Herramientas para el desarrollo de BI
          img.col-lg.d-none.d-lg-flex(src='@/assets/curso/temas/tema5/titulo.svg' style="max-width: 60px; left: 388px; position: absolute" data-aos="fade-left")

      
      p.mb-0 Las marcas más destacadas actualmente y que sirven para implementaciones completas de soluciones analíticas son: 
 
    .row.justify-content-center.mb-3
      .col-lg-12
        .titulo-sexto.color-acento-contenido.mb-4(data-aos="fade-right")
          h5 Tabla 2
          span Herramientas disponibles para soluciones analíticas 
          
    .row.justify-content-center.align-items-start.mb-0
      .col-lg-12
        .tabla-a(data-aos="fade-left")
          table
            thead
              tr
                th.margen.text-white Marca
                th.text-white Sitio Web
                th.text-white Características
            tbody
              tr
                td.gra.text-center #[b SAS Institute]
                td.gra https://www.sas.com/es_co/software/visual-analytics.html
                td.gra Solución integral. Reportes interactivos. Descubrimiento visual. Analítica de autoservicio. Escalabilidad y gobierno desde un mismo entorno.
              tr
                td.gre.text-center #[b Salesforce]
                td.gre https://www.salesforce.com/mx/products/analytics/overview/
                td.gre Tableau ha seguido creciendo como parte de Salesforce.
              tr
                td.gra.text-center #[b SAP]
                td.gra https://www.sap.com/latinamerica/products/technology-platform/bpc.html
                td.gra Con muchos softwares corporativos, incorpora ahora herramientas de ETL y de inteligencia de negocios
              tr
                td.gre.text-center #[b Microsoft]
                td.gre https://powerbi.microsoft.com/es-es/what-is-business-intelligence/ 
                td.gre Visualizaciones de Power BI dentro de Power Apps y Dynamics 365 aumenta las capacidades analíticas integradas de Microsoft Power Platform al permitir a los usuarios incorporar activos de inteligencia empresarial.
              tr
                td.gra.text-center #[b Oracle]
                td.gra https://www.oracle.com/lad/business-analytics/ 
                td.gra Oracle Analytics Cloud se ha convertido en la herramienta analítica y de informes para las pequeñas empresas, más allá de las grandes corporaciones que lo usan.
              tr
                td.gre.text-center #[b Informática]
                td.gre https://www.informatica.com/products/cloud-data-integration.html 
                td.gre Integración de computación en la nube con herramientas de integración y procesos de datos hacia la inteligencia de negocios.
              tr
                td.gra.text-center #[b Quantexa]
                td.gra https://www.quantexa.com/platform/scoring-analytics/ 
                td.gra Contextos completos de datos, incluye módulos de soluciones de inteligencia corporativa
              tr
                td.gre.text-center #[b IBM]
                td.gre https://www.ibm.com/products/environmental-intelligence-suite 
                td.gre Anunciaron una solución comercial de gestión de datos empresariales en la nube híbrida con tecnología de datos de fuente abierta: IBM Environmental Intelligence Suite.
              tr
                td.gra.text-center #[b Qlik]
                td.gra https://www.qlik.com/es-es/products
                td.gra Una gran marca que integra herramientas de infraestructura, bases de datos y analítica. Promete cerrar la brecha entre los datos, los conocimientos y la acción con Qlik Cloud®, la única plataforma que reúne todos los datos y con su analítica.
          
      .mb-5
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
