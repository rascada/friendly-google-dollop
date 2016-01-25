export default function(srch) {
  srch.onkeydown = function() {
  let rand = _ => Math.random() * srch.value.length | 0;
  let randChar = _ => srch.value.charAt(rand());
  
  srch.value = srch.value.replace(randChar(), randChar());
  }
}
