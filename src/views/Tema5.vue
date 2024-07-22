<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-botones
      .titulo-principal__numero
        span 5
      h1  Herramientas Tecnológicas de #[em ETL] 
    
    .bloque-texto-b.extrax.color-secundario(data-aos="fade-left")
      .bloque-texto-b__texto
        .row.justify-content-center.align-items-center.d-flex
          .col-lg-10.col-12
            p.mb-0 Para la construcción de soluciones analíticas es fundamental seleccionar las herramientas adecuadas que permitan soportar cada uno de los procesos que se ejecutan en el ecosistema de procesamiento analítico. La oferta en el mercado de herramientas de inteligencia de negocios es muy alta, con algunos proveedores que representan corporaciones, tendencias tecnológicas y de negocio.
          .col-lg-2.col-8.px-5.mb-2
            img.img-a.img-t.d-none.d-lg-block(alt="" src="@/assets/curso/temas/tema5/img1.svg")
      
    .row.justify-content-center.align-items-center.mb-4(data-aos="fade-left")
      .col-lg-4.col-8
        img.mb-lg-0.mb-3(src="@/assets/curso/temas/tema5/img2.png" alt="")
      .col-lg-8.col-12
        .cajon.color-se.p-4.mb-2
          p.mb-5 A la hora de decidirse por cuál ecosistema digital decidirse, es importante tener cuenta varios aspectos: entre otros, debe proporcionar herramientas #[em Front end] para usuarios con diferentes perfiles, debe permitir conexiones a diversas fuentes de datos, debe tener una infraestructura robusta y muy eficiente para el almacenamiento de #[em Data Warehouse] y #[em DataMart] que integre, además, componentes #[em ETL] como calidad de datos, diccionarios, repositorios centralizados y otras características importantes a la hora de elegir una herramienta o colección de herramientas. 

    .row.justify-content-center.mb-4(data-aos="zoom-in")
      .col-sm-12.col-lg-8.mb-3.mb-lg-0
        .bg-55.p-4
          .row.justify-content-center.align-items-center.mb-0
            .col-sm-12.col-lg-9
              p.mb-0 #[b No está de más recalcar que, más que las herramientas para el desarrollo de inteligencia de negocios, debe estar tras una estrategia clara y objetivos concretos para que el planteamiento de la arquitectura de soluciones analíticas tenga mayor éxito.]
            .col-lg-2
              img.d-none.d-lg-block(src='@/assets/curso/temas/tema5/img3.svg', alt='imagen decorativa') 
      
    .mb-4.d-flex
      .d-flex.flex-wrap.align-items-center.pe-4.bg-img-blue(style="border-radius: 25px; padding: 10px")
        h3.col.px-4.mb-0.text-white(data-aos="fade-right") Herramientas para el desarrollo de BI
        img.col-lg.d-none.d-lg-flex(src='@/assets/curso/temas/tema5/titulo.svg' style="max-width: 60px; left: 430px; position: absolute" data-aos="fade-left")

      
    p.mb-4 Las marcas más destacadas actualmente y que sirven para implementaciones completas de soluciones analíticas son: 

    .row.justify-content-center.mb-3
      .col-lg-12
        .titulo-sexto.color-acento-contenido.mb-2(data-aos="fade-right")
          h5 Tabla 2.
          span Herramientas disponibles para soluciones analíticas 
          
    .row.justify-content-center.align-items-start.mb-4
      .col-lg-12.col-sm-12
        .tabla-a(data-aos="fade-left")(alt="La tabla 2 describe varias herramientas analíticas: SAS Institute ofrece soluciones integrales con reportes interactivos; Salesforce incluye Tableau; SAP incorpora ETL e inteligencia de negocios; Microsoft integra Power BI con Power Apps y Dynamics 365; Oracle Analytics Cloud es versátil para empresas de todos los tamaños; Informatica facilita la integración en la nube; Quantexa proporciona soluciones de inteligencia corporativa; IBM ofrece una suite de inteligencia ambiental; y Qlik combina infraestructura y analítica en la nube.")
          table
            thead
              tr
                th.margen.text-white Marca
                th.text-white Sitio #[em Web]
                th.text-white Características
            tbody
              tr
                td.gra.text-center #[b #[em SAS Institute]]
                td.gra.marr https://www.sas.com/es_co/software/visual-analytics.html
                td.gra Solución integral. Reportes interactivos. Descubrimiento visual. Analítica de autoservicio. Escalabilidad y gobierno desde un mismo entorno.
              tr
                td.gre.text-center #[b #[em Salesforce]]
                td.gre.marr https://www.salesforce.com/mx/products/analytics/overview/
                td.gre Tableau ha seguido creciendo como parte de #[em Salesforce].
              tr
                td.gra.text-center #[b #[em SAP]]
                td.gra.marr https://www.sap.com/latinamerica/products/technology-platform/bpc.html
                td.gra Con muchos #[em softwares] corporativos, incorpora ahora herramientas de #[em ETL] y de inteligencia de negocios.
              tr
                td.gre.text-center #[b #[em Microsoft]]
                td.gre.marr https://powerbi.microsoft.com/es-es/what-is-business-intelligence/ 
                td.gre Visualizaciones de #[em Power] BI dentro de #[em Power Apps y Dynamics] 365 aumenta las capacidades analíticas integradas de #[em Microsoft Power Platform] al permitir a los usuarios incorporar activos de inteligencia empresarial.
              tr
                td.gra.text-center #[b #[em Oracle]]
                td.gra.marr https://www.oracle.com/lad/business-analytics/ 
                td.gra #[em Oracle Analytics Cloud] se ha convertido en la herramienta analítica y de informes para las pequeñas empresas, más allá de las grandes corporaciones que lo usan.
              tr
                td.gre.text-center #[b Informática]
                td.gre.marr https://www.informatica.com/products/cloud-data-integration.html 
                td.gre Integración de computación en la nube con herramientas de integración y procesos de datos hacia la inteligencia de negocios.
              tr
                td.gra.text-center #[b #[em Quantexa]]
                td.gra.marr https://www.quantexa.com/platform/scoring-analytics/ 
                td.gra Contextos completos de datos, incluye módulos de soluciones de inteligencia corporativa.
              tr
                td.gre.text-center #[b IBM]
                td.gre.marr https://www.ibm.com/products/environmental-intelligence-suite 
                td.gre Anunciaron una solución comercial de gestión de datos empresariales en la nube híbrida con tecnología de datos de fuente abierta: IBM #[em Environmental Intelligence Suite.]
              tr
                td.gra.text-center #[b #[em Qlik]]
                td.gra.marr https://www.qlik.com/es-es/products
                td.gra Una gran marca que integra herramientas de infraestructura, bases de datos y analítica. Promete cerrar la brecha entre los datos, los conocimientos y la acción con #[em Qlik Cloud] ®, la única plataforma que reúne todos los datos y con su analítica.

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
