/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface) {
    const chirpsData = [
      {
        image: 'https://news-ru.gismeteo.st/2018/10/6e9490b4.jpg',
        date: '15.04.2022',
        description: 'очень плохая погода',
        user_id: 1,
      },
      {
        image: 'https://hvost.news/upload/resize_cache/iblock/18f/750_400_1/kak_ponyat_chto_sobaka_zastudilas.jpg',
        date: '20.05.2021',
        description: 'а у меня собачка заболела',
        user_id: 1,
      },
      {
        image: 'https://s.ura.news/760/images/news/upload/news/637/070/1052637070/643150_Loterei_Tyumeny_lotereya_lotereynie_bileti_loterei_lotereyniy_bilet_250x0_3600.2400.0.0.jpg',
        date: '01.06.2022',
        description: 'Купил на прошлой неделе лотерейный билет, выиграл 100 000 р',
        user_id: 2,
      },
      {
        image: 'https://images.unian.net/photos/2023_01/thumb_files/800_0_1674125237-3557.jpg?r=696687',
        date: '22.12.2022',
        description: 'Зацените какую открытку я купил бабушке',
        user_id: 2,
      },
      {
        image: 'https://amsrus.ru/wp-content/uploads/2016/12/santa.jpg',
        date: '22.10.2022',
        description: 'А мне дед дал вчера погонять на мото',
        user_id: 3,
      },
      {
        image: 'https://what-to-wear.org/wp-content/uploads/2018/10/maxresdefault_31.jpg',
        date: '10.10.2010',
        description: 'Гулял на свадьбе брата, очень понравилось',
        user_id: 4,
      },
      {
        image: 'https://muzobozrenie.ru/wp-content/uploads/2020/05/la_scala.jpg',
        date: '10.10.2018',
        description: 'Ходил в театр, не погравилось',
        user_id: 4,
      },

    ];
    const chirps = chirpsData.map((chirp) => ({
      ...chirp,
      createdAt: new Date(),
      updatedAt: new Date(),
    }));
    await queryInterface.bulkInsert('Chirps', chirps);
  },

  async down(queryInterface) {
    await queryInterface.bulkDelete('Chirps');
  },
};
