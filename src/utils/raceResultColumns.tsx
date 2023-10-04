import {ColumnDef} from "@tanstack/react-table"
import {Constructor, Driver, FastestLap, Result, ResultTime} from "@/models/one-race-result";

export const raceResultColumns: ColumnDef<Result>[] = [
    {
        accessorKey: "position",
        header: () => <div className="text-center">Position</div>,
        cell: ({row}) => {
            const position: string = row.getValue("position")
            return (//<Link href={`/seasons/${season}`}>
                <div className="text-center">{position}</div>
            )//</Link>
        }
    },
    {
        accessorKey: "Driver",
        header: () => <div className="text-center">Name</div>,
        cell: ({row}) => {
            const driver: Driver = row.getValue("Driver")
            return (//<Link href={}>
                <div className="text-center font-medium">{driver.givenName} {driver.familyName} </div>
            )//</Link>
        }
    }, {
        accessorKey: "Constructor",
        header: () => <div className="text-center">Constructor</div>,
        cell: ({row}) => {
            const Constructor: Constructor = row.getValue("Constructor")
            return (//<Link href={}>
                <div className="text-center font-medium">{Constructor.name}</div>
            )//</Link>
        }
    },
    {
        accessorKey: "Driver",
        header: () => <div className="text-center">Nationality</div>,
        cell: ({row}) => {
            const driver: Driver = row.getValue("Driver")
            return (//<Link href={}>
                <div className="text-center font-medium">{driver.nationality}</div>
            )//</Link>
        }
    },
    {
        accessorKey: "Driver",
        header: () => <div className="text-center">Birthday</div>,
        cell: ({row}) => {
            const driver: Driver = row.getValue("Driver")
            return (//<Link href={}>
                <div className="text-center font-medium">{driver.dateOfBirth.toLocaleString()}</div>
            )//</Link>
        }
    },
    {
        accessorKey: "FastestLap",
        header: () => <div className="text-center">Fastest lap</div>,
        cell: ({row}) => {
            const FastestLap: FastestLap | undefined = row.getValue("FastestLap")
            return (//<Link href={}>
                <div className="text-center font-medium">{FastestLap?.Time.time}</div>
            )//</Link>
        }
    },
    {
        accessorKey: "Time",
        header: () => <div className="text-center">Result time</div>,
        cell: ({row}) => {
            const time: ResultTime | undefined = row.getValue("Time")
            return (//<Link href={}>
                <div className="text-center font-medium">{time?.time ? time.time : "DNF"}</div>
            )//</Link>
        }
    },

]