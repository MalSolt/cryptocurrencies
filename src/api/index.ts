export const requestRates = async () => {
  const response = await fetch('https://www.cbr-xml-daily.ru/latest.js')
  return response.json()
}
