const { generateHash } = require('authenticare/server')

exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('users')
    .del()
    .then(() =>
      Promise.all([
        generateHash('gideon1'),
        generateHash('lewis1'),
        generateHash('marika1'),
        generateHash('evelyn1'),
        generateHash('hayley'),
        generateHash('ben'),
        generateHash('redCross'),
        generateHash('kidsCan'),
        generateHash('breastCancerFoundation'),
        generateHash('unicef'),
      ])
    )
    .then(function ([
      gideonHash,
      lewisHash,
      marikaHash,
      evelynHash,
      hayleyHash,
      benHash,
      redCrossHash,
      kidsCanHash,
      breastCancerFoundationHash,
      unicefHash,
    ]) {
      // Inserts seed entries
      return knex('users').insert([
        {
          id: 1,
          username: 'gideon1',
          hash: gideonHash,
          email: 'gideon@gmail.com',
          name: 'gideon',
          profile_picture:
            'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTrQBEpTkKYe64nSkUerucerrIhJsTbnAZ3Cg&usqp=CAU',
          about: 'Gideon is cool',
          is_Charity: false,
        },
        {
          id: 2,
          username: 'lewis1',
          hash: lewisHash,
          email: 'lewis@gmail.com',
          name: 'lewis',
          profile_picture:
            'https://content.api.news/v3/images/bin/a6923adbc7bece73803221613f410782',
          about: 'Lewis is cool',
          is_Charity: false,
        },
        {
          id: 3,
          username: 'marika1',
          hash: marikaHash,
          email: 'marika@gmail.com',
          name: 'marika',
          profile_picture:
            'https://images.fastcompany.net/image/upload/w_1280,f_auto,q_auto,fl_lossy/wp-cms/uploads/2019/12/p-1-greta-thunberg-was-just-named-time-magazines-2019-person-of-the-year.jpg',
          about: 'Marika is cool',
          is_Charity: false,
        },
        {
          id: 4,
          username: 'evelyn1',
          hash: evelynHash,
          email: 'evelyn@gmail.com',
          name: 'evelyn',
          profile_picture:
            'https://www.guinnessworldrecords.com/Images/Greta-Thunberg-youngest-time-person-of-the-yearthumbnail_tcm25-603423.jpg',
          about: 'Evelyn is cool',
          is_Charity: false,
        },
        {
          id: 5,
          username: 'hayley',
          hash: hayleyHash,
          email: 'hayley@gmail.com',
          name: 'hayley',
          profile_picture:
            'https://images.squarespace-cdn.com/content/v1/56d3f4e222482e09ee8bc3a8/1560489433065-KY0Y5Q1PINIP6BP1A7BP/ke17ZwdGBToddI8pDm48kI7bufHhFsXXBLSb0DZCp-x7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z5QPOohDIaIeljMHgDF5CVlOqpeNLcJ80NK65_fV7S1Ud6JRN1rcm9MmcQn8MfkOV9i7nHJvDTdyIVZ4-Yi4E11T0KIdeKoPzIh6OG9S_5jQQ/62443170_441790666604349_1565517864314601472_n.jpg?format=750w',
          about:
            'Hayley Robertson is a multi-disciplinary creative specialising in the art department at home in Auckland, New Zealand and abroad. She has been contracting full time since 2015 and has worked on a wide range of productions from TV commercials, live theatre to award winning indie short films. Dealing with all areas of the art department, Hayley is passionate about creating a rich visual context for story telling through collaborating to realise a dream. Hayley has a bachelor of Fine Arts from Auckland University and a diploma in Sculpting and Productions Design from CutAbove Academy. She also has experience in other creative fields winning awards in photography, acting and SFX makeup.',
          is_Charity: false,
        },
        {
          id: 6,
          username: 'ben',
          hash: benHash,
          email: 'ben@gmail.com',
          name: 'ben',
          profile_picture:
            'https://www.badaboom.co.nz/images/profile-photos/ben.jpg/@@images/ef47f76b-4091-471a-a51a-e8044620ecb1.jpeg',
          about:
            'Ben Sarten Imagery is a video and photography production company operating out of THE BONE ZONE/Te iwi Koiwi Creative Space, in St Johns, Auckland. Prioritising the documentation and visibility of environmental and social/human rights activism and the New Zealand arts scene, with collaboration and community as its kaupapa.',
          is_Charity: false,
        },
        {
          id: 7,
          username: 'redCross',
          hash: redCrossHash,
          email: 'redCross@gmail.com',
          name: 'redCross',
          profile_picture:
            'https://media.redcross.org.nz/media/images/NZRC_Bilingual_Logo_Vert_CMYK.width-400.jpg',
          about:
            'Every day we work to help New Zealanders – whether that’s providing a hot meal, a safe drive to the hospital or education programmes at a local high school.',
          is_Charity: true,
        },
        {
          id: 8,
          username: 'kidsCan',
          hash: kidsCanHash,
          email: 'kidsCan@gmail.com',
          name: 'kidsCan',
          profile_picture:
            'https://thedailyblog.co.nz/wp-content/uploads/2017/12/kidscan-logo.png',
          about:
            'Education is a child’s ticket out of poverty. It is how we will break the cycle of hardship, and it is at the core of everything KidsCan does. Food, a warm jacket, solid shoes, feminine hygiene products - these are things we want every child to take for granted. We are levelling the playing field, giving children whose families are struggling the same opportunity to learn as anyone else.',
          is_Charity: true,
        },
        {
          id: 9,
          username: 'breastCancerFoundation',
          hash: breastCancerFoundationHash,
          email: 'breastCancerFoundation@gmail.com',
          name: 'breastCancerFoundation',
          profile_picture:
            'https://media-exp1.licdn.com/dms/image/C510BAQET6OVcFZVOPQ/company-logo_200_200/0?e=2159024400&v=beta&t=OET5tkxUmAAs0nbB0U6u7XnKHwNc9lMo5M0OAHsGy80',
          about:
            'Our vision: Zero deaths from breast cancer, Our mission (how well achieve that vision) Pushing for new frontiers in early detection, treatment and support.',
          is_Charity: true,
        },
        {
          id: 10,
          username: 'unicef',
          hash: unicefHash,
          email: 'unicef@gmail.com',
          name: 'unicef',
          profile_picture:
            'https://www.cid.org.nz/assets/Uploads/b771c952d4/UNICEF-v2.jpg',
          about:
            'UNICEF is the United Nations Childrens Fund For over 70 years, weve been working to protect the rights of children in over 190 countries and territories around the world.',
          is_Charity: true,
        },
      ])
    })
}
