l=console.log
q=String.fromCharCode(34)
a=[]
function r(b){a.push(b)}
function p(s,e){a.forEach(function(c){l(s+c+e)});if(s){l('p('+q+q+','+q+q+')');l('p('+q+'r('+q+'+q,q+'+q+')'+q+')')}}
r("l=console.log")
r("q=String.fromCharCode(34)")
r("a=[]")
r("function r(b){a.push(b)}")
r("function p(s,e){a.forEach(function(c){l(s+c+e)});if(s){l('p('+q+q+','+q+q+')');l('p('+q+'r('+q+'+q,q+'+q+')'+q+')')}}")
p("","")
p("r("+q,q+")")
