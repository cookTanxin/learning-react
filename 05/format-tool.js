function formatPrice (price) {
  if(typeof price === 'number') {
    return `￥${price.toFixed(2)}`
  } else {
    return `￥0`
  }
}
