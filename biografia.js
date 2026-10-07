// Sustituye únicamente el texto entre las comillas invertidas por la biografía final.
// Separa los párrafos con una línea en blanco. Cambia provisional a false al aprobarla.
const biografiaMaestro = {
  provisional: true,
  texto: `Practico artes marciales desde 1991. Mi camino comenzó con el taekwondo ITF y continuó con el Kenpo Karate. Con más de 34 años de experiencia, sigo aprendiendo y compartiendo lo que la práctica me ha enseñado.

Mi formación reúne Kenpo, Kajukenbo, arte marcial filipina, Wing Chun, Kickboxing y Taichi Chen, además de diferentes cursos y seminarios.

La enseñanza forma parte de mi camino. Me he preparado a través de cursos de instrucción para niños, jóvenes, adultos, adultos mayores y personas con discapacidad.`,
};

const biografiaContenedor = document.querySelector('#master-biography');
if (biografiaContenedor) {
  const parrafos = biografiaMaestro.texto.trim().split(/\n\s*\n/).map(texto => {
    const parrafo = document.createElement('p');
    parrafo.textContent = texto.trim();
    return parrafo;
  });
  biografiaContenedor.replaceChildren(...parrafos);
  document.querySelector('.biography-status').hidden = !biografiaMaestro.provisional;
}
