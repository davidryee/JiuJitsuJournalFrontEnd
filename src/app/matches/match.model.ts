import { Opponent } from "../opponents/opponent.model";

export interface Match {
    id: number;
    matchDate: Date;
    opponent: Opponent;
    description: string;
}