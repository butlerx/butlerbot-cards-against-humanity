export default {
  up(queryInterface, { INTEGER, BOOLEAN }) {
    return queryInterface.createTable('cards', {
      id: {
        type: INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      text: {
        type: 'VARCHAR(512)',
      },
      question: {
        type: BOOLEAN,
      },
      times_played: {
        type: INTEGER,
      },
    });
  },

  down(queryInterface) {
    return queryInterface.dropTable('cards');
  },
};
