import Image from 'next/image';
import Link from 'next/link';

export default function Page() {
    return (
        <div className="">
            <Image src={'/blog-banner.png'} alt="Blog"
                width={0}
                height={0}
                sizes="100vw"
                style={{ width: '100%', height: 'auto', objectFit: 'contain' }}
            />
            <h1 className=''>筆記</h1>
            <div className="mt-5 min-h-80">
                {[
                    { href: '/blog/learn-nextjs-app', title: 'Next.js 學習雜記' },
                    { href: '/blog/react', title: 'React 學習雜記' }
                ].map(({ href, title }) => (
                    <Link key={href} href={href} className="hover:text-blue-600">
                        <h3 className="underline mb-2">{title}</h3>
                    </Link>
                ))}
            </div>
        </div>
    )
}