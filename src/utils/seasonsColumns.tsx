import {ColumnDef} from "@tanstack/react-table"
import {Season} from "@/models/all-seasons-respose";
import Link from "next/link";

export const seasonsColumns: ColumnDef<Season>[] = [//todo cannot manipulate container
    {
        accessorKey: "season",
        header: () => <div className="text-center">Season</div>,
        cell: ({row}) => {
            const season: string = row.getValue("season")
            return <Link href={`/seasons/${season}`} >
                <div className="text-center">{season}</div>
            </Link>
        }
    },
    {
        accessorKey: "url",
        header: () => <div className="text-center">Url</div>,
        cell: ({row}) => {
            const url: string = row.getValue("url")
            return <Link href={url}>
                <div className="text-left font-medium w-full">{url}</div>
            </Link>
        }
    },
]