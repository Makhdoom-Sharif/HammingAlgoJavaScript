let sendBit = "1111";
var m = sendBit.length;

let r;
let RedaundentBitPositionArray = [];
String.prototype.InsertAt = function (CharToInsert, Position) {
  return this.slice(0, Position) + CharToInsert + this.slice(Position);
};

let pair = Array.from(sendBit);

for (r = 0; 2 ** r < m + r + 1; r++) {
  pair.splice(2 ** r - 1, 0, "r");
  RedaundentBitPositionArray.push(2 ** r);
  sendBit.InsertAt("r", 2 ** r);
}
let RedaundentBitContainingArray = pair;
// .join("");
console.log("no. of redaundent bit", r);
console.log("Redaundent Bit Positions", RedaundentBitPositionArray);
console.log("Redaundent Bit Containing Array", RedaundentBitContainingArray);
let difference;
for (let i = 0; i < r; i++) {
  difference = 2 ** i;
  console.log("difference", difference);
  let x = [];
  let y = 0;
  for (y; x.length < RedaundentBitContainingArray; y++) {
    if (y === 0) {
      x.push(y);
    }
  }
}
