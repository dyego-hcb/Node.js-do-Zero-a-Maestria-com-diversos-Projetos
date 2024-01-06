const {Sequelize} = require('sequelize');

const sequelize = new Sequelize('nodesequelize', 'root', 'zb123456', {
    host: 'localhost',
    dialect: 'mysql'
});

try
{
    sequelize.authenticate();
    console.log('BD Connect sucess with sequelize.');
}catch(err)
{
    console.log('Not possible connect to BD: ', err);
}

module.exports = sequelize;