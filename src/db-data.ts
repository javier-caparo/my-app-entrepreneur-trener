export interface EntrepreneurElement {
    id: number;
    name: string;
    owner: string;
    phone: string;
    category: string;
    symbol: string;
    description: string;
    fanpage: string;
}

export const ELEMENT_DATA: EntrepreneurElement[] = [
    {
        id: 1,
        name: 'FROGS',
        owner: 'Melissa Mena',
        phone: '981028572',
        category: 'Ropa',
        symbol: './assets/images/frogs-symbol.jpg',
        description: `Ropa para divertirse - niñas y niños. Consulta por el catalogo actulizado`,
        fanpage: 'https://www.facebook.com/frogsclothing/'
        }, {
        id: 2,
        name: 'Dulce Latido',
        owner: 'Mafer Barba',
        phone: '987528908',
        category: 'Postres',
        symbol: './assets/images/dulce_latido-symbol.jpg',
        description: `Postres riquisimos !!!.`,
        fanpage: 'https://www.facebook.com/Dulce-Latido-112818273524221/'
    },
    {
        id: 3,
        name: 'La estancia',
        owner: 'Gisela Gonzalez',
        phone: '941105171',
        category: 'Postres',
        symbol: './assets/images/la_estancia-symbol.jpg',
        description: `Postres dulces y salados caseros. Elige y engriete.`,
        fanpage: 'https://www.facebook.com/laestanciadulcesysaladoscaseros/'
    },
    {
        id: 4,
        name: 'Mary Kay',
        owner: 'Johanna Garcia',
        phone: '947115397',
        category: 'Belleza',
        symbol: './assets/images/johanna_garcia-symbol.jpg',
        description: `Mary Kay - productos de belleza`,
        fanpage: ''
    },
    {
        id: 5,
        name: 'Lasañas Caseras Pia',
        owner: 'Pia Garcia',
        phone: '994207276',
        category: 'Comida',
        symbol: './assets/images/lasannia_casera_pia-symbol.jpg',
        description: `Lasaña de carne, de pesto con salsa blanca y pollo`,
        fanpage: ''
    },
    {
        id: 6,
        name: 'Just',
        owner: 'Naty Burga',
        phone: '932128632',
        category: 'Belleza',
        symbol: './assets/images/natty_burga_just-symbol.jpg',
        description: `Productos Just`,
        fanpage: ''
    },
    {
        id: 7,
        name: 'Ronda Samay',
        owner: 'Lorena',
        phone: '997927652',
        category: 'Educacion',
        symbol: './assets/images/ronda_samay-symbol.jpg',
        description: `Ronda Samay es un espacio que compartir con los niños, los padres y los maestros, experiencias través del arte, la danza, el movimiento y la creación de historias. rondasamay@gmail.com`,
        fanpage: 'https://www.facebook.com/Ronda-Samay-109326060777532/'
    },
    {
        id: 8,
        name: 'Cafe - Sergio',
        owner: 'Sergio Lossio',
        phone: '946087811',
        category: 'Cafe',
        symbol: './assets/images/sergio_lossio_cafe-symbol.jpg',
        description: `Cafe Arabico de Huancabamba - Oxapampa, Variedad: Catimor - Caturra ; Proceso: Lavado ; Tostado: Medio; Perfil en taza: aroma, cítrico - canela, cuerpo medio, acidez suave , sabor caramelo - chocolate `,
        fanpage: ''
    },
    {
        id: 9,
        name: 'Pintamos y Ayudamos',
        owner: 'Maritza Baca',
        phone: '997897019',
        category: 'Arte',
        symbol: './assets/images/pintamos_y_ayudamos-symbol.jpg',
        description: `Rogelio es artesano y elabora hermosas alcancías. Por la pandemia hoy cuida a sus hijos y necesita también mantener a su familia. Esta página sirve para ayudarlo, comprando alcancías de yeso para pintar con témperas y otras pinturas. Elige tu modelo!`,
        fanpage: 'https://www.facebook.com/pinto.ahorro.ayudo/'
    },
    {
        id: 10,
        name: 'Mesa 24',
        owner: 'Carlos Callirgos',
        phone: '989032616',
        category: 'App Gastronomica',
        symbol: './assets/images/mesa24_7-symbol.png',
        description: `Reserva facil. Disfruta mas. Reservas Online en los mejores restaurantes del Peru. reserva tu mesa gratis`,
        fanpage: 'https://m.mesa247.pe/#/'
    },

];