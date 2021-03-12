export const hours:any[] = [
  { hour: '12:00' },
  { hour: '12:30' },
  { hour: '13:00' },
  { hour: '13:30' },
  { hour: '14:00' },
  { hour: '14:30' },
  { hour: '15:00' },
  { hour: '15:30' },
  { hour: '16:00' }
]

export const bookings:any[] = [
  {
    date: '02/04/2020',
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
    date: '02/04/2020',
    hour: '12:30',
    bookingName: 'Jose',
    phone: 666123123,
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

export const categories:any = [
  { name: 'ENTRANTES' },
  { name: 'ENSALADAS' },
  { name: 'SOPAS' },
  { name: 'SEGUNDOS' },
  { name: 'POSTRES' }]

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
