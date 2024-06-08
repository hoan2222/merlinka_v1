'use client'

import React, { useEffect, useState } from 'react'
import { useMeasure } from '@uidotdev/usehooks'
import { animate, useMotionValue, motion } from 'framer-motion'



export default function Gallery() {

    const data = [
        "/merlinka_v1/gallery/IMG_0011.jpg",
        "/merlinka_v1/gallery/IMG_0079.jpg",
        "/merlinka_v1/gallery/IMG_0174-2-2.jpg",
        "/merlinka_v1/gallery/IMG_0288.jpg",
        "/merlinka_v1/gallery/IMG_0321.jpg",
        "/merlinka_v1/gallery/IMG_0564.jpg",
        "/merlinka_v1/gallery/IMG_2367.jpg",
        "/merlinka_v1/gallery/IMG_3605.jpg",
        "/merlinka_v1/gallery/IMG_6620.jpg",
        "/merlinka_v1/gallery/IMG_6949.jpg",
        "/merlinka_v1/gallery/IMG_7566.jpg",
        "/merlinka_v1/gallery/IMG_8480.jpg",
        "/merlinka_v1/gallery/IMG_8899.jpg",
        "/merlinka_v1/gallery/IMG_9940.jpg",
    ]

    const datas = [...data, ...data];

    const FAST_DURATION = 90;
    const SLOW_DURATION = 200;



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
        <div className='relative block overflow-hidden w-screen h-[600px] sm:h-[500px] pt-20  sm:py-0'>
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
            >
                {datas.map((item, idx) => (
                    <div className='h-[300px] w-[300px] sm:h-[500px] sm:w-[500px] flex justify-center' key={idx}>
                        <img src={item} className='object-scale-down' key={idx} />
                    </div>
                ))}
            </motion.div>

        </div>

    )
}
