import { region } from "./region.model";





export class participant{
    public id_participant?:number;
    public cni?:String;
    public nom?:String;
    public age?:number;
    public region?:region;
    public sexe?:String;
    public tel?:String;
    public etat?:boolean;
    public statut?:String;
    public password?:String;
    public email?:String;
    public login?:String;

    public constructor(participant:String){
        
    }
}