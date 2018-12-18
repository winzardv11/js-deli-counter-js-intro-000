function takeANumber(line, customer) {
  line.push(customer)
  return `Welcome, ${customer}. You are number ${line.length} in line.`
}

function nowServing(katzDeliLine) {
  if (katzDeliLine.length === 0) {
    return 'There si nobody waiting to be served!'
  }
  return `Currently serving ${katzDeliLine.shift()}.`
}

