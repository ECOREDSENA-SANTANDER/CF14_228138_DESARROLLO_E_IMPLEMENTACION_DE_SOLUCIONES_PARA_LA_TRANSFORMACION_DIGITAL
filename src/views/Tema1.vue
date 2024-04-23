<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-botones
      .titulo-principal__numero
        span 1
      h1 Extracción y minería de datos
      
    .bloque1
      .col-sm-12.col-lg-12
      .bloque-texto-b.extra.color-secundario.p-3.px-0.mb-5(data-aos="fade-left")
        .bloque-texto-b__texto
          .row.justify-content-center.align-items-center.d-flex
            .col-lg-10.col-12
              p.mb-5 La identificacion de las fuentes de datos es el comienzo técnico para la extracción de todos los datos necesarios para los reportes y la creación de los tableros de mando para visualizar la información de la organización; su contraparte, es decir, el final de muchos ciclos de inteligencia de negocios, es la minería de datos como una de las alternativas luego de la extracción y limpieza de datos. 
            .col-lg-2.col-8.px-5
              img.mb-3.img-a.img-t.my-2(alt="" src="@/assets/curso/temas/tema1/img1.svg")
            .col-lg-12.col-12 
              p.mt-5 Los datos encierran patrones y comportamientos de los que es posible extraer conocimiento sobre los eventos que los han generado; frecuentemente las cosas no son como aparentan ser, por esta razón, la visualización de datos, aunque necesarias, no son del todo suficientes para llegar hasta el conocimiento que se esconde detrás de estructuras y relaciones poco superficiales en los datos (Gorenés, Casas y Minguillón, 2017). 
  
    .row.justify-content-center.mb-4(data-aos="zoom-in")
      .col-sm-12.col-lg-10
        .bg-50.p-4
          .row.justify-content-center
            .col-sm-12.col-lg-8.my-4
              p.mb-0 #[b La minería de datos se encuentra estrechamente relacionada con la aplicación de inteligencia artificial (IA),] en específico con procesos y técnicas algorítmicas de Machine Learning (ML) con sus múltiples posibilidades que son tema de profundización en otros componentes, adicional se emplea ostros aspectos de ingeniería como árboles de decisiones, redes neuronales, entre otros. 
            .col-sm-12.col-lg-2.my-3
              img.img-a.img-t(src='@/assets/curso/temas/tema1/img2.svg', alt='imagen decorativa') 
    p.mb-4
    p.mb-0 Este proceso consiste en tomar o extraer información requerida por las entidades de diferentes bases de datos o fuentes, su nombre está asociado a la minería ya que la extracción es vital en ambas actividades; por otro lado, su propósito es extraer datos útiles que ayuden a la resolución de las diferentes situaciones que se originan en las entidades y su gestión se puede hacer a través de herramientas estadísticas tanto básicas como avanzadas que proporciona la inteligencia artificial. 

    .row.min
      .col-lg-5.mb-0.mb-lg-0(data-aos="zoom-in")
        figure
          img.img-a.img-t.d-none.d-lg-block(src='@/assets/curso/temas/tema1/img3.jpg', alt='imagen decorativa')  

      .col-lg-7(data-aos="fade-left")
        .bg--piel.br_cstm.p-5.my-5.car
          p.mb-2 La minería de datos como disciplina estudia las herramientas y algoritmos que le permitan acceder y recolectar datos a las organizaciones para que esa información sea predictiva y se facilite su análisis para la toma de decisiones ante situaciones presentadas, mejorar los procesos de las entidades y sirve para la toma de decisiones. 
      .mb-4    
      p.mb-4 #[b La gestión con la minería de datos se debe realizar considerando los siguientes elementos:]

    
    .row.align-items-center.justify-content-center.mb-4.espacio
      .col-lg-4
        .bg11.d-flex.px-2.he-2-cus.my-1
          img.img-a.img-t.bg12.px-1.py-2(src='@/assets/curso/temas/tema1/identificar.svg', alt='')
          .wd-80-cus.my-3
            p.mx-1.fw-bold.ml-1-custom.mt-3.mb-0 Identificar la información
            p.mx-1.ml-1-custom  Encontrando las categorías o conjuntos de los datos.
      .col-lg-4
        .bg11.d-flex.px-2.he-2-cus.my-1
          img.img-a.img-t.bg12.px-1.py-2(src='@/assets/curso/temas/tema1/img4.2.svg', alt='')
          .wd-80-cus.my-3
            p.fw-bold.ml-1-custom.mt-3.mb-0  Clasificar la información
            p.ml-1-custom De forma automática encontrando los datos solicitados o de interés.
      .col-lg-4
        .bg11.d-flex.px-2.he-2-cus.my-1
          img.img-a.img-t.bg12.px-1.py-2(src='@/assets/curso/temas/tema1/img4.3.svg', alt='')
          .wd-80-cus.my-3
            p.mx-1.mt-3.mb-0 #[b Describir o brindar conceptos o información.] De forma compilada utilizando el método adecuado.
    .row.align-items-center.justify-content-center.mb-4(data-aos="zoom-in-left")
      .col-lg-4
        .bg11.d-flex.px-2.he-2-cus.my-1
          img.img-a.img-t.bg12.px-1.py-2(src='@/assets/curso/temas/tema1/img4.4.svg', alt='')
          .wd-80-cus.my-3
            p.fw-bold.ml-1-custom.mt-3.mb-0  Detectar anomalías en los datos
            p.ml-1-custom  Filtrando la información recibida para evitar desviaciones o fallas.
      .col-lg-4
        .bg11.d-flex.px-2.he-2-cus.my-1
          img.img-a.img-t.bg12.px-1.py-2(src='@/assets/curso/temas/tema1/img4.5.svg', alt='')
          .wd-80-cus.my-3
            p.mx-1.mt-3.mb-0 #[b Detectar las variables de la información.] Encontrando cambios que pueden originar los datos.
      .col-lg-4
        .bg11.d-flex.px-2.he-2-cus.my-1
          img.img-a.img-t.bg12.px-1.py-2(src='@/assets/curso/temas/tema1/img4.6.svg', alt='')
          .wd-80-cus.my-3
            p.mx-1.mt-3.mb-0 #[b Mapear la información para verificar su autenticidad.] Revisando la procedencia de la información desde sus orígenes.
          
    .row.fondoo.align-items-center.py-4.py-md-5.mb-5
      .col-lg-12.col-12.px-lg-5.px-4
        .row.justify-content-center.mb-4(data-aos="fade-down")  
        p.mb-4 #[b Esta gestion se debe realizar a traves de:]
    
        .row
          .col-lg-3.col-md-10.col-12
            .tarjeta--boton.color-pri.p-3
              .row.justify-content-center.mb-4.text-center
                .col-5
                  figure
                    img.img-a.img-t(src='@/assets/curso/temas/tema1/img5.1.svg', alt='Texto que describa la imagen')
                p.mb-4
                h5.mb-3 Proceso de datos.
                p.mb-4 Se debe revisar la información y eliminar lo que no sirve.
            p.mb-4
          .col-lg-3.col-md-10.col-12
            .tarjeta--boton.color-pri.p-3
              .row.justify-content-center.mb-4.text-center
                .col-5
                  figure
                    img.img-a.img-t(src='@/assets/curso/temas/tema1/img5.2.svg', alt='Texto que describa la imagen')
                p.mb-4
                h5.mb-3 Elección de características.
                p.mb-3 Se deben tomar las variables influyentes para solucionar el problema.
            p.mb-4
          .col-lg-3.col-md-10.col-12
            .tarjeta.color-pri.p-3
              .row.justify-content-center.mb-3.text-center
                .col-5
                  figure
                    img.img-a.img-t(src='@/assets/curso/temas/tema1/img5.3.svg', alt='Texto que describa la imagen')
                p.mb-4
                h5.mb-3 Uso de algoritmos.
                p.mb-4 Se debe utilizar el modelo de conocimiento más acorde según las técnicas.
            p.mb-4
          .col-lg-3.col-md-10.col-12
            .tarjeta--boton.color-pri.p-3.mb-5
              .row.justify-content-center.mb-4.text-center 
                .col-5
                  figure
                    img.img-a.img-t(src='@/assets/curso/temas/tema1/img5.4.svg', alt='Texto que describa la imagen')
                p.mb-4
                h5.mb-3 Análisis y evaluación.
                p.mb-0 Se debe comprobar que las validaciones sean reales.
            p.mb-4
    
    p.mb-4 #[b En el siguiente recurso se expondrán las técnicas que utiliza esta herramienta de recolección de datos:]
    
    .row.justify-content-center.align-items-center.mb-4.bg21.bg-norepeat.border-20-cus
      .col-lg-12.my-3.ted
        .tarjeta.tarjeta--transparent.p-4.mb-5
          LineaTiempoC.color-acento-contenido
            .row.justify-content-center.align-items-center(titulo="Inferencia estadística")
              .col-sm-12.col-md-8.d-flex.mt-0.flex-sm-column-cus
                p.my-5 Se utiliza para inducir por muestras estadísticas el actuar de una comunidad, así como sus características.
                img.ml-1-custome.img-a.img-t.px-1.py-2.d-none.d-lg-block(src='@/assets/curso/temas/tema1/img6.1.svg', alt='')
            .row.justify-content-center.align-items-center(titulo="Árbol de decisión")
              .col-sm-12.col-md-8.d-flex.mt-0.flex-sm-column-cus
                p.my-5 Se plasma por medio de una imagen las decisiones que se pueden tomar ante diferentes situaciones y, así mismo, se grafican sus resultados o consecuencias.
                img.ml-1-custome.img-a.img-t.px-1.py-2.d-none.d-lg-block(src='@/assets/curso/temas/tema1/img6.2.svg', alt='')
            .row.justify-content-center.align-items-center(titulo="Redes neuronales")
              .col-sm-12.col-md-8.d-flex.mt-0.flex-sm-column-cus
                p.my-5 Imitan las neuronas del cerebro dando variables predictivas para la toma de decisiones.
                img.ml-1-custome.img-a.img-t.px-1.py-2.d-none.d-lg-block(src='@/assets/curso/temas/tema1/img6.3.svg', alt='')
            .row.justify-content-center.align-items-center(titulo="Inducción de reglas")
              .col-sm-12.col-md-8.d-flex.mt-0.flex-sm-column-cus
                p.my-5 Genera métodos y lineamientos automáticos para identificar la información.
                img.ml-1-custome.img-a.img-t.px-1.py-2.d-none.d-lg-block(src='@/assets/curso/temas/tema1/img6.4.svg', alt='')
            .row.justify-content-center.align-items-center(titulo="Aprendizaje basado en instancias")
              .col-sm-12.col-md-8.d-flex.mt-0.flex-sm-column-cus
                p.my-5 Procesa los datos hasta brindar respuestas, mediado por situaciones o ejemplos previamente delineados.
                img.ml-1-custome.img-a.img-t.px-1.py-2.d-none.d-lg-block(src='@/assets/curso/temas/tema1/img6.5.svg', alt='')
            .row.justify-content-center.align-items-center(titulo="Algoritmos genéticos")
              .col-sm-12.col-md-8.d-flex.mt-0.flex-sm-column-cus
                p.my-5 Brindan soluciones a una situación por medio de una serie de algoritmos que siguen una función genética del problema.
                img.ml-1-custome.img-a.img-t.px-1.py-2.d-none.d-lg-block(src='@/assets/curso/temas/tema1/img6.6.svg', alt='')
            .row.justify-content-center.align-items-center(titulo="Programación lógica inductiva")
              .col-sm-12.col-md-8.d-flex.mt-0.flex-sm-column-cus
                p.my-5 Por medio de la inteligencia artificial, utiliza lógica, hipótesis y el conocimiento previo para encontrar alternativas de solución.
                img.ml-1-custome.img-a.img-t.px-1.py-0.d-none.d-lg-block(src='@/assets/curso/temas/tema1/img6.7.svg', alt='')
          .row
            .col-1.figure.esquina
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
