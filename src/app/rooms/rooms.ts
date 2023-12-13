export interface IRoom {
    totalRooms: number,
    availableRooms: number,
    bookedRooms: number
}

export interface IRoomList {
    number: number;
    type: string;
    price: number;
    amenities: string;
    photos: string;
    checkinTime: Date;
    checkoutTime: Date;
    rating: number;
}