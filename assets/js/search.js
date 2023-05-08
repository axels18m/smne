//import { doctors, states, specialists } from "../mocks/searchMock";
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

/*
const fullStates = {
    "Aguascalientes": ["Aguascalientes", "Asientos", "Calvillo", "Cosio", "El Llano", "Jesus Maria", "Pabellon de Arteaga", "Rincon de Romos", "San Francisco de los Romo", "San Jose de Gracia", "Tepezala"],
    "Baja California": ["Ensenada", "Mexicali", "Playas de Rosarito", "Tecate", "Tijuana"],
    "Baja California Sur": ["Comondu", "La Paz", "Loreto", "Los Cabos", "Mulege"],
    "Campeche": ["Calakmul", "Calkini", "Campeche", "Candelaria", "Carmen", "Champoton", "Escarcega", "Hecelchakan", "Hopelchen", "Palizada", "Tenabo"],
    "Coahuila": ["Abasolo", "Acuna", "Allende", "Arteaga", "Candela", "Castanos", "Cuatro Cienegas", "Escobedo", "Francisco I. Madero", "Frontera", "General Cepeda", "Guerrero", "Hidalgo", "Jimenez", "Juarez", "Lamadrid", "Matamoros", "Monclova", "Morelos", "Muzquiz", "Nadadores", "Nava", "Ocampo", "Parras", "Piedras Negras", "Progreso", "Ramos Arizpe", "Sabinas", "Sacramento", "Saltillo", "San Buenaventura", "San Juan de Sabinas", "San Pedro", "Sierra Mojada", "Torreon", "Viesca", "Villa Union", "Zaragoza"],
    "Colima": ["Armeria", "Colima", "Comala", "Coquimatlan", "Cuauhtemoc", "Ixtlahuacan", "Manzanillo", "Minatitlan", "Tecoman", "Villa de Alvarez"],
    "Chiapas": ["Acacoyagua", "Acala", "Acapetahua", "Aldama", "Altamirano", "Amatenango de la Frontera", "Amatenango del Valle", "Amatan", "Angel Albino Corzo", "Arriaga", "Bejucal de Ocampo", "Bella Vista", "Benemerito de las Americas", "Berriozabal", "Bochil", "Cacahoatan", "Capitan Luis Angel Vidal", "Catazaja", "Chalchihuitan", "Chamula", "Chanal", "Chapultenango", "Chenalho", "Chiapa de Corzo", "Chiapilla", "Chicoasen", "Chicomuselo", "Chilon", "Cintalapa", "Coapilla", "Comitan de Dominguez", "Copainala", "El Bosque", "El Parral", "El Porvenir", "Emiliano Zapata", "Escuintla", "Francisco Leon", "Frontera Comalapa", "Frontera Hidalgo", "Huehuetan", "Huitiupan", "Huixtla", "Huixtan", "Ixhuatan", "Ixtacomitan", "Ixtapa", "Ixtapangajoya", "Jiquipilas", "Jitotol", "Juarez", "La Concordia", "La Grandeza", "La Independencia", "La Libertad", "La Trinitaria", "Larrainzar", "Las Margaritas", "Las Rosas", "Mapastepec", "Maravilla Tenejapa", "Marques de Comillas", "Mazapa de Madero", "Mazatan", "Metapa", "Mezcalapa", "Mitontic", "Montecristo de Guerrero", "Motozintla", "Nicolas Ruiz", "Ocosingo", "Ocotepec", "Ocozocoautla de Espinosa", "Ostuacan", "Osumacinta", "Oxchuc", "Palenque", "Pantelho", "Pantepec", "Pichucalco", "Pijijiapan", "Pueblo Nuevo Solistahuacan", "Rayon", "Reforma", "Rincon Chamula San Pedro", "Sabanilla", "Salto de Agua", "San Andres Duraznal", "San Cristobal de las Casas", "San Fernando", "San Juan Cancuc", "San Lucas", "Santiago el Pinar", "Siltepec", "Simojovel", "Sitala", "Socoltenango", "Solosuchiapa", "Soyalo", "Suchiapa", "Suchiate", "Sunuapa", "Tapachula", "Tapalapa", "Tapilula", "Tecpatan", "Tenejapa", "Teopisca", "Tila", "Tonala", "Totolapa", "Tumbala", "Tuxtla Chico", "Tuxtla Gutierrez", "Tuzantan", "Tzimol", "Union Juarez", "Venustiano Carranza", "Villa Comaltitlan", "Villa Corzo", "Villaflores", "Yajalon", "Zinacantan"],
    "Chihuahua": ["Ahumada", "Aldama", "Allende", "Aquiles Serdan", "Ascension", "Bachiniva", "Balleza", "Batopilas de Manuel Gomez Morin", "Bocoyna", "Buenaventura", "Camargo", "Carichi", "Casas Grandes", "Chihuahua", "Chinipas", "Coronado", "Coyame del Sotol", "Cuauhtemoc", "Cusihuiriachi", "Delicias", "Dr. Belisario Dominguez", "El Tule", "Galeana", "Gran Morelos", "Guachochi", "Guadalupe y Calvo", "Guadalupe", "Guazapares", "Guerrero", "Gomez Farias", "Hidalgo del Parral", "Huejotitan", "Ignacio Zaragoza", "Janos", "Jimenez", "Julimes", "Juarez", "La Cruz", "Lopez", "Madera", "Maguarichi", "Manuel Benavides", "Matachi", "Matamoros", "Meoqui", "Morelos", "Moris", "Namiquipa", "Nonoava", "Nuevo Casas Grandes", "Ocampo", "Ojinaga", "Praxedis G. Guerrero", "Riva Palacio", "Rosales", "Rosario", "San Francisco de Borja", "San Francisco de Conchos", "San Francisco del Oro", "Santa Barbara", "Santa Isabel", "Satevo", "Saucillo", "Temosachic", "Urique", "Uruachi", "Valle de Zaragoza"],
    "Ciudad de Mexico": ["Alvaro Obregon", "Azcapotzalco", "Benito Juarez", "Coyoacan", "Cuajimalpa de Morelos", "Cuauhtemoc", "Gustavo A. Madero", "Iztacalco", "Iztapalapa", "La Magdalena Contreras", "Miguel Hidalgo", "Milpa Alta", "Tlalpan", "Tlahuac", "Venustiano Carranza", "Xochimilco"],
    "Durango": ["Canatlan", "Canelas", "Coneto de Comonfort", "Cuencame", "Durango", "El Oro", "General Simon Bolivar", "Gomez Palacio", "Guadalupe Victoria", "Guanacevi", "Hidalgo", "Inde", "Lerdo", "Mapimi", "Mezquital", "Nazas", "Nombre de Dios", "Nuevo Ideal", "Ocampo", "Otaez", "Panuco de Coronado", "Penon Blanco", "Poanas", "Pueblo Nuevo", "Rodeo", "San Bernardo", "San Dimas", "San Juan de Guadalupe", "San Juan del Rio", "San Luis del Cordero", "San Pedro del Gallo", "Santa Clara", "Santiago Papasquiaro", "Suchil", "Tamazula", "Tepehuanes", "Tlahualilo", "Topia", "Vicente Guerrero"],
    "Guanajuato": ["Abasolo", "Acambaro", "Apaseo el Alto", "Apaseo el Grande", "Atarjea", "Celaya", "Comonfort", "Coroneo", "Cortazar", "Cueramaro", "Doctor Mora", "Dolores Hidalgo Cuna de la Independencia Nacional", "Guanajuato", "Huanimaro", "Irapuato", "Jaral del Progreso", "Jerecuaro", "Leon", "Manuel Doblado", "Moroleon", "Ocampo", "Penjamo", "Pueblo Nuevo", "Purisima del Rincon", "Romita", "Salamanca", "Salvatierra", "San Diego de la Union", "San Felipe", "San Francisco del Rincon", "San Jose Iturbide", "San Luis de la Paz", "San Miguel de Allende", "Santa Catarina", "Santa Cruz de Juventino Rosas", "Santiago Maravatio", "Silao de la Victoria", "Tarandacuao", "Tarimoro", "Tierra Blanca", "Uriangato", "Valle de Santiago", "Victoria", "Villagran", "Xichu", "Yuriria"],
    "Guerrero": ["Acapulco de Juarez", "Acatepec", "Ahuacuotzingo", "Ajuchitlan del Progreso", "Alcozauca de Guerrero", "Alpoyeca", "Apaxtla", "Arcelia", "Atenango del Rio", "Atlamajalcingo del Monte", "Atlixtac", "Atoyac de Alvarez", "Ayutla de los Libres", "Azoyu", "Benito Juarez", "Buenavista de Cuellar", "Chilapa de Alvarez", "Chilpancingo de los Bravo", "Coahuayutla de Jose Maria Izazaga", "Cochoapa el Grande", "Cocula", "Copala", "Copalillo", "Copanatoyac", "Coyuca de Benitez", "Coyuca de Catalan", "Cuajinicuilapa", "Cualac", "Cuautepec", "Cuetzala del Progreso", "Cutzamala de Pinzon", "Eduardo Neri", "Florencio Villarreal", "General Canuto A. Neri", "General Heliodoro Castillo", "Huamuxtitlan", "Huitzuco de los Figueroa", "Iguala de la Independencia", "Igualapa", "Iliatenco", "Ixcateopan de Cuauhtemoc", "Jose Joaquin de Herrera", "Juan R. Escudero", "Juchitan", "La Union de Isidoro Montes de Oca", "Leonardo Bravo", "Malinaltepec", "Marquelia", "Martir de Cuilapan", "Metlatonoc", "Mochitlan", "Olinala", "Ometepec", "Pedro Ascencio Alquisiras", "Petatlan", "Pilcaya", "Pungarabato", "Quechultenango", "San Luis Acatlan", "San Marcos", "San Miguel Totolapan", "Taxco de Alarcon", "Tecoanapa", "Tecpan de Galeana", "Teloloapan", "Tepecoacuilco de Trujano", "Tetipac", "Tixtla de Guerrero", "Tlacoachistlahuaca", "Tlacoapa", "Tlalchapa", "Tlalixtaquilla de Maldonado", "Tlapa de Comonfort", "Tlapehuala", "Xalpatlahuac", "Xochihuehuetlan", "Xochistlahuaca", "Zapotitlan Tablas", "Zihuatanejo de Azueta", "Zirandaro", "Zitlala"],
    "Hidalgo": ["Acatlan", "Acaxochitlan", "Actopan", "Agua Blanca de Iturbide", "Ajacuba", "Alfajayucan", "Almoloya", "Apan", "Atitalaquia", "Atlapexco", "Atotonilco de Tula", "Atotonilco el Grande", "Calnali", "Cardonal", "Chapantongo", "Chapulhuacan", "Chilcuautla", "Cuautepec de Hinojosa", "El Arenal", "Eloxochitlan", "Emiliano Zapata", "Epazoyucan", "Francisco I. Madero", "Huasca de Ocampo", "Huautla", "Huazalingo", "Huehuetla", "Huejutla de Reyes", "Huichapan", "Ixmiquilpan", "Jacala de Ledezma", "Jaltocan", "Juarez Hidalgo", "La Mision", "Lolotla", "Metepec", "Metztitlan", "Mineral de la Reforma", "Mineral del Chico", "Mineral del Monte", "Mixquiahuala de Juarez", "Molango de Escamilla", "Nicolas Flores", "Nopala de Villagran", "Omitlan de Juarez", "Pachuca de Soto", "Pacula", "Pisaflores", "Progreso de Obregon", "San Agustin Metzquititlan", "San Agustin Tlaxiaca", "San Bartolo Tutotepec", "San Felipe Orizatlan", "San Salvador", "Santiago Tulantepec de Lugo Guerrero", "Santiago de Anaya", "Singuilucan", "Tasquillo", "Tecozautla", "Tenango de Doria", "Tepeapulco", "Tepehuacan de Guerrero", "Tepeji del Rio de Ocampo", "Tepetitlan", "Tetepango", "Tezontepec de Aldama", "Tianguistengo", "Tizayuca", "Tlahuelilpan", "Tlahuiltepa", "Tlanalapa", "Tlanchinol", "Tlaxcoapan", "Tolcayuca", "Tula de Allende", "Tulancingo de Bravo", "Villa de Tezontepec", "Xochiatipan", "Xochicoatlan", "Yahualica", "Zacualtipan de Angeles", "Zapotlan de Juarez", "Zempoala", "Zimapan"],
    "Jalisco": ["Acatic", "Acatlan de Juarez", "Ahualulco de Mercado", "Amacueca", "Amatitan", "Ameca", "Arandas", "Atemajac de Brizuela", "Atengo", "Atenguillo", "Atotonilco el Alto", "Atoyac", "Autlan de Navarro", "Ayotlan", "Ayutla", "Bolanos", "Cabo Corrientes", "Canadas de Obregon", "Casimiro Castillo", "Chapala", "Chimaltitan", "Chiquilistlan", "Cihuatlan", "Cocula", "Colotlan", "Concepcion de Buenos Aires", "Cuautitlan de Garcia Barragan", "Cuautla", "Cuquio", "Degollado", "Ejutla", "El Arenal", "El Grullo", "El Limon", "El Salto", "Encarnacion de Diaz", "Etzatlan", "Gomez Farias", "Guachinango", "Guadalajara", "Hostotipaquillo", "Huejucar", "Huejuquilla el Alto", "Ixtlahuacan de los Membrillos", "Ixtlahuacan del Rio", "Jalostotitlan", "Jamay", "Jesus Maria", "Jilotlan de los Dolores", "Jocotepec", "Juanacatlan", "Juchitlan", "La Barca", "La Huerta", "La Manzanilla de la Paz", "Lagos de Moreno", "Magdalena", "Mascota", "Mazamitla", "Mexticacan", "Mezquitic", "Mixtlan", "Ocotlan", "Ojuelos de Jalisco", "Pihuamo", "Poncitlan", "Puerto Vallarta", "Quitupan", "San Cristobal de la Barranca", "San Diego de Alejandria", "San Gabriel", "San Ignacio Cerro Gordo", "San Juan de los Lagos", "San Juanito de Escobedo", "San Julian", "San Marcos", "San Martin Hidalgo", "San Martin de Bolanos", "San Miguel el Alto", "San Pedro Tlaquepaque", "San Sebastian del Oeste", "Santa Maria de los Angeles", "Santa Maria del Oro", "Sayula", "Tala", "Talpa de Allende", "Tamazula de Gordiano", "Tapalpa", "Tecalitlan", "Techaluta de Montenegro", "Tecolotlan", "Tenamaxtlan", "Teocaltiche", "Teocuitatlan de Corona", "Tepatitlan de Morelos", "Tequila", "Teuchitlan", "Tizapan el Alto", "Tlajomulco de Zuniga", "Toliman", "Tomatlan", "Tonala", "Tonaya", "Tonila", "Totatiche", "Tototlan", "Tuxcacuesco", "Tuxcueca", "Tuxpan", "Union de San Antonio", "Union de Tula", "Valle de Guadalupe", "Valle de Juarez", "Villa Corona", "Villa Guerrero", "Villa Hidalgo", "Villa Purificacion", "Yahualica de Gonzalez Gallo", "Zacoalco de Torres", "Zapopan", "Zapotiltic", "Zapotitlan de Vadillo", "Zapotlan del Rey", "Zapotlan el Grande", "Zapotlanejo"],
    "Estado de Mexico": ["Acambay de Ruiz Castaneda", "Acolman", "Aculco", "Almoloya de Alquisiras", "Almoloya de Juarez", "Almoloya del Rio", "Amanalco", "Amatepec", "Amecameca", "Apaxco", "Atenco", "Atizapan de Zaragoza", "Atizapan", "Atlacomulco", "Atlautla", "Axapusco", "Ayapango", "Calimaya", "Capulhuac", "Chalco", "Chapa de Mota", "Chapultepec", "Chiautla", "Chicoloapan", "Chiconcuac", "Chimalhuacan", "Coacalco de Berriozabal", "Coatepec Harinas", "Cocotitlan", "Coyotepec", "Cuautitlan Izcalli", "Cuautitlan", "Donato Guerra", "Ecatepec de Morelos", "Ecatzingo", "El Oro", "Huehuetoca", "Hueypoxtla", "Huixquilucan", "Isidro Fabela", "Ixtapaluca", "Ixtapan de la Sal", "Ixtapan del Oro", "Ixtlahuaca", "Jaltenco", "Jilotepec", "Jilotzingo", "Jiquipilco", "Jocotitlan", "Joquicingo", "Juchitepec", "La Paz", "Lerma", "Luvianos", "Malinalco", "Melchor Ocampo", "Metepec", "Mexicaltzingo", "Morelos", "Naucalpan de Juarez", "Nextlalpan", "Nezahualcoyotl", "Nicolas Romero", "Nopaltepec", "Ocoyoacac", "Ocuilan", "Otumba", "Otzoloapan", "Otzolotepec", "Ozumba", "Papalotla", "Polotitlan", "Rayon", "San Antonio la Isla", "San Felipe del Progreso", "San Jose del Rincon", "San Martin de las Piramides", "San Mateo Atenco", "San Simon de Guerrero", "Santo Tomas", "Soyaniquilpan de Juarez", "Sultepec", "Tecamac", "Tejupilco", "Temamatla", "Temascalapa", "Temascalcingo", "Temascaltepec", "Temoaya", "Tenancingo", "Tenango del Aire", "Tenango del Valle", "Teoloyucan", "Teotihuacan", "Tepetlaoxtoc", "Tepetlixpa", "Tepotzotlan", "Tequixquiac", "Texcaltitlan", "Texcalyacac", "Texcoco", "Tezoyuca", "Tianguistenco", "Timilpan", "Tlalmanalco", "Tlalnepantla de Baz", "Tlatlaya", "Toluca", "Tonanitla", "Tonatico", "Tultepec", "Tultitlan", "Valle de Bravo", "Valle de Chalco Solidaridad", "Villa Guerrero", "Villa Victoria", "Villa de Allende", "Villa del Carbon", "Xalatlaco", "Xonacatlan", "Zacazonapan", "Zacualpan", "Zinacantepec", "Zumpahuacan", "Zumpango"],
    "Michoacan": ["Acuitzio", "Aguililla", "Alvaro Obregon", "Angamacutiro", "Angangueo", "Apatzingan", "Aporo", "Aquila", "Ario", "Arteaga", "Brisenas", "Buenavista", "Caracuaro", "Charapan", "Charo", "Chavinda", "Cheran", "Chilchota", "Chinicuila", "Chucandiro", "Churintzio", "Churumuco", "Coahuayana", "Coalcoman de Vazquez Pallares", "Coeneo", "Cojumatlan de Regules", "Contepec", "Copandaro", "Cotija", "Cuitzeo", "Ecuandureo", "Epitacio Huerta", "Erongaricuaro", "Gabriel Zamora", "Hidalgo", "Huandacareo", "Huaniqueo", "Huetamo", "Huiramba", "Indaparapeo", "Irimbo", "Ixtlan", "Jacona", "Jimenez", "Jiquilpan", "Jose Sixto Verduzco", "Juarez", "Jungapeo", "La Huacana", "La Piedad", "Lagunillas", "Lazaro Cardenas", "Los Reyes", "Madero", "Maravatio", "Marcos Castellanos", "Morelia", "Morelos", "Mugica", "Nahuatzen", "Nocupetaro", "Nuevo Parangaricutiro", "Nuevo Urecho", "Numaran", "Ocampo", "Pajacuaran", "Panindicuaro", "Paracho", "Paracuaro", "Patzcuaro", "Penjamillo", "Periban", "Purepero", "Puruandiro", "Querendaro", "Quiroga", "Sahuayo", "Salvador Escalante", "San Lucas", "Santa Ana Maya", "Senguio", "Susupuato", "Tacambaro", "Tancitaro", "Tangamandapio", "Tangancicuaro", "Tanhuato", "Taretan", "Tarimbaro", "Tepalcatepec", "Tingambato", "Tinguindin", "Tiquicheo de Nicolas Romero", "Tlalpujahua", "Tlazazalca", "Tocumbo", "Tumbiscatio", "Turicato", "Tuxpan", "Tuzantla", "Tzintzuntzan", "Tzitzio", "Uruapan", "Venustiano Carranza", "Villamar", "Vista Hermosa", "Yurecuaro", "Zacapu", "Zamora", "Zinaparo", "Zinapecuaro", "Ziracuaretiro", "Zitacuaro"],
    "Morelos": ["Amacuzac", "Atlatlahucan", "Axochiapan", "Ayala", "Coatlan del Rio", "Cuautla", "Cuernavaca", "Emiliano Zapata", "Huitzilac", "Jantetelco", "Jiutepec", "Jojutla", "Jonacatepec de Leandro Valle", "Mazatepec", "Miacatlan", "Ocuituco", "Puente de Ixtla", "Temixco", "Temoac", "Tepalcingo", "Tepoztlan", "Tetecala", "Tetela del Volcan", "Tlalnepantla", "Tlaltizapan de Zapata", "Tlaquiltenango", "Tlayacapan", "Totolapan", "Xochitepec", "Yautepec", "Yecapixtla", "Zacatepec", "Zacualpan de Amilpas"],
    "Nayarit": ["Acaponeta", "Ahuacatlan", "Amatlan de Canas", "Bahia de Banderas", "Compostela", "Del Nayar", "Huajicori", "Ixtlan del Rio", "Jala", "La Yesca", "Rosamorada", "Ruiz", "San Blas", "San Pedro Lagunillas", "Santa Maria del Oro", "Santiago Ixcuintla", "Tecuala", "Tepic", "Tuxpan", "Xalisco"],
    "Nuevo Leon": ["Abasolo", "Agualeguas", "Allende", "Anahuac", "Apodaca", "Aramberri", "Bustamante", "Cadereyta Jimenez", "Cerralvo", "China", "Cienega de Flores", "Doctor Arroyo", "Doctor Coss", "Doctor Gonzalez", "El Carmen", "Galeana", "Garcia", "General Bravo", "General Escobedo", "General Teran", "General Trevino", "General Zaragoza", "General Zuazua", "Guadalupe", "Hidalgo", "Higueras", "Hualahuises", "Iturbide", "Juarez", "Lampazos de Naranjo", "Linares", "Los Aldamas", "Los Herreras", "Los Ramones", "Marin", "Melchor Ocampo", "Mier y Noriega", "Mina", "Montemorelos", "Monterrey", "Paras", "Pesqueria", "Rayones", "Sabinas Hidalgo", "Salinas Victoria", "San Nicolas de los Garza", "San Pedro Garza Garcia", "Santa Catarina", "Santiago", "Vallecillo", "Villaldama"],
    "Oaxaca": ["Abejones", "Acatlan de Perez Figueroa", "Animas Trujano", "Asuncion Cacalotepec", "Asuncion Cuyotepeji", "Asuncion Ixtaltepec", "Asuncion Nochixtlan", "Asuncion Ocotlan", "Asuncion Tlacolulita", "Ayoquezco de Aldama", "Ayotzintepec", "Calihuala", "Candelaria Loxicha", "Capulalpam de Mendez", "Chahuites", "Chalcatongo de Hidalgo", "Chiquihuitlan de Benito Juarez", "Cienega de Zimatlan", "Ciudad Ixtepec", "Coatecas Altas", "Coicoyan de las Flores", "Concepcion Buenavista", "Concepcion Papalo", "Constancia del Rosario", "Cosolapa", "Cosoltepec", "Cuilapam de Guerrero", "Cuna de la Independencia de Oaxaca", "Cuyamecalco Villa de Zaragoza", "El Barrio de la Soledad", "El Espinal", "Eloxochitlan de Flores Magon", "Fresnillo de Trujano", "Guadalupe Etla", "Guadalupe de Ramirez", "Guelatao de Juarez", "Guevea de Humboldt", "Heroica Ciudad de Ejutla de Crespo", "Heroica Ciudad de Huajuapan de Leon", "Heroica Ciudad de Juchitan de Zaragoza", "Heroica Ciudad de Tlaxiaco", "Heroica Villa Tezoatlan de Segura y Luna", "Huautepec", "Huautla de Jimenez", "Ixpantepec Nieves", "Ixtlan de Juarez", "La Compania", "La Pe", "La Reforma", "La Trinidad Vista Hermosa", "Loma Bonita", "Magdalena Apasco", "Magdalena Jaltepec", "Magdalena Mixtepec", "Magdalena Ocotlan", "Magdalena Penasco", "Magdalena Teitipac", "Magdalena Tequisistlan", "Magdalena Tlacotepec", "Magdalena Yodocono de Porfirio Diaz", "Magdalena Zahuatlan", "Mariscala de Juarez", "Martires de Tacubaya", "Matias Romero Avendano", "Mazatlan Villa de Flores", "Mesones Hidalgo", "Miahuatlan de Porfirio Diaz", "Mixistlan de la Reforma", "Monjas", "Natividad", "Nazareno Etla", "Nejapa de Madero", "Nuevo Zoquiapam", "Oaxaca de Juarez", "Ocotlan de Morelos", "Pinotepa de Don Luis", "Pluma Hidalgo", "Putla Villa de Guerrero", "Reforma de Pineda", "Reyes Etla", "Rojas de Cuauhtemoc", "Salina Cruz", "San Agustin Amatengo", "San Agustin Atenango", "San Agustin Chayuco", "San Agustin Etla", "San Agustin Loxicha", "San Agustin Tlacotepec", "San Agustin Yatareni", "San Agustin de las Juntas", "San Andres Cabecera Nueva", "San Andres Dinicuiti", "San Andres Huaxpaltepec", "San Andres Huayapam", "San Andres Ixtlahuaca", "San Andres Lagunas", "San Andres Nuxino", "San Andres Paxtlan", "San Andres Sinaxtla", "San Andres Solaga", "San Andres Teotilalpam", "San Andres Tepetlapa", "San Andres Yaa", "San Andres Zabache", "San Andres Zautla", "San Antonino Castillo Velasco", "San Antonino Monte Verde", "San Antonino el Alto", "San Antonio Acutla", "San Antonio Huitepec", "San Antonio Nanahuatipam", "San Antonio Sinicahua", "San Antonio Tepetlapa", "San Antonio de la Cal", "San Baltazar Chichicapam", "San Baltazar Loxicha", "San Baltazar Yatzachi el Bajo", "San Bartolo Coyotepec", "San Bartolo Soyaltepec", "San Bartolo Yautepec", "San Bartolome Ayautla", "San Bartolome Loxicha", "San Bartolome Quialana", "San Bartolome Yucuane", "San Bartolome Zoogocho", "San Bernardo Mixtepec", "San Blas Atempa", "San Carlos Yautepec", "San Cristobal Amatlan", "San Cristobal Amoltepec", "San Cristobal Lachirioag", "San Cristobal Suchixtlahuaca", "San Dionisio Ocotepec", "San Dionisio Ocotlan", "San Dionisio del Mar", "San Esteban Atatlahuca", "San Felipe Jalapa de Diaz", "San Felipe Tejalapam", "San Felipe Usila", "San Francisco Cahuacua", "San Francisco Cajonos", "San Francisco Chapulapa", "San Francisco Chindua", "San Francisco Huehuetlan", "San Francisco Ixhuatan", "San Francisco Jaltepetongo", "San Francisco Lachigolo", "San Francisco Logueche", "San Francisco Nuxano", "San Francisco Ozolotepec", "San Francisco Sola", "San Francisco Telixtlahuaca", "San Francisco Teopan", "San Francisco Tlapancingo", "San Francisco del Mar", "San Gabriel Mixtepec", "San Ildefonso Amatlan", "San Ildefonso Sola", "San Ildefonso Villa Alta", "San Jacinto Amilpas", "San Jacinto Tlacotepec", "San Jeronimo Coatlan", "San Jeronimo Silacayoapilla", "San Jeronimo Sosola", "San Jeronimo Taviche", "San Jeronimo Tecoatl", "San Jeronimo Tlacochahuaya", "San Jorge Nuchita", "San Jose Ayuquila", "San Jose Chiltepec", "San Jose Estancia Grande", "San Jose Independencia", "San Jose Lachiguiri", "San Jose Tenango", "San Jose del Penasco", "San Jose del Progreso", "San Juan Achiutla", "San Juan Atepec", "San Juan Bautista Atatlahuca", "San Juan Bautista Coixtlahuaca", "San Juan Bautista Cuicatlan", "San Juan Bautista Guelache", "San Juan Bautista Jayacatlan", "San Juan Bautista Lo de Soto", "San Juan Bautista Suchitepec", "San Juan Bautista Tlachichilco", "San Juan Bautista Tlacoatzintepec", "San Juan Bautista Tuxtepec", "San Juan Bautista Valle Nacional", "San Juan Cacahuatepec", "San Juan Chicomezuchil", "San Juan Chilateca", "San Juan Cieneguilla", "San Juan Coatzospam", "San Juan Colorado", "San Juan Comaltepec", "San Juan Cotzocon", "San Juan Diuxi", "San Juan Evangelista Analco", "San Juan Guelavia", "San Juan Guichicovi", "San Juan Ihualtepec", "San Juan Juquila Mixes", "San Juan Juquila Vijanos", "San Juan Lachao", "San Juan Lachigalla", "San Juan Lajarcia", "San Juan Lalana", "San Juan Mazatlan", "San Juan Mixtepec", "San Juan Mixtepec", "San Juan Numi", "San Juan Ozolotepec", "San Juan Petlapa", "San Juan Quiahije", "San Juan Quiotepec", "San Juan Sayultepec", "San Juan Tabaa", "San Juan Tamazola", "San Juan Teita", "San Juan Teitipac", "San Juan Tepeuxila", "San Juan Teposcolula", "San Juan Yaee", "San Juan Yatzona", "San Juan Yucuita", "San Juan de los Cues", "San Juan del Estado", "San Juan del Rio", "San Lorenzo Albarradas", "San Lorenzo Cacaotepec", "San Lorenzo Cuaunecuiltitla", "San Lorenzo Texmelucan", "San Lorenzo Victoria", "San Lorenzo", "San Lucas Camotlan", "San Lucas Ojitlan", "San Lucas Quiavini", "San Lucas Zoquiapam", "San Luis Amatlan", "San Marcial Ozolotepec", "San Marcos Arteaga", "San Martin Huamelulpam", "San Martin Itunyoso", "San Martin Lachila", "San Martin Peras", "San Martin Tilcajete", "San Martin Toxpalan", "San Martin Zacatepec", "San Martin de los Cansecos", "San Mateo Cajonos", "San Mateo Etlatongo", "San Mateo Nejapam", "San Mateo Penasco", "San Mateo Pinas", "San Mateo Rio Hondo", "San Mateo Sindihui", "San Mateo Tlapiltepec", "San Mateo Yoloxochitlan", "San Mateo Yucutindoo", "San Mateo del Mar", "San Melchor Betaza", "San Miguel Achiutla", "San Miguel Ahuehuetitlan", "San Miguel Aloapam", "San Miguel Amatitlan", "San Miguel Amatlan", "San Miguel Chicahua", "San Miguel Chimalapa", "San Miguel Coatlan", "San Miguel Ejutla", "San Miguel Huautla", "San Miguel Mixtepec", "San Miguel Panixtlahuaca", "San Miguel Peras", "San Miguel Piedras", "San Miguel Quetzaltepec", "San Miguel Santa Flor", "San Miguel Soyaltepec", "San Miguel Suchixtepec", "San Miguel Tecomatlan", "San Miguel Tenango", "San Miguel Tequixtepec", "San Miguel Tilquiapam", "San Miguel Tlacamama", "San Miguel Tlacotepec", "San Miguel Tulancingo", "San Miguel Yotao", "San Miguel del Puerto", "San Miguel del Rio", "San Miguel el Grande", "San Nicolas Hidalgo", "San Nicolas", "San Pablo Coatlan", "San Pablo Cuatro Venados", "San Pablo Etla", "San Pablo Huitzo", "San Pablo Huixtepec", "San Pablo Macuiltianguis", "San Pablo Tijaltepec", "San Pablo Villa de Mitla", "San Pablo Yaganiza", "San Pedro Amuzgos", "San Pedro Apostol", "San Pedro Atoyac", "San Pedro Cajonos", "San Pedro Comitancillo", "San Pedro Coxcaltepec Cantaros", "San Pedro Huamelula", "San Pedro Huilotepec", "San Pedro Ixcatlan", "San Pedro Ixtlahuaca", "San Pedro Jaltepetongo", "San Pedro Jicayan", "San Pedro Jocotipac", "San Pedro Juchatengo", "San Pedro Martir Quiechapa", "San Pedro Martir Yucuxaco", "San Pedro Martir", "San Pedro Mixtepec", "San Pedro Mixtepec", "San Pedro Molinos", "San Pedro Nopala", "San Pedro Ocopetatillo", "San Pedro Ocotepec", "San Pedro Pochutla", "San Pedro Quiatoni", "San Pedro Sochiapam", "San Pedro Tapanatepec", "San Pedro Taviche", "San Pedro Teozacoalco", "San Pedro Teutila", "San Pedro Tidaa", "San Pedro Topiltepec", "San Pedro Totolapam", "San Pedro Yaneri", "San Pedro Yolox", "San Pedro Yucunama", "San Pedro el Alto", "San Pedro y San Pablo Ayutla", "San Pedro y San Pablo Teposcolula", "San Pedro y San Pablo Tequixtepec", "San Raymundo Jalpan", "San Sebastian Abasolo", "San Sebastian Coatlan", "San Sebastian Ixcapa", "San Sebastian Nicananduta", "San Sebastian Rio Hondo", "San Sebastian Tecomaxtlahuaca", "San Sebastian Teitipac", "San Sebastian Tutla", "San Simon Almolongas", "San Simon Zahuatlan", "San Vicente Coatlan", "San Vicente Lachixio", "San Vicente Nunu", "Santa Ana Ateixtlahuaca", "Santa Ana Cuauhtemoc", "Santa Ana Tavela", "Santa Ana Tlapacoyan", "Santa Ana Yareni", "Santa Ana Zegache", "Santa Ana del Valle", "Santa Ana", "Santa Catalina Quieri", "Santa Catarina Cuixtla", "Santa Catarina Ixtepeji", "Santa Catarina Juquila", "Santa Catarina Lachatao", "Santa Catarina Loxicha", "Santa Catarina Mechoacan", "Santa Catarina Minas", "Santa Catarina Quiane", "Santa Catarina Quioquitani", "Santa Catarina Tayata", "Santa Catarina Ticua", "Santa Catarina Yosonotu", "Santa Catarina Zapoquila", "Santa Cruz Acatepec", "Santa Cruz Amilpas", "Santa Cruz Itundujia", "Santa Cruz Mixtepec", "Santa Cruz Nundaco", "Santa Cruz Papalutla", "Santa Cruz Tacache de Mina", "Santa Cruz Tacahua", "Santa Cruz Tayata", "Santa Cruz Xitla", "Santa Cruz Xoxocotlan", "Santa Cruz Zenzontepec", "Santa Cruz de Bravo", "Santa Gertrudis", "Santa Ines Yatzeche", "Santa Ines de Zaragoza", "Santa Ines del Monte", "Santa Lucia Miahuatlan", "Santa Lucia Monteverde", "Santa Lucia Ocotlan", "Santa Lucia del Camino", "Santa Magdalena Jicotlan", "Santa Maria Alotepec", "Santa Maria Apazco", "Santa Maria Atzompa", "Santa Maria Camotlan", "Santa Maria Chachoapam", "Santa Maria Chilchotla", "Santa Maria Chimalapa", "Santa Maria Colotepec", "Santa Maria Cortijo", "Santa Maria Coyotepec", "Santa Maria Ecatepec", "Santa Maria Guelace", "Santa Maria Guienagati", "Santa Maria Huatulco", "Santa Maria Huazolotitlan", "Santa Maria Ipalapa", "Santa Maria Ixcatlan", "Santa Maria Jacatepec", "Santa Maria Jalapa del Marques", "Santa Maria Jaltianguis", "Santa Maria Lachixio", "Santa Maria Mixtequilla", "Santa Maria Nativitas", "Santa Maria Nduayaco", "Santa Maria Ozolotepec", "Santa Maria Papalo", "Santa Maria Penoles", "Santa Maria Petapa", "Santa Maria Quiegolani", "Santa Maria Sola", "Santa Maria Tataltepec", "Santa Maria Tecomavaca", "Santa Maria Temaxcalapa", "Santa Maria Temaxcaltepec", "Santa Maria Teopoxco", "Santa Maria Tepantlali", "Santa Maria Texcatitlan", "Santa Maria Tlahuitoltepec", "Santa Maria Tlalixtac", "Santa Maria Tonameca", "Santa Maria Totolapilla", "Santa Maria Xadani", "Santa Maria Yalina", "Santa Maria Yavesia", "Santa Maria Yolotepec", "Santa Maria Yosoyua", "Santa Maria Yucuhiti", "Santa Maria Zacatepec", "Santa Maria Zaniza", "Santa Maria Zoquitlan", "Santa Maria del Rosario", "Santa Maria del Tule", "Santa Maria la Asuncion", "Santiago Amoltepec", "Santiago Apoala", "Santiago Apostol", "Santiago Astata", "Santiago Atitlan", "Santiago Ayuquililla", "Santiago Cacaloxtepec", "Santiago Camotlan", "Santiago Chazumba", "Santiago Choapam", "Santiago Comaltepec", "Santiago Huajolotitlan", "Santiago Huauclilla", "Santiago Ihuitlan Plumas", "Santiago Ixcuintepec", "Santiago Ixtayutla", "Santiago Jamiltepec", "Santiago Jocotepec", "Santiago Juxtlahuaca", "Santiago Lachiguiri", "Santiago Lalopa", "Santiago Laollaga", "Santiago Laxopa", "Santiago Llano Grande", "Santiago Matatlan", "Santiago Miltepec", "Santiago Minas", "Santiago Nacaltepec", "Santiago Nejapilla", "Santiago Niltepec", "Santiago Nundiche", "Santiago Nuyoo", "Santiago Pinotepa Nacional", "Santiago Suchilquitongo", "Santiago Tamazola", "Santiago Tapextla", "Santiago Tenango", "Santiago Tepetlapa", "Santiago Tetepec", "Santiago Texcalcingo", "Santiago Textitlan", "Santiago Tilantongo", "Santiago Tillo", "Santiago Tlazoyaltepec", "Santiago Xanica", "Santiago Xiacui", "Santiago Yaitepec", "Santiago Yaveo", "Santiago Yolomecatl", "Santiago Yosondua", "Santiago Yucuyachi", "Santiago Zacatepec", "Santiago Zoochila", "Santiago del Rio", "Santo Domingo Albarradas", "Santo Domingo Armenta", "Santo Domingo Chihuitan", "Santo Domingo Ingenio", "Santo Domingo Ixcatlan", "Santo Domingo Nuxaa", "Santo Domingo Ozolotepec", "Santo Domingo Petapa", "Santo Domingo Roayaga", "Santo Domingo Tehuantepec", "Santo Domingo Teojomulco", "Santo Domingo Tepuxtepec", "Santo Domingo Tlatayapam", "Santo Domingo Tomaltepec", "Santo Domingo Tonala", "Santo Domingo Tonaltepec", "Santo Domingo Xagacia", "Santo Domingo Yanhuitlan", "Santo Domingo Yodohino", "Santo Domingo Zanatepec", "Santo Domingo de Morelos", "Santo Tomas Jalieza", "Santo Tomas Mazaltepec", "Santo Tomas Ocotepec", "Santo Tomas Tamazulapan", "Santos Reyes Nopala", "Santos Reyes Papalo", "Santos Reyes Tepejillo", "Santos Reyes Yucuna", "Silacayoapam", "Sitio de Xitlapehua", "Soledad Etla", "Tamazulapam del Espiritu Santo", "Tanetze de Zaragoza", "Taniche", "Tataltepec de Valdes", "Teococuilco de Marcos Perez", "Teotitlan de Flores Magon", "Teotitlan del Valle", "Teotongo", "Tepelmeme Villa de Morelos", "Tlacolula de Matamoros", "Tlacotepec Plumas", "Tlalixtac de Cabrera", "Totontepec Villa de Morelos", "Trinidad Zaachila", "Union Hidalgo", "Valerio Trujano", "Villa Diaz Ordaz", "Villa Hidalgo", "Villa Sola de Vega", "Villa Talea de Castro", "Villa Tejupam de la Union", "Villa de Chilapa de Diaz", "Villa de Etla", "Villa de Tamazulapam del Progreso", "Villa de Tututepec", "Villa de Zaachila", "Yaxe", "Yogana", "Yutanduchi de Guerrero", "Zapotitlan Lagunas", "Zapotitlan Palmas", "Zimatlan de Alvarez"],
    "Puebla": ["Acajete", "Acateno", "Acatlan", "Acatzingo", "Acteopan", "Ahuacatlan", "Ahuatlan", "Ahuazotepec", "Ahuehuetitla", "Ajalpan", "Albino Zertuche", "Aljojuca", "Altepexi", "Amixtlan", "Amozoc", "Aquixtla", "Atempan", "Atexcal", "Atlequizayan", "Atlixco", "Atoyatempan", "Atzala", "Atzitzihuacan", "Atzitzintla", "Axutla", "Ayotoxco de Guerrero", "Calpan", "Caltepec", "Camocuautla", "Canada Morelos", "Caxhuacan", "Chalchicomula de Sesma", "Chapulco", "Chiautla", "Chiautzingo", "Chichiquila", "Chiconcuautla", "Chietla", "Chigmecatitlan", "Chignahuapan", "Chignautla", "Chila de la Sal", "Chila", "Chilchotla", "Chinantla", "Coatepec", "Coatzingo", "Cohetzala", "Cohuecan", "Coronango", "Coxcatlan", "Coyomeapan", "Coyotepec", "Cuapiaxtla de Madero", "Cuautempan", "Cuautinchan", "Cuautlancingo", "Cuayuca de Andrade", "Cuetzalan del Progreso", "Cuyoaco", "Domingo Arenas", "Eloxochitlan", "Epatlan", "Esperanza", "Francisco Z. Mena", "General Felipe Angeles", "Guadalupe Victoria", "Guadalupe", "Hermenegildo Galeana", "Honey", "Huaquechula", "Huatlatlauca", "Huauchinango", "Huehuetla", "Huehuetlan el Chico", "Huehuetlan el Grande", "Huejotzingo", "Hueyapan", "Hueytamalco", "Hueytlalpan", "Huitzilan de Serdan", "Huitziltepec", "Ixcamilpa de Guerrero", "Ixcaquixtla", "Ixtacamaxtitlan", "Ixtepec", "Izucar de Matamoros", "Jalpan", "Jolalpan", "Jonotla", "Jopala", "Juan C. Bonilla", "Juan Galindo", "Juan N. Mendez", "La Magdalena Tlatlauquitepec", "Lafragua", "Libres", "Los Reyes de Juarez", "Mazapiltepec de Juarez", "Mixtla", "Molcaxac", "Naupan", "Nauzontla", "Nealtican", "Nicolas Bravo", "Nopalucan", "Ocotepec", "Ocoyucan", "Olintla", "Oriental", "Pahuatlan", "Palmar de Bravo", "Pantepec", "Petlalcingo", "Piaxtla", "Puebla", "Quecholac", "Quimixtlan", "Rafael Lara Grajales", "San Andres Cholula", "San Antonio Canada", "San Diego la Mesa Tochimiltzingo", "San Felipe Teotlalcingo", "San Felipe Tepatlan", "San Gabriel Chilac", "San Gregorio Atzompa", "San Jeronimo Tecuanipan", "San Jeronimo Xayacatlan", "San Jose Chiapa", "San Jose Miahuatlan", "San Juan Atenco", "San Juan Atzompa", "San Martin Texmelucan", "San Martin Totoltepec", "San Matias Tlalancaleca", "San Miguel Ixitlan", "San Miguel Xoxtla", "San Nicolas Buenos Aires", "San Nicolas de los Ranchos", "San Pablo Anicano", "San Pedro Cholula", "San Pedro Yeloixtlahuaca", "San Salvador Huixcolotla", "San Salvador el Seco", "San Salvador el Verde", "San Sebastian Tlacotepec", "Santa Catarina Tlaltempan", "Santa Ines Ahuatempan", "Santa Isabel Cholula", "Santiago Miahuatlan", "Santo Tomas Hueyotlipan", "Soltepec", "Tecali de Herrera", "Tecamachalco", "Tecomatlan", "Tehuacan", "Tehuitzingo", "Tenampulco", "Teopantlan", "Teotlalco", "Tepanco de Lopez", "Tepango de Rodriguez", "Tepatlaxco de Hidalgo", "Tepeaca", "Tepemaxalco", "Tepeojuma", "Tepetzintla", "Tepexco", "Tepexi de Rodriguez", "Tepeyahualco de Cuauhtemoc", "Tepeyahualco", "Tetela de Ocampo", "Teteles de Avila Castillo", "Teziutlan", "Tianguismanalco", "Tilapa", "Tlachichuca", "Tlacotepec de Benito Juarez", "Tlacuilotepec", "Tlahuapan", "Tlaltenango", "Tlanepantla", "Tlaola", "Tlapacoya", "Tlapanala", "Tlatlauquitepec", "Tlaxco", "Tochimilco", "Tochtepec", "Totoltepec de Guerrero", "Tulcingo", "Tuzamapan de Galeana", "Tzicatlacoyan", "Venustiano Carranza", "Vicente Guerrero", "Xayacatlan de Bravo", "Xicotepec", "Xicotlan", "Xiutetelco", "Xochiapulco", "Xochiltepec", "Xochitlan Todos Santos", "Xochitlan de Vicente Suarez", "Yaonahuac", "Yehualtepec", "Zacapala", "Zacapoaxtla", "Zacatlan", "Zapotitlan de Mendez", "Zapotitlan", "Zaragoza", "Zautla", "Zihuateutla", "Zinacatepec", "Zongozotla", "Zoquiapan", "Zoquitlan"],
    "Queretaro": ["Amealco de Bonfil", "Arroyo Seco", "Cadereyta de Montes", "Colon", "Corregidora", "El Marques", "Ezequiel Montes", "Huimilpan", "Jalpan de Serra", "Landa de Matamoros", "Pedro Escobedo", "Penamiller", "Pinal de Amoles", "Queretaro", "San Joaquin", "San Juan del Rio", "Tequisquiapan", "Toliman"],
    "Quintana Roo": ["Bacalar", "Benito Juarez", "Cozumel", "Felipe Carrillo Puerto", "Isla Mujeres", "Jose Maria Morelos", "Lazaro Cardenas", "Othon P. Blanco", "Puerto Morelos", "Solidaridad", "Tulum"],
    "San Luis Potosi": ["Ahualulco", "Alaquines", "Aquismon", "Armadillo de los Infante", "Axtla de Terrazas", "Cardenas", "Catorce", "Cedral", "Cerritos", "Cerro de San Pedro", "Charcas", "Ciudad Fernandez", "Ciudad Valles", "Ciudad del Maiz", "Coxcatlan", "Ebano", "El Naranjo", "Guadalcazar", "Huehuetlan", "Lagunillas", "Matehuala", "Matlapa", "Mexquitic de Carmona", "Moctezuma", "Rayon", "Rioverde", "Salinas", "San Antonio", "San Ciro de Acosta", "San Luis Potosi", "San Martin Chalchicuautla", "San Nicolas Tolentino", "San Vicente Tancuayalab", "Santa Catarina", "Santa Maria del Rio", "Santo Domingo", "Soledad de Graciano Sanchez", "Tamasopo", "Tamazunchale", "Tampacan", "Tampamolon Corona", "Tamuin", "Tancanhuitz", "Tanlajas", "Tanquian de Escobedo", "Tierra Nueva", "Vanegas", "Venado", "Villa Hidalgo", "Villa Juarez", "Villa de Arista", "Villa de Arriaga", "Villa de Guadalupe", "Villa de Ramos", "Villa de Reyes", "Villa de la Paz", "Xilitla", "Zaragoza"],
    "Sinaloa": ["Ahome", "Angostura", "Badiraguato", "Choix", "Concordia", "Cosala", "Culiacan", "El Fuerte", "Elota", "Escuinapa", "Guasave", "Mazatlan", "Mocorito", "Navolato", "Rosario", "Salvador Alvarado", "San Ignacio", "Sinaloa"],
    "Sonora": ["Aconchi", "Agua Prieta", "Alamos", "Altar", "Arivechi", "Arizpe", "Atil", "Bacadehuachi", "Bacanora", "Bacerac", "Bacoachi", "Bacum", "Banamichi", "Baviacora", "Bavispe", "Benito Juarez", "Benjamin Hill", "Caborca", "Cajeme", "Cananea", "Carbo", "Cucurpe", "Cumpas", "Divisaderos", "Empalme", "Etchojoa", "Fronteras", "General Plutarco Elias Calles", "Granados", "Guaymas", "Hermosillo", "Huachinera", "Huasabas", "Huatabampo", "Huepac", "Imuris", "La Colorada", "Magdalena", "Mazatan", "Moctezuma", "Naco", "Nacori Chico", "Nacozari de Garcia", "Navojoa", "Nogales", "Onavas", "Opodepe", "Oquitoa", "Pitiquito", "Puerto Penasco", "Quiriego", "Rayon", "Rosario", "Sahuaripa", "San Felipe de Jesus", "San Ignacio Rio Muerto", "San Javier", "San Luis Rio Colorado", "San Miguel de Horcasitas", "San Pedro de la Cueva", "Santa Ana", "Santa Cruz", "Saric", "Soyopa", "Suaqui Grande", "Tepache", "Trincheras", "Tubutama", "Ures", "Villa Hidalgo", "Villa Pesqueira", "Yecora"],
    "Tabasco": ["Balancan", "Cardenas", "Centla", "Centro", "Comalcalco", "Cunduacan", "Emiliano Zapata", "Huimanguillo", "Jalapa", "Jalpa de Mendez", "Jonuta", "Macuspana", "Nacajuca", "Paraiso", "Tacotalpa", "Teapa", "Tenosique"],
    "Tamaulipas": ["Abasolo", "Aldama", "Altamira", "Antiguo Morelos", "Burgos", "Bustamante", "Camargo", "Casas", "Ciudad Madero", "Cruillas", "El Mante", "Gomez Farias", "Gonzalez", "Guemez", "Guerrero", "Gustavo Diaz Ordaz", "Hidalgo", "Jaumave", "Jimenez", "Llera", "Mainero", "Matamoros", "Mendez", "Mier", "Miguel Aleman", "Miquihuana", "Nuevo Laredo", "Nuevo Morelos", "Ocampo", "Padilla", "Palmillas", "Reynosa", "Rio Bravo", "San Carlos", "San Fernando", "San Nicolas", "Soto la Marina", "Tampico", "Tula", "Valle Hermoso", "Victoria", "Villagran", "Xicotencatl"],
    "Tlaxcala": ["Acuamanala de Miguel Hidalgo", "Amaxac de Guerrero", "Apetatitlan de Antonio Carvajal", "Apizaco", "Atlangatepec", "Atltzayanca", "Benito Juarez", "Calpulalpan", "Chiautempan", "Contla de Juan Cuamatzi", "Cuapiaxtla", "Cuaxomulco", "El Carmen Tequexquitla", "Emiliano Zapata", "Espanita", "Huamantla", "Hueyotlipan", "Ixtacuixtla de Mariano Matamoros", "Ixtenco", "La Magdalena Tlaltelulco", "Lazaro Cardenas", "Mazatecochco de Jose Maria Morelos", "Munoz de Domingo Arenas", "Nanacamilpa de Mariano Arista", "Nativitas", "Panotla", "Papalotla de Xicohtencatl", "San Damian Texoloc", "San Francisco Tetlanohcan", "San Jeronimo Zacualpan", "San Jose Teacalco", "San Juan Huactzinco", "San Lorenzo Axocomanitla", "San Lucas Tecopilco", "San Pablo del Monte", "Sanctorum de Lazaro Cardenas", "Santa Ana Nopalucan", "Santa Apolonia Teacalco", "Santa Catarina Ayometla", "Santa Cruz Quilehtla", "Santa Cruz Tlaxcala", "Santa Isabel Xiloxoxtla", "Tenancingo", "Teolocholco", "Tepetitla de Lardizabal", "Tepeyanco", "Terrenate", "Tetla de la Solidaridad", "Tetlatlahuca", "Tlaxcala", "Tlaxco", "Tocatlan", "Totolac", "Tzompantepec", "Xaloztoc", "Xaltocan", "Xicohtzinco", "Yauhquemehcan", "Zacatelco", "Ziltlaltepec de Trinidad Sanchez Santos"],
    "Veracruz": ["Acajete", "Acatlan", "Acayucan", "Actopan", "Acula", "Acultzingo", "Agua Dulce", "Alamo Temapache", "Alpatlahuac", "Alto Lucero de Gutierrez Barrios", "Altotonga", "Alvarado", "Amatitlan", "Amatlan de los Reyes", "Angel R. Cabada", "Apazapan", "Aquila", "Astacinga", "Atlahuilco", "Atoyac", "Atzacan", "Atzalan", "Ayahualulco", "Banderilla", "Benito Juarez", "Boca del Rio", "Calcahualco", "Camaron de Tejeda", "Camerino Z. Mendoza", "Carlos A. Carrillo", "Carrillo Puerto", "Castillo de Teayo", "Catemaco", "Cazones de Herrera", "Cerro Azul", "Chacaltianguis", "Chalma", "Chiconamel", "Chiconquiaco", "Chicontepec", "Chinameca", "Chinampa de Gorostiza", "Chocaman", "Chontla", "Chumatlan", "Citlaltepetl", "Coacoatzintla", "Coahuitlan", "Coatepec", "Coatzacoalcos", "Coatzintla", "Coetzala", "Colipa", "Comapa", "Cordoba", "Cosamaloapan de Carpio", "Cosautlan de Carvajal", "Coscomatepec", "Cosoleacaque", "Cotaxtla", "Coxquihui", "Coyutla", "Cuichapa", "Cuitlahuac", "El Higo", "Emiliano Zapata", "Espinal", "Filomeno Mata", "Fortin", "Gutierrez Zamora", "Hidalgotitlan", "Huatusco", "Huayacocotla", "Hueyapan de Ocampo", "Huiloapan de Cuauhtemoc", "Ignacio de la Llave", "Ilamatlan", "Isla", "Ixcatepec", "Ixhuacan de los Reyes", "Ixhuatlan de Madero", "Ixhuatlan del Cafe", "Ixhuatlan del Sureste", "Ixhuatlancillo", "Ixmatlahuacan", "Ixtaczoquitlan", "Jalacingo", "Jalcomulco", "Jaltipan", "Jamapa", "Jesus Carranza", "Jilotepec", "Jose Azueta", "Juan Rodriguez Clara", "Juchique de Ferrer", "La Antigua", "La Perla", "Landero y Coss", "Las Choapas", "Las Minas", "Las Vigas de Ramirez", "Lerdo de Tejada", "Los Reyes", "Magdalena", "Maltrata", "Manlio Fabio Altamirano", "Mariano Escobedo", "Martinez de la Torre", "Mecatlan", "Mecayapan", "Medellin de Bravo", "Miahuatlan", "Minatitlan", "Misantla", "Mixtla de Altamirano", "Moloacan", "Nanchital de Lazaro Cardenas del Rio", "Naolinco", "Naranjal", "Naranjos Amatlan", "Nautla", "Nogales", "Oluta", "Omealca", "Orizaba", "Otatitlan", "Oteapan", "Ozuluama de Mascarenas", "Pajapan", "Panuco", "Papantla", "Paso de Ovejas", "Paso del Macho", "Perote", "Platon Sanchez", "Playa Vicente", "Poza Rica de Hidalgo", "Pueblo Viejo", "Puente Nacional", "Rafael Delgado", "Rafael Lucio", "Rio Blanco", "Saltabarranca", "San Andres Tenejapan", "San Andres Tuxtla", "San Juan Evangelista", "San Rafael", "Santiago Sochiapan", "Santiago Tuxtla", "Sayula de Aleman", "Sochiapa", "Soconusco", "Soledad Atzompa", "Soledad de Doblado", "Soteapan", "Tamalin", "Tamiahua", "Tampico Alto", "Tancoco", "Tantima", "Tantoyuca", "Tatahuicapan de Juarez", "Tatatila", "Tecolutla", "Tehuipango", "Tempoal", "Tenampa", "Tenochtitlan", "Teocelo", "Tepatlaxco", "Tepetlan", "Tepetzintla", "Tequila", "Texcatepec", "Texhuacan", "Texistepec", "Tezonapa", "Tierra Blanca", "Tihuatlan", "Tlachichilco", "Tlacojalpan", "Tlacolulan", "Tlacotalpan", "Tlacotepec de Mejia", "Tlalixcoyan", "Tlalnelhuayocan", "Tlaltetela", "Tlapacoyan", "Tlaquilpa", "Tlilapan", "Tomatlan", "Tonayan", "Totutla", "Tres Valles", "Tuxpan", "Tuxtilla", "Ursulo Galvan", "Uxpanapa", "Vega de Alatorre", "Veracruz", "Villa Aldama", "Xalapa", "Xico", "Xoxocotla", "Yanga", "Yecuatla", "Zacualpan", "Zaragoza", "Zentla", "Zongolica", "Zontecomatlan de Lopez y Fuentes", "Zozocolco de Hidalgo"],
    "Yucatan": ["Abala", "Acanceh", "Akil", "Baca", "Bokoba", "Buctzotz", "Cacalchen", "Calotmul", "Cansahcab", "Cantamayec", "Celestun", "Cenotillo", "Chacsinkin", "Chankom", "Chapab", "Chemax", "Chichimila", "Chicxulub Pueblo", "Chikindzonot", "Chochola", "Chumayel", "Conkal", "Cuncunul", "Cuzama", "Dzan", "Dzemul", "Dzidzantun", "Dzilam Gonzalez", "Dzilam de Bravo", "Dzitas", "Dzoncauich", "Espita", "Halacho", "Hocaba", "Hoctun", "Homun", "Huhi", "Hunucma", "Ixil", "Izamal", "Kanasin", "Kantunil", "Kaua", "Kinchil", "Kopoma", "Mama", "Mani", "Maxcanu", "Mayapan", "Merida", "Mococha", "Motul", "Muna", "Muxupip", "Opichen", "Oxkutzcab", "Panaba", "Peto", "Progreso", "Quintana Roo", "Rio Lagartos", "Sacalum", "Samahil", "San Felipe", "Sanahcat", "Santa Elena", "Seye", "Sinanche", "Sotuta", "Sucila", "Sudzal", "Suma", "Tahdziu", "Tahmek", "Teabo", "Tecoh", "Tekal de Venegas", "Tekanto", "Tekax", "Tekit", "Tekom", "Telchac Pueblo", "Telchac Puerto", "Temax", "Temozon", "Tepakan", "Tetiz", "Teya", "Ticul", "Timucuy", "Tinum", "Tixcacalcupul", "Tixkokob", "Tixmehuac", "Tixpehual", "Tizimin", "Tunkas", "Tzucacab", "Uayma", "Ucu", "Uman", "Valladolid", "Xocchel", "Yaxcaba", "Yaxkukul", "Yobain"],
    "Zacatecas": ["Apozol", "Apulco", "Atolinga", "Benito Juarez", "Calera", "Canitas de Felipe Pescador", "Chalchihuites", "Concepcion del Oro", "Cuauhtemoc", "El Plateado de Joaquin Amaro", "El Salvador", "Fresnillo", "Genaro Codina", "General Enrique Estrada", "General Francisco R. Murguia", "General Panfilo Natera", "Guadalupe", "Huanusco", "Jalpa", "Jerez", "Jimenez del Teul", "Juan Aldama", "Juchipila", "Loreto", "Luis Moya", "Mazapil", "Melchor Ocampo", "Mezquital del Oro", "Miguel Auza", "Momax", "Monte Escobedo", "Morelos", "Moyahua de Estrada", "Nochistlan de Mejia", "Noria de Angeles", "Ojocaliente", "Panuco", "Pinos", "Rio Grande", "Sain Alto", "Santa Maria de la Paz", "Sombrerete", "Susticacan", "Tabasco", "Tepechitlan", "Tepetongo", "Teul de Gonzalez Ortega", "Tlaltenango de Sanchez Roman", "Trancoso", "Trinidad Garcia de la Cadena", "Valparaiso", "Vetagrande", "Villa Garcia", "Villa Gonzalez Ortega", "Villa Hidalgo", "Villa de Cos", "Villanueva", "Zacatecas"]
}*/

const doctors = [
    {
        "id": 1,
        "firstName": "Kit",
        "lastName": "Bortol",
        "email": "kit.bortol@gmail.com",
        "speciality": "Genética Médica",
        "gender": "Male",
        "profileImg": "assets/img/search/doctor.png",
        "phone": "830-364-5520",
        "surgeryAddress": null,
        "suburb": null,
        "state": "Baja California",
        "town": "Ensenada",
        "zipcode": "21019 CEDEX"
    }, {
        "id": 2,
        "firstName": "Mortimer",
        "lastName": "Lardez",
        "email": "mortimer.bortol@gmail.com",
        "speciality": "Medicina General",
        "gender": "Genderqueer",
        "profileImg": "assets/img/search/doctor.png",
        "phone": "649-233-9179",
        "surgeryAddress": null,
        "suburb": null,
        "state": "Coahuila",
        "town": "Candela",
        "zipcode": null
    }, {
        "id": 3,
        "firstName": "Kikelia",
        "lastName": "Raffon",
        "email": "kikelia.bortol@gmail.com",
        "speciality": "Nutriólogo clínico",
        "gender": "Female",
        "profileImg": "assets/img/search/doctora.png",
        "phone": "508-189-3492",
        "surgeryAddress": null,
        "suburb": null,
        "state": "Aguascalientes",
        "town": "Calvillo",
        "zipcode": null
    }, {
        "id": 4,
        "firstName": "Wylie",
        "lastName": "Goard",
        "email": "wylie.bortol@gmail.com",
        "speciality": "Investigación Biomédica en Endocrinología",
        "gender": "Polygender",
        "profileImg": "assets/img/search/doctor.png",
        "phone": "915-744-2185",
        "surgeryAddress": null,
        "suburb": null,
        "state": "Coahuila",
        "town": "Frontera",
        "zipcode": "4805-005"
    }, {
        "id": 5,
        "firstName": "Norine",
        "lastName": "Inns",
        "email": "norine.bortol@gmail.com",
        "speciality": "Maestría en Salud Pública",
        "gender": "Female",
        "profileImg": "assets/img/search/doctora.png",
        "phone": "755-238-3940",
        "surgeryAddress": null,
        "suburb": null,
        "state": "Nuevo Leon",
        "town": "Hualahuises",
        "zipcode": "02019 CEDEX"
    }, {
        "id": 6,
        "firstName": "Jamal",
        "lastName": "Aveling",
        "email": "jamal.bortol@gmail.com",
        "speciality": "Bioquímica",
        "gender": "Male",
        "profileImg": "assets/img/search/doctor.png",
        "phone": "480-514-7325",
        "surgeryAddress": null,
        "suburb": null,
        "state": "Ciudad de Mexico",
        "town": "Iztapalapa",
        "zipcode": null
    }, {
        "id": 7,
        "firstName": "Max",
        "lastName": "Curtain",
        "email": "max.bortol@gmail.com",
        "speciality": "Geriatría",
        "gender": "Male",
        "profileImg": "assets/img/search/doctor.png",
        "phone": "973-401-4790",
        "surgeryAddress": null,
        "suburb": null,
        "state": "Sinaloa",
        "town": "Choix",
        "zipcode": "4224"
    }, {
        "id": 8,
        "firstName": "Roy",
        "lastName": "Lotterington",
        "email": "roy.bortol@gmail.com",
        "speciality": "Diabetólogo",
        "gender": "Male",
        "profileImg": "assets/img/search/doctor.png",
        "phone": "659-887-0962",
        "surgeryAddress": null,
        "suburb": null,
        "state": "Baja California",
        "town": "Tecate",
        "zipcode": null
    }, {
        "id": 9,
        "firstName": "Prudy",
        "lastName": "Henstridge",
        "email": "prudy.bortol@gmail.com",
        "speciality": "Medicina Interna",
        "gender": "Female",
        "profileImg": "assets/img/search/doctora.png",
        "phone": "609-221-5412",
        "surgeryAddress": null,
        "suburb": null,
        "state": "Sonora",
        "town": "Divisaderos",
        "zipcode": null
    }, {
        "id": 10,
        "firstName": "Shell",
        "lastName": "Headington",
        "email": "shell.bortol@gmail.com",
        "speciality": "Psicología",
        "gender": "Male",
        "profileImg": "assets/img/search/doctor.png",
        "phone": "106-771-8173",
        "surgeryAddress": null,
        "suburb": null,
        "state": "Zacatecas",
        "town": "Tabasco",
        "zipcode": null
    }, {
        "id": 11,
        "firstName": "Nicolina",
        "lastName": "Kretchmer",
        "email": "nicolina.bortol@gmail.com",
        "speciality": "Investigación Biomédica en Endocrinología",
        "gender": "Female",
        "profileImg": "assets/img/search/doctora.png",
        "phone": "191-575-5908",
        "surgeryAddress": null,
        "suburb": null,
        "state": "Zacatecas",
        "town": "Teul de Gonzalez Ortega",
        "zipcode": null
    }, {
        "id": 12,
        "firstName": "Filmer",
        "lastName": "Joynes",
        "email": "filmer.bortol@gmail.com",
        "speciality": "Medicina Interna",
        "gender": "Male",
        "profileImg": "assets/img/search/doctor.png",
        "phone": "595-398-3903",
        "surgeryAddress": null,
        "suburb": null,
        "state": "Zacatecas",
        "town": "Apulco",
        "zipcode": null
    }, {
        "id": 13,
        "firstName": "Lynna",
        "lastName": "Valentin",
        "email": "lynna.bortol@gmail.com",
        "speciality": "Otros",
        "gender": "Female",
        "profileImg": "assets/img/search/doctora.png",
        "phone": "201-124-3666",
        "surgeryAddress": null,
        "suburb": null,
        "state": "Quintana Roo",
        "town": "Solidaridad",
        "zipcode": "89107-000"
    }, {
        "id": 14,
        "firstName": "Curry",
        "lastName": "Mansfield",
        "email": "curry.bortol@gmail.com",
        "speciality": "Ginecología y obstetricia",
        "gender": "Male",
        "profileImg": "assets/img/search/doctor.png",
        "phone": "509-523-9602",
        "surgeryAddress": null,
        "suburb": null,
        "state": "Nuevo Leon",
        "town": "Bustamante",
        "zipcode": null
    }, {
        "id": 15,
        "firstName": "Abie",
        "lastName": "Coverly",
        "email": "abie.bortol@gmail.com",
        "speciality": "Medicina General",
        "gender": "Genderfluid",
        "profileImg": "assets/img/search/doctor.png",
        "phone": "321-107-6508",
        "surgeryAddress": null,
        "suburb": null,
        "state": "Chiapas",
        "town": "Tuzantan",
        "zipcode": "06-320"
    }, {
        "id": 16,
        "firstName": "Birk",
        "lastName": "Huntingford",
        "email": "birk.bortol@gmail.com",
        "speciality": "Alta especialidad en obesidad",
        "gender": "Male",
        "profileImg": "assets/img/search/doctor.png",
        "phone": "551-747-6849",
        "surgeryAddress": null,
        "suburb": null,
        "state": "Yucatan",
        "town": "Tixmehuac",
        "zipcode": null
    }, {
        "id": 17,
        "firstName": "Hanson",
        "lastName": "Mahoney",
        "email": "hanson.bortol@gmail.com",
        "speciality": "Nutriólogo clínico",
        "gender": "Male",
        "profileImg": "assets/img/search/doctor.png",
        "phone": "630-361-1041",
        "surgeryAddress": null,
        "suburb": null,
        "state": "Estado de Mexico",
        "town": "Coyotepec",
        "zipcode": "6313"
    }, {
        "id": 18,
        "firstName": "Axel",
        "lastName": "Beane",
        "email": "axel.bortol@gmail.com",
        "speciality": "Lic. en Enfermería",
        "gender": "Male",
        "profileImg": "assets/img/search/doctor.png",
        "phone": "221-563-8539",
        "surgeryAddress": null,
        "suburb": null,
        "state": "Nuevo Leon",
        "town": "Juarez",
        "zipcode": "141662"
    }, {
        "id": 19,
        "firstName": "Olenka",
        "lastName": "Greaser",
        "email": "olenka.bortol@gmail.com",
        "speciality": "Medicina en C",
        "gender": "Female",
        "profileImg": "assets/img/search/doctora.png",
        "phone": "304-515-2087",
        "surgeryAddress": null,
        "suburb": null,
        "state": "Sinaloa",
        "town": "Mocorito",
        "zipcode": "96-127"
    }, {
        "id": 20,
        "firstName": "Dita",
        "lastName": "Pie",
        "email": "dita.bortol@gmail.com",
        "speciality": "Bioquímica",
        "gender": "Female",
        "profileImg": "assets/img/search/doctora.png",
        "phone": "216-772-4905",
        "surgeryAddress": null,
        "suburb": null,
        "state": "Baja California Sur",
        "town": "Comondu",
        "zipcode": "78460-000"
    }, {
        "id": 21,
        "firstName": "Amber",
        "lastName": "Chantree",
        "email": "amber.bortol@gmail.com",
        "speciality": "Psicología Clínica",
        "gender": "Female",
        "profileImg": "assets/img/search/doctora.png",
        "phone": "615-450-8880",
        "surgeryAddress": null,
        "suburb": null,
        "state": "Campeche",
        "town": "Hecelchakan",
        "zipcode": "D17"
    }, {
        "id": 22,
        "firstName": "Misti",
        "lastName": "Smithyman",
        "email": "misti.bortol@gmail.com",
        "speciality": "Medicina Integrada del Adulto",
        "gender": "Female",
        "profileImg": "assets/img/search/doctora.png",
        "phone": "422-947-0667",
        "surgeryAddress": null,
        "suburb": null,
        "state": "Tlaxcala",
        "town": "Ixtenco",
        "zipcode": null
    }, {
        "id": 23,
        "firstName": "Mariya",
        "lastName": "Mussilli",
        "email": "mariya.bortol@gmail.com",
        "speciality": "Maestría en Salud Pública",
        "gender": "Female",
        "profileImg": "assets/img/search/doctora.png",
        "phone": "266-970-2938",
        "surgeryAddress": null,
        "suburb": null,
        "state": "Veracruz",
        "town": "Tuxpan",
        "zipcode": "188992"
    }, {
        "id": 24,
        "firstName": "Di",
        "lastName": "Dyet",
        "email": "di.bortol@gmail.com",
        "speciality": "Nutriólogo clínico",
        "gender": "Female",
        "profileImg": "assets/img/search/doctora.png",
        "phone": "666-260-7767",
        "surgeryAddress": null,
        "suburb": null,
        "state": "Guerrero",
        "town": "Coyuca de Catalan",
        "zipcode": null
    }, {
        "id": 25,
        "firstName": "Vin",
        "lastName": "Wisker",
        "email": "vin.bortol@gmail.com",
        "speciality": "Alta especialidad en obesidad",
        "gender": "Male",
        "profileImg": "assets/img/search/doctor.png",
        "phone": "115-843-1210",
        "surgeryAddress": null,
        "suburb": null,
        "state": "Queretaro",
        "town": "Cadereyta de Montes",
        "zipcode": null
    }, {
        "id": 26,
        "firstName": "Ogdon",
        "lastName": "Caistor",
        "email": "ogdon.bortol@gmail.com",
        "speciality": "Genética Médica",
        "gender": "Polygender",
        "profileImg": "assets/img/search/doctor.png",
        "phone": "412-870-7374",
        "surgeryAddress": null,
        "suburb": null,
        "state": "Jalisco",
        "town": "Tecolotlan",
        "zipcode": "15255"
    }, {
        "id": 27,
        "firstName": "Carrissa",
        "lastName": "Scates",
        "email": "carrissa.bortol@gmail.com",
        "speciality": "Nutriólogo clínico",
        "gender": "Female",
        "profileImg": "assets/img/search/doctora.png",
        "phone": "531-423-5010",
        "surgeryAddress": null,
        "suburb": null,
        "state": "Quintana Roo",
        "town": "Bacalar",
        "zipcode": null
    }, {
        "id": 28,
        "firstName": "Korry",
        "lastName": "Gosnay",
        "email": "korry.bortol@gmail.com",
        "speciality": "Cirugía general",
        "gender": "Female",
        "profileImg": "assets/img/search/doctora.png",
        "phone": "101-129-5940",
        "surgeryAddress": null,
        "suburb": null,
        "state": "Campeche",
        "town": "Candelaria",
        "zipcode": "051847"
    }, {
        "id": 29,
        "firstName": "Kristoforo",
        "lastName": "Issacov",
        "email": "kristoforo.bortol@gmail.com",
        "speciality": "Dra. Biología Moleculas en medicina",
        "gender": "Male",
        "profileImg": "assets/img/search/doctor.png",
        "phone": "843-201-8265",
        "surgeryAddress": null,
        "suburb": null,
        "state": "Nuevo Leon",
        "town": "China",
        "zipcode": null
    }, {
        "id": 30,
        "firstName": "Tabina",
        "lastName": "Ollie",
        "email": "tabina.bortol@gmail.com",
        "speciality": "Maestría en Nutrición Clínica",
        "gender": "Female",
        "profileImg": "assets/img/search/doctora.png",
        "phone": "556-206-4924",
        "surgeryAddress": null,
        "suburb": null,
        "state": "Baja California Sur",
        "town": "Los Cabos",
        "zipcode": "4605-431"
    }, {
        "id": 31,
        "firstName": "Armand",
        "lastName": "Basketter",
        "email": "armand.bortol@gmail.com",
        "speciality": "Psicología Clínica",
        "gender": "Male",
        "profileImg": "assets/img/search/doctor.png",
        "phone": "290-393-8842",
        "surgeryAddress": null,
        "suburb": null,
        "state": "Tamaulipas",
        "town": "Padilla",
        "zipcode": null
    }, {
        "id": 32,
        "firstName": "Taber",
        "lastName": "Newcomb",
        "email": "taber.bortol@gmail.com",
        "speciality": "Doctorado en Química clínica",
        "gender": "Male",
        "profileImg": "assets/img/search/doctor.png",
        "phone": "767-466-0857",
        "surgeryAddress": null,
        "suburb": null,
        "state": "Sinaloa",
        "town": "Culiacan",
        "zipcode": "442965"
    }, {
        "id": 33,
        "firstName": "Berri",
        "lastName": "Mehmet",
        "email": "berri.bortol@gmail.com",
        "speciality": "Doctorado en Educación",
        "gender": "Female",
        "profileImg": "assets/img/search/doctora.png",
        "phone": "165-354-7867",
        "surgeryAddress": null,
        "suburb": null,
        "state": "Tamaulipas",
        "town": "Victoria",
        "zipcode": null
    }, {
        "id": 34,
        "firstName": "Tully",
        "lastName": "Sackes",
        "email": "tully.bortol@gmail.com",
        "speciality": "Biología reproductiva",
        "gender": "Male",
        "profileImg": "assets/img/search/doctor.png",
        "phone": "393-533-6310",
        "surgeryAddress": null,
        "suburb": null,
        "state": "Veracruz",
        "town": "Chumatlan",
        "zipcode": null
    }, {
        "id": 35,
        "firstName": "Juliane",
        "lastName": "Benzing",
        "email": "juliane.bortol@gmail.com",
        "speciality": "Nutriólogo clínico",
        "gender": "Female",
        "profileImg": "assets/img/search/doctora.png",
        "phone": "272-970-4743",
        "surgeryAddress": null,
        "suburb": null,
        "state": "Morelos",
        "town": "Atlatlahucan",
        "zipcode": null
    }, {
        "id": 36,
        "firstName": "Gwynne",
        "lastName": "Bilton",
        "email": "gwynne.bortol@gmail.com",
        "speciality": "Otros",
        "gender": "Female",
        "profileImg": "assets/img/search/doctora.png",
        "phone": "877-578-1719",
        "surgeryAddress": null,
        "suburb": null,
        "state": "Hidalgo",
        "town": "Tizayuca",
        "zipcode": "11920-000"
    }, {
        "id": 37,
        "firstName": "Leupold",
        "lastName": "McGarrell",
        "email": "leupold.bortol@gmail.com",
        "speciality": "Medicina General",
        "gender": "Male",
        "profileImg": "assets/img/search/doctor.png",
        "phone": "578-495-9049",
        "surgeryAddress": null,
        "suburb": null,
        "state": "Veracruz",
        "town": "Ursulo Galvan",
        "zipcode": null
    }, {
        "id": 38,
        "firstName": "Cchaddie",
        "lastName": "Stuehmeier",
        "email": "cchaddie.bortol@gmail.com",
        "speciality": "Ginecología y obstetricia",
        "gender": "Male",
        "profileImg": "assets/img/search/doctor.png",
        "phone": "414-877-8551",
        "surgeryAddress": null,
        "suburb": null,
        "state": "Hidalgo",
        "town": "Nicolas Flores",
        "zipcode": "231008"
    }, {
        "id": 39,
        "firstName": "Shandee",
        "lastName": "Strete",
        "email": "shandee.bortol@gmail.com",
        "speciality": "Endocrinología pediátrica",
        "gender": "Female",
        "profileImg": "assets/img/search/doctora.png",
        "phone": "938-145-1138",
        "surgeryAddress": null,
        "suburb": null,
        "state": "Guerrero",
        "town": "Zitlala",
        "zipcode": null
    }, {
        "id": 40,
        "firstName": "Amble",
        "lastName": "Lorente",
        "email": "amble.bortol@gmail.com",
        "speciality": "Ginecología y obstetricia",
        "gender": "Male",
        "profileImg": "assets/img/search/doctor.png",
        "phone": "897-337-7923",
        "surgeryAddress": null,
        "suburb": null,
        "state": "Guerrero",
        "town": "Tixtla de Guerrero",
        "zipcode": "2515"
    }, {
        "id": 41,
        "firstName": "Mercedes",
        "lastName": "Leynagh",
        "email": "mercedes.bortol@gmail.com",
        "speciality": "Nutriólogo clínico",
        "gender": "Female",
        "profileImg": "assets/img/search/doctora.png",
        "phone": "950-397-1917",
        "surgeryAddress": null,
        "suburb": null,
        "state": "Tabasco",
        "town": "Nacajuca",
        "zipcode": "64145 CEDEX"
    }, {
        "id": 42,
        "firstName": "De",
        "lastName": "O'Dougherty",
        "email": "de.bortol@gmail.com",
        "speciality": "Química, Doctora en Ciencias",
        "gender": "Female",
        "profileImg": "assets/img/search/doctora.png",
        "phone": "529-546-0943",
        "surgeryAddress": null,
        "suburb": null,
        "state": "Estado de Mexico",
        "town": "Zumpango",
        "zipcode": null
    }, {
        "id": 43,
        "firstName": "Orlan",
        "lastName": "Plak",
        "email": "orlan.bortol@gmail.com",
        "speciality": "Psicología",
        "gender": "Male",
        "profileImg": "assets/img/search/doctor.png",
        "phone": "977-248-2767",
        "surgeryAddress": null,
        "suburb": null,
        "state": "Sonora",
        "town": "Cajeme",
        "zipcode": "6185-255"
    }, {
        "id": 44,
        "firstName": "Hanni",
        "lastName": "Jeff",
        "email": "hanni.bortol@gmail.com",
        "speciality": "Nutriólogo clínico",
        "gender": "Female",
        "profileImg": "assets/img/search/doctora.png",
        "phone": "384-212-7647",
        "surgeryAddress": null,
        "suburb": null,
        "state": "Guerrero",
        "town": "Teloloapan",
        "zipcode": null
    }, {
        "id": 45,
        "firstName": "Fabian",
        "lastName": "Featherstone",
        "email": "fabian.bortol@gmail.com",
        "speciality": "Endocrinología pediátrica",
        "gender": "Male",
        "profileImg": "assets/img/search/doctor.png",
        "phone": "452-902-5038",
        "surgeryAddress": null,
        "suburb": null,
        "state": "Estado de Mexico",
        "town": "Villa del Carbon",
        "zipcode": "424999"
    }, {
        "id": 46,
        "firstName": "Leonora",
        "lastName": "Wintour",
        "email": "leonora.bortol@gmail.com",
        "speciality": "Medicina General",
        "gender": "Female",
        "profileImg": "assets/img/search/doctora.png",
        "phone": "591-301-1711",
        "surgeryAddress": null,
        "suburb": null,
        "state": "Hidalgo",
        "town": "Mineral de la Reforma",
        "zipcode": null
    }, {
        "id": 47,
        "firstName": "Rik",
        "lastName": "Loren",
        "email": "rik.bortol@gmail.com",
        "speciality": "Otros",
        "gender": "Male",
        "profileImg": "assets/img/search/doctor.png",
        "phone": "920-653-2961",
        "surgeryAddress": null,
        "suburb": null,
        "state": "Queretaro",
        "town": "Landa de Matamoros",
        "zipcode": null
    }, {
        "id": 48,
        "firstName": "Evy",
        "lastName": "Woodstock",
        "email": "evy.bortol@gmail.com",
        "speciality": "Medicina en C",
        "gender": "Female",
        "profileImg": "assets/img/search/doctora.png",
        "phone": "420-375-9499",
        "surgeryAddress": null,
        "suburb": null,
        "state": "Puebla",
        "town": "San Salvador Huixcolotla",
        "zipcode": null
    }, {
        "id": 49,
        "firstName": "Lisha",
        "lastName": "Grinnov",
        "email": "lisha.bortol@gmail.com",
        "speciality": "Diabetólogo",
        "gender": "Female",
        "profileImg": "assets/img/search/doctora.png",
        "phone": "676-679-4667",
        "surgeryAddress": null,
        "suburb": null,
        "state": "Colima",
        "town": "Villa de Alvarez",
        "zipcode": null
    }, {
        "id": 50,
        "firstName": "Gerladina",
        "lastName": "Wallentin",
        "email": "gerladina.bortol@gmail.com",
        "speciality": "Medicina Interna",
        "gender": "Bigender",
        "profileImg": "assets/img/search/doctor.png",
        "phone": "964-984-0149",
        "surgeryAddress": null,
        "suburb": null,
        "state": "Chihuahua",
        "town": "Chihuahua",
        "zipcode": "989-2433"
    }
]

// Table headers
const tableHeaders = ["", "Ful Name", "Speciality", "State", "Email", "Phone", ""];

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
const doctorsPerPage = 10;
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
const city = modal.querySelector("#doctorModalSuburb");;
const town = modal.querySelector("#doctorModalTown");
const zipcode = modal.querySelector("#doctorModalZipCode");

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
        const doctorCity = doctor.town.toLowerCase();
        const doctorSpeciality = doctor.speciality.toLowerCase();
        const doctorEntity = doctor.state.toLowerCase();

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
        result += `
            <div class="col col-lg-6 mb-4 mb-lg-0">
                <div class="card mb-3" style="border-radius: .5rem;">
                    <div class="row g-0">
                        <div class="col-md-4 gradient-custom text-center text-white">
                            <h5 class="mt-4">${doctor.firstName} ${doctor.lastName}</h5>
                            <img src="${doctor.profileImg}" alt="Avatar" class="img-fluid my-5" style="max-width: 150px;" />
                            
                            <p>${doctor.speciality}</p>
                            <i class="far fa-edit mb-5"></i>
                        </div>

                        <div class="col-md-8">
                            <div class="card-body p-4">
                                <h6><strong>Information</strong></h6>
                                <hr class="mt-0 mb-4">

                                <div class="row pt-1">
                                    <div class="col-6 mb-3">
                                        <h6>Email</h6>
                                        <p class="text-muted">${doctor.email}</p>
                                    </div>
                                    <div class="col-6 mb-3">
                                        <h6>Phone</h6>
                                        <p class="text-muted">${doctor.phone}</p>
                                    </div>
                                </div>

                                <h6><strong>Address</strong></h6>
                                <hr class="mt-0 mb-4">

                                <div class="row pt-1">
                                    <div class="col-6 mb-3">
                                        <h6>State</h6>
                                        <p class="text-muted">${doctor.state}</p>
                                    </div>
                                    <div class="col-6 mb-3">
                                        <h6>City</h6>
                                        <p class="text-muted">${doctor.city ? doctor.suburb : "Monterrey"}</p>
                                    </div>

                                    <div class="col-6 mb-3">
                                        <h6>Town</h6>
                                        <p class="text-muted">${doctor.town}</p>
                                    </div>
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
        headers += `<th scope="col">${header}</th>`;
    });

    var data = '';
    doctorsForPage.forEach((doctor, index) => {
        data += `
            <tr>
                <th scope="row"><img src="${doctor.profileImg}" class="img-fluid" style="max-width: 40px;" /> </th>
                <td>${doctor.firstName} ${doctor.lastName}</td>
                <td>${doctor.speciality}</td>
                <td>${doctor.state}</td>
                <td>${doctor.email}</td>
                <td>${doctor.state}</td>

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
        title.textContent = "Dr. " + modalDoctor.firstName + " " + modalDoctor.lastName;
        state.textContent = modalDoctor.state;
        city.textContent = modalDoctor.suburb ? modalDoctor.suburb : "Not specified";
        town.textContent = modalDoctor.town;
        zipcode.textContent = modalDoctor.zipcode;
    }

    bootstrapModal.show();
}


