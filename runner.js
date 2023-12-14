const cypress = require('cypress')
const tesults = require('cypress-tesults-reporter');

const TOKEN = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6IjQxZjNkYmI2LWY1MDktNDQ0YS04NThmLWJjMmQwYmY0NjU1Yy0xNzAyNTU0OTE0NjM2IiwiZXhwIjo0MTAyNDQ0ODAwMDAwLCJ2ZXIiOiIwIiwic2VzIjoiODhhNTU0YTYtNjEzZS00ZjFkLTgwZjUtOWU4ZjhmODRkNGYyIiwidHlwZSI6InQifQ._c8XVCCHSv3kGx8ez61glPUKWZN2jXiuci2av8ObEZc'

cypress.run({
  // specs to run here
})
.then((results) => {
  const args = {
    target: TOKEN,
  }
  tesults.results(results, args);
})
.catch((err) => {
 console.error(err)
})
