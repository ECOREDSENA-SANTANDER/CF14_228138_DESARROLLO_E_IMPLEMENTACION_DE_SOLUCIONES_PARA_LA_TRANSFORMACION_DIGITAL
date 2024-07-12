<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(icono="fas fa-sitemap" titulo="Síntesis")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    p.mb-5 A continuación, se presenta el diagrama que representa el resumen de las temáticas que están desarrolladas en el componente formativo. 
    .row.justify-content-center
      .col-lg-12.mb-5
        figure
          img(src="@/assets/curso/temas/sintesis.svg", alt="La figura ilustra el proceso de integración de datos y ETL, que comienza con la extracción de datos de diversas fuentes, seguido de la limpieza y optimización con herramientas como Open Refine y Astera. Los datos optimizados se convierten en datos maestros y se almacenan en un modelo multidimensional en la bodega de datos, estructurado en hechos y dimensiones. A partir de estos, se generan cubos OLAP que facilitan la creación de dashboards BI para la visualización y análisis multidimensional. Finalmente, el proceso culmina con la minería de datos para extraer conocimiento y patrones útiles para la toma de decisiones empresariales. ")
      .col-auto
        a.anexo.mb-5(:href="obtenerLink('/downloads/Sintesis.pdf')" target="_blank")
          .anexo__icono
            img(src="@/assets/template/icono-pdf.svg")
          .anexo__texto
            p Anexo. Síntesis

</template>

<script>
export default {
  name: 'Sintesis',
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
