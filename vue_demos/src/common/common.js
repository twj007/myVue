
export function getCookie(name){
  const cookies = window.document.cookie.split(';');
  for(let cookie of cookies){
    if (cookie.match(name)){
      return cookie
    }
  }
  return '';
}
