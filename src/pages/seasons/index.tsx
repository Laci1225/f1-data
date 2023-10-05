import {GetServerSideProps, InferGetServerSidePropsType} from "next";
import {Season} from "@/models/all-seasons-respose";
import {getAllSeasons} from "@/api/f1";
import {DataTable} from "@/utils/data-table";
import {seasonsColumns} from "@/utils/seasonsColumns";
import {useEffect, useState} from "react";

export const getServerSideProps = (async () => {
    const allSeasons = await getAllSeasons();
    return {
        props: {
            seasons: allSeasons.MRData.SeasonTable.Seasons,
        }
    };
}) satisfies GetServerSideProps<{ seasons: Season[] }>;

export default function Seasons({seasons}: InferGetServerSidePropsType<typeof getServerSideProps>) {
    const [showedSeasons, setShowedSeasons] = useState(0)
    const [dataTableData, setDataTableData] = useState<JSX.Element>()
    //const [actualTenSeason, setActualTenSeason] = useState<Season[]>(
    //    seasons.slice(0, 10))
    useEffect(() => {
        let actualTenSeason = seasons.slice(showedSeasons, showedSeasons + 10)
        setDataTableData(<DataTable columns={seasonsColumns} data={actualTenSeason}/>)
    }, [seasons, showedSeasons]);
    return (
        <div>
            <div>
                {/*seasons.map(season =>
                    <Link href={`/seasons/${season.season}`} key={season.season}>
                        <div key={season.season}>{season.season}</div>
                    </Link>
                )*/}
                <div className="container w-4/6 py-10">
                    {dataTableData}
                    <div className={"flex justify-between"}>
                        <button onClick={() => {
                            setShowedSeasons(showedSeasons - 10);
                        }}
                                disabled={showedSeasons === 0}
                        >
                            Previous
                        </button>
                        <button onClick={() => {
                            setShowedSeasons(showedSeasons + 10);
                        }}
                                disabled={showedSeasons === seasons.length - seasons.length % 10}>
                            Next
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}
