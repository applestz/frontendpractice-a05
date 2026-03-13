import Image from 'next/image'
import styles from './card.module.css'

export default function Card({venueName, imgSrc} : {venueName:string, imgSrc:string}) {
    return (
        <div className='w-[25%] h-[300px] bg-[#ebeffc] rounded-lg shadow-lg'>
            <div className='w-[100%] h-[60%] rounded-t-lg relative overflow-hidden'>
                <Image
                src={imgSrc}
                alt='place picture'
                fill={true}
                objectFit='cover'
                />
            </div>
            <div className='h-[30%] p-[10px] relative flex  justify-center'>
                <h2 className='text-[#4b5da6] text-[1.5em] pt-[5px]'>
                    {venueName}
                </h2>
            </div>
        </div>
    )
}