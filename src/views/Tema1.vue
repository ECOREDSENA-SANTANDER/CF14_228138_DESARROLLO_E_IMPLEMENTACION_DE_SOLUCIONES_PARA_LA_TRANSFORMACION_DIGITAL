<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 1
      h1 Extracción y minería de datos
      
    .bloque1.p-0.mb-5
      .bloque-texto-b.extra.color-secundario.p-3.px-0.mb-0(data-aos="fade-left")
        .bloque-texto-b__texto
          .row.justify-content-center.align-items-center.d-flex
            .col-lg-10.col-12
              p.mb-0 La identificación de las fuentes de datos es el comienzo técnico para la extracción de todos los datos necesarios para los reportes y la creación de los tableros de mando para visualizar la información de la organización; su contraparte, es decir, el final de muchos ciclos de inteligencia de negocios, es la minería de datos como una de las alternativas luego de la extracción y limpieza de datos.<br><br>Los datos encierran patrones y comportamientos de los que es posible extraer conocimiento sobre los eventos que los han generado; frecuentemente las cosas no son como aparentan ser, por esta razón, la visualización de datos, aunque necesarias, no son del todo suficientes para llegar hasta el conocimiento que se esconde detrás de estructuras y relaciones poco superficiales en los datos (Gorenés, Casas y Minguillón, 2017). 
            .col-lg-2.col-8.px-5
              img.mb-5(alt="" src="@/assets/curso/temas/tema1/img1.svg")  
    
    .row.justify-content-center.mb-4(data-aos="zoom-in")
          .col-lg-10.mb-3.mb-lg-0
            .bg-50.p-4
              .row.justify-content-center
                .col-lg-10.col-4
                  p.mb-0 <b>La minería de datos se encuentra estrechamente relacionada con la aplicación de inteligencia artificial (IA),</b> en específico con procesos y técnicas algorítmicas de Machine Learning (ML) con sus múltiples posibilidades que son tema de profundización en otros componentes, adicional se emplea ostros aspectos de ingeniería como árboles de decisiones, redes neuronales, entre otros. 
                .col-lg-2
                  img(src='@/assets/curso/temas/tema1/img2.svg', alt='imagen decorativa') 

          p Este proceso consiste en tomar o extraer información requerida por las entidades de diferentes bases de datos o fuentes, su nombre está asociado a la minería ya que la extracción es vital en ambas actividades; por otro lado, su propósito es extraer datos útiles que ayuden a la resolución de las diferentes situaciones que se originan en las entidades y su gestión se puede hacer a través de herramientas estadísticas tanto básicas como avanzadas que proporciona la inteligencia artificial. 

    .row
      .col-lg-5.mb-4.mb-lg-0(data-aos="zoom-in")
        figure
          img(src='@/assets/curso/temas/tema1/img3.jpg', alt='imagen decorativa')  

      .col-lg-7(data-aos="fade-left")
        .bg--piel.br_cstm.p-4
          p La minería de datos como disciplina estudia las herramientas y algoritmos que le permitan acceder y recolectar datos a las organizaciones para que esa información sea predictiva y se facilite su análisis para la toma de decisiones ante situaciones presentadas, mejorar los procesos de las entidades y sirve para la toma de decisiones. 
          
      p.mb-5 <b>La gestión con la minería de datos se debe realizar considerando los siguientes elementos:</b>

    .row.justify-content-center.mb-4(data-aos="fade-left")
      .col-lg-4.col-12.d-flex
        .tarjeta1.p-4.d-flex.w-100.mb-lg-0.mb-3(style="background-color:#ffe5cf")
          .tarjeta2.p-2.d-flex.align-items-center.justify-content-center(style="min-width:82px; background-color:#ffb476")
            img.mb-lg-0.mb-3(style="width:57.47px" alt="" src="@/assets/curso/temas/tema1/img4.1.svg")
          .px-2.py-0
            p.mb-0 <b>Identificar la información.</b>
              p.mb-5 Encontrando las categorías o conjuntos de los datos.
          .row.justify-content-center.mb-4(data-aos="fade-left")
      .col-lg-4.col-12.d-flex
        .tarjeta1.p-4.d-flex.w-100.mb-lg-0.mb-3(style="background-color:#ffe5cf")
          .tarjeta2.p-2.d-flex.align-items-center.justify-content-center(style="min-width:82px; background-color:#ffb476")
            img.mb-lg-0.mb-3(style="width:57.47px" alt="" src="@/assets/curso/temas/tema1/img4.2.svg")
          .px-2.py-0
            p.mb-0 <b>Clasificar la información.</b>
            p.mb-5 De forma automática encontrando los datos solicitados o de interés.
          .row.justify-content-center.mb-4(data-aos="fade-left")
      .col-lg-4.col-12.d-flex
        .tarjeta1.p-4.d-flex.w-100.mb-lg-0.mb-3(style="background-color:#ffe5cf")
          .tarjeta2.p-2.d-flex.align-items-center.justify-content-center(style="min-width:82px; background-color:#ffb476")
            img.mb-lg-0.mb-3(style="width:57.47px" alt="" src="@/assets/curso/temas/tema1/img4.3.svg")
          .px-2.py-0
            p.mb-0 <b>Describir o brindar conceptos o información.</b>
              p.mb-5 De forma compilada utilizando el método adecuado.        
          .row.justify-content-center.mb-4(data-aos="fade-left")
      .col-lg-4.col-12.d-flex
        .tarjeta1.p-4.d-flex.w-100.mb-lg-0.mb-3(style="background-color:#ffe5cf")
          .tarjeta2.p-2.d-flex.align-items-center.justify-content-center(style="min-width:82px; background-color:#ffb476")
            img.mb-lg-0.mb-3(style="width:57.47px" alt="" src="@/assets/curso/temas/tema1/img4.4.svg")
          .px-2.py-0
            p.mb-0 <b>Detectar anomalías en los datos.</b>
              p.mb-5 Filtrando la información recibida para evitar desviaciones o fallas.
          .row.justify-content-center.mb-4(data-aos="fade-left")
      .col-lg-4.col-12.d-flex
        .tarjeta1.p-4.d-flex.w-100.mb-lg-0.mb-3(style="background-color:#ffe5cf")
          .tarjeta2.p-2.d-flex.align-items-center.justify-content-center(style="min-width:82px; background-color:#ffb476")
            img.mb-lg-0.mb-3(style="width:57.47px" alt="" src="@/assets/curso/temas/tema1/img4.5.svg")
          .px-2.py-0
            p.mb-0 <b>Detectar las variables de la información.</b>
              p.mb-5 Encontrando cambios que pueden originar los datos.
          .row.justify-content-center.mb-4(data-aos="fade-left")
      .col-lg-4.col-12.d-flex
        .tarjeta1.p-4.d-flex.w-100.mb-lg-0.mb-3(style="background-color:#ffe5cf")
          .tarjeta2.p-2.d-flex.align-items-center.justify-content-center(style="min-width:82px; background-color:#ffb476")
            img.mb-lg-0.mb-3(style="width:57.47px" alt="" src="@/assets/curso/temas/tema1/img4.6.svg")
          .px-2.py-0
            p.mb-0 <b>Mapear la información para verificar su autenticidad.</b>
            p.mb-0 Revisando la procedencia de la información desde sus orígenes.
    
    p.mb-0 <b> Esta gestion se debe realizar a traves de:</b>
    
    .row
      .col-sm-6.col-lg-3.mb-4.mb-lg-0
        .tarjeta--boton.color-primario.p-4
          .row.justify-content-center.mb-3
            .col-7
              figure
                img(src='@/assets/curso/temas/tema1/img5.1.svg', alt='Texto que describa la imagen')

          h3.text-center Proceso de datos.
          p.text-small Se debe revisar la información y eliminar lo que no sirve.

      .col-sm-6.col-lg-3.mb-4.mb-lg-0
        .tarjeta--boton.color-secundario.p-4
          .row.justify-content-center.mb-3
            .col-7
              figure
                img(src='@/assets/curso/temas/tema1/img5.2.svg', alt='Texto que describa la imagen')

          h3.text-center Elección de características.
          p.text-small Se deben tomar las variables influyentes para solucionar el problema.

      .col-sm-6.col-lg-3.mb-4.mb-sm-0
        .tarjeta--boton.color-acento-contenido.text-white--hover.p-4
          .row.justify-content-center.mb-3
            .col-7
              figure
                img(src='@/assets/curso/temas/tema1/img5.3.svg', alt='Texto que describa la imagen')

          h3.text-center Uso de algoritmos.
          p.text-small Se debe utilizar el modelo de conocimiento más acorde según las técnicas.

      .col-sm-6.col-lg-3
        .tarjeta--boton.color-acento-botones.p-4
          .row.justify-content-center.mb-3
            .col-7
              figure
                img(src='@/assets/curso/temas/tema1/img5.4.svg', alt='Texto que describa la imagen')

          h3.text-center Análisis y evaluación.
          p.text-small Sed ut perspiciatis unde omnis iste natus error sit vtatem accusa ntium dol.
  
    p.mb-0 <b> En el siguiente recurso se expondrán las técnicas que utiliza esta herramienta de recolección de datos:</b>
    
    .row.justify-content-center
    .tarjeta.tarjetas.p-4
      LineaTiempoC.color-acento-contenido(text-small)
          .row(titulo="Inferencia estadística.")
            .col-md-6.mb-4.mb-md-0
              p Se utiliza para inducir por muestras estadísticas el actuar de una comunidad, así como sus características.
        
            .col-md-2
              figure
                img(src='@/assets/curso/temas/tema1/img6.1.svg', alt='Texto que describa la imagen')

          .row(titulo="Árbol de decisión.")
            .col-md-6.mb-4.mb-md-0
              p Se plasma por medio de una imagen las decisiones que se pueden tomar ante diferentes situaciones y, así mismo, se grafican sus resultados o consecuencias.
        
            .col-md-2
              figure
                img(src='@/assets/curso/temas/tema1/img6.2.svg', alt='Texto que describa la imagen')
    
          .row(titulo="Redes neuronales.")
            .col-md-6.mb-4.mb-md-0
              p Imitan las neuronas del cerebro dando variables predictivas para la toma de decisiones.
        
            .col-md-2
              figure
                img(src='@/assets/curso/temas/tema1/img6.3.svg', alt='Texto que describa la imagen')
      
          .row(titulo="Inducción de reglas")
            .col-md-6.mb-4.mb-md-0
              p Genera métodos y lineamientos automáticos para identificar la información.
        
            .col-md-2
              figure
                img(src='@/assets/curso/temas/tema1/img6.4.svg', alt='Texto que describa la imagen')

          .row(titulo="Aprendizaje basado en instancias.")
            .col-md-6.mb-4.mb-md-0
              p Procesa los datos hasta brindar respuestas, mediado por situaciones o ejemplos previamente delineados
        
            .col-md-2
              figure
                img(src='@/assets/curso/temas/tema1/img6.5.svg', alt='Texto que describa la imagen')
              
          .row(titulo="Algoritmos genéticos")
            .col-md-6.mb-4.mb-md-0
              p Brindan soluciones a una situación por medio de una serie de algoritmos que siguen una función genética del problema.
        
            .col-md-2
              figure
                img(src='@/assets/curso/temas/tema1/img6.6.svg', alt='Texto que describa la imagen')
                
          .row(titulo="Programación lógica inductiva")
            .col-md-4.mb-4.mb-md-0
              p Por medio de la inteligencia artificial, utiliza lógica, hipótesis y el conocimiento previo para encontrar alternativas de solución.
        
            .col-md-2
              figure
                img(src='@/assets/curso/temas/tema1/img6.7.svg', alt='Texto que describa la imagen')
      .col-md-1
        figure
          img(src='@/assets/curso/temas/tema1/esquina.svg', alt='Texto que describa la imagen')
</template>

<script>
export default {
  name: 'Tema1',
  components: {},
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
