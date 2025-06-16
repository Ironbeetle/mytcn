import { Button } from '@/components/ui/button';
import Image from 'next/image';
import Link from 'next/link';

export default function Dashboard() {
    return (
        <>
            <section>
                <Image
                    src="/tcnlogolg.png"
                    alt="Hero Image"
                    width={500}
                    height={500}
                    className="w-full h-auto"
                />
                <div>
                    <div className="text-4xl font-bold text-center mt-2">
                        Tansi
                    </div>
                    <div className="text-center mt-4">
                        TCN Communications 
                    </div>
                </div>
            </section>
            <section className="w-full h-96 mt-4 mb-4 flex flex-col justify-evenly items-center">
                <Image
                    src="/tcnlogolg.png"
                    alt="Hero Image"
                    width={100}
                    height={100}
                    className="w-1/2 h-auto"
                />
                <div className="text-2xl font-bold text-center">
                    TCN Member Profile
                </div>
                <Button variant={'secondary'} asChild>
                    <Link href="/NewsnEvents">Wallet</Link>
                </Button>
            </section>
            <section className="w-full h-96 mt-4 mb-4 flex flex-col justify-evenly items-center">
                <Image
                    src="/tcnlogolg.png"
                    alt="Hero Image"
                    width={100}
                    height={100}
                    className="w-1/2 h-auto"
                />
               
                <Button variant={'secondary'} asChild>
                    <Link href="/BulletinBoard">Buletin Board</Link>
                </Button>
            </section>
            <section className="w-full h-96 mt-4 mb-4 flex flex-col justify-evenly items-center">
                <Image
                    src="/tcnlogolg.png"
                    alt="Hero Image"
                    width={100}
                    height={100}
                    className="w-1/2 h-auto"
                />
                <div className="text-2xl font-bold text-center">
                    TCN Chief & Council
                </div>
                <Button variant={'secondary'} asChild>
                    <Link href="/ChiefnCouncil">Chief & Council</Link>
                </Button>
            </section>
            <section className="w-full h-96 mt-4 mb-4 flex flex-col justify-evenly items-center">
                <Image
                    src="/tcnlogolg.png"
                    alt="Hero Image"
                    width={100}
                    height={100}
                    className="w-1/2 h-auto"
                />
                <div className="text-2xl font-bold text-center">
                    TCN Programs & Contact Directory
                </div>
                <Button variant={'secondary'} asChild>
                    <Link href="/ProgramsDirectory">View Directory</Link>
                </Button>
            </section>
            <section className="w-full h-96 mt-4 mb-4 flex flex-col justify-evenly items-center">
                <Image
                    src="/tcnlogolg.png"
                    alt="Hero Image"
                    width={100}
                    height={100}
                    className="w-1/2 h-auto"    
                />
                <div className="text-2xl font-bold text-center">
                    TCN Health & Wellness
                </div>
                <Button variant={'secondary'} asChild>
                    <Link href="/TCNHealth">TCN Health</Link>
                </Button>
            </section>
            <section className="w-full h-96 mt-4 mb-4 flex flex-col justify-evenly items-center">
                <Image
                    src="/tcnlogolg.png"
                    alt="Hero Image"
                    width={100}
                    height={100}
                    className="w-1/2 h-auto"
                />
                <div className="text-2xl font-bold text-center">
                    Traditional Knowledge
                </div>
                <Button variant={'secondary'} asChild>
                    <Link href="/NewsnEvents">Learn More</Link>
                </Button>
            </section>
        </>
    );
}