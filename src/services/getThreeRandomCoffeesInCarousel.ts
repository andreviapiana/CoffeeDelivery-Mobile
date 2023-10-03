import { dataCoffee } from '@storage/coffeesData'

export function getThreeRandomCoffeesInCarousel() {
  // Armazenando as diferentes categorias //
  const categories = {} as any

  // Agrupar os itens por categoria //
  dataCoffee.forEach((section) => {
    section.data.forEach((item) => {
      if (!categories[item.category]) {
        categories[item.category] = []
      }
      categories[item.category].push(item)
    })
  })

  // Armazenando os itens escolhidos //
  const randomItems = []

  // Escolher aleatoriamente um item de cada categoria //
  for (const category in categories) {
    const itemsInCategory = categories[category]
    const randomIndex = Math.floor(Math.random() * itemsInCategory.length)
    randomItems.push(itemsInCategory[randomIndex])
  }

  // Retornar o 3 itens escolhidos de forma randômica //
  return randomItems
}
