import { Product } from "./products";

export interface Categories{
    name:string;
    products: Product[];
    show_products: boolean;
}


export const categories = [
    {
        name: "Electronics",
        show_products:false,
        products: [{
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
            name: 'Ноутбук HUAWEI MateBook D16 Corei5 12450H 8GB / SSD 512GB / Windows 11 / MitchellF-W5851',
            price: 309990 ,
            description: 'Универсальный ноутбук с процессором intel core i5 и обьемом оперативной памяти 8GB',
            rating:'4.0',
            link: 'https://www.sulpak.kz/g/noutbuki_huawei_matebook_d_16__mitchellf_w5851__53013wxe__i585suw1#reviewTab',
            image:'https://object.pscloud.io/cms/cms/Photo/img_0_62_3076_0_1_xmffKz.webp',
            category: "Электроника"
          },
          {
            id: 3,
            name: 'Смартфон Vivo Y17s 4/128 Forest Green',
            price: 69990 ,
            description: 'Хороший недорогой смартфон для студента с камерой 50 Mpx',
            rating:'Нет отзывов',
            link: 'https://www.sulpak.kz/g/smartfoniy_vivo_y17s_4128_forest_green',
            image:'https://object.pscloud.io/cms/cms/Photo/img_0_77_5241_0_1_jgHigX.webp',
            category: "Электроника"
          },
          
          {
            id: 4,
            name: 'Струйный Принтер Epson L121 (СНПЧ, цветная печать)',
            price: 89990 ,
            description: 'Надежный принтер с емкостью для чернил обеспечивает экономическую эффективность цветной печати.',
            rating:'4.7',
            link: 'https://www.sulpak.kz/g/strujniyj_printer_epson_l121',
            image:'https://object.pscloud.io/cms/cms/Photo/img_0_71_95_3_1.webp',
            category: "Электроника"
          },
          {
            id: 5,
            name: 'Игровая консоль Sony PlayStation 5',
            price: 259990 ,
            description: 'Консоль PS5™ открывает новые игровые возможности, о которых вы даже не могли мечтать',
            rating:'5.0',
            link: 'https://www.sulpak.kz/g/igrovaya_konsol_sony_ps5_68_217_',
            image:'https://object.pscloud.io/cms/cms/Photo/img_0_68_217_5_1.webp',
            category: "Электроника"
          },
          {
            id: 6,
            name: 'Смарт-часы Garmin Forerunner 955 Solar EMEA White (010-02638-21)',
            price: 308190,
            description: 'Наденьте эти легкие умные часы на запястье. Тренируйтесь изо всех сил, работайте как можно лучше и переживите рюкзак с линзой для зарядки от солнечных батарей Power Glass ™ , которая продлит срок службы батареи.',
            rating:'4.0',
            link: 'https://www.sulpak.kz/g/smart_chasiy_garmin_forerunner_955_solar_emea_beliye_010_02638_21',
            image:'https://object.pscloud.io/cms/cms/Photo/img_0_911_833_1_6.webp',
            category: "Электроника"
          },
          {
            id: 7,
            name: 'Мобильный телефон Nokia 105 DS Charcoal',
            price: 11990 ,
            description: 'ЛУЧШИЙ в мире телефон',
            rating:'10.0',
            link: 'https://www.sulpak.kz/g/mobilniye_telefoniy_nokia_105_ds_charcoal',
            image:'https://object.pscloud.io/cms/cms/Photo/img_0_76_369_0_1_cdMzfm.webp',
            category: "Электроника"
          }]
    },
       
    {
        name: "Clothes",
        show_products:false,
        products: [
            {
                id: 1,
                name: 'Куртка джинсовая',
                price: 20000 ,
                description: 'Finn Flare',
                rating:'Нет',
                link: 'https://www.lamoda.kz/p/mp002xm0n2mi/clothes-finnflare-kurtka-dzhinsovaya/',
                image:'https://a.lmcdn.ru/img600x866/M/P/MP002XM0N2MI_20053858_1_v1.jpeg',
                category: "Clothes"
              },
              {
                id: 2,
                name: 'Толстовка ультраэластичная DRY',
                price: 16990 ,
                description: 'Uniqlo',
                rating:'5.0',
                link: 'https://www.lamoda.kz/p/rtlacc480301/clothes-uniqlo-tolstovka/',
                image:'https://a.lmcdn.ru/img600x866/R/T/RTLACC480301_18395368_1_v1_2x.jpg',
                category: "Clothes"
              },
              {
                id: 3,
                name: 'Брюки',
                price: 19290 ,
                description: 'Tom Tailor',
                rating:'4.8',
                link: 'https://www.lamoda.kz/p/mp002xm08aax/clothes-tomtailor-bryuki/',
                image:'https://a.lmcdn.ru/img600x866/M/P/MP002XM08AAX_17070365_1_v1_2x.jpg',
                category: "Clothes"
              },
              {
                id: 4,
                name: 'Рубашка джинсовая',
                price: 16180 ,
                description: 'Befree',
                rating:'4.5',
                link: 'https://www.lamoda.kz/p/mp002xm08aax/clothes-tomtailor-bryuki/',
                image:'https://a.lmcdn.ru/img600x866/M/P/MP002XM0VE7N_21867179_1_v1_2x.jpg',
                category: "Clothes"
              }
        ]
    },
    {
        name: "accessories",
        show_products:false,
        products: [
            {
                id: 1,
                name: 'Барсетка Fashion 557 нейлон черный',
                price: 738 ,
                description: 'Барсетка',
                rating:'4.6',
                link: 'https://kaspi.kz/shop/p/barsetka-fashion-557-neilon-chernyi-102376597/?c=750000000',
                image:'https://resources.cdn-kaspi.kz/img/m/p/heb/hf4/64141700825118.jpg?format=preview-large',
                category: "accessories"
              },
              {
                id: 2,
                name: 'Backpack',
                price: 4800 ,
                description: 'syntetic backpack',
                rating:'5.0',
                link: 'https://kaspi.kz/shop/p/rjukzak-15378081-ids21090702-poliester-oksford-chernyi-109556758/?c=750000000',
                image:'https://resources.cdn-kaspi.kz/img/m/p/h27/h4d/84656597139486.jpg?format=gallery-medium',
                category: "Clothes"
              },
              {
                id: 3,
                name: 'Часы Кварцевые SKMEI',
                price: 2297 ,
                description: 'Good and cheap watches',
                rating:'4.7',
                link: 'https://kaspi.kz/shop/p/kvartsevye-skmei-1251-plastik-nerzhavejuschaja-stal--103561408/?c=750000000',
                image:'https://resources.cdn-kaspi.kz/img/m/p/hc9/h6b/64410943324190.jpg?format=gallery-medium',
                category: "Clothes"
              },
              {
                id: 4,
                name: 'Картхолдер MD Collection',
                price: 572 ,
                description: 'Good thing',
                rating:'4.8',
                link: 'https://kaspi.kz/shop/p/kartholder-md-collection-09-metall-chernyi-107441286/?c=750000000',
                image:'https://resources.cdn-kaspi.kz/img/m/p/h94/hb8/65381354635294.jpg?format=gallery-medium',
                category: "Clothes"
              }
        ]

    },
    {
        name: "others",
        show_products: false,
        products:[
            {
                id: 1,
                name: 'Часы настенные Centek CT-7100 Black 30 см',
                price: 6990 ,
                description: 'Лучшие часы с атомной точностью',
                rating:'10.0',
                link: 'https://www.sulpak.kz/g/chasiy_centek_ct_7100_black_30_sm#reviewTab',
                image:'https://object.pscloud.io/cms/cms/Photo/img_0_112_182_1_1.webp',
                category: "Электроника"
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
              }
        ]
    }
];