const cube = new Cube();

Cube.initSolver();

function scrambleCube(algorithm) {
  cube.move(Cube.inverse(algorithm));
  var solution = cube.solve(); // this will hopefully be different to the algorithm so that the user doesnt have the scramble end up the same as as the solution backwards
  return Cube.inverse(solution);
}

Document.getElementById('scramble').innerHTML = scrambleCube("R U R' U'"); // test
