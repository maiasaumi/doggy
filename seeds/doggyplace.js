/*exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('table_name').del()
    .then(function () {
      // Inserts seed entries
      return knex('table_name').insert([
        {id: 1, colName: 'rowValue1'},
        {id: 2, colName: 'rowValue2'},
        {id: 3, colName: 'rowValue3'}
      ]);
    });
};*/

exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex("doggyplace")
    .del()
    .then(function () {
      // Inserts seed entries
      return knex("doggyplace").insert([
        {
          id: 0,
          name: "Emifull",
          type: "dog run",
          adress: "850, Tsuzui, Masaki-cho, Iyo-gun, Ehime",
          tel: 0899842111,
          fee: "free",
          comment:
            "Large Breeds can come. There's a big mall right next to the dog run, so you can take turns taking care of your dog, then enjoy some shopping!",
        },
        {
          id: 1,
          name: "Dogo Forest Garden",
          type: "dogrun",
          adress: "531-1, Mizonobemachi-otsu, Matsuyama, Ehime",
          tel: 0899937366,
          fee: "500 yen for 1 hour",
          comment:
            "This is a private, reservation-only dog run. 5 dog run sections are available, and you can play in your favorite spot.",
        },
        {
          id: 2,
          name: "Tabikago Ayakura",
          type: "hotel",
          adress: "2645, Machida, Kokonoemachi, Kusugun, Oita",
          tel: 0973732655,
          fee: "depends on seasons",
          comment:
            "A completely separate inn where you can stay with your pet, an important member of the family. Spend time with your dog in the guest room together.",
        },
      ]);
    });
};

/*
0:{
  "name": "Emifull Masaki",
  "type": "dogrun"
  "adress": "850, Tsuzui, Masaki-cho, Iyo-gun, Ehime",
  "tel": "089-984-2111",
  "fee" : "free",
  "comment": "Large Breeds can come. There's a big mall right next to the dog run, so you can take turns taking care of your dog, then enjoy some shopping!"
  },
  
  create table doggyplace (id serial, name varchar(80), type varchar(80), adress varchar(200), tel int, fee varchar(80), comment varchar(500), PRIMARY KEY(id));
  
  CREATE TABLE notes(id serial NOT NULL, name varchar(80) NOT NULL, type varchar(80) NOT NULL, adress varchar(200) NOT NULL, tel int NOT NULL, fee varchar(80) NOT NULL, comment varchar(500) NOT NULL, PRIMARY KEY (id));
  
  insert into doggyplace values (0, 'Emifull', 'dog run', '850 Tsuzui Masaki-cho Iyo-gun Ehime', 0899842111, 'for free', 'Large Breeds can come. You can also enjoy shopping at a big mall right next to the dog run!');
  
  INSERT INTO doggyplace VALUES (1, 'Dogo Forest Garden', 'dog run', '531-1 Mizonobemachi-otsu Matsuyama Ehime', 0899937366, '500 yen for 1 hour', 'This is a private, reservation-only dog run. 5 dog run sections are available, and you can play in your favorite spot.');
  
  INSERT INTO doggyplace VALUES (2, 'Fujimien', 'hotel', '5733 Inokuchi Kamiuracho Imabari Ehime', 897872025, 'Depends on the season', 'You can stay in the same room and walk your dog on the beach.');
  
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
  };*/
