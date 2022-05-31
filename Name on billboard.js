function billboard(name, price = 30){
let nameCount = 0
for (let i = 0; i < name.length; i++){
  nameCount += price
}
  return nameCount
}
