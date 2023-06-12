function decodeStringBase64() {
    let elemsToDecode = document.querySelectorAll('.needs-decoding');
  
    elemsToDecode.forEach(function(elem) {
      elem.innerText = atob(elem.innerText);
      if (elem.nodeName && elem.nodeName.toLowerCase() === 'a') {        
        if (elem.href === 'mailto:') {
          elem.href = 'mailto:' + elem.innerText
        }
      }
    });
}
