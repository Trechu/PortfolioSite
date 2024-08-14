import classes from './styles/sections.module.css'
import { SimpleGrid, Image } from '@mantine/core';
import cpp from './icons/cpp.png'
import python from './icons/python.png'
import c from './icons/c.png'
import css from './icons/css.png'
import git from './icons/git.png'
import html from './icons/html.png'
import java from './icons/java.png'
import js from './icons/js.png'
import react from './icons/react.png'
import sql from './icons/sql.png'
import ts from './icons/ts.png'
import mongodb from './icons/mongodb.png'

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
            <p className={classes.p1}>The things that I have worked with so far</p>
            <SimpleGrid cols={4} spacing="sm" verticalSpacing="sm">
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
                <SkillIcon icon={mongodb.src}/>
            </SimpleGrid>
        </div>
    )
}