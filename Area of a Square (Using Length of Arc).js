function squareArea(A){
  let circ = A * 4
  let rad = circ / (2 * Math.PI)
  let area = rad**2
  return Math.round(area * 100)/ 100
}
