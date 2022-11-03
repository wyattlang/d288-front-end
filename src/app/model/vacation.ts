import { Excursion } from "./excursion";

export class Vacation {

  constructor(
      public id: number,
      public vacation_title: string,
      public description: string,
      public travel_price: number,
      public image_URL: string,
      public create_date: Date,
      public last_update: Date,
      public excursions?: Excursion[]
  ) {

  }

}
