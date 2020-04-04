export interface Content {
    readonly id?: number;
    alias: string;
    name: string;
    genre?: string;
    body: string;
    imgUrl?: string;
    tags?: string[];
}
