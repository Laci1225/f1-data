import {GetServerSideProps, InferGetServerSidePropsType} from "next";
import {getSeasonByYear} from "@/api/f1";
import {notFound, redirect} from "next/navigation";
import {Race} from "@/models/one-season-response";
import {DataTable} from "@/utils/data-table";
import {seasonsColumns} from "@/utils/seasonsColumns";
import {seasonColumns} from "@/utils/seasonColumns";

export const getServerSideProps = (async (context) => {
    {
        console.log(context)
    }
    {
        console.log(context.params)
    }
    {
        console.log(context.params?.year)
    }
    if (context.params?.year) {
        console.log(context.params.year)
        //?page=4 query pareméter a szezonok 10 db / oldal
        try {
            const seasons = await getSeasonByYear(context.params.year);
            console.log(seasons)
            return {
                props: {
                    races: seasons.MRData.RaceTable.Races
                }
            };
        } catch (e) {
            notFound();
            //redirect("/seasons")
        }
    }
    notFound();
    //redirection
}) satisfies GetServerSideProps<{ races: Race[] }, { year: string }>;
export default function SeasonDetails({races}: InferGetServerSidePropsType<typeof getServerSideProps>) {
    return (
        <div>
            <div className="container w-4/6 py-10">
                <DataTable columns={seasonColumns} data={races}/>
            </div>
        </div>
    )
    //{races.map(race => <div key={race.round}>{race.raceName}</div>)}
}