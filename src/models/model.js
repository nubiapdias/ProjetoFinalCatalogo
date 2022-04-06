import Sequelize from "sequelize";
import { connect } from "../database/connection.js"

export const musica = connect.define( 'musica', {
    id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
    },
    banda: {
        type: Sequelize.TEXT,
        allowNull: false
    },
    img: {
        type: Sequelize.TEXT,
        allowNull: false
    },
    ano: {
        type: Sequelize.TEXT,
        allowNull: false
    },
    url: {
        type: Sequelize.TEXT,
        allowNull: false
    },
    album: {
        type: Sequelize.TEXT,
        allowNull: false
    },
    creditos: {
        type: Sequelize.TEXT,
        allowNull: false
    },
    musicas: {
        type: Sequelize.TEXT,
        allowNull: false,
    }
}, {
    freezeTableName: true,
    createdAt: false,
    updateAt: false,
    timestamps: false
});

const initTable = async () => {
    await musica.sync()
}

initTable()