# VisionFlow

VisionFlow es un clon fullstack de Trello, construido con el objetivo de proporcionar una solución robusta y eficiente para la gestión de tareas y proyectos. Este proyecto se destaca por su enfoque en la interactividad del usuario, el rendimiento y la facilidad de uso, gracias a una cuidadosa selección de tecnologías modernas.

## Características

- **Gestión Intuitiva de Proyectos**: Interfaz al estilo Trello para una organización visual y eficiente.
- **Arrastrar y Soltar**: Mejora la interactividad y la experiencia del usuario.
- **Autenticación de Usuarios**: Seguridad y personalización en el acceso.
- **Integración con Stripe**: Opción para implementar funcionalidades de pago.
- **Responsive Design**: Adaptabilidad a diferentes dispositivos y tamaños de pantalla.

## Tecnologías y Librerías

### Frontend

- **Next.js (14.0.4)**: Elegimos Next.js por su capacidad de renderizado del lado del servidor (SSR), que mejora el SEO y el rendimiento. Además, su sistema de rutas y la integración con React facilitan el desarrollo de aplicaciones web modernas.
- **React (18)** y **React DOM (18)**: React es el corazón de nuestra aplicación, proporcionando una base sólida para construir interfaces de usuario con componentes reutilizables y un estado gestionado eficientemente.
- **Tailwind CSS**: Utilizamos Tailwind por su enfoque en la utilidad y su capacidad para escribir estilos rápidamente, lo que acelera el proceso de diseño sin sacrificar la personalización.

### Backend

- **Prisma (5.8.1)**: Prisma es nuestro ORM preferido para interactuar con la base de datos. Su diseño moderno y su facilidad de uso hacen que trabajar con bases de datos sea más intuitivo y seguro.

### Librerías Específicas

- **@hello-pangea/dnd (16.5.0)**: Proporciona una experiencia de arrastrar y soltar fluida y accesible, crucial para nuestra funcionalidad al estilo Trello.
- **@tanstack/react-query (5.17.15)**: Nos permite gestionar y sincronizar el estado del servidor con la UI, optimizando las cargas de datos y mejorando la experiencia del usuario.
- **Zustand (4.4.7)**: Una librería minimalista y fácil de usar para manejar el estado global de nuestra aplicación. Su simplicidad y eficiencia son ideales para nuestro proyecto.
- **date-fns (3.2.0)**, **lodash (4.17.21)**: Proporcionan utilidades para manejar fechas y operaciones de datos, mejorando la eficiencia del código.

### Herramientas de Desarrollo

- **ESLint (8)**, **Prettier**, **TypeScript (5)**: Estas herramientas mejoran la calidad del código y mantienen un estándar coherente en todo el proyecto.
- **Tailwind Merge (2.2.0)**: Optimiza las clases de Tailwind CSS, reduciendo conflictos y redundancias.

## Instalación y Uso

Para instalar y ejecutar VisionFlow localmente, sigue estos pasos:
git clone https://github.com/ianhein/visionflow.git

1. Clona el repositorio:

```
git clone https://github.com/ianhein/visionflow.git
```

2. Navega al directorio del proyecto:

```
  cd visionflow
```

3. Instala las dependencias:

```
 npm install
```

4. Inicia el servidor de desarrollo:

```
 npm run dev
```

### Uso del CLI de Stripe

El CLI de Stripe está incluido en el repositorio para facilitar la integración y prueba de las funcionalidades de pago. Para usarlo, sigue estos pasos:

1. **Autenticación con Stripe**:

   - Ejecuta el siguiente comando para iniciar sesión:
     ```
     stripe login
     ```
   - Se generará un enlace en tu terminal. Abre este enlace en tu navegador web para iniciar sesión en tu cuenta de Stripe.
   - Sigue las instrucciones en la página web para autenticar tu CLI de Stripe.

2. **Uso del CLI**:
   - Una vez autenticado, puedes usar el CLI de Stripe para ejecutar comandos específicos necesarios para tu proyecto, como probar webhooks o enviar solicitudes API.
3. **Uso del CLI para Probar Webhooks**:
   - Una vez autenticado, ejecuta el siguiente comando para escuchar eventos de webhook y redirigirlos a tu aplicación local:
     ```
     stripe listen --forward-to localhost:3000/api/webhook
     ```
   - Este comando permitirá que recibas eventos de Stripe en tu entorno de desarrollo, lo que es esencial para probar y desarrollar funciones relacionadas con pagos y webhooks.
