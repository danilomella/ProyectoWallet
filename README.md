# 💸 Alke Wallet

Bienvenido al repositorio de **Alke Wallet**, una simulación de billetera virtual. Este proyecto simula las operaciones bancarias esenciales en una interfaz web moderna y responsiva.

---

## 🚀 Funcionalidades del Proyecto

Esta aplicación Single Page Application (SPA) simulada permite realizar las siguientes acciones:

* **🔐 Autenticación:** Pantalla de login validada con credenciales predefinidas.
* **💳 Balance Dinámico:** Visualización del saldo actual que se actualiza mediante manipulación del DOM.
* **banking Operaciones:**
    * **Depositar:** Simulación de ingreso de dinero con validación positiva.
    * **Transferir:** Envío de dinero a terceros con buscador de contactos inteligente (Autocompletado).
* **📉 Historial:** Tabla de últimos movimientos con filtrado por tipo de transacción (Depósitos, Compras, Transferencias).
* **📱 Diseño Adaptable:** Interfaz 100% responsive utilizando el sistema de grillas de Bootstrap 5.

---

## 🛠️ Stack Tecnológico

El desarrollo se llevó a cabo utilizando las siguientes tecnologías y librerías:

* **HTML5:** Para la estructura semántica del sitio.
* **CSS3:** Estilos personalizados y variables.
* **Bootstrap 5.3:** Framework principal para la maquetación, componentes (Cards, Navbars, Alerts) y responsividad.
* **JavaScript :** Lógica de negocio y manejo de datos.
* **jQuery:** Librería para simplificar la manipulación del DOM, eventos y animaciones.
* **Git/GitHub:** Control de versiones y despliegue.

---

## 📂 Estructura de Archivos

El proyecto está organizado de la siguiente manera para mantener la legibilidad del código:

```text
📦 Alke-Wallet
 ┣ 📜 index.html          # Pantalla de Inicio de Sesión
 ┣ 📜 menu.html           # Dashboard principal
 ┣ 📜 deposit.html        # Módulo de depósitos
 ┣ 📜 sendmoney.html      # Módulo de transferencias
 ┣ 📜 transactions.html   # Historial de movimientos
 ┣ 📜 style.css           # Hoja de estilos global
 ┣ 📜 script.js           # Lógica del Login
 ┣ 📜 script_menu.js      # Lógica del Dashboard
 ┣ 📜 script_deposit.js   # Lógica de Depósitos
 ┣ 📜 script_sendmoney.js # Lógica de Transferencias
 ┗ 📜 script_transactions.js # Lógica de Movimientos 
```
---

## 🔑 Acceso y Credenciales

Para la evaluación del proyecto y la demostración funcional, el sistema cuenta con validación de usuario. Utiliza los siguientes datos para iniciar sesión:

| Rol | Correo Electrónico | Contraseña |
| :--- | :--- | :--- |
| **Usuario de Prueba** | `prueba@gmail.com` | `123` |

> **Nota:** Al ingresar, el sistema cargará automáticamente un saldo inicial simulado desde `localStorage` para permitir la realización de operaciones de prueba.

---

## 🛠️ Tecnologías Utilizadas

Este proyecto fue construido utilizando estándares modernos de desarrollo web, enfocándose en la modularidad y el diseño responsivo:

* **HTML5:** Estructura semántica del contenido.
* **CSS:** Estilos personalizados y diseño visual.
* **Bootstrap :** Framework CSS para componentes UI (Navbars, Cards, Modals) y sistema de grillas responsive.
* **JavaScript :** Lógica del cliente, manejo del DOM y eventos.
* **jQuery:** Librería para simplificar la interacción con el documento HTML y animaciones.
* **Git & GitHub:** Control de versiones y despliegue (GitHub Pages).

---


## 👨‍💻 Autor

**Danilo Mella**
