function getFirstSelector(selector) {
  return document.querySelector(selector)
}
function nestedTarget(){
  return document.querySelector("#nested .target")
}
function increaseRankBy(n){
  var ranked = document.querySelectorAll('.ranked-list li')
  for (let i = 0; i < ranked.length; i++) {
    ranked[i].innerHTML = parseInt(ranked[i].innerHTML) + n
  }
}
function deepestChild(){
  var gNode = document.querySelector('div#grand-node')
  var divs = gNode.querySelectorAll('div')
  var res = ''
  for(var i = 0; i < divs.length; i++) {
    if(divs[i].querySelector('div') == null) {
      res = divs[i]
    }
  }
  return res
}
