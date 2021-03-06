"use strict";

module.exports = {
	up: (queryInterface, Sequelize) => {
		return queryInterface.createTable("Contacts", {
			id: {
				type: Sequelize.INTEGER,
				autoIncrement: true,
				primaryKey: true,
				allowNull: false,
			},
			name: {
				type: Sequelize.STRING,
				allowNull: false,
			},
			number: {
				type: Sequelize.STRING,
				allowNull: false,
				unique: true,
			},
			profilePicUrl: {
				type: Sequelize.STRING,
			},
			locationId: {
				type: Sequelize.INTEGER,
				references: { model: "DefaultLocations", key: "id" },
				onUpdate: "CASCADE",
				onDelete: "SET NULL",
			},
			createdAt: {
				type: Sequelize.DATE,
				allowNull: false,
			},
			updatedAt: {
				type: Sequelize.DATE,
				allowNull: false,
			},
		});
	},

	down: queryInterface => {
		return queryInterface.dropTable("Contacts");
	},
};
