export interface Panier{

    commandeburger?:commandeburger[],
    commandemenu?:commandemenu[],
    commandefrite?:commandefrite[],
    commandetailleboisson?:commandetailleboisson[],
       

}
export interface commandeburger{
    quantite?:number
    burger?:Produit
}

export interface commandemenu{
    quantite?:number
    burger?:Produit
}


export interface commandefrite{
    quantite?:number
    portionFrite?:Produit
}


export interface commandetailleboisson{
    quantitetailleboisson?:number
    tailleBoisson?:taille
}

export interface taille{
    id?:number
}
export interface Produit {
    id:string
    nom:string
    image?:Blob
    prix?:number
    description:string
    type?:string
    quantite:number
    '@type':string
}