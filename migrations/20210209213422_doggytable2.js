//Why do we need migration???

exports.up = function (knex) {
  return knex.schema.createTable("doggyplace", (table) => {
    table.increments().index();
    table.text("name");
    table.text("type");
    table.text("adress");
    table.integer("tel");
    table.text("fee");
    table.text("comment");
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable("doggyplace");
};
