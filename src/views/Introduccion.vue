<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
  
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción

    .row.justify-content-center.align-items-center.mb-4(data-aos="fade-left")
      .col-lg-5.col-8
        img.mb-lg-0.mb-3(src="@/assets/curso/temas/introduccion/introduccion.svg" alt="")
      .col-lg-7.col-12
        .cajon.color-secundario.p-4.mb-4
          p.mb-0 En este componente se abordarán los conceptos y fundamentos del proceso de extracción, transformación y carga de datos, con el fin de procesar la información para la visualización y análisis, que permita la toma de decisiones. A continuación se presenta un video que contextualiza al respecto: 


      figure(data-aos="fade-right")
        .video.mb-1
          iframe(width="1280" height="720" src="https://www.youtube.com/embed/URNCgT2EtH0" title="Análisis y valoración de riesgos de ciberseguridad" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
        figcaption Video. Análisis y valoración de riesgos de ciberseguridad 
</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass"></style>
