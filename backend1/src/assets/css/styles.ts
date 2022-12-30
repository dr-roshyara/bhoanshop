/* eslint-disable prettier/prettier */
interface ContainerTheme extends Record<string, any> {
  bgNavbar: string
  bgAside: string
  bgMain: string
  textAside: string
  textMain: string
  appTitle: string
}

export const containerMaxW = 'xl:max-w-6xl xl:mx-auto'
export const appTheme: ContainerTheme = {
  bgNavbar: 'bg-[#721f1f] dark:bg-[#d6dce7]',
  bgAside: 'bg-[#0f172d] dark:bg-[#d6dce7]',
  bgMain: 'bg-[#e9fce9]',
  textAside: 'text-[#e9fce9]',
  textMain: 'text-[#07031d]',
  appTitle: 'Bhojan Shop',
}
export interface GuestStyleObject extends Record<string, any> {
  bgLeft: string
  bgRight: string
  textLeft: string
  textRight: string
}
export interface StyleObject extends Record<string, any> {
  aside: string
  asideScrollbars: string
  asideBrand: string
  asideMenuItem: string
  asideMenuItemActive: string
  asideMenuDropdown: string
  navBarItemLabel: string
  navBarItemLabelHover: string
  navBarItemLabelActiveColor: string
  overlay: string
}

export const basic: StyleObject = {
  aside: appTheme.bgAside + ' ' + appTheme.textAside,
  asideScrollbars: 'aside-scrollbars-gray',
  asideBrand: 'bg-slate-900' + ' ' + appTheme.textAside,
  asideMenuItem: 'text-gray-300 hover:text-white',
  asideMenuItemActive: 'font-bold text-white',
  asideMenuDropdown: 'bg-gray-700/50',
  navBarItemLabel: 'text-black',
  navBarItemLabelHover: 'hover:text-blue-500',
  navBarItemLabelActiveColor: 'text-blue-600',
  overlay: 'from-gray-700 via-gray-900 to-gray-700',
}

export const white: StyleObject = {
  aside: appTheme.bgAside,
  asideScrollbars: 'aside-scrollbars-light',
  asideBrand: '',
  asideMenuItem: 'text-blue-600 hover:text-black dark:text-white',
  asideMenuItemActive: 'font-bold text-black dark:text-white',
  asideMenuDropdown: 'bg-gray-100/75',
  navBarItemLabel: 'text-blue-600',
  navBarItemLabelHover: 'hover:text-black',
  navBarItemLabelActiveColor: 'text-black',
  overlay: 'from-white via-gray-100 to-white',
}
