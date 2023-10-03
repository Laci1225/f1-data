import {GetServerSideProps, InferGetServerSidePropsType} from "next";
import httpRequest from "@/api/common";
import {AllSeasonsResponse, Season, SeasonTable} from "@/models/all-seasons-respose";
import getAllSeasons from "@/api/f1";

export const getServerSideProps = (async () => {
    const seasons = await getAllSeasons();
    return {
        props: {
            seasons: seasons.MRData.SeasonTable.Seasons
        }
    };
}) satisfies GetServerSideProps<{ seasons: Season[] }>;
export default function Seasons({seasons}: InferGetServerSidePropsType<typeof getServerSideProps>) {
    return (
        <div>
            <div>
                {seasons.map(seasons => <div key={seasons.season}>{} {seasons.season}</div>)}
            </div>
        </div>
    )
}