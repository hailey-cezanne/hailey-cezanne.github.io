// Module 9, Activity 2 - The Curbside Thai Checkout

const DELIVERY_FEE = 50

const dishEl = document.querySelector('#dish')
const qtyEl = document.querySelector('#qty')
const deliveryEl = document.querySelector('#delivery')

const subtotalOut = document.querySelector('#subtotal')
const totalOut = document.querySelector('#total')

function getSubtotal(price, quantity) {
  return price * quantity
}

function getTotal(subtotal, hasDelivery) {
  if (hasDelivery) {
    return subtotal + DELIVERY_FEE
  }

  return subtotal
}

function render() {
  const price = Number(dishEl.value)
  const qty = Number(qtyEl.value)
  const hasDelivery = deliveryEl.checked

  const subtotal = getSubtotal(price, qty)
  const total = getTotal(subtotal, hasDelivery)

  subtotalOut.textContent = subtotal.toFixed(2)
  totalOut.textContent = total.toFixed(2)
}

dishEl.addEventListener('change', render)
qtyEl.addEventListener('input', render)
deliveryEl.addEventListener('change', render)

render()