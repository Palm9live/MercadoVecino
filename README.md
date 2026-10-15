# MercadoVecino

Aplicación móvil híbrida construida con **Ionic + Angular** (starter `sidemenu`).

## Requisitos

- Node.js >= 20
- npm o pnpm
- Ionic CLI (`npm i -g @ionic/cli`)

## Instalación

```bash
npm install
# o
pnpm install
```

## Ejecutar en desarrollo

```bash
ionic serve
```

La app se abre en `http://localhost:8100`.

## Scripts

| Comando        | Descripción                          |
|----------------|--------------------------------------|
| `npm start`    | Servidor de desarrollo (`ng serve`)  |
| `npm run build`| Build de producción (`ng build`)      |
| `npm test`     | Tests unitarios (`ng test`)          |
| `npm run lint` | Lint del código (`ng lint`)          |

## Estructura

```
src/
├── app/
│   ├── components/   # Componentes reutilizables
│   ├── pages/        # Páginas/rutas
│   ├── services/     # Servicios e inyección de dependencias
│   ├── models/       # Interfaces y tipos
│   └── guards/       # Guards de rutas
├── assets/
├── theme/
└── environments/
```

## Notas de seguridad

- Nunca subas archivos `.env`, claves o credenciales al repositorio.
- Usa `src/environments/environment.ts` solo para valores no sensibles.
- Los secretos deben gestionarse fuera del repo (variables de entorno en CI/CD).
