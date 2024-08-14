import Link from 'next/link';
import Logo from './logo';

const Navbar = () => {
    return (
        <>
            <div className="w-full h-16 bg-white sticky top-0 z-50 bg-opacity-95 border-b-4">
                <div className="container mx-auto px-4 h-full">
                    <div className="flex justify-between items-center h-full">
                        <div className='pl-5'>
                            <Logo />
                        </div>
                        <ul className="hidden md:flex gap-x-8">
                            <li>
                                <Link href="/about">
                                    <p>About</p>
                                </Link>
                            </li>
                            <li>
                                <Link href="/services">
                                    <p>Blog</p>
                                </Link>
                            </li>
                            <li>
                                <Link href="/contacts">
                                    <p>Demo Projects</p>
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Navbar;