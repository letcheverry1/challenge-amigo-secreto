# challenge-amigo-secreto
# 🎁 Amigo Secreto

Aplicación web sencilla para crear una lista de amigos y **sortear** un nombre al azar. 


---

## 🧭 Índice

- [Demo local](#-demo-local)
- [Estructura del proyecto](#-estructura-del-proyecto)
- [Requisitos del desafío y cómo se cumplen](#-requisitos-del-desafío-y-cómo-se-cumplen)
- [Cómo funciona](#-cómo-funciona)
- [Validaciones implementadas](#-validaciones-implementadas)
- [Guía de pruebas manuales](#-guía-de-pruebas-manuales)
- [Accesibilidad](#-accesibilidad)


---

## 🚀 Demo local

No requiere dependencias ni servidor. Opciones:

1. **Abrir directamente** `index.html` en tu navegador.

---

## 🗂️ Estructura del proyecto

├── index.html
├── style.css
└── app.js


> El JavaScript se apoya en los siguientes **IDs** del HTML:  
> `amigo`, `listaAmigos`, `resultado` y el botón de sorteo `Sortear amigo`.

---

## ✅ Requisitos del desafío y cómo se cumplen

- **Array de nombres**  
  `let nombres = [];` en `app.js`.

- **Agregar nombres**  
  `agregarAmigo()` toma el valor del input `#amigo`, **valida** y lo agrega con `nombres.push(newAmigo)`.

- **Validar entrada**  
  - Vacío → `alert("Ingrese un nombre.")`
  - Contiene números → `alert("NO pongas numeros")`  
  - Duplicado exacto → `alert("Este nombre se repite...")`

- **Visualizar la lista**  
  `mostrarAmigos()` hace `listaAmigos.innerHTML = ""` y recorre `nombres` creando `<li>` por cada elemento.

- **Sorteo aleatorio**  
  `sortearAmigo()` valida que haya elementos, calcula un índice con  
  `Math.floor(Math.random() * nombres.length)`, obtiene el nombre y lo muestra en `#resultado`.

- **Limpieza de campo**  
  `borrarCampo()` restablece el input y limpia el contenedor `#resultado`.

- **Reiniciar**  
  `reiniciarJuego()` vacía el array y resetea la interfaz.

---

## 🔎 Cómo funciona

1. Escribe un nombre en el input y pulsa **Añadir**.  
2. El nombre pasa por las **validaciones**.  
3. Si es válido, se agrega al array `nombres` y se repita la lista (`<ul id="listaAmigos">`).  
4. Con **Sortear**, se elige un índice aleatorio del array y se muestra el resultado en `<ul id="resultado">`.  
5. **Reiniciar** borra la lista, el resultado y el campo de texto.

---

## 🛡️ Validaciones implementadas

- **Campo vacío**: bloqueado.
- **Números en el nombre**: bloqueado con una RegExp (`/\d/.test(newAmigo)`).
- **Duplicados**: bloqueados usando `nombres.includes(newAmigo)` (coincidencia **sensible a mayúsculas**; ver mejoras para hacerla insensible).

---

## 🧪 Guía de pruebas manuales

1. **Vacío**  
   - Clic en *Añadir* sin escribir → aparece alerta “Ingrese un nombre.”
2. **Con números**  
   - Escribir `Juan123` → alerta “NO pongas numeros”.
3. **Duplicado**  
   - Agregar `Ana` dos veces → alerta de duplicado.
4. **Listado**  
   - Agregar `Ana`, `Luis`, `Sofía` → deben verse 3 `<li>` en `#listaAmigos`.
5. **Sorteo**  
   - Con lista llena, clic en *Sortear* → aparece un ganador en `#resultado`.
   - Sin nombres, clic en *Sortear* → alerta “No hay nombres para sortear”.
6. **Reiniciar**  
   - Clic en *Reiniciar* → lista y resultado vacíos; input limpio.
7. **Enter para añadir** (si lo añadiste en tu HTML/JS)  
   - Presiona Enter tras escribir un nombre → se agrega.

---

## ♿ Accesibilidad

- El contenedor de resultado puede usar `aria-live="polite"` (si está en el HTML) para que lectores de pantalla anuncien el nombre sorteado.
- Los textos de los botones describen su acción.

---


