export function VNDCurrencyFormat(number: number) {
  return number.toLocaleString('vi', { style: 'currency', currency: 'VND' });
}
