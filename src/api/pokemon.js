var express = require('express');
var router = express.Router();
/* GET users listing. */
router.get('/catch', function(req, res, next) {
  let probability = Math.random() < 0.5 ? 0 : 1;
  res.send({probability});
});

router.get('/release', function(req, res, next) {
  const randomNum = Math.floor(Math.random() * 100) + 1;
  let isPrime = true
  if (randomNum <= 1) {
    isPrime= false;
  }

  for (let i = 2; i <= Math.sqrt(randomNum); i++) {
    if (randomNum % i === 0) {
      isPrime= false;
    }
  }

  if (isPrime) {
    res.json({ success: true, message: `Pokémon released successfully. Random number: ${randomNum}` });
  } else {
    res.json({ success: false, message: `Release failed. Random number: ${randomNum}` });
  }
});



router.put('/rename', (req, res) => {
  const { name } = req.body;
  const { renameCount } = req.body;
  console.log(req.body)
  let pokemonName = ""
  const fibonacciNumber = fibonacci(renameCount)

  if(renameCount === 0){
    pokemonName = `${name}-0`
  }else{
    pokemonName = `${name}-${fibonacciNumber}`
  }
  console.log(pokemonName)
 
  res.json({ pokemonName });
});


function fibonacci(n) {
  let prev = 0;
  let curr = 1;

  for (let i = 2; i <= n; i++) {
    const num = prev + curr;
    prev = curr;
    curr = num;
  }

  return curr;
}




module.exports = router;
