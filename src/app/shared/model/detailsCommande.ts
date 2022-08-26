export interface DetailsCommande{
    id:number
    nCommande:string
    date:string
    montant:number
    commandeburger:Commandeburger[]
    commandemenu:Commandemenu[]
    zone:zone
    
}

export interface Commandeburger{
        id:number
        quantite:number
        burger:produit
}
export interface Commandemenu{
    id:number
    quantite:number
    menu:produit
}
export interface produit{
    id:number
    nom:string
    prix:number
    type:string
}
export interface zone{
    id:number
    nom:string
}