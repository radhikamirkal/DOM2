 var itemList= document.querySelector('#items');
 console.log(itemList.parentNode);
 itemList.parentNode.style.backgroundColor= '#f4f4f4';
 console.log(itemList.parentNode.parentNode);

 console.log(itemList.children);
 console.log(itemList.children[1]);
 itemList.children[1].style.backgroundColor='yellow';

console.log(itemList.firstElementChild);
itemList.firstElementChild.textContent='Hello 1';

//lastchild
console.log(itemList.lastElementChild);
itemList.lastElementChild.textContent='Hello';

//next sibling
console.log(itemList.nextSibling);
console.log(itemList.nextElementSibling);

//previous sibling
console.log(itemList.previousSibling);
console.log(itemList.previousElementSibling);

var newdiv=document.createElement('div');
newdiv.className='hello';
newdiv.id='hello1';
newdiv.setAttribute('title', 'hello div');
var newdivtext=document.createTextNode('hello');
newdiv.appendChild(newdivtext);
var container = document.querySelector('header .container');
var h1=document.querySelector('header h1');

console.log(newdiv);

container.insertBefore(newdiv,h1);

