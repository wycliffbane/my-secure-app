// simpleTest.js
function add(a, b) {
  return a + b;
}

function runTests() {
  if (add(1, 2) === 3) {
    console.log('Test passed: 1 + 2 = 3');
  } else {
    console.log('Test failed: 1 + 2 should equal 3');
  }

  if (add(2, 3) === 5) {
    console.log('Test passed: 2 + 3 = 5');
  } else {
    console.log('Test failed: 2 + 3 should equal 5');
  }
}

// Run the tests
runTests();
