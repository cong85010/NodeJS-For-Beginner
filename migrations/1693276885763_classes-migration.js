/* eslint-disable camelcase */

exports.shorthands = undefined;

exports.up = (pgm) => {
  pgm.createTable("classes", {
    id: {
      type: "integer",
      notNull: true,
      sequenceGenerated: {
        precedence: "ALWAYS",
      },
    },
    name: {
      type: "varchar(255)",
      notNull: true,
    },
  });
};

exports.down = (pgm) => {
  pgm.dropTable("classes", {
    ifExists: true,
  });
};
