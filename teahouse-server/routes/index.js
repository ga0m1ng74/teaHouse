var express = require('express');
var router = express.Router();
/**
 * sql
 */
var connection = require('../db/sql.js')
var user = require('../db/user_sql.js')

/* GET server home page. */
router.get('/', function(req, res, next) {
    res.render('index', { title: 'Express' });
});

//get tap bar
router.get('/index_list/tapBar', function(req, res, next) {
        res.send({
            code: 'tapBar',
            tapBar: [
                { id: 1, title: 'TEA LOVERS' },
                { id: 2, title: 'TRADITIONAL BLACK TEAS' },
                { id: 3, title: 'CLASSIC GREEN TEAS' },
                { id: 4, title: 'HERBAL TEAS' },
                { id: 5, title: 'CHAI TEAS' },
                { id: 6, title: 'FLAOURED GREEN TEA' },
                { id: 7, title: 'CLASSIC BLACK TEA' },
                { id: 8, title: 'FRUIT INFUSIONS' },
                { id: 9, title: 'AUSTRALIAN TEAS' },
            ],
        })
    })
    //get app home page
router.get('/index_list/home/1', function(req, res, next) {
        res.send({
            code: 'HomePage',
            page: [
                // page information
                {
                    //swiper
                    id: 1,
                    type: 'swiperList',
                    data: [
                        { id: 1, imgUrl: './img/banner/Traditional_Black.webp' },
                        { id: 2, imgUrl: './img/banner/Green-Tea.webp' },
                        { id: 3, imgUrl: './img/banner/Herbal_Wellness.webp' },
                        { id: 4, imgUrl: './img/banner/Chai-Tea.webp' },
                        { id: 5, imgUrl: './img/banner/Flavoured_Green_tea.webp' },
                        { id: 6, imgUrl: './img/banner/Classic_Black_Tea.webp' },
                        { id: 7, imgUrl: './img/banner/Fruit-Infusions.webp' },
                        { id: 8, imgUrl: './img/banner/Australian-Tea.webp' },
                    ]
                },
                {
                    //icons
                    id: 2,
                    type: 'iconList',
                    data: [
                        { id: 1, title: 'TEA WARES', imgUrl: './img/icons/cafe-outline.svg' },
                        { id: 2, title: 'SPECIAILTY TEA', imgUrl: './img/icons/ribbon-outline.svg' },
                        { id: 3, title: 'GIFTS', imgUrl: './img/icons/gift-outline.svg' },
                        { id: 4, title: 'WELLNESS TEA', imgUrl: './img/icons/rose-outline.svg' },
                    ]
                },
                {
                    //sort card
                    id: 3,
                    type: 'sortCardMessage',
                    data: [
                        { title: 'Quality tea selections' },
                        { detail: 'Discover our broad selection of speciality teas…' }
                    ]
                },
                {
                    //Popular tea varieties
                    id: 4,
                    type: 'recommendList',
                    data: [
                        { id: 1, title: 'FRENCH EARL GREY (BLACK TEA)', price: '16.50', imgUrl: './img/recommond/French_Earl_Grey_Black_Tea.jpeg' },
                        { id: 2, title: 'SWEET DREAMS (WELLNESS TEA)', price: '17.90', imgUrl: './img/recommond/Sweet_Dreams.jpeg' },
                        { id: 3, title: 'STOCKHOLM BLEND (BLACK TEA)', price: '16.50', imgUrl: './img/recommond/Stockholm_Blend_Black_Tea.jpeg' },
                        { id: 4, title: 'INNER CALMNESS (WELLNESS TEA)', price: '17.90', imgUrl: './img/recommond/Inner_Calmness.jpeg' },
                        { id: 5, title: 'TURKISH DELIGHT (BLACK TEA)', price: '16.50', imgUrl: './img/recommond/Turkish-Delight-Black-Tea.webp' },
                        { id: 6, title: 'JAPANESE GENMAICHA (GREEN TEA)', price: '16.00', imgUrl: './img/recommond/Japanese_Genmaicha.jpeg' },
                        { id: 7, title: 'IMMUNE BOOST (WELLNESS TEA)', price: '17.90', imgUrl: './img/recommond/Immune_Booster.jpeg' },
                        { id: 8, title: 'JAPANESE MATCHA GENMAICHA', price: '22.00', imgUrl: './img/recommond/Japanese_Matcha_Genmaicha_Organic.jpeg' },
                    ]
                }
            ]

        })
    })
    //
router.get('/index_list/home/2', function(req, res, next) {
    res.send({
        code: 'Traditional Black Teas',
        page: [{}, {},
            {
                id: 3,
                type: 'sortCardMessage',
                data: [
                    { title: 'Traditional Black Teas' },
                    { detail: '' }
                ]
            },
            {
                id: 4,
                type: 'recommendList',
                data: [
                    { id: 1, title: 'FRENCH EARL GREY (BLACK TEA)', price: '16.50', imgUrl: './img/TBlackT/French_Earl_Grey_Black_Tea.jpeg' },
                    { id: 2, title: 'ENGLISH BREAKFAST (BLACK TEA)', price: '12.00', imgUrl: './img/TBlackT/English-Breakfast-Black-Tea.webp' },
                    { id: 3, title: 'EARL GREY SUPREME (BLACK TEA)', price: '14.00', imgUrl: './img/TBlackT/Earl_Grey_Supreme.jpeg' },
                    { id: 4, title: 'EARL GREY BLUE FLOWERS (BLACK TEA)', price: '15.00', imgUrl: './img/TBlackT/Earl_Grey_Blue_Flowers.jpeg' },
                    { id: 5, title: 'MADAM GREY (BLACK TEA)', price: '15.00', imgUrl: './img/TBlackT/Madam_Grey.jpeg' },
                    { id: 6, title: 'SCOTTISH BREAKFAST SUPERIOR (BLACK TEA)', price: '12.50', imgUrl: './img/TBlackT/Scottish_Breakfast_Blend_Superior.jpeg' },
                    { id: 7, title: 'IRISH BREAKFAST SUPERIOR (BLACK TEA)', price: '12.50', imgUrl: './img/TBlackT/Irish_Breakfast_Blend_Superior.jpeg' },
                    { id: 8, title: 'PRINCE OF WALES (BLACK TEA)', price: '12.50', imgUrl: './img/TBlackT/Prince_of_Wales_Superior.jpeg' },
                    { id: 9, title: 'RUSSIAN CARAVAN (BLACK TEA)', price: '13.00', imgUrl: './img/TBlackT/Russian_Caravan_Blend.jpeg' },
                    { id: 10, title: 'TEA FOR SUNDAY (BLACK TEA)', price: '16.00', imgUrl: './img/TBlackT/Tea_for_Sunday_East_Frisian.jpeg' },
                    { id: 11, title: 'ORGANIC EARL GREY (BLACK TEA)', price: '16.00', imgUrl: './img/TBlackT/Ear_Grey_Organic.jpeg' },
                    { id: 12, title: 'ENGLISH BREAKFAST ORGANIC (BLACK TEA)', price: '16.50', imgUrl: './img/TBlackT/English_Breakfast_Blend_Organic.jpeg' },
                ]
            }
        ]
    })
})
router.get('/index_list/home/3', function(req, res, next) {
    res.send({
        code: 'CLASSIC GREEN TEAS',
        page: [{}, {},
            {
                id: 3,
                type: 'sortCardMessage',
                data: [
                    { title: 'Green Teas' },
                    { detail: 'Discover our finest selection of single-origin green teas from Japan, China, and Taiwan, including classic varieties like Sencha, Gunpowder, and Oolong. For those seeking a twist on tradition, savour our fruity flavoured green teas, offering a refreshing and satisfying taste experience.' }
                ]
            },
            {
                id: 4,
                type: 'recommendList',
                data: [
                    { id: 1, title: 'JAPANESE SENCHA (GREEN TEA)', price: '16.00', imgUrl: './img/GreenT/Japanese_Sencha.jpeg' },
                    { id: 2, title: 'ORGANIC JASMINE (JASMINE TEA)', price: '14.00', imgUrl: './img/GreenT/Jasmine_Tea_Organic.jpeg' },
                    { id: 3, title: 'JAPANESE GENMAICHA (GREEN TEA)', price: '16.00', imgUrl: './img/GreenT/Japanese_Genmaicha.jpeg' },
                    { id: 4, title: 'JAPANESE MATCHA GENMAICHA (ORGANIC GREEN TEA)', price: '22.00', imgUrl: './img/GreenT/Japanese_Matcha_Genmaicha_Organic.jpeg' },
                    { id: 5, title: 'MILKY OOLONG (OOLONG TEA)', price: '19.00', imgUrl: './img/GreenT/Milky_Oolong.jpeg' },
                    { id: 6, title: 'AUSTRALIAN SENCHA (GREEN TEA)', price: '17.90', imgUrl: './img/GreenT/Australian_Green_Tea_Sencha.jpeg' },
                    { id: 7, title: 'BUDDHAS TEARS (JASMINE TEA)', price: '35.90', imgUrl: './img/GreenT/Buddha_s_Tears_Jasmine_Dragon_Pheonix_Pearls.jpeg' },
                    { id: 8, title: 'JAPANESE SENCHA GURICHA (ORGANIC GREEN TEA)', price: '22.00', imgUrl: './img/GreenT/Japanese_Sencha_Guricha_Organic.jpeg' },
                    { id: 9, title: 'JASMINE WITH FLOWERS (JASMINE TEA)', price: '12.50', imgUrl: './img/GreenT/Jasmine_with_Flowers.jpeg' },
                    { id: 10, title: 'JAPANESE LIME (GREEN TEA)', price: '16.50', imgUrl: './img/GreenT/Japanese_Lime_Green_Tea.jpeg' },
                    { id: 11, title: 'JAPANESE MATCHA POWDER GRADE A 30G TIN', price: '18.95', imgUrl: './img/GreenT/VR-MATCHA_Japanese_Matcha_Powder_30g_Tin.webp' },
                    { id: 12, title: 'LYCHEE MAGIC (GREEN TEA)', price: '16.50', imgUrl: './img/GreenT/Lychee_Magic_Green_Tea.jpeg' },
                    { id: 13, title: 'Chun Mee Moon Palace (Organic Green Tea)', price: '13.00', imgUrl: './img/GreenT/Chun_Mee_Moon_Palace_Organic.jpeg' },
                    { id: 14, title: 'TIE GUAN YIN OOLONG (OOLONG TEA)', price: '17.90', imgUrl: './img/GreenT/Tie_Guan_Yin_Oolong.jpeg' },
                    { id: 15, title: 'ORGANIC TAIWAN OOLONG (OOLONG TEA)', price: '19.00', imgUrl: './img/GreenT/OrganicTaiwanOolong.webp' },
                    { id: 16, title: 'AUSTRALIAN SUMMER DREAMS (GREEN TEA)', price: '17.90', imgUrl: './img/GreenT/Australian_Summer_Dreams.jpeg' },
                ]
            }
        ]
    })
})
router.get('/index_list/home/4', function(req, res, next) {
    res.send({
        code: 'HERBAL TEAS',
        page: [{}, {},
            {
                id: 3,
                type: 'sortCardMessage',
                data: [
                    { title: 'Herbal Teas & Wellness Teas' },
                    { detail: 'Sip your way to better health with our great range of Herbal Wellness Teas and Organic Herbal Infusions. Our wellness blends are created by qualified Herbalists and Ayurvedic practitioners, designed to nourish and restore balance to the body. Discover our popular Detox & Cleanse, Immune Booster, Sweet Dreams & many more.' }
                ]
            },
            {
                id: 4,
                type: 'recommendList',
                data: [
                    { id: 1, title: 'SWEET DREAMS (WELLNESS TEA)', price: '17.90', imgUrl: './img/Herbal/Sweet_Dreams.jpeg' },
                    { id: 2, title: 'Organic Chamomile (Herbal Tea)', price: '16.00', imgUrl: './img/Herbal/Organic_Chamomile.jpeg' },
                    { id: 3, title: 'INNER CALMNESS (WELLNESS TEA)', price: '17.90', imgUrl: './img/Herbal/Inner_Calmness.jpeg' },
                    { id: 4, title: 'Organic Peppermint (Herbal Tea)', price: '16.00', imgUrl: './img/Herbal/Organic_Peppermint.jpeg' },
                    { id: 5, title: 'Weight Control (Wellness Tea)', price: '17.90', imgUrl: './img/Herbal/WeightControlHerbalWellnessTea.webp' },
                    { id: 6, title: 'IMMUNE BOOST (WELLNESS TEA)', price: '17.90', imgUrl: './img/Herbal/Immune_Booster.jpeg' },
                    { id: 7, title: 'DETOX TEA (WELLNESS TEA)', price: '17.90', imgUrl: './img/Herbal/Detox___Cleanse.jpeg' },
                    { id: 8, title: 'CINNAMON APPLE CHAMOMILE (HERBAL TEA)', price: '16.50', imgUrl: './img/Herbal/CinnamonAppleChamomileHerbalTea.webp' },
                    { id: 9, title: 'ORGANIC LEMONGRASS & GINGER (HERBAL TEA)', price: '16.00', imgUrl: './img/Herbal/Lemongrass_Ginger_Organic.webp' },
                    { id: 10, title: 'MENOPAUSE MIX (WELLNESS TEA)', price: '17.90', imgUrl: './img/Herbal/Menopause_Mix.jpeg' },
                    { id: 11, title: 'STRESSLESS (WELLNESS TEA)', price: '17.90', imgUrl: './img/Herbal/StressLessRelaxationHerbalTea.webp' },
                    { id: 12, title: 'BUTTERFLY BLUE PEA FLOWER (ORGANIC HERBAL TEA)', price: '17.90', imgUrl: './img/Herbal/ButterflyBluePeaFlowerTeaOrganic.webp' },
                    { id: 13, title: 'HIBISCUS TEA (HERBAL TEA)', price: '16.00', imgUrl: './img/Herbal/HibiscusTea.webp' },
                    { id: 14, title: 'GINGER KISSES ORGANIC (HERBAL TEA)', price: '16.50', imgUrl: './img/Herbal/Ginger_Kisses_Organic.jpeg' },
                    { id: 15, title: 'ENERGISER (WELLNESS TEA)', price: '17.90', imgUrl: './img/Herbal/Energiser.jpeg' },
                    { id: 16, title: 'VITALITY FOR HER (WELLNESS TEA)', price: '17.90', imgUrl: './img/Herbal/Vitality_for_Her.jpeg' },
                ]
            }
        ]
    })
})
router.get('/index_list/home/5', function(req, res, next) {
    res.send({
        code: 'CHAI TEAS',
        page: [{}, {},
            {
                id: 3,
                type: 'sortCardMessage',
                data: [
                    { title: 'Chai Tea & Chai Latte' },
                    { detail: 'Explore our specialty range of chai teas, chai herbal blends and delicious chai latte powders. Something for all chai lovers.' }
                ]
            },
            {
                id: 4,
                type: 'recommendList',
                data: [
                    { id: 1, title: 'MASALA SPICED CHAI (BLACK TEA)', price: '16.50', imgUrl: './img/ChaiT/Chai_Tea_Lovers_Premium_Masala_Black_Tea.jpeg' },
                    { id: 2, title: 'Sticky Honey Chai (Black Tea)', price: '16.90', imgUrl: './img/ChaiT/Honey_Spiced_Chai_Black_Tea.jpeg' },
                    { id: 3, title: 'Chai Turmeric (Black Tea)', price: '16.50', imgUrl: './img/ChaiT/Chai_Turmeric_Black_Tea.jpeg' },
                    { id: 4, title: 'Chocolate Chip Chai (Black Tea)', price: '16.50', imgUrl: './img/ChaiT/ChocolateChipChai.jpeg' },
                    { id: 5, title: 'AUSTRALIAN CHAI (BLACK TEA)', price: '14.50', imgUrl: './img/ChaiT/Australian_Chai.jpeg' },
                    { id: 6, title: 'Masala Chai (Green Tea)', price: '16.50', imgUrl: './img/ChaiT/Masala_Chai_Green_Tea.jpeg' },
                    { id: 7, title: 'Rooibos Chai (Rooibos Tea)', price: '16.50', imgUrl: './img/ChaiT/Rooibos_Chai.jpeg' },
                    { id: 8, title: 'ROOIBOS ORANGE SPICED CHAI (ROOIBOS TEA)', price: '16.50', imgUrl: './img/ChaiT/Rooibos_Orange_Spiced_Chai.jpeg' },
                    { id: 9, title: 'HONEYBUSH CHAI (HONEYBUSH TEA)', price: '16.50', imgUrl: './img/ChaiT/Honeybush_Chai.jpeg' },
                    { id: 10, title: 'SPICED CHAI (HERBAL TEA)', price: '16.50', imgUrl: './img/ChaiT/Spiced_Chai_Herbal_Blend.jpeg' },
                    { id: 11, title: 'YOGI CHAI ORGANIC (HERBAL TEA)', price: '16.50', imgUrl: './img/ChaiT/Yogi_Chai_Organic_Herbal_Infusion.jpeg' },
                    { id: 12, title: 'CHOCOLATE CHAI LATTE POWDER', price: '13.95', imgUrl: './img/ChaiT/Chocolate_Chai_Latte_Powder.jpeg' },
                    { id: 13, title: 'SPICED CHAI LATTE POWDER', price: '13.95', imgUrl: './img/ChaiT/Spiced_Chai_Latte_Powder.jpeg' },
                    { id: 14, title: 'CHAI BLACK DECAFFEINATED (BLACK TEA)', price: '19.00', imgUrl: './img/ChaiT/Chai_Black_Decaffeinated_Tea_Black_Tea.jpeg' },
                    { id: 15, title: 'CHAI GREEN DECAFFEINATED (GREEN TEA)', price: '19.00', imgUrl: './img/ChaiT/Chai_Green_Decaffeinated_Tea_Green_Tea.jpeg' },
                    { id: 16, title: 'ORGANIC SPICED CHAI (ORGANIC BLACK TEA)', price: '18.00', imgUrl: './img/ChaiT/Chai_Spiced_BlackTea.webp' },
                ]
            }
        ]
    })
})
router.get('/index_list/home/6', function(req, res, next) {
    res.send({
        code: 'FLAOURED GREEN TEA',
        page: [{}, {},
            {
                id: 3,
                type: 'sortCardMessage',
                data: [
                    { title: 'Flavoured Green Teas' },
                    { detail: '' }
                ]
            },
            {
                id: 4,
                type: 'recommendList',
                data: [
                    { id: 1, title: 'JAPANESE LIME (GREEN TEA)', price: '16.50', imgUrl: './img/FlavouredGT/Japanese_Lime_Green_Tea.jpeg' },
                    { id: 2, title: 'LYCHEE MAGIC (GREEN TEA)', price: '16.50', imgUrl: './img/FlavouredGT/Lychee_Magic_Green_Tea.jpeg' },
                    { id: 3, title: 'Happy Hours (Apricot & Vanilla Green Tea)', price: '16.50', imgUrl: './img/FlavouredGT/Happy_Hours_Green_Tea.jpeg' },
                    { id: 4, title: 'VANILLA SENCHA (GREEN TEA)', price: '16.50', imgUrl: './img/FlavouredGT/Vanilla_Green_Tea.jpeg' },
                    { id: 5, title: 'BANANA STRAWBERRY MILKSHAKE (GREEN TEA)', price: '16.50', imgUrl: './img/FlavouredGT/Banana_Strawberry_Shake_Flavoured_Green_Tea.jpeg' },
                    { id: 6, title: 'HAWAIIAN SUNSET (BERRY FRUITS GREEN TEA)', price: '16.50', imgUrl: './img/FlavouredGT/Hawaiian_Sunset_Green_Tea.jpeg' },
                    { id: 7, title: 'PEACH (GREEN TEA)', price: '16.50', imgUrl: './img/FlavouredGT/Peach_Green_Tea.jpeg' },
                    { id: 8, title: 'FRENCH EARL GREY (GREEN TEA)', price: '16.50', imgUrl: './img/FlavouredGT/French_Earl_Grey_Green_Tea.jpeg' },
                    { id: 9, title: 'QUINCE (GREEN TEA)', price: '16.50', imgUrl: './img/FlavouredGT/Quince_Green_Tea.jpeg' },
                    { id: 10, title: 'SUPER MOOD (TROPICAL FRUITS GREEN TEA)', price: '16.50', imgUrl: './img/FlavouredGT/Super_Mood_Green_Tea.jpeg' },
                    { id: 11, title: 'JAPANESE LEMON & GINGER (GREEN TEA)', price: '16.50', imgUrl: './img/FlavouredGT/Japanese_Lemon___Ginger_Green_Tea.jpeg' },
                    { id: 12, title: 'CHRISTMAS (GREEN TEA)', price: '16.50', imgUrl: './img/FlavouredGT/Christmas_Green_Tea.jpeg' },
                    { id: 13, title: 'CREAM CARAMEL (GREEN TEA)', price: '16.50', imgUrl: './img/FlavouredGT/Caramel_Green_Tea.jpeg' },
                    { id: 14, title: 'SAKURA CHERRY (GREEN TEA)', price: '16.50', imgUrl: './img/FlavouredGT/Cherry_Marzipan_Green_Tea.jpeg' },
                    { id: 15, title: 'LIME & COCONUT DELIGHT (GREEN TEA)', price: '16.50', imgUrl: './img/FlavouredGT/Lime___Coconut_Delight_Green_Tea.jpeg' },
                    { id: 16, title: 'MANGO (GREEN TEA)', price: '16.50', imgUrl: './img/FlavouredGT/Mango_Green_Tea.jpeg' },
                ]
            }
        ]
    })
})
router.get('/index_list/home/7', function(req, res, next) {
    res.send({
        code: 'CLASSIC BLACK TEA',
        page: [{}, {},
            {
                id: 3,
                type: 'sortCardMessage',
                data: [
                    { title: 'Classic Black Teas' },
                    { detail: '' }
                ]
            },
            {
                id: 4,
                type: 'recommendList',
                data: [
                    { id: 1, title: 'ASSAM HARMUTTY (BLACK TEA)', price: '18.00', imgUrl: './img/ClassicBT/Assam_Harmutty_SFTGFOP.jpeg' },
                    { id: 2, title: 'ASSAM HATHIKHULI (ORGANIC BLACK TEA)', price: '16.00', imgUrl: './img/ClassicBT/Organic-Assam-Black-Tea-Hathikhuli.webp' },
                    { id: 3, title: 'ASSAM ORANGAJULIE (BLACK TEA)', price: '15.50', imgUrl: './img/ClassicBT/Assam_Orangajulie.jpeg' },
                    { id: 4, title: 'CEYLON HIGHGROWN ORANGE PEKOE (BLACK TEA)', price: '14.00', imgUrl: './img/ClassicBT/Ceylon_Highgrown.jpeg' },
                    { id: 5, title: 'CEYLON STOREFIELD ORANGE PEKOE (ORGANIC BLACK TEA)', price: '16.00', imgUrl: './img/ClassicBT/Ceylon_Storefield_Orange_Pekoe_Organic.jpeg' },
                    { id: 6, title: 'DARJEELING GOOMTEE (ORGANIC BLACK TEA)', price: '18.00', imgUrl: './img/ClassicBT/Darjeeling_Goomtee_FTGFOP_Organic.jpeg' },
                    { id: 7, title: 'DARJEELING HIMALAYA (BLACK TEA)', price: '14.00', imgUrl: './img/ClassicBT/DarjeelingHimalayaBlackTea.webp' },
                    { id: 8, title: `DARJEELING MARGARET'S HOPE (BLACK TEA)`, price: '14.00', imgUrl: './img/ClassicBT/Darjeeling_Margarets_Hope.jpeg' },
                    { id: 9, title: 'GOLDEN YUNNAN (BLACK TEA)', price: '15.00', imgUrl: './img/ClassicBT/Golden_Yunnan.jpeg' },
                    { id: 10, title: 'KEEMUN SUPREME (BLACK TEA)', price: '15.00', imgUrl: './img/ClassicBT/Keemum_Black_Grade_1.jpeg' },
                    { id: 11, title: 'PU-ERH TEA (BLACK TEA)', price: '15.00', imgUrl: './img/ClassicBT/Pu_Erh_Tea.jpeg' },
                    { id: 12, title: 'ROSE TEA (BLACK TEA)', price: '13.00', imgUrl: './img/ClassicBT/Rose_Tea.jpeg' },
                    { id: 13, title: 'TARRY LAPSANG SOUCHONG (BLACK TEA)', price: '14.00', imgUrl: './img/ClassicBT/Tarry_Lapsang_Souchong.jpeg' },
                ]
            }
        ]
    })
})
router.get('/index_list/home/8', function(req, res, next) {
    res.send({
        code: 'FRUIT INFUSIONS',
        page: [{}, {},
            {
                id: 3,
                type: 'sortCardMessage',
                data: [
                    { title: 'Fruit Infusions (Fruit Teas)' },
                    { detail: 'Great for making delicious warm fruit teas or fruity iced teas. Tea Lovers fruit infusions are high in vitamin C, contain no caffeine and have near zero calories. Discover some of our popular blends; Citrus Punch, Apple & Almond Teacake and Pink Lemonade.' }
                ]
            },
            {
                id: 4,
                type: 'recommendList',
                data: [
                    { id: 1, title: 'CITRUS PUNCH (FRUIT INFUSION)', price: '16.50', imgUrl: './img/FruitT/Citrus_Punch_Orange.jpeg' },
                    { id: 2, title: 'APPLE & ALMOND TEACAKE (FRUIT INFUSION)', price: '16.50', imgUrl: './img/FruitT/Apple___Almond_Teacake.jpeg' },
                    { id: 3, title: 'BERRY COCKTAIL (FRUIT INFUSION)', price: '16.50', imgUrl: './img/FruitT/Berry_Cocktail.jpeg' },
                    { id: 4, title: 'BLUE FOREST BERRY (FRUIT INFUSION)', price: '16.50', imgUrl: './img/FruitT/Blue_Forest_Berry.jpeg' },
                    { id: 5, title: 'FRUIT MEDLEY (FRUIT INFUSION)', price: '16.50', imgUrl: './img/FruitT/Fruit_Medley.jpeg' },
                    { id: 6, title: 'PEACH SANGRIA (FRUIT INFUSION)', price: '16.50', imgUrl: './img/FruitT/Peach_Melba.jpeg' },
                    { id: 7, title: 'PINK LEMONADE (FRUIT INFUSION)', price: '16.50', imgUrl: './img/FruitT/Pink_Lemonade.jpeg' },
                    { id: 8, title: 'TURKISH APPLE (FRUIT INFUSION)', price: '16.50', imgUrl: './img/FruitT/Turkish_Apple.jpeg' },
                    { id: 9, title: 'STRAWBERRY CREAM (FRUIT INFUSION)', price: '16.50', imgUrl: './img/FruitT/Strawberry-Cream-Fruit-Tea.webp' },
                    { id: 10, title: 'CRANBERRY BLOOD ORANGE (FRUIT INFUSION)', price: '16.50', imgUrl: './img/FruitT/Cranberry_Blood_Orange.jpeg' },
                    { id: 11, title: 'GOJI BERRY (FRUIT INFUSION)', price: '16.50', imgUrl: './img/FruitT/Goji_Berry.jpeg' },
                    { id: 12, title: 'RHUBARB CREAM (FRUIT INFUSION)', price: '16.50', imgUrl: './img/FruitT/Rhubarb_Cream.jpeg' },
                    { id: 13, title: 'LEMONADE (FRUIT INFUSION)', price: '16.50', imgUrl: './img/FruitT/Lemonade-Fruit-Tea-Tissane.webp' },
                    { id: 14, title: 'PINA COLADA (FRUIT INFUSION)', price: '16.50', imgUrl: './img/FruitT/PinaColadaFruitTea.webp' },
                ]
            }
        ]
    })
})
router.get('/index_list/home/9', function(req, res, next) {
    res.send({
        code: 'AUSTRALIAN TEAS',
        page: [{}, {},
            {
                id: 3,
                type: 'sortCardMessage',
                data: [
                    { title: 'Australian Teas' },
                    { detail: 'Discover the best of Australian-grown teas and herbal varieties with Tea Lovers. Our collection includes popular picks like Australian Sencha Green Tea, Daintree Black Tea, and Lemon Myrtle, as well as other unique blends that showcase the diverse flavours of Australia.' }
                ]
            },
            {
                id: 4,
                type: 'recommendList',
                data: [
                    { id: 1, title: 'AUSTRALIAN BREAKFAST (BLACK TEA)', price: '12.00', imgUrl: './img/AT/Australian_Breakfast_Blend.jpeg' },
                    { id: 2, title: 'AUSTRALIAN SENCHA (GREEN TEA)', price: '17.90', imgUrl: './img/AT/Australian_Green_Tea_Sencha.jpeg' },
                    { id: 3, title: 'AUSTRALIAN CARAVAN (BLACK TEA)', price: '14.50', imgUrl: './img/AT/Australian_Bushfire_Caravan.jpeg' },
                    { id: 4, title: 'AUSTRALIAN LEMON MYRTLE (BLACK TEA)', price: '13.00', imgUrl: './img/AT/Australian_Lemon_Myrtle.jpeg' },
                    { id: 5, title: 'AUSTRALIAN DAINTREE (BLACK TEA)', price: '12.00', imgUrl: './img/AT/Australian_Daintree.jpeg' },
                    { id: 6, title: 'AUSTRALIAN SUMMER DREAMS (GREEN TEA)', price: '17.90', imgUrl: './img/AT/Australian_Summer_Dreams.jpeg' },
                    { id: 7, title: 'ORGANIC LEMON MYRTLE (HERBAL TEA)', price: '17.00', imgUrl: './img/AT/Organic_Lemon_Myrtle.jpeg' },
                    { id: 8, title: 'AUSTRALIAN CHAI (BLACK TEA)', price: '14.50', imgUrl: './img/AT/Australian_Chai.jpeg' },
                    { id: 9, title: 'AUSTRALIAN RAINFOREST (BLACK TEA)', price: '15.00', imgUrl: './img/AT/Australian_Rainforest_Tea.jpeg' },
                    { id: 10, title: 'LEMON MYRTLE RAINFOREST (ORGANIC HERBAL BLEND)', price: '18.00', imgUrl: './img/AT/North_Queensland_Rainforest_Organic.jpeg' },
                    { id: 11, title: 'AUSTRALIAN MINT (BLACK TEA)', price: '13.00', imgUrl: './img/AT/Australian_Mint_Black_Tea.jpeg' },
                    { id: 12, title: 'AUSTRALIAN LAVENDER MAGIC (BLACK TEA)', price: '13.00', imgUrl: './img/AT/AustralianLavenderBlackTea.jpeg' },
                ]
            }
        ]
    })
})

//mysql query goodslist
router.get('/goods/shopList', function(req, res, next) {
    // front end ----(query)----> back end
    let name = req.query.searchName
    connection.query('select * from tea_table where title like "%' + name + '%"', function(error, result) {
        res.send({
            code: 0,
            data: result
        })
    })
})

//page category data
router.get('/category/menuList', function(req, res, next) {
    res.send({
        code: 0,
        menuList: [{
                id: 1,
                name: 'BLACK TEAS',
                details: [{
                        id: 1,
                        name: 'Traditional Black Teas',
                        imgUrl: './img/TBlackT/Ear_Grey_Organic.jpeg',
                    },
                    {
                        id: 2,
                        name: 'Classic Black Teas',
                        imgUrl: './img/ClassicBT/Assam_Harmutty_SFTGFOP.jpeg',
                    },
                    {
                        id: 3,
                        name: 'Flavoured Black Teas',
                        imgUrl: './img/FlavouredBT/ChocolateChipChai.jpeg',
                    },
                    {
                        id: 4,
                        name: 'Australian Black Teas',
                        imgUrl: './img/AustralianBT/Australian_Breakfast_Blend.jpeg',
                    },
                    {
                        id: 5,
                        name: 'Organic Black Teas',
                        imgUrl: './img/OrganicBT/Darjeeling_Goomtee.jpeg',
                    },
                ]
            },
            {
                id: 2,
                name: 'GREEN TEAS',
                details: [{
                        id: 6,
                        name: 'Classic Green Teas',
                        imgUrl: './img/GreenT/Japanese_Sencha_Guricha_Organic.jpeg',
                    },
                    {
                        id: 7,
                        name: 'Flavoured Green Teas',
                        imgUrl: './img/GreenT/Japanese_Lime_Green_Tea.jpeg',
                    },
                    {
                        id: 8,
                        name: 'Australian Green Teas',
                        imgUrl: './img/GreenT/Australian_Green_Tea_Sencha.jpeg',
                    },
                    {
                        id: 9,
                        name: 'Oolong (Woolong)',
                        imgUrl: './img/GreenT/Milky_Oolong.jpeg',
                    },
                    {
                        id: 10,
                        name: 'Organic Green Teas',
                        imgUrl: './img/GreenT/Jasmine_Tea_Organic.jpeg',
                    }
                ]
            },
            {
                id: 3,
                name: 'HERBAL & WELLNESS',
                details: [{
                        id: 11,
                        name: 'Herbal Infusions',
                        imgUrl: './img/Herbal/Organic_Peppermint.jpeg',
                    },
                    {
                        id: 12,
                        name: 'Wellness Blends',
                        imgUrl: './img/Herbal/Sweet_Dreams.jpeg',
                    },
                    {
                        id: 13,
                        name: 'Ayurvedic Blends',
                        imgUrl: './img/Herbal/Inner_Calmness.jpeg',
                    }
                ]
            },
            {
                id: 4,
                name: 'OTHER TEAS',
                details: [{
                        id: 14,
                        name: 'Chai Tea & Chai Latte',
                        imgUrl: './img/ChaiT/Masala_Chai_Green_Tea.jpeg',
                    },
                    {
                        id: 15,
                        name: 'Decaffeinated Teas',
                        imgUrl: './img/DecaffeinatedT/Chai_Black_Decaffeinated_Tea_Black_Tea.jpeg',
                    },
                    {
                        id: 16,
                        name: 'Rooibos & Honeybush',
                        imgUrl: './img/ROOIBOS/Rooibos_Blueberry_Cheesecake.jpeg',
                    },
                    {
                        id: 17,
                        name: 'Australian Teas',
                        imgUrl: './img/AustralianBT/Australian_Breakfast_Blend.jpeg',
                    },
                    {
                        id: 18,
                        name: 'Premium Pyramid Teabags',
                        imgUrl: './img/Teabags/Tea_Lovers_Silk_Pyramid_Teabags.webp',
                    },
                ]
            },
            {
                id: 5,
                name: 'TEA WARES',
                details: [{
                        id: 19,
                        name: 'Japanese Mugs & Teacups',
                        imgUrl: './img/TeaWares/Japanese-Lime-Blossom-Tea-Infuser-Mug-350ml.webp',
                    },
                    {
                        id: 20,
                        name: 'Japanese Teapots',
                        imgUrl: './img/TeaWares/Hedgehog_Teapot_1250ml.webp',
                    },
                    {
                        id: 21,
                        name: 'Tea Infuser Bottles',
                        imgUrl: './img/TeaWares/Bamboo_Double_Wall_Tea_Infuser_Bottle_420ml.webp',
                    },
                    {
                        id: 22,
                        name: 'Glass Teapots',
                        imgUrl: './img/TeaWares/Blooming-Flowering-Tea-Teapot-Glass-360ml.webp',
                    },
                    {
                        id: 23,
                        name: 'Cast Iron Cups',
                        imgUrl: './img/TeaWares/Blush_Pink_Iron_Cup.jpeg',
                    },
                    {
                        id: 24,
                        name: 'Tea Gift Sets',
                        imgUrl: './img/TeaWares/Safari_Tea_For_One_Set.jpeg',
                    },
                ]
            },
            {
                id: 6,
                name: 'TEA ACCESSORIES',
                details: [{
                        id: 25,
                        name: 'Japanese Tea Canisters',
                        imgUrl: './img/ACCESSORIES/Glass_Sample_Jar.webp'
                    },
                    {
                        id: 26,
                        name: 'Tea Infusers',
                        imgUrl: './img/ACCESSORIES/RoseGoldTeaInfuserBallBasket.webp'
                    },
                    {
                        id: 27,
                        name: 'Gift Teaspoons',
                        imgUrl: './img/ACCESSORIES/JapaneseCeramicTeaScoopBlueSpiral.webp'
                    },
                    {
                        id: 28,
                        name: 'Matcha Making Accessories',
                        imgUrl: './img/ACCESSORIES/Bamboo_Matcha_Whisk.webp'
                    },
                    {
                        id: 29,
                        name: 'Teapot Warmers',
                        imgUrl: './img/ACCESSORIES/Moroccan-White-Ceramic-Teapot-Wamer.webp'
                    }
                ]
            },
            {
                id: 7,
                name: 'GIFTS',
                details: [{
                    id: 30,
                    name: 'Gift Box',
                    imgUrl: './img/Gift/Christmas-Tea-Gift-Box-Set.webp'
                }]
            }
        ],
    })
})


//query production name and return data
router.get('/product/title', function(req, res, next) {
    let title = req.query.title;
    connection.query('select * from tea_table where title like "%' + title + '%"', function(error, result) {
        if (error) throw error;
        res.send({
            code: 0,
            data: result
        })
    })
})

/**
 * login
 */
router.post('/login', function(req, res, next) {
    //back end get data from front end
    let params = {
            username: req.body.username,
            password: req.body.password,
        }
        // let token = user.token()
        // console.log(token);
        //query from table user
    connection.query(user.queryUsername(params), function(error, result) {
        //username is ture
        if (result.length > 0) {
            connection.query(user.queryPassword(params), function(error, result) {
                if (result.length > 0) {
                    //username and password are correct
                    res.send({
                        code: 200,
                        data: {
                            success: true,
                            msg: 'login success',
                            data: result
                        }
                    })
                } else {
                    //username correct but password incorrect
                    res.send({
                        code: 302,
                        data: {
                            success: false,
                            msg: 'password is incorrect'
                        }
                    })
                }
            })
        } else {
            //username is not found
            res.send({
                code: 301,
                data: {
                    success: false,
                    msg: 'user is not found'
                }
            })
        }
    })
})

/**
 * addToCart
 */
let jwt = require('jsonwebtoken')
router.post('/product/addToCart', function(req, res, next) {
    let token = req.headers.token
    console.log(token)
    let username = jwt.decode(token)
    console.log(username)

    res.send({
        data: {
            a: 0
        }
    })
})

module.exports = router;