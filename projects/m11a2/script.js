const billEl = document.querySelector('#bill')

const tipEl = document.querySelector('#tipPct')

const peopleEl = document.querySelector('#people')

const tipOut = document.querySelector('#tipAmount')

const totalOut = document.querySelector('#totalDue')

const eachOut = document.querySelector('#perPerson')

const warningOut = document.querySelector('#warning')

function money (value) {
  return value.toFixed(2)
}

function blankTheReceipt () {
  tipOut.textContent = '--'
  totalOut.textContent = '--'
  eachOut.textContent = '--'
}

function render () {
  const bill = Number(billEl.value)
  const tipPct = Number(tipEl.value)
  let people = Number(peopleEl.value)

  if (billEl.value.trim() === '') {
    warningOut.textContent = 'Enter a bill amount.'
    blankTheReceipt()
    return
  }

  if (people < 1) {
    warningOut.textContent = 'You need at least one diner.'
    blankTheReceipt()
    return
  }

  warningOut.textContent = ''

  const tipAmount = bill * tipPct / 100
  const totalDue = bill + tipAmount
  const perPerson = totalDue / people

  tipOut.textContent = money(tipAmount)
  totalOut.textContent = money(totalDue)
  eachOut.textContent = money(perPerson)
}

billEl.addEventListener('input', render)

tipEl.addEventListener('change', render)

peopleEl.addEventListener('input', render)

render()
