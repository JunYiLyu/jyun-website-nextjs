import Image from "next/image";
import AlternateTimeline from "../components/timeline/timeline";

export default function About() {
    return (
        <div className="flex flex-col  justify-center">
            <div className="w-full flex flex-row">
                <div className="flex mt-20 ml-20 flex-col basis-3/5">
                    <h1 className="text-5xl">嗨 我是俊毅</h1>
                    <p className="my-5">
                        I love pizza.
                    </p>
                    <p className="my-5">
                        I love pizza.
                    </p>
                    <p className="my-5">
                        I love pizza.
                    </p>
                </div>
                <div className="basis-2/5">
                    <Image src={'/me.png'}
                        alt="I'm JyunYi"
                        width={0}
                        height={0}
                        sizes="100vw"
                        style={{ width: '100%', height: 'auto' }}
                    />
                </div>
            </div>
            <AlternateTimeline />
        </div>
    );
}
