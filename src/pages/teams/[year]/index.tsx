import {GetServerSideProps, InferGetServerSidePropsType} from "next";
import {getConstructorsByYear} from "@/api/f1";
import {notFound} from "next/navigation";
import {Constructor} from "@/models/one-season-constructors";

export const getServerSideProps = (async (context) => {
    if (context.params?.year) {
        try {
            const constructors = await getConstructorsByYear(context.params.year);
            return {
                props: {
                    constructors: constructors.MRData.ConstructorTable.Constructors
                }
            };
        } catch (e) {
            notFound();
            //redirect("/seasons")
        }
    }
    notFound();
    //redirection
}) satisfies GetServerSideProps<{ constructors: Constructor[] }, { year: string }>;
export default function SeasonDetails({constructors}: InferGetServerSidePropsType<typeof getServerSideProps>) {
    return (
        <div>
            <div className="container w-4/6 py-10">
                {constructors.map(constructor =>
                    <div key={constructor.constructorId}>{constructor.name}</div>
                )}
            </div>
        </div>
    )
    //{races.map(race => <div key={race.round}>{race.raceName}</div>)}
}