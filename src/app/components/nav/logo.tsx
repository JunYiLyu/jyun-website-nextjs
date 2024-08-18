import Image from 'next/image';

export default function Logo() {
    return (
        <div className='flex items-center'>
            <Image src="/meme-hand-drawn.png" alt="Logo"  width={50} height={50}/>
        </div>
    );
}