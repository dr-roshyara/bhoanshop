/* eslint-disable prettier/prettier */
import { defineStore } from 'pinia'
import type { GuestStyleObject } from '@/assets/css/styles'
const initialState: GuestStyleObject = {
  bgLeft: 'bg-[#0f172d]',
  //#1d242b #01010e #040505 #04051e #07031d #0f172d
  // #272343;
  textLeft: 'text-[#e9fce9]',
  //#fafafa; #f3fbfb  #e8fbe8 #e6fdf3 #e3fff7 #e6fdf5 #eefbe8 #eafee4 #e9fce9
  // #e3f6f5
  bgRight: 'bg-[#e9fce9]', //#fdfffcb
  textRight: 'text-[#07031d]',
}
export const useGuestStyleStore = defineStore('guestStyle', {
  state: () => {
    return {
      initialState,
    }
  },
})
