'use client'

import gallery from './gallery-cards/gallery-cards'
import React, { useEffect, useState } from 'react'
import { useMeasure } from '@uidotdev/usehooks'
import { animate, useMotionValue, motion } from 'framer-motion'



export default function Gallery() {

    const items = [...gallery, ...gallery];



    const FAST_DURATION = 90;
    const SLOW_DURATION = 200;

    const size = '60'

    const [duration, setDuration] = useState(FAST_DURATION)

    let [ref, { width }] = useMeasure()

    const xTranslation = useMotionValue(0)

    const [mustFinish, setMustFinnish] = useState(false);
    const [rerender, setRerender] = useState(false)

    useEffect(() => {
        let controls;
        let finalPosition = -width / 2 - 4;

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
        <div className={`relative block overflow-hidden w-full ${'h-[' + size + 'vh]'}`}>
            <motion.div
                className='left-0 flex gap-2 absolute'
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
                onTapStart={() => {
                    setMustFinnish(true);
                    setDuration(SLOW_DURATION)
                }}
                onTapEnd={() => {
                    setMustFinnish(true);
                    setDuration(FAST_DURATION)
                }}
            >{items}</motion.div>

        </div>

    )
}
