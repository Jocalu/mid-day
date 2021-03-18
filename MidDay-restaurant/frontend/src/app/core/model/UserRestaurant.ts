import { Bookings } from './Bookings'

export interface UserRestaurant {
  _id: string,
  userName: string,
  email: string,
  password: string,
  name: string,
  category: string,
  capacity: number,
  phone: number,
  street: string,
  number: number,
  city: string,
  zipcode: string,
  image: string,
  menuprice: number,
  bookings: Bookings[]
}
