import swaggerJSDoc from 'swagger-jsdoc';
import swaggerUi from 'swagger-ui-express';
 
const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'Cheat Buster API',
      version: '1.0.0',
      description: 'An API to bust cheaters by email or name.',
    },
    servers: [
      {
        url: 'http://localhost:3000',
      },
    ],
  },
  apis: ['./routes/*.js'], // <- Path to your route files with Swagger comments
};
 
const swaggerSpec = swaggerJSDoc(options);
 
const exported = { swaggerSpec, swaggerUi };
export default exported;