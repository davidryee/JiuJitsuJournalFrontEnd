export interface Opponent {
    Id: number;
    Name: string;
    BeltRank: BeltRankEnum;
    HeightInInches: number;
    WeightInLbs: number;    
}

export enum BeltRankEnum {
    White = 0,
    Blue = 1,
    Purple = 2,
    Brown = 3,
    Black = 4
}