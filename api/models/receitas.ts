import { Sequelize, DataTypes } from 'sequelize';

interface ReceitasAttributes {
	descricao?: string;
	valor?: number;
	data?: string;
}

interface ReceitasInstance {
	id: number;
	createdAt: Date;
	updatedAt: Date;

	descricao: string;
	valor: number;
	data: string;
}

export = (sequelize: Sequelize, DataTypes: any) => {
	var Receitas: any = sequelize.define('Receitas', {
		descricao: DataTypes.STRING,
		valor: DataTypes.INTEGER,
		data: DataTypes.STRING,
	});

	Receitas.associate = function (models: any) {
		// associations can be defined here
	};

	return Receitas;
};
