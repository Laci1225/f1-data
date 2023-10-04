import {GetServerSideProps, InferGetServerSidePropsType} from "next";
import {OneRaceResult, RaceTable} from "@/models/one-race-result"
import {DataTable} from "@/utils/data-table";
import {getRaceResult} from "@/api/f1";
import {raceResultColumns} from "@/utils/raceResultColumns";
import {notFound} from "next/navigation";

export const getServerSideProps = (async (context) => {
    if (context.params?.year) {
        const raceResult = await getRaceResult(context.params.year);
        return {
            props: {
                raceResult//.MRData.RaceTable//.Races[0].Results
            }
        };
    }
    notFound();
}) satisfies GetServerSideProps<{ raceResult: OneRaceResult }, { year: string }>;

export default function Results({raceResult}: InferGetServerSidePropsType<typeof getServerSideProps>) {
    return (
        <div>
            <div>
                <div className={"flex w-full justify-center"}>
                    Round: {raceResult.MRData.RaceTable.Races[0].round}
                </div>
                <div className={"flex w-full justify-center"}>
                    {raceResult.MRData.RaceTable.Races[0].raceName}
                </div>
                <div className="container w-4/6 py-10">
                    <DataTable columns={raceResultColumns} data={raceResult.MRData.RaceTable.Races[0].Results}/>
                </div>
            </div>
        </div>
    )
}
