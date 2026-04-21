/**
 Datos sobre archivos de cronología
*/
const timelineItems = [
  { year: "1935", title: "Nacimiento en Ceuta", text: "Nace Carmen Cárceles Escarcena en Ceuta, ciudad clave en su memoria y en su identidad artística." },
  { year: "1949", title: "Llega a Madrid", text: "La capital fue elegida como  lugar de residencia para la familia. Empezó a formarse en la academia 'María de Román'" },
  { year: "1957", title: "Premio Nacional de Interpretación Coreográfica", text: "Recibe uno de los reconocimientos oficiales más importantes del Estado español por sus méritos artísticos." },
  { year: "1963", title: "Reconocimiento internacional", text: "La prensa recoge su actuación en la Casa Blanca y su impacto artístico tras actuar ante John F. Kennedy." },
  { year: "1964", title: "Festival de Cante Jondo de Granada", text: "Participa como figura principal de baile en uno de los eventos flamencos más relevantes del país." },
  { year: "1966", title: "Mónaco y cine", text: "Consolida su proyección internacional con presencia en Expotur Mónaco y en producciones cinematográficas." },
  { year: "1968-1970", title: "Texas y Nueva York", text: "Su carrera alcanza escenarios de gran prestigio, como la HemisFair de Texas y el Radio City Music Hall." },
  { year: "1983", title: "Abu Dhabi", text: "Continúa su actividad internacional en Oriente Medio durante la etapa madura de su carrera." }
];

/**
 Datos sobre archivos de hemeroteca
*/
const archiveItems = [
  { type: "Prensa internacional", title: "This is real flesh and blood ballet", meta: "Oxford · 1959", image: "img/prensa/Oxford-1959.jpeg", summary: "Recorte del Oxford Mail sobre la actuación de Carmen Rojas en la compañía de Antonio.", text: "Documento de prensa británica que destaca la calidad artística del ballet español y la presencia de Carmen Rojas en escena." },
  { type: "Reportaje", title: "Kirk Douglas quiere dirigir a Carmen Rojas", meta: "Madrid · 1963", image: "img/prensa/sabado-grafico-1963.jpg", summary: "El reportaje vincula a Carmen Rojas con Hollywood tras su actuación en la Casa Blanca.", text: "Uno de los artículos más valiosos del archivo por el reconocimiento internacional que refleja." },
  { type: "Entrevista", title: "Premio Viotti", meta: "Sevilla · 1963", image: "img/prensa/viotti-1963.jpg", summary: "Artículo sobre su reconocimiento en el concurso internacional celebrado en Italia.", text: "Refuerza su dimensión competitiva y su prestigio europeo." },
  { type: "Documento", title: "Carta de la Casa Blanca", meta: "Casa Blanca · 1963", image: "img/prensa/kennedy-1963.jpg", summary: "Carta oficial de agradecimiento firmada por John F. Kennedy.", text: "Carta oficial de agradecimiento firmada por John F. Kennedy." },
  { type: "Reportaje", title: "Vuelve Carmen Rojas", meta: "Madrid · 1964", image: "img/prensa/vuelve-carmen-1964.jpg", summary: "Regreso a los escenarios tras una lesión grave.", text: "Aporta una dimensión humana y de superación a la trayectoria de la artista." },
  { type: "Programa", title: "Festival de Cante Jondo de Granada", meta: "Granada · 1964", image: "img/prensa/granada-1964.jpg", summary: "Programa del festival con Carmen Rojas como figura principal de baile.", text: "Demuestra su consolidación también dentro del flamenco en España." },
  { type: "Prensa internacional", title: "Grace Kelly y Carmen Rojas en Mónaco", meta: "Mónaco · 1966", image: "img/prensa/monte-carlo-1966.jpg", summary: "Recorte de prensa sobre el encuentro con Grace Kelly en Expotur.", text: "Prensa española que documenta la proyección cultural de Carmen Rojas en Mónaco." },
  { type: "Prensa internacional", title: "Éxito del ballet español en Texas", meta: "San Antonio · 1968", image: "img/prensa/san-antonio-texas-1968.jpg", summary: "Recorte sobre el éxito del ballet de Carmen Rojas en la HemisFair 1968.", text: "Documento periodístico sobre la proyección del ballet español en Estados Unidos." },
  { type: "Prensa internacional", title: "Gracia y presencia de España en Nueva York", meta: "Nueva York · 1968", image: "img/prensa/nueva-york-1968.jpeg", summary: "Recorte de prensa sobre la presentación del Ballet de Carmen Rojas en Nueva York.", text: "Documento periodístico que destaca la presencia del ballet español y de Carmen Rojas en la Semana de España en Nueva York." },
  { type: "Prensa internacional", title: "Spain To Send Flamenco Team For Festival Events", meta: "Indianapolis · 1969", image: "img/prensa/Indianapolis-1969.jpeg", summary: "Recorte del Indianapolis News sobre la participación del equipo flamenco encabezado por Carmen Rojas en actos del festival.", text: "Documento de prensa internacional que confirma la proyección de Carmen Rojas en Estados Unidos durante la etapa de giras de finales de los sesenta." },
  { type: "Prensa internacional", title: "Triunfo en Radio City Music Hall", meta: "Nueva York · 1970", image: "img/prensa/radio-city-1970.jpg", summary: "Crónica sobre su actuación en uno de los escenarios más importantes del mundo.", text: "La prensa destaca el éxito del conjunto flamenco en Nueva York." },
  { type: "Entrevista", title: "Cinco preguntas a Carmen Rojas", meta: "Madrid", image: "img/prensa/cinco-preguntas.jpg", summary: "Entrevista sobre su visión artística, el duende y su trayectoria.", text: "Documento esencial para conocer su pensamiento sobre el baile." }
];

/**
 Datos sobre archivos de galería
*/
const galleryItems = [
  { category: "Infancia", title: "Primeros años en Ceuta", meta: "Archivo familiar", image: "img/infancia/infancia1.jpg", description: "Imagen de los primeros años de Carmen Rojas en Ceuta." },
  { category: "Infancia", title: "Retrato infantil", meta: "Ceuta", image: "img/infancia/infancia2.jpg", description: "Fotografía temprana de la artista en su infancia." },
  { category: "Infancia", title: "Vocación temprana", meta: "Archivo familiar", image: "img/infancia/infancia3.jpg", description: "Imagen infantil vinculada a sus primeros pasos artísticos." },
  { category: "Docencia", title: "Clase con la Duquesa de Alba", meta: "Palacio de Liria", image: "img/fotos/cayetana-alba.jpg", description: "Documento fotográfico de su labor docente en el Palacio de Liria." },
  { category: "Rodaje", title: "La taberna del toro", meta: "Madrid · 1975", image: "img/fotos/rodaje-taberna-toro-1975.jpg", description: "Imagen de rodaje junto a Antonio en una producción televisiva." },
  { category: "Documento", title: "Libro de personajes de Ceuta", meta: "Archivo biográfico", image: "img/libro/libro-01.jpg", description: "Página del libro que recupera y sintetiza su memoria artística." },
];

/**
 Datos sobre archivos de portadas
*/
const coverItems = [
  { type: "Portada de revista", title: "Ballet Today", date: "Londres · 1958", source: "Revista", image: "img/portadas/londres-ballet-today-1958.jpg", summary: "Portada internacional vinculada a su consolidación europea.", text: "Pieza visual emblemática del archivo de Carmen Rojas." },
  { type: "Cartel cinematográfico", title: "Los celos y el duende", date: "Madrid · 1966", source: "Cine", image: "img/portadas/celos-duende-1966.jpg", summary: "Cartel de una de sus películas más representativas.", text: "Aporta valor a la sección cinematográfica y al archivo visual." },
  { type: "Cartel promocional", title: "Abu Dhabi", date: "1983", source: "Sheraton Hotel", image: "img/portadas/abu-dhabi-1983.jpg", summary: "Cartel de su etapa madura en Oriente Medio.", text: "Refleja la proyección internacional sostenida de la artista." },
  { type: "Cartel cinematográfico", title: "Luna de miel", date: "1959", source: "Cine", image: "img/portadas/luna-miel-1959.png", summary: "Cartel de la producción internacional dirigida por Michael Powell.", text: "Confirma su presencia en el cine de proyección internacional." },
  { type: "Cartel cinematográfico", title: "El fantástico mundo del doctor Coppelius", date: "1966", source: "Cine", image: "img/portadas/coppelius-1966.png", summary: "Producción cinematográfica ligada al ballet y la escena.", text: "Pieza clave para la filmografía de Carmen Rojas." }
];

/**
 Datos sobre archivos de infancia
*/
const infancyItems = [
  { category: "Infancia", title: "Primeros años en Ceuta", meta: "Archivo familiar", image: "img/infancia/infancia1.jpg", description: "Imagen de los primeros años de Carmen Rojas en Ceuta." },
  { category: "Infancia", title: "Retrato infantil", meta: "Ceuta", image: "img/infancia/infancia2.jpg", description: "Fotografía temprana de la artista en su infancia." },
  { category: "Infancia", title: "Vocación temprana", meta: "Archivo familiar", image: "img/infancia/infancia3.jpg", description: "Imagen infantil vinculada a sus primeros pasos artísticos." },
  { category: "Infancia", title: "Con catorce años en Madrid", meta: "Formación", image: "img/infancia/infancia4.jpg", description: "Fotografía de juventud durante la etapa de formación en Madrid." }
];

/**
 Datos sobre archivos audiovisuales
*/
const audiovisualItems = [
  { title: "Documento audiovisual", url: "https://youtu.be/_cnVaCyvXAk", videoId: "_cnVaCyvXAk" },
  { title: "Documento audiovisual", url: "https://youtu.be/t7AGZFLwGDc", videoId: "t7AGZFLwGDc" },
  { title: "Documento audiovisual", url: "https://youtu.be/E5sK5vhjmOw", videoId: "E5sK5vhjmOw" },
  { title: "Documento audiovisual", url: "https://youtu.be/Ydk8VgCf2Xg", videoId: "Ydk8VgCf2Xg" },
  { title: "Documento audiovisual", url: "https://youtu.be/cCCa6bbnxoI", videoId: "cCCa6bbnxoI" },
  { title: "Documento audiovisual", url: "https://youtu.be/TMuK9d2xfFY", videoId: "TMuK9d2xfFY" }
];
