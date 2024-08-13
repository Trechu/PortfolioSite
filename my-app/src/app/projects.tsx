import classes from './styles/sections.module.css'
import { Text } from '@mantine/core';

export function Projects() {
    return (
        <div className={classes.container} id="section_2">
            <h3 className={classes.p2}>Projects</h3>
            <p className={classes.p1}>What have I been working on so far</p>
                <Text size="lg" className={classes.intro}>
                Hi, my name is Tomasz and I am an hard working, diligent and dedicated third year student of Computer Science at AGH UST.
                </Text>
                <Text size="lg" className={classes.intro}>
                My studies have been an incredibly rewarding experience, which allowed me to find a field in which I feel both comfortable and passionate.
                Projects such as small databeses, web games, store sites and standalone applications really helped improve on my journey of
                software development.
                </Text>
                <Text size="lg" className={classes.intro}>
                I am constantly looking for new ways of learning and improving my skillset. Take this website for example, it has been created as a mini project
                which I want to use as an opportunity to learn new web frameworks, tricks and habits.
                </Text>
        </div>
    )
}