/*
  Escribe una funcion que al pasarle un numero:
  - Muestra "fizz" si es multiplo de 3.
  - Muestra "buzz" si es multiplo de 5.
  - Muestra "fizzbuzz" si es multiplo de 3 y 5.
  - Muestra el numero si no es multiplo de ninguno de los anteriores.
*/

export const fizzbuzz = (num) => {
  if (typeof num !== 'number') throw new Error('param is not a number')
  if (Number.isNaN(num)) throw new Error('param is not a number')

  const multiples = {
    3: 'fizz',
    5: 'buzz',
  }

  let result = ''

  Object.entries(multiples).forEach(([multiple, word]) => {
    num % multiple === 0 && (result += word)
  })

  return result === '' ? num : result
}
