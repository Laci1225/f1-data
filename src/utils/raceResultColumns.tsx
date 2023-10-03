import {ColumnDef} from "@tanstack/react-table"
import {Driver, FastestLap, Result} from "@/models/one-race-result";

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
                <div className="text-center font-medium">{driver.familyName} {driver.givenName}</div>
            )//</Link>
        }
    },
    {
        accessorKey: "Driver",
        header: () => <div className="text-center">Driver</div>,
        cell: ({row}) => {
            const driver: Driver = row.getValue("Driver")
            return (//<Link href={}>
                <div className="text-center font-medium">{driver.nationality}</div>
            )//</Link>
        }
    },
    {
        accessorKey: "Driver",
        header: () => <div className="text-center">Driver</div>,
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
            const fastestLap: FastestLap | undefined = row.getValue("FastestLap")
            return (//<Link href={}>
                <div className="text-center font-medium">{fastestLap?.Time.time}</div>
            )//</Link>
        }
    },
]