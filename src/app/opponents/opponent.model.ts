export interface Opponent {
    id: number;
    name: string;
    beltRank: BeltRankEnum;
    heightInInches: number;
    weightInLbs: number;    
}

export enum BeltRankEnum {
    White = 0,
    Blue = 1,
    Purple = 2,
    Brown = 3,
    Black = 4
}