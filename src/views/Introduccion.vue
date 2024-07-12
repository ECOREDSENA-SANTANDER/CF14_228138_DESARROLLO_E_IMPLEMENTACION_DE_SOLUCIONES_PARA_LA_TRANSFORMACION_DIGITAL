<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
  
    .titulo-principal.color-acento-botones
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción

    .row.justify-content-center.align-items-top.mb-0(data-aos="fade-left")
      .col-lg-5.col-8
        img.img-a.img-t(src="@/assets/curso/temas/introduccion/introduccion.svg" alt="")
      .col-lg-7.col-12.my-3
        .cajon.color-secundario.p-4.my-4
          p.mb-0 En este componente se abordarán los conceptos y fundamentos del proceso de extracción, transformación y carga de datos, con el fin de procesar la información para la visualización y análisis, que permita la toma de decisiones. A continuación se presenta un video que contextualiza al respecto:


    figure(data-aos="fade-right")
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/ilmPbQSBBoM?si=B5r4C6d3bLqT4-8y" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen)
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
