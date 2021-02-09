# doggy

Shell into psql, and create a database called notes.
Connect to your database. \c notes
Complete the following SQL code (replace the ??? values), and run it in your psql shell to create a table for your notes.

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
};
