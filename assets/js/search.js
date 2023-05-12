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
    "Radiología e Imagen"
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
    "Zacatecas"
];

const doctors = [
    {
        "id": 1,
        "mainTopic": "Metabolismo Mineral Antonio",
        "moderator": "Marco António Román Montalvo",
        "firstName": "Lizet Dania",
        "lastName": "Quintanilla Flores",
        "email": "dra.quintanilla.endo@gmail.com",
        "mainSpeciality": "Endocrinología",
        "gender": "Female",
        "profileImg": "assets/img/doctors/7.png",
        "phone": "81-3264-1625",
        "congressTopic": "Impacto de la Diabetes en el hueso",
        "congressTimeFrom": "9:10 am",
        "congressTimeTo": "9:35 am",
        "presentationTime": "25 min",
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
            "Nutrición",
        ],
        "socialMedia": {
            "facebook": "https://www.facebook.com/profile.php?id=100063641529000",
            "website": "https://www.doctoralia.com.mx/dania-lizet-quintanilla-flores/endocrinologo-internista/nuevo-leon?fbclid=IwAR0rst9m20pqxgbyQirDWteO0daJJsWZ-KYb-v0LZsrJFCw8kCSxk7rnnJI"
        }
    }, {
        "id": 2,
        "mainTopic": "Metabolismo Mineral",
        "moderator": "Marco António Román Montalvo",
        "firstName": "Arnulfo",
        "lastName": "González Cántu",
        "email": null,
        "mainSpeciality": "Endocrinología",
        "gender": "Male",
        "profileImg": "assets/img/logos/logo.png",
        "phone": "81-8850-7650",
        "congressTopic": "Osteopenia. ¿Tratar o no tratar?",
        "congressTimeFrom": "9:35 am",
        "congressTimeTo": "9:55 am",
        "presentationTime": "20 min",
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
            "linkedin": "https://www.linkedin.com/in/arnulfo-gonz%C3%A1lez-cant%C3%BA-611a8863/?originalSubdomain=mx",
        }
    }, {
        "id": 3,
        "mainTopic": "Metabolismo Mineral",
        "moderator": "Marco António Román Montalvo",
        "firstName": "Anabel",
        "lastName": "Rodríguez Romo",
        "email": null,
        "mainSpeciality": "Medicina Interna",
        "gender": "Female",
        "profileImg": "assets/img/logos/logo.png",
        "phone": null,
        "congressTopic": "Densitometría, TBS y VFA",
        "congressTimeFrom": "9:55 am",
        "congressTimeTo": "10:15 am",
        "presentationTime": "20 min",
        "address": {
            "completeAddress": null,
            "suburb": null,
            "state": "CDMX",
            "town": null,
            "zipcode": null
        },
        "specialities": [],
        "socialMedia": {
            "linkedin": "https://www.linkedin.com/in/anabel-rodr%C3%ADguez-romo-167aaa63/?originalSubdomain=mx",
        }
    }, {
        "id": 4,
        "mainTopic": "Metabolismo Mineral",
        "moderator": "Marco António Román Montalvo",
        "firstName": "Laura Gabriela",
        "lastName": "Gómez Herrera",
        "email": null,
        "mainSpeciality": "Endocrinología",
        "gender": "Female",
        "profileImg": "assets/img/logos/logo.png",
        "phone": "01-844-415-3808 / 01-844-455-1802",
        "congressTopic": "Terapia secuencial en osteoporosis",
        "congressTimeFrom": "10:15 am",
        "congressTimeTo": "10:35 am",
        "presentationTime": "20 min",
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
            "linkedin": "https://www.linkedin.com/in/anabel-rodr%C3%ADguez-romo-167aaa63/?originalSubdomain=mx",
        }
    }, {
        "id": 5,
        "mainTopic": "Tiroides",
        "moderator": "Karla Rodríguez Velver",
        "firstName": "Edmundo",
        "lastName": "Avila Hipólito",
        "email": null,
        "mainSpeciality": "Endocrinología",
        "gender": "Male",
        "profileImg": "assets/img/logos/logo.png",
        "phone": "866-157-3514",
        "congressTopic": "Alteraciones tiroideas en el embarazo",
        "congressTimeFrom": "10:45 am",
        "congressTimeTo": "11:05 am",
        "presentationTime": "20 min",
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
    }, {
        "id": 6,
        "mainTopic": "Tiroides",
        "moderator": "Karla Rodríguez Velver",
        "firstName": "Juan José",
        "lastName": "Medina Jasso",
        "email": null,
        "mainSpeciality": "Endocrinología",
        "gender": "Male",
        "profileImg": "assets/img/logos/logo.png",
        "phone": "01-81-8346-9000 EXT. 127",
        "congressTopic": "Abordaje del nódulo tiroideo",
        "congressTimeFrom": "11:05 am",
        "congressTimeTo": "11:30 am",
        "presentationTime": "20 min",
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
            "Paratiroides",
        ],
        "socialMedia": {
            "linkedin": "https://www.linkedin.com/in/juan-jos%C3%A9-medina-jasso-315426112/?originalSubdomain=mx"
        }
    }, {
        "id": 7,
        "mainTopic": "Tiroides",
        "moderator": "Karla Rodríguez Velver",
        "firstName": "Leonor",
        "lastName": "Mireles Zavala",
        "email": null,
        "mainSpeciality": "Endocrinología",
        "gender": "Female",
        "profileImg": "assets/img/doctors/2.png",
        "logoselogo": "81-1477-0428",
        "congressTopic": "Encefalopatía de Hashimoto",
        "congressTimeFrom": "11:30 am",
        "congressTimeTo": "11:50 am",
        "presentationTime": "20 min",
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
            "Paratiroides",
        ],
        "socialMedia": {
            "doctoralia": "https://www.doctoralia.com.mx/leonor-g-mireles-zavala/endocrinologo-internista/monterrey"
        }
    }, {
        "id": 8,
        "mainTopic": "Tiroides",
        "moderator": "Karla Rodríguez Velver",
        "firstName": "David",
        "lastName": "Sanchez García",
        "email": null,
        "mainSpeciality": "Endocrinología",
        "gender": "Male",
        "profileImg": "assets/img/logos/logo.png",
        "phone": "81-8368-7842",
        "congressTopic": "Oftalmopatía tiroidea",
        "congressTimeFrom": "11:50 am",
        "congressTimeTo": "12:10 pm",
        "presentationTime": "20 min",
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
            "Osteoporosis",
        ],
        "socialMedia": {
            "doctoralia": "https://www.doctoralia.com.mx/david-sanchez-garcia/endocrinologo/monterrey",
        }
    }, {
        "id": 9,
        "mainTopic": "Biología de la repoducción",
        "moderator": "Ana Eugenia Teniente Sánchez",
        "firstName": "Marco Antonio",
        "lastName": "Román Montalvo",
        "email": null,
        "mainSpeciality": "Endocrinología",
        "gender": "Male",
        "profileImg": "assets/img/logos/logo.png",
        "phone": "81-2350-2794",
        "congressTopic": "Alopecia Androgenética y Acné Hormonal",
        "congressTimeFrom": "12:40 pm",
        "congressTimeTo": "13:00",
        "presentationTime": "20 min",
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
            "Diabetes tipo 1",
        ],
        "socialMedia": {
            "instagram": "https://www.instagram.com/tuendocrinologo/?hl=es",
            "doctoralia": "https://www.doctoralia.com.mx/marco-antonio-roman-montalvo/endocrinologo-internista/nuevo-leon",
        }
    }, {
        "id": 10,
        "mainTopic": "Biología de la repoducción",
        "moderator": "Ana Eugenia Teniente Sánchez",
        "firstName": "Gabriela",
        "lastName": "Morales González",
        "email": null,
        "mainSpeciality": "Endocrinología",
        "gender": "Female",
        "profileImg": "assets/img/doctors/9.png",
        "logoselogo": "81-8888-0495",
        "congressTopic": "Análogos de GLP1 en SOP",
        "congressTimeFrom": "13:00",
        "congressTimeTo": "13:20",
        "presentationTime": "20 min",
        "address": {
            "completeAddress": "Hospital Zambrano Helion, Batallon de San Patricio #112",
            "suburb": "Real de San Agustín",
            "state": "Nuevo León",
            "town": "San Pedro Garza García",
            "zipcode": "66278"
        },
        "specialities": [
        ],
        "socialMedia": {
        }
    }, {
        "id": 11,
        "mainTopic": "Biología de la repoducción",
        "moderator": "Ana Eugenia Teniente Sánchez",
        "firstName": "Celina",
        "lastName": "Salas Castro",
        "email": null,
        "mainSpeciality": "Ginecóloga",
        "gender": "Female",
        "profileImg": "assets/img/logos/logo.png",
        "logoselogo": null,
        "congressTopic": "Trastornos del deseo sexual hipoactívo",
        "congressTimeFrom": "13:20",
        "congressTimeTo": "13:40",
        "presentationTime": "20 min",
        "address": {
            "completeAddress": "Av. Batallon de San Patricio 112",
            "suburb": "Corporativo Prodesa",
            "state": "Nuevo León",
            "town": "San Pedro Garza García",
            "zipcode": "66278"
        },
        "specialities": ["Biología de la Reproducción Humana"],
        "socialMedia": {
            "doctoralia": "https://www.doctoralia.com.mx/celina-salas-castro/ginecologo/san-pedro-garza-garcia"
        }
    }, {
        "id": 12,
        "mainTopic": "Biología de la repoducción",
        "moderator": "Ana Eugenia Teniente Sánchez",
        "firstName": "Anally",
        "lastName": "Soto García",
        "email": null,
        "mainSpeciality": "Endocrinología",
        "gender": "Female",
        "profileImg": "assets/img/logos/logo.png",
        "logoselogo": null,
        "congressTopic": "Evaluación endócrina en el hombre con infertilidad",
        "congressTimeFrom": "13:40",
        "congressTimeTo": "14:00",
        "presentationTime": "20 min",
        "address": {
            "completeAddress": "Hidalgo #2425 - 500",
            "suburb": "Obispado",
            "state": "Nuevo León",
            "town": "Monterrey",
            "zipcode": "64060"
        },
        "specialities": ["Biología de la Reproducción Humana"],
        "socialMedia": {
            "doctoralia": "https://www.doctoralia.com.mx/celina-salas-castro/ginecologo/san-pedro-garza-garcia"
        }
    }, {
        "id": 13,
        "mainTopic": "Fisiopatología de NAFLD",
        "moderator": null,
        "firstName": "Alexandro",
        "lastName": "Atilano Díaz",
        "email": null,
        "mainSpeciality": "Gastroenterólogo",
        "gender": "Male",
        "profileImg": "assets/img/logos/logo.png",
        "phone": null,
        "congressTopic": "Mecanismos moleculares, patogénesis e historia natural de NAFLD",
        "congressTimeFrom": "16:00",
        "congressTimeTo": "16:30",
        "presentationTime": "30 min",
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
            "Hepatitis C",
        ],
        "socialMedia": {
            "doctoralia": "https://www.doctoralia.com.mx/maria-cristina-quintanilla-garcia/endocrinologo-internista/-https://www.doctoralia.com.mx/alexandro-atilano-diaz/gastroenterologo-endoscopista-internista/san-pedro-garza-garcia"
        }
    }, {
        "id": 14,
        "mainTopic": "Relación entre NAFLD y enfermedades endócrinas",
        "moderator": null,
        "firstName": "María Cristina",
        "lastName": "Quintanila García",
        "email": null,
        "mainSpeciality": "Endocrinología",
        "gender": "Female",
        "profileImg": "assets/img/logos/logo.png",
        "logoselogo": null,
        "congressTopic": "Diabetes mellitus, dislipidemia, enfermedad tiroidea, síndrome de ovario poliquístico y obesidad",
        "congressTimeFrom": "16:30",
        "congressTimeTo": "17:00",
        "presentationTime": "30 min",
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
            "Hipercolesterolemia",
        ],
        "socialMedia": {
            "doctoralia": "https://www.doctoralia.com.mx/maria-cristina-quintanilla-garcia/endocrinologo-internista/-"
        }
    }, {
        "id": 15,
        "mainTopic": "Estratificación de NAFLD",
        "moderator": null,
        "firstName": "Omar David",
        "lastName": "Borjas Almaguer",
        "email": null,
        "mainSpeciality": "Gastroenterologo",
        "gender": "Male",
        "profileImg": "assets/img/logos/logo.png",
        "phone": null,
        "congressTopic": "Detección temprana, diagnóstico diferencial y herramientas no invasivas",
        "congressTimeFrom": "17:00",
        "congressTimeTo": "17:30",
        "presentationTime": "30 min",
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
            "Ultrasonido endoscópico",
        ],
        "socialMedia": {
            "doctoralia": "https://www.doctoralia.com.mx/omar-david-borjas-almaguer/gastroenterologo-internista-endoscopista/nuevo-leon"
        }
    }, {
        "id": 16,
        "mainTopic": "Tratamiento de NAFLD",
        "moderator": null,
        "firstName": "Francisco Javier",
        "lastName": "González Moreno",
        "email": null,
        "mainSpeciality": "Endocrinología",
        "gender": "Male",
        "profileImg": "assets/img/logos/logo.png",
        "phone": null,
        "congressTopic": "Impacto de cambios en estilo de vida y revisión de la evidencia e indicaciones de vitamina E, TZD, iSGLT2, GLP1a y metformina",
        "congressTimeFrom": "17:45",
        "congressTimeTo": "18:15",
        "presentationTime": "30 min",
        "address": {
            "completeAddress": "Topo Chico #168",
            "suburb": "Anahuac",
            "state": "Nuevo León",
            "town": "San Nicolas de los Garza",
            "zipcode": "66450"
        },
        "specialities": [
        ],
        "socialMedia": {
        }
    }, {
        "id": 17,
        "mainTopic": "NAFLD",
        "moderator": null,
        "firstName": "Carolina",
        "lastName": "Castillo Castro",
        "email": null,
        "mainSpeciality": "Endocrinología",
        "gender": "Female",
        "profileImg": "assets/img/logos/logo.png",
        "logoselogo": "81-8888-0650",
        "congressTopic": "Beneficios, indicaciones y contraindicaciones de la cirugía bariátrica",
        "congressTimeFrom": "18:15",
        "congressTimeTo": "18:45",
        "presentationTime": "30 min",
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
            "Patologías de la Tiroides",
        ],
        "socialMedia": {
            "doctoralia": "https://www.doctoralia.com.mx/carolina-castillo-castro/endocrinologo-internista/nuevo-leon"
        }
    }, {
        "id": 18,
        "mainTopic": "Síndrome de Ovario Poliquístico",
        "moderator": "Dr. Marco António Guerra Torres",
        "firstName": "José Armando",
        "lastName": "Quintanilla Siller",
        "email": null,
        "mainSpeciality": "Endocrinología",
        "gender": "Male",
        "profileImg": "assets/img/doctors/10.png",
        "phone": "81-3443-9300",
        "congressTopic": "Aspectos para el diagnóstico de Síndrome de Ovario Poliquístico",
        "congressTimeFrom": "16:00",
        "congressTimeTo": "16:40",
        "presentationTime": "40 min",
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
            "Nutrición",
        ],
        "socialMedia": {
            "doctoralia": "https://www.doctoralia.com.mx/jose-armando-quintanilla-siller/endocrinologo-internista/nuevo-leon"
        }
    }, {
        "id": 19,
        "mainTopic": "Síndrome de Ovario Poliquístico",
        "moderator": "Dr. Marco António Guerra Torres",
        "firstName": "Marco Antonio",
        "lastName": "Guerra Torres",
        "email": null,
        "mainSpeciality": "Endocrinología",
        "gender": "Male",
        "profileImg": "assets/img/doctors/4.png",
        "phone": "81-3403-2096",
        "congressTopic": "Resistencia a la insulina, marcadores sensibles en el Síndrome de Ovario poliquístico",
        "congressTimeFrom": "16:40",
        "congressTimeTo": "17:20",
        "presentationTime": "40 min",
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
    }, {
        "id": 20,
        "mainTopic": "Síndrome de Ovario Poliquístico",
        "moderator": "Dr. Marco António Guerra Torres",
        "firstName": "Ana Eugenia",
        "lastName": "Teniente Sánchez",
        "email": null,
        "mainSpeciality": "Endocrinología",
        "gender": "Female",
        "profileImg": "assets/img/doctors/1.png",
        "phone": "81-1126-8535",
        "congressTopic": "Manejo del hiperandrogenismo en el Síndrome de Ovario Poliquístico",
        "congressTimeFrom": "17:30",
        "congressTimeTo": "18:10",
        "presentationTime": "40 min",
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
            "Hipertensión",
        ],
        "socialMedia": {
            "doctoralia": "https://www.doctoralia.com.mx/ana-eugenia-teniente-sanchez/endocrinologo-internista/nuevo-leon"
        }
    }, {
        "id": 21,
        "mainTopic": "Síndrome de Ovario Poliquístico",
        "moderator": "Dr. Marco António Guerra Torres",
        "firstName": "Estefanía",
        "lastName": "Esparza Corona",
        "email": null,
        "mainSpeciality": "Nutrióloga",
        "gender": "Female",
        "profileImg": "assets/img/doctors/5.png",
        "phone": "81-8307-7131",
        "congressTopic": "Nutrición y suplementación en el Síndrome de Ovario Poliquístico",
        "congressTimeFrom": "18:10",
        "congressTimeTo": "18:50",
        "presentationTime": "40 min",
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
            "Enfermedades Gastrointestinales",
        ],
        "socialMedia": {
            "doctoralia": "https://www.doctoralia.com.mx/estefania-de-fatima-esparza-corona/nutriologo-clinico/nuevo-leon"
        }
    }, {
        "id": 22,
        "mainTopic": "Actualización en Diabetes",
        "moderator": "Dra. Leonor Mireles Zavala",
        "firstName": "Elizabeth",
        "lastName": "Olavide Agulilar",
        "email": null,
        "mainSpeciality": "Endocrinología",
        "gender": "Female",
        "profileImg": "assets/img/doctors/3.png",
        "phone": "81-8143-0383",
        "congressTopic": "Calculando y decidiendo tratamiento conforme el Riesgo Cardiovascular en mi pacientes con Diabetes tipo 2:Casos clínicos",
        "congressTimeFrom": "16:00",
        "congressTimeTo": "16:30",
        "presentationTime": "30 min",
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
            "Hipotiroidismo en adultos",
        ],
        "socialMedia": {
            "doctoralia": "https://www.doctoralia.com.mx/elizabeth-olavide-aguilar/endocrinologo-internista/monterrey"
        }
    }, {
        "id": 23,
        "mainTopic": "Actualización en Diabetes",
        "moderator": "Dra. Leonor Mireles Zavala",
        "firstName": "Paola",
        "lastName": "Portillo Sanchez",
        "email": null,
        "mainSpeciality": "Endocrinología",
        "gender": "Female",
        "profileImg": "assets/img/logos/logo.png",
        "logoselogo": null,
        "congressTopic": "Diabetes y Obesidad: abordaje e importancia del manejo aplicado a casos clínicos.",
        "congressTimeFrom": "16:45",
        "congressTimeTo": "17:15",
        "presentationTime": "30 min",
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
    }, {
        "id": 24,
        "mainTopic": "Actualización en Diabetes",
        "moderator": "Dra. Leonor Mireles Zavala",
        "firstName": "Leonor Guadalupe",
        "lastName": "Mireles Zavala",
        "email": null,
        "mainSpeciality": "Endocrinología",
        "gender": "Female",
        "profileImg": "assets/img/doctors/2.png",
        "phone": "81-1477-0428",
        "congressTopic": "Diabetes y cambios al estilo de vida: revisión y aplicación de las nuevas guías.",
        "congressTimeFrom": "17:30",
        "congressTimeTo": "18:00",
        "presentationTime": "30 min",
        "address": {
            "completeAddress": "Ecuador #2331",
            "suburb": "Balcones de Galerias",
            "state": "Nuevo León",
            "town": "Monterrey",
            "zipcode": "64620"
        },
        "specialities": [
            "Diabetes",
            "Obesidad",
            "Enfermedades de la tiroides",
            "Deficiencia de la hormona del crecimiento",
        ],
        "socialMedia": {
            "doctoralia": "https://www.doctoralia.com.mx/leonor-g-mireles-zavala/endocrinologo-internista/monterrey"
        }
    }, {
        "id": 25,
        "mainTopic": "Actualización en Diabetes",
        "moderator": "Dra. Leonor Mireles Zavala",
        "firstName": "Juan Carlos",
        "lastName": "Garnica Cuellar",
        "email": null,
        "mainSpeciality": "Endocrinología",
        "gender": "Male",
        "profileImg": "assets/img/logos/logo.png",
        "phone": "55 5548 9483",
        "congressTopic": "Evaluación y tratamiento del riesgo residual de la enfermedad renal crónica en el paciente con Diabetes tipo 2. Casos clínicos.",
        "congressTimeFrom": "18:15",
        "congressTimeTo": "18:45",
        "presentationTime": "30 min",
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
            "Biología de la Reproducción Humana",
        ],
        "socialMedia": {
            "doctoralia": "https://www.doctoralia.com.mx/juan-carlos-garnica-cuellar/endocrinologo/gustavo-a-madero"
        }
    },
];

// Table headers
const tableHeaders = ["", "Full Name", "Speciality", "State", "Main Topic", "Phone", ""];

// Filters
const searchByLastNameInput = document.getElementById('searchByLastName');
const searchByCityInput = document.getElementById('searchByCity');
const searchBySpecialitySelect = document.getElementById('searchBySpeciality');
const searchByEntitySelect = document.getElementById('searchByEntity');

// Btns
const clearFiltersBtn = document.querySelector('#clearFiltersBtn');
const searchFilterBtn = document.querySelector('#searchFilterBtn');
const modalBtn = document.querySelector("#showDoctorModal");
const closeButton = document.querySelector(".btn-close");

// Results
const results = document.getElementById('searchResults');
var displayResultsAsCard = false; // 

// Pagination
var paginationDoctors = [];
var currentPage = 1;
var prevIndexSelected = -1;
var currIndexSelected = 1;
const doctorsPerPage = 6;
const paginationContainer = document.getElementById('pagination');
const prevPageButton = document.getElementById('prevPageButton');
const nextPageButton = document.getElementById('nextPageButton');
const paginationSection = document.getElementById('pagination-section');
const paginationLinks = paginationContainer.getElementsByClassName('page-item');
var totalPages = Math.ceil(doctors.length / doctorsPerPage);

// Modal
const modal = document.getElementById("showDoctorModal");
const bootstrapModal = new bootstrap.Modal(document.getElementById("showDoctorModal"));
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
prevPageButton.addEventListener('click', prevPage);
nextPageButton.addEventListener('click', nextPage);
clearFiltersBtn.addEventListener('click', clearSearchResults);
searchFilterBtn.addEventListener('click', searchSpecialist);
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

    if (!lastName && !city && specialityValue === '0' && entityValue === '0') {
        paginationDoctors = doctors;
        return displayResults(doctors);
    }

    const speciality = searchBySpecialitySelect.options[searchBySpecialitySelect.selectedIndex].textContent.toLowerCase();
    const entity = searchByEntitySelect.options[searchByEntitySelect.selectedIndex].textContent.toLowerCase();

    const filteredDoctors = doctors.filter(doctor => {
        const doctorLastName = doctor.lastName.toLowerCase();
        const doctorCity = doctor.address.town.toLowerCase();
        const doctorSpeciality = doctor.mainSpeciality.toLowerCase();
        const doctorEntity = doctor.address.state.toLowerCase();

        if ((lastName && !doctorLastName.includes(lastName)) ||
            (city && !doctorCity.includes(city)) ||
            (specialityValue !== '0' && doctorSpeciality !== speciality) ||
            (entityValue !== '0' && doctorEntity !== entity)) {
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
    results.innerHTML = '';


    // 4. Doctors array validation
    if (doctorResults.length === 0) {
        results.innerHTML = `
          <div class="alert alert-warning mt-3" role="alert">
            No results found.
          </div>
        `;

        showPaginationSection(false);
        return;
    }

    // 5. Add results
    let cardsHtml = displayResultsAsCard ? showDoctorsAsCards(doctorsForPage) : showDoctorsAsList(doctorsForPage);

    results.innerHTML = cardsHtml;

    // 6. Update the pagination buttons
    loadPagination(totalPages);
    updatePagination(totalPages);
    showPaginationSection(true);
};

function loadPagination(totalPages) {
    // Generate the HTML for the pagination links
    let paginationHtml = '';

    for (let i = 1; i <= totalPages; i++) {
        paginationHtml += `<li class="page-item ${i === currentPage ? 'active' : ''}" id="on-paginate"><a class="page-link" onclick="onPaginateEvent(${i})" href="#busqueda">${i}</a></li>`;
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
    paginationSection.style.visibility = state ? 'visible' : 'hidden';
}

function onPaginateEvent(index) {
    prevIndexSelected = index - 1;
    currIndexSelected = index;
    currentPage = currIndexSelected;
    displayResults(paginationDoctors);
}

function clearSearchResults() {
    // Reset all input fields and select dropdowns
    searchByLastNameInput.value = '';
    searchByCityInput.value = '';
    searchBySpecialitySelect.selectedIndex = 0;
    searchByEntitySelect.selectedIndex = 0;

    results.innerHTML = '';

    // hide pagination
    showPaginationSection(false);
}

function changeResultViewState(state) {
    displayResultsAsCard = state;
    displayResults(paginationDoctors);
}

function showDoctorsAsList(doctorsForPage) {
    // 1. Clear previous results
    if (!showDoctorsAsCards) results.innerHTML = '';

    var result = '';
    doctorsForPage.forEach((doctor, index) => {

        const doctoralia = doctor.socialMedia ? doctor.socialMedia.doctoralia ? doctor.socialMedia.doctoralia : null : null;
        // Single Advisor
        result += `
            <div class="col-sm-4">
                <div class="single_advisor_profile wow fadeInUp" data-wow-delay="0.2s" style="visibility: visible; animation-delay: 0.2s; animation-name: fadeInUp;">
                    <!-- Team Thumb-->
                    <div class="advisor_thumb"><img src="${doctor.profileImg}" alt="">
                        <!-- Social Info-->
                        <div class="social-info">
                            <a title="${doctor.phone ? doctor.phone : '##-####-####'}" target="_blank">
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
                                    <h6>${doctor.firstName} ${doctor.lastName}</h6>
                                    <p class="designation">${doctor.mainSpeciality}</p>
                                </div>
                                <div class="col text-end">
                                    <button type="button" class="btn btn-sm btn-advisor" data-toggle="modal" data-target="#showDoctorModal" onClick="showModalListener(${doctor.id})">
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

function showDoctorsAsCards(doctorsForPage) {
    // 1. Clear previous results
    if (showDoctorsAsCards) results.innerHTML = '';

    var headers = '';
    tableHeaders.forEach((header) => {
        headers += `<th scope = "col" > ${header}</th> `;
    });

    var data = '';
    doctorsForPage.forEach((doctor, index) => {
        data += `
            <tr>
                <th scope="row"><img src="${doctor.profileImg}" class="img-fluid doctor-avatar" style="max-width: 40px;" /></th>
                <td>${doctor.firstName} ${doctor.lastName}</td>
                <td>${doctor.mainSpeciality}</td>
                <td>${doctor.address.state}</td>
                <td>${doctor.mainTopic}</td>
                <td>${doctor.address.state}</td>
                <td>
                    <button type="button" class="btn btn-primary btn-sm" data-toggle="modal" data-target="#showDoctorModal" onClick="showModalListener(${doctor.id})">Ver más</button>
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
        const name = (modalDoctor.gender === "Male" ? "Dr. " : "Dra. ") + modalDoctor.firstName + " " + modalDoctor.lastName;

        title.textContent = name;
        topic.textContent = modalDoctor.congressTopic ? modalDoctor.congressTopic : "Not defined yet";
        congressTimeFrom.textContent = modalDoctor.congressTimeFrom ? modalDoctor.congressTimeFrom + "-" + modalDoctor.congressTimeTo : "Not defined yet";
        speciality.textContent = modalDoctor.speciality ? modalDoctor.mainSpeciality : "Not defined yet";

        moderator.textContent = modalDoctor.moderator ? modalDoctor.moderator : "Not defined yed";
        state.textContent = modalDoctor.address.state ? modalDoctor.address.state + ", " + modalDoctor.address.town : "Not specified";

        specialities.textContent = modalDoctor.specialities.length > 0 ? modalDoctor.specialities.join(", ") : "Not specified";
        addressDirection.textContent = modalDoctor.address.completeAddress + ", " + modalDoctor.address.zipcode;
    }

    bootstrapModal.show();
}


