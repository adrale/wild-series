const AbstractSeeder = require('./AbstractSeeder')

class CategorySeeder extends AbstractSeeder {
  constructor() {
    // Call the constructor of teh parent class (AbstractSeeder) with appropriate options
    super({table: "category", truncate: true})
  }

  run() {
    const categories = [{name: "Comédie"}, {name: "Science-Fiction"}]

    categories.forEach((category) => {
      const categoryWithRefName = {
        ...category,
        refName: `category_${category.name}`
      }
      this.insert(categoryWithRefName)
    })
  }
}

module.exports = CategorySeeder