import Image from 'next/image';

export default function Home() {
  return (
      <div className="flex justify-center my-10">
            <Image src={'/meme-cat.png'} alt='Wowowowow' sizes='100vw' width={0} height={0} style={{width:'50%', height: 'auto'}}/>
      </div>
  );
}