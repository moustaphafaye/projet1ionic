export interface DetailsCommande{
    id:number
    nCommande:string
    date:string
    montant:number
    client:Client
    commandeburger:Commandeburger[]
    commandemenu:Commandemenu[]
    zone:zone
    
}

export interface Commandeburger{
        id:number
        quantite:number
        burger:produit
}
export interface Client{
    id:number
    adresse:string
    telephone:string
    nom:string
    prenom:string
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
    prix:number
}