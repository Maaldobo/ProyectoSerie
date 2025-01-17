# Calculadora de Series


Esta aplicación web calcula el resultado de series matemáticas personalizadas combinando números primos, triangulares y Fibonacci.

## Características
- Generación del n-ésimo número primo, triangular y de Fibonacci.
- Cálculo de la serie S(n) = 3 × primo(n) × triangular(n) / fibonacci(n-2).
- Incluye validaciones para garantizar que solo se procesen entradas válidas y maneja errores como divisiones por cero o valores fuera de la serie.
## Estructura
- Desarrollado con React.
- Dos componentes visuales para entrada y resultados.
- Lógica separada para cada tipo de serie.

## Instalación
- Clona este repositorio
git clone https://github.com/tuusuario/calculadora-serie.git

- Entra al directorio del proyecto
cd calculadora-serie

- Instala las dependencias
npm install

## Estructura
/src
├── components
│   ├── Form.jsx         # Componente para ingresar el número
│   ├── Resultado.jsx    # Componente para mostrar el resultado
├── services
│   ├── Operaciones.mjs  # Funciones matemáticas principales
├── App.jsx              # Componente raíz
└── index.js             # Punto de entrada de la aplicación

## Tecnologias
- React.js
- JavaScript (ES6+)
- HTML5 y CSS3
- Node.js
- Jest v29.7.0

## Test
- Evaluación de primeros 10 números naturales

## Autor
**Mario Domínguez**  
Ingeniero en Computacion | Desarrollador Web  

## Contacto

- LinkedIn: www.linkedin.com/in/mario-dominguez-92584b269
- GitHub: https://github.com/Maaldobo



