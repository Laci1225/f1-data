import {GetServerSideProps, InferGetServerSidePropsType} from "next";
import {Result} from "@/models/one-race-result"
import {DataTable} from "@/utils/data-table";
import {getRaceResult} from "@/api/f1";
import {raceResultColumns} from "@/utils/raceResultColumns";

export const getServerSideProps = (async () => {
    const raceResult = await getRaceResult();
    return {
        props: {
            result: raceResult.MRData.RaceTable.Races[0].Results
        }
    };
}) satisfies GetServerSideProps<{ result: Result[] }>;

export default function Results({result}: InferGetServerSidePropsType<typeof getServerSideProps>) {
    return (
        <div>
            <div>
                <div className="container w-4/6 py-10">
                    <DataTable columns={raceResultColumns} data={result} />
                </div>
            </div>
        </div>
    )
}
