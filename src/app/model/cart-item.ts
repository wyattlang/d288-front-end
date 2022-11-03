
export class CartItem {

  constructor(
    public _links: {
      vacation: {
        href: string
      },
      cart: {
        href: string
      },
      excursions: {
        href: string
      }
    }
  ) {

  }

}
