/* eslint-disable prettier/prettier */
import { defineStore } from 'pinia'
import type { GuestStyleObject } from '@/assets/css/styles'
const initialState: GuestStyleObject = {
  bgLeft: 'bg-[#0a171f]',
  textLeft: 'text-[#f1fff0]',
  bgRight: 'bg-[#f1fff0]',
  textRight: 'text-[#0a171f]',
}
export const useGuestStyleStore = defineStore('guestStyle', {
  state: () => {
    return {
      initialState,
    }
  },
})
