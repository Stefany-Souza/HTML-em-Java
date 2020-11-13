
let header = document.querySelector('header');
const novoh1 = document.createElement('h1');
header.appendChild(novoh1);
const texto = document.createTextNode('Pêssego');
novoh1.appendChild(texto); 
    
    
    
let main = document.querySelector('main');
let div1 = document.createElement('div');
let primeiroh2 = document.createElement('h2');
let textoh2 = document.createTextNode("Principal benefício do pêssego:");
primeiroh2.appendChild(textoh2);
div1.appendChild(primeiroh2);
let paragrafo1 = document.createElement('p');
let texto1 = document.createTextNode("Mantém a pele saudável: a Vitamina A e C presentes no pêssego fazem desta fruta um grande hidratante natural que ajuda a regenerar o tecido da pele. Curiosidade: você sabia que os compostos encontrados no pêssego são muitas vezes usados em cosméticos?");
paragrafo1.appendChild(texto1);
div1.appendChild(paragrafo1);
main.insertAdjacentElement('beforeend', div1);

//let main = document.querySelector('main'); arquivei pois já foi declarada a tag main.
let div2 = document.createElement('div');
let segundoh2 = document.createElement('h2');
let texto2h2 = document.createTextNode("Vitaminas e minerais");
segundoh2.appendChild(texto2h2);
div2.appendChild(segundoh2);
let paragrafo2 = document.createElement('p');
let texto2p = document.createTextNode("O pêssego é rico em vitamina A e C. O pêssego também apresenta as vitaminas K e E. É rico em sais minerais como o ferro, potássio, sódio, fósforo, iodo, cobre, manganês, carboidratos, fibras e cálcio. Repleto de vitaminas, minerais, antioxidantes e outros conteúdos químicos, os pêssegos são muito parecidos nutricionalmente com outros membros da sua família, como as ameixas, nectarina e amêndoas.");
paragrafo2.appendChild(texto2p);
div2.appendChild(paragrafo2);
main.insertAdjacentElement('beforeend', div2);












/*
    
let main = document.querySelector('main');
let div1 = document.createElement('div');
let paragrafo1 = document.createElement('p');
let texto1 = document.createTextNode("qualquer coisa");
paragrafo1.appendChild(texto1);
div1.appendChild(paragrafo1);
main.insertAdjacentElement('beforeend', div1)




const main = document.querySelector('main');
let div1 = document.createElement('div');
let primeiroH2 = document.querySelector('h2');
let primeiroP = document.querySelector('p');
div1.appendChild(primeiroH2);
div1.appendChild(primeiroP);
main.appendChild(div1);
const texto1 = document.createTextNode('Texto do primeiro h2 dentro da div');
primeiroH2.appendChild(texto1);
const textop = document.createTextNode('Texto do primeiro parágrafo dentro da div');
primeiroP.appendChild(textop);

let div2 = document.createElement('div');
let segundoH2 = document.querySelector('h2');
let segundoP = document.querySelector('p');
div2.appendChild(segundoH2);
div2.appendChild(segundoP);
main.appendChild(div2); 
const texto2 = document.createTextNode('Texto do segundo h2 dentro da div');
segundoH2.appendChild(texto2);
const textop2 = document.createTextNode('Texto do segundo parágrafo dentro da div');
segundoP.appendChild(textop2);
main.insertAdjacentElement('beforeend', div2);*/






















/*const main = document.querySelector('main');
const adiv = document.createElement('div');
main.appendChild(adiv);
const novoh2 = document.createElement('h2')
novadiv.appendChild(novoh2);
const textoh2 = document.createTextNode('texto h2');
novoh2.appendChild(texto);*/