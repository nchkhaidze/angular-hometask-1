export default interface Pokemon {
    id: string;
    name: string;
    damage: number;
    caught: boolean;
    tags?: string[];
    imageUrl?: string;
}