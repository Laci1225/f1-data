import {ColumnDef} from "@tanstack/react-table"
import {Season} from "@/models/all-seasons-respose";
import Link from "next/link";
import {Circuit, Race} from "@/models/one-season-response";

type RaceColumn ={
    round: string
    raceName: string
    circuitName: Circuit;
}
export const seasonColumns: ColumnDef<Race>[] = [
    {
        accessorKey: "round",
        header: () => <div className="text-center">Round</div>,
        cell: ({row}) => {
            const round: string = row.getValue("round")
            return (
                //<Link href={`/seasons/${round}`}>
                <div className="text-center">{round}</div>
                //</Link>
            )
        }
    },
    {
        accessorKey: "raceName",
        header: () => <div className="text-center">Race Name</div>,
        cell: ({row}) => {
            const race: string = row.getValue("raceName")
            return (//<Link href={race}>
                <div className="text-center font-medium">{race}</div>
            //</Link>
            )
        }
    },
    {
        accessorKey: "Circuit",
        header: () => <div className="text-center">Circuit Name</div>,
        cell: ({row}) => {
            const Circuit: Circuit = row.getValue("Circuit")


            return (//<Link href={url}>
                <div className="text-center font-medium">{Circuit.circuitName}</div>
                //</Link>
            )
        }
    }
]