export default function randomIntFromInterval(min = 0, max = 1000) {
  return Math.floor(Math.random() * (max - min + 1) + min)
}
