// app.js

// Pictogramas por categoría
const pictograms = {
  Alimentacion: [
      { img: "../src/img/BIBLIOTECA PICTOGRAMAS/1 - ALIMENTACIÓN/1 - MANZANA.png", text: "MANZANA" },
      { img: "../src/img/BIBLIOTECA PICTOGRAMAS/1 - ALIMENTACIÓN/2 - MANZANA VERDE.png", text: "MANZANA VERDE" },
      { img: "../src/img/BIBLIOTECA PICTOGRAMAS/1 - ALIMENTACIÓN/3 - PERA.png", text: "PERA" },
      { img: "../src/img/BIBLIOTECA PICTOGRAMAS/1 - ALIMENTACIÓN/4 - UVA.png", text: "UVA" },
      { img: "../src/img/BIBLIOTECA PICTOGRAMAS/1 - ALIMENTACIÓN/5 - NARANJA.png", text: "NARANJA" },
      { img: "../src/img/BIBLIOTECA PICTOGRAMAS/1 - ALIMENTACIÓN/6 - FRUTILLA.png", text: "FRUTILLA" },
      { img: "../src/img/BIBLIOTECA PICTOGRAMAS/1 - ALIMENTACIÓN/7 - LIMON.png", text: "LIMON" },
      { img: "../src/img/BIBLIOTECA PICTOGRAMAS/1 - ALIMENTACIÓN/8 - BANANA.png", text: "BANANA" },
      { img: "../src/img/BIBLIOTECA PICTOGRAMAS/1 - ALIMENTACIÓN/9 - ANANA.png", text: "ANANÁ" },
      { img: "../src/img/BIBLIOTECA PICTOGRAMAS/1 - ALIMENTACIÓN/10 - DURAZNO.png", text: "DURAZNO" },
      { img: "../src/img/BIBLIOTECA PICTOGRAMAS/1 - ALIMENTACIÓN/11 - FRAMBUEZA.png", text: "FRAMBUEZA" },
      { img: "../src/img/BIBLIOTECA PICTOGRAMAS/1 - ALIMENTACIÓN/12 - SANDIA.png", text: "SANDIA" },
      { img: "../src/img/BIBLIOTECA PICTOGRAMAS/1 - ALIMENTACIÓN/13 - KIWI.png", text: "KIWI" },
      { img: "../src/img/BIBLIOTECA PICTOGRAMAS/1 - ALIMENTACIÓN/14 - MANGO.png", text: "MANGO" },
      { img: "../src/img/BIBLIOTECA PICTOGRAMAS/1 - ALIMENTACIÓN/15 - CEREZA.png", text: "CEREZA" },
      { img: "../src/img/BIBLIOTECA PICTOGRAMAS/1 - ALIMENTACIÓN/16 - TOMATE.png", text: "TOMATE" },
      { img: "../src/img/BIBLIOTECA PICTOGRAMAS/1 - ALIMENTACIÓN/17 - LECHUGA.png", text: "LEGHUGA" },
      { img: "../src/img/BIBLIOTECA PICTOGRAMAS/1 - ALIMENTACIÓN/18 - ZANAHORIA.png", text: "ZANAHORIA" },
      { img: "../src/img/BIBLIOTECA PICTOGRAMAS/1 - ALIMENTACIÓN/19 - BROCOLI.png", text: "BORCOLÍ" },
      { img: "../src/img/BIBLIOTECA PICTOGRAMAS/1 - ALIMENTACIÓN/20 - CEBOLLA.png", text: "CEBOLLA" },
      { img: "../src/img/BIBLIOTECA PICTOGRAMAS/1 - ALIMENTACIÓN/21 - PAPA.png", text: "PAPA" },
      { img: "../src/img/BIBLIOTECA PICTOGRAMAS/1 - ALIMENTACIÓN/22 - ZAPALLO.png", text: "ZAPALLO" },
      { img: "../src/img/BIBLIOTECA PICTOGRAMAS/1 - ALIMENTACIÓN/23 - CHOCLO.png", text: "CHOCLO" },
      { img: "../src/img/BIBLIOTECA PICTOGRAMAS/1 - ALIMENTACIÓN/24 - PALTA_AGUACATE.png", text: "PALTA/AGUACATE" },
      { img: "../src/img/BIBLIOTECA PICTOGRAMAS/1 - ALIMENTACIÓN/25 - COLIFLOR.png", text: "COLIFLOR" },
      { img: "../src/img/BIBLIOTECA PICTOGRAMAS/1 - ALIMENTACIÓN/26 - CARNE.png", text: "CARNE" },
      { img: "../src/img/BIBLIOTECA PICTOGRAMAS/1 - ALIMENTACIÓN/27 - PESACADO.png", text: "PESACADO" },
      { img: "../src/img/BIBLIOTECA PICTOGRAMAS/1 - ALIMENTACIÓN/28 - POLLO.png", text: "POLLO" },
      { img: "../src/img/BIBLIOTECA PICTOGRAMAS/1 - ALIMENTACIÓN/29 - SALCHICHA.png", text: "SALCHICHA" },
      { img: "../src/img/BIBLIOTECA PICTOGRAMAS/1 - ALIMENTACIÓN/30 - HUEVO.png", text: "HUEVO" },
      { img: "../src/img/BIBLIOTECA PICTOGRAMAS/1 - ALIMENTACIÓN/31 - LECHE.png", text: "LECHE" },
      { img: "../src/img/BIBLIOTECA PICTOGRAMAS/1 - ALIMENTACIÓN/32 - YOGURT.png", text: "YOGURT" },
      { img: "../src/img/BIBLIOTECA PICTOGRAMAS/1 - ALIMENTACIÓN/33 - YOGURT BEBIBLE.png", text: "YOGURT BEBIBLE" },
      { img: "../src/img/BIBLIOTECA PICTOGRAMAS/1 - ALIMENTACIÓN/34 - QUESO.png", text: "QUESO" },
      { img: "../src/img/BIBLIOTECA PICTOGRAMAS/1 - ALIMENTACIÓN/35 - MANTECA.png", text: "MANTECA" },
      { img: "../src/img/BIBLIOTECA PICTOGRAMAS/1 - ALIMENTACIÓN/36 - GALLETITA.png", text: "GALLETITA" },
      { img: "../src/img/BIBLIOTECA PICTOGRAMAS/1 - ALIMENTACIÓN/37 - CUPCAKE.png", text: "CUPCAKE" },
      { img: "../src/img/BIBLIOTECA PICTOGRAMAS/1 - ALIMENTACIÓN/38 - CHOCOLATE NEGRO.png", text: "CHOCOLATE NEGRO" },
      { img: "../src/img/BIBLIOTECA PICTOGRAMAS/1 - ALIMENTACIÓN/39 - CHOCOLATE BLANCO.png", text: "CHOCOLATE BLANCO" },
      { img: "../src/img/BIBLIOTECA PICTOGRAMAS/1 - ALIMENTACIÓN/40 - CHUPETIN.png", text: "CHUPETIN" },
      { img: "../src/img/BIBLIOTECA PICTOGRAMAS/1 - ALIMENTACIÓN/41 - HELADO PALITO.png", text: "HELADO PALITO" },
      { img: "../src/img/BIBLIOTECA PICTOGRAMAS/1 - ALIMENTACIÓN/42 - HELADO CUCURUCHO.png", text: "HELADO CUCURUCHO" },
      { img: "../src/img/BIBLIOTECA PICTOGRAMAS/1 - ALIMENTACIÓN/43 - HELADO.png", text: "HELADO" },
      { img: "../src/img/BIBLIOTECA PICTOGRAMAS/1 - ALIMENTACIÓN/44 - DONA.png", text: "DONA" },
      { img: "../src/img/BIBLIOTECA PICTOGRAMAS/1 - ALIMENTACIÓN/45 - FLAN.png", text: "FLAN" },
      { img: "../src/img/BIBLIOTECA PICTOGRAMAS/1 - ALIMENTACIÓN/46 - TORTA.png", text: "TORTA" },
      { img: "../src/img/BIBLIOTECA PICTOGRAMAS/1 - ALIMENTACIÓN/47 - MEDIALUNA.png", text: "MEDIALUNA" },
      { img: "../src/img/BIBLIOTECA PICTOGRAMAS/1 - ALIMENTACIÓN/48 - CARAMELO.png", text: "CARAMELO" },
      { img: "../src/img/BIBLIOTECA PICTOGRAMAS/1 - ALIMENTACIÓN/49 - WAFFLE.png", text: "WAFFLE" },
      { img: "../src/img/BIBLIOTECA PICTOGRAMAS/1 - ALIMENTACIÓN/50 - ALFAJOR.png", text: "ALFAJOR" }


  ],
  Accioines_y_Rutinas: [
      { img: "../src/img/BIBLIOTECA PICTOGRAMAS/2 - ACCIONES Y RUTINAS/51 - CAMINAR.png", text: "CAMINAR" },
      { img: "../src/img/BIBLIOTECA PICTOGRAMAS/2 - ACCIONES Y RUTINAS/52 - LEER.png", text: "LEER" },
      { img: "../src/img/BIBLIOTECA PICTOGRAMAS/2 - ACCIONES Y RUTINAS/53 - TRABAJAR.png", text: "TRABAJAR" },
      { img: "../src/img/BIBLIOTECA PICTOGRAMAS/2 - ACCIONES Y RUTINAS/54 - COMER.png", text: "COMER" },
      { img: "../src/img/BIBLIOTECA PICTOGRAMAS/2 - ACCIONES Y RUTINAS/55 - CANTAR.png", text: "CANTAR" },
      { img: "../src/img/BIBLIOTECA PICTOGRAMAS/2 - ACCIONES Y RUTINAS/56 - CORRER.png", text: "CORRER" },
      { img: "../src/img/BIBLIOTECA PICTOGRAMAS/2 - ACCIONES Y RUTINAS/57 - ABRIR.png", text: "ABRIR" },
      { img: "../src/img/BIBLIOTECA PICTOGRAMAS/2 - ACCIONES Y RUTINAS/58 - CERRAR.png", text: "CERRAR" },
      { img: "../src/img/BIBLIOTECA PICTOGRAMAS/2 - ACCIONES Y RUTINAS/59 - SALUDAR.png", text: "SALUDAR" },
      { img: "../src/img/BIBLIOTECA PICTOGRAMAS/2 - ACCIONES Y RUTINAS/60 - LLORAR.png", text: "LLORAR" },
      { img: "../src/img/BIBLIOTECA PICTOGRAMAS/2 - ACCIONES Y RUTINAS/61 - SUBIR.png", text: "SUBIR" },
      { img: "../src/img/BIBLIOTECA PICTOGRAMAS/2 - ACCIONES Y RUTINAS/62 - BAJAR.png", text: "BAJAR" },
      { img: "../src/img/BIBLIOTECA PICTOGRAMAS/2 - ACCIONES Y RUTINAS/63 - SUBIR.png", text: "SUBIR" },
      { img: "../src/img/BIBLIOTECA PICTOGRAMAS/2 - ACCIONES Y RUTINAS/64 - BAJAR.png", text: "BAJAR" },
      { img: "../src/img/BIBLIOTECA PICTOGRAMAS/2 - ACCIONES Y RUTINAS/65 - BAÑAR.png", text: "BAÑAR" },
      { img: "../src/img/BIBLIOTECA PICTOGRAMAS/2 - ACCIONES Y RUTINAS/66 - DORMIR.png", text: "DORMIR" },
      { img: "../src/img/BIBLIOTECA PICTOGRAMAS/2 - ACCIONES Y RUTINAS/67 - DESPERTAR.png", text: "DESPERTAR" },
      { img: "../src/img/BIBLIOTECA PICTOGRAMAS/2 - ACCIONES Y RUTINAS/68 - DIBUJAR.png", text: "DIBUJAR" },
      { img: "../src/img/BIBLIOTECA PICTOGRAMAS/2 - ACCIONES Y RUTINAS/69 - SALTAR.png", text: "SALTAR" },
      { img: "../src/img/BIBLIOTECA PICTOGRAMAS/2 - ACCIONES Y RUTINAS/70 - ESTUDIAR.png", text: "ESTUDIAR" },
      { img: "../src/img/BIBLIOTECA PICTOGRAMAS/2 - ACCIONES Y RUTINAS/71 - COCINAR.png", text: "COCINAR" },
      { img: "../src/img/BIBLIOTECA PICTOGRAMAS/2 - ACCIONES Y RUTINAS/72 - LIMPIAR.png", text: "LIMPIAR" },
      { img: "../src/img/BIBLIOTECA PICTOGRAMAS/2 - ACCIONES Y RUTINAS/73 - JUGAR.png", text: "JUGAR" },
      { img: "../src/img/BIBLIOTECA PICTOGRAMAS/2 - ACCIONES Y RUTINAS/74 - TENER.png", text: "TENER" },
      { img: "../src/img/BIBLIOTECA PICTOGRAMAS/2 - ACCIONES Y RUTINAS/75 - HABLAR.png", text: "HABLAR" },
      { img: "../src/img/BIBLIOTECA PICTOGRAMAS/2 - ACCIONES Y RUTINAS/76 - CEPILLARSE DIENTES.png", text: "CEPILLARSE LOS DIENTES" },
      { img: "../src/img/BIBLIOTECA PICTOGRAMAS/2 - ACCIONES Y RUTINAS/77 - IR AL BAÑO.png", text: "IR AL BAÑO" },
      { img: "../src/img/BIBLIOTECA PICTOGRAMAS/2 - ACCIONES Y RUTINAS/78 - CAMBIARSE-VESTIRSE.png", text: "CAMBIARSE/VESTIRSE" },
      { img: "../src/img/BIBLIOTECA PICTOGRAMAS/2 - ACCIONES Y RUTINAS/79 - IR AL COLEGIO.png", text: "IR AL COLEGIO" },
      { img: "../src/img/BIBLIOTECA PICTOGRAMAS/2 - ACCIONES Y RUTINAS/80 - QUIERO.png", text: "QUIERO" },
      { img: "../src/img/BIBLIOTECA PICTOGRAMAS/2 - ACCIONES Y RUTINAS/81 - DESAYUNO.png", text: "DESAYUNO" },
      { img: "../src/img/BIBLIOTECA PICTOGRAMAS/2 - ACCIONES Y RUTINAS/82 - ALMUERZO.png", text: "ALMUERZO" },
      { img: "../src/img/BIBLIOTECA PICTOGRAMAS/2 - ACCIONES Y RUTINAS/83 - MERIENDA.png", text: "CAMINAR" },
      { img: "../src/img/BIBLIOTECA PICTOGRAMAS/2 - ACCIONES Y RUTINAS/84 - CENA.png", text: "CENA" },
      { img: "../src/img/BIBLIOTECA PICTOGRAMAS/2 - ACCIONES Y RUTINAS/85 - VAMOS A ....png", text: "VAMOS A ..." },
      { img: "../src/img/BIBLIOTECA PICTOGRAMAS/2 - ACCIONES Y RUTINAS/86 - HAY.png", text: "HAY" },
      { img: "../src/img/BIBLIOTECA PICTOGRAMAS/2 - ACCIONES Y RUTINAS/87 - VER.png", text: "VER" }
  ],
  Lugares: [
      { img: "../src/img/BIBLIOTECA PICTOGRAMAS/3 - LUGARES/88 - CASA.png", text: "CASA" },
      { img: "../src/img/BIBLIOTECA PICTOGRAMAS/3 - LUGARES/89 - HOSPITAL.png", text: "HOSPITAL" },
      { img: "../src/img/BIBLIOTECA PICTOGRAMAS/3 - LUGARES/90 - IGLESIA.png", text: "IGLESIA" },
      { img: "../src/img/BIBLIOTECA PICTOGRAMAS/3 - LUGARES/91 - COLEGIO.png", text: "COLEGIO" },
      { img: "../src/img/BIBLIOTECA PICTOGRAMAS/3 - LUGARES/92 - AEROPUERTO.png", text: "AEROPUERTO" },
      { img: "../src/img/BIBLIOTECA PICTOGRAMAS/3 - LUGARES/93 - JUGUETERIA.png", text: "JUGUETERIA" },
      { img: "../src/img/BIBLIOTECA PICTOGRAMAS/3 - LUGARES/94 - SHOPPING.png", text: "SHOPPING" },
      { img: "../src/img/BIBLIOTECA PICTOGRAMAS/3 - LUGARES/95 - HELADERÍA.png", text: "HELADERIA" },
      { img: "../src/img/BIBLIOTECA PICTOGRAMAS/3 - LUGARES/96 - SUPERMERCADO.png", text: "SUPERMERCADO" },
      { img: "../src/img/BIBLIOTECA PICTOGRAMAS/3 - LUGARES/97 - FARMACIA.png", text: "FARMACIA" },
  ],
  Juguetes: [
    { img: "../src/img/BIBLIOTECA PICTOGRAMAS/4 - JUGUETES/98 - PELOTA.png", text: "PELOTA" },
    { img: "../src/img/BIBLIOTECA PICTOGRAMAS/4 - JUGUETES/99 - CRAYONES.png", text: "CRAYONES" },
    { img: "../src/img/BIBLIOTECA PICTOGRAMAS/4 - JUGUETES/100 - BLOQUES.png", text: "BLOQUES" },
    { img: "../src/img/BIBLIOTECA PICTOGRAMAS/4 - JUGUETES/101 - AUTO.png", text: "AUTO" },
    { img: "../src/img/BIBLIOTECA PICTOGRAMAS/4 - JUGUETES/102 - ROMPECABEZA.png", text: "ROMPECABEZA" },
    { img: "../src/img/BIBLIOTECA PICTOGRAMAS/4 - JUGUETES/103 - TREN.png", text: "TREN" },
    { img: "../src/img/BIBLIOTECA PICTOGRAMAS/4 - JUGUETES/104 - VIDEJUEGO.png", text: "VIDEOJUEGO" },
    { img: "../src/img/BIBLIOTECA PICTOGRAMAS/4 - JUGUETES/105 - PELUCHE.png", text: "PELUCHE" },
    { img: "../src/img/BIBLIOTECA PICTOGRAMAS/4 - JUGUETES/106 - MUÑECA.png", text: "MUÑECA" },
    { img: "../src/img/BIBLIOTECA PICTOGRAMAS/4 - JUGUETES/107 - AGREGAR.png", text: "AGREGAR" },
  ],
  Animales: [
  { img: "../src/img/BIBLIOTECA PICTOGRAMAS/5 - ANIMALES/108 - PEZ.png", text: "PEZ" },
  { img: "../src/img/BIBLIOTECA PICTOGRAMAS/5 - ANIMALES/109 - PAJARO - AVE.png", text: "PAJARO" },
  { img: "../src/img/BIBLIOTECA PICTOGRAMAS/5 - ANIMALES/110 - VACA.png", text: "VACA" },
  { img: "../src/img/BIBLIOTECA PICTOGRAMAS/5 - ANIMALES/111 - CHANCHO.png", text: "CHANCHO" },
  { img: "../src/img/BIBLIOTECA PICTOGRAMAS/5 - ANIMALES/112 - ABEJA.png", text: "ABEJA" },
  { img: "../src/img/BIBLIOTECA PICTOGRAMAS/5 - ANIMALES/113 - TORTUGA.png", text: "TORTUGA" },
  { img: "../src/img/BIBLIOTECA PICTOGRAMAS/5 - ANIMALES/114 - OVEJA.png", text: "OVEJA" },
  { img: "../src/img/BIBLIOTECA PICTOGRAMAS/5 - ANIMALES/115 - GATO.png", text: "GATO" },
  { img: "../src/img/BIBLIOTECA PICTOGRAMAS/5 - ANIMALES/116 - PERRO.png", text: "PERRO" },
  { img: "../src/img/BIBLIOTECA PICTOGRAMAS/5 - ANIMALES/117 - SERPIENTE.png", text: "SERPIENTE" },
  ],
  Palabras_Funcionales: [
  { img: "../src/img/BIBLIOTECA PICTOGRAMAS/6 - PALABRAS FUNCIONALES/118 - SI.png", text: "SI" },
  { img: "../src/img/BIBLIOTECA PICTOGRAMAS/6 - PALABRAS FUNCIONALES/119 - NO.png", text: "NO" },
  { img: "../src/img/BIBLIOTECA PICTOGRAMAS/6 - PALABRAS FUNCIONALES/120 - GRACIAS.png", text: "GRACIAS" },
  { img: "../src/img/BIBLIOTECA PICTOGRAMAS/6 - PALABRAS FUNCIONALES/121 - DE NADA.png", text: "DE NADA" },
  { img: "../src/img/BIBLIOTECA PICTOGRAMAS/6 - PALABRAS FUNCIONALES/122 - POR FAVOR.png", text: "POR FAVOR" },
  { img: "../src/img/BIBLIOTECA PICTOGRAMAS/6 - PALABRAS FUNCIONALES/123 - CHAU - ADIOS.png", text: "CHAU/ADIOS" },
  { img: "../src/img/BIBLIOTECA PICTOGRAMAS/6 - PALABRAS FUNCIONALES/124 - HOLA.png", text: "HOLA" },
  { img: "../src/img/BIBLIOTECA PICTOGRAMAS/6 - PALABRAS FUNCIONALES/125 - MAL.png", text: "MAL" },
  { img: "../src/img/BIBLIOTECA PICTOGRAMAS/6 - PALABRAS FUNCIONALES/126 - BIEN.png", text: "BIEN" },
  { img: "../src/img/BIBLIOTECA PICTOGRAMAS/6 - PALABRAS FUNCIONALES/127 - OK - BUENO.png", text: "OK/BUENO" },
  { img: "../src/img/BIBLIOTECA PICTOGRAMAS/6 - PALABRAS FUNCIONALES/128 - ELLA.png", text: "ELLA" },
  { img: "../src/img/BIBLIOTECA PICTOGRAMAS/6 - PALABRAS FUNCIONALES/129 - ÉL.png", text: "ÉL" },
  { img: "../src/img/BIBLIOTECA PICTOGRAMAS/6 - PALABRAS FUNCIONALES/130 - ELLOS - ELLAS.png", text: "ELLOS/ELLAS" },
  { img: "../src/img/BIBLIOTECA PICTOGRAMAS/6 - PALABRAS FUNCIONALES/131 NOSOTROS-AS.png", text: "NOSOTROS/NOSOTRAS" },
  { img: "../src/img/BIBLIOTECA PICTOGRAMAS/6 - PALABRAS FUNCIONALES/132 - YO.png", text: "YO" },
  { img: "../src/img/BIBLIOTECA PICTOGRAMAS/6 - PALABRAS FUNCIONALES/133 - QUIEN.png", text: "QUIEN" },
  { img: "../src/img/BIBLIOTECA PICTOGRAMAS/6 - PALABRAS FUNCIONALES/134 - ESO.png", text: "ESO" },
  { img: "../src/img/BIBLIOTECA PICTOGRAMAS/6 - PALABRAS FUNCIONALES/135 - AQUELLO.png", text: "AQUELLO" },
  { img: "../src/img/BIBLIOTECA PICTOGRAMAS/6 - PALABRAS FUNCIONALES/136 - ESTO.png", text: "ESTO" },
  { img: "../src/img/BIBLIOTECA PICTOGRAMAS/6 - PALABRAS FUNCIONALES/137 - Y.png", text: "Y" },
  { img: "../src/img/BIBLIOTECA PICTOGRAMAS/6 - PALABRAS FUNCIONALES/138 - O.png", text: "O" },

  ],
  Emociones: [
  { img: "../src/img/BIBLIOTECA PICTOGRAMAS/7 - EMOCIONES/139 - FELIZ.png", text: "FELIZ" },
  { img: "../src/img/BIBLIOTECA PICTOGRAMAS/7 - EMOCIONES/140 - TRISTE.png", text: "TRISTE" },
  { img: "../src/img/BIBLIOTECA PICTOGRAMAS/7 - EMOCIONES/141 - LLORAR.png", text: "LLORAR" },
  { img: "../src/img/BIBLIOTECA PICTOGRAMAS/7 - EMOCIONES/142 - MIEDO.png", text: "MIEDO" },
  { img: "../src/img/BIBLIOTECA PICTOGRAMAS/7 - EMOCIONES/143 - ASCO.png", text: "ASCO" },
  { img: "../src/img/BIBLIOTECA PICTOGRAMAS/7 - EMOCIONES/144 - FRUSTRACION.png", text: "FRUSTACIÓN" },
  { img: "../src/img/BIBLIOTECA PICTOGRAMAS/7 - EMOCIONES/145 - ENOJO.png", text: "ENOJO" },
  { img: "../src/img/BIBLIOTECA PICTOGRAMAS/7 - EMOCIONES/146 - AMOR.png", text: "AMOR" },
  { img: "../src/img/BIBLIOTECA PICTOGRAMAS/7 - EMOCIONES/147 - SUEÑO.png", text: "SUEÑO" },
  { img: "../src/img/BIBLIOTECA PICTOGRAMAS/7 - EMOCIONES/148 - ENFERMO.png", text: "ENFERMO" }

  ],
  Partes_del_Cuerpo: [
  { img: "../src/img/BIBLIOTECA PICTOGRAMAS/8 - PARTES DE CUERPO/149 - CABELLO.png", text: "CABELLO" },
  { img: "../src/img/BIBLIOTECA PICTOGRAMAS/8 - PARTES DE CUERPO/150 - NARIZ.png", text: "NARIZ" },
  { img: "../src/img/BIBLIOTECA PICTOGRAMAS/8 - PARTES DE CUERPO/151 - BOCA.png", text: "BOCA" },
  { img: "../src/img/BIBLIOTECA PICTOGRAMAS/8 - PARTES DE CUERPO/152 - OJO.png", text: "OJOS" },
  { img: "../src/img/BIBLIOTECA PICTOGRAMAS/8 - PARTES DE CUERPO/153 - CARA.png", text: "CARA" },
  { img: "../src/img/BIBLIOTECA PICTOGRAMAS/8 - PARTES DE CUERPO/154 - OREJA.png", text: "OREJA" },
  { img: "../src/img/BIBLIOTECA PICTOGRAMAS/8 - PARTES DE CUERPO/155 - LENGUA.png", text: "LENGUA" },
  { img: "../src/img/BIBLIOTECA PICTOGRAMAS/8 - PARTES DE CUERPO/156 - ESPALDA.png", text: "ESPALDA" },
  { img: "../src/img/BIBLIOTECA PICTOGRAMAS/8 - PARTES DE CUERPO/157 - HOMBRO.png", text: "HOMBRO" },
  { img: "../src/img/BIBLIOTECA PICTOGRAMAS/8 - PARTES DE CUERPO/158 - CUELLO.png", text: "CUELLO" },
  { img: "../src/img/BIBLIOTECA PICTOGRAMAS/8 - PARTES DE CUERPO/159 - CUERPO.png", text: "CUERPO" },
  { img: "../src/img/BIBLIOTECA PICTOGRAMAS/8 - PARTES DE CUERPO/160 - DEDOS DEL PIE.png", text: "DEDOS DEL PIE" },
  { img: "../src/img/BIBLIOTECA PICTOGRAMAS/8 - PARTES DE CUERPO/161 - PIERNA.png", text: "PIERNA" },
  { img: "../src/img/BIBLIOTECA PICTOGRAMAS/8 - PARTES DE CUERPO/162 - PIE.png", text: "PIE" },
  { img: "../src/img/BIBLIOTECA PICTOGRAMAS/8 - PARTES DE CUERPO/163 - RODILLA.png", text: "RODILLA" },
  { img: "../src/img/BIBLIOTECA PICTOGRAMAS/8 - PARTES DE CUERPO/164 - TORSO.png", text: "TORSO" },
  { img: "../src/img/BIBLIOTECA PICTOGRAMAS/8 - PARTES DE CUERPO/165 - CODO.png", text: "CODO" },
  { img: "../src/img/BIBLIOTECA PICTOGRAMAS/8 - PARTES DE CUERPO/166 - BRAZO.png", text: "BRAZO" },
  { img: "../src/img/BIBLIOTECA PICTOGRAMAS/8 - PARTES DE CUERPO/167 - DEDO DE LA MANO.png", text: "DEDO DE LA MANO" },
  { img: "../src/img/BIBLIOTECA PICTOGRAMAS/8 - PARTES DE CUERPO/168 - MANO.png", text: "MANO" }

  ],
  Colores: [
  { img: "../src/img/BIBLIOTECA PICTOGRAMAS/9 - COLORES/169 - NEGRO.png", text: "NEGRO" },
  { img: "../src/img/BIBLIOTECA PICTOGRAMAS/9 - COLORES/170 - BLANCO.png", text: "BLANCO" },
  { img: "../src/img/BIBLIOTECA PICTOGRAMAS/9 - COLORES/171 - ROJO.png", text: "ROJO" },
  { img: "../src/img/BIBLIOTECA PICTOGRAMAS/9 - COLORES/172 - AMARILLO.png", text: "AMARILLO" },
  { img: "../src/img/BIBLIOTECA PICTOGRAMAS/9 - COLORES/173 - NARANJA.png", text: "NARANJA" },
  { img: "../src/img/BIBLIOTECA PICTOGRAMAS/9 - COLORES/174 - ROSADO.png", text: "ROSADO" },
  { img: "../src/img/BIBLIOTECA PICTOGRAMAS/9 - COLORES/175 - LILA - VIOLETA.png", text: "LILA" },
  { img: "../src/img/BIBLIOTECA PICTOGRAMAS/9 - COLORES/176 - CELESTE.png", text: "CELESTE" },
  { img: "../src/img/BIBLIOTECA PICTOGRAMAS/9 - COLORES/177 - AZUL.png", text: "AZUL" },
  { img: "../src/img/BIBLIOTECA PICTOGRAMAS/9 - COLORES/178 - VERDE.png", text: "VERDE" },
  
  ],
  Letras_y_Números: [
  { img: "../src/img/BIBLIOTECA PICTOGRAMAS/10 - LETRAS Y NUMEROS/179 - A.png", text: "A" },
  { img: "../src/img/BIBLIOTECA PICTOGRAMAS/10 - LETRAS Y NUMEROS/180 - BE LARGA.png", text: "B" },
  { img: "../src/img/BIBLIOTECA PICTOGRAMAS/10 - LETRAS Y NUMEROS/181 - CE.png", text: "C" },
  { img: "../src/img/BIBLIOTECA PICTOGRAMAS/10 - LETRAS Y NUMEROS/182 - DE.png", text: "D" },
  { img: "../src/img/BIBLIOTECA PICTOGRAMAS/10 - LETRAS Y NUMEROS/183 - E.png", text: "E" },
  { img: "../src/img/BIBLIOTECA PICTOGRAMAS/10 - LETRAS Y NUMEROS/184 - EFE.png", text: "F" },
  { img: "../src/img/BIBLIOTECA PICTOGRAMAS/10 - LETRAS Y NUMEROS/185 - GE.png", text: "G" },
  { img: "../src/img/BIBLIOTECA PICTOGRAMAS/10 - LETRAS Y NUMEROS/186 - HACHE.png", text: "H" },
  { img: "../src/img/BIBLIOTECA PICTOGRAMAS/10 - LETRAS Y NUMEROS/187 - I.png", text: "I" },
  { img: "../src/img/BIBLIOTECA PICTOGRAMAS/10 - LETRAS Y NUMEROS/188 - JOTA.png", text: "J" },
  { img: "../src/img/BIBLIOTECA PICTOGRAMAS/10 - LETRAS Y NUMEROS/189 - KA.png", text: "K" },
  { img: "../src/img/BIBLIOTECA PICTOGRAMAS/10 - LETRAS Y NUMEROS/190 - ELE.png", text: "L" },
  { img: "../src/img/BIBLIOTECA PICTOGRAMAS/10 - LETRAS Y NUMEROS/191 - EME.png", text: "M" },
  { img: "../src/img/BIBLIOTECA PICTOGRAMAS/10 - LETRAS Y NUMEROS/192 - ENE.png", text: "N" },
  { img: "../src/img/BIBLIOTECA PICTOGRAMAS/10 - LETRAS Y NUMEROS/193 - O.png", text: "O" },
  { img: "../src/img/BIBLIOTECA PICTOGRAMAS/10 - LETRAS Y NUMEROS/194 - PE.png", text: "P" },
  { img: "../src/img/BIBLIOTECA PICTOGRAMAS/10 - LETRAS Y NUMEROS/195 - CU.png", text: "Q" },
  { img: "../src/img/BIBLIOTECA PICTOGRAMAS/10 - LETRAS Y NUMEROS/196 - ERRE.png", text: "R" },
  { img: "../src/img/BIBLIOTECA PICTOGRAMAS/10 - LETRAS Y NUMEROS/197 - ESE.png", text: "S" },
  { img: "../src/img/BIBLIOTECA PICTOGRAMAS/10 - LETRAS Y NUMEROS/198 - TE.png", text: "T" },
  { img: "../src/img/BIBLIOTECA PICTOGRAMAS/10 - LETRAS Y NUMEROS/199 - U.png", text: "U" },
  { img: "../src/img/BIBLIOTECA PICTOGRAMAS/10 - LETRAS Y NUMEROS/200 - VE CORTA.png", text: "V" },
  { img: "../src/img/BIBLIOTECA PICTOGRAMAS/10 - LETRAS Y NUMEROS/201 - DOBLE V.png", text: "W" },
  { img: "../src/img/BIBLIOTECA PICTOGRAMAS/10 - LETRAS Y NUMEROS/202 - EQUIS.png", text: "X" },
  { img: "../src/img/BIBLIOTECA PICTOGRAMAS/10 - LETRAS Y NUMEROS/203 - IGRIEGA - YE.png", text: "Y" },
  { img: "../src/img/BIBLIOTECA PICTOGRAMAS/10 - LETRAS Y NUMEROS/204 - ZETA.png", text: "Z" },
  { img: "../src/img/BIBLIOTECA PICTOGRAMAS/10 - LETRAS Y NUMEROS/205 - EÑE.png", text: "Ñ" },
  { img: "../src/img/BIBLIOTECA PICTOGRAMAS/10 - LETRAS Y NUMEROS/206 - INTERROGACION.png", text: "?" },
  { img: "../src/img/BIBLIOTECA PICTOGRAMAS/10 - LETRAS Y NUMEROS/207 - EXCLAMACION.png", text: "!" },
  { img: "../src/img/BIBLIOTECA PICTOGRAMAS/10 - LETRAS Y NUMEROS/208 - CERO.png", text: "0" },
  { img: "../src/img/BIBLIOTECA PICTOGRAMAS/10 - LETRAS Y NUMEROS/209 - UNO.png", text: "1" },
  { img: "../src/img/BIBLIOTECA PICTOGRAMAS/10 - LETRAS Y NUMEROS/210 - DOS.png", text: "2" },
  { img: "../src/img/BIBLIOTECA PICTOGRAMAS/10 - LETRAS Y NUMEROS/211 - TRES.png", text: "3" },
  { img: "../src/img/BIBLIOTECA PICTOGRAMAS/10 - LETRAS Y NUMEROS/212 - CUATRO.png", text: "4" },
  { img: "../src/img/BIBLIOTECA PICTOGRAMAS/10 - LETRAS Y NUMEROS/213 - CINCO.png", text: "5" },
  { img: "../src/img/BIBLIOTECA PICTOGRAMAS/10 - LETRAS Y NUMEROS/214 - SEIS.png", text: "6" },
  { img: "../src/img/BIBLIOTECA PICTOGRAMAS/10 - LETRAS Y NUMEROS/215 - SIETE.png", text: "7" },
  { img: "../src/img/BIBLIOTECA PICTOGRAMAS/10 - LETRAS Y NUMEROS/216 - OCHO.png", text: "8" },
  { img: "../src/img/BIBLIOTECA PICTOGRAMAS/10 - LETRAS Y NUMEROS/217 - NUEVE.png", text: "9" },
  { img: "../src/img/BIBLIOTECA PICTOGRAMAS/10 - LETRAS Y NUMEROS/218 - DIEZ.png", text: "10" },

  ],
  Formas: [
  { img: "../src/img/BIBLIOTECA PICTOGRAMAS/11 - FORMAS/219 - ESTRELLA.png", text: "ESTRELLA" },
  { img: "../src/img/BIBLIOTECA PICTOGRAMAS/11 - FORMAS/220 - RECTANGULO.png", text: "RECTÁNGULO" },
  { img: "../src/img/BIBLIOTECA PICTOGRAMAS/11 - FORMAS/221 - TRIANGULO.png", text: "TRIÁNGULO" },
  { img: "../src/img/BIBLIOTECA PICTOGRAMAS/11 - FORMAS/222 - CUADRADO.png", text: "CUADRADO" },
  { img: "../src/img/BIBLIOTECA PICTOGRAMAS/11 - FORMAS/223 - OVALO.png", text: "OVALO" },
  { img: "../src/img/BIBLIOTECA PICTOGRAMAS/11 - FORMAS/224 - ROMBO.png", text: "ROMBO" },
  { img: "../src/img/BIBLIOTECA PICTOGRAMAS/11 - FORMAS/225 - HEXÁGONO.png", text: "HEXÁGONO" },
  { img: "../src/img/BIBLIOTECA PICTOGRAMAS/11 - FORMAS/226 - PENTÁGONO.png", text: "PENTÁGONO" },
  { img: "../src/img/BIBLIOTECA PICTOGRAMAS/11 - FORMAS/227 - HEPTÁGONO.png", text: "HEPTÁGONO" },
  { img: "../src/img/BIBLIOTECA PICTOGRAMAS/11 - FORMAS/228 - CIRCULO.png", text: "CÍRCULO" },
  ],
  Familiares_y_Amigos: [
  { img: "../src/img/BIBLIOTECA PICTOGRAMAS/12 - FAMILIARES Y AMIGOS/229 - MAMÁ.png", text: "MAMÁ" },
  { img: "../src/img/BIBLIOTECA PICTOGRAMAS/12 - FAMILIARES Y AMIGOS/230 - PAPÁ.png", text: "PAPÁ" },
  { img: "../src/img/BIBLIOTECA PICTOGRAMAS/12 - FAMILIARES Y AMIGOS/231 - HERMANO.png", text: "HERMANO" },
  { img: "../src/img/BIBLIOTECA PICTOGRAMAS/12 - FAMILIARES Y AMIGOS/232 - HERMANA.png", text: "HERMANA" },
  { img: "../src/img/BIBLIOTECA PICTOGRAMAS/12 - FAMILIARES Y AMIGOS/233 - ABUELO.png", text: "ABUELO" },
  { img: "../src/img/BIBLIOTECA PICTOGRAMAS/12 - FAMILIARES Y AMIGOS/234 - ABUELA.png", text: "ABUELA" },
  { img: "../src/img/BIBLIOTECA PICTOGRAMAS/12 - FAMILIARES Y AMIGOS/235 - BISABUELO.png", text: "BISABUELO" },
  { img: "../src/img/BIBLIOTECA PICTOGRAMAS/12 - FAMILIARES Y AMIGOS/236 - BISABUELA.png", text: "BISABUELA" },
  { img: "../src/img/BIBLIOTECA PICTOGRAMAS/12 - FAMILIARES Y AMIGOS/237 - TÍA.png", text: "TÍA" },
  { img: "../src/img/BIBLIOTECA PICTOGRAMAS/12 - FAMILIARES Y AMIGOS/238 - TÍO.png", text: "TÍO" },
  { img: "../src/img/BIBLIOTECA PICTOGRAMAS/12 - FAMILIARES Y AMIGOS/239 - PRIMO.png", text: "PRIMO" },
  { img: "../src/img/BIBLIOTECA PICTOGRAMAS/12 - FAMILIARES Y AMIGOS/240 - PRIMA.png", text: "PRIMA" },
  { img: "../src/img/BIBLIOTECA PICTOGRAMAS/12 - FAMILIARES Y AMIGOS/241 - MASCOTA.png", text: "MASCOTA" },
  { img: "../src/img/BIBLIOTECA PICTOGRAMAS/12 - FAMILIARES Y AMIGOS/242 - MADRINA.png", text: "MADRINA" },
  { img: "../src/img/BIBLIOTECA PICTOGRAMAS/12 - FAMILIARES Y AMIGOS/243 - PADRINO.png", text: "PADRINO" },
  { img: "../src/img/BIBLIOTECA PICTOGRAMAS/12 - FAMILIARES Y AMIGOS/244 - PSICÓLOGA.png", text: "PSICÓLOGO" },
  { img: "../src/img/BIBLIOTECA PICTOGRAMAS/12 - FAMILIARES Y AMIGOS/245 - PROFESOR.png", text: "PROFESOR" },
  { img: "../src/img/BIBLIOTECA PICTOGRAMAS/12 - FAMILIARES Y AMIGOS/246 - PSICOPEDAGOGA.png", text: "PSICOPEDAGOGA" },
  { img: "../src/img/BIBLIOTECA PICTOGRAMAS/12 - FAMILIARES Y AMIGOS/247 - AMIGO.png", text: "AMIGO" },
  { img: "../src/img/BIBLIOTECA PICTOGRAMAS/12 - FAMILIARES Y AMIGOS/248 - AMIGA.png", text: "AMIGA" },
  { img: "../src/img/BIBLIOTECA PICTOGRAMAS/12 - FAMILIARES Y AMIGOS/249 - AGREGAR FAMILIAR.png", text: "AGREGAR FAMILIAR" },
  
]
  };
  
  // Referencias a elementos del DOM
  const sentenceContainer = document.getElementById('sentence');
  const pictogramContainer = document.getElementById('pictogram-container');
  const finalResultContainer = document.getElementById('final-result');
  const finalSentence = document.getElementById('final-sentence');
  const confirmButton = document.getElementById('confirm-sentence');
  const clearButton = document.getElementById('clear-sentence');
  
  // Mostrar pictogramas por categoría
  document.getElementById('categories').addEventListener('click', (e) => {
    const category = e.target.dataset.category;
    if (category) {
      loadPictograms(category);
    }
  });
  
  // Función para cargar pictogramas
  function loadPictograms(category) {
    pictogramContainer.innerHTML = '';
    pictograms[category].forEach(pictogram => {
      const imgElement = document.createElement('img');
      imgElement.src = pictogram.img;
      imgElement.alt = pictogram.text;
      imgElement.className = "cursor-pointer";
      imgElement.addEventListener('click', () => addPictogramToSentence(pictogram));
      pictogramContainer.appendChild(imgElement);
    });
  }
  
//-----------------------------------------------------------------
// Añadir pictograma a la frase con soporte para mover
function addPictogramToSentence(pictogram) {
  const pictogramElement = document.createElement('div');
  pictogramElement.className = "pictogram flex items-center space-x-2 bg-white p-2 m-1 border rounded";
  
  const img = document.createElement('img');
  img.src = pictogram.img;
  img.alt = pictogram.text;
  img.className = "w-16 h-16";  // Aquí puedes ajustar el tamaño de la imagen en la frase
  img.draggable = true;  // Hacer la imagen arrastrable
  img.addEventListener('dragstart', handleDragStart);
  img.addEventListener('dragover', handleDragOver);
  img.addEventListener('drop', handleDrop);
  
  const text = document.createElement('span');
  text.textContent = pictogram.text;
  
  const removeButton = document.createElement('button');
  removeButton.textContent = "X";
  removeButton.className = "bg-red-500 text-white p-1 rounded";
  removeButton.addEventListener('click', () => pictogramElement.remove());

  pictogramElement.appendChild(img);
  pictogramElement.appendChild(text);
  pictogramElement.appendChild(removeButton);
  pictogramElement.draggable = true; // Hacer arrastrable el pictograma completo
  pictogramElement.addEventListener('dragstart', handleDragStart);
  pictogramElement.addEventListener('dragover', handleDragOver);
  pictogramElement.addEventListener('drop', handleDrop);

  sentenceContainer.appendChild(pictogramElement);
}

// Variables para almacenar la imagen arrastrada
let draggedItem = null;

function handleDragStart(e) {
  draggedItem = e.target.closest('.pictogram');
}

function handleDragOver(e) {
  e.preventDefault();  // Evitar comportamiento por defecto para permitir el drop
  const currentElement = e.target.closest('.pictogram');
  if (currentElement && currentElement !== draggedItem) {
    sentenceContainer.insertBefore(draggedItem, currentElement);
  }
}

function handleDrop() {
  draggedItem.classList.remove('invisible');  // Hacer visible el elemento nuevamente
  draggedItem = null;  // Reiniciar la referencia
}


function handleDrop() {
  draggedItem.classList.remove('invisible');  // Hacer visible el elemento nuevamente
  draggedItem = null;  // Reiniciar la referencia
}
  
  // Eliminar la frase completa
  clearButton.addEventListener('click', () => {
    sentenceContainer.innerHTML = '';
  });
  
  // Confirmar y mostrar la frase final
  confirmButton.addEventListener('click', () => {
    const sentenceText = Array.from(sentenceContainer.children)
      .map(child => child.querySelector('span').textContent)
      .join(' ');
    
    finalSentence.textContent = sentenceText;
    modal.classList.remove('hidden');  // Mostrar el modal
  
    speakSentence(sentenceText);  // Reproducir la frase con audio
  });
  
  // Ocultar el modal cuando se hace clic en "Cerrar"
  const closeModalButton = document.getElementById('close-modal');
  closeModalButton.addEventListener('click', () => {
    modal.classList.add('hidden');
  });
  
  // Ocultar el modal cuando se presiona la tecla "Escape"
  window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      modal.classList.add('hidden');
    }
  });
  
  // Ocultar el modal cuando se hace clic en el botón "Cerrar" o fuera del modal
  modal.addEventListener('click', (e) => {
    if (e.target === modal || e.target.classList.contains('close-modal')) {
      modal.classList.add('hidden');
    }
  });
  // Función para reproducir la frase con audio
  function speakSentence(sentence) {
    const utterance = new SpeechSynthesisUtterance(sentence);
    utterance.lang = 'es-ES';
    window.speechSynthesis.speak(utterance);
  }
  