interface User{
  allergies: string[],
  foodtastes: string[],
  name: string,
  email : string
  phone: number
  _id: string
}

interface People{
  selections: string[],
  user: User
}

export interface Bookings {
  bookingAdmin: User,
  date: string
  hour: string,
  pax: number,
  people: People[]
  _id:string
}
