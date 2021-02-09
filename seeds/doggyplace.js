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
