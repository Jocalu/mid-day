interface Ingredient {
  name: string;
}
interface IngredientList {
  category: string;
  ingredient: Ingredient[];
}

export const ingredientsList:IngredientList[] = [
  {
    category: 'carnes',
    ingredient: [
      { name: 'ternera' },
      { name: 'cordero' },
      { name: 'cerdo' }
    ]
  },
  {
    category: 'pescados',
    ingredient: [
      { name: 'salmón' },
      { name: 'bacalao' },
      { name: 'dorada' },
      { name: 'lubina' }
    ]
  },
  {
    category: 'hortalizas',
    ingredient: [
      { name: 'calabacín' },
      { name: 'tomate' },
      { name: 'espinacas' },
      { name: 'rúcula' },
      { name: 'mezclum' },
      { name: 'zanahoria' },
      { name: 'cherrys' },
      { name: 'boniato' },
      { name: 'pimientos del padrón' }
    ]
  },
  {
    category: 'lácteos',
    ingredient: [
      { name: 'parmesano' },
      { name: 'yogurt' },
      { name: 'leche' },
      { name: 'nata' },
      { name: 'queso azul' },
      { name: 'mantequilla' }
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
      { name: 'almendras' },
      { name: 'pistachos' }
    ]
  },
  {
    category: 'frutas',
    ingredient: [
      { name: 'manzana' },
      { name: 'pera' },
      { name: 'plátano' },
      { name: 'sandía' },
      { name: 'fresas' },
      { name: 'frambuesas' },
      { name: 'arándanos' },
      { name: 'grosellas' },
      { name: 'mandarina' },
      { name: 'coco' },
      { name: 'limón' },
      { name: 'naranja' }
    ]
  },
  {
    category: 'legumbres y patatas',
    ingredient: [
      { name: 'garbanzos' },
      { name: 'lentejas' },
      { name: 'judías' },
      { name: 'patata monalisa' }
    ]
  },
  {
    category: 'setas',
    ingredient: [
      { name: 'ceps' },
      { name: 'girgolas' },
      { name: 'trompetas de la muerte' },
      { name: 'shitakes' }
    ]
  },
  {
    category: 'cereales',
    ingredient: [
      { name: 'arroz' },
      { name: 'quinoa' },
      { name: 'trigo' }
    ]
  },
  {
    category: 'aromáticos',
    ingredient: [
      { name: 'albahaca' },
      { name: 'romero' },
      { name: 'menta' },
      { name: 'vainilla' }
    ]
  },
  {
    category: 'tubérculos',
    ingredient: [
      { name: 'nabo' },
      { name: 'wasavi' }
    ]
  },
  {
    category: 'semillas',
    ingredient: [
      { name: 'sésamo' },
      { name: 'mostaza' }
    ]
  }
]
