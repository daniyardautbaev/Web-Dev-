export interface Product {
  id: number;
  name: string;
  price: number;
  description: string;
  rating: string;
  link: string;
  image: string;
  category: string
}

export const products = [
  {
    id: 1,
    name: 'Наушники Apple AirPods with Charging Case',
    price: 54990 ,
    description: 'Хорошие наушники за нехорошие деньги',
    rating:'4.8',
    link: 'https://www.technodom.kz/p/nausniki-vstavnye-apple-bluetooth-airpods-with-charging-case-145672?recommended_by=dynamic&recommended_code=z9wxnh4hkr',
    image:'https://www.technodom.kz/_next/image?url=https%3A%2F%2Fapi.technodom.kz%2Ff3%2Fapi%2Fv1%2Fimages%2F800%2F800%2F145672_2k.jpg&w=3840&q=85',
    category: "Другие"
  },
  {
    id: 2,
    name: 'Тепловентилятор ARG W-HF1705',
    price: 4990 ,
    description: 'Незаменимая вещь если в комнате дубак',
    rating:'5.0',
    link: 'https://www.sulpak.kz/g/obogrevatelniye_priboriy_arg_w_hf1705#reviewTab',
    image:'https://object.pscloud.io/cms/cms/Photo/img_0_19_257_1_1_3sqiLM.webp',
    category: "Другие"
  },
  {
    id: 3,
    name: 'Машинка для стрижки ARG RF-1102',
    price: 2990 ,
    description: 'Зачем вообще платить парихмакеру?',
    rating:'5.0',
    link: 'https://www.sulpak.kz/g/mashinka_dlya_strizhki_arg_rf_1102_28_179#reviewTab',
    image:'https://object.pscloud.io/cms/cms/Photo/img_0_28_179_0_1_wrVkf1.webp',
    category: "Другие"
  },
  {
    id: 4,
    name: 'Ноутбук HUAWEI MateBook D16 Corei5 12450H 8GB / SSD 512GB / Windows 11 / MitchellF-W5851',
    price: 309990 ,
    description: 'Универсальный ноутбук с процессором intel core i5 и обьемом оперативной памяти 8GB',
    rating:'4.0',
    link: 'https://www.sulpak.kz/g/noutbuki_huawei_matebook_d_16__mitchellf_w5851__53013wxe__i585suw1#reviewTab',
    image:'https://object.pscloud.io/cms/cms/Photo/img_0_62_3076_0_1_xmffKz.webp',
    category: "Электроника"
  },
  {
    id: 5,
    name: 'Смартфон Vivo Y17s 4/128 Forest Green',
    price: 69990 ,
    description: 'Хороший недорогой смартфон для студента с камерой 50 Mpx',
    rating:'Нет отзывов',
    link: 'https://www.sulpak.kz/g/smartfoniy_vivo_y17s_4128_forest_green',
    image:'https://object.pscloud.io/cms/cms/Photo/img_0_77_5241_0_1_jgHigX.webp',
    category: "Электроника"
  },
  {
    id: 6,
    name: 'Часы настенные Centek CT-7100 Black 30 см',
    price: 6990 ,
    description: 'Лучшие часы с атомной точностью',
    rating:'10.0',
    link: 'https://www.sulpak.kz/g/chasiy_centek_ct_7100_black_30_sm#reviewTab',
    image:'https://object.pscloud.io/cms/cms/Photo/img_0_112_182_1_1.webp',
    category: "Электроника"
  },
  {
    id: 7,
    name: 'Струйный Принтер Epson L121 (СНПЧ, цветная печать)',
    price: 89990 ,
    description: 'Надежный принтер с емкостью для чернил обеспечивает экономическую эффективность цветной печати.',
    rating:'4.7',
    link: 'https://www.sulpak.kz/g/strujniyj_printer_epson_l121',
    image:'https://object.pscloud.io/cms/cms/Photo/img_0_71_95_3_1.webp',
    category: "Электроника"
  },
  {
    id: 8,
    name: 'Игровая консоль Sony PlayStation 5',
    price: 259990 ,
    description: 'Консоль PS5™ открывает новые игровые возможности, о которых вы даже не могли мечтать',
    rating:'5.0',
    link: 'https://www.sulpak.kz/g/igrovaya_konsol_sony_ps5_68_217_',
    image:'https://object.pscloud.io/cms/cms/Photo/img_0_68_217_5_1.webp',
    category: "Электроника"
  },
  {
    id: 9,
    name: 'Смарт-часы Garmin Forerunner 955 Solar EMEA White (010-02638-21)',
    price: 308190,
    description: 'Наденьте эти легкие умные часы на запястье. Тренируйтесь изо всех сил, работайте как можно лучше и переживите рюкзак с линзой для зарядки от солнечных батарей Power Glass ™ , которая продлит срок службы батареи.',
    rating:'4.0',
    link: 'https://www.sulpak.kz/g/smart_chasiy_garmin_forerunner_955_solar_emea_beliye_010_02638_21',
    image:'https://object.pscloud.io/cms/cms/Photo/img_0_911_833_1_6.webp',
    category: "Электроника"
  },
  {
    id: 10,
    name: 'Мобильный телефон Nokia 105 DS Charcoal',
    price: 11990 ,
    description: 'ЛУЧШИЙ в мире телефон',
    rating:'10.0',
    link: 'https://www.sulpak.kz/g/mobilniye_telefoniy_nokia_105_ds_charcoal',
    image:'https://object.pscloud.io/cms/cms/Photo/img_0_76_369_0_1_cdMzfm.webp',
    category: "Электроника"
  }
]



/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/