import {GetServerSideProps, InferGetServerSidePropsType} from "next";
import {httpRequest} from "@/api/common";
import {AllSeasonsResponse, Season, SeasonTable} from "@/models/all-seasons-respose";
import {getAllSeasons} from "@/api/f1";
import Link from "next/link";
import {DataTable} from "@/utils/data-table";
import {seasonsColumns} from "@/utils/seasonsColumns";

export const getServerSideProps = (async () => {
    const seasons = await getAllSeasons();
    return {
        props: {
            seasons: seasons.MRData.SeasonTable.Seasons,
        }
    };
}) satisfies GetServerSideProps<{ seasons: Season[] }>;

export default function Seasons({seasons}: InferGetServerSidePropsType<typeof getServerSideProps>) {
    return (
        <div>
            <div>
                {/*seasons.map(season =>
                    <Link href={`/seasons/${season.season}`} key={season.season}>
                        <div key={season.season}>{season.season}</div>
                    </Link>
                )*/}
                <div className="container w-4/6 py-10">
                    <DataTable columns={seasonsColumns} data={seasons} />
                </div>
            </div>
        </div>
    )
}
