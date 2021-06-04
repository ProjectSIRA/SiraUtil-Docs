import React from 'react'
import clsx from 'clsx'
import styles from './Welcome.module.css'

const FeatureList = [
    {
        title: 'Code with structure in mind',
        image: 'https://cdn.discordapp.com/avatars/370418020448862208/713de9e498b6b46475548c47763465b0.png?size=256',
        description: (
            <>
                Gone are the days of having one massive manager class or a plethora of static variables
                referencing each other throughout your entire project. The Zenject library helps you structure
                your code and SiraUtil makes it easy to use.
            </>
        )
    },
    {
        title: 'A powerful API with tons of potential',
        image: 'https://cdn.discordapp.com/avatars/370418020448862208/713de9e498b6b46475548c47763465b0.png?size=256',
        description: (
            <>
                Leveraging the power of the Affinity API, the Saber API, object redecorators, and more, SiraUtil gives
                you the confidence to create entire gamemodes and complex systems with ease. 
            </>
        )
    },
    {
        title: 'Tools for you, me, and everyone else',
        image: 'https://cdn.discordapp.com/avatars/370418020448862208/713de9e498b6b46475548c47763465b0.png?size=256',
        description: (
            <>
                SiraUtil provides enhancements such as FPFC Toggle and SongControl to improve your development iteration
                cycle, and asynchronous web utilities for getting information, changelogs, and update reminders about your
                mod from GitHub and other sources.
            </>
        )
    }
]

function Feature({image, title, description}) {
    return (
        <div className={clsx('col col--4')}>
            <div className="text--center">
                <img className={styles.featureImg} src={image} alt={title} />
            </div>
            <div className="text--center padding-horiz--md">
                <h3>{title}</h3>
                <p>{description}</p>
            </div>
        </div>
    )
}

export default function Welcome() {
    return (
        <section className={styles.features}>
            <div className="container">
                <div className="row">
                    {FeatureList.map((props, idx) => (
                        <Feature key={idx} {...props} />
                    ))}
                </div>
            </div>
        </section>
    )
}