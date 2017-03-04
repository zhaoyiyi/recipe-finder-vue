export const nutrition = (nutrient, portion = 1) => {
  return nutrient ? `${Math.round(+nutrient.quantity * portion)} ${nutrient.unit}` : ''
}

export const roundNumber = (n, portion = 1) => Math.round(n * portion)
