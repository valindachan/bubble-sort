let numbers = [14, 5, 10, 8, -9, 2]

function bubbleSort(list) {
  // Show the original array of numbers
  console.log(numbers)

  // Create a variable that tells you if two numbers have been swapped
  let thereWasASwap
  do {
    thereWasASwap = false

    // Go through the array and compare each set of two numbers until they are all sorted
    for (var i = 0; i < numbers.length; i++) {
      // If the first of the two number we're comparing is bigger, swap the order
      if (numbers[i] > numbers[i + 1]) {
        let bigger = numbers[i]
        numbers[i] = numbers[i + 1]
        numbers[i + 1] = bigger
        thereWasASwap = true
      }
    }
    console.log(numbers)
  } while (thereWasASwap)

  return numbers
}

bubbleSort(numbers)
