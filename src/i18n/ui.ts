export const languages = {
  es: "Español",
  en: "English",
};

export const defaultLang = "es";

export const ui = {
  es: {
    "nav.home": "Inicio Rápido",
    "nav.books": "Libros Interactivos",
    "nav.contact": "Contacto",
    "book.title": "Libro interactivo",
    "book.content": "Contenido",
    "book.intro": "Introducción",
    "book.back": "Volver",
    "book.select":
      "☝️ Para acceder a los ejercicios selecciona una opción de arriba",
    "404.title": "¡Oops! Página no encontrada",
    "404.desc":
      "Lo sentimos mucho, no pudimos encontrar esta página. Parece que es un enlace antiguo o quizás se ha movido.",
    "404.back": "Regresar al Inicio",
    "home.title": "Bienvenido a nuestra plataforma educativa interactiva",
    "home.mission":
      "Nuestra misión es ofrecer una experiencia de aprendizaje única a través de libros interactivos sobre geología. Explora nuestra colección y descubre una nueva forma de aprender.",
    "home.explore": "Explorar",
    "home.start": "Iniciar",
    "home.portfolio": "Portafolio",
    "home.library_title": "Explora la biblioteca interactiva",
    "home.library_desc": "Explora una variedad de libros interactivos",
    "home.view_project": "Ver proyecto →",
    "home.see_all": "Ver todo",
    "home.geology": "Geología",
    "home.hydrology": "Hidrología",
    "home.water": "Agua",
    "home.salinity": "Salinidad",
    "books.title_detail": "Detalles de los libros",
    "books.library_title": "Explora la biblioteca interactiva",
    "books.library_desc": "Descubre una nueva forma de aprender.",
    "books.digital_education": "Educación Digital",
    "books.interactive_books": "Libros Interactivos",
    "books.active_learning": "Aprendizaje Activo",
    "books.author": "Autor",
    "books.date": "Fecha",
    "books.place": "Lugar",
    "books.pages": "Páginas",
    "books.go_to_book": "Ir al libro",
    "books.see_more": "Ver más",
    "exercise1.title": "Gradiente hidráulico",
    "exercise1.description":
      "Este ejercicio se basa en la forma despejada de la ley de Darcy, la cual permite analizar el gradiente hidráulico de manera directa. A continuación se presenta la ecuación fundamental:",
    "exercise1.formula_intro":
      'Para este ejercicio se emplea la <span class="lato-bold">fórmula despejada</span> del gradiente hidráulico:',
    "exercise1.observation":
      "En esta sección se puede observar cómo el gradiente hidráulico (<em>i</em>) varía en función de la conductividad (<em>K</em>), el caudal (<em>Q</em>) y el área (<em>A</em>).",
    "exercise1.how_it_works": "⚙️ Cómo funciona",
    "exercise1.instructions":
      "Ajusta los controles para observar cómo cada parámetro influye en la visualización del gradiente hidráulico:",
    "exercise1.k_desc":
      '<span class="lato-bold">K (Conductividad)</span>: regula la facilidad con la que el agua fluye a través del medio.',
    "exercise1.a_desc":
      '<span class="lato-bold">A (Área)</span>: determina la cantidad de flujo visible en los tubos.',
    "exercise1.q_desc":
      '<span class="lato-bold">Q (Caudal)</span>: establece el volumen total de flujo en el sistema.',
    "exercise1.slider_help":
      "Utiliza los sliders o introduce los valores manualmente para explorar cómo las variaciones de cada parámetro afectan el gradiente hidráulico.",
    "exercise1.manual_data": "Datos manuales",
    "exercise1.manual_warning":
      "(La representación visual puede distorsionarse)",
    "exercise1.section_a": "Sección A",
    "exercise1.section_b": "Sección B",
    "exercise1.section_c": "Sección C",
    "exercise1.section_d": "Sección Otra",
    "exercise1.k_label": "K (Conductividad)",
    "exercise1.a_label": "A (Área)",
    "exercise1.q_label": "Q (Caudal):",
    "exercise1.reset": "Reiniciar",
    "exercise1.enlarge_screen": "📱 Amplía la pantalla",
    "exercise1.total_gradient": "i TOTAL (Promedio) =",
    "exercise2.info.title": "Flujo de Agua en Medio Poroso",
    "exercise2.info.para1":
      "El aparato consiste en un cilindro de área transversal <b>A</b> que está lleno de un medio poroso, como arena. El agua se introduce lentamente en el recipiente de la izquierda y fluye a través del cilindro lleno de arena hasta que los poros se saturan completamente.",
    "exercise2.info.para2":
      "A medida que el agua continúa ingresando, los niveles de agua en ambos recipientes suben gradualmente hasta que el agua en el recipiente derecho alcanza el borde superior y comienza a desbordarse. En ese punto, aunque el agua sigue entrando por el lado izquierdo, el nivel derecho se mantiene constante. El nivel izquierdo continúa aumentando hasta que el caudal de entrada <b>Q<sub>in</sub></b> es igual al caudal de salida <b>Q<sub>out</sub></b>.",
    "exercise2.info.para3":
      "En ese momento se alcanza una condición de <b>flujo en estado estacionario</b>, donde la cantidad de agua que entra es igual a la que sale. El valor de <b>Q</b> representa el caudal volumétrico del agua a través del cilindro (es decir, volumen por unidad de tiempo, como m³/s, L/s o gal/min).",
    "exercise2.info.para4":
      "En este experimento, el flujo de agua se mueve desde una zona de mayor energía hidráulica hacia una de menor energía. Esta diferencia de energía se denomina <b>gradiente hidráulico</b>, y puede expresarse mediante la relación:",
    "exercise2.info.para5":
      "donde <b>Δh</b> es la diferencia de carga hidráulica entre los dos puntos, y <b>ΔL</b> es la distancia entre los piezómetros. El flujo es paralelo al eje del cilindro y depende de las propiedades del medio (porosidad y conductividad hidráulica).",
    "exercise2.info.para6":
      "En condiciones naturales, el flujo subterráneo se desarrolla dentro de un medio tridimensional mucho más complejo. Los gradientes hidráulicos y las direcciones de flujo pueden variar tanto en magnitud como en dirección dependiendo de la estructura del subsuelo, la presencia de capas confinantes y la heterogeneidad del terreno.",
    "exercise2.info.para7":
      "Si instalamos pozos para medir el gradiente hidráulico sin conocer la orientación del estrato o la inclinación del medio, sólo podemos deducir que hay un componente de flujo horizontal. Sin embargo, el flujo también podría tener una componente vertical (ascendente o descendente) dependiendo de la inclinación del medio o de la disposición de los límites confinantes.",
    "exercise2.info.para8":
      "En algunos casos, la inclinación puede ser tan pronunciada que el flujo se acerca a una dirección vertical. Este análisis subraya la importancia de conocer la <b>orientación de los límites confinantes</b> y otras características geológicas para interpretar correctamente los datos de carga hidráulica y determinar la dirección real del flujo.",
    "exercise2.ui.graph": "Gráfica",
    "exercise2.ui.data": "Datos",
    "exercise2.ui.controls": "Controles",
    "exercise2.ui.input_type": "Tipo de input",
    "exercise2.ui.distance": "Distancia entre piezómetros",
    "exercise2.ui.flow_rate": "Ratio de flujo",
    "exercise2.ui.conductivity": "Conductividad",
    "exercise2.ui.area": "Área",
    "exercise2.ui.unit_per_day": "m/día",
    "exercise3.title": "Carga Hidráulica Interactiva con Divisiones de Arena",
    "exercise3.h1_label": "h₁ (carga izquierda):",
    "exercise3.h2_label": "h₂ (carga derecha):",
    "exercise3.piezo_label": "Altura equipotencial (piezómetro):",
    "exercise3.manual_toggle": "Activar modo manual",
    "exercise3.water_label": "Seleccionar nivel de agua (ft):",
    "exercise3.sand_label": "Divisiones de arena añadidas:",
    "exercise3.piezo_control": "Posición del piezómetro:",
    "exercise3.help_line1": "Carga por defecto en la derecha (h₂) = 12 ft.",
    "exercise3.help_line2":
      "Añadir divisiones de arena incrementa la carga izquierda (h₁) en 1 ft por división.",
    "exercise3.help_line3":
      "Las divisiones aparecen solo dentro de la zona de arena.",
    "exercise3.help_line4":
      "El nivel de agua se puede ajustar entre 0 y 12 ft usando cualquier tipo de entrada.",
    "exercise4.title": "Diagrama Interactivo de Acuíferos",
    "exercise4.intro":
      "Ajusta los parámetros (o usa modo Manual). El diagrama reacciona en tiempo real; a la derecha verás fórmulas y resultados.",
    "exercise4.profile": "Perfil Hidrogeológico",
    "exercise4.ground_ref": "Superficie del terreno (referencia)",
    "exercise4.unconfined_aq": "Acuífero No Confinado",
    "exercise4.upper_aquitard": "Acuitardo Superior",
    "exercise4.confined_aq": "Acuífero Confinado",
    "exercise4.lower_aquitard": "Acuitardo Inferior",
    "exercise4.gradient_flow": "Gradiente y Flujo (Darcy)",
    "exercise4.water_table": "Nivel Freático",
    "exercise4.potentiometric": "Superficie Potenciométrica",
    "exercise4.depth_water_l": "Profundidad al agua (I):",
    "exercise4.depth_water_r": "Profundidad al agua (D):",
    "exercise4.formulas_results": "Fórmulas y Resultados",
    "exercise4.discharge": "Descarga (confinado)",
    "exercise4.parameters": "Parámetros",
    "exercise4.mode_label": "Modo:",
    "exercise4.mode_interactive": "Interactivo",
    "exercise4.mode_manual": "Manual",
    "exercise4.reset": "Reiniciar",
    "exercise4.random": "Aleatorio",
    "exercise4.distance": "Distancia L (m)",
    "exercise4.between_wells": "Entre pozos:",
    "exercise4.left_elevation": "Elevación izquierda (m)",
    "exercise4.slope": "Pendiente (m por 100 m → derecha)",
    "exercise4.hydraulic_params": "Parámetros Hidráulicos",
    "exercise4.conductivity": "Conductividad K (m/s)",
    "exercise4.area": "Área transversal A (m²)",
    "exercise5.title": "Esquema Interactivo: Entradas de Carga Hidráulica",
    "exercise5.elevation": "Elevación (z) [m]:",
    "exercise5.elev_placeholder": "Ej. 10m",
    "exercise5.pressure": "Presión (p) [Pa]:",
    "exercise5.pressure_placeholder": "Ej. 10000Pa",
    "exercise5.well_size": "Tamaño del pozo:",
    "exercise5.well_placeholder": "Ej. 10m",
    "exercise5.hydraulic_head": "Carga hidráulica (h):",
    "exercise6.title": "Ejercicio 6 – Flujo en un acuífero libre",
    "exercise6.instruction_initial":
      "Selecciona 2 puntos para crear la línea equipotencial",
    "exercise6.helper_text":
      "Selecciona 2 puntos para crear la <b>línea equipotencial</b> sobre el esquema del acuífero libre. También puedes alternar al modo coordenadas.",
    "exercise6.btn_equipotential": "Línea Equipotencial",
    "exercise6.btn_additional_points": "Puntos Adicionales",
    "exercise6.btn_clear": "Limpiar",
    "exercise6.btn_mode_manual": "Modo Manual",
    "exercise6.btn_mode_coords": "Modo Coordenadas",
    "exercise6.label_element_type": "Tipo de elemento:",
    "exercise6.label_point_1": "Punto 1",
    "exercise6.label_point_2": "Punto 2",
    "exercise6.hint_coords":
      "Ingresa X,Y en coordenadas de la imagen (pixeles). Si sólo ingresas Z, Y se calculará desde la elevación usando la escala (0–100 m).",
    "exercise6.legend_equipotential": "Línea Equipotencial",
    "exercise6.legend_additional_line": "Línea Adicional",
    "exercise6.legend_midpoint_eq": "Punto Medio Eq.",
    "exercise6.legend_midpoint_ad": "Punto Medio Ad.",
    "exercise6.legend_additional_points": "Puntos Adicionales",
    "exercise6.loading": "Cargando imagen...",
    "exercise6.js_error_loading": "Error al cargar la imagen base.",
    "exercise6.js_mode_coords_warning":
      "Estás en modo Coordenadas — usa el formulario o vuelve a Modo Manual.",
    "exercise6.js_additional_already_completed":
      "Ya has completado la selección de puntos adicionales. Presiona 'Limpiar' para empezar de nuevo.",
    "exercise6.js_equipotential_already_completed":
      "Ya has completado la línea equipotencial. Cambia a 'Puntos Adicionales' o presiona 'Limpiar' para empezar de nuevo.",
    "exercise6.js_invalid_area":
      "Selecciona dentro del área válida (x ≥ {minX} real)",
    "exercise6.js_range_warning":
      "Selecciona dentro del rango entre los pozos (x entre {minX} y {maxX}).",
    "exercise6.js_equipotential_done":
      "Línea equipotencial completada. Ahora puedes seleccionar 'Puntos Adicionales'.",
    "exercise6.js_equipotential_done_add":
      "Línea equipotencial completada. Cambia a 'Puntos Adicionales' para agregar más puntos.",
    "exercise6.js_equipotential_done_coords":
      "Línea equipotencial completada (modo Coordenadas). Ahora puedes seleccionar 'Puntos Adicionales'.",
    "exercise6.js_need_equipotential_first":
      "Primero completa la línea equipotencial antes de agregar puntos adicionales.",
    "exercise6.js_additional_done":
      "Puntos adicionales completados. Presiona 'Limpiar' para empezar de nuevo.",
    "exercise6.js_additional_done_coords":
      "Puntos adicionales completados (modo Coordenadas). Presiona 'Limpiar' para empezar de nuevo.",
    "exercise6.js_select_more_equipotential":
      "Selecciona {n} punto(s) más para la línea equipotencial",
    "exercise6.js_select_more_additional":
      "Selecciona {n} punto(s) adicionales",
    "exercise6.js_alert_need_coords":
      "Por favor ingresa al menos las coordenadas X para ambos puntos o las elevaciones Z.",
    "exercise6.js_alert_need_xy":
      "Necesitamos valores X y Y (o X + Z para calcular Y).",
    "exercise6.js_alert_x_range":
      "Las coordenadas X ajustadas deben estar entre {minX} y {maxX}",
    "exercise6.js_alert_need_equipotential":
      "Primero debes completar la línea equipotencial antes de agregar puntos adicionales.",
    "exercise6.js_alert_additional_completed":
      "Ya se han completado los puntos adicionales. Limpia para empezar de nuevo.",
    "exercise6.result_hydraulic_title":
      "Resultados (basados en los puntos seleccionados):",
    "exercise6.result_elevation_point_1": "Elevación punto 1: {elev} m",
    "exercise6.result_elevation_point_2": "Elevación punto 2: {elev} m",
    "exercise6.result_delta_h": "Δh (diferencia de elevación): {delta} m",
    "exercise6.result_avg_elevation": "Elevación promedio: {avg} m",
    "exercise6.result_flow_direction": "Dirección del flujo: {direction}",
    "exercise6.result_flow_dir_1_to_2": "del punto 1 → punto 2",
    "exercise6.result_flow_dir_2_to_1": "del punto 2 → punto 1",
    "exercise7.title":
      "Ejercicio 7: Flujo a través de Sedimento y Carga Hidráulica",
    "exercise7.subtitle":
      "Observa la sección transversal, determina la dirección del flujo y explora la Ley de Darcy.",
    "exercise7.canvasLabel": "Simulación visual",
    "exercise7.stepper.observar": "Observar",
    "exercise7.stepper.perfil": "Perfil",
    "exercise7.stepper.explorar": "Explorar",
    "exercise7.step1.title": "Paso 1: Análisis de la sección transversal",
    "exercise7.step1.text":
      "Observa el lago (izquierda) y el piezómetro (derecha). El nivel del agua en el piezómetro representa la <strong>carga hidráulica del acuífero</strong> (h<sub>acuífero</sub>), mientras que el nivel del lago representa la carga en la superficie (h<sub>lago</sub> = 150).<br/><br/><strong>¿El agua fluye hacia arriba o hacia abajo a través del sedimento?</strong>",
    "exercise7.step1.countdownLabel": "Observa los niveles del agua",
    "exercise7.step1.answerUp": "Hacia arriba",
    "exercise7.step1.answerDown": "Hacia abajo",
    "exercise7.step2.title": "Paso 2: Perfil de Carga Hidráulica",
    "exercise7.step2.nextButton": "Siguiente: Explorar Ley de Darcy →",
    "exercise7.step3.title": "Paso 3: Ley de Darcy y Flujo Activo",
    "exercise7.step3.text":
      'La velocidad del flujo depende del gradiente de carga (Δh/ΔL) y de la conductividad hidráulica del sedimento (K), según la Ley de Darcy:<br/><span class="ej7-formula">v ∝ Δh × K</span><br/><br/>Ajusta los controles para experimentar cómo cambian el perfil y la velocidad del flujo.',
    "exercise7.step3.aquiferControl":
      "Carga del Acuífero (h<sub>acuífero</sub>)",
    "exercise7.step3.aquiferSliderLow": "Menor al lago",
    "exercise7.step3.aquiferSliderHigh": "Mayor al lago",
    "exercise7.step3.conductivityControl":
      "Conductividad Sedimento (K<sub>sedimento</sub>)",
    "exercise7.step3.conductivitySliderLow": "Baja (Arcilla)",
    "exercise7.step3.conductivitySliderHigh": "Alta (Arena)",
    "exercise7.hint.title": "Pista conceptual",
    "exercise7.hint1.body":
      "El agua siempre fluye desde donde la <strong>carga hidráulica es mayor</strong> hacia donde es menor. Compara el nivel del agua en el lago con el nivel del agua en el piezómetro. Si el piezómetro está más alto, la carga del acuífero es mayor y el flujo es ascendente. Si está más bajo, el flujo es descendente.",
    "exercise7.hint2.body":
      "En el <strong>perfil vertical de carga</strong> (gráfica de la derecha), la carga se mantiene constante en el lago y en el acuífero, pero cambia a través del sedimento. La pendiente de esa línea representa el <strong>gradiente hidráulico</strong>. Una pendiente ascendente indica flujo ascendente; una pendiente descendente indica flujo descendente.",
    "exercise7.hint3.body":
      "¿Qué pasa si la <strong>conductividad del sedimento es muy baja</strong> (arcilla)? El flujo sigue existiendo (la Ley de Darcy aplica siempre que haya un gradiente), pero la velocidad es muy pequeña. ¿Y si el acuífero y el lago tienen la <strong>misma carga</strong>? El gradiente es cero, por lo que no hay flujo neto.",
    "exercise7.completion":
      "¡Has completado el Ejercicio 7! Ahora comprendes cómo la carga hidráulica determina la dirección del flujo a través de un sedimento.",
    "exercise7.canvas.aquiferConfined": "Acuífero Confinado",
    "exercise7.canvas.sediment": "Sedimento",
    "exercise7.canvas.lake": "Lago",
    "exercise7.canvas.sectionCross": "Sección Transversal",
    "exercise7.canvas.sectionProfile": "Perfil de Carga Hidráulica",
    "exercise7.canvas.profileTitle": "Carga Hidráulica (h)",
    "exercise7.canvas.profileLower": "Menor",
    "exercise7.canvas.profileHigher": "Mayor",
    "exercise7.canvas.profileDepth": "Profundidad (z)",
    "exercise7.canvas.zoneAquifer": "Acuífero",
    "exercise8.title": "Simulación: Plano Freático y Líneas Equipotenciales",
    "exercise8.step1_heading": "Paso 1: Determinar el Nivel del Agua",
    "exercise8.step1_description":
      "La figura muestra una vista en planta de un lago y su línea costera. La elevación del nivel freático en el Pozo A es de 12 m. Suponiendo que el nivel freático es planar (un plano inclinado) y la elevación del lago es de 10 m, ¿cuál es la elevación esperada del nivel del agua en el Pozo B?",
    "exercise8.step1_between_button": "Entre 12 y 13 m",
    "exercise8.step1_hint":
      "Observa el mapa: el lago está a 10 m y el Pozo A a 12 m. Los botones se activarán en unos segundos...",
    "exercise8.step2_heading":
      "Paso 2: Líneas Equipotenciales y Dirección de Flujo",
    "exercise8.step2_explanation":
      "¡Correcto! El nivel del agua en el lago es horizontal (10 m). Por lo tanto, la carga es la misma a lo largo de toda la costa (línea equipotencial de 10 m). Como el flujo es perpendicular a las líneas equipotenciales y se asume que el nivel freático es planar, el intervalo de contorno de 2 m se extrapola hacia aguas arriba. El Pozo B está al doble de distancia de la costa que el Pozo A, resultando en un nivel de agua de 14 m.",
    "exercise8.step2_next_button": "Siguiente: Experimentar con la Pendiente",
    "exercise8.step3_heading": "Paso 3: Experimentar con el Gradiente",
    "exercise8.step3_description":
      "Ajusta la elevación del Pozo A. Observa cómo cambia la pendiente del nivel freático (gradiente) y cómo se reajustan las líneas equipotenciales, el nivel esperado en el Pozo B y el perfil de carga.",
    "exercise8.step3_well_a_label": "Nivel del Agua Pozo A (m)",
    "exercise8.step3_shallow_label": "Poco profundo (10.5)",
    "exercise8.step3_deep_label": "Más profundo (15)",
    "exercise8.step3_expected_well_b_label": "Nivel Esperado Pozo B:",
    "exercise8.step3_gradient_label": "Gradiente (m/m):",
    "exercise8.step3_gradient_subtext":
      "Δh / ΔL desde la costa hasta el Pozo A",
    "exercise8.correct_feedback": "¡Correcto! El Pozo B está a 14 m.",
    "exercise8.incorrect_feedback":
      "Incorrecto. Revisa la distancia entre la costa, el Pozo A y el Pozo B. Recuerda que el lago es una frontera de carga constante (10 m).",
    "exercise8.lake_label": "Lago",
    "exercise8.lake_head": "h = 10 m",
    "exercise8.well_a": "Pozo A",
    "exercise8.well_b": "Pozo B",
    "exercise8.profile_title": "Perfil de Carga",
    "exercise8.distance": "Distancia (m)",
    "exercise8.head": "Carga (m)",
    "exercise8.shoreline": "Costa",
    "exercise9.stepper.estimate": "Estimar",
    "exercise9.stepper.explanation": "Explicación",
    "exercise9.stepper.experiment": "Experimentar",
    "exercise9.title": "Ejercicio 9: Flujo Horizontal y Acuíferos Múltiples",
    "exercise9.subtitle":
      "Estima los niveles de agua, determina el flujo vertical y experimenta con las fronteras constantes.",
    "exercise9.step1.title":
      "Paso 1: Estimar Niveles y Determinar Flujo Vertical",
    "exercise9.step1.description":
      "Considera un acuífero no confinado sobre un acuitardo de arcilla, y un acuífero confinado debajo. El sistema está flanqueado por cuerpos de agua (54 m a la izquierda, 50 m a la derecha). Asumiendo una disminución <strong>lineal</strong> del nivel freático, estima el nivel en cada pozo (Izquierdo, Centro, Derecho) y determina si hay flujo vertical a través de la arcilla.",
    "exercise9.hint.label": "Pista conceptual",
    "exercise9.step1.hint":
      "Si el nivel freático disminuye linealmente de 54 m a 50 m, ¿cuáles son las cargas a 1/4, 1/2 y 3/4 de la distancia? Ahora compara esos valores con las cargas en el acuífero confinado inferior — ambos comparten las <strong>mismas fronteras de carga constante</strong>. Si la carga es igual arriba y abajo de la arcilla en cada ubicación, ¿hay gradiente vertical?",
    "exercise9.step1.option1.sub": "Flujo vertical hacia abajo",
    "exercise9.step1.option2.sub": "Sin flujo vertical",
    "exercise9.step1.option3.sub": "Flujo vertical hacia arriba",
    "exercise9.step1.option4.sub": "Flujo vertical hacia arriba",
    "exercise9.step2.title": "Paso 2: Explicación del Gradiente Lineal",
    "exercise9.step2.explanation1":
      "¡Correcto! Al asumir una disminución lineal del nivel freático de 54 m a 50 m, los pozos espaciados equitativamente tienen niveles de <strong>53 m, 52 m y 51 m</strong> respectivamente.",
    "exercise9.step2.explanation2":
      "El acuífero confinado inferior comparte las mismas fronteras de carga hidráulica constante (54 m y 50 m). Por lo tanto, el gradiente horizontal es el <strong>mismo en ambos acuíferos</strong>. Como la carga es igual por encima y por debajo de la arcilla en cualquier ubicación (por ejemplo, 53 m en ambos acuíferos en el pozo izquierdo), <strong>no hay gradiente vertical</strong> y, en consecuencia, no hay flujo vertical a través de la arcilla.",
    "exercise9.step2.hint":
      "El <strong>gradiente vertical</strong> se define como la diferencia de carga dividida por el espesor del acuitardo: <em>i<sub>v</sub> = (h<sub>arriba</sub> − h<sub>abajo</sub>) / L<sub>arcilla</sub></em>. Si h<sub>arriba</sub> = h<sub>abajo</sub> en cada punto x, entonces i<sub>v</sub> = 0 y, por la Ley de Darcy, el flujo vertical Q<sub>v</sub> = 0.",
    "exercise9.step2.nextButton": "Siguiente: Experimentar con el Gradiente →",
    "exercise9.step3.title":
      "Paso 3: Experimentar con las Fronteras Constantes",
    "exercise9.step3.description":
      "Ajusta los niveles de los cuerpos de agua fronterizos. Observa cómo el nivel freático y las líneas equipotenciales del acuífero confinado cambian en paralelo, manteniendo siempre un <strong>flujo vertical nulo</strong> a través de la arcilla.",
    "exercise9.step3.hint":
      "¿Qué pasa si haces que la <strong>frontera izquierda sea más alta</strong> que la derecha? El gradiente horizontal se invierte, pero mientras ambos acuíferos compartan los mismos valores de frontera, la carga arriba y abajo de la arcilla seguirá siendo igual en cada punto x. El flujo vertical permanece cero.",
    "exercise9.step3.leftSliderLabel": "Nivel de Agua Izquierdo (m)",
    "exercise9.step3.rightSliderLabel": "Nivel de Agua Derecho (m)",
    "exercise9.canvasLabel": "Simulación visual",
    "exercise9.completion":
      "¡Has completado el Ejercicio 9! Comprendes que cuando dos acuíferos comparten las mismas fronteras de carga constante, no hay gradiente vertical a través del acuitardo.",
    "exercise9.canvas.unconfinedAquifer": "Acuífero No Confinado",
    "exercise9.canvas.aquitard": "Acuitardo (Arcilla)",
    "exercise9.canvas.confinedAquifer": "Acuífero Confinado",
    "exercise9.canvas.waterTable": "Nivel Freático",
    "exercise9.canvas.wellLeft": "Pozo Izquierdo",
    "exercise9.canvas.wellCenter": "Pozo Central",
    "exercise9.canvas.wellRight": "Pozo Derecho",
    "exercise9.canvas.unknownHead": "? m",
    "exercise10.stepper_step1": "Selecciona",
    "exercise10.stepper_step2": "Solución",
    "exercise10.stepper_step3": "Simulador",
    "exercise10.title": "Simulación: Identificación de Líneas Equipotenciales",
    "exercise10.subtitle":
      "Analiza los datos de nivel de agua y selecciona el esquema correcto. Luego experimenta con el simulador interactivo.",
    "exercise10.step1_title": "Selecciona el Esquema Correcto",
    "exercise10.step1_description":
      "Basándote en los datos de nivel de agua mostrados arriba (180m a la izquierda, 170m a la derecha, en ambos acuíferos), ¿qué esquema de abajo representa mejor las líneas equipotenciales y la dirección del flujo?",
    "exercise10.problem_img_caption":
      "Datos de nivel de agua en los pozos de monitoreo",
    "exercise10.option_a_label": "Opción a)",
    "exercise10.option_b_label": "Opción b)",
    "exercise10.option_c_label": "Opción c)",
    "exercise10.option_d_label": "Opción d)",
    "exercise10.btn_reveal_solution": "Revelar Solución →",
    "exercise10.btn_continue_to_simulator": "Continuar al Simulador →",
    "exercise10.step2_title": "Solución y Explicación",
    "exercise10.solution_img_caption": "Respuesta correcta: Opción b)",
    "exercise10.solution_text_p1":
      "La carga hidráulica en cada tramo ranurado es igual a la elevación del nivel de agua en cada pozo (180m a la izquierda, 170m a la derecha). Basado en estos datos, la carga disminuye hacia la derecha, y el flujo vertical estará restringido debido al acuitardo de arcilla.",
    "exercise10.solution_text_p2":
      "Por consiguiente, el flujo en las zonas de arena es principalmente <strong>horizontal</strong>, y las líneas equipotenciales son casi <strong>verticales</strong> porque el flujo es ortogonal a las equipotenciales en medios isotrópicos.",
    "exercise10.btn_go_to_simulator": "Ir al Simulador Interactivo →",
    "exercise10.step3_title": "Simulador Interactivo de Cargas",
    "exercise10.step3_description":
      "¿Qué sucedería si los niveles de agua no fueran idénticos arriba y abajo? Modifica los niveles de agua de los pozos superiores e inferiores para observar cómo cambia la dirección del flujo a través del acuitardo.",
    "exercise10.control_left_side": "Lado Izquierdo",
    "exercise10.control_right_side": "Lado Derecho",
    "exercise10.label_upper_well": "Pozo Superior (m)",
    "exercise10.label_lower_well": "Pozo Inferior (m)",
    "exercise10.btn_reset_values": "Restablecer Valores",
    "exercise10.completion_text":
      "¡Has completado el Ejercicio 10! Experimenta con el simulador para entender mejor los gradientes verticales.",
    "exercise10.canvas_sand_high_k": "Arena (Alta K)",
    "exercise10.canvas_clay_aquitard": "Arcilla (Acuitardo)",
    "exercise10.canvas_well_upper": "Pozo Sup.",
    "exercise10.canvas_well_lower": "Pozo Inf.",
    "exercise11.stepper_step1_label": "Dibuja",
    "exercise11.stepper_step2_label": "Contornos",
    "exercise11.stepper_step3_label": "Dirección",
    "exercise11.stepper_step4_label": "Perfil",
    "exercise11.title":
      "Ejercicio 11: Flujo de Agua Subterránea y Carga Hidráulica",
    "exercise11.subtitle":
      "Usa el lienzo para esbozar tus respuestas antes de revelar cada solución.",
    "exercise11.step1_title":
      "Partes A y B — Contornos y Superficie Potenciométrica",
    "exercise11.step1_text":
      "<strong>A)</strong> Dibuja los <strong>contornos equipotenciales</strong> en la arena inferior a intervalos de 1 m.<br/><strong>B)</strong> Traza la <strong>superficie potenciométrica</strong> (línea que conecta los niveles de agua en los pozos del acuífero confinado).",
    "exercise11.canvas_label": "Dibuja en el lienzo y luego revela la solución",
    "exercise11.tool_button_pen": "Lápiz",
    "exercise11.tool_button_eraser": "Borrador",
    "exercise11.tool_button_undo": "Deshacer",
    "exercise11.tool_button_clear": "Limpiar",
    "exercise11.reveal_ab_button": "Revelar Solución A y B →",
    "exercise11.compare_label_a": "A — Contornos Equipotenciales",
    "exercise11.compare_label_b": "B — Superficie Potenciométrica",
    "exercise11.next_to_c_button": "Continuar a Parte C →",
    "exercise11.step2_title": "Parte C — Dirección del Flujo",
    "exercise11.step2_text":
      "¿En qué dirección fluye el agua subterránea a través de la <strong>arcilla superior</strong>?",
    "exercise11.choice_up": "Hacia arriba",
    "exercise11.choice_down": "Hacia abajo",
    "exercise11.choice_horizontal": "Horizontal",
    "exercise11.choice_none": "Sin flujo",
    "exercise11.next_to_d_button": "Continuar a Parte D →",
    "exercise11.step3_title": "Parte D — Perfil Vertical de Carga",
    "exercise11.step3_text":
      "Usa el lienzo para esbozar el <strong>perfil vertical de carga hidráulica</strong> cerca del Pozo 2 (desde la arena inferior hasta la superficie).",
    "exercise11.reveal_d_button": "Revelar Solución Final →",
    "exercise11.compare_label_d": "D — Perfil Vertical de Carga",
    "exercise11.completion_text":
      "¡Has completado el Ejercicio 11! Compara tu dibujo en el lienzo con las soluciones.",
    "exercise12.stepper.step1_label": "Dibuja",
    "exercise12.stepper.step2_label": "Contornos",
    "exercise12.stepper.step3_label": "Dirección",
    "exercise12.stepper.step4_label": "Perfil",
    "exercise12.title":
      "Ejercicio 12: Flujo de Agua Subterránea y Carga Hidráulica",
    "exercise12.subtitle":
      "Usa el lienzo para esbozar tus respuestas antes de revelar cada solución.",
    "exercise12.canvas_label": "Dibuja en el lienzo y luego revela la solución",
    "exercise12.toolbar.thickness": "Grosor",
    "exercise12.toolbar.color": "Color",
    "exercise12.toolbar.pen": "Lápiz",
    "exercise12.toolbar.eraser": "Borrador",
    "exercise12.toolbar.undo": "Deshacer",
    "exercise12.toolbar.clear": "Limpiar",
    "exercise12.hint_summary": "Pista conceptual",
    "exercise12.step1_title":
      "Partes A y B — Contornos y Superficie Potenciométrica",
    "exercise12.step1_text":
      "<strong>A)</strong> Dibuja los <strong>contornos equipotenciales</strong> en la arena inferior a intervalos de 1 m.<br/><strong>B)</strong> Traza la <strong>superficie potenciométrica</strong> (línea que conecta los niveles de agua en los pozos del acuífero confinado).",
    "exercise12.step1_hint_a":
      "<strong>Parte A:</strong> Las líneas equipotenciales conectan puntos de igual carga hidráulica. En un acuífero homogéneo e isotrópico con flujo predominantemente horizontal, los contornos equipotenciales son líneas aproximadamente verticales. Interpola linealmente entre los valores de carga conocidos en los pozos (36 m y 40 m).",
    "exercise12.step1_hint_b":
      "<strong>Parte B:</strong> La superficie potenciométrica es la superficie imaginaria que representaría el nivel al que subiría el agua en un pozo abierto en cualquier punto del acuífero confinado. En sección transversal con dos pozos, es una línea recta que conecta las elevaciones de carga.",
    "exercise12.btn_reveal_ab": "Revelar Solución A y B →",
    "exercise12.compare_label_a": "A — Contornos Equipotenciales",
    "exercise12.compare_label_b": "B — Superficie Potenciométrica",
    "exercise12.explanation_label": "Explicación:",
    "exercise12.explanation_ab":
      "Los contornos equipotenciales son líneas verticales uniformemente espaciadas en la arena inferior. La carga aumenta de 36 m (Pozo 1, izquierda) a 40 m (Pozo 2, derecha), por lo que los contornos se etiquetan 36, 37, 38, 39, 40 m de izquierda a derecha. La superficie potenciométrica es la línea recta que conecta el nivel del agua en ambos pozos ranurados en el acuífero confinado.",
    "exercise12.btn_continue_c": "Continuar a Parte C →",
    "exercise12.step2_title": "Parte C — Dirección del Flujo",
    "exercise12.step2_text":
      "En el Pozo 2, la carga potenciométrica en la arena inferior es <strong>40 m</strong> y el nivel freático en la arena superior es <strong>~38 m</strong>. ¿Cuál es la dirección del flujo de agua subterránea a través de la <strong>arcilla superior</strong>?",
    "exercise12.step2_hint":
      "Compara la elevación del nivel freático con la carga potenciométrica en el acuífero confinado debajo. El agua fluye desde carga mayor hacia carga menor. ¿Dónde es mayor la carga: arriba o abajo del acuitardo?",
    "exercise12.choice_up": "Hacia arriba",
    "exercise12.choice_down": "Hacia abajo",
    "exercise12.choice_none": "Sin flujo vertical",
    "exercise12.btn_continue_d": "Continuar a Parte D →",
    "exercise12.step3_title": "Parte D — Perfil Vertical de Carga",
    "exercise12.step3_text":
      "Usa el lienzo para esbozar el <strong>perfil vertical de carga hidráulica</strong> cerca del Pozo 2 (desde la arena inferior hasta la superficie).",
    "exercise12.step3_hint":
      "En un acuífero libre con componente vertical de flujo, la carga disminuye ligeramente hacia abajo. A través de un acuitardo con flujo ascendente, la carga experimenta un salto pronunciado. En un acuífero confinado con flujo predominantemente horizontal, la carga es casi constante con la profundidad.",
    "exercise12.btn_reveal_d": "Revelar Solución Final →",
    "exercise12.compare_label_d": "D — Perfil Vertical de Carga",
    "exercise12.explanation_d":
      "El perfil muestra: (1) una ligera disminución de carga hacia abajo en el acuífero libre (debido al componente vertical del flujo), (2) un salto pronunciado ascendente a través del acuitardo de arcilla (la carga aumenta porque el flujo es ascendente), y (3) carga casi constante en el acuífero confinado inferior (donde el flujo es predominantemente horizontal).",
    "exercise12.completion":
      "¡Has completado el Ejercicio 12! Compara tu dibujo en el lienzo con las soluciones.",
  },
  en: {
    "nav.home": "Quick Start",
    "nav.books": "Interactive Books",
    "nav.contact": "Contact",
    "book.title": "Interactive Book",
    "book.content": "Content",
    "book.intro": "Introduction",
    "book.back": "Back",
    "book.select": "☝️ To access the exercises, select an option above.",
    "404.title": "Oops! Page not found",
    "404.desc":
      "We are very sorry, we could not find this page. It seems to be an old link or maybe it has moved.",
    "404.back": "Return Home",
    "home.title": "Welcome to our interactive educational platform",
    "home.mission":
      "Our mission is to offer a unique learning experience through interactive books on geology. Explore our collection and discover a new way to learn.",
    "home.explore": "Explore",
    "home.start": "Start",
    "home.portfolio": "Portfolio",
    "home.library_title": "Explore the interactive library",
    "home.library_desc": "Explore a variety of interactive books",
    "home.view_project": "View project →",
    "home.see_all": "See all",
    "home.geology": "Geology",
    "home.hydrology": "Hydrology",
    "home.water": "Water",
    "home.salinity": "Salinity",
    "books.title_detail": "Book Details",
    "books.library_title": "Explore the interactive library",
    "books.library_desc": "Discover a new way to learn.",
    "books.digital_education": "Digital Education",
    "books.interactive_books": "Interactive Books",
    "books.active_learning": "Active Learning",
    "books.author": "Author",
    "books.date": "Date",
    "books.place": "Place",
    "books.pages": "Pages",
    "books.go_to_book": "Go to book",
    "books.see_more": "See more",
    "exercise1.title": "Hydraulic Gradient",
    "exercise1.description":
      "This exercise is based on the rearranged form of Darcy's Law, which allows direct analysis of the hydraulic gradient. The fundamental equation is presented below:",
    "exercise1.formula_intro":
      'This exercise uses the <span class="lato-bold">rearranged formula</span> for hydraulic gradient:',
    "exercise1.observation":
      "In this section you can observe how the hydraulic gradient (<em>i</em>) varies as a function of conductivity (<em>K</em>), flow rate (<em>Q</em>), and area (<em>A</em>).",
    "exercise1.how_it_works": "⚙️ How It Works",
    "exercise1.instructions":
      "Adjust the controls to see how each parameter affects the hydraulic gradient visualization:",
    "exercise1.k_desc":
      '<span class="lato-bold">K (Conductivity)</span>: regulates how easily water flows through the medium.',
    "exercise1.a_desc":
      '<span class="lato-bold">A (Area)</span>: determines the amount of visible flow in the tubes.',
    "exercise1.q_desc":
      '<span class="lato-bold">Q (Flow rate)</span>: sets the total flow volume in the system.',
    "exercise1.slider_help":
      "Use the sliders or enter values manually to explore how variations in each parameter affect the hydraulic gradient.",
    "exercise1.manual_data": "Manual data",
    "exercise1.manual_warning": "(Visual representation may become distorted)",
    "exercise1.section_a": "Section A",
    "exercise1.section_b": "Section B",
    "exercise1.section_c": "Section C",
    "exercise1.section_d": "Section Other",
    "exercise1.k_label": "K (Conductivity)",
    "exercise1.a_label": "A (Area)",
    "exercise1.q_label": "Q (Flow rate):",
    "exercise1.reset": "Reset",
    "exercise1.enlarge_screen": "📱 Enlarge screen",
    "exercise1.total_gradient": "i TOTAL (Average) =",
    "exercise2.info.title": "Water Flow in Porous Media",
    "exercise2.info.para1":
      "The apparatus consists of a cylinder of cross-sectional area <b>A</b> that is filled with a porous medium, such as sand. Water is slowly introduced into the left container and flows through the sand-filled cylinder until the pores are completely saturated.",
    "exercise2.info.para2":
      "As water continues to enter, the water levels in both containers gradually rise until the water in the right container reaches the top edge and begins to overflow. At that point, although water continues to enter from the left side, the right level remains constant. The left level continues to rise until the inflow rate <b>Q<sub>in</sub></b> equals the outflow rate <b>Q<sub>out</sub></b>.",
    "exercise2.info.para3":
      "At that moment, a <b>steady-state flow</b> condition is reached, where the amount of water entering equals the amount leaving. The value of <b>Q</b> represents the volumetric flow rate of water through the cylinder (i.e., volume per unit time, such as m³/s, L/s, or gal/min).",
    "exercise2.info.para4":
      "In this experiment, water flows from an area of higher hydraulic energy toward one of lower energy. This energy difference is called the <b>hydraulic gradient</b>, and can be expressed by the relationship:",
    "exercise2.info.para5":
      "where <b>Δh</b> is the hydraulic head difference between the two points, and <b>ΔL</b> is the distance between the piezometers. Flow is parallel to the cylinder axis and depends on the properties of the medium (porosity and hydraulic conductivity).",
    "exercise2.info.para6":
      "Under natural conditions, groundwater flow develops within a much more complex three-dimensional medium. Hydraulic gradients and flow directions can vary in both magnitude and direction depending on subsurface structure, the presence of confining layers, and terrain heterogeneity.",
    "exercise2.info.para7":
      "If we install wells to measure the hydraulic gradient without knowing the orientation of the stratum or the inclination of the medium, we can only deduce that there is a horizontal flow component. However, the flow could also have a vertical component (upward or downward) depending on the inclination of the medium or the arrangement of confining boundaries.",
    "exercise2.info.para8":
      "In some cases, the inclination may be so pronounced that flow approaches a vertical direction. This analysis underscores the importance of knowing the <b>orientation of confining boundaries</b> and other geological features to correctly interpret hydraulic head data and determine the actual flow direction.",
    "exercise2.ui.graph": "Graph",
    "exercise2.ui.data": "Data",
    "exercise2.ui.controls": "Controls",
    "exercise2.ui.input_type": "Input type",
    "exercise2.ui.distance": "Distance between piezometers",
    "exercise2.ui.flow_rate": "Flow rate",
    "exercise2.ui.conductivity": "Conductivity",
    "exercise2.ui.area": "Area",
    "exercise2.ui.unit_per_day": "m/day",
    "exercise3.title": "Interactive Hydraulic Head with Sand Divisions",
    "exercise3.h1_label": "h₁ (left head):",
    "exercise3.h2_label": "h₂ (right head):",
    "exercise3.piezo_label": "Equipotential height (piezometer):",
    "exercise3.manual_toggle": "Enable manual input mode",
    "exercise3.water_label": "Select water level (ft):",
    "exercise3.sand_label": "Sand divisions added:",
    "exercise3.piezo_control": "Piezometer position:",
    "exercise3.help_line1": "Default head on the right (h₂) = 12 ft.",
    "exercise3.help_line2":
      "Adding sand divisions increases the left head (h₁) by 1 ft per division.",
    "exercise3.help_line3": "Divisions appear only inside the sand zone.",
    "exercise3.help_line4":
      "Water level can be adjusted between 0 and 12 ft using either input type.",
    "exercise4.title": "Interactive Aquifer Diagram",
    "exercise4.intro":
      "Adjust the parameters (or use Manual mode). The diagram reacts in real time; on the right you will see formulas and results.",
    "exercise4.profile": "Hydrogeological Profile",
    "exercise4.ground_ref": "Ground surface (reference)",
    "exercise4.unconfined_aq": "Unconfined Aquifer",
    "exercise4.upper_aquitard": "Upper Aquitard",
    "exercise4.confined_aq": "Confined Aquifer",
    "exercise4.lower_aquitard": "Lower Aquitard",
    "exercise4.gradient_flow": "Gradient & Flow (Darcy)",
    "exercise4.water_table": "Water Table",
    "exercise4.potentiometric": "Potentiometric Surface",
    "exercise4.depth_water_l": "Depth to water (L):",
    "exercise4.depth_water_r": "Depth to water (R):",
    "exercise4.formulas_results": "Formulas & Results",
    "exercise4.discharge": "Discharge (confined)",
    "exercise4.parameters": "Parameters",
    "exercise4.mode_label": "Mode:",
    "exercise4.mode_interactive": "Interactive",
    "exercise4.mode_manual": "Manual",
    "exercise4.reset": "Reset",
    "exercise4.random": "Random",
    "exercise4.distance": "Distance L (m)",
    "exercise4.between_wells": "Between wells:",
    "exercise4.left_elevation": "Left elevation (m)",
    "exercise4.slope": "Slope (m per 100 m → right)",
    "exercise4.hydraulic_params": "Hydraulic Parameters",
    "exercise4.conductivity": "Conductivity K (m/s)",
    "exercise4.area": "Cross-sectional area A (m²)",
    "exercise5.title": "Interactive Scheme: Hydraulic Head Inputs",
    "exercise5.elevation": "Elevation (z) [m]:",
    "exercise5.elev_placeholder": "e.g. 10m",
    "exercise5.pressure": "Pressure (p) [Pa]:",
    "exercise5.pressure_placeholder": "e.g. 10000Pa",
    "exercise5.well_size": "Well size:",
    "exercise5.well_placeholder": "e.g. 10m",
    "exercise5.hydraulic_head": "Hydraulic head (h):",
    "exercise6.title": "Exercise 6 – Flow in an unconfined aquifer",
    "exercise6.instruction_initial":
      "Select 2 points to create the equipotential line",
    "exercise6.helper_text":
      "Select 2 points to create the <b>equipotential line</b> on the unconfined aquifer diagram. You can also switch to coordinate mode.",
    "exercise6.btn_equipotential": "Equipotential Line",
    "exercise6.btn_additional_points": "Additional Points",
    "exercise6.btn_clear": "Clear",
    "exercise6.btn_mode_manual": "Manual Mode",
    "exercise6.btn_mode_coords": "Coordinate Mode",
    "exercise6.label_element_type": "Element type:",
    "exercise6.label_point_1": "Point 1",
    "exercise6.label_point_2": "Point 2",
    "exercise6.hint_coords":
      "Enter X,Y in image coordinates (pixels). If you only enter Z, Y will be calculated from the elevation using the scale (0–100 m).",
    "exercise6.legend_equipotential": "Equipotential Line",
    "exercise6.legend_additional_line": "Additional Line",
    "exercise6.legend_midpoint_eq": "Eq. Midpoint",
    "exercise6.legend_midpoint_ad": "Ad. Midpoint",
    "exercise6.legend_additional_points": "Additional Points",
    "exercise6.loading": "Loading image...",
    "exercise6.js_error_loading": "Error loading the base image.",
    "exercise6.js_mode_coords_warning":
      "You are in Coordinate mode — use the form or switch back to Manual Mode.",
    "exercise6.js_additional_already_completed":
      "You have already completed the additional points selection. Press 'Clear' to start over.",
    "exercise6.js_equipotential_already_completed":
      "You have already completed the equipotential line. Switch to 'Additional Points' or press 'Clear' to start over.",
    "exercise6.js_invalid_area":
      "Select within the valid area (x ≥ {minX} real)",
    "exercise6.js_range_warning":
      "Select within the range between the wells (x between {minX} and {maxX}).",
    "exercise6.js_equipotential_done":
      "Equipotential line completed. You can now select 'Additional Points'.",
    "exercise6.js_equipotential_done_add":
      "Equipotential line completed. Switch to 'Additional Points' to add more points.",
    "exercise6.js_equipotential_done_coords":
      "Equipotential line completed (Coordinate mode). You can now select 'Additional Points'.",
    "exercise6.js_need_equipotential_first":
      "First complete the equipotential line before adding additional points.",
    "exercise6.js_additional_done":
      "Additional points completed. Press 'Clear' to start over.",
    "exercise6.js_additional_done_coords":
      "Additional points completed (Coordinate mode). Press 'Clear' to start over.",
    "exercise6.js_select_more_equipotential":
      "Select {n} more point(s) for the equipotential line",
    "exercise6.js_select_more_additional": "Select {n} additional point(s)",
    "exercise6.js_alert_need_coords":
      "Please enter at least the X coordinates for both points or the Z elevations.",
    "exercise6.js_alert_need_xy":
      "We need X and Y values (or X + Z to calculate Y).",
    "exercise6.js_alert_x_range":
      "Adjusted X coordinates must be between {minX} and {maxX}",
    "exercise6.js_alert_need_equipotential":
      "You must first complete the equipotential line before adding additional points.",
    "exercise6.js_alert_additional_completed":
      "Additional points have already been completed. Clear to start over.",
    "exercise6.result_hydraulic_title": "Results (based on selected points):",
    "exercise6.result_elevation_point_1": "Elevation point 1: {elev} m",
    "exercise6.result_elevation_point_2": "Elevation point 2: {elev} m",
    "exercise6.result_delta_h": "Δh (elevation difference): {delta} m",
    "exercise6.result_avg_elevation": "Average elevation: {avg} m",
    "exercise6.result_flow_direction": "Flow direction: {direction}",
    "exercise6.result_flow_dir_1_to_2": "from point 1 → point 2",
    "exercise6.result_flow_dir_2_to_1": "from point 2 → point 1",
    "exercise7.title": "Exercise 7: Flow through Sediment and Hydraulic Head",
    "exercise7.subtitle":
      "Observe the cross section, determine the flow direction, and explore Darcy's Law.",
    "exercise7.canvasLabel": "Visual simulation",
    "exercise7.stepper.observar": "Observe",
    "exercise7.stepper.perfil": "Profile",
    "exercise7.stepper.explorar": "Explore",
    "exercise7.step1.title": "Step 1: Cross-section Analysis",
    "exercise7.step1.text":
      "Observe the lake (left) and the piezometer (right). The water level in the piezometer represents the <strong>aquifer's hydraulic head</strong> (h<sub>aquifer</sub>), while the lake level represents the surface head (h<sub>lake</sub> = 150).<br/><br/><strong>Does water flow upward or downward through the sediment?</strong>",
    "exercise7.step1.countdownLabel": "Observe the water levels",
    "exercise7.step1.answerUp": "Upward",
    "exercise7.step1.answerDown": "Downward",
    "exercise7.step2.title": "Step 2: Hydraulic Head Profile",
    "exercise7.step2.nextButton": "Next: Explore Darcy's Law →",
    "exercise7.step3.title": "Step 3: Darcy's Law and Active Flow",
    "exercise7.step3.text":
      'Flow velocity depends on the head gradient (Δh/ΔL) and the hydraulic conductivity of the sediment (K), according to Darcy\'s Law:<br/><span class="ej7-formula">v ∝ Δh × K</span><br/><br/>Adjust the controls to experiment with how the profile and flow velocity change.',
    "exercise7.step3.aquiferControl": "Aquifer Head (h<sub>aquifer</sub>)",
    "exercise7.step3.aquiferSliderLow": "Lower than lake",
    "exercise7.step3.aquiferSliderHigh": "Higher than lake",
    "exercise7.step3.conductivityControl":
      "Sediment Conductivity (K<sub>sediment</sub>)",
    "exercise7.step3.conductivitySliderLow": "Low (Clay)",
    "exercise7.step3.conductivitySliderHigh": "High (Sand)",
    "exercise7.hint.title": "Conceptual hint",
    "exercise7.hint1.body":
      "Water always flows from <strong>higher hydraulic head</strong> toward lower hydraulic head. Compare the water level in the lake with the water level in the piezometer. If the piezometer is higher, the aquifer head is greater and flow is upward. If it is lower, flow is downward.",
    "exercise7.hint2.body":
      "In the <strong>vertical head profile</strong> (right-hand graph), the head remains constant in the lake and in the aquifer, but changes across the sediment. The slope of that line represents the <strong>hydraulic gradient</strong>. An upward slope indicates upward flow; a downward slope indicates downward flow.",
    "exercise7.hint3.body":
      "What happens if the <strong>sediment conductivity is very low</strong> (clay)? Flow still exists (Darcy's Law applies whenever there is a gradient), but the velocity is very small. And what if the aquifer and lake have the <strong>same head</strong>? The gradient is zero, so there is no net flow.",
    "exercise7.completion":
      "You have completed Exercise 7! You now understand how hydraulic head determines the direction of flow through sediment.",
    "exercise7.canvas.aquiferConfined": "Confined Aquifer",
    "exercise7.canvas.sediment": "Sediment",
    "exercise7.canvas.lake": "Lake",
    "exercise7.canvas.sectionCross": "Cross Section",
    "exercise7.canvas.sectionProfile": "Hydraulic Head Profile",
    "exercise7.canvas.profileTitle": "Hydraulic Head (h)",
    "exercise7.canvas.profileLower": "Lower",
    "exercise7.canvas.profileHigher": "Higher",
    "exercise7.canvas.profileDepth": "Depth (z)",
    "exercise7.canvas.zoneAquifer": "Aquifer",
    "exercise8.title": "Simulation: Water Table and Equipotential Lines",
    "exercise8.step1_heading": "Step 1: Determine the Water Level",
    "exercise8.step1_description":
      "The figure shows a map view of a lake and its shoreline. The water table elevation at Well A is 12 m. Assuming the water table is planar (an inclined plane) and the lake elevation is 10 m, what is the expected water level elevation in Well B?",
    "exercise8.step1_between_button": "A value between 12 and 13 m",
    "exercise8.step1_hint":
      "Observe the map: the lake is at 10 m and Well A at 12 m. Buttons will activate in a few seconds...",
    "exercise8.step2_heading": "Step 2: Equipotential Lines and Flow Direction",
    "exercise8.step2_explanation":
      "Correct! The water level in the lake is horizontal (10 m). Therefore, the head is the same along the entire shoreline (10 m equipotential line). Because flow is perpendicular to equipotential lines and the water table is assumed planar, the 2 m contour interval is extrapolated upgradient. Well B is twice as far from the shoreline as Well A, resulting in a water level of 14 m.",
    "exercise8.step2_next_button": "Next: Experiment with the Slope",
    "exercise8.step3_heading": "Step 3: Experiment with the Gradient",
    "exercise8.step3_description":
      "Adjust the elevation of Well A. Observe how the water table slope (gradient) changes and how the equipotential lines, expected Well B level, and head profile adjust.",
    "exercise8.step3_well_a_label": "Well A Water Level (m)",
    "exercise8.step3_shallow_label": "Shallow (10.5)",
    "exercise8.step3_deep_label": "Deep (15)",
    "exercise8.step3_expected_well_b_label": "Expected Well B Level:",
    "exercise8.step3_gradient_label": "Gradient (m/m):",
    "exercise8.step3_gradient_subtext": "Δh / ΔL from shoreline to Well A",
    "exercise8.correct_feedback": "Correct! Well B is at 14 m.",
    "exercise8.incorrect_feedback":
      "Incorrect. Review the distance between the shoreline, Well A, and Well B. Remember that the lake is a constant-head boundary (10 m).",
    "exercise8.lake_label": "Lake",
    "exercise8.lake_head": "h = 10 m",
    "exercise8.well_a": "Well A",
    "exercise8.well_b": "Well B",
    "exercise8.profile_title": "Head Profile",
    "exercise8.distance": "Distance (m)",
    "exercise8.head": "Head (m)",
    "exercise8.shoreline": "Shoreline",
    "exercise9.stepper.estimate": "Estimate",
    "exercise9.stepper.explanation": "Explanation",
    "exercise9.stepper.experiment": "Experiment",
    "exercise9.title": "Exercise 9: Horizontal Flow and Multiple Aquifers",
    "exercise9.subtitle":
      "Estimate water levels, determine vertical flow, and experiment with constant head boundaries.",
    "exercise9.step1.title":
      "Step 1: Estimate Levels and Determine Vertical Flow",
    "exercise9.step1.description":
      "Consider an unconfined aquifer over a clay aquitard, and a confined aquifer below. The system is flanked by water bodies (54 m on the left, 50 m on the right). Assuming a <strong>linear</strong> decrease in the water table, estimate the level in each well (Left, Center, Right) and determine whether there is vertical flow through the clay.",
    "exercise9.hint.label": "Conceptual Hint",
    "exercise9.step1.hint":
      "If the water table decreases linearly from 54 m to 50 m, what are the heads at 1/4, 1/2, and 3/4 of the distance? Now compare those values with the heads in the lower confined aquifer — both share the <strong>same constant head boundaries</strong>. If the head is equal above and below the clay at each location, is there a vertical gradient?",
    "exercise9.step1.option1.sub": "Vertical downward flow",
    "exercise9.step1.option2.sub": "No vertical flow",
    "exercise9.step1.option3.sub": "Vertical upward flow",
    "exercise9.step1.option4.sub": "Vertical upward flow",
    "exercise9.step2.title": "Step 2: Linear Gradient Explanation",
    "exercise9.step2.explanation1":
      "Correct! By assuming a linear decrease in the water table from 54 m to 50 m, the equally spaced wells have levels of <strong>53 m, 52 m, and 51 m</strong> respectively.",
    "exercise9.step2.explanation2":
      "The lower confined aquifer shares the same constant hydraulic head boundaries (54 m and 50 m). Therefore, the horizontal gradient is the <strong>same in both aquifers</strong>. Since the head is equal above and below the clay at any location (for example, 53 m in both aquifers at the left well), <strong>there is no vertical gradient</strong> and, consequently, no vertical flow through the clay.",
    "exercise9.step2.hint":
      "The <strong>vertical gradient</strong> is defined as the head difference divided by the aquitard thickness: <em>i<sub>v</sub> = (h<sub>above</sub> − h<sub>below</sub>) / L<sub>clay</sub></em>. If h<sub>above</sub> = h<sub>below</sub> at every point x, then i<sub>v</sub> = 0 and, by Darcy's Law, the vertical flow Q<sub>v</sub> = 0.",
    "exercise9.step2.nextButton": "Next: Experiment with the Gradient →",
    "exercise9.step3.title": "Step 3: Experiment with Constant Head Boundaries",
    "exercise9.step3.description":
      "Adjust the boundary water body levels. Observe how the water table and the equipotential lines of the confined aquifer change in parallel, always maintaining <strong>zero vertical flow</strong> through the clay.",
    "exercise9.step3.hint":
      "What happens if you make the <strong>left boundary higher</strong> than the right one? The horizontal gradient reverses, but as long as both aquifers share the same boundary values, the head above and below the clay will remain equal at every point x. Vertical flow stays zero.",
    "exercise9.step3.leftSliderLabel": "Left Water Level (m)",
    "exercise9.step3.rightSliderLabel": "Right Water Level (m)",
    "exercise9.canvasLabel": "Visual Simulation",
    "exercise9.completion":
      "You have completed Exercise 9! You understand that when two aquifers share the same constant head boundaries, there is no vertical gradient through the aquitard.",
    "exercise9.canvas.unconfinedAquifer": "Unconfined Aquifer",
    "exercise9.canvas.aquitard": "Aquitard (Clay)",
    "exercise9.canvas.confinedAquifer": "Confined Aquifer",
    "exercise9.canvas.waterTable": "Water Table",
    "exercise9.canvas.wellLeft": "Left Well",
    "exercise9.canvas.wellCenter": "Central Well",
    "exercise9.canvas.wellRight": "Right Well",
    "exercise9.canvas.unknownHead": "? m",
    "exercise10.stepper_step1": "Select",
    "exercise10.stepper_step2": "Solution",
    "exercise10.stepper_step3": "Simulator",
    "exercise10.title": "Simulation: Identification of Equipotential Lines",
    "exercise10.subtitle":
      "Analyze the water level data and select the correct diagram. Then experiment with the interactive simulator.",
    "exercise10.step1_title": "Select the Correct Diagram",
    "exercise10.step1_description":
      "Based on the water level data shown above (180m on the left, 170m on the right, in both aquifers), which diagram below best represents the equipotential lines and flow direction?",
    "exercise10.problem_img_caption": "Water level data in monitoring wells",
    "exercise10.option_a_label": "Option a)",
    "exercise10.option_b_label": "Option b)",
    "exercise10.option_c_label": "Option c)",
    "exercise10.option_d_label": "Option d)",
    "exercise10.btn_reveal_solution": "Reveal Solution →",
    "exercise10.btn_continue_to_simulator": "Continue to Simulator →",
    "exercise10.step2_title": "Solution and Explanation",
    "exercise10.solution_img_caption": "Correct answer: Option b)",
    "exercise10.solution_text_p1":
      "The hydraulic head at each screened interval equals the water level elevation in each well (180m on the left, 170m on the right). Based on these data, the head decreases to the right, and vertical flow will be restricted due to the clay aquitard.",
    "exercise10.solution_text_p2":
      "Consequently, flow in the sand zones is primarily <strong>horizontal</strong>, and equipotential lines are nearly <strong>vertical</strong> because flow is orthogonal to equipotentials in isotropic media.",
    "exercise10.btn_go_to_simulator": "Go to Interactive Simulator →",
    "exercise10.step3_title": "Interactive Head Simulator",
    "exercise10.step3_description":
      "What would happen if the water levels were not identical above and below? Adjust the water levels of the upper and lower wells to observe how the flow direction changes through the aquitard.",
    "exercise10.control_left_side": "Left Side",
    "exercise10.control_right_side": "Right Side",
    "exercise10.label_upper_well": "Upper Well (m)",
    "exercise10.label_lower_well": "Lower Well (m)",
    "exercise10.btn_reset_values": "Reset Values",
    "exercise10.completion_text":
      "You have completed Exercise 10! Experiment with the simulator to better understand vertical gradients.",
    "exercise10.canvas_sand_high_k": "Sand (High K)",
    "exercise10.canvas_clay_aquitard": "Clay (Aquitard)",
    "exercise10.canvas_well_upper": "Upper Well",
    "exercise10.canvas_well_lower": "Lower Well",
    "exercise11.stepper_step1_label": "Draw",
    "exercise11.stepper_step2_label": "Contours",
    "exercise11.stepper_step3_label": "Direction",
    "exercise11.stepper_step4_label": "Profile",
    "exercise11.title": "Exercise 11: Groundwater Flow and Hydraulic Head",
    "exercise11.subtitle":
      "Use the canvas to sketch your answers before revealing each solution.",
    "exercise11.step1_title":
      "Parts A & B — Equipotential Contours and Potentiometric Surface",
    "exercise11.step1_text":
      "<strong>A)</strong> Draw the <strong>equipotential contours</strong> in the lower sand at 1 m intervals.<br/><strong>B)</strong> Trace the <strong>potentiometric surface</strong> (line connecting the water levels in the wells of the confined aquifer).",
    "exercise11.canvas_label": "Draw on the canvas then reveal the solution",
    "exercise11.tool_button_pen": "Pencil",
    "exercise11.tool_button_eraser": "Eraser",
    "exercise11.tool_button_undo": "Undo",
    "exercise11.tool_button_clear": "Clear",
    "exercise11.reveal_ab_button": "Reveal Solution A & B →",
    "exercise11.compare_label_a": "A — Equipotential Contours",
    "exercise11.compare_label_b": "B — Potentiometric Surface",
    "exercise11.next_to_c_button": "Continue to Part C →",
    "exercise11.step2_title": "Part C — Flow Direction",
    "exercise11.step2_text":
      "In which direction does groundwater flow through the <strong>upper clay</strong>?",
    "exercise11.choice_up": "Upward",
    "exercise11.choice_down": "Downward",
    "exercise11.choice_horizontal": "Horizontal",
    "exercise11.choice_none": "No flow",
    "exercise11.next_to_d_button": "Continue to Part D →",
    "exercise11.step3_title": "Part D — Vertical Head Profile",
    "exercise11.step3_text":
      "Use the canvas to sketch the <strong>vertical hydraulic head profile</strong> near Well 2 (from the lower sand to the surface).",
    "exercise11.reveal_d_button": "Reveal Final Solution →",
    "exercise11.compare_label_d": "D — Vertical Head Profile",
    "exercise11.completion_text":
      "You have completed Exercise 11! Compare your canvas drawing with the solutions.",
    "exercise12.stepper.step1_label": "Draw",
    "exercise12.stepper.step2_label": "Contours",
    "exercise12.stepper.step3_label": "Direction",
    "exercise12.stepper.step4_label": "Profile",
    "exercise12.title": "Exercise 12: Groundwater Flow and Hydraulic Head",
    "exercise12.subtitle":
      "Use the canvas to sketch your answers before revealing each solution.",
    "exercise12.canvas_label":
      "Draw on the canvas and then reveal the solution",
    "exercise12.toolbar.thickness": "Thickness",
    "exercise12.toolbar.color": "Color",
    "exercise12.toolbar.pen": "Pen",
    "exercise12.toolbar.eraser": "Eraser",
    "exercise12.toolbar.undo": "Undo",
    "exercise12.toolbar.clear": "Clear",
    "exercise12.hint_summary": "Conceptual hint",
    "exercise12.step1_title":
      "Parts A and B — Equipotential Contours and Potentiometric Surface",
    "exercise12.step1_text":
      "<strong>A)</strong> Draw the <strong>equipotential contours</strong> in the lower sand at 1 m intervals.<br/><strong>B)</strong> Draw the <strong>potentiometric surface</strong> (line connecting the water levels in the wells of the confined aquifer).",
    "exercise12.step1_hint_a":
      "<strong>Part A:</strong> Equipotential lines connect points of equal hydraulic head. In a homogeneous, isotropic aquifer with predominantly horizontal flow, equipotential contours are approximately vertical lines. Linearly interpolate between the known head values at the wells (36 m and 40 m).",
    "exercise12.step1_hint_b":
      "<strong>Part B:</strong> The potentiometric surface is the imaginary surface that would represent the level to which water would rise in an open well at any point in the confined aquifer. In cross-section with two wells, it is a straight line connecting the head elevations.",
    "exercise12.btn_reveal_ab": "Reveal Solution A and B →",
    "exercise12.compare_label_a": "A — Equipotential Contours",
    "exercise12.compare_label_b": "B — Potentiometric Surface",
    "exercise12.explanation_label": "Explanation:",
    "exercise12.explanation_ab":
      "The equipotential contours are uniformly spaced vertical lines in the lower sand. The head increases from 36 m (Well 1, left) to 40 m (Well 2, right), so the contours are labeled 36, 37, 38, 39, 40 m from left to right. The potentiometric surface is the straight line connecting the water level in both wells screened in the confined aquifer.",
    "exercise12.btn_continue_c": "Continue to Part C →",
    "exercise12.step2_title": "Part C — Flow Direction",
    "exercise12.step2_text":
      "In Well 2, the potentiometric head in the lower sand is <strong>40 m</strong> and the water table in the upper sand is <strong>~38 m</strong>. What is the direction of groundwater flow through the <strong>upper clay</strong>?",
    "exercise12.step2_hint":
      "Compare the water table elevation with the potentiometric head in the confined aquifer below. Water flows from higher head to lower head. Where is the head greater: above or below the aquitard?",
    "exercise12.choice_up": "Upward",
    "exercise12.choice_down": "Downward",
    "exercise12.choice_none": "No vertical flow",
    "exercise12.btn_continue_d": "Continue to Part D →",
    "exercise12.step3_title": "Part D — Vertical Head Profile",
    "exercise12.step3_text":
      "Use the canvas to sketch the <strong>vertical hydraulic head profile</strong> near Well 2 (from the lower sand to the surface).",
    "exercise12.step3_hint":
      "In an unconfined aquifer with a vertical flow component, the head decreases slightly downward. Across an aquitard with upward flow, the head undergoes a pronounced jump. In a confined aquifer with predominantly horizontal flow, the head is nearly constant with depth.",
    "exercise12.btn_reveal_d": "Reveal Final Solution →",
    "exercise12.compare_label_d": "D — Vertical Head Profile",
    "exercise12.explanation_d":
      "The profile shows: (1) a slight downward decrease in head in the unconfined aquifer (due to the vertical flow component), (2) a pronounced upward jump across the clay aquitard (the head increases because flow is upward), and (3) nearly constant head in the lower confined aquifer (where flow is predominantly horizontal).",
    "exercise12.completion":
      "You have completed Exercise 12! Compare your drawing on the canvas with the solutions.",
  },
} as const;
