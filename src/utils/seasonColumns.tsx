import {ColumnDef} from "@tanstack/react-table"
import {Circuit, Race} from "@/models/one-season-response";
import {HoverCard, HoverCardContent, HoverCardTrigger,} from "@/components/ui/hover-card"
import {wikipediaRequest} from "@/api/common";

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
            let content = ""
            wikipediaRequest
                .get("", {params: {titles: `${Circuit.circuitName.split(" ").join("_")}`}})
                .then((response) => {
                    const pageId = Object.keys(response.data.query.pages)[0];
                    content = response.data.query.pages[pageId].title;
                })
            return (//<Link href={url}>
                < HoverCard>
                    < HoverCardTrigger>
                        <div className="text-center font-medium">{Circuit.circuitName}</div>
                    </HoverCardTrigger>
                    <HoverCardContent className={"bg-black text-white"}>
                        {content //TODO not Working
                        }
                        Some content and some more and more content to fill with something
                    </HoverCardContent>
                </HoverCard>
                //</Link>
            )
        }
    },
    {
        accessorKey: "wikipedia",

    }
]