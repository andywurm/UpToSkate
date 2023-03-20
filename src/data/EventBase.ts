export interface Event{
    event: string
    date: string
    img: string
    location: string
    topMen: any[]
    topWomen: string []
    topPairs: string []
    topDancers: string []
    status: string
}

const event: Event[] = [
    {
        event: 'Grand Prix: Skate America',
        date: 'October 21-23, 2022',
        img: 'SkAm.png',
        location: 'Norwood, Massachusetts',
        topMen: [
            {name: 'Ilia MALININ',rank: '1',nation: 'USA',Points: '280.37',sp: '4',fs: '1'}, 
            {name: 'Kao MIURA',rank: '2',nation: 'JPN',Points: '273.19',sp: '1',fs: '2'}, 
            {name: 'Junhwan CHA',rank: '3',nation: 'KOR',Points: '264.05',sp: '2',fs: '3'}, 
            {name: 'Daniel GRASSL',rank: '4',nation: 'ITA',Points: '257.68',sp: '3',fs: '4'}, 
            {name: 'Roman SADOVSKY',rank: '5',nation: 'CAN',Points: '225.41',sp: '5',fs: '7'}, 
            {name: 'Wesley CHIU',rank: '6',nation: 'CAN',Points: '219.90',sp: '9',fs: '6'},
            {name: 'Liam KAPEIKIS',rank: '7',nation: 'USA',Points: '219.50',sp: '8',fs: '8'}, 
            {name: 'Sena MIYAKE',rank: '8',nation: 'JPN',Points: '215.74',sp: '6',fs: '9'}, 
            {name: 'Koshiro SHIMADA',rank: '9',nation: 'JPN',Points: '215.12',sp: '12',fs: '5'}, 
            {name: 'Dinh TRAN',rank: '10',nation: 'USA',Points: '199.68',sp: '11',fs: '10'}, 
            {name: 'Mihail SELEVKO',rank: '11',nation: 'EST',Points: '191.80',sp: '7',fs: '12'}, 
            {name: 'Donovan CARRILLO',rank: '12',nation: 'MEX',Points: '188.28',sp: '10',fs: '11'},
        ],
        topWomen: ['Kaori Sakamoto','Isabeau Levito','Amber Glenn'],
        topPairs: ['Alexa Knierim & Brandon Frazier','Deanna Stellato-Dudek & Maxime Deschamps', 'Kelly Ann Laurin & Lucas Ethier'],
        topDancers: ['Madison Chock & Evan Bates','Kaitlyn Hawayek & Jean-Luc Baker', 'Marie Jade-Lauriault & Romain Le Gac'],
        status: 'Past'
    },
    {
        event: 'Grand Prix: Skate Canada',
        date: 'October 28-30, 2022',
        img: 'SkateCanada.png',
        location: 'Mississagua, Ontario',
        topMen: [
            {name: 'Ilia Malinin',rank: '1',nation: 'USA',Points: '280.37',sp: '4',fs: '1'}, 
            {name: 'Kao Miura',rank: '2',nation: 'JPN',Points: '273.19',sp: '1',fs: '2'}, 
            {name: 'Junhwan Cha',rank: '3',nation: 'KOR',Points: '264.05',sp: '2',fs: '3'}, 
        ],
        topWomen: ['Rinka Watanabe','Starr Andrews','Young You'],
        topPairs: ['Riku Miura & Ryuichi Kihara','Emily Chan & Spencer Akira Howe', 'Sara Conti & Niccolo Macii'],
        topDancers: ['Piper Gilles & Paul Poirier','Lilah Fear & Lewis Gibson', 'Caroline Green & Michael Parsons'],
        status: 'Past'
    },
    {
        event: 'Grand Prix de France',
        date: 'November 4-6, 2022',
        img: 'GPFrance2.png',
        location: 'Angers, France',
        topMen: [
            {name: 'Ilia Malinin',rank: '1',nation: 'USA',Points: '280.37',sp: '4',fs: '1'}, 
            {name: 'Kao Miura',rank: '2',nation: 'JPN',Points: '273.19',sp: '1',fs: '2'}, 
            {name: 'Junhwan Cha',rank: '3',nation: 'KOR',Points: '264.05',sp: '2',fs: '3'}, 
        ],
        topWomen: ['Loena Hendrickx','Yelim Kim','Rion Sumiyoshi'],
        topPairs: ['Deanna Stellato-Dudek & Maxime Deschamps', 'Camille Kovalev & Pavel Kovalev', 'Annika Hocke & Robert Kunkel'],
        topDancers: ['Charlene Guignard & Marco Fabri','Laurence Fornier Beaudry & Nikolaj Sorensen', 'Evgenia Lopareva & Geoffrey Brissaud'],
        status: 'Past'
    },
    {
        event: 'Grand Prix: MK John Wilson Trophy',
        date: 'November 11-13, 2022',
        img: 'JohnWilson.png',
        location: 'Sheffield, Great Britan',
        topMen: [
            {name: 'Ilia Malinin',rank: '1',nation: 'USA',Points: '280.37',sp: '4',fs: '1'}, 
            {name: 'Kao Miura',rank: '2',nation: 'JPN',Points: '273.19',sp: '1',fs: '2'}, 
            {name: 'Junhwan Cha',rank: '3',nation: 'KOR',Points: '264.05',sp: '2',fs: '3'}, 
        ],
        topWomen: ['Mai Mihara','Isabeau Levito','Anastasia Gubnova'],
        topPairs: ['Alexa Knierim & Brandon Frazier','Sara Conti & Niccolo Macii', 'Letizia Roscher & Luis Schuster'],
        topDancers: ['Charlene Guignard & Marco Fabri','Lilah Fear & Lewis Gibson', 'Majorie Lajoie & Zachary Lagha'],
        status: 'Past'
    },
    {
        event: 'Grand Prix: NHK Trophy',
        date: 'November 18-20, 2022',
        img: 'NHK2.png',
        location: 'Sapporo, Japan',
        topMen: [
            {name: 'Ilia Malinin',rank: '1',nation: 'USA',Points: '280.37',sp: '4',fs: '1'}, 
            {name: 'Kao Miura',rank: '2',nation: 'JPN',Points: '273.19',sp: '1',fs: '2'}, 
            {name: 'Junhwan Cha',rank: '3',nation: 'KOR',Points: '264.05',sp: '2',fs: '3'}, 
        ],
        topWomen: ['Yelim Kim','Kaori Sakamoto','Rion Sumiyoshi'],
        topPairs: ['Riku Miura & Ryuichi Kihara', 'Emily Chan & Spencer Akira Howe', 'Brooke McIntosh & Benjamin Mimar'],
        topDancers: ['Laurence Fornier Beaudry & Nikolaj Sorensen', 'Madison Chock & Evan Bates', 'Caroline Green & Michael Parsons'],
        status: 'Past'
    },
    {
        event: 'Grand Prix of Espoo',
        date: 'November 25-27, 2022',
        img: 'GPEspoo.png',
        location: 'Espoo, Finland',
        topMen: [
            {name: 'Ilia Malinin',rank: '1',nation: 'USA',Points: '280.37',sp: '4',fs: '1'}, 
            {name: 'Kao Miura',rank: '2',nation: 'JPN',Points: '273.19',sp: '1',fs: '2'}, 
            {name: 'Junhwan Cha',rank: '3',nation: 'KOR',Points: '264.05',sp: '2',fs: '3'}, 
        ],
        topWomen: ['Mai Mihara','Loena Hendrickx','Mana Kawabe'],
        topPairs: ['Rebecca Ghilardi & Filippo Ambrosini','Alisa Efimova & Ruben Blommaert', 'Anastasia Metelkina & Danil Parkman'],
        topDancers: ['Piper Gilles & Paul Poirier','Kaitlyn Hawayek & Jean-Luc Baker', 'Julia Turkkila & Matthias Versluis'],
        status: 'Past'
    },
    {
        event: 'Grand Prix Final',
        date: 'December 8-11, 2022',
        img: 'GPFinal.png',
        location: 'Turn, Italy',
        topMen: [
            {name: 'Ilia Malinin',rank: '1',nation: 'USA',Points: '280.37',sp: '4',fs: '1'}, 
            {name: 'Kao Miura',rank: '2',nation: 'JPN',Points: '273.19',sp: '1',fs: '2'}, 
            {name: 'Junhwan Cha',rank: '3',nation: 'KOR',Points: '264.05',sp: '2',fs: '3'}, 
        ],
        topWomen: ['Mai Mihara','Isabeau Levito','Loena Hendrickx'],
        topPairs: ['Riku Miura & Ryuichi Kihara', 'Alexa Knierim & Brandon Frazier','Sara Conti & Niccolo Macii'],
        topDancers: ['Piper Gilles & Paul Poirier', 'Madison Chock & Evan Bates','Charlene Guignard & Marco Fabri'],
        status: 'Past'
    },
    {
        event: 'Four Continents',
        date: 'February 7-12, 2023',
        img: '4CC.png',
        location: 'Colorado Springs, USA',
        topMen: [
            {name: 'Ilia Malinin',rank: '1',nation: 'USA',Points: '280.37',sp: '4',fs: '1'}, 
            {name: 'Kao Miura',rank: '2',nation: 'JPN',Points: '273.19',sp: '1',fs: '2'}, 
            {name: 'Junhwan Cha',rank: '3',nation: 'KOR',Points: '264.05',sp: '2',fs: '3'}, 
        ],
        topWomen: ['Lee Hae-in','Yelim Kim','Mone Chiba'],
        topPairs: ['Riku Miura & Ryuichi Kihara', 'Emily Chan & Spencer Akira Howe','Deanna Stellato-Dudek & Maxime Deschamps',],
        topDancers: ['Madison Chock & Evan Bates','Laurence Fornier Beaudry & Nikolaj Sorensen', 'Majorie Lajoie & Zachary Lagha'],
        status: 'Future'
    },
    {
        event: 'World Figure Skating Championships',
        date: 'March 20-26, 2023',
        img: 'Worlds.png',
        location: 'Saitama, Japan',
        topMen: ['Unknown'],
        topWomen: ['Unknown'],
        topPairs: ['Unknown'],
        topDancers: ['Unknown'],
        status: 'Future'
    }
        
]
export default event