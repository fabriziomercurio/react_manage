export type Product = {
    id: number|null;
    title: string;
    name: string;
    created_at: string;
    imageId:number|null;
};

export type ProductUpdate = { 
    title: string;
    name?:string;
    image: Blob|null;
    removeImage:boolean;
}