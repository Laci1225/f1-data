export interface AllSeasonsResponse   {
    MRData: MRData;
}

export interface MRData {
    xmlns:       string;
    series:      string;
    url:         string;
    limit:       string;
    offset:      string;
    total:       string;
    SeasonTable: SeasonTable;
}

export interface SeasonTable {
    Seasons: Season[];
}

export interface Season {
    season: string;
    url:    string;
}
