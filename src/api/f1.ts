//lekerdezesek implementacioja
import {AllSeasonsResponse} from "@/models/all-seasons-respose";
import {httpRequest} from "@/api/common";
import {OneSeasonResponse} from "@/models/one-season-response";
import {OneRaceResult} from "@/models/one-race-result";

export const getAllSeasons = (): Promise<AllSeasonsResponse> => {
    return httpRequest.get<AllSeasonsResponse>("seasons.json", {params: {limit: 100}})
        .then(res => res.data)
}
export const getSeasonByYear = (year: string): Promise<OneSeasonResponse> => {
    return httpRequest.get<OneSeasonResponse>(`${year}.json`)
        .then(res => res.data)
}
export const getRaceResult = (year: string,race: string): Promise<OneRaceResult> => {
    return httpRequest.get<OneRaceResult>(`${year}/${race}/results.json`)
        .then(res => res.data)
}
