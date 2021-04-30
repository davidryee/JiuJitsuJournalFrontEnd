export interface Opponent {
    id: number;
    name: string;
    beltRank: BeltRankEnum;
    heightInInches: number;
    weightInLbs: number;    
}

export enum BeltRankEnum {
    White = 1,
    Blue = 2,
    Purple = 3,
    Brown = 4,
    Black = 5
}

const WHITE = "WHITE"
const BLUE = "BLUE"
const PURPLE = "PURPLE"
const BROWN = "BROWN"
const BLACK = "BLACK"

export const BeltRankToLabelMapping : Record<BeltRankEnum, string>  = {
    [BeltRankEnum.White]: WHITE,
    [BeltRankEnum.Blue]: BLUE,
    [BeltRankEnum.Purple]: PURPLE,
    [BeltRankEnum.Brown]: BROWN,
    [BeltRankEnum.Black]: BLACK,
}

export const LabelToBeltRankMapping = {
    WHITE: BeltRankEnum.White,
    BLUE: BeltRankEnum.Blue,
    PURPLE: BeltRankEnum.Purple,
    BROWN: BeltRankEnum.Brown,
    BLACK: BeltRankEnum.Black,
}