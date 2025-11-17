export const proyectos = [];

export function addProyecto(nombre, descripcion) {
  proyectos.unshift({ id: Date.now(), nombre, descripcion });
}

export function delProyecto() {
  proyectos.shift();
}

export function getProyectos() {
  return proyectos;
}