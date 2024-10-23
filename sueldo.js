// Datos que debe igresar el usuario:
const nombre = 'Rodrigo '
const apellido = 'Calabrez'
const sueldoActual = 380000
const porcentajeAumento = 10

// Datos nuevos:
const calculoAumento = (sueldoActual * porcentajeAumento)/100
const nuevoSueldo = calculoAumento + sueldoActual


console.log(`Hola, estimad@ ${nombre + apellido}\n En base a su sueldo actual: $${sueldoActual}\n Ha recibido un aumento del ${porcentajeAumento}%: $${calculoAumento}\n Su nuevo sueldo es de: $${nuevoSueldo}`)