export default [
  {
    name: "Mecánica",
    experiments: [
      {
        name: "Masa Resorte",
        introduction:
          "El experimento consta de un resorte helicoidal como el mostrado en la figura anterior, dicho resorte tiene una longitud de 12 cm. Para ayuda \n del estudiante en la solución de este laboratorio constará de 1 sensor el cual nos permitirá medir la distancia y las oscilaciones generadas por \nel sistema masa resorte. Dicho sensor estará conectado a una tarjeta de programación (Preferiblemente Arduino uno) la cual mostrará los \nresultados obtenidos en su monitor serial. La tabla 1 (Revista Physical Kit Magazine) muestra sus componentes y su papel dentro del sistema.",
        instructions: [
          "A). Suspende una masa del resorte, hasta que se equilibre, aléjala de la posición de equilibrio una distancia aproximada de 5 cm y suelta para que oscile. Calcule la amplitud del movimiento.",
          "B). Según los datos obtenidos de la Longitud variando las diferentes masas y tabule  los resultados (Ver tabla 2 Revista Physical Kit Magazine).",
          "C). Mida el tiempo que tarda el objeto en realizar 10 oscilaciones y a partir de este dato determina el periodo de oscilación. Registre estos valores de la masa y del periodo en la tabla 3 Revista Physical Kit Magazine.",
          "D). Grafique los datos obtenidos del periodo T y de la masa m en un plano cartesiano, asigne el eje horizontal a la masa medida en kilogramos y el eje vertical al periodo que se midió en segundos.",
          "E). Represente los datos del periodo al cuadrado, T^2, en función de la masa, m, en un plano cartesiano. Asigne el eje horizontal a la masa medida en kilogramos y el eje vertical a T^2, la gráfica que debería tener es una recta.",
          "F). Repita los encisos anteriores, cambiando el resorte de 15 cm a 10 cm.",
          "G). Haga una breve explicación de las diferencias que encontró en los resortes."
        ],
        videoName: "Ensamblaje_resorte.mp4",
        videoName2:"resorte23.mp4"
      },
      {
        name: "Movimiento Rectilíneo Uniforme",
        introduction:
          "Describe en el desplazamiento de un objeto en una sola dirección con velocidad y tiempo constante en una determinada distancia. \n Para la Física es observado dentro de un plano, en un eje de coordenadas, donde el movimiento es una línea recta desplazándose \n hacia una dirección. La formula de MRV contempla tres  incógnitas V= d/t: V (Velocidad), d (Distancia) y t (Tiempo). \n \n Para este experimento consta de un InvenSense (sensor) MPU-6050, el cual consta de un acelerómetro MEMS y un giroscopio MEMS \n en un solo integrado. Dicho sensor es de los mejores del mercado  ya que capta señales en los planos x, y, z. La MPU nos  ayudara a \n tomar los valores de velocidad inicial, velocidad final  y  tiempo para ayuda del estudiante en la solución de este laboratorio, dicho sensor \n estará conectado a una tarjeta de programación (preferiblemente Arduino NANO),  en la cual mostrara los resultados obtenidos en una \n plataforma  y con ello el estudiante  podrá observar bien el fenómeno físico. Para comenzar arme la estructura detalladamente como \n lo dice en  la guía de montaje.",
        instructions: [
          "A). Describa cualitativamente el movimiento del carro.",
          "B). Que variables físicas descubre en el laboratorio.",
          "C). Como las midió de forma analógica y tecnológica.",
          "D). Que tiempo tardo el carro para recorrer el primer metro.",
          "E). Tome varias medidas y asegúrese de soltar el carro siempre en el mismo punto, coloque los datos en la tabla 5 de la Revista (Physical Kit Magazine).",
          "F). Para cada dato de t encuentre el valor de la velocidad instantánea.",
          "G). Si la estructura tuviera 15 metros de larga, cuanto tiempo podrá tardar el carro en recorrer:  El riel entero, puede resolver este punto con la aceleración obtenida y la mitad de la estructura (7.5 metros).",
          "H). Un integrante del grupo impulse el carro con su mano menos desarrollada motrizmente y resuelva los ítems anteriores, haga una comparación de la variación.",
          "I). Resolver el ejercicio teórico: Un automóvil recorre una distancia de 150 km y desarrolla en los primeros 120 km una velocidad media de 80 km/h, en tanto que en los últimos 30 km tiene una velocidad medida de 60 km/h ¿Cuál fue el tiempo total del viaje?"
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
          "La ley de Ohm, es llamada así en honor a su descubridor el físico alemán Georg Simon Ohm; dicha ley establece que la cantidad de corriente qué pasa por \n todo un circuito es directamente proporcional al voltaje aplicado e inversamente proporcional a la resistencia del circuito, la ley de Ohm nos permite calcular \n la resistencia y el voltaje adecuado para cada circuito. Es la encargad de representar un elemento fundamental para explicar ciertos fenómenos \n relacionados con electricidad. \n \n Estos experimentos de ley de Ohm son básicos, pero de gran importancia para que los estudiantes aprendan a conectar correctamente las resistencias \n y tomar las medidas, para asi poder implementar, aprender y tomar las medidas correctas en un futuro con experimentos de mayor complejidad. \n \n Esto ayudara a los estudiantes a comprender los conceptos eléctricos y electrónicos básicos y entender el postulado de la física que dice: (La energía ni \n se crea ni se destruye, se transforma). Ya que la energía eléctrica la transformación se manifiesta en la obtención de luz, calor, frio, movimiento o en otro \n trabajo útil que realice cualquier dispositivo conectado a un circuito eléctrico cerrado. También ayuda a investigar la dependencia entre la corriente y el \n voltaje aplicado a diversos dispositivos electrónicos: resistencias, diodos, entre otros.",
        instructions: [
          "A). Indentificar las características de corriente-voltaje de una batería solar en función de la irradiancia. En este experimento se registran las características de corriente-voltaje de una batería solar para diferentes niveles de radiación. Este nivel vario dependiendo de la distancia de la luz a la célula solar. ",
          "B). Analizar como la forma de la ecuación de la Ley de Ohm se relaciona con el circuito de la placa.",
          "C). Describir que sucede con la corriente en un circuito cuando se varía el voltaje.",
          "D). ¿Cambiar el valor de la resistencia y describir si aumenta o disminuye el paso de la corriente? ¿Por qué sucede esto?",
          "E). Cambiar el panel solar por una fuente de alimentación fija y represéntelo en una tabla comparando los resultados de la corriente."
        ],
        videoName: "capacitor2.mp4"
      },
      {
        name:"Carga y Descarga de un Capacitor",
        introduction: 
        "Este experimento trata los temas de capacitor de placas paralelas, capacitancia y busca realizar el análisis de un circuito RC y observar cómo se da \n la carga y descarga de un condensador. Permite identificar variables que afecten la capacitancia y de que forma la afectan. \n \nCarga de un Condensador: Se conecta el circuito donde se indique en el tablero electrónico de modo que la corriente circule a través de la resistencia; \n esta corriente circula y va decreciendo desde su valor máximo mientras se almacena una carga en el condensador en función del tiempo, hasta \n alcanzar su valor máximo. Conectar este condensador cargado a un foco y observar cuanto tarda en descargarse el circuito RC. \n \n Descarga de un Condensador: Para analizar la descarga del condensador desde otra perspectiva, la diferencia de potencial entre sus terminales es \nexactamente igual al voltaje de la fuente que está conectado; esta fuente debe ser reemplazada por un corto circuito, es decir en la figura 8 (Ver \n Revista Physical Kit Magazine), situar el interruptor S en la posición 2; haciendo que el condensador quede en paralelo con la resistencia, la carga \n se disipa y el condensador quedara descargado, de igual forma que con la carga del capacitor.  ",
        instructions: [
        "A). Cambiando los capacitores proporcionados en el kit, analice la curva de carga y descarga y explique de qué manera varían.",
        "B). Aumente y disminuya el valor de la resistencia y compare la velocidad de carga y descarga.",   
        "C). Relacionar el diseño de un sistema de condensadores con su capacidad de almacenar energía.",
        "D). Explicar cómo usar un condensador para encender un dispositivo como una bombilla.",
        "E). Describir cómo se da la descarga del condensador cuando este se conecte al dispositivo." 
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
        introduction: "Son ondas rectas u ondas circulares se propagan en el agua y chocan contra una barrera muy grande o una rendija con demasiado ancho, estas \n ondas seguirán adelante y producirán una región parecía a un área de sombra, si por el contrario la barrera o el ancho de la rendija son pequeños.\n Es posible observar que las ondas no se propagan en la misma dirección cuando pasan, no obstante son ondas  puntuales \n que lograran pasar al otro lado de la barrera. \n \n Consiste en una cubeta de vidrio con agua sobre la que, mediante el uso de un brazo mecánico, se generan ondas con una frecuencia determinada. \n Estas ondas serán detectadas por un sensor de ultrasonido el cual a su vez enviará los datos a un Arduino NANO encargado de mostrar la gráfica de \n oscilación en el monitor serial que posteriormente será exportado a Excel. \n \n • Velocidad de onda: Este valor está relacionado con la propiedad de medio en que se propaga, por tanto, es posible afirmar que, para ondas de agua \n con la misma frecuencia, la longitud de onda es más larga en la región de aguas profundas mientras que es más corta en la región de aguas poco \n profundas. \n \n •	Velocidad de propagación: ( v=f*λ ) Se toman diferentes medidas de longitud de onda para distintas frecuencias. \n \n •	Velocidad en función de la profundidad del agua: Se tiene en cuenta el ángulo de incidencia, ángulo de refracción, zona de agua profunda y zona \n de agua menos profunda.",
        instructions:[
          "A). Defina el frente de onda que logra observar y dibújelo",
          "B). ¿Qué tipo de interferencia realiza el brazo generador de ondas?",
          "C). Calcule la velocidad de propagación de la onda. ",
          "D). Calcule la longitud de onda ",
          "E). Defina con sus propias palabras la reflexión y la refracción y cuál de estos fenómenos puede observar con la cubeta de ondas."
        ],
        videoName:"ondas.mp4"
      },
      {
        name: "La Descomposición de la Luz",
        introduction: "Isaac Newton en 1667 presento su experimento acerca de la descomposición de la luz, basándose en las teorías de Rene Descartes quien mencionaba \n que la luz no es más que la composición de los colores del arco iris, para demostrarlo ubico un prisma frente a un haz de luz y logro observar dichos  \n colores de manera alargada; en este caso se pretende demostrar el experimento de manera inversa, es decir, al tener los colores del estándar RGB \n (rojo, verde y azul) colores puros; en un disco y girarlo a una velocidad constante se puedan obtener otro tipo de colores (secundarios). \n \n Con esta información, se pretende comprobar esta teoría, al contrario, es decir, con los colores del arco iris, ubicados circularmente y de manera \n que las longitudes no se entorpezcan. \n \n Con este experimento, los estudiantes estarán en la capacidad de identificar y reconocer la enseñanza de la óptica, en un inteno de ilustrar el mecanismo de percepción espectral de la luz visible por el ojo humano, junto con el planteamiento que hizo Isaac Newton, menciono que la luz no es más que la suma de colores puros, como los del arco iris. ",
        instructions:[
          "",
          "",
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
