function createNumberNoInclude(min, max, array) {
  const aleatorio = parseInt(Math.random() * (max + 1 - min)) + min
  return array.includes(aleatorio)
    ? createNumberNoInclude(min, max, array)
    : aleatorio
}

function createNumbers(amount) {
  const numbers = Array(amount)
    .fill(0)
    .reduce((nums) => {
      const newNumber = createNumberNoInclude(1, 60, nums)

      return [ ...nums, newNumber]
    }, [])
    .sort((n1, n2) => n1 - n2)

  return numbers
}