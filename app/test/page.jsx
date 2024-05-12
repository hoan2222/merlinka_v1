'use client'

import React, { useEffect, useState } from 'react'
import Card from '../components/ui/card'
import { useMeasure } from '@uidotdev/usehooks'
import { animate, useMotionValue, motion } from 'framer-motion'

export default function Gallery() {

    const content = [
        "/PlaceHolder_slim.png",
        "/PlaceHolder.png",
        "/PlaceHolder.png",
        "/PlaceHolder.png",
        "/PlaceHolder.png",
        "/PlaceHolder.png",
        "/PlaceHolder.png",
        "/PlaceHolder.png",
        "/PlaceHolder.png",
        "/PlaceHolder.png",
        "/PlaceHolder.png",
        "/PlaceHolder.png",
        "/PlaceHolder.png",
        "/PlaceHolder.png",
        "/PlaceHolder.png",
        "/PlaceHolder.png",
        "/PlaceHolder.png",
        "/PlaceHolder.png",
        "/PlaceHolder.png",
        "/PlaceHolder.png"
    ]

    const FAST_DURATION = 90;
    const SLOW_DURATION = 190;

    const [duration, setDuration] = useState(FAST_DURATION)

    let [ref, { width }] = useMeasure()

    const xTranslation = useMotionValue(0)

    const [mustFinish, setMustFinnish] = useState(false);
    const [rerender, setRerender] = useState(false)

    useEffect(() => {
        let controls;
        let finalPosition = -width / 2 - 8;

        if (mustFinish) {
            controls = animate(xTranslation, [xTranslation.get(), finalPosition], {
                ease: 'linear',
                duration: duration * (1 - xTranslation.get() / finalPosition),
                onComplete: () => {
                    setMustFinnish(false)
                    setRerender(!rerender)
                }
            })

        } else {
            controls = animate(xTranslation, [0, finalPosition], {
                ease: 'linear',
                duration: duration,
                repeat: Infinity,
                repeatType: 'loop',
                repeatDelay: 0,

            })
        }

        return controls.stop;
    }, [xTranslation, width, duration, rerender])

    return (
        <main className='py-8  '>
            <motion.div
                className='absolute left-0 flex gap-4'
                ref={ref}
                style={{ x: xTranslation }}
                onHoverStart={() => {
                    setMustFinnish(true);
                    setDuration(SLOW_DURATION)
                }}
                onHoverEnd={() => {
                    setMustFinnish(true);
                    setDuration(FAST_DURATION)
                }}
            >
                {[...content, ...content].map((item, idx) => (
                    < Card image={item} key={idx} />
                ))}
            </motion.div>
        </main>
    )
}