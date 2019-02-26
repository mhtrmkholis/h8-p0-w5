function meleeRangedGrouping (str) {
  var str = str.split(",")
  var arr = []
  var melee = []
  var ranged = []
  var result = []
  for (i = 0; i < str.length; i++) {
    arr.push (str[i].split("-"))
  }
  for (i = 0; i < arr.length; i++) {
    if (arr[i][1] === "Melee") {
      melee.push (arr[i][0])
    }
    if (arr[i][1] === "Ranged") {
      ranged.push (arr[i][0])
    }
  }
  result.push (ranged, melee)
  return result
}

// TEST CASE

console.log(meleeRangedGrouping('Razor-Ranged,Invoker-Ranged,Meepo-Melee,Axe-Melee,Sniper-Ranged'));
// [ ['Razor', 'Invoker', 'Sniper'], ['Meepo', 'Axe'] ]

console.log(meleeRangedGrouping('Drow Ranger-Ranged,Chen-Ranged,Dazzle-Ranged,Io-Ranged'));
// [ ['Drow Ranger', 'Chen', 'Dazzle', 'Io'], [] ]

console.log(meleeRangedGrouping('')); // []