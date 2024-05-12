'use client'

import Image from "next/image"

export default function GalleryCard({ image, size }) {

    return (
        <div className={`relative  overflow-hidden ${'sm:h-[' + size + 'vh]'} sm:w-[500px] w-[300px] h-[50vh]`}>
            <Image src={image} alt={image} fill style={{ objectFit: 'cover' }} />
        </div>
    )
}