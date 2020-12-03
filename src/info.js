export default [
  {
    name: "Mecánica",
    experiments: [
      {
        name: "Masa Resorte",
        introduction:
          "El experimento consta de un resorte helicoidal como el mostrado en la figura anterior, dicho resorte tiene una longitud de 12 cm. Para ayuda \n  del estudiante  en la solución de este laboratorio constará de 2 sensores el cual nos permitirá medir todas las magnitudes del movimiento \n armónico simple ya mencionadas anteriormente. Dichos sensores estarán conectados a una tarjeta de programación (Preferiblemente Arduino\n uno)en la cual mostrara los resultados obtenidos por los sensores de todas las magnitudes del movimiento armónico simple.",
        instructions: [
          "Suspende una masa del resorte, hasta que se equilibre, aléjala de la posición de equilibrio una distancia aproximada de 5 cm y suelta para que oscile. La distancia que se alejó la masa de la posición de equilibrio es la amplitud del movimiento.",
          "Según los datos obtenidos de la Longitud variando las diferentes masas y tabule  los resultados",
          "Mida el tiempo que tarda el objeto en realizar 10 oscilaciones y a partir de este dato determina el periodo de oscilación",
          "Repita el paso anterior para las diferentes masas dadas en el kit, la distancia que se aleja la masa de la posición de equilibrio sea la misma."
        ],
        videoName: "Ensamblaje_resorte.mp4",
        videoName2:"resorte23.mp4"
      },
      {
        name: "Movimiento Rectilíneo Uniforme",
        introduction:
          "Describe en el desplazamiento de un objeto en una sola dirección con velocidad y tiempo constante en una determinada distancia. \n Para la Física es observado dentro de un plano, en un eje de coordenadas, donde el movimiento es una línea recta desplazándose \n hacia una dirección. La formula de MRV contempla tres  incógnitas V= d/t: V (Velocidad), d (Distancia) y t (Tiempo). \n \n Para este experimento consta de un InvenSense (sensor) MPU-6050, el cual consta de un acelerómetro MEMS y un giroscopio MEMS \n en un solo integrado. Dicho sensor es de los mejores del mercado  ya que capta señales en los planos x, y, z. La MPU nos  ayudara a \n tomar los valores de velocidad inicial, velocidad final  y  tiempo para ayuda del estudiante en la solución de este laboratorio, dicho sensor \n estará conectado a una tarjeta de programación (preferiblemente Arduino NANO),  en la cual mostrara los resultados obtenidos en una \n plataforma  y con ello el estudiante  podrá observar bien el fenómeno físico. Para comenzar arme la estructura detalladamente como \n lo dice en  la guía de montaje.",
        instructions: [
          "Describa cualitativamente el movimiento del carro.",
          "Que variables físicas descubre en el laboratorio",
          "Como las midió de forma analógica y tecnológica",
          "Que tiempo tardo el carro para recorrer el primer metro"
        ],
        videoName: "Ensamblaje1.mp4"
      },
      
    ]
  },
  {
    name: "Magnetismo",
    experiments: [
      {
        name: "Ley de Coulomb",
        introduction:
          "Es una rama importante de la fisica,es la encargada de estudiar y unifica los fenómenos eléctricos y magnetismo en un solo. Tambien es conocida \n por ser un fenómeno fisico por el cual los objetos ejercen fuerzas de atracción o repulsión sobre otros materiales. Los campos magenitos se producen \n por cualquier carga eléctrica en movimiento y el momento magnético intrínseco de las particulas elementales asociadas con una propiedad cuántica \n fundamental. \n La fuerza eléctrica o Interacción Electrostática, es la encargada de la atracción entre objetos con una carga eléctrica, establece que dos cargas del \n mismo signo se repelen, por el contrario que dos cargas de signos opuestos se atraen. ",
           
        instructions: [
          "La fuerza es inversamente proporcinal al cuadrado de la distanica que los separa. La fuerza de atraccion si las cargas son de signo opuesto y de repulsión si son del mismo signo. El valor de dicha fureza es proporcianl al producto del valor de sus cargas. Los cuerpos cargados sufren una fuerza de atracción o repulsión al aproximarse. ",
          "El experimento es basado en la ley de coulomb ya mencionada, que está compuesto de un péndulo doble, el cual en sus extremos cuenta con dos bolas de aluminio cargadas idénticamente lo que causa que ellas se repelen, de esta manera al separarse cada una forma un ángulo y con la distancia entre su separación es posible calcular la fuerza y  mediante  la carga en cada esfera se procede a calcular matemáticamente el campo eléctrico y a su vez el flujo eléctrico en cada una de ellas.",
          "Dicho experimento consta de dos sensores, el cual facilitará la toma de las distancias y el programa diseñado será el encargado de realizar el cálculo de la fuerza, con esto los estudiantes serán capaces de identificar el campo y el flujo eléctricos con las fórmulas anteriormente mencionadas.."
        ],
        videoName: "pendulo (1).mp4",
        videoName2:"pendulo2.mp4"
      },
      {
        name: "Transformador Electrico Casero",
        introduction:
          "La bobina o inductor, es el componente pasivo en los circuitos eléctricos que s eincluyen un alambre aislado, el cual es el enrollado en forma de hélice, \n gracias a este enrollamiento le permite  un almacenamiento de energía en un campo magnético esto es conocido con el nombre de autoinducción. Es \n de resaltar que a la hora de analizar en profundidad el concepto de bobina se debe de tener en cuenta la existencia de lo que es conocido popularmente \n como Bobina de Tesla, ya que este experimento es un icono en la historia. Esta bobina es un transformador resonante el cual puede generar unas \n descargas eléctricas de un gran alcance. \n \n  Transformador, Es un Dispositivo Electrico alterna de un porcentaje de tensión, en energia alterna de otro nivel de tensión, esto gracias a la acción de un \n campo magnético. La Potencia que se le ingresa en el caso de un Transformador ideal es igual a la que se obtiene a la salida.",
        instructions: [
          "1. Realice el montaje (Ver Revista) con la fuente de voltaje apagada, sólo enciéndela cuando tenga el visto de su profesor. ",
          "2. Encienda la fuente de voltaje AC a 12 V, primero verificar con el multimetro si estan los 12 V.",
          "3. Una vez verificado el voltaje a su perfección (12V), varia el voltaje primario, hacer la medición de V1 y V2 con el voltimetro y las mediciones de la corrientes I1 Y I2 ",
          "4. Complete los valores experimentales de la tabla de datos (Ver Revista).",
          "5. Ya tabulada la tabla realice una Grafica de V2 vs V1, y de I2 y I1 realice el respectivo análisis de error %.",
          "6. Haga un análisis para cada una de las graficas del punto anterior",
          "7. Calcular el rendimiento o eficiencia del transformador",
          "8. Repita todos los pasos anteriores intercambiando las Bobinas se que encuentran en el KIT"
        ],
        videoName: "transformador 2.mp4",
        videoName2: "transformador3.mp4"
      }
    ]
  },
  {
    name: "Electronica",
    experiments: [
      {
        name: "Ley de Ohm",
        introduction:
          "La ley de Ohm, es llamada así en honor a su descubridor el físico alemán Georg Simon Ohm; dicha ley establece que la cantidad de corriente qué pasa por \n todo un circuito es directamente proporcional al voltaje aplicado e inversamente proporcional a la resistencia del circuito, la ley de Ohm nos permite calcular \n la resistencia y el voltaje adecuado para cada circuito. Es la encargad de representar un elemento fundamental para explicar ciertos fenómenos \n relacionados con electricidad. \n \n Estos experimentos de ley de Ohm son básicos, pero de gran importancia para que los estudiantes aprendan a conectar correctamente las resistencias \n y tomar las medidas, para asi poder implementar, aprender y tomar las medidas correctas en un futuro con experimentos de mayor complejidad. ",
        instructions: [
          "Indentificar las características de corriente-voltaje de una batería solar en función de la irradiancia. En este experimento se registran las características de corriente-voltaje de una batería solar para diferentes niveles de radiación. Este nivel vario dependiendo de la distancia de la luz a la célula solar. ",
          "Esto ayudara a los estudiantes a comprender los conceptos eléctricos y electrónicos básicos y entender el postulado de la física que dice: (La energía ni se crea ni se destruye, se transforma). Ya que la energía eléctrica la transformación se manifiesta en la obtención de luz, calor, frio, movimiento o en otro trabajo útil que realice cualquier dispositivo conectado a un circuito eléctrico cerrado.",
          "Tambien ayuda a investigar la dependencia entre la corriente y el voltaje aplicado a diversos dispositivos electrónicos: resistencias, diodos, entre otros"
        ],
        videoName: "capacitor2.mp4"
      },
      {
        name:"Carga y Descarga de un Capacitor",
        introduction: 
        "Este experimento aborda los temas de capacitor de placas paralelas, capacitancia y busca realizar el análisis de un circuito RC \n y observar cómo se da la carga y descarga de un condensador. Permite identificar variables que afectan la capacitancia \n y de qué forma la afectan.",
        instructions: [
        "jenffnrifr"
        ],
        videoName: "capacitor2.mp4"
      }
    ]
  },
  {
    name: "Ondas",
    experiments: [
      {
      
        name: "Difracción de las Ondas",
        introduction: "Son ondas rectas u ondas circulares se propagan en el agua y chocan contra una barrera muy grande o una rendija con demasiado ancho, \n estas ondas seguirán adelante y producirán una región parecía a un área de sombra, si por el contrario la barrera o el ancho de la rendija \n son pequeños. Es posible observar que las ondas no se propagan en la misma dirección cuando pasan,  no obstante son ondas  puntuales \n que lograran pasar al otro lado de la barrera. ",
        instructions:[
          "Consiste en una cubeta de vidrio con agua sobre la que, mediante el uso de un vibrador electromagnético, se generan ondas con un frecuencia y amplitud seleccionales. Una luz estroboscópica permite proyectar las ondas sobre una pantalla permitiendo congelar al imagen y realizar medidas.",
          "Cuenta con un indicador digital en el estroboscopio muestra la frecuencia de vibración lo que permite realizar medidas cuantitativas. Las imágenes se proyectan sobre una pantalla translúcida integrada en la cubeta o sobre una pared.",
          "Velocidad de Onda: Este valor está relacionado con la propiedad de medio en que se propaga, por tanto, es posible afrmar que, para ondas de agua con la misma frecuencia, la longitud de onda es la más larga en la región de aguas profundas mientras que es más corta en la región de aguas poco profundas.",
          "Velocidad de Propagación: Tomada de diferentes medidas de longitud de onda para distintas frecuencias. v = f * λ",
          "Velocidad en función de la profundidad del agua: (Se tiene en cuenta el ángulo de incidencia, ángulo de refracción, zona de agua profunda y zonas de agua menos profunda.)",
          "Refracción y reflexión: Se verifica que el ángulo de incidencia es igual al ángulo de reflexion.",
          "Efecto Doppleer: Si el generador de ondas y el observador se mueven en relación con el medio. Si se mueve el observador, entonces para él, varía la velocidad de onda."
        ],
        videoName:"ondas.mp4"
      },
      {
        name: "La Descomposición de la Luz",
        introduction: "Isaac Newton en 1667 presento su experimento acerca de la descomposición de la luz, basándose en las teorías de Rene Descartes quien mencionaba \n que la luz no es más que la composición de los colores del arco iris, para demostrarlo ubico un prisma frente a un haz de luz y logro observar dichos  \n colores de manera alargada; en este caso se pretende demostrar el experimento de manera inversa, es decir, al tener los colores del estándar RGB \n (rojo, verde y azul) colores puros; en un disco y girarlo a una velocidad constante se puedan obtener otro tipo de colores (secundarios) ",
        instructions:[
          "Con esta información, se pretende comprobar esta teoría, al contrario, es decir, con los colores del arco iris, ubicados circularmente y de manera que las longitudes no se entorpezcan.",
          "Con este experimento, los estudiantes estarán en la capacidad de identificar y reconocer la enseñanza de la óptica, en un inteno de ilustrar el mecanismo de percepción espectral de la luz visible por el ojo humano, junto con el planteamiento que hizo Isaac Newton, menciono que la luz no es más que la suma de colores puros, como los del arco iris.",
          "La construcción del disco de Newton se hizo mediante unos leds específicos, para componer el color blanco denominado como la luz, serán seis leds ubicados a la misma distancia del centro, sobre dos CD´s unidos o pegados entre si, con un motor adecuado para montar en una unidad óptica un CD.",
          "Al jugar con los colores del estándar RGB es posible lograr visualizar diferente tipos de colores, llamados popularmente colores secundarios; Si es el color blanco el que se quiere componer, se deben dejar encendidos todos los leds.",
          "Por otra parte si lo que se quiere es visualizar es el color amarillo, se deben enceder los leds rojos y verds, mientras que el azul debe permanecer apagado, posteriormente si es el color magenta el que se quiere visualizar, dejar encendidos los colores rojo y azul; y finalmente para la composición del color Cián, se deben dejar encendidos los leds de colores azul y verde."
        ],
        videoName: "MMM2.mp4",
        videoName2: "Disco.mp4"
      }
    ]
  }
];
