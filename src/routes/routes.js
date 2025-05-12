import express from 'express';
const route = express.Router();

route.get('/', (req, res) => {
  const text = 'Este texto es de prueba';
  const data = [
    { name: 'Juan', lastname: 'Lopez', age: 20, city: 'Bogota' },
    { name: 'Pedro', lastname: 'Perez', age: 25, city: 'Medellin' },
    { name: 'Maria', lastname: 'Gomez', age: 30, city: 'Cali' },
  ];
  res.render('prueba', { text, data });
});

export default route;
