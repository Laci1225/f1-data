import Link from "next/link";


export default function Home() {
    return (
        <div>
            <div>
                Home
            </div>
            <div>
                <Link href={"/seasons"}>Seasons</Link>
            </div>
        </div>
    )
}
