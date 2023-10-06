export interface OneSeasonConstructors {
    MRData: MRData;
}

export interface MRData {
    xmlns:            string;
    series:           string;
    url:              string;
    limit:            string;
    offset:           string;
    total:            string;
    ConstructorTable: ConstructorTable;
}

export interface ConstructorTable {
    season:       string;
    Constructors: Constructor[];
}

export interface Constructor {
    constructorId: string;
    url:           string;
    name:          string;
    nationality:   string;
}
