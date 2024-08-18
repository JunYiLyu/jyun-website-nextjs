import Image from "next/image";
import AlternateTimeline from "@/components/timeline/timeline";

export default function About() {
    return (
        <div className="flex flex-col  justify-center">
            <div className="w-full flex flex-col-reverse md:flex-row">
                <div className="flex mx-10 mt-10 flex-col basis-1/2 justify-center md:mt-0">
                    <h1>#  嗨!!我是俊毅</h1>
                    <p className="my-5 leading-relaxed">
                        來自新竹的軟體工程師，先前主要是開發後端為主，目前正在學習前端技術。嘗試使用Next.js 14 {'('}App Router{')'}, Material Ui 與 TailwindCSS 來建立這個網站，希望能夠透過這個網站來記錄自己的學習歷程。
                    </p>
                </div>
                <div className="basis-1/2">
                    <Image src={'/me.png'}
                        alt="I'm JyunYi"
                        width={0}
                        height={0}
                        sizes="100vw"
                        style={{ width: '100%', height: 'auto', objectFit: 'contain' }}
                    />
                </div>
            </div>
            <div>
                <h1 className="ml-10 mt-10"># 經歷</h1>
                <AlternateTimeline />
            </div>
        </div>
    );
}
