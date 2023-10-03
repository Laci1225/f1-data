import {ColumnDef} from "@tanstack/react-table"
import {Circuit, Race} from "@/models/one-season-response";
import {HoverCard, HoverCardContent, HoverCardTrigger,} from "@/components/ui/hover-card"
import {wikipediaRequest} from "@/api/common";
import {ReactNode, useState} from "react";
import getSumOfText from "@/utils/getSumOfText";
import Link from "next/link";
import {useRouter} from "next/router";

export const seasonColumns: ColumnDef<Race>[] = [
    {
        accessorKey: "round",
        header: () => <div className="text-center">Round</div>,
        cell: ({row}) => {
            // eslint-disable-next-line react-hooks/rules-of-hooks
            const router = useRouter();
            const year = router.asPath;
            const round: string = row.getValue("round")
            return (<Link href={`${year}/results`}>
                    <div className="text-center">{round}</div>
                </Link>
            )
        }
    },
    {
        accessorKey: "raceName",
        header: () => <div className="text-center">Race Name</div>,
        cell: ({row}) => {
            // eslint-disable-next-line react-hooks/rules-of-hooks
            const router = useRouter();
            const year = router.asPath;
            const race: string = row.getValue("raceName")
            return (<Link href={`${year}/results`}>
                    <div className="text-center font-medium">{race}</div>
                </Link>
            )
        }
    },
    {
        accessorKey: "Circuit",
        header: () => <div className="text-center">Circuit Name</div>,
        cell: ({row}): ReactNode => {
            const Circuit: Circuit = row.getValue("Circuit")
            // TODO
            // eslint-disable-next-line react-hooks/rules-of-hooks
            const [cont, setCont] = useState("")
            wikipediaRequest
                .get("", {params: {titles: `${Circuit.circuitName.split(" ").join("_")}`}})
                .then((response) => {
                    const pageId = Object.keys(response.data.query.pages)[0];
                    setCont(response.data.query.pages[pageId].extract);
                })
            return (//<Link href={url}>
                < HoverCard>
                    < HoverCardTrigger>
                        <div className="text-center font-medium">{Circuit.circuitName}</div>
                    </HoverCardTrigger>
                    <HoverCardContent className={"bg-black text-white text-justify"}>
                        {
                            getSumOfText(cont) ? getSumOfText(cont) : "No content"
                        }
                    </HoverCardContent>
                </HoverCard>
                //</Link>
            )
        }
    },
]