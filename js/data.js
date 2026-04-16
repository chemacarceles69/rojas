const archiveItems = [
  {
    type: "Crítica",
    title: "Nueva estrella de la compañía de Antonio",
    date: "23-05-1955",
    city: "París",
    source: "L’Information",
    image: "img/recortes/paris-1955.jpg",
    summary: "Artículo que presenta a Carmen Rojas como joven promesa dentro de la compañía de Antonio.",
    text: "Se subraya su juventud, su paso por Madrid y su rápida consolidación como artista dentro del circuito internacional."
  },
  {
  type: "Portada de revista",
  title: "Ballet Today – Antonio y Carmen Rojas",
  date: "Octubre 1958",
  city: "Londres",
  source: "Ballet Today",
  image: "img/portadas/londres-ballet-today-1958.jpg",
  summary: "Portada de la revista británica Ballet Today con Antonio y Carmen Rojas como figuras principales del ballet español.",
  text: "Publicación internacional que sitúa a Antonio y Carmen Rojas como referentes del ballet español en Europa. La aparición en portada de Ballet Today evidencia su consolidación artística en Londres y su creciente prestigio en la escena internacional."
},
  {
  type: "Documento oficial",
  title: "Carta de agradecimiento de John F. Kennedy",
  date: "1963",
  city: "Washington D.C.",
  source: "The White House",
  image: "img/documentos/kennedy-1963.jpg",
  summary: "Carta oficial del presidente John F. Kennedy agradeciendo la participación de Carmen Rojas en un acto conmemorativo en la Casa Blanca.",
  text: "Documento histórico emitido por la Casa Blanca en el que el presidente John F. Kennedy expresa su agradecimiento a Carmen Rojas por su participación en el Second Inaugural Anniversary Salute. La carta destaca su talento y su contribución a un evento de relevancia internacional, consolidando su proyección como artista global."
},

  {
    type: "Programa",
    title: "Théâtre Le Capitole",
    date: "13-15-01-1956",
    city: "Beirut",
    source: "Cartel oficial",
    image: "img/carteles/beirut-1956.jpg",
    summary: "Programa de la compañía de Antonio con Carmen Rojas entre las figuras destacadas.",
    text: "Documento esencial para situar su primera proyección internacional en Oriente Medio."
  },
  {
    type: "Programa",
    title: "Concerti di Danze Spagnole",
    date: "09-11-03-1956",
    city: "Milán",
    source: "Teatro alla Scala",
    image: "img/carteles/milan-1956.jpg",
    summary: "Programa y cartel de la actuación en la Scala de Milán.",
    text: "Confirma su presencia en uno de los escenarios más prestigiosos del mundo en una etapa muy temprana de su carrera."
  },
  {
  category: "Portada",
  title: "Ballet Today",
  meta: "Londres · 1958",
  image: "img/portadas/londres-ballet-today-1958.jpg",
  description: "Portada de la revista Ballet Today con Antonio y Carmen Rojas en Londres."
},
  {
    type: "Crítica",
    title: "Antonio’s Moment of Truth",
    date: "1960",
    city: "Londres",
    source: "Peter Williams",
    image: "img/recortes/londres-1960.jpg",
    summary: "Crítica que señala el Taranto de Carmen Rojas como uno de los grandes momentos del espectáculo.",
    text: "La presenta como una artista madura, auténtica y guiada por la música y el cante."
  },
  {
    type: "Prensa",
    title: "Gracia y Presencia de España en Nueva York",
    date: "12-10-1968",
    city: "Nueva York",
    source: "El Tiempo",
    image: "img/recortes/newyork-1968.jpg",
    summary: "Recorte sobre la Semana de España en Nueva York.",
    text: "Muy relevante porque ya se menciona el Ballet de Carmen Rojas, señal de liderazgo artístico propio."
  },
  {
    type: "Prensa",
    title: "Carmen Rojas en Radio City Music Hall",
    date: "27-08-1970",
    city: "Nueva York",
    source: "The Star-Ledger",
    image: "img/recortes/newyork-1970.jpg",
    summary: "Participación en el espectáculo España junto a Paco Ruiz.",
    text: "Documento que evidencia su permanencia en grandes escenarios internacionales en plena madurez profesional."
  },
  {
    type: "Prensa",
    title: "Actuación en Bogotá",
    date: "29-01-1971",
    city: "Bogotá",
    source: "El Tiempo",
    image: "img/recortes/bogota-1971.jpg",
    summary: "Recorte sobre Carmen Rojas y Paco Ruiz en Expotur.",
    text: "Se les presenta como auténticos representantes de la danza española y del folclore hispano."
  },
  {
    type: "Prensa",
    title: "Spanish Flamenco Star",
    date: "11-10-1978",
    city: "Castro Urdiales",
    source: "Entertainment",
    image: "img/recortes/castro-1978.jpg",
    summary: "Descripción de Carmen Rojas como estrella flamenca internacional.",
    text: "El recorte destaca su elegancia, dinamismo y capacidad de intensificar el escenario progresivamente."
  },
  {
    type: "Prensa",
    title: "International Casino, Nairobi",
    date: "11-10-1978",
    city: "Nairobi",
    source: "Daily Nation",
    image: "img/recortes/nairobi-1978.jpg",
    summary: "Crónica de espectáculo en Kenia con Carmen Rojas como figura principal.",
    text: "Refuerza la dimensión global de su carrera y su presencia en escenarios africanos."
  },
  {
    type: "Prensa",
    title: "Olè, El Maroco tra Carmen e July",
    date: "17-10-1984",
    city: "Milán",
    source: "Viva Milano",
    image: "img/recortes/milan-1984.jpg",
    summary: "Artículo sobre la etapa veterana de Carmen Rojas.",
    text: "Subraya que su clase y temperamento permanecen intactos con el paso del tiempo."
  }
];

const timelineItems = [
  {
    year: "1935",
    title: "Nacimiento en Ceuta",
    text: "Nace Carmen Cárceles Escarcena, conocida artísticamente como Carmen Rojas."
  },
  
  {
    year: "1949",
    title: "Traslado a Madrid",
    text: "Llega a Madrid con 14 años y comienza su formación en la academia de María de Román."
  },
  {
    year: "1951",
    title: "Inicio de carrera",
    text: "Arranca su trayectoria artística profesional."
  },
  {
    year: "1953",
    title: "Entrada en la compañía de Antonio",
    text: "Debuta como integrante del cuerpo de baile de Antonio “El Bailarín” en el Festival de Granada."
  },
  {
    year: "1955-1956",
    title: "Primer impulso internacional",
    text: "París, Cairo, Beirut y Milán documentan su irrupción en circuitos internacionales."
  },
  {
  year: "1958",
  title: "Reconocimiento en Londres",
  text: "Antonio y Carmen Rojas aparecen en la portada de la revista Ballet Today, consolidando su proyección internacional en Europa.",
  image: "img/portadas/londres-ballet-today-1958.jpg"
},
  {
    year: "1960",
    title: "Madurez artística",
    text: "La crítica londinense la presenta como una artista flamenca plenamente consolidada."
  },
  {
  year: "1963",
  title: "Reconocimiento en la Casa Blanca",
  text: "El presidente John F. Kennedy agradece personalmente a Carmen Rojas su participación en un acto oficial en la Casa Blanca, consolidando su proyección internacional.",
  image: "img/documentos/kennedy-1963.jpg"
},
{
  year: "1966",
  title: "Salto al cine",
  text: "Carmen Rojas participa en la película Los celos y el duende, ampliando su trayectoria artística al ámbito cinematográfico.",
  image: "img/portadas/celos-duende-1966.jpg"
},
  {
    year: "1967",
    title: "Embajadora del baile",
    text: "El Ministerio de Información y Turismo la designa como embajadora del baile."
  },
  {
    year: "1968",
    title: "Reconocimiento internacional",
    text: "Actuaciones y documentos la sitúan en un momento de plena proyección internacional."
  },
  {
  year: "1968",
  title: "Éxito en la Feria Mundial de Texas",
  text: "El ballet de Carmen Rojas triunfa en la Feria Mundial HemisFair de San Antonio (Texas), consolidando su proyección internacional y su reconocimiento institucional."
},
  {
  year: "1983",
  title: "Actuaciones en Abu Dhabi",
  text: "Un cartel promocional fechado el 1 de abril de 1983 sitúa a Carmen Rojas actuando en el Abu Dhabi Sheraton Hotel, reflejo de su proyección internacional en Oriente Medio durante la madurez de su carrera."
},
  {
    year: "2021",
    title: "Recuperación biográfica",
    text: "El libro de personajes de Ceuta recupera y sintetiza su legado artístico y humano."
  }
];

const galleryItems = [
{
  category: "Portada",
  title: "Cartel de Abu Dhabi",
  meta: "Abu Dhabi · 01-04-1983",
  image: "img/portadas/abu-dhabi-1983.jpg",
  description: "Cartel promocional de Carmen Rojas en el Abu Dhabi Sheraton Hotel."
},
{
  category: "Prensa",
  title: "HemisFair 1968",
  meta: "San Antonio (Texas) · 1968",
  image: "img/prensa/san-antonio-texas-1968.jpg",
  description: "Recorte de prensa sobre el éxito del ballet de Carmen Rojas en la Feria Mundial de San Antonio."
},
  {
    category: "Portada",
    title: "Retrato principal",
    meta: "Imagen de portada",
    image: "img/portada.jpg",
    description: "Imagen principal utilizada en la portada del archivo digital."
  },
  {
  category: "Cine",
  title: "Los celos y el duende",
  meta: "Madrid · 1966",
  image: "img/portadas/celos-duende-1966.jpg",
  description: "Cartel original de la película Los celos y el duende con Carmen Rojas."
},
  {
    category: "Libro",
    title: "Biografía en libro de personajes de Ceuta",
    meta: "Documento biográfico",
    image: "img/libro/libro-01.jpg",
    description: "Página con el inicio de la biografía de Carmen Rojas."
  },
  {
  category: "Documento",
  title: "Carta de la Casa Blanca",
  meta: "1963 · John F. Kennedy",
  image: "img/documentos/kennedy-1963.jpg",
  description: "Carta oficial enviada por el presidente John F. Kennedy a Carmen Rojas agradeciendo su participación en un acto en la Casa Blanca."
},
  {
    category: "Libro",
    title: "Etapa junto a Antonio",
    meta: "Documento biográfico",
    image: "img/libro/libro-02.jpg",
    description: "Página centrada en el encuentro con Antonio y el salto profesional."
  },
  {
    category: "Libro",
    title: "Cine y trayectoria",
    meta: "Documento biográfico",
    image: "img/libro/libro-03.jpg",
    description: "Página que recoge su presencia en el cine y otros hitos."
  },
  {
    category: "Libro",
    title: "Premios y legado",
    meta: "Documento biográfico",
    image: "img/libro/libro-04.jpg",
    description: "Página dedicada a reconocimientos, distinciones y memoria."
  },
 
  {
    category: "Libro",
    title: "Casa Blanca y documentos",
    meta: "Documento histórico",
    image: "img/libro/libro-05.jpg",
    description: "Página con referencias al episodio de la Casa Blanca y material conservado."
  },
  {
    category: "Recorte",
    title: "París, 1955",
    meta: "L’Information · 23-05-1955",
    image: "img/recortes/paris-1955.jpg",
    description: "Recorte que presenta a Carmen Rojas como nueva estrella de la compañía de Antonio."
  },
  {
    category: "Recorte",
    title: "Londres, 1960",
    meta: "Crítica internacional",
    image: "img/recortes/londres-1960.jpg",
    description: "Crítica que destaca su madurez artística y su autenticidad escénica."
  },
  {
    category: "Recorte",
    title: "Nueva York, 1968",
    meta: "Semana de España",
    image: "img/recortes/newyork-1968.jpg",
    description: "Documento relativo a la presencia de Carmen Rojas en Nueva York."
  },
  {
    category: "Recorte",
    title: "Nueva York, 1970",
    meta: "Radio City Music Hall",
    image: "img/recortes/newyork-1970.jpg",
    description: "Participación en un gran escenario internacional junto a Paco Ruiz."
  },
  {
    category: "Cartel",
    title: "Beirut, 1956",
    meta: "Théâtre Le Capitole",
    image: "img/carteles/beirut-1956.jpg",
    description: "Cartel oficial de la compañía de Antonio con Carmen Rojas en lugar destacado."
  },
  {
    category: "Cartel",
    title: "Milán, 1956",
    meta: "Teatro alla Scala",
    image: "img/carteles/milan-1956.jpg",
    description: "Programa y cartel de la actuación en la Scala de Milán."
  },
  {
    category: "Foto",
    title: "Fotografía de escena 1",
    meta: "Archivo fotográfico",
    image: "img/fotos/foto1.jpg",
    description: "Fotografía vinculada al archivo visual de Carmen Rojas."
  },
  {
    category: "Foto",
    title: "Fotografía de escena 2",
    meta: "Archivo fotográfico",
    image: "img/fotos/foto2.jpg",
    description: "Segunda imagen del archivo fotográfico."
  }
];

const coverItems = [
  {
    type: "Portada de revista",
    title: "Ballet Today – Antonio y Carmen Rojas",
    date: "Octubre 1958",
    city: "Londres",
    source: "Ballet Today",
    image: "img/portadas/londres-ballet-today-1958.jpg",
    summary: "Portada de la revista británica Ballet Today con Antonio y Carmen Rojas como figuras principales del ballet español.",
    text: "La aparición en portada de Ballet Today sitúa a Antonio y Carmen Rojas como referentes del ballet español en el panorama londinense e internacional de finales de los años cincuenta."
  },
  {
  type: "Cartel cinematográfico",
  title: "Los celos y el duende",
  date: "1966",
  city: "Madrid",
  source: "Producción V. Bernaldo de Quirós",
  image: "img/portadas/celos-duende-1966.jpg",
  summary: "Cartel original de la película Los celos y el duende, protagonizada por Carmen Rojas.",
  text: "Cartel cinematográfico de la película Los celos y el duende (1966), en la que Carmen Rojas participa como actriz. Esta obra refleja su incursión en el cine y amplía su trayectoria artística más allá del flamenco y el escenario, consolidando su imagen como figura versátil en el panorama cultural español."
},
{
  type: "Cartel promocional",
  title: "Carmen Rojas en Abu Dhabi",
  date: "01-04-1983",
  city: "Abu Dhabi",
  source: "Sheraton Hotel / Safeer Supper Club",
  image: "img/portadas/abu-dhabi-1983.jpg",
  summary: "Cartel promocional de Carmen Rojas en Abu Dhabi durante la etapa madura de su carrera internacional.",
  text: "Documento promocional fechado manuscritamente el 1 de abril de 1983 que anuncia a Carmen Rojas en el Safeer Supper Club del Abu Dhabi Sheraton Hotel. La pieza la presenta como una artista flamenca extraordinaria y confirma su presencia en circuitos internacionales de espectáculo en Oriente Medio."
}

];
const pressItems = [
{
  type: "Prensa internacional",
  title: "Éxito del ballet español en Texas",
  date: "1968",
  city: "San Antonio",
  country: "Estados Unidos",
  image: "img/prensa/san-antonio-texas-1968.jpg",
  summary: "Recorte de prensa sobre el éxito del ballet de Carmen Rojas en la Feria Mundial HemisFair 1968.",
  text: "Artículo que documenta la participación del ballet español de Carmen Rojas en la Feria Mundial de San Antonio (Texas) en 1968. La imagen recoge a la artista junto a autoridades locales y responsables del evento, reflejando el reconocimiento institucional alcanzado."
}
];