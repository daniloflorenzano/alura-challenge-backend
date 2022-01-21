import { Sequelize, DataTypes } from 'sequelize';

interface DespesasAttributes {
	descricao?: string;
	valor?: number;
	data?: string;
}

interface DespesasInstance {
	id: number;
	createdAt: Date;
	updatedAt: Date;

	descricao: string;
	valor: number;
	data: string;
}

export = (sequelize: Sequelize, DataTypes: any) => {
	var Despesas: any = sequelize.define('Despesas', {
		descricao: DataTypes.STRING,
		valor: DataTypes.INTEGER,
		data: DataTypes.STRING,
	});

	Despesas.associate = function (models: any) {
		// associations can be defined here
	};

	return Despesas;
};
