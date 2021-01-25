/* EJERCICIO DE ALGORITMIA */

function palindrome (string){
    let foldString = string.split('').reverse().join('');
    if (foldString === string){
        console.log ('The word is palindrome');
    }else{
        console.log("The word is not palindrome");
    }
}

/* EJERCICIOS DE DOM */

/* Ejercicio 1: Crea un div */
div = document.createElement('div')

/* Ejercicio 2: Crea un svg */
document.createElementNS('http://www.w3.org/2000/svg','svg')

/* Ejercicio 3: Agrega una clase al div creado en el punto 1 */
div.classList.add('offDays')

/* Ejercicio 4: Agrega un estilo que cambie la propiedad color al punto 1 */
div.style.setProperty('color','green')

/* Ejercicio 5: Agrega un atributo id al punto 1 */
div.setAttribute('id','exam')

/* Ejercicio 6: Crea un página en blanco y agrega al body el div con "hello world" */
text = document.createTextNode('Hello World')
div.appendChild(text)
document.body.appendChild(div)

/* Ejercicio 7: Crea un nuevo div y agregalo como hijo al punto 1 antes de "hello world" */
child = document.createElement('div')
div.insertBefore(child,text)

/* Ejercicio 8: Dime los nodos que tiene el primer div */
div.childNodes

/* Ejercicio 9: Dime los elementos que tiene el primer div */
div.children

/* Ejercicio 10: Busca todos los div de la página */
document.querySelectorAll('div')

/*Ejercicio 11: Busca los div que contienen la clase agregada al punto 3 */
document.querySelectorAll('.offDays')

/*Ejercicio 12: Busca los div que tienen el id agregado en punto 5 */
document.querySelectorAll('#exam')

/* EJERCICIO DE CSS: Flexbox VS Grid (según mi experiencia con el calendario (porque buscar en Google también sé hacerlo))

La principal diferencia entre CSS Grid y Flexbox es que con Grid puedes pintar los elementos en dos dimensiones, columnas y filas al mismo tiempo DE FORMA ORDENADA Y SELECTIVA para el programador, mientras que con Flexbox solo puedes manejar una dimensión y los elementos, por decirlo mal y pronto, se van empujando. Por lo que el uso del flexbox se limita más a columnas o filas de elementos muy concretos. Y al ser tan concreto es posible que permita de mejor manera pulir la colocación de sus elementos para el programador. 
En el grid, en cambio, la ordenación de las partes (áreas) viene muy limitada por la ordenación del todo, por lo que es más complicado crear elementos más móviles e independientes en lo que a ordenación espacial del Layout se refiere. */
