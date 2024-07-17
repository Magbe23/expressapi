const express = require('express');
const { faker } = require('@faker-js/faker');

const app = express();
const port = 3000;

// Clase Usuario
class Usuario {
    constructor() {
        this._id = faker.string.uuid(); 
        this.primerNombre = faker.person.firstName(); 
        this.apellido = faker.person.lastName(); 
        this.numeroTelefono = faker.phone.number(); 
        this.email = faker.internet.email();
        this.contraseña = faker.internet.password();
    }
}

// Clase Empresa
class Empresa {
    constructor() {
        this._id = faker.string.uuid();
        this.nombre = faker.company.name(); 
        this.direccion = {
        calle: faker.location.street(), 
        ciudad: faker.location.city(), 
        estado: faker.location.state(), 
        codigoPostal: faker.location.zipCode(), 
        pais: faker.location.country(), 
        };
    }
}

// Ruta para el endpoint raíz
app.get('/', (req, res) => {
    res.send('Bienvenido a la API de Faker');
});

// Rutas API
app.get('/api/users/new', (req, res) => {
    const newUser = new Usuario();
    res.json(newUser);
});

app.get('/api/companies/new', (req, res) => {
    const newCompany = new Empresa();
    res.json(newCompany);
});

app.get('/api/user/company', (req, res) => {
    const newUser = new Usuario();
    const newCompany = new Empresa();
    res.json({ usuario: newUser, empresa: newCompany });
});

// Iniciar el servidor
app.listen(port, () => {
    console.log(`Servidor corriendo en http://localhost:${port}`);
});
