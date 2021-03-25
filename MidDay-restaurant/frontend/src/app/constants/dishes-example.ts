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
      { name: 'Tartar de salmón con tomate, albahaca y helado de wasabi' },
      { name: 'Ensalada de la huerta con verduritas y vinagreta cítrica' },
      { name: 'Steak tartar con patatas paja y helado de mostaza' }
    ]
  },
  {
    category: 'Segundos',
    dish: [
      { name: 'Pescado de lonja con risotto de quinoa y verduritas' },
      { name: 'Entrecot con puré de boniato, pimientos del padrón y reducción de su jugo' },
      { name: 'Tataki de salmón con reducción de frambuesa y shitakes confitados' },
      { name: 'Solomillo de cerdo con milhojas de trompetas de la muerte y salsa de mostaza' },
      { name: 'Risotto de ceps con manzana y queso azul' }
    ]
  },
  {
    category: 'Postres',
    dish: [
      { name: 'Espuma de yogurt con crumble y frutos rojos' },
      { name: 'Mousse de tres chocolates con helado de vainilla' },
      { name: 'Fresas, bizcocho de pistacho y cremoso de mandarina' },
      { name: 'Cremoso de coco con sésamo y sus cítricos' },
      { name: 'Secreto de limón con helado de frambuesa y crumble de vainilla' }
    ]
  }]
