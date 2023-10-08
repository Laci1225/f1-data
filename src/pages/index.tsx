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
            <div>
                <Link href={{ pathname: '/teams', query: { page: 0 } }}>Teams</Link>
            </div>
            <div>
                <Link href={"/drivers"}>Drivers</Link>
            </div>
        </div>
    )
}
