
export class Excursion {

  constructor(
    public id: number,
    public excursion_title: string,
    public excursion_price: number,
    public image_URL: string,
    public create_date: Date,
    public last_update: Date 
  ) {
    
  }

}
