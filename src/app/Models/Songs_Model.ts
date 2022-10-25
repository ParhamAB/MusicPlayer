import { config } from "./config"

export class Songs_Model{
    constructor(public id: number, public title: string, public titleEn: string, public cover: string, public duration:number,
    public durationStr:string , public publishDateString:string , public hlsUrl:string , public shareLink: string,
    public artistId:number , public artistName:string , public artistNameEn:string , public like:string,
    public config:config){}
}