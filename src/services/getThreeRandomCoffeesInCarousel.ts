import { CoffeesDTO } from '@dtos/CoffeesDTO'

import { getAllCoffees } from './getAllCoffes'

export function getThreeRandomCoffeesInCarousel() {
  const list: CoffeesDTO[] = []

  const coffeesTradicional = getAllCoffees({
    category: 'TRADICIONAL',
    search: '',
  })
  const coffeeTradicional =
    coffeesTradicional[Math.floor(Math.random() * coffeesTradicional.length)]
  list.push(coffeeTradicional)

  const coffeesDoce = getAllCoffees({ category: 'DOCE', search: '' })
  const coffeeDoce = coffeesDoce[Math.floor(Math.random() * coffeesDoce.length)]
  list.push(coffeeDoce)

  const coffeesEspecial = getAllCoffees({ category: 'ESPECIAL', search: '' })
  const coffeeEspecial =
    coffeesEspecial[Math.floor(Math.random() * coffeesEspecial.length)]
  list.push(coffeeEspecial)

  return list
}
