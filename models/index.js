
const Usuario = require('./Usuario');
const Aseguradora = require('./Aseguradora');
const Ajustador = require('./Ajustador');
const Siniestro = require('./Siniestro');


// Llaves foráneas de Siniestro
Ajustador.hasMany(Siniestro, {
    foreignKey: 'id_ajustador',
});
Siniestro.belongsTo(Ajustador, {
    foreignKey: 'id_ajustador',
});

Aseguradora.hasMany(Siniestro, {
    foreignKey: 'id_aseguradora',
});
Siniestro.belongsTo(Aseguradora, {
    foreignKey: 'id_aseguradora',
});

module.exports = {
    Ajustador,
    Aseguradora,
    Siniestro,
    Usuario,
}