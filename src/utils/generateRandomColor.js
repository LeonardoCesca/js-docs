import generateRandomNumber from "./generateRandomNumber"

export default function generateRandomRGBColor(includeOpacity = false) {
  const params = includeOpacity ? 4 : 3

  const values = Array.from({ length: params }).map((_, i) => {
    if (includeOpacity)
      return i === params - 1
        ? (generateRandomNumber(0, 1000) / 1000).toFixed(2)
        : generateRandomNumber(0, 255)

    return generateRandomNumber(0, 255)
  })

  let color = includeOpacity ? "rgba" : "rgb"
  color += `(${values.join(", ")})`
  return color
}
