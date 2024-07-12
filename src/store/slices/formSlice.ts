import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface Amenity {
  amenity_id: number;
}

interface Property {
  title: string;
  subtitle: string;
  description: string;
  capacity: number;
  is_available: boolean;
  is_cancellable: boolean;
  cancellation_days: number;
}

interface Price {
  price: number;
  daily_discount: number;
  weekly_discount: number;
  cleaning_fee: number;
  service_fee: number;
  tax: number;
}

interface Address {
  country: string;
  state: string;
  city: string;
  locality: string;
  nearest_landmark: string;
  pincode: string;
  latitude: number;
  longitude: number;
}

interface FormState {
  property: Property;
  amenities: Amenity[];
  price: Price;
  address: Address;
}

const initialState: FormState = {
  property: {
    title: '',
    subtitle: '',
    description: '',
    capacity: 0,
    is_available: true,
    is_cancellable: true,
    cancellation_days: 0,
  },
  amenities: [],
  price: {
    price: 0,
    daily_discount: 0,
    weekly_discount: 0,
    cleaning_fee: 0,
    service_fee: 0,
    tax: 0,
  },
  address: {
    country: '',
    state: '',
    city: '',
    locality: '',
    nearest_landmark: '',
    pincode: '',
    latitude: 0,
    longitude: 0,
  },
};

const formSlice = createSlice({
  name: 'form',
  initialState,
  reducers: {
    setProperty: (state, action: PayloadAction<Property>) => {
      state.property = action.payload;
    },
    setAmenities: (state, action: PayloadAction<Amenity[]>) => {
      state.amenities = action.payload;
    },
    setPrice: (state, action: PayloadAction<Price>) => {
      state.price = action.payload;
    },
    setAddress: (state, action: PayloadAction<Address>) => {
      state.address = action.payload;
    },
  },
});

export const { setProperty, setAmenities, setPrice, setAddress } = formSlice.actions;
export default formSlice.reducer;
