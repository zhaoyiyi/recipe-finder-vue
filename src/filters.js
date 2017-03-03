export const nutrition = (nutrient) => {
  return nutrient ? `${Math.round(nutrient.quantity)} ${nutrient.unit}` : ''
}

export const roundNumber = n => Math.round(n)
