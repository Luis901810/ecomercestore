const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
    sequelize.define('Videogames',{
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        description: {
            type: DataTypes.TEXT,
            allowNull: false,
          },
        discount:{
          type: DataTypes.FLOAT,
          defaultValue: 0,
        },
    
          image: {
            type: DataTypes.STRING,
            allowNull: false,
          },
    
          genre: {
            type: DataTypes.STRING,
            allowNull: false,
          },
    
          developer: {
            type: DataTypes.STRING,
            allowNull: false,
          },
    
          platform: {
            type: DataTypes.STRING,
            allowNull: false,
          },

          originalPrice: {
            type: DataTypes.FLOAT,
            allowNull: false,
          },      

          price: {
            type: DataTypes.FLOAT,
            allowNull: false,
          },
    
          stock: {//⭐revisar bien si esto despues hay que sacarlo!
            type: DataTypes.INTEGER,
            allowNull: false,
          },

          discount: {
            type: DataTypes.FLOAT,
            allowNull: false,
            defaultValue: 0,
          },
    
          deleted: {
            type: DataTypes.BOOLEAN,
            defaultValue: false,
          }
    },
    {
        freezeTableName: true,
        timestamps: false,
    })
}
