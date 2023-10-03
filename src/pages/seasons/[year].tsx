import {GetServerSideProps, InferGetServerSidePropsType} from "next";
import httpRequest from "@/api/common";
import {AllSeasonsResponse, Season, SeasonTable} from "@/models/all-seasons-respose";
import getAllSeasons from "@/api/f1";
import {notFound, redirect} from "next/navigation";

export const getServerSideProps = (async (context) => {
    if (context.params?.year) {
        console.log(context.params.year)
        //?page=4 query pareméter a szezonok 10 db / oldal
        try {
            const seasons = await getSeasonByYear(context.params.year);
            return {
                props: {
                    seasons: seasons.MRData.SeasonTable.Seasons
                }
            };
        } catch (e) {
            notFound();
            //redirect("/seasons")
        }
    }
    notFound();
    //redirection
}) satisfies GetServerSideProps<{ seasons: Season[] }, { year: string }>;
export default function SeasonsDetails({seasons}: InferGetServerSidePropsType<typeof getServerSideProps>) {
    return (
        <div>
            <div>
                Alma
            </div>
        </div>
    )
}