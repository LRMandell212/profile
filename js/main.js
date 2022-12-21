/*
* Project Name: Github Profile -
* Author: Lee Mandell
*/

console.log('Aloha');

// ***** GLOBALS


// ***** FUNCTION DEFINITIONS

function updateCopyright() {
  const elCopyrightDate = document.querySelector('.copyright span');
  const myDate = new Date();

  elCopyrightDate.innerHTML = `&thinsp;&ndash;&thinsp;${myDate.getFullYear()}`;
  elCopyrightDate.removeAttribute('hidden');
}

// ***** ON PAGE LOAD

updateCopyright();