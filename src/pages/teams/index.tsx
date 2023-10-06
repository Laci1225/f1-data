import {GetServerSideProps, InferGetServerSidePropsType} from "next";
import {Season} from "@/models/all-seasons-respose";
import {getAllSeasons} from "@/api/f1";
import {useEffect, useState} from "react";
import Link from "next/link";
import {useRouter} from "next/router";

export const getServerSideProps = (async () => {
    const allSeasons = await getAllSeasons();
    return {
        props: {
            seasons: allSeasons.MRData.SeasonTable.Seasons,
        }
    };
}) satisfies GetServerSideProps<{ seasons: Season[] }>;

export default function Seasons({seasons}: InferGetServerSidePropsType<typeof getServerSideProps>) {
    const [dataTableData, setDataTableData] = useState<Season[]>()

    const router = useRouter()
    const {page} = router.query

    useEffect(() => {
        let actualTenSeason = seasons.slice(parseInt(page, 10) * 10, parseInt(page, 10) * 10 + 10)
        setDataTableData(actualTenSeason)
    }, [page, seasons]);

    return (
        <div>
            <div>
                <div className="container w-4/6 py-10">
                    {dataTableData?.map(value => <div key={value.season}>
                        <Link href={`teams/${value.season}`}> {value.season}</Link>
                    </div>)}
                    <div className={"flex justify-between"}>
                        <button onClick={() => {
                            const pageProp = parseInt(page, 10) - 1;
                            router.push(`/teams?page=${pageProp ? pageProp : 0}`).then()
                        }}
                                disabled={parseInt(page, 10) === 0}
                        >
                            Previous
                        </button>
                        <button onClick={() => {
                            const pageProp = parseInt(page, 10) + 1;
                            router.push(`/teams?page=${pageProp ? pageProp : 0}`).then()
                        }}
                                disabled={parseInt(page, 10) === (seasons.length - seasons.length % 10) / 10}
                        >
                            Next
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}
