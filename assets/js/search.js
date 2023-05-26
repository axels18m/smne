const specialists = [
  "Alta especialidad en obesidad",
  "Andrología",
  "Biología reproductiva",
  "Bioquímica",
  "Cirugía",
  "Cirugía general",
  "Diabetólogo",
  "Doctorado en ciencias",
  "Doctorado en Educación",
  "Doctorado en Química clínica",
  "Dra. Biología Moleculas en medicina",
  "Dra. En ciencias biomédicas",
  "Educadora en Diabetes",
  "Endocrinología",
  "Endocrinología pediátrica",
  "Farmacología",
  "Genética humana",
  "Genética Médica",
  "Geriatría",
  "Ginecología Endócrina",
  "Ginecología y obstetricia",
  "Inmunología",
  "Investigación Biomédica en Endocrinología",
  "Investigador en Ciencias Médicas",
  "Lic. en Enfermería",
  "Maestra en Farmacología",
  "Maestría en Nutrición Clínica",
  "Maestría en Salud Pública",
  "Medicina en C",
  "Medicina General",
  "Medicina Integrada del Adulto",
  "Medicina Interna",
  "Nutrición",
  "Nutriólogo clínico",
  "Obesidad",
  "Oftalmología",
  "Otros",
  "Patólogo",
  "Psicología",
  "Psicología Clínica",
  "Psiquiatría",
  "QFC",
  "Química, Doctora en Ciencias",
  "Radiología e Imagen",
];

const states = [
  "Aguascalientes",
  "Baja California",
  "Baja California Sur",
  "Bolivia",
  "Campeche",
  "Canada",
  "CD - MX",
  "Chiapas",
  "Chihuahua",
  "Coahuila de Zaragoza",
  "Colima",
  "Colombia",
  "Durango",
  "Ecuador",
  "El Salvador",
  "Estado de México",
  "Guanajuato",
  "Guatemala",
  "Guerrero",
  "Hidalgo",
  "Honduras",
  "Jalisco",
  "Lima, Perú",
  "Michoacán de Ocampo",
  "Morelos",
  "Nayarit",
  "Nuevo León",
  "Oaxaca",
  "Panamá",
  "Portugal",
  "Puebla",
  "Querétaro",
  "Quintana Roo",
  "República Dominicana",
  "San Luis Potosí",
  "Sinaloa",
  "Sonora",
  "Tabasco",
  "Tamaulipas",
  "Texas",
  "Tlaxcala",
  "USA",
  "Venezuela",
  "Veracruz de Ignacio de la Llave",
  "Yucatán",
  "Zacatecas",
];

var doctors = [
  {
    "id": 10,
    "hasDetails": true,
    "mainTopics": [
      {
        "topic": "Biología de la repoducción",
        "moderator": "Ana Eugenia Teniente Sánchez"
      },
      {
        "topic": "Taller de actualización en Obesidad",
        "moderator": "Dr. Edmundo Ávila Hipólito"
      }
    ],
    "firstName": "Gabriela",
    "lastName": "Morales González",
    "displayName": "Gabriela Morales González",
    "gender": "Female",
    "email": "gmoralesgo@gmail.com",
    "profileImg": "assets/img/doctors/9.png",
    "phone": "8188880643",
    "speciality": "Endocrinología",
    "congress": [
      {
        "topic": "Análogos de GLP1 en SOP",
        "from": "13:00",
        "to": "13:20",
        "duration": "20 min"
      },
      {
        "topic": "Abordaje etiológico de la obesidad, claves para definir el tratamiento ideal  para mi paciente.",
        "from": "",
        "to": "",
        "duration": ""
      }
    ],
    "address": {
      "completeAddress": "Hospital Zambrano Helion, Batallon de San Patricio #112",
      "suburb": "Real de San Agustín",
      "state": "Nuevo León",
      "town": "San Pedro Garza García",
      "zipcode": "66278"
    },
    "specialities": [],
    "socialMedia": {}
  },
  {
    "id": 18,
    "hasDetails": true,
    "mainTopics": [
      {
        "topic": "Taller de actualización: Síndrome de Ovario Poliquístico",
        "moderator": "Dr. Marco António Guerra Torres"
      },
      {
        "topic": "Obesidad",
        "moderator": "Dra. Gabriela Morales González."
      }
    ],
    "firstName": "José Armando",
    "lastName": "Quintanilla Siller",
    "displayName": "José Armando Quintanilla Siller",
    "gender": "Male",
    "email": "armandoqsiller@hotmail.com",
    "profileImg": "assets/img/doctors/10.png",
    "phone": "8134439300",
    "speciality": "Endocrinología",
    "congress": [
      {
        "topic": "Aspectos para el diagnóstico de Síndrome de Ovario Poliquístico",
        "from": "16:00",
        "to": "16:40",
        "duration": "40 min"
      },
      {
        "topic": "Microbiota y Obesidad.",
        "from": "14:05",
        "to": "14:25",
        "duration": "20 min"
      }
    ],
    "address": {
      "completeAddress": "De La Clinica #2520",
      "suburb": "Sertoma",
      "state": "Nuevo León",
      "town": "Monterrey",
      "zipcode": "64710"
    },
    "specialities": [
      "Obesidad",
      "Diabetología",
      "Patologías de la Tiroides",
      "Obesidad",
      "Osteoporosis",
      "Metabolismo Mineral",
      "Paratiroides",
      "Nutrición"
    ],
    "socialMedia": {
      "doctoralia": "https://www.doctoralia.com.mx/jose-armando-quintanilla-siller/endocrinologo-internista/nuevo-leon"
    }
  },
  {
    "id": 19,
    "hasDetails": true,
    "mainTopics": [
      {
        "topic": "Taller de actualización: Síndrome de Ovario Poliquístico",
        "moderator": "Dr. Marco António Guerra Torres"
      },
      {
        "topic": "Tópicos diversos en Endocrinología",
        "moderator": "Dra. María Cristina Quintanilla García."
      },
      {
        "topic": "Tópicos diversos en Endocrinología",
        "moderator": "Dra. María Cristina Quintanilla García."
      }
    ],
    "firstName": "Marco Antonio",
    "lastName": "Guerra Torres",
    "displayName": "Marco Antonio Guerra Torres",
    "gender": "Male",
    "email": "marcogueto@outlook.com",
    "profileImg": "assets/img/doctors/4.png",
    "phone": "8134032096",
    "speciality": "Endocrinología",
    "congress": [
      {
        "topic": "Resistencia a la insulina, marcadores sensibles en el Síndrome de Ovario poliquístico",
        "from": "16:40",
        "to": "17:20",
        "duration": "40 min"
      },
      {
        "topic": "Ritmo Circadiano y Endocrinopatías.",
        "from": "12:00",
        "to": "12:20",
        "duration": "20 min"
      },
      {
        "topic": "Atención primaria del paciente transgénero.",
        "from": "12:20",
        "to": "12:40",
        "duration": "20 min"
      }
    ],
    "address": {
      "completeAddress": "Aspen Medical Center, Corpus 2320 1er piso",
      "suburb": "Lomas de San Francisco",
      "state": "Nuevo León",
      "town": "Monterrey",
      "zipcode": "64718"
    },
    "specialities": [
      "Diabetes",
      "Obesidad",
      "Diabetes tipo 1",
      "Enfermedades de la tiroides",
      "Dislipidemia",
      "Hipertiroidismo",
      "Síndrome metabólico",
      "Hipotiroidismo en adultos",
      "Transtornos de las suprarrenales",
      "Tumor hipofisario",
      "Hipercortisolismo",
      "Osteoporosis",
      "Hipogonadismo primario en hombres",
      "Adenoma hipofisario secretor de prolactina",
      "Prolactinoma",
      "Diabetes tipo 2",
      "Diabetes gestacional",
      "Trastornos metabólicos y hormonales",
      "Sobrepeso",
      "Terapia hormonal a personas transgenero"
    ],
    "socialMedia": {
      "doctoralia": "https://www.doctoralia.com.mx/marco-antonio-guerra-torres-2/endocrinologo-internista/ciudad-acuna"
    }
  },
  {
    "id": 20,
    "hasDetails": true,
    "mainTopics": [
      {
        "topic": "Taller de actualización: Síndrome de Ovario Poliquístico",
        "moderator": "Dr. Marco António Guerra Torres"
      }
    ],
    "firstName": "Ana Eugenia",
    "lastName": "Teniente Sánchez",
    "displayName": "Ana Eugenia Teniente Sánchez",
    "gender": "Female",
    "email": null,
    "profileImg": "assets/img/doctors/1.png",
    "phone": "8111268535",
    "speciality": "Endocrinología",
    "congress": [
      {
        "topic": "Manejo del hiperandrogenismo en el Síndrome de Ovario Poliquístico",
        "from": "17:30",
        "to": "18:10",
        "duration": "40 min"
      }
    ],
    "address": {
      "completeAddress": "Aspen Medical Center, Corpus 2320 1er piso",
      "suburb": "Lomas de San Francisco",
      "state": "Nuevo León",
      "town": "Monterrey",
      "zipcode": "64718"
    },
    "specialities": [
      "Diabetología",
      "Patologías de la Tiroides",
      "Obesidad",
      "Riesgo Vascular",
      "Metabolismo Mineral",
      "Diabetes",
      "Hipertensión"
    ],
    "socialMedia": {
      "doctoralia": "https://www.doctoralia.com.mx/ana-eugenia-teniente-sanchez/endocrinologo-internista/nuevo-leon"
    }
  },
  {
    "id": 21,
    "hasDetails": true,
    "mainTopics": [
      {
        "topic": "Taller de actualización: Síndrome de Ovario Poliquístico",
        "moderator": "Dr. Marco António Guerra Torres"
      }
    ],
    "firstName": "Estefanía",
    "lastName": "Esparza Corona",
    "displayName": "Estefanía Esparza Corona",
    "gender": "Female",
    "email": "fany.esparza91@gmail.com",
    "profileImg": "assets/img/doctors/5.png",
    "phone": "8134439300",
    "speciality": "Nutrióloga",
    "congress": [
      {
        "topic": "Nutrición y suplementación en el Síndrome de Ovario Poliquístico",
        "from": "18:10",
        "to": "18:50",
        "duration": "40 min"
      }
    ],
    "address": {
      "completeAddress": "Patzcuaro 134-100",
      "suburb": "Las Encinas",
      "state": "Nuevo León",
      "town": "General Escobedo",
      "zipcode": "66050"
    },
    "specialities": [
      "Educación en Diabetes",
      "Nutrición en Enfermedad Renal",
      "Obesidad",
      "Enfermedades Gastrointestinales"
    ],
    "socialMedia": {
      "doctoralia": "https://www.doctoralia.com.mx/estefania-de-fatima-esparza-corona/nutriologo-clinico/nuevo-leon"
    }
  },
  {
    "id": 22,
    "hasDetails": true,
    "mainTopics": [
      {
        "topic": "Taller de actualización en Diabetes",
        "moderator": "Dra. Leonor Mireles Zavala"
      },
      {
        "topic": "Obesidad",
        "moderator": "Dra. Gabriela Morales González."
      }
    ],
    "firstName": "Elizabeth",
    "lastName": "Olavide Aguilar",
    "displayName": "Elizabeth Olavide Aguilar",
    "gender": "Female",
    "email": "dra.olavide@gmail.com",
    "profileImg": "assets/img/doctors/3.png",
    "phone": "8261236530",
    "speciality": "Endocrinología",
    "congress": [
      {
        "topic": "Calculando y decidiendo tratamiento conforme el Riesgo Cardiovascular en mi pacientes con Diabetes tipo 2:Casos clínicos",
        "from": "16:00",
        "to": "16:30",
        "duration": "30 min"
      },
      {
        "topic": "Microbiota y Obesidad.",
        "from": "14:25",
        "to": "14:45",
        "duration": "20 min"
      }
    ],
    "address": {
      "completeAddress": "Miguel Hidalgo y Costilla 2425",
      "suburb": "Obispado",
      "state": "Nuevo León",
      "town": "Monterrey",
      "zipcode": "64040"
    },
    "specialities": [
      "Diabetes",
      "Cáncer de tiroides",
      "Osteoporosis",
      "Nódulo tiroideo",
      "Enfermedades de la tiroides",
      "Obesidad",
      "Prolactinoma",
      "Enfermedad de Cushing",
      "Hipertiroidismo",
      "Hipercalciemia relacionada con las paratiroides",
      "Enfermedad de Addison",
      "Hipotiroidismo en adultos"
    ],
    "socialMedia": {
      "doctoralia": "https://www.doctoralia.com.mx/elizabeth-olavide-aguilar/endocrinologo-internista/monterrey"
    }
  },
  {
    "id": 1,
    "hasDetails": true,
    "mainTopics": [
      {
        "topic": "Metabolismo Mineral",
        "moderator": "Marco António Román Montalvo"
      }
    ],
    "firstName": "Lizet Dania",
    "lastName": "Quintanilla Flores",
    "displayName": "Lizet Dania Quintanilla Flores",
    "gender": "Female",
    "email": "dra.quintanilla.endo@gmail.com",
    "profileImg": "assets/img/doctors/7.png",
    "phone": "8132641625",
    "speciality": "Endocrinología",
    "congress": [
      {
        "topic": "Impacto de la Diabetes en el hueso",
        "from": "9:10 am",
        "to": "9:35 am",
        "duration": "25 min"
      }
    ],
    "address": {
      "completeAddress": "Miguel Hidalgo 2532 (Esquina Calle Muguerza ), Monterrey",
      "suburb": "Obispado",
      "state": "Nuevo León",
      "town": "Monterrey",
      "zipcode": "64060"
    },
    "specialities": [
      "Metabolismo Mineral Óseo",
      "Diabetología",
      "Patologías de la Tiroides",
      "Obesidad",
      "Obesidad",
      "Osteoporosis",
      "Diabetes",
      "Nutrición"
    ],
    "socialMedia": {
      "facebook": "https://www.facebook.com/profile.php?id=100063641529000",
      "website": "https://www.doctoralia.com.mx/dania-lizet-quintanilla-flores/endocrinologo-internista/nuevo-leon?fbclid=IwAR0rst9m20pqxgbyQirDWteO0daJJsWZ-KYb-v0LZsrJFCw8kCSxk7rnnJI"
    }
  },
  {
    "id": 2,
    "hasDetails": true,
    "mainTopics": [
      {
        "topic": "Metabolismo Mineral",
        "moderator": "Marco António Román Montalvo"
      }
    ],
    "firstName": "Arnulfo",
    "lastName": "González Cántu",
    "displayName": "Arnulfo González Cántu",
    "gender": "Male",
    "email": "drgzzcantu@gmail.com",
    "profileImg": "assets/img/logos/logo.svg",
    "phone": "8131560079",
    "speciality": "Endocrinología",
    "congress": [
      {
        "topic": "Osteopenia. ¿Tratar o no tratar?",
        "from": "9:35 am",
        "to": "9:55 am",
        "duration": "20 min"
      }
    ],
    "address": {
      "completeAddress": "Avenida Nexxus 104 Parque industria Nexxus Planta Baja,",
      "suburb": "Miravalle",
      "state": "Nuevo León",
      "town": "Monterrey",
      "zipcode": "64718"
    },
    "specialities": [
      "Metabolismo Mineral Óseo",
      "Obesidad",
      "Patologías de la Tiroides"
    ],
    "socialMedia": {
      "linkedin": "https://www.linkedin.com/in/arnulfo-gonz%C3%A1lez-cant%C3%BA-611a8863/?originalSubdomain=mx"
    }
  },
  {
    "id": 3,
    "hasDetails": true,
    "mainTopics": [
      {
        "topic": "Metabolismo Mineral",
        "moderator": "Marco António Román Montalvo"
      }
    ],
    "firstName": "Anabel",
    "lastName": "Rodríguez Romo",
    "displayName": "Anabel Rodríguez Romo",
    "gender": "Female",
    "email": "anabelmty@yahoo.com",
    "profileImg": "assets/img/logos/logo.svg",
    "phone": null,
    "speciality": "Medicina Interna",
    "congress": [
      {
        "topic": "Densitometría, TBS y VFA",
        "from": "9:55 am",
        "to": "10:15 am",
        "duration": "20 min"
      }
    ],
    "address": {
      "completeAddress": null,
      "suburb": null,
      "state": "CDMX",
      "town": null,
      "zipcode": null
    },
    "specialities": [],
    "socialMedia": {
      "linkedin": "https://www.linkedin.com/in/anabel-rodr%C3%ADguez-romo-167aaa63/?originalSubdomain=mx"
    }
  },
  {
    "id": 4,
    "hasDetails": true,
    "mainTopics": [
      {
        "topic": "Metabolismo Mineral",
        "moderator": "Marco António Román Montalvo"
      }
    ],
    "firstName": "Laura Gabriela",
    "lastName": "Gómez Herrera",
    "displayName": "Laura Gabriela Gómez Herrera",
    "gender": "Female",
    "email": "lauraggomezh@gmail.com",
    "profileImg": "assets/img/logos/logo.svg",
    "phone": "844 4391287, 844 36171352",
    "speciality": "Endocrinología",
    "congress": [
      {
        "topic": "Terapia secuencial en osteoporosis",
        "from": "10:15 am",
        "to": "10:35 am",
        "duration": "20 min"
      }
    ],
    "address": {
      "completeAddress": " Blvd. Venustiano Carranza 4036",
      "suburb": "Virreyes Residencial",
      "state": "CDMX",
      "town": "Saltillo",
      "zipcode": "25230"
    },
    "specialities": [
      "Diabetes tipo 2",
      "Hipertiroidismo",
      "Diabetes tipo 1"
    ],
    "socialMedia": {
      "linkedin": "https://www.linkedin.com/in/anabel-rodr%C3%ADguez-romo-167aaa63/?originalSubdomain=mx"
    }
  },
  {
    "id": 5,
    "hasDetails": true,
    "mainTopics": [
      {
        "topic": "Tiroides",
        "moderator": "Karla Rodríguez Velver"
      }
    ],
    "firstName": "Edmundo",
    "lastName": "Avila Hipólito",
    "displayName": "Edmundo Avila Hipólito",
    "gender": "Male",
    "email": "edmundo.avila2@hotmail.com",
    "profileImg": "assets/img/logos/logo.svg",
    "phone": "8661573514",
    "speciality": "Endocrinología",
    "congress": [
      {
        "topic": "Alteraciones tiroideas en el embarazo",
        "from": "10:45 am",
        "to": "11:05 am",
        "duration": "20 min"
      }
    ],
    "address": {
      "completeAddress": " Blvd. Tecnologico 1200 2do piso.",
      "suburb": "Tecnologico",
      "state": "Coahuila Zaragoza",
      "town": "Monclova",
      "zipcode": "25716"
    },
    "specialities": [
      "Diabetes tipo 2",
      "Hipertiroidismo",
      "Diabetes tipo 1"
    ],
    "socialMedia": {}
  },
  {
    "id": 6,
    "hasDetails": true,
    "mainTopics": [
      {
        "topic": "Tiroides",
        "moderator": "Karla Rodríguez Velver"
      }
    ],
    "firstName": "Juan José",
    "lastName": "Medina Jasso",
    "displayName": "Juan José Medina Jasso",
    "gender": "Male",
    "email": "drjuanmeja@gmail.com",
    "profileImg": "assets/img/logos/logo.svg",
    "phone": "8116317359",
    "speciality": "Endocrinología",
    "congress": [
      {
        "topic": "Abordaje del nódulo tiroideo",
        "from": "11:05 am",
        "to": "11:30 am",
        "duration": "20 min"
      }
    ],
    "address": {
      "completeAddress": "Dr. Cantu #300",
      "suburb": "Los Doctores",
      "state": "Nuevo León",
      "town": "Monterrey",
      "zipcode": "64710"
    },
    "specialities": [
      "Diabetología",
      "Patologías de la Tiroides",
      "Gónadas y Reproducción",
      "Bariatría",
      "Enfermedades Metabólicas",
      "Paratiroides"
    ],
    "socialMedia": {
      "linkedin": "https://www.linkedin.com/in/juan-jos%C3%A9-medina-jasso-315426112/?originalSubdomain=mx"
    }
  },
  {
    "id": 7,
    "hasDetails": true,
    "mainTopics": [
      {
        "topic": "Tiroides",
        "moderator": "Karla Rodríguez Velver"
      },
      {
        "topic": "Taller de actualización en Diabetes",
        "moderator": "Dra. Leonor Mireles Zavala"
      }
    ],
    "firstName": "Leonor Guadalupe",
    "lastName": "Mireles Zavala",
    "displayName": "Leonor Guadalupe Mireles Zavala",
    "gender": "Female",
    "email": null,
    "profileImg": "assets/img/doctors/2.png",
    "phone": "8114770428",
    "speciality": "Endocrinología",
    "congress": [
      {
        "topic": "Encefalopatía de Hashimoto",
        "from": "11:30 am",
        "to": "11:50 am",
        "duration": "20 min"
      },
      {
        "topic": "Diabetes y cambios al estilo de vida: revisión y aplicación de las nuevas guías.",
        "from": "17:30",
        "to": "18:00",
        "duration": "30 min"
      }
    ],
    "address": {
      "completeAddress": "Ecuador #2331",
      "suburb": "Balcones de galerias",
      "state": "Nuevo León",
      "town": "Monterrey",
      "zipcode": "64620"
    },
    "specialities": [
      "Diabetología",
      "Patologías de la Tiroides",
      "Gónadas y Reproducción",
      "Bariatría",
      "Enfermedades Metabólicas",
      "Paratiroides"
    ],
    "socialMedia": {
      "doctoralia": "https://www.doctoralia.com.mx/leonor-g-mireles-zavala/endocrinologo-internista/monterrey"
    }
  },
  {
    "id": 8,
    "hasDetails": true,
    "mainTopics": [
      {
        "topic": "Tiroides",
        "moderator": "Karla Rodríguez Velver"
      }
    ],
    "firstName": "David",
    "lastName": "Sanchez García",
    "displayName": "David Sanchez García",
    "gender": "Male",
    "email": null,
    "profileImg": "assets/img/logos/logo.svg",
    "phone": "8183687842",
    "speciality": "Endocrinología",
    "congress": [
      {
        "topic": "Oftalmopatía tiroidea",
        "from": "11:50 am",
        "to": "12:10 pm",
        "duration": "20 min"
      }
    ],
    "address": {
      "completeAddress": "Hospital Ángeles",
      "suburb": "Valle Oriente",
      "state": "Nuevo León",
      "town": "San Pedro Garza García",
      "zipcode": "66260"
    },
    "specialities": [
      "Menopausia",
      "Obesidad",
      "Panhipopituitarismo",
      "Tumor hipofisario",
      "Diabetes",
      "Transtornos de las suprarrenales",
      "Tumor suprarrenal",
      "Cáncer de tiroides",
      "Diabetes gestacional",
      "Nódulo tiroideo",
      "Hiperlipidemia",
      "Osteoporosis"
    ],
    "socialMedia": {
      "doctoralia": "https://www.doctoralia.com.mx/david-sanchez-garcia/endocrinologo/monterrey"
    }
  },
  {
    "id": 9,
    "hasDetails": true,
    "mainTopics": [
      {
        "topic": "Biología de la repoducción",
        "moderator": "Ana Eugenia Teniente Sánchez"
      }
    ],
    "firstName": "Marco Antonio",
    "lastName": "Román Montalvo",
    "displayName": "Marco Antonio Román Montalvo",
    "gender": "Male",
    "email": null,
    "profileImg": "assets/img/logos/logo.svg",
    "phone": "8123502794",
    "speciality": "Endocrinología",
    "congress": [
      {
        "topic": "Alopecia Androgenética y Acné Hormonal",
        "from": "12:40 pm",
        "to": "13:00",
        "duration": "20 min"
      }
    ],
    "address": {
      "completeAddress": "Dr. Francisco Guajardo #155 piso 10-G",
      "suburb": "Los Doctores",
      "state": "Nuevo León",
      "town": "Monterrey",
      "zipcode": "64710"
    },
    "specialities": [
      "Diabetes",
      "Obesidad",
      "Enfermedades de la tiroides",
      "Hipotiroidismo",
      "Osteoporosis",
      "Cáncer de tiroides",
      "Hipertiroidismo",
      "Bocio",
      "Nódulo tiroideo",
      "Diabetes tipo 1"
    ],
    "socialMedia": {
      "instagram": "https://www.instagram.com/tuendocrinologo/?hl=es",
      "doctoralia": "https://www.doctoralia.com.mx/marco-antonio-roman-montalvo/endocrinologo-internista/nuevo-leon"
    }
  },

  {
    "id": 11,
    "hasDetails": true,
    "mainTopics": [
      {
        "topic": "Biología de la repoducción",
        "moderator": "Ana Eugenia Teniente Sánchez"
      }
    ],
    "firstName": "Celina",
    "lastName": "Salas Castro",
    "displayName": "Celina Salas Castro",
    "gender": "Female",
    "email": null,
    "profileImg": "assets/img/logos/logo.svg",
    "phone": null,
    "speciality": "Ginecóloga",
    "congress": [
      {
        "topic": "Trastornos del deseo sexual hipoactívo",
        "from": "13:20",
        "to": "13:40",
        "duration": "20 min"
      }
    ],
    "address": {
      "completeAddress": "Av. Batallon de San Patricio 112",
      "suburb": "Corporativo Prodesa",
      "state": "Nuevo León",
      "town": "San Pedro Garza García",
      "zipcode": "66278"
    },
    "specialities": [
      "Biología de la Reproducción Humana"
    ],
    "socialMedia": {
      "doctoralia": "https://www.doctoralia.com.mx/celina-salas-castro/ginecologo/san-pedro-garza-garcia"
    }
  },
  {
    "id": 12,
    "hasDetails": true,
    "mainTopics": [
      {
        "topic": "Biología de la repoducción",
        "moderator": "Ana Eugenia Teniente Sánchez"
      }
    ],
    "firstName": "Anally",
    "lastName": "Soto García",
    "displayName": "Anally Soto García",
    "gender": "Female",
    "email": "jamilesoga@hotmail.com",
    "profileImg": "assets/img/logos/logo.svg",
    "phone": "8124520031",
    "speciality": "Endocrinología",
    "congress": [
      {
        "topic": "Evaluación endócrina en el hombre con infertilidad",
        "from": "13:40",
        "to": "14:00",
        "duration": "20 min"
      }
    ],
    "address": {
      "completeAddress": "Hidalgo #2425 - 500",
      "suburb": "Obispado",
      "state": "Nuevo León",
      "town": "Monterrey",
      "zipcode": "64060"
    },
    "specialities": [
      "Biología de la Reproducción Humana"
    ],
    "socialMedia": {
      "doctoralia": "https://www.doctoralia.com.mx/celina-salas-castro/ginecologo/san-pedro-garza-garcia"
    }
  },
  {
    "id": 13,
    "hasDetails": true,
    "mainTopics": [
      {
        "topic": "Taller de actualización sobre hígado graso",
        "moderator": null
      }
    ],
    "firstName": "Alexandro",
    "lastName": "Atilano Díaz",
    "displayName": "Alexandro Atilano Díaz",
    "gender": "Male",
    "email": null,
    "profileImg": "assets/img/logos/logo.svg",
    "phone": null,
    "speciality": "Gastroenterólogo",
    "congress": [
      {
        "topic": "Fisiopatología de NAFLD: Mecanismos moleculares, patogénesis e historia natural de NAFLD",
        "from": "16:00",
        "to": "16:30",
        "duration": "30 min"
      }
    ],
    "address": {
      "completeAddress": "Av. Ignacio Morones Prieto 3000 Pte",
      "suburb": "Col. Los Doctores",
      "state": "Nuevo León",
      "town": "Monterrey",
      "zipcode": "64060"
    },
    "specialities": [
      "Colon irritable",
      "Cirrosis",
      "Reflujo gastroesofágico",
      "Gastritis por Helicobacter pylori",
      "Colitits ulcerativa",
      "Enfermedad de Crohn",
      "Hepatitis autoinmunitaria",
      "Hepatitis C"
    ],
    "socialMedia": {
      "doctoralia": "https://www.doctoralia.com.mx/maria-cristina-quintanilla-garcia/endocrinologo-internista/-https://www.doctoralia.com.mx/alexandro-atilano-diaz/gastroenterologo-endoscopista-internista/san-pedro-garza-garcia"
    }
  },
  {
    "id": 14,
    "hasDetails": true,
    "mainTopics": [
      {
        "topic": "Taller de actualización sobre hígado graso",
        "moderator": "Dra. Dania Quintanilla Flores"
      }
    ],
    "firstName": "María Cristina",
    "lastName": "Quintanila García",
    "displayName": "María Cristina Quintanila García",
    "gender": "Female",
    "email": null,
    "profileImg": "assets/img/logos/logo.svg",
    "phone": null,
    "speciality": "Endocrinología",
    "congress": [
      {
        "topic": "Relación entre NAFLD y enfermedades endócrinas: Diabetes mellitus, dislipidemia, enfermedad tiroidea, síndrome de ovario poliquístico y obesidad",
        "from": "16:30",
        "to": "17:00",
        "duration": "30 min"
      }
    ],
    "address": {
      "completeAddress": "Av. Diego Rivera 2492",
      "suburb": "Valle Oriente",
      "state": "Nuevo León",
      "town": "San Pedro Garza García",
      "zipcode": "66200"
    },
    "specialities": [
      "Menopausia",
      "Enfermedades de la tiroides",
      "Diabetes",
      "Hipercolesterolemia"
    ],
    "socialMedia": {
      "doctoralia": "https://www.doctoralia.com.mx/maria-cristina-quintanilla-garcia/endocrinologo-internista/-"
    }
  },
  {
    "id": 15,
    "hasDetails": true,
    "mainTopics": [
      {
        "topic": "Taller de actualización sobre hígado graso",
        "moderator": "Dra. Dania Quintanilla Flores"
      }
    ],
    "firstName": "Omar David",
    "lastName": "Borjas Almaguer",
    "displayName": "Omar David Borjas Almaguer",
    "gender": "Male",
    "email": null,
    "profileImg": "assets/img/logos/logo.svg",
    "phone": null,
    "speciality": "Gastroenterologo",
    "congress": [
      {
        "topic": "Detección temprana, diagnóstico diferencial y herramientas no invasivas",
        "from": "17:00",
        "to": "17:30",
        "duration": "30 min"
      }
    ],
    "address": {
      "completeAddress": "Dr. Fernando Guajardo 155",
      "suburb": "Los Doctores",
      "state": "Nuevo León",
      "town": "Monterrey",
      "zipcode": "64710"
    },
    "specialities": [
      "Endoscopia Digestiva",
      "Ecografía Digestiva",
      "Endoscopia oncológica",
      "Gastroenterología",
      "Diabetes",
      "Hipertensión",
      "Gastroenterología",
      "Endoscopia Digestiva",
      "Endoscopias",
      "Enfermedad Inflamatoria Intestinal",
      "Hepatología",
      "Ultrasonido endoscópico"
    ],
    "socialMedia": {
      "doctoralia": "https://www.doctoralia.com.mx/omar-david-borjas-almaguer/gastroenterologo-internista-endoscopista/nuevo-leon"
    }
  },
  {
    "id": 16,
    "hasDetails": true,
    "mainTopics": [
      {
        "topic": "Taller de actualización sobre hígado graso",
        "moderator": "Dra. Dania Quintanilla Flores"
      }
    ],
    "firstName": "Francisco Javier",
    "lastName": "González Moreno",
    "displayName": "Francisco Javier González Moreno",
    "gender": "Male",
    "email": null,
    "profileImg": "assets/img/logos/logo.svg",
    "phone": null,
    "speciality": "Endocrinología",
    "congress": [
      {
        "topic": "Tratamiento de NAFLD: Impacto de cambios en estilo de vida y revisión de la evidencia e indicaciones de vitamina E, TZD, iSGLT2, GLP1a y metformina",
        "from": "17:45",
        "to": "18:15",
        "duration": "30 min"
      }
    ],
    "address": {
      "completeAddress": "Topo Chico #168",
      "suburb": "Anahuac",
      "state": "Nuevo León",
      "town": "San Nicolas de los Garza",
      "zipcode": "66450"
    },
    "specialities": [],
    "socialMedia": {}
  },
  {
    "id": 17,
    "hasDetails": true,
    "mainTopics": [
      {
        "topic": "Taller de actualización sobre hígado graso",
        "moderator": "Dra Dania Quintanilla Flores"
      }
    ],
    "firstName": "Carolina",
    "lastName": "Castillo Castro",
    "displayName": "Carolina Castillo Castro",
    "gender": "Female",
    "email": "carocastilloo@gmail.com",
    "profileImg": "assets/img/logos/logo.svg",
    "phone": "8188880652",
    "speciality": "Endocrinología",
    "congress": [
      {
        "topic": "Beneficios, indicaciones y contraindicaciones de la cirugía bariátrica",
        "from": "18:15",
        "to": "18:45",
        "duration": "30 min"
      }
    ],
    "address": {
      "completeAddress": "Loma Grande 2717",
      "suburb": "Lomas de San Francisco",
      "state": "Nuevo León",
      "town": "Monterrey",
      "zipcode": "64710"
    },
    "specialities": [
      "Metabolismo Mineral Óseo",
      "Obesidad",
      "Diabetología",
      "Patologías de la Tiroides"
    ],
    "socialMedia": {
      "doctoralia": "https://www.doctoralia.com.mx/carolina-castillo-castro/endocrinologo-internista/nuevo-leon"
    }
  },
  {
    "id": 23,
    "hasDetails": true,
    "mainTopics": [
      {
        "topic": "Taller de actualización en Diabetes",
        "moderator": "Dra. Leonor Mireles Zavala"
      },
      {
        "topic": "Tópicos diversos en Endocrinología",
        "moderator": "Dra. María Cristina Quintanilla García."
      }
    ],
    "firstName": "Paola",
    "lastName": "Portillo Sánchez",
    "displayName": "Paola Portillo Sánchez",
    "gender": "Female",
    "email": "drapaolaportillo@gmail.com",
    "profileImg": "assets/img/logos/logo.svg",
    "phone": null,
    "speciality": "Endocrinología",
    "congress": [
      {
        "topic": "Diabetes y Obesidad: abordaje e importancia del manejo aplicado a casos clínicos.",
        "from": "16:45",
        "to": "17:15",
        "duration": "30 min"
      },
      {
        "topic": "Novedades terapéuticas en Hígado graso.",
        "from": "11:40 am",
        "to": "12:00",
        "duration": "20 min"
      }
    ],
    "address": {
      "completeAddress": "Av. Ignacio Morones Prieto 3000-Consultorio",
      "suburb": "Los Doctores",
      "state": "Nuevo León",
      "town": "Monterrey",
      "zipcode": "64170"
    },
    "specialities": [],
    "socialMedia": {
      "doctoralia": "https://www.doctoralia.com.mx/paola-portillo-sanchez/internista/monterrey"
    }
  },
  {
    "id": 24,
    "hasDetails": true,
    "mainTopics": [
      {
        "topic": "Taller de actualización en Diabetes",
        "moderator": "Dra. Leonor Mireles Zavala"
      }
    ],
    "firstName": "Juan Carlos",
    "lastName": "Garnica Cuellar",
    "displayName": "Juan Carlos Garnica Cuellar",
    "gender": "Male",
    "email": null,
    "profileImg": "assets/img/logos/logo.svg",
    "phone": "55 5548 9483",
    "speciality": "Endocrinología",
    "congress": [
      {
        "topic": "Evaluación y tratamiento del riesgo residual de la enfermedad renal crónica en el paciente con Diabetes tipo 2. Casos clínicos.",
        "from": "18:15",
        "to": "18:45",
        "duration": "30 min"
      }
    ],
    "address": {
      "completeAddress": "Torre Mitikah, Xoco, Benito Juárez",
      "suburb": "Ciudad de México",
      "state": "Ciudad de México",
      "town": "CDMX",
      "zipcode": "03330"
    },
    "specialities": [
      "Gónadas y Reproducción",
      "Obesidad",
      "Diabetología",
      "Biología de la Reproducción Humana"
    ],
    "socialMedia": {
      "doctoralia": "https://www.doctoralia.com.mx/juan-carlos-garnica-cuellar/endocrinologo/gustavo-a-madero"
    }
  },
  {
    "id": 25,
    "hasDetails": true,
    "mainTopics": [
      {
        "topic": "Taller de actualización en Obesidad",
        "moderator": "Dr. Edmundo Ávila Hipólito"
      },
      {
        "topic": "Obesidad",
        "moderator": "Dra. Gabriela Morales González."
      }
    ],
    "firstName": "Claudia Analy",
    "lastName": "Vélez Viveros",
    "displayName": "Claudia Analy Vélez Viveros",
    "gender": "Female",
    "email": "dra_analyvelez@hotmail.com",
    "profileImg": "assets/img/logos/logo.svg",
    "phone": "8672238805",
    "speciality": "Endocrinología",
    "congress": [
      {
        "topic": "Salud mental en el paciente con obesidad, puntos clave en la evaluación.",
        "from": "",
        "to": "",
        "duration": ""
      },
      {
        "topic": "Psicofármacos en Obesidad.",
        "from": "15:05",
        "to": "15:25",
        "duration": "20 min"
      }
    ],
    "address": {
      "completeAddress": "Oaxaca 3508",
      "suburb": "Col. Jardín",
      "state": "Nuevo Laredo",
      "town": "Jardín",
      "zipcode": ""
    },
    "specialities": [
      "Obesidad"
    ],
    "socialMedia": {
      "doctoralia": "https://www.doctoralia.com.mx/claudia-analy-velez-viveros/endocrinologo-internista/nuevo-laredo"
    }
  },
  {
    "id": 26,
    "hasDetails": true,
    "mainTopics": [
      {
        "topic": "Taller de actualización en Obesidad",
        "moderator": "Dr. Edmundo Ávila Hipólito"
      }
    ],
    "firstName": "Carolina Medrano",
    "lastName": "de Ávila",
    "displayName": "Carolina Medrano de Ávila",
    "gender": "Female",
    "email": "",
    "profileImg": "assets/img/logos/logo.svg",
    "phone": "",
    "speciality": "Endocrinología",
    "congress": [
      {
        "topic": "Obesidad e infertilidad femenina: mediadores potenciales del impacto de la obesidad.",
        "from": "",
        "to": "",
        "duration": ""
      }
    ],
    "address": {
      "completeAddress": "",
      "suburb": "",
      "state": "Tijuana",
      "town": "",
      "zipcode": ""
    },
    "specialities": [
      "Diabetes"
    ],
    "socialMedia": {
      "doctoralia": "https://www.doctoralia.com.mx/carolina-medrano-de-avila/endocrinologo/tijuana"
    }
  },
  {
    "id": 27,
    "hasDetails": true,
    "mainTopics": [
      {
        "topic": "Taller de actualización en Obesidad",
        "moderator": "Dr. Edmundo Ávila Hipólito"
      }
    ],
    "firstName": "Raymundo Abram",
    "lastName": "Sanchez Gomez",
    "displayName": "Raymundo Abram Sanchez Gomez",
    "gender": "Male",
    "email": "dr.raymundosanchez@gmail.com",
    "profileImg": "assets/img/logos/logo.svg",
    "phone": "8112852177",
    "speciality": "Endocrinología",
    "congress": [
      {
        "topic": "Detección oportuna de complicaciones, manejo multidisciplinario.",
        "from": "",
        "to": "",
        "duration": ""
      }
    ],
    "address": {
      "completeAddress": "Av. Dr. José Eleuterio González S/N",
      "suburb": "Mitras Centro",
      "state": "Monterrey",
      "town": "Nuevo León",
      "zipcode": "64460"
    },
    "specialities": [],
    "socialMedia": {}
  },
  {
    "id": 28,
    "hasDetails": true,
    "mainTopics": [
      {
        "topic": "Taller de actualización en Obesidad",
        "moderator": "Dr. Edmundo Ávila Hipólito"
      }
    ],
    "firstName": "Yunuhen",
    "lastName": "Moreno Cuevas",
    "displayName": "Yunuhen Moreno Cuevas",
    "gender": "Female",
    "email": "",
    "profileImg": "assets/img/logos/logo.svg",
    "phone": "4426700779",
    "speciality": "Endocrinología",
    "congress": [
      {
        "topic": "Tratamiento en obesidad: ¿Manejo farmacológico o cirugía bariátrica?",
        "from": "",
        "to": "",
        "duration": ""
      }
    ],
    "address": {
      "completeAddress": "",
      "suburb": "",
      "state": "",
      "town": "",
      "zipcode": ""
    },
    "specialities": [
      "Obesidad",
      "Neuroendocrinología",
      "Diabetología"
    ],
    "socialMedia": {
      "doctoralia": "https://www.doctoralia.com.mx/yunuhen-n-moreno-cuevas/endocrinologo/zacapu"
    }
  },
  {
    "id": 29,
    "hasDetails": true,
    "mainTopics": [
      {
        "topic": "Diabetes",
        "moderator": "Dra. Elizabeth Olavide Aguilar"
      }
    ],
    "firstName": "Fernando Javier",
    "lastName": "Lavalle González",
    "displayName": "Fernando Javier Lavalle González",
    "gender": "Male",
    "email": "drfernandolavalle@hotmail.com",
    "profileImg": "assets/img/logos/logo.svg",
    "phone": "8183475528",
    "speciality": "Endocrinología",
    "congress": [
      {
        "topic": "Criterios de remisión en Diabetes.",
        "from": "9:10 am",
        "to": "9:35 am",
        "duration": "25 min"
      }
    ],
    "address": {
      "completeAddress": "Hospital Universitario, Avenida Madero Y Gonzalitos",
      "suburb": "",
      "state": "",
      "town": "",
      "zipcode": ""
    },
    "specialities": [],
    "socialMedia": {
      "doctoralia": "https://www.doctoralia.com.mx/fernando-javier-lavalle-gonzalez/endocrinologo/monterrey"
    }
  },
  {
    "id": 30,
    "hasDetails": true,
    "mainTopics": [
      {
        "topic": "Diabetes",
        "moderator": "Dra. Elizabeth Olavide Aguilar"
      }
    ],
    "firstName": "Juan René",
    "lastName": "Cornejo Avendaño",
    "displayName": "Juan René Cornejo Avendaño",
    "gender": "Male",
    "email": "",
    "profileImg": "assets/img/logos/logo.svg",
    "phone": "8183475528",
    "speciality": "Endocrinología",
    "congress": [
      {
        "topic": "Criterios de remisión en Diabetes.",
        "from": "9:35 am",
        "to": "9:55 am",
        "duration": "20 min"
      }
    ],
    "address": {
      "completeAddress": "Hospital Universitario, Avenida Madero Y Gonzalitos",
      "suburb": "",
      "state": "",
      "town": "",
      "zipcode": ""
    },
    "specialities": [],
    "socialMedia": {
      "doctoralia": "https://www.doctoralia.com.mx/fernando-javier-lavalle-gonzalez/endocrinologo/monterrey"
    }
  },
  {
    "id": 31,
    "hasDetails": true,
    "mainTopics": [
      {
        "topic": "Diabetes",
        "moderator": "Dra. Elizabeth Olavide Aguilar"
      }
    ],
    "firstName": "Sergio ",
    "lastName": "Zúñiga Guajardo",
    "displayName": "Sergio Zúñiga Guajardo",
    "gender": "Male",
    "email": "sergiozungua@gmail.com",
    "profileImg": "assets/img/logos/logo.svg",
    "phone": "8113658738, 8113658739",
    "speciality": "Endocrinología",
    "congress": [
      {
        "topic": "Sarcopenia y Diabetes.",
        "from": "9:55 am",
        "to": "10:15 am",
        "duration": "20 min"
      }
    ],
    "address": {
      "completeAddress": "Calle Ecuador 2331, Monterrey, Doctors Hospital",
      "suburb": "",
      "state": "",
      "town": "",
      "zipcode": ""
    },
    "specialities": [],
    "socialMedia": {
      "doctoralia": "https://www.doctoralia.com.mx/sergio-zuniga-guajardo/endocrinologo-internista/monterrey"
    }
  },
  {
    "id": 32,
    "hasDetails": true,
    "mainTopics": [
      {
        "topic": "Diabetes",
        "moderator": "Dra. Elizabeth Olavide Aguilar"
      }
    ],
    "firstName": "Luis Alberto",
    "lastName": "Pérez Arredondo",
    "displayName": "Luis Alberto Pérez Arredondo",
    "gender": "Male",
    "email": "luisperezendocrino@gmail.com",
    "profileImg": "assets/img/logos/logo.svg",
    "phone": "8180294744",
    "speciality": "Endocrinología",
    "congress": [
      {
        "topic": "Diabesidad  en Diabetes tipo 1.",
        "from": "10:15 am",
        "to": "10:35 am",
        "duration": "20 min"
      }
    ],
    "address": {
      "completeAddress": "",
      "suburb": "",
      "state": "",
      "town": "",
      "zipcode": ""
    },
    "specialities": [],
    "socialMedia": {
      "doctoralia": ""
    }
  },
  {
    "id": 33,
    "hasDetails": true,
    "mainTopics": [
      {
        "topic": "Diabetes",
        "moderator": "Dra. Elizabeth Olavide Aguilar"
      }
    ],
    "firstName": "María Elena",
    "lastName": "Romero Ibargüengoitia",
    "displayName": "María Elena Romero Ibargüengoitia",
    "gender": "Female",
    "email": "marelfg@gmail.com",
    "profileImg": "assets/img/logos/logo.svg",
    "phone": "8131313346",
    "speciality": "Endocrinología",
    "congress": [
      {
        "topic": "Nuevos objetivos de control en diabetes, variabilidad glucémica y tiempo en rango.",
        "from": "10:35 am",
        "to": "10:55 am",
        "duration": "20 min"
      }
    ],
    "address": {
      "completeAddress": "San Jerónimo, Pte. 300, Miravalle, 64660 Monterrey, N.L",
      "suburb": "San Jerónimo Pte. 300, Miravalle",
      "state": "Nuevo León",
      "town": "Monterrey",
      "zipcode": "64660 "
    },
    "specialities": [
      "Obesidad",
      "Neuroendocrinología",
      "Diabetología",
      "Patologías de la Tiroides",
      "Gónadas y Reproducción"
    ],
    "socialMedia": {
      "doctoralia": "https://www.doctoralia.com.mx/maria-elena-romero-ibarguengoitia/endocrinologo-internista/nuevo-leon"
    }
  },
  {
    "id": 34,
    "hasDetails": true,
    "mainTopics": [
      {
        "topic": "Tópicos diversos en Endocrinología",
        "moderator": "Dra. María Cristina Quintanilla García."
      }
    ],
    "firstName": "Alfonso Javier",
    "lastName": "Zapata Garrido",
    "displayName": "Alfonso Javier Zapata Garrido",
    "gender": "Male",
    "email": "endocrino1@icloud.com",
    "profileImg": "assets/img/logos/logo.svg",
    "phone": "8121389930",
    "speciality": "Endocrinología",
    "congress": [
      {
        "topic": "Hígado graso asociado a disfunción metabólica.",
        "from": "11:20 am",
        "to": "11:40 am",
        "duration": "20 min"
      }
    ],
    "address": {
      "completeAddress": "",
      "suburb": "",
      "state": "",
      "town": "",
      "zipcode": " "
    },
    "specialities": [],
    "socialMedia": {
      "doctoralia": "https://www.doctoralia.com.mx/alfonso-javier-zapata-garrido/endocrinologo-internista/monterrey"
    }
  },
  {
    "id": 35,
    "hasDetails": true,
    "mainTopics": [
      {
        "topic": "Tópicos diversos en Endocrinología",
        "moderator": "Dra. María Cristina Quintanilla García."
      }
    ],
    "firstName": "José Miguel",
    "lastName": "Hinojosa Amaya",
    "displayName": "José Miguel Hinojosa Amaya",
    "gender": "Male",
    "email": "neuroendo_hinojosa@dr.com",
    "profileImg": "assets/img/logos/logo.svg",
    "phone": "8134741008",
    "speciality": "Endocrinología",
    "congress": [
      {
        "topic": "Deficiencia de GH en el adulto.",
        "from": "12:40",
        "to": "13:00",
        "duration": "20 min"
      }
    ],
    "address": {
      "completeAddress": "Calz. San Pedro 255 Sur, Colonia del Valle, Del Valle, San Pedro Garza Garcia",
      "suburb": "Colonia del Valle",
      "state": "Nuevo León",
      "town": "San Pedro Garza Garcia",
      "zipcode": ""
    },
    "specialities": [
      "Neuroendocrinología",
      "Adrenales"
    ],
    "socialMedia": {
      "doctoralia": "https://www.doctoralia.com.mx/jose-miguel-hinojosa-amaya/endocrinologo/san-pedro-garza-garcia"
    }
  },
  {
    "id": 36,
    "hasDetails": true,
    "mainTopics": [
      {
        "topic": "Obesidad",
        "moderator": "Dra. Gabriela Morales González."
      },
      {
        "topic": "Nutrición y Obesidad",
        "moderator": "Lic. Beatriz Ramírez Reséndez"
      }
    ],
    "firstName": "Edna Judith",
    "lastName": "Nava González",
    "displayName": "Edna Judith Nava González",
    "gender": "Female",
    "email": "",
    "profileImg": "assets/img/logos/logo.svg",
    "phone": "",
    "speciality": "Endocrinología",
    "congress": [
      {
        "topic": "Obesidad sarcopénica.",
        "from": "13:45",
        "to": "14:05",
        "duration": "20 min"
      },
      {
        "topic": "Nutrición y suplementos en obesidad sarcopenica en el adulto.",
        "from": "10:35 am",
        "to": "11:10 am",
        "duration": "35 min"
      }
    ],
    "address": {
      "completeAddress": "",
      "suburb": "",
      "state": "",
      "town": "",
      "zipcode": ""
    },
    "specialities": [],
    "socialMedia": {
      "doctoralia": ""
    }
  },
  {
    "id": 37,
    "hasDetails": true,
    "mainTopics": [
      {
        "topic": "Obesidad",
        "moderator": "Dra. Gabriela Morales González."
      }
    ],
    "firstName": "Jorge Rafael",
    "lastName": "Violante Cumpa",
    "displayName": "Jorge Rafael Violante Cumpa",
    "gender": "Male",
    "email": "dr.jviolante@gmail.com",
    "profileImg": "assets/img/logos/logo.svg",
    "phone": "8112556438",
    "speciality": "Endocrinología",
    "congress": [
      {
        "topic": "Estrategias de tratamiento para evitar la Re ganancia.",
        "from": "14:45",
        "to": "15:05",
        "duration": "20 min"
      }
    ],
    "address": {
      "completeAddress": "",
      "suburb": "",
      "state": "",
      "town": "",
      "zipcode": ""
    },
    "specialities": [],
    "socialMedia": {
      "doctoralia": ""
    }
  },
  {
    "id": 38,
    "hasDetails": true,
    "mainTopics": [
      {
        "topic": "Nutrición y Diabetes",
        "moderator": "Dra. Leticia Hernández Arizpe."
      }
    ],
    "firstName": "Valeria",
    "lastName": "Millan Gutierrez",
    "displayName": "Valeria Millan Gutierrez",
    "gender": "Female",
    "email": "",
    "profileImg": "assets/img/logos/logo.svg",
    "phone": "",
    "speciality": "Endocrinología",
    "congress": [
      {
        "topic": "Tratamiento y pautas para tratamiento nutricio en pacientes con diabetes mellitus e insuficiencia renal.",
        "from": "8:10 am",
        "to": "8:45 am",
        "duration": "35 min"
      }
    ],
    "address": {
      "completeAddress": "",
      "suburb": "",
      "state": "",
      "town": "",
      "zipcode": ""
    },
    "specialities": [],
    "socialMedia": {
      "doctoralia": ""
    }
  },
  {
    "id": 39,
    "hasDetails": true,
    "mainTopics": [
      {
        "topic": "Nutrición y Diabetes",
        "moderator": "Dra. Leticia Hernández Arizpe."
      }
    ],
    "firstName": "Luis Fernando",
    "lastName": "Mendez López",
    "displayName": "Luis Fernando Mendez López",
    "gender": "Male",
    "email": "",
    "profileImg": "assets/img/logos/logo.svg",
    "phone": "",
    "speciality": "Endocrinología",
    "congress": [
      {
        "topic": "Microbiotica y probioticos en el paciente con diabetes mellitus tipo 2.",
        "from": "8:45 am",
        "to": "9:20 am",
        "duration": "35 min"
      }
    ],
    "address": {
      "completeAddress": "",
      "suburb": "",
      "state": "",
      "town": "",
      "zipcode": ""
    },
    "specialities": [],
    "socialMedia": {
      "doctoralia": ""
    }
  },
  {
    "id": 40,
    "hasDetails": true,
    "mainTopics": [
      {
        "topic": "Nutrición y Diabetes",
        "moderator": "Dra. Leticia Hernández Arizpe."
      }
    ],
    "firstName": "Abdel",
    "lastName": "Martinez Baez",
    "displayName": "Abdel Martinez Baez",
    "gender": "Male",
    "email": "",
    "profileImg": "assets/img/logos/logo.svg",
    "phone": "",
    "speciality": "Endocrinología",
    "congress": [
      {
        "topic": "Alimentación funcional y su utilización en el tratamiento nutricio en personas con diabetes mellitus.",
        "from": "9:20 am",
        "to": "9:50 am",
        "duration": "30 min"
      }
    ],
    "address": {
      "completeAddress": "",
      "suburb": "",
      "state": "",
      "town": "",
      "zipcode": ""
    },
    "specialities": [],
    "socialMedia": {
      "doctoralia": ""
    }
  },
  {
    "id": 41,
    "hasDetails": true,
    "mainTopics": [
      {
        "topic": "Nutrición y Obesidad",
        "moderator": "Lic. Beatriz Ramírez Reséndez"
      }
    ],
    "firstName": "Lucia",
    "lastName": "Villareal Jimenez",
    "displayName": "Lucia Villareal Jimenez",
    "gender": "Female",
    "email": "",
    "profileImg": "assets/img/logos/logo.svg",
    "phone": "",
    "speciality": "Endocrinología",
    "congress": [
      {
        "topic": "Importancia de la suplementación posterior a la cirugía metabólica a corto y largo plazo.",
        "from": "10:00 am",
        "to": "10:35 am",
        "duration": "35 min"
      }
    ],
    "address": {
      "completeAddress": "",
      "suburb": "",
      "state": "",
      "town": "",
      "zipcode": ""
    },
    "specialities": [],
    "socialMedia": {
      "doctoralia": ""
    }
  },
  {
    "id": 42,
    "hasDetails": true,
    "mainTopics": [
      {
        "topic": "Nutrición y Obesidad",
        "moderator": "Lic. Beatriz Ramírez Reséndez"
      }
    ],
    "firstName": "Ana Sofía",
    "lastName": "Guerra Cantú",
    "displayName": "Ana Sofía Guerra Cantú",
    "gender": "Female",
    "email": "",
    "profileImg": "assets/img/logos/logo.svg",
    "phone": "",
    "speciality": "Endocrinología",
    "congress": [
      {
        "topic": "Esteatosis hepatica: ¿Cuál es el papel que juega la nutrición en su tratamiento?",
        "from": "11:10 am",
        "to": "11:45 am",
        "duration": "35 min"
      }
    ],
    "address": {
      "completeAddress": "I. Morones Prieto, Monterrey Hospital San José Tec de Monterrey",
      "suburb": "",
      "state": "",
      "town": "",
      "zipcode": ""
    },
    "specialities": [
      "Nutriología Clínica",
      "Sobrepeso",
      "Enfermedades Gastrointestinales",
      "Nutrición Oncológica"
    ],
    "socialMedia": {
      "doctoralia": "https://www.doctoralia.com.mx/ana-sofia-guerra-cantu/nutriologo-clinico/monterrey"
    }
  },
  {
    "id": 43,
    "hasDetails": true,
    "mainTopics": [
      {
        "topic": "Nutrición, Endocrinología y Salud metabólica en condiciones médicas comunes.",
        "moderator": "Dra. Elizabeth Solís Pérez NC y  ENC Ma. Alejandra Sánchez Peña NC."
      }
    ],
    "firstName": "Marisol",
    "lastName": "Brito Alvarez",
    "displayName": "Marisol Brito Alvarez",
    "gender": "Female",
    "email": "",
    "profileImg": "assets/img/logos/logo.svg",
    "phone": "",
    "speciality": "Endocrinología",
    "congress": [
      {
        "topic": "Intervención Nutricional en enfermedad vascular  y su interacción con drogas (Pacientes que utilizan anticoagulantes).",
        "from": "12:15",
        "to": "12:35",
        "duration": "20 min"
      }
    ],
    "address": {
      "completeAddress": "Francisco Garza Sada 2925, Chepevera, Monterrey Be Well Center",
      "suburb": "",
      "state": "",
      "town": "",
      "zipcode": ""
    },
    "specialities": [
      "Colitis",
      "Trastornos cardiovasculares",
      "Intolerancia a la lactosa",
      "Dislipidemia",
      "Diabetes gestacional",
      "Gastritis",
      "Síndrome del intestino corto",
      "Malabsorción",
      "Síndrome metabólico",
      "Obesidad",
      "Hipercolesterolemia familiar",
      "Desnutrición",
      "Hipertensión",
      "Falla renal crónica"
    ],
    "socialMedia": {
      "doctoralia": "https://www.doctoralia.com.mx/marisol-brito-alvarez/nutriologo-clinico/nuevo-leon"
    }
  },
  {
    "id": 44,
    "hasDetails": true,
    "mainTopics": [
      {
        "topic": "Nutrición, Endocrinología y Salud metabólica en condiciones médicas comunes.",
        "moderator": "Dra. Elizabeth Solís Pérez NC y  ENC Ma. Alejandra Sánchez Peña NC."
      }
    ],
    "firstName": "Karla Alejandra",
    "lastName": "Serrato Sánchez",
    "displayName": "Karla Alejandra Serrato Sánchez",
    "gender": "Female",
    "email": "",
    "profileImg": "assets/img/logos/logo.svg",
    "phone": "",
    "speciality": "Endocrinología",
    "congress": [
      {
        "topic": "Hablando de Nutrición Clínica en Intolerancia a la lactosa.",
        "from": "12:35",
        "to": "12:55",
        "duration": "20 min"
      }
    ],
    "address": {
      "completeAddress": "",
      "suburb": "",
      "state": "",
      "town": "",
      "zipcode": ""
    },
    "specialities": [],
    "socialMedia": {
      "doctoralia": ""
    }
  },
  {
    "id": 45,
    "hasDetails": true,
    "mainTopics": [
      {
        "topic": "Nutrición, Endocrinología y Salud metabólica en condiciones médicas comunes.",
        "moderator": "Dra. Elizabeth Solís Pérez NC y  ENC Ma. Alejandra Sánchez Peña NC."
      }
    ],
    "firstName": "Martha Eugenia",
    "lastName": "Lara Sánchez",
    "displayName": "Martha Eugenia Lara Sánchez",
    "gender": "Female",
    "email": "",
    "profileImg": "assets/img/logos/logo.svg",
    "phone": "",
    "speciality": "Endocrinología",
    "congress": [
      {
        "topic": "¿Cálculos Renales? Como interviene la Nutrición para mejorar la salud metabólica.",
        "from": "12:55",
        "to": "13:15",
        "duration": "20 min"
      }
    ],
    "address": {
      "completeAddress": "",
      "suburb": "",
      "state": "",
      "town": "",
      "zipcode": ""
    },
    "specialities": [],
    "socialMedia": {
      "doctoralia": ""
    }
  },
  {
    "id": 46,
    "hasDetails": true,
    "mainTopics": [
      {
        "topic": "Nutrición, Endocrinología y Salud metabólica en condiciones médicas comunes.",
        "moderator": "Dra. Elizabeth Solís Pérez NC y  ENC Ma. Alejandra Sánchez Peña NC."
      }
    ],
    "firstName": "María de",
    "lastName": "la Luz",
    "displayName": "María de la Luz Pérez Ávila",
    "gender": "Female",
    "email": "",
    "profileImg": "assets/img/logos/logo.svg",
    "phone": "",
    "speciality": "Endocrinología",
    "congress": [
      {
        "topic": "Abordaje Dietético en Síndrome de Dumping.",
        "from": "13:15",
        "to": "13:45",
        "duration": "30 min"
      }
    ],
    "address": {
      "completeAddress": "",
      "suburb": "",
      "state": "",
      "town": "",
      "zipcode": ""
    },
    "specialities": [],
    "socialMedia": {
      "doctoralia": ""
    }
  },
  {
    "id": 47,
    "hasDetails": false,
    "address": {
      "town": "Monterrey",
      "state": "Nuevo León"
    },
    "displayName": "Eloísa Saavedra Castillo ",
    "speciality": "Endocrinologia Pediatrica",
    "profileImg": "assets/img/logos/logo.svg",
    "email": "elosaavedra@hotmail.com",
    "phone": "8113659296",
    "firstName": "Eloísa",
    "lastName": "Saavedra Castillo "
  },
  {
    "id": 48,
    "hasDetails": false,
    "address": {
      "town": "Monterrey",
      "state": "Nuevo León"
    },
    "displayName": "Claudia Alejandra Ortega Valdez ",
    "speciality": "Endocrinología",
    "profileImg": "assets/img/logos/logo.svg",
    "email": "claortega@hotmail.com",
    "phone": "8119689774",
    "firstName": "Claudia Alejandra",
    "lastName": "Ortega Valdez"
  },
  {
    "id": 49,
    "hasDetails": false,
    "address": {
      "town": "Monterrey",
      "state": "Nuevo León"
    },
    "displayName": "Beatriz Ramírez Resendez ",
    "speciality": "Nutrición",
    "profileImg": "assets/img/logos/logo.svg",
    "email": "enc.beatrizramirez@gmail.com",
    "phone": "8183687842",
    "firstName": "Beatriz Ramírez",
    "lastName": "Resendez "
  },
  {
    "id": 50,
    "hasDetails": false,
    "address": {
      "town": "Monterrey",
      "state": "Nuevo León"
    },
    "displayName": "Cristóbal Zambrano Santos ",
    "speciality": "Endocrinología",
    "profileImg": "assets/img/logos/logo.svg",
    "email": "cristozam_27@hotmail.com",
    "phone": "8445383478",
    "firstName": "Cristóbal Zambrano",
    "lastName": "Santos "
  },
  {
    "id": 51,
    "hasDetails": false,
    "address": {
      "town": "Monterrey",
      "state": "Nuevo León"
    },
    "displayName": "Ignacio Alejandro Martinez Delgado",
    "speciality": "Endocrinología",
    "profileImg": "assets/img/logos/logo.svg",
    "email": "imartinez_delgado@hotmail.com",
    "phone": "8183623819",
    "firstName": "Ignacio Alejandro",
    "lastName": "Martinez Delgado"
  },
  {
    "id": 52,
    "hasDetails": false,
    "address": {
      "town": "San Pedro Garza García",
      "state": "Nuevo León"
    },
    "displayName": "Natalia Eloisa De La Garza Hernández",
    "speciality": "Endocrinología",
    "profileImg": "assets/img/logos/logo.svg",
    "email": "natalia_eloisa@hotmail.com",
    "phone": " 8184581786",
    "firstName": "Natalia Eloisa",
    "lastName": "De La"
  },
  {
    "id": 53,
    "hasDetails": false,
    "address": {
      "town": "Monterrey",
      "state": "Nuevo León"
    },
    "displayName": "Zinia Fernullda Martínez Mendoza ",
    "speciality": "Endocrinología",
    "profileImg": "assets/img/logos/logo.svg",
    "email": "zifer_24@hotmail.com",
    "phone": "8110499794 ",
    "firstName": "Zinia Fernullda",
    "lastName": "Martínez Mendoza"
  },
  {
    "id": 54,
    "hasDetails": false,
    "address": {
      "town": "Reynosa",
      "state": "Tamaulipas"
    },
    "displayName": "Juan José Castillo Dávila",
    "speciality": "Endocrinología",
    "profileImg": "assets/img/logos/logo.svg",
    "email": "conde_link@hotmail.com",
    "phone": "8995024925",
    "firstName": "Juan José",
    "lastName": "Castillo Dávila"
  },
  {
    "id": 55,
    "hasDetails": false,
    "address": {
      "town": "Monterrey",
      "state": "Nuevo León"
    },
    "displayName": "Fernulldo Javier Lavalle González ",
    "speciality": "Endocrinología",
    "profileImg": "assets/img/logos/logo.svg",
    "email": "drfernulldolavalle@hotmail.com",
    "phone": "8183475528",
    "firstName": "Fernulldo Javier",
    "lastName": "Lavalle González"
  },
  {
    "id": 56,
    "hasDetails": false,
    "address": {
      "town": "Monterrey",
      "state": "Nuevo León"
    },
    "displayName": "Cristóbal Zambrano Santos ",
    "speciality": "Endocrinología",
    "profileImg": "assets/img/logos/logo.svg",
    "email": "cristozam_27@hotmail.com",
    "phone": "8445383478",
    "firstName": "Cristóbal Zambrano",
    "lastName": "Santos "
  },
  {
    "id": 57,
    "hasDetails": false,
    "address": {
      "town": "Monterrey",
      "state": "Nuevo León"
    },
    "displayName": "Leticia Maria Hernulldez Arizpr",
    "speciality": "Nutrición",
    "profileImg": "assets/img/logos/logo.svg",
    "email": "letyhdezarizpe@yahoo.com",
    "phone": "8183664788",
    "firstName": "Leticia Maria",
    "lastName": "Hernulldez Arizpr"
  },
  {
    "id": 58,
    "hasDetails": false,
    "address": {
      "town": "Monterrey",
      "state": "Nuevo León"
    },
    "displayName": "Jazmín Medina Flores ",
    "speciality": "Endocrinología",
    "profileImg": "assets/img/logos/logo.svg",
    "email": "jazminmf1455@gmail.com",
    "phone": "8261236530",
    "firstName": "Jazmín Medina",
    "lastName": "Flores "
  },
  {
    "id": 59,
    "hasDetails": false,
    "address": {
      "town": "Monterrey",
      "state": "Nuevo León"
    },
    "displayName": "Jose Gerardo Ayala Villarreal",
    "speciality": "Medicina interna",
    "profileImg": "assets/img/logos/logo.svg",
    "email": "drgayala.@gmail.com",
    "phone": "8183331270",
    "firstName": "Jose Gerardo",
    "lastName": "Ayala Villarreal"
  },
  {
    "id": 60,
    "hasDetails": false,
    "address": {
      "town": "Monterrey",
      "state": "Nuevo León"
    },
    "displayName": "Luis Diego Maximiliano Ramos Anthony",
    "speciality": "Endocrinología",
    "profileImg": "assets/img/logos/logo.svg",
    "email": "diego.ramos.ant@gmail.com",
    "phone": "8132754998",
    "firstName": "Luis Diego",
    "lastName": "Maximiliano Ramos"
  },
  {
    "id": 61,
    "hasDetails": false,
    "address": {
      "town": "Monterrey",
      "state": "Nuevo León"
    },
    "displayName": "Anally Jamile Soto Garcia",
    "speciality": "Endocrinología",
    "profileImg": "assets/img/logos/logo.svg",
    "email": "jamilesoga@hotmail.com",
    "phone": "8124520031",
    "firstName": "Anally Jamile",
    "lastName": "Soto Garcia"
  },
  {
    "id": 62,
    "hasDetails": false,
    "address": {
      "town": "Monterrey",
      "state": "Nuevo León"
    },
    "displayName": "David Sánchez García ",
    "speciality": "Endocrinología",
    "profileImg": "assets/img/logos/logo.svg",
    "email": "davidsanchez70@hotmail.com",
    "phone": "8183687843",
    "firstName": "David Sánchez",
    "lastName": "García "
  },
  {
    "id": 63,
    "hasDetails": false,
    "address": {
      "town": "Monterrey",
      "state": "Nuevo León"
    },
    "displayName": "Delfina Marina Montemayor Ortiz",
    "speciality": "Endocrinología",
    "profileImg": "assets/img/logos/logo.svg",
    "email": "delfinamontemayor@yahoo.com",
    "phone": "8183480048",
    "firstName": "Delfina Marina",
    "lastName": "Montemayor Ortiz"
  },
  {
    "id": 64,
    "hasDetails": false,
    "address": {
      "town": "Monterrey",
      "state": "Nuevo León"
    },
    "displayName": "Jesús Arturo Ibarra Chávez",
    "speciality": "Endocrinología",
    "profileImg": "assets/img/logos/logo.svg",
    "email": "ibarra.endocrino@gmail.com",
    "phone": "8119911648",
    "firstName": "Jesús Arturo",
    "lastName": "Ibarra Chávez"
  },
  {
    "id": 65,
    "hasDetails": false,
    "address": {
      "town": "Monterrey",
      "state": "Nuevo León"
    },
    "displayName": "María Elena Fernández González ",
    "speciality": "Endocrinologia Pediatrica",
    "profileImg": "assets/img/logos/logo.svg",
    "email": "marelfg@gmail.com",
    "phone": "8131313346",
    "firstName": "María Elena",
    "lastName": "Fernández González"
  },
  {
    "id": 66,
    "hasDetails": false,
    "address": {
      "town": "Monterrey",
      "state": "Nuevo León"
    },
    "displayName": "Claudia Analy Velez Viveros",
    "speciality": "Endocrinología",
    "profileImg": "assets/img/logos/logo.svg",
    "email": "dra_analyvelez@hotmail.com",
    "phone": "8672238805",
    "firstName": "Claudia Analy",
    "lastName": "Velez Viveros"
  },
  {
    "id": 67,
    "hasDetails": false,
    "address": {
      "town": "Monterrey",
      "state": "Nuevo León"
    },
    "displayName": "Samantha Garza Fuentes",
    "speciality": "Endocrinologia Pediatrica",
    "profileImg": "assets/img/logos/logo.svg",
    "email": "samgafu@gmail.com",
    "phone": "813450306",
    "firstName": "Samantha",
    "lastName": "Garza Fuentes"
  },
  {
    "id": 68,
    "hasDetails": false,
    "address": {
      "town": "Monterrey",
      "state": "Nuevo León"
    },
    "displayName": "Yessica Montserrat Garcia Salas ",
    "speciality": "Nutrición",
    "profileImg": "assets/img/logos/logo.svg",
    "email": "monserrat3016@gmail.com",
    "phone": "8132641625",
    "firstName": "Yessica Montserrat",
    "lastName": "Garcia Salas"
  },
  {
    "id": 69,
    "hasDetails": false,
    "address": {
      "town": "Monterrey",
      "state": "Nuevo León"
    },
    "displayName": "Tonatiu Diaz Escalante",
    "speciality": "Endocrinología",
    "profileImg": "assets/img/logos/logo.svg",
    "email": "dr_tonatiu@hotmail.com",
    "phone": "8124520006",
    "firstName": "Tonatiu",
    "lastName": "Diaz Escalante"
  },
  {
    "id": 70,
    "hasDetails": false,
    "address": {
      "town": "Monterrey",
      "state": "Nuevo León"
    },
    "displayName": "Marco Antonio Roman Montalvo",
    "speciality": "Endocrinología",
    "profileImg": "assets/img/logos/logo.svg",
    "email": "dr.roman.endocrino@gmail.com",
    "phone": "8123502794",
    "firstName": "Marco Antonio",
    "lastName": "Roman Montalvo"
  },
  {
    "id": 71,
    "hasDetails": false,
    "address": {
      "town": "Monterrey",
      "state": "Nuevo León"
    },
    "displayName": "Juana B. Romero Villarreal",
    "speciality": "Endocrinologia Pediatrica",
    "profileImg": "assets/img/logos/logo.svg",
    "email": "romerovillarreal@gmail.com",
    "phone": null,
    "firstName": "Juana B.",
    "lastName": "Romero Villarreal"
  },
  {
    "id": 72,
    "hasDetails": false,
    "address": {
      "town": "Monterrey",
      "state": "Nuevo León"
    },
    "displayName": "Karla Victoria Rodríguez Velver",
    "speciality": "Endocrinología",
    "profileImg": "assets/img/logos/logo.svg",
    "email": "drakarlavelver@gmail.com",
    "phone": "8119742294",
    "firstName": "Karla Victoria",
    "lastName": "Rodríguez Velver"
  },
  {
    "id": 73,
    "hasDetails": false,
    "address": {
      "town": "Monterrey",
      "state": "Nuevo León"
    },
    "displayName": "Graciela Gómez Martínez ",
    "speciality": "Endocrinología",
    "profileImg": "assets/img/logos/logo.svg",
    "email": "graciela_gomez_mtz@hotmail.com",
    "phone": null,
    "firstName": "Graciela Gómez",
    "lastName": "Martínez "
  },
  {
    "id": 74,
    "hasDetails": false,
    "address": {
      "town": "Monterrey",
      "state": "Nuevo León"
    },
    "displayName": "Luis Gerardo Dávila Medellin ",
    "speciality": "Endocrinología",
    "profileImg": "assets/img/logos/logo.svg",
    "email": "luis.davila92.md@gmail.com",
    "phone": "8116523568",
    "firstName": "Luis Gerardo",
    "lastName": "Dávila Medellin"
  },
  {
    "id": 75,
    "hasDetails": false,
    "address": {
      "town": "Monterrey",
      "state": "Nuevo León"
    },
    "displayName": "Cinthia Catalina Martinez Martinez",
    "speciality": "Endocrinología",
    "profileImg": "assets/img/logos/logo.svg",
    "email": "dra.cinthiacmartinez@gmail.com",
    "phone": "8128776128",
    "firstName": "Cinthia Catalina",
    "lastName": "Martinez Martinez"
  },
  {
    "id": 76,
    "hasDetails": false,
    "address": {
      "town": "Saltillo",
      "state": "Ciudad de México"
    },
    "displayName": "Raul Ibarra Salce",
    "speciality": "Endocrinología",
    "profileImg": "assets/img/logos/logo.svg",
    "email": "raul_ibs@hotmail.com",
    "phone": "8446881546",
    "firstName": "Raul",
    "lastName": "Ibarra Salce"
  },
  {
    "id": 77,
    "hasDetails": false,
    "address": {
      "town": "Monterrey",
      "state": "Nuevo León"
    },
    "displayName": "Mario Alberto Santana Mata ",
    "speciality": "Endocrinología",
    "profileImg": "assets/img/logos/logo.svg",
    "email": "mariodk17@gmail.com",
    "phone": "8442802775",
    "firstName": "Mario Alberto",
    "lastName": "Santana Mata"
  },
  {
    "id": 78,
    "hasDetails": false,
    "address": {
      "town": "Monterrey",
      "state": "Nuevo León"
    },
    "displayName": "Yesica Luna Garza",
    "speciality": "Endocrinología",
    "profileImg": "assets/img/logos/logo.svg",
    "email": "yesicaluna93@gmail.com",
    "phone": "8112276332",
    "firstName": "Yesica",
    "lastName": "Luna Garza"
  },
  {
    "id": 79,
    "hasDetails": false,
    "address": {
      "town": "Monterrey",
      "state": "Nuevo León"
    },
    "displayName": "Ricardo Omar Martínez Camacho",
    "speciality": "Endocrinología",
    "profileImg": "assets/img/logos/logo.svg",
    "email": "ricardomartinez2409@gmail.com",
    "phone": "8110386075",
    "firstName": "Ricardo Omar",
    "lastName": "Martínez Camacho"
  }
];

// Table headers
const tableHeaders = [
  "",
  "Full Name",
  "Speciality",
  "Email",
  "Phone Number",
  "Main Topic",
  "",
];

// Filters
const searchByLastNameInput = document.getElementById("searchByLastName");
const searchByCityInput = document.getElementById("searchByCity");
const searchBySpecialitySelect = document.getElementById("searchBySpeciality");
const searchByEntitySelect = document.getElementById("searchByEntity");

// Btns
const clearFiltersBtn = document.querySelector("#clearFiltersBtn");
const searchFilterBtn = document.querySelector("#searchFilterBtn");
const modalBtn = document.querySelector("#showDoctorModal");
const closeButton = document.querySelector(".btn-close");

// Results
const results = document.getElementById("searchResults");
var displayResultsAsCard = false; //

// Pagination
var paginationDoctors = [];
var currentPage = 1;
var prevIndexSelected = -1;
var currIndexSelected = 1;
const doctorsPerPage = 6;
const paginationContainer = document.getElementById("pagination");
const prevPageButton = document.getElementById("prevPageButton");
const nextPageButton = document.getElementById("nextPageButton");
const paginationSection = document.getElementById("pagination-section");
const paginationLinks = paginationContainer.getElementsByClassName("page-item");
var totalPages = Math.ceil(doctors.length / doctorsPerPage);

// Modal
const modal = document.getElementById("showDoctorModal");
const bootstrapModal = new bootstrap.Modal(
  document.getElementById("showDoctorModal")
);
const title = modal.querySelector(".modal-title");
const body = modal.querySelector(".modal-body");
const state = modal.querySelector("#doctorModalState");
const city = modal.querySelector("#doctorModalSuburb");
const town = modal.querySelector("#doctorModalTown");
const zipcode = modal.querySelector("#doctorModalZipCode");
const congressTimeFrom = modal.querySelector("#doctorModalCongressFromToTime");
const speciality = modal.querySelector("#doctorModalSpeciality");
const moderator = modal.querySelector("#doctorModalModerator");
const topic = modal.querySelector("#doctorModalTopic");
const specialities = modal.querySelector("#doctorModalSpecialities");
const addressDirection = modal.querySelector("#doctorModalDirection");

//Listeners
prevPageButton.addEventListener("click", prevPage);
nextPageButton.addEventListener("click", nextPage);
clearFiltersBtn.addEventListener("click", clearSearchResults);
searchFilterBtn.addEventListener("click", searchSpecialist);
modalBtn.addEventListener("click", showModalListener);
closeButton.addEventListener("click", () => bootstrapModal.hide());

// Load specialities and states ----------------------------------------------------------------------------------------
document.addEventListener("DOMContentLoaded", async function () {
  loadStates();
  loadSpecialists();
  loadPagination(doctors);

});


function loadStates() {
  const stateOptions = document.getElementById("searchByEntity");

  // States
  states.forEach((state, index) => {
    const option = document.createElement("option");
    option.value = index + 1;
    option.text = state;
    stateOptions.appendChild(option);
  });
}

function loadSpecialists() {
  const specialityOptions = document.getElementById("searchBySpeciality");

  // Specialists
  specialists.forEach((specialty, index) => {
    const option = document.createElement("option");
    option.value = index + 1;
    option.text = specialty;
    specialityOptions.appendChild(option);
  });
}

// Methods  ----------------------------------------------------------------------------------------
function searchSpecialist() {
  const lastName = searchByLastNameInput.value.trim().toLowerCase();
  const city = searchByCityInput.value.trim().toLowerCase();
  const specialityValue = searchBySpecialitySelect.value.toLowerCase();
  const entityValue = searchByEntitySelect.value.toLowerCase();

  if (!lastName && !city && specialityValue === "0" && entityValue === "0") {
    paginationDoctors = doctors;
    return displayResults(doctors);
  }

  const speciality =
    searchBySpecialitySelect.options[
      searchBySpecialitySelect.selectedIndex
    ].textContent.toLowerCase();
  const entity =
    searchByEntitySelect.options[
      searchByEntitySelect.selectedIndex
    ].textContent.toLowerCase();

  const filteredDoctors = doctors.filter((doctor) => {
    const doctorLastName = doctor.lastName.toLowerCase();
    const doctorCity = doctor.address.town != undefined ? doctor.address.town.toLowerCase() : null;
    const doctorSpeciality = doctor.speciality.toLowerCase();
    const doctorEntity = doctor.address.state.toLowerCase();

    if (
      (lastName && doctorLastName && !doctorLastName.includes(lastName)) ||
      (city && doctorCity && !doctorCity.includes(city)) ||
      (specialityValue !== "0" && doctorSpeciality !== speciality) ||
      (entityValue !== "0" && doctorEntity !== entity)
    ) {
      return false;
    }

    return true;
  });

  paginationDoctors = filteredDoctors;
  displayResults(filteredDoctors);
}

const displayResults = (doctorResults) => {
  // 1. Calculate the start and end index for the current page
  const startIndex = (currentPage - 1) * doctorsPerPage;
  const endIndex = startIndex + doctorsPerPage;

  // 2. Slice the doctors array to get only the doctors for the current page
  const doctorsForPage = doctorResults.slice(startIndex, endIndex);
  totalPages = Math.ceil(doctorResults.length / doctorsPerPage);

  // 3. Clear previous results
  results.innerHTML = "";

  // 4. Doctors array validation
  if (doctorResults.length === 0) {
    results.innerHTML = `
          <div class="alert alert-warning mt-3" role="alert">
            No se encontraron resultados.
          </div>
        `;

    showPaginationSection(false);
    return;
  }

  // 5. Add results
  let cardsHtml = displayResultsAsCard
    ? showDoctorsAsCards(doctorsForPage)
    : showDoctorsAsList(doctorsForPage);

  results.innerHTML = cardsHtml;

  // 6. Update the pagination buttons
  loadPagination(totalPages);
  updatePagination(totalPages);
  showPaginationSection(true);
};

function loadPagination(totalPages) {
  // Generate the HTML for the pagination links
  let paginationHtml = "";

  for (let i = 1; i <= totalPages; i++) {
    paginationHtml += `<li class="page-item ${i === currentPage ? "active" : ""
      }" id="on-paginate"><a class="page-link" onclick="onPaginateEvent(${i})" href="#busqueda">${i}</a></li>`;
  }

  paginationContainer.innerHTML = `
        <ul class="pagination">
            ${paginationHtml}
        </ul>
    `;
}

// Update the pagination buttons
function updatePagination(totalPages) {
  // Enable/disable the previous button based on the current page
  if (currentPage === 1) {
    prevPageButton.disabled = true;
  } else {
    prevPageButton.disabled = false;
  }

  // Enable/disable the next button based on the current page
  if (currentPage === totalPages) {
    nextPageButton.disabled = true;
  } else {
    nextPageButton.disabled = false;
  }
}

// Navigate to the previous page
function prevPage() {
  if (currentPage > 1) {
    currentPage--;
    displayResults(paginationDoctors);
  }
}

// Navigate to the next page
function nextPage() {
  if (currentPage < totalPages) {
    currentPage++;
    displayResults(paginationDoctors);
  }
}

function showPaginationSection(state) {
  paginationSection.style.visibility = state ? "visible" : "hidden";
}

function onPaginateEvent(index) {
  prevIndexSelected = index - 1;
  currIndexSelected = index;
  currentPage = currIndexSelected;
  displayResults(paginationDoctors);
}

function clearSearchResults() {
  // Reset all input fields and select dropdowns
  searchByLastNameInput.value = "";
  searchByCityInput.value = "";
  searchBySpecialitySelect.selectedIndex = 0;
  searchByEntitySelect.selectedIndex = 0;

  results.innerHTML = "";

  // hide pagination
  showPaginationSection(false);
}

function changeResultViewState(state) {
  displayResultsAsCard = state;
  displayResults(paginationDoctors);
}

function showDoctorsAsList(doctorsForPage) {
  // 1. Clear previous results
  if (!showDoctorsAsCards) results.innerHTML = "";

  var result = "";
  doctorsForPage.forEach((doctor, index) => {
    const doctoralia = doctor.socialMedia
      ? doctor.socialMedia.doctoralia
        ? doctor.socialMedia.doctoralia
        : null
      : null;
    // Single Advisor
    result += `
            <div class="col-sm-4">
                <div class="single_advisor_profile wow fadeInUp" data-wow-delay="0.2s" style="visibility: visible; animation-delay: 0.2s; animation-name: fadeInUp;">
                    <!-- Team Thumb-->
                    <div class="advisor_thumb"><img src="${doctor.profileImg}" alt="">
                        <!-- Social Info-->
                        <div class="social-info">
                            <a title="${doctor.phone ? doctor.phone : "##-####-####"}" target="_blank" onclick="copyPhoneNumber(${doctor.phone ? doctor.phone : null})">
                                <i class="bi bi-telephone-fill"></i>
                            </a>
                            <a href="${doctoralia != null ? doctoralia : "#busqueda"}" title="${doctoralia != null ? doctoralia : "#busqueda"}" target="_blank">
                                <i class="bi bi-google"></i>
                            </a>
                        </div>
                    </div>
                    <!--Team Details -->
                    <div class="single_advisor_details_info">
                        <div class="container overflow-hidden">
                            <div class="row align-items-center">
                                <div class="col">
                                    <h6>${doctor.gender === "Male" ? "Dr. " : "Dra. "} ${doctor.displayName}</h6>
                                    <p class="designation">${doctor.speciality}</p>
                                </div>
                                <div class="col text-end" ${!doctor.hasDetails ? 'hidden' : ''}>
                                    <button type="button" class="btn btn-sm btn-advisor" data-toggle="modal" data-target="#showDoctorModal" onclick="showDoctorModal(${doctor.id})">
                                        Ver más
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        `;
  });

  return result;
}

function copyPhoneNumber(phone) {
  if (phone != null) {
    // Create a temporary input element
    const tempInput = document.createElement('input');
    tempInput.value = phone;
    document.body.appendChild(tempInput);

    // Select the text in the input element
    tempInput.select();
    tempInput.setSelectionRange(0, 99999); // For mobile devices

    // Copy the selected text to the clipboard
    document.execCommand('copy');

    // Remove the temporary input element
    document.body.removeChild(tempInput);

    // Provide feedback to the user
    const alertContainer = document.getElementById('alertContainer');
    const alertDiv = document.createElement('div');
    alertDiv.classList.add('alert', 'alert-success');
    alertDiv.textContent = 'Número celular copiado!';
    alertContainer.appendChild(alertDiv);

    // Automatically dismiss the alert after a certain time (optional)
    setTimeout(() => {
      alertDiv.remove();
    }, 2000); // Remove after 3 seconds (adjust as needed)
  }
}

function showDoctorsAsCards(doctorsForPage) {
  // 1. Clear previous results
  if (showDoctorsAsCards) results.innerHTML = "";

  var headers = "";
  tableHeaders.forEach((header) => {
    headers += `<th scope = "col" > ${header}</th> `;
  });

  var data = "";
  doctorsForPage.forEach((doctor, index) => {
    var topics = [];
    if (doctor.mainTopics) doctor.mainTopics.forEach(mt => topics.push(mt.topic));

    data += `
            <tr>
                <th scope="row"><img src="${doctor.profileImg}" class="img-fluid doctor-avatar" style="max-width: 40px;" /></th>
                <td>${doctor.displayName}</td>
                <td>${doctor.speciality}</td>
                <td>${doctor.email === '' || doctor.email === null ? '-' : doctor.email}</td>
                <td>${doctor.phone === '' || doctor.phone === null ? '-' : doctor.phone}</td>
                <td>${topics.join(", ")}</td>
                <td>
                    <button type="button" ${!doctor.hasDetails ? 'hidden' : ''} class="btn btn-primary btn-sm" data-toggle="modal" data-target="#showDoctorModal" id="showModalListener" onClick="showModalListener(${doctor.id})">Ver más</button>
                </td>
            </tr>
        `;
  });

  return `
        <div class="table-responsive">
            <table class="table table-hover my-4">
                <thead class="table-dark">
                    <tr>
                        ${headers}
                    </tr>
                </thead>
                <tbody class="text-align-center align-middle">
                    ${data}
                </tbody>
            </table>
        </div>
    `;
}

function showModalListener(doctorId) {
  var modalDoctor = doctors.filter((doc) => doc.id === doctorId);

  if (modalDoctor.length > 0) {
    modalDoctor = modalDoctor[0];
    const name =
      (modalDoctor.gender === "Male" ? "Dr. " : "Dra. ") + modalDoctor.displayName;

    title.textContent = name;

    var topics = [];
    modalDoctor.congress.forEach((c, index) => topics.push(`${index + 1}.- ${c.topic}`));
    topic.textContent = topics.join("\r\n");

    var times = [];
    modalDoctor.congress.forEach((c, index) => times.push(`${index + 1}.- ${c.from} / ${c.to}`));
    congressTimeFrom.textContent = times.join("\r\n");

    speciality.textContent = modalDoctor.speciality;

    var moderators = [];
    modalDoctor.mainTopics.forEach((c, index) => moderators.push(`${index + 1}.- ${c.moderator}`));
    moderator.textContent = moderators.join("\r\n");

    state.textContent = modalDoctor.address.state
      ? modalDoctor.address.state + ", " + modalDoctor.address.town ? modalDoctor.address.town : ''
      : "No especificado";

    specialities.textContent =
      modalDoctor.specialities.length > 0
        ? modalDoctor.specialities.join("\r\n")
        : "No especificado";

    addressDirection.textContent =
      modalDoctor.address.completeAddress ? modalDoctor.address.completeAddress + ", " + modalDoctor.address.zipcode ? modalDoctor.address.zipcode : '' : '';
  }
  bootstrapModal.show();
}
