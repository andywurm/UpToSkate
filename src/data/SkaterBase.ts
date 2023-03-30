export interface Skater{
    name: string
    img: string
    category: string
    partner?: string
    country: string
    DOB: string
    height: string,
    status: string
    personalBest: string,
    achievements: string[]
}

const skaters: Skater[] = [
    {
        name: 'Shoma Uno',
        img: 'ShomaUno.jpg',
        category: 'Mens',
        country: 'Japan',
        DOB: 'December 17, 1997',
        height: '158cm',
        status: 'active',
        personalBest: '312.48',
        achievements: ['2018 Olympic Silver Medalist', '2022 Olympic Bronze Medalist']
    },
    {
        name: 'Amber Glenn',
        img:'AmberGlenn.jpg',
        category: 'Womens',
        country: 'United States',
        DOB: 'October 28, 1999',
        height: '167cm',
        status: 'active',
        personalBest: '201.02',
        achievements: ['2022 Skate America Bronze Medalist']
    },
    {
        name: 'Madison Chock',
        img:'MadisonChock.jpg',
        category: 'Ice Dance',
        partner: 'Evan Bates',
        country: 'United States',
        DOB: 'February 7, 1992',
        height: '157 cm',
        status: 'active',
        personalBest: '216.83',
        achievements: ['2022 Skate America Gold Medalist','Worlds Bronze Medalist']
    },{
        name: 'Evan Bates',
        img:'EvanBates.jpg',
        category: 'Ice Dance',
        partner: 'Madison Chock',
        country: 'United States',
        DOB: 'February 23, 1989',
        height: '187cm',
        status: 'active',
        personalBest: '216.83',
        achievements: ['2022 Skate America Gold Medalist','Worlds Bronze Medalist']
    },{
        name: 'Wenjing Sui',
        img:'WenjingSui.jpg',
        partner: 'Cong Han',
        category: 'Pairs',
        country: 'China',
        DOB: 'July 18, 1995',
        height: '150cm',
        status: 'active',
        personalBest: '239.88',
        achievements: ['2022 Olympic Gold Medalist','2018 Olympic Silver Medalist']
    },{
        name: 'Cong Han',
        img:'CongHan.jpg',
        partner: 'Wenjing Sui',
        category: 'Pairs',
        country: 'China',
        DOB: 'June 8, 1992',
        height: '170cm',
        status: 'active',
        personalBest: '239.88',
        achievements: ['2022 Olympic Gold Medalist','2018 Olympic Silver Medalist']
    },
    {
        name: 'Junhwan Cha',
        img:'JunhwanCha.jpg',
        category: 'Mens',
        country: 'South Korea',
        DOB: 'October 21, 2001',
        height: '178cm',
        status: 'active',
        personalBest: '282.38',
        achievements: ['2022 Skate America Bronze Medalist', '2023 Worlds Silver Medalist']
    },
    {
        name: 'Kaori Sakamoto',
        img:'KaoriSakamoto.jpg',
        category: 'Womens',
        country: 'Japan',
        DOB: 'April 9, 2000',
        height: '159cm',
        status: 'active',
        personalBest: '236.09',
        achievements: ['2022 Skate America Gold Medalist','2022 Olympic Broze Medalist']
    },
    {
        name: 'Yuzuru Hanyu',
        img:'YuzuruHanyu.jpg',
        category: 'Mens',
        country: 'Japan',
        DOB: 'December 7, 1994',
        height: '172cm',
        status: 'retired',
        personalBest: '322.59',
        achievements: ['2014 Olympic Gold Medalist', '2018 Olympic Gold Medalist']
    },
    {
        name: 'Loena Hendrickx',
        img:'LoenaHendrickx.jpg',
        category: 'Womens',
        country: 'Belgium',
        DOB: 'May 11, 1999',
        height: '160cm',
        status: 'active',
        personalBest: '219.05',
        achievements: ['2021 Grand Prix of Italy Bronze Medalist']
    },
    {
        name: 'Deniss Vasiljevs',
        img:'DenissVasiljevs.jpg',
        category: 'Mens',
        country: 'Latvia',
        DOB: 'August 9, 1999',
        height: '176cm',
        status: 'active',
        personalBest: '201.02',
        achievements: ['2022 Skate America Bronze Medalist']
    },
    {
        name: 'Alena Kostornia',
        img:'AlenaKostornia.jpg',
        category: 'Womens',
        country: 'Russia',
        DOB: 'August 24, 2003',
        height: '156cm',
        status: 'active',
        personalBest: '247.59',
        achievements: ['2019 Grand Prix Final Gold Medalist']
    },
    {
        name: 'Donovan Carrillo',
        img:'DonovanCarrillo.png',
        category: 'Mens',
        country: 'Mexico',
        DOB: 'November 17, 1999',
        height: '168cm',
        status: 'active',
        personalBest: '218.13',
        achievements: ['First Mexican skater to make it to Olympics']
    },
    {
        name: 'Starr Andrews',
        img:'StarrAndrews.jpg',
        category: 'Womens',
        country: 'United States',
        DOB: 'June 23, 2001',
        height: '167cm',
        status: 'active',
        personalBest: '191.26',
        achievements: ['2022 Skate Canada Silver Medalist']
    },
    {
        name: 'Madison Hubbell',
        img:'MadisonHubbell.jpg',
        partner: 'Zachary Donohue',
        category: 'Ice Dance',
        country: 'United States',
        DOB: 'February 24, 1991',
        height: '172cm',
        status: 'retired',
        personalBest: '222.39',
        achievements: ['2022 Olympic Bronze Medalist', '2022 Worlds Silver Medalist']
    },{
        name: 'Zachary Donohue',
        img:'ZacharyDonohue.jpg',
        partner: 'Madison Hubbell',
        category: 'Ice Dance',
        country: 'United States',
        DOB: 'January 8, 1991',
        height: '188cm',
        status: 'retired',
        personalBest: '222.39',
        achievements: ['2022 Olympic Bronze Medalist', '2022 Worlds Silver Medalist']
    },
    {
        name: 'Charlene Guignard',
        img:'CharleneGuignard.jpg',
        partner: 'Marco Fabbri',
        category: 'Ice Dance',
        country: 'Italy',
        DOB: 'December 8, 1989',
        height: '161cm',
        status: 'active',
        personalBest: '219.85',
        achievements: ['2023 Europeans Gold Medalist', '2023 Worlds Silver Medalist']
    },
    {
        name: 'Marco Fabbri',
        img:'MarcoFabbri.jpg',
        partner: 'Charlene Guignard',
        category: 'Ice Dance',
        country: 'Italy',
        DOB: 'February 2, 1988',
        height: '165cm',
        status: 'active',
        personalBest: '219.85',
        achievements: ['2023 Europeans Gold Medalist', '2023 Worlds Silver Medalist']
    },
    {
        name: 'Piper Gilles',
        img:'PiperGilles.jpg',
        partner: 'Paul Poirier',
        category: 'Ice Dance',
        country: 'Canada',
        DOB: 'January 16, 1992',
        height: '163cm',
        status: 'active',
        personalBest: '215.70',
        achievements: ['2022 Skate Canada Gold Medalist']
    },
    {
        name: 'Paul Poirier',
        img:'PaulPoirier.jpg',
        partner: 'Piper Gilles',
        category: 'Ice Dance',
        country: 'Canada',
        DOB: 'November 6, 1991',
        height: '174cm',
        status: 'active',
        personalBest: '215.70',
        achievements: ['2022 Skate Canada Gold Medalist']
    },
    {
        name: 'Maia Shibutani',
        img:'MaiaShibutani.jpg',
        partner: 'Alex Shibutani',
        category: 'Ice Dance',
        country: 'United States',
        DOB: 'July 20, 1994',
        height: '160cm',
        status: 'retired',
        personalBest: '294.25',
        achievements: ['2018 Olympic Bronze Medalist']
    },
    {
        name: 'Alex Shibutani',
        img:'AlexShibutani.jpg',
        partner: 'Maia Shibutani',
        category: 'Ice Dance',
        country: 'United States',
        DOB: 'April 25, 1991',
        height: '182cm',
        status: 'retired',
        personalBest: '294.25',
        achievements: ['2018 Olympic Bronze Medalist']
    },
    {
        name: 'Lilah Fear',
        img:'LilahFear.jpg',
        partner: 'Lewis Gibson',
        category: 'Ice Dance',
        country: 'Great Britain',
        DOB: 'November 6, 1999',
        height: '160cm',
        status: 'active',
        personalBest: '214.73',
        achievements: ['2023 Europeans Silver Medalist']
    },
    {
        name: 'Lewis Gibson',
        img:'LewisGibson.jpg',
        partner: 'Lilah Fear',
        category: 'Ice Dance',
        country: 'Great Britain',
        DOB: 'January 5, 1994',
        height: '175cm',
        status: 'active',
        personalBest: '214.73',
        achievements: ['2023 Europeans Silver Medalist']
    },
    {
        name: 'Sara Conti',
        img:'SaraConti.jpg',
        partner: 'Niccolo Macii',
        category: 'Pairs',
        country: 'Italy',
        DOB: 'February 8, 2000',
        height: '164cm',
        status: 'active',
        personalBest: '208.08',
        achievements: ['2023 Europeans Gold Medalist', '2023 Worlds Bronze Medalist']
    },
    {
        name: 'Niccolo Macii',
        img:'NiccoloMacii.jpg',
        partner: 'Sara Conti',
        category: 'Pairs',
        country: 'Italy',
        DOB: 'October 18, 1995',
        height: '186cm',
        status: 'active',
        personalBest: '208.08',
        achievements: ['2023 Europeans Gold Medalist', '2023 Worlds Bronze Medalist']
    },
    {
        name: 'Riku Miura',
        img:'RikuMiura.jpg',
        partner: 'Ryuichi Kihara',
        category: 'Pairs',
        country: 'Japan',
        DOB: 'December 17, 2001',
        height: '146cm',
        status: 'active',
        personalBest: '222.16',
        achievements: ['2023 Worlds Gold Medalist', '2022 Grand Prix Final Gold Medalist']
    },
    {
        name: 'Ryuichi Kihara',
        img:'RyuichiKihara.jpg',
        partner: 'Riku Miura',
        category: 'Pairs',
        country: 'Japan',
        DOB: 'August 22, 1992',
        height: '174cm',
        status: 'active',
        personalBest: '222.16',
        achievements: ['2023 Worlds Gold Medalist', '2022 Grand Prix Final Gold Medalist']
    },
    {
        name: 'Alexa Knierim',
        img:'AlexaKnierim.jpg',
        partner: 'Brandon Frazier',
        category: 'Pairs',
        country: 'United States',
        DOB: 'June 10, 1991',
        height: '157cm',
        status: 'active',
        personalBest: '221.09',
        achievements: ['2022 Worlds Gold Medalist']
    },
    {
        name: 'Brandon Frazier',
        img:'BrandonFrazier.jpg',
        partner: 'Alexa Knierim',
        category: 'Pairs',
        country: 'United States',
        DOB: 'November 19, 1992',
        height: '189cm',
        status: 'active',
        personalBest: '221.09',
        achievements: ['2022 Worlds Gold Medalist']
    },
    {
        name: 'Haein Lee',
        img:'Hae-inLee.jpg',
        category: 'Womens',
        country: 'Korea',
        DOB: 'April 16, 2005',
        height: '164cm',
        status: 'active',
        personalBest: '220.94',
        achievements: ['2023 Four Continents Gold Medalist', '2023 Worlds Silver Medalist']
    },
    {
        name: 'Ilia Malinin',
        img:'IliaMalinin.jpg',
        category: 'Mens',
        country: 'United States',
        DOB: 'December 2, 2004',
        height: '168cm',
        status: 'active',
        personalBest: '288.44',
        achievements: ['2023 Four Continents Gold Medalist', '2023 Worlds Bronze Medalist']
    },
]
export default skaters