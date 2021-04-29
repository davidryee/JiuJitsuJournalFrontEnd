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

export const BeltRankToLabelMapping : Record<BeltRankEnum, string>  = {
    [BeltRankEnum.White]: "White",
    [BeltRankEnum.Blue]: "Blue",
    [BeltRankEnum.Purple]: "Purple",
    [BeltRankEnum.Brown]: "Brown",
    [BeltRankEnum.Black]: "Black",
}