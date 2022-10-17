export type Player = 'noughts' | 'crosses' | 'DRAW' | null;


export interface ISquare {
    value : Player,
    winner : Player,
    onClick : () => void
}