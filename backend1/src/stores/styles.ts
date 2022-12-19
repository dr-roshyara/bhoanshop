/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { defineStore } from 'pinia'
import * as styles from '@/assets/css/styles'
import { localStorageDarkModeKey, localStorageStyleKey } from '@/config'
import type { StyleKey } from '@/types/layout'
export interface StyleState extends Record<string, any> {
  leftSideColor: string
  asideStyle: string
  asideScrollbarsStyle: string
  asideBrandStyle: string
  asideMenuItemStyle: string
  asideMenuItemActiveStyle: string
  asideMenuDropdownStyle: string
  navBarItemLabelStyle: string
  navBarItemLabelHoverStyle: string
  navBarItemLabelActiveColorStyle: string
  overlayStyle: string
  darkMode: boolean
}
const initialState: StyleState = {
  leftSideColor: 'bg-blue-900',
  asideStyle: styles.basic.aside,
  asideScrollbarsStyle: styles.basic.asideScrollbars,
  asideBrandStyle: styles.basic.asideBrand,
  asideMenuItemStyle: styles.basic.asideMenuItem,
  asideMenuItemActiveStyle: styles.basic.asideMenuItemActive,
  asideMenuDropdownStyle: styles.basic.asideMenuDropdown,
  navBarItemLabelStyle: styles.basic.navBarItemLabel,
  navBarItemLabelHoverStyle: styles.basic.navBarItemLabelHover,
  navBarItemLabelActiveColorStyle: styles.basic.navBarItemLabelActiveColor,
  overlayStyle: styles.basic.overlay,
  darkMode: true,
}

export const useStyleStore = defineStore('style', {
  state: () => {
    return {
      initialState,
      // darkMode: false as Boolean,
    }
  },
  actions: {
    setStyle(payload: StyleKey) {
      if (!styles[payload]) {
        return
      }
      if (!localStorage.getItem(localStorageStyleKey)) {
        localStorage.setItem(localStorageStyleKey, payload)
      }

      const style = styles[payload]
      // console.log(style)
      //
      //   for (const key in style) {
      //     state[`${key}Style`] = style[key]
      //   }
      //
      for (const key in style) {
        // console.log(style)
        // console.log(style[key])
        style[key as keyof typeof style]
        type _T = keyof typeof this.initialState
        const _getKey = `${key}Style` as _T
        /**
         *
         */
        //prettier-ignore
        (this.initialState as Record<string,_T>)[_getKey]=style[key as keyof typeof style]
      }
    },
    // next
    //prettier-ignore
    setDarkMode(payload: boolean = false) {
      this.initialState.darkMode = payload !== false ? payload : !this.initialState.darkMode

      if (!localStorage.getItem(localStorageDarkModeKey) ) {
        localStorage.setItem(localStorageDarkModeKey, this.initialState.darkMode ? '1' : '0')
      }

      if (typeof document !== 'undefined') {
        document.body.classList[this.initialState.darkMode ? 'add' : 'remove']('dark-scrollbars')

        document.documentElement.classList[this.initialState.darkMode ? 'add' : 'remove']('dark-scrollbars-compat')
      }
    },
  },
})
