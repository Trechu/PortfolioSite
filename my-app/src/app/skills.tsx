import classes from './styles/sections.module.css'
import { SimpleGrid, Image } from '@mantine/core';
import cpp from './cpp.png'
import python from './python.png'
import c from './c.png'
import css from './css.png'
import git from './git.png'
import html from './html.png'
import java from './java.png'
import js from './js.png'
import react from './react.png'
import sql from './sql.png'
import ts from './ts.png'


interface SkillIconProps {
    icon: string;
}

function SkillIcon({icon}: SkillIconProps){
    return (
        <div className={classes.skill_icon}>
            <Image src={icon}  fit="contain"/>
        </div>
    )
}

export function Skills() {
    return (
        <div className={classes.container} id="section_1">
            <h3 className={classes.p2}>Skills</h3>
            <p className={classes.p1}>The things that I have learned so far</p>
            <SimpleGrid cols={4} spacing="xl" verticalSpacing="lg">
                <SkillIcon icon={java.src}/>
                <SkillIcon icon={python.src}/>
                <SkillIcon icon={cpp.src}/>
                <SkillIcon icon={c.src}/>
                <SkillIcon icon={html.src}/>
                <SkillIcon icon={css.src}/>
                <SkillIcon icon={js.src}/>
                <SkillIcon icon={ts.src}/>
                <SkillIcon icon={react.src}/>
                <SkillIcon icon={git.src}/>
                <SkillIcon icon={sql.src}/>
            </SimpleGrid>
        </div>
    )
}