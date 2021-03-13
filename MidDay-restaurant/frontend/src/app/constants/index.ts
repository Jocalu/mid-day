interface Ingredient {
  name: string;
}
interface IngredientList {
  disabled?: boolean;
  category: string;
  ingredient: Ingredient[];
}

export const ingredientsList:IngredientList[] = [
  {
    category: 'carnes',
    ingredient: [
      { name: 'ternera' },
      { name: 'cordero' }
    ]
  },
  {
    category: 'pescados',
    ingredient: [
      { name: 'salmón' },
      { name: 'bacalao' }
    ]
  },
  {
    category: 'hortalizas',
    ingredient: [
      { name: 'calabacín' },
      { name: 'tomate' },
      { name: 'espinacas' }
    ]
  },
  {
    category: 'lácteos',
    ingredient: [
      { name: 'parmesano' },
      { name: 'yogurt' },
      { name: 'leche' }
    ]
  },
  {
    category: 'especias',
    ingredient: [
      { name: 'comino' },
      { name: 'canela' },
      { name: 'orégano' }
    ]
  },
  {
    category: 'frutos secos',
    ingredient: [
      { name: 'nueces' },
      { name: 'piñones' },
      { name: 'almendras' }
    ]
  },
  {
    category: 'frutas',
    ingredient: [
      { name: 'manzanas' },
      { name: 'peras' },
      { name: 'plátanos' }
    ]
  },
  {
    category: 'legumbres',
    ingredient: [
      { name: 'garbanzos' },
      { name: 'lentejas' },
      { name: 'judías' }
    ]
  }
]

interface Hours{
  hour: string,
  numOfbookings: string
}
export const hours:Hours[] = [
  { hour: '12:00', numOfbookings: '' },
  { hour: '12:30', numOfbookings: '' },
  { hour: '13:00', numOfbookings: '' },
  { hour: '13:30', numOfbookings: '' },
  { hour: '14:00', numOfbookings: '' },
  { hour: '14:30', numOfbookings: '' },
  { hour: '15:00', numOfbookings: '' },
  { hour: '15:30', numOfbookings: '' },
  { hour: '16:00', numOfbookings: '' }
]
interface Categories{
  name: string
}
export const categories:Categories[] = [
  { name: 'ENTRANTES' },
  { name: 'ENSALADAS' },
  { name: 'SOPAS' },
  { name: 'SEGUNDOS' },
  { name: 'POSTRES' }]

export const bookings:any[] = [
  {
    date: '12-03-2021',
    hour: '12:30',
    bookingName: 'Gerard',
    phone: 666123123,
    pax: 3,
    people: [{
      name: 'Gerard',
      allergies: 'altramuces, frutos secos',
      selections: {
        first: 'sopa',
        second: 'carne',
        dessert: 'yogurt'
      }
    },
    {
      name: 'Nil',
      allergies: 'altramuces, frutos secos',
      selections: {
        first: 'ensalada',
        second: 'pato',
        dessert: 'crema'
      }
    },
    {
      name: 'Ignasi',
      allergies: 'altramuces, frutos secos',
      selections: {
        first: 'ensalada',
        second: 'pato',
        dessert: 'crema'
      }
    }]
  },
  {
    date: '12-03-2021',
    hour: '12:30',
    bookingName: 'Andrea',
    phone: 611123123,
    pax: 3,
    people: [{
      name: 'Andrea',
      allergies: 'altramuces, frutos secos',
      selections: {
        first: 'sopa',
        second: 'carne',
        dessert: 'yogurt'
      }
    },
    {
      name: 'Paula',
      allergies: 'altramuces, frutos secos',
      selections: {
        first: 'ensalada',
        second: 'pato',
        dessert: 'crema'
      }
    },
    {
      name: 'Maria',
      allergies: 'altramuces, frutos secos',
      selections: {
        first: 'ensalada',
        second: 'pato',
        dessert: 'crema'
      }
    }]
  },
  {
    date: '13-03-2021',
    hour: '12:30',
    bookingName: 'Jose',
    phone: 622123123,
    pax: 1,
    people: [{
      name: 'Jose',
      allergies: 'altramuces, frutos secos',
      selections: {
        first: 'sopa',
        second: 'carne',
        dessert: 'yogurt'
      }
    }]
  }
]

interface Dishes {
  name: string;
}
interface DishesList {
  disabled?: boolean;
  category: string;
  dish: Dishes[];
}

export const dishesList:DishesList[] = [
  {
    category: 'Primeros',
    dish: [
      { name: 'Canelón de ceps con espuma de parmesano y rúcula frita' },
      { name: 'Gazpacho de sandía con fresones y reducción de módena' },
      { name: 'Tartar de salmón con tomate, albahaca y helado de wasabi' }
    ]
  },
  {
    category: 'Segundos',
    dish: [
      { name: 'Pescado de lonja con risotto de quinoa y verduritas' },
      { name: 'Entrecot con puré de boniato, pimientos del padrón y reducción de su jugo' }
    ]
  },
  {
    category: 'Postres',
    dish: [
      { name: 'Espuma de yogurt con crumble y frutos rojos' },
      { name: 'Mousse de tres chocolates con helado de vainilla' },
      { name: 'Fresas, bizcocho de pistacho y cremoso de mandarina' }
    ]
  }]
