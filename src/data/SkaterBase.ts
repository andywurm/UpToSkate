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
        achievements: ['2022 Skate America Bronze Medalist']
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
        achievements: ['2022 Skate America Bronze Medalist']
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
        achievements: ['2022 Skate America Bronze Medalist']
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
        achievements: ['2022 Skate America Bronze Medalist']
    },
]
export default skaters