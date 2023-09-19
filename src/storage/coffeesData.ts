import { CoffeesDTO } from '@dtos/CoffeesDTO'

import CoffeeTradicional1 from '../assets/coffeeTradicional1.png'
import CoffeeTradicional2 from '../assets/coffeeTradicional2.png'
import CoffeeTradicional3 from '../assets/coffeeTradicional3.png'
import CoffeeTradicional4 from '../assets/coffeeTradicional4.png'
import CoffeeTradicional5 from '../assets/coffeeTradicional5.png'

import CoffeeDoce1 from '../assets/coffeeDoce1.png'
import CoffeeDoce2 from '../assets/coffeeDoce2.png'
import CoffeeDoce3 from '../assets/coffeeDoce3.png'

import CoffeeEspecial1 from '../assets/coffeeEspecial1.png'
import CoffeeEspecial2 from '../assets/coffeeEspecial2.png'
import CoffeeEspecial3 from '../assets/coffeeEspecial3.png'
import CoffeeEspecial4 from '../assets/coffeeEspecial4.png'

export const dataCoffee: CoffeesDTO[] = [
  {
    id: 1,
    name: 'Expresso Tradicional',
    description: 'O tradicional café feito com água quente e grãos moídos',
    price: 990,
    category: 'TRADICIONAL',
    image: CoffeeTradicional1,
  },
  {
    id: 2,
    name: 'Expresso Americano',
    description: 'Expresso diluído, menos intenso que o tradicional',
    price: 990,
    category: 'TRADICIONAL',
    image: CoffeeTradicional2,
  },
  {
    id: 3,
    name: 'Expresso Cremoso',
    description: 'Café expresso tradicional com espuma cremosa',
    price: 1090,
    category: 'TRADICIONAL',
    image: CoffeeTradicional3,
  },
  {
    id: 4,
    name: 'Latte',
    description: 'Café expresso com o dobro de leite e espuma cremosa',
    price: 1190,
    category: 'TRADICIONAL',
    image: CoffeeTradicional4,
  },
  {
    id: 5,
    name: 'Expresso Gelado',
    description: 'Bebida preparada com café expresso e cubos de gelo',
    price: 1090,
    category: 'TRADICIONAL',
    image: CoffeeTradicional5,
  },
  {
    id: 6,
    name: 'Capuccino',
    description: 'Bebida com canela feita de doses de café, leite e espuma',
    price: 1290,
    category: 'DOCE',
    image: CoffeeDoce1,
  },
  {
    id: 7,
    name: 'Mocaccino',
    description: 'Café expresso com calda de chocolate, pouco leite e espuma',
    price: 1390,
    category: 'DOCE',
    image: CoffeeDoce2,
  },
  {
    id: 8,
    name: 'Chocolate Quente',
    description: 'Bebida feita com chocolate dissolvido no leite quente e café',
    price: 1390,
    category: 'DOCE',
    image: CoffeeDoce3,
  },
  {
    id: 9,
    name: 'Cubano',
    description:
      'Drink gelado de café expresso com rum, creme de leite e hortelã',
    price: 1490,
    category: 'ESPECIAL',
    image: CoffeeEspecial1,
  },
  {
    id: 10,
    name: 'Havaiano',
    description: 'Bebida adocicada preparada com café e leite de coco',
    price: 1390,
    category: 'ESPECIAL',
    image: CoffeeEspecial2,
  },
  {
    id: 11,
    name: 'Árabe',
    description: 'Bebida preparada com grãos de café árabe e especiarias',
    price: 1390,
    category: 'ESPECIAL',
    image: CoffeeEspecial3,
  },
  {
    id: 12,
    name: 'Irlandês',
    description: 'Bebida a base de café, uísque irlandês, açúcar e chantilly',
    price: 1590,
    category: 'ESPECIAL',
    image: CoffeeEspecial4,
  },
]
