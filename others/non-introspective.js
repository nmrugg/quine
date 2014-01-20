q=String.fromCharCode(34)
x='p()'
a=[]
function r(b){a.push(b)}
function p(s,e){a.forEach(function(c){console.log(s+c+e)});if(s){console.log('p('+q+q+','+q+q+')');console.log('p('+q+'r('+q+'+q,q+'+q+')'+q+')')}}
r("q=String.fromCharCode(34)")
r("x='p()'")
r("a=[]")
r("function r(b){a.push(b)}")
r("function p(s,e){a.forEach(function(c){console.log(s+c+e)});if(s){console.log('p('+q+q+','+q+q+')');console.log('p('+q+'r('+q+'+q,q+'+q+')'+q+')')}}")
p("","")
p("r("+q,q+")")
