function meleeRangedGrouping (str) {
  if (str.length === 0){
    return "[]"
  }

  var arr = str.split(",");
  var arr2 = []
  var result = [[],[]];

  for (var i = 0 ; i < arr.length ; i++){
    arr2.push(arr[i].split("-"));
  }

  for (var i = 0 ; i < arr2.length ; i++){
    if (arr2[i][1] === "Ranged"){
      result[0].push(arr2[i][0])
    } else if (arr2[i][1] === "Melee"){
      result[1].push(arr2[i][0])
    }
  }

  return result;
}

// TEST CASE

console.log(meleeRangedGrouping('Razor-Ranged,Invoker-Ranged,Meepo-Melee,Axe-Melee,Sniper-Ranged'));
// [ ['Razor', 'Invoker', 'Sniper'], ['Meepo', 'Axe'] ]

console.log(meleeRangedGrouping('Drow Ranger-Ranged,Chen-Ranged,Dazzle-Ranged,Io-Ranged'));
// [ ['Drow Ranger', 'Chen', 'Dazzle', 'Io'], [] ]

console.log(meleeRangedGrouping('')); // []