import classes from './styles/about_me.module.css'
import { Text, Box } from '@mantine/core';

export function AboutMe() {
    return (
        <div className={classes.container}>
            <h3>About me</h3>
            <p className={classes.p1}>Introduction</p>
            <Box w={900}>
                <Text size="lg" className={classes.intro}>
                Hi, my name is Tomasz and I am (currently) a third year student of Computer Science at AGH UST.
                My journey with IT has officialy started with the beginning of my studies in 2022 as I have not really done any serious work prior.
                </Text>
                <Text size="lg" className={classes.intro}>
                My studies have been an incredibly rewarding experience, which allowed me to find a field in which I feel both comfortable and passionate.
                With projects such as small databeses, web games, store sites and standalone applications, I 
                </Text>
            </Box>
        </div>
    )
}