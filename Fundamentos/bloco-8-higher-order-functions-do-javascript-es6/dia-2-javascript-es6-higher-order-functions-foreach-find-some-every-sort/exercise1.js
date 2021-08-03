function authorBornIn1947() {
  // escreva aqui o seu código
  return books.find((book) => book.author.birthyear === 1947)
}

assert.strictEqual(authorBornIn1947(), 'Stephen King');