import { bulletin } from "./bulletin.model";
import { entite } from "./entite.model";
import { participant } from "./participant.model";







export class vote{
    public idvote?:number;
    public date?:Date;
    public identite?:entite;
    public idbulletin?:bulletin;
    public id_participant?:participant;
    
    // dans vote il doit y avoir bulletin, participants, region

    public constructor(vote:String){
        
    }
}