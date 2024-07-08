import classes from './styles/sections.module.css'
import { Text, Box, Image } from '@mantine/core';
import map from './map.png'


export function Interests() {
    return (
        <div className={classes.container} id="section_3">
            <h3 className={classes.p2}>Interests</h3>
            <p className={classes.p1}>A little about myself</p>
            <Box w={1000}>
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
                <Text size="lg" className={classes.intro}>
                As for the travelling part, here You can find a map with most of the more interesting places that I have been to so far.
                </Text>
                <Image src={map.src} />
            </Box>
        </div>
    )
}