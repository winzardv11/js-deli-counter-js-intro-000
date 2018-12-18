function takeANumber(line, customer) {
  line.push(customer)
  return `Welcome, ${customer}. You are number ${line.length} in line.`
}

function nowServing(line) {
  var first = line[0]
  if (line.length > 0) {
    line.shift()
  } else {
    return "There is nobody waiting to be served!"
  }
  return first
}