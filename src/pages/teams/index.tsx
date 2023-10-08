import {GetServerSideProps, InferGetServerSidePropsType} from "next";
import {AllSeasonsResponse} from "@/models/all-seasons-respose";
import {getPagedSeasons} from "@/api/f1";
import Link from "next/link";
import {redirect} from "next/navigation";
import { useRouter} from "next/router";

export const getServerSideProps = (async (context) => {
    if (context.query.page && context.query.page !== "-1" && context.query.page <= "8") {
        const parsedSeasons = await getPagedSeasons(Number(context.query.page) * 10, 10);
        return {
            props: {
                parsedSeasons
            }
        };
    }
    redirect("/teams");
}) satisfies GetServerSideProps<{ parsedSeasons: AllSeasonsResponse }>;

export default function Seasons({parsedSeasons}: InferGetServerSidePropsType<typeof getServerSideProps>) {
    const router = useRouter();
    return (
        <div>
            <div>
                <div className="container w-4/6 py-10">
                    {parsedSeasons.MRData.SeasonTable.Seasons?.map(value => <div key={value.season}>
                        <Link href={`teams/${value.season}`}> {value.season}</Link>
                    </div>)}
                    <div className={"flex justify-between"}>
                        <button onClick={() => {
                            router.push({
                                pathname: '/teams',
                                query: {page: Number(router.query.page) - 1}

                            })
                        }}
                                disabled={Number(router.query.page) === 0}
                        >
                            Previous
                        </button>
                        <button onClick={() => {
                            router.push({
                                pathname: '/teams',
                                query: {page: Number(router.query.page) + 1}
                            })
                        }}
                                disabled={Number(router.query.page) === Math.floor(
                                    Number(parsedSeasons.MRData.total)/10)}
                        >
                            Next
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}
