import { llistadeassets } from "../..";

export class AssetsList {

  assets;

  constructor() {
      this.assets = [];
      //this.obtenirDades().then ((data) =>  { this.assets=data; console.log(this.assets) } );


      this.assets= [ {
        "id_asset" : 0,
        "model" : "Monitor BENQ GW240",
        "location" : "Servidors"
       
      },
      {
        "id_asset" : 1,
        "model" : "Monitor BENQ GW240",
        "location" : "Servidors"
       
      },
      {
        "id_asset" : 2,
        "model" : "Teclat Lenovo",
        "location" : "Servidors"
       
      },
      {
        "id_asset" : 3,
        "model" : "Monitor BENQ GW240 / 1",
        "location" : "Aula 106"
       
      },{
        "id_asset" : 4,
        "model" : "Monitor BENQ GW240 / 2",
        "location" : "Aula 106"
       
      },{
        "id_asset" : 5,
        "model" : "Impressora Konica Minolta",
        "location" : "Departament Informàtica"
       
      },{
        "id_asset" : 6,
        "model" : "Router Cisco XXXX",
        "location" : "Servidors"
       
      },{
        "id_asset" : 7,
        "model" : "Projector Optmoa GT670",
        "location" : "Aula 110"
       
      },
      ]
  }

  async obtenirDades()
  {

      let data1 = await fetch('https://biblioteca-9f853-default-rtdb.europe-west1.firebasedatabase.app/assets.json')
      data1 = await data1.json();
      
      return data1;
  }

  cercaTicketAsset_id(assets_id){
    for (let i of this.assets)
    {
      if (i.id_asset == assets_id){
        return i.model;
      }
    }
    return "nufunciunu";
  }
}