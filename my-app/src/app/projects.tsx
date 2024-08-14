import classes from './styles/sections.module.css'
import { Text, SimpleGrid } from '@mantine/core';

export function Projects() {
    return (
        <div className={classes.container} id="section_2">
            <h3 className={classes.p2}>Projects</h3>
            <p className={classes.p1}>What have I been working on so far</p>
                <Text size="lg" className={classes.intro} style={{"margin-bottom":"20px"}}>
                Throughout my journey as an CS student I've had a lot of opportunities to collaborate with my colleagues.
                These group work projects helped me understand the fundamentals of working as a team and allowed me to improve
                as a programmer by constantly trying to adjust to the feedback of my workmates. 
                </Text>
                <SimpleGrid cols={2} spacing="xl" verticalSpacing="xl">
                <div className={classes.project_card}>
                    <h2 style={{"margin":"auto"}}>Game of Life</h2>
                    <Text size="lg" className={classes.intro} style={{"margin-bottom":"20px"}}>
                    A simple simulation of John Conway's Game of Life written in Java, which uses multithreading as a basis of 
                    entity management, with the UI done entirely in JAVAFX
                    </Text>
                </div>
                <div className={classes.project_card}>
                    <h2 style={{"margin":"auto"}}>And more :></h2>
                    <Text size="lg" className={classes.intro} style={{"margin-bottom":"20px"}}>
                    Don't let me forget to update this part as soon as I get all the people to unprivte the repos
                    </Text>
                </div>
                </SimpleGrid>
        </div>
    )
}