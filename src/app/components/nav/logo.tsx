import Image from 'next/image';

export default function Logo() {
    return (
        <Image src="/j-icon.png" alt="Logo" width={60} height={60}/>
    );
}