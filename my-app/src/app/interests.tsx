import classes from './styles/sections.module.css'
import indicators from './styles/indicators.module.css'
import { Text, Paper, Title, Image } from '@mantine/core';
import map from './icons/map.png'
import { Carousel } from '@mantine/carousel'
import { useState } from 'react';

interface CardProps {
    flag: string;
    name: string;
    desc: string;
}
  
function Card({ flag, name, desc }: CardProps) {
    return (
      <Paper
        shadow="md"
        p="xl"
        radius="md"
        className={classes.card}
      >
        <div>
            <Image src={flag} size="xs" h={50} w="auto"/>
          <Text className={classes.category} size="lg">
            {name}
          </Text>
          <Title order={3} className={classes.title} >
            {desc}
          </Title>
        </div>
      </Paper>
    );
}

const places_of_interest = [
    {
        flag: 'https://www.countryflags.com/wp-content/uploads/japan-flag-png-large.png',
        name: 'Japan',
        desc: 'My longest, biggest and most memorable trip'
    },
    {
        flag: 'https://www.countryflags.com/wp-content/uploads/madagascar-flag-png-large.png',
        name: 'Madagascar',
        desc: 'Since I love animals, I wanted to go to a place with lots of them'
    },
    {
        flag: 'https://www.countryflags.com/wp-content/uploads/dominican-republic-flag-png-large.png',
        name: 'The Dominican Republic',
        desc: 'My parents needed a long awaited break, and so we decided to fly somewhere exotic'
    },
    {
        flag: 'https://www.countryflags.com/wp-content/uploads/singapore-flag-png-large.png',
        name: 'Singapore',
        desc: ''
    },
    {
        flag: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a3/Flag_of_Bali.svg/800px-Flag_of_Bali.svg.png',
        name: 'Bali',
        desc: ''
    },
    {
        flag: 'https://www.countryflags.com/wp-content/uploads/germany-flag-png-large.png',
        name: 'Germany',
        desc: 'Most of the trip consisted of a visit at the Tropical Island water park'
    },
    {
        flag: 'https://www.countryflags.com/wp-content/uploads/italy-flag-png-large.png',
        name: 'Italy',
        desc: 'We went to Italy to visit famous places, experience the culture, but mostly to eat great food'
    },
    {
        flag: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/84/Sicilian_Flag.svg/1200px-Sicilian_Flag.svg.png',
        name: 'Sicily',
        desc: 'A small and windy, but leisurely place'
    },
    {
        flag: 'https://www.countryflags.com/wp-content/uploads/greece-flag-png-large.png',
        name: 'Greece',
        desc: 'This was the perfect destination for when I was still a kid'
    },
    {
        flag: 'https://www.countryflags.com/wp-content/uploads/united-arab-emirates-flag-png-large.png',
        name: 'The United Arab Emirates',
        desc: 'I have only technically been here as a mid point between flights'
    },
    {
        flag: 'https://www.countryflags.com/wp-content/uploads/sri-lanka-flag-png-large.png',
        name: 'Sri Lanka',
        desc: 'Beautiful sights, amazing culture, delicious tea'
    }
]

interface PinProps {
    active?: boolean;
    left: string;
    top: string;
}

function Pin({active, left, top}: PinProps){
    return (
        <div 
        className={indicators.pin}
        style={{left: `${left}px`, top: `${top}px`, display: active ? 'block' : 'none' }}
        >
        </div>
    )
}

export function Interests() {
    const [active, setActive] = useState(0);

    const slides = places_of_interest.map((item) => (
        <Carousel.Slide key={item.name}>
            <Card {...item}/>
        </Carousel.Slide>
    ));

    return (
        <div className={classes.container} id="section_3">
            <h3 className={classes.p2}>Interests</h3>
            <p className={classes.p1}>A little about myself</p>
                <Text size="lg" className={classes.intro}>
                My hobbies include some generic things such as video and board games, fantasy books and all types of movies, but also 
                travel and Japaneese culture.
                </Text>
                <Text size="lg" className={classes.intro}>
                If You made it this far and take interest in reading, then let me reccomend You my favourite book series, The Cosmere 
                by Brandon Sanderson. It consists of multiple subseries, each taking place on a different planet, with a totally different
                setting, magic system and characters ( with some exceptions ;) ). If you want to learn more then start with an guide to 
                the Cosmere Reading order as the vast size of the series might be a little daunting at first. But trust me, the commitment
                is worth it.
                </Text>
                <br/>
                <Text size="lg" className={classes.intro}>
                As for the travelling part, here You can find a map with most of the more interesting places that I have been to so far.
                </Text>
                <div className={classes.map_container} >
                    <img src={map.src} className={classes.map_img} />
                    <Pin active={active===0} left='900' top='230' />
                    <Pin active={active===1} left='620' top='400' />
                    <Pin active={active===2} left='270' top='285' />
                    <Pin active={active===3} left='798' top='345' />
                    <Pin active={active===4} left='835' top='370' />
                    <Pin active={active===5} left='510' top='175' />
                    <Pin active={active===6} left='520' top='210' />
                    <Pin active={active===7} left='520' top='230' />
                    <Pin active={active===8} left='550' top='225' />
                    <Pin active={active===9} left='645' top='270' />
                    <Pin active={active===10} left='730' top='320' />
                </div>
                <Carousel className={classes.carousel} slideSize="50%"
            slideGap={{ base: 'xl', sm: 'xl' }}
            align="center"
            initialSlide={0}
            withIndicators
            onSlideChange={(index: number) => {
                setActive(index)
            }}
            loop>
                {slides}
            </Carousel>
            <br/>
            <br/>
            <Text size="lg" className={classes.intro}>
                You can also find me at some Fantasy and Anime conventions around Poland, where I do some cosplaying, attend
                lectures or simply hang out with people from various fandoms.
            </Text>            
        </div>
    )
}