//lekerdezesek implementacioja
import {AllSeasonsResponse} from "@/models/all-seasons-respose";
import httpRequest from "@/api/common";

export default function getAllSeasons(): Promise<AllSeasonsResponse> {
    return httpRequest.get<AllSeasonsResponse>("seasons.json", {params: {limit: 100}})
        .then(res => res.data)
}