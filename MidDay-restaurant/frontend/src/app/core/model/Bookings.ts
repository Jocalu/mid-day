interface Selections{
  firstCourse: string,
  secondCourse: string,
  dessert: string
}

interface People{
  name: string,
  allergies:string[],
  selections: Selections
}

export interface Bookings {
  date: string
  hour: string,
  bookingName: string,
  phone: number,
  pax: number,
  people: People[]
}
