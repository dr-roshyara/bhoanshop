/* eslint-disable prettier/prettier */
interface ContainerTheme extends Record<string, any> {
  bgNavbar: string
  bgAside: string
  bgMain: string
  textAside: string
  textMain: string
  appTitle: string
}
export const localStorageDarkModeKey = 'darkMode'

export const localStorageStyleKey = 'style'

export const containerMaxW = 'xl:max-w-6xl xl:mx-auto'
export const appTheme: ContainerTheme = {
  bgNavbar: 'bg-[#721f1f]',
  bgAside: 'bg-[#0f172d]',
  bgMain: 'bg-[#e9fce9]',
  textAside: 'text-[#e9fce9]',
  textMain: 'text-[#07031d]',
  appTitle: 'Bhojan Shop',
}

export const appTitle = 'Bhojan Shop'

export const getPageTitle = (currentPageTitle: string) => `${currentPageTitle} — ${appTitle}`
// export const darkModeKey = 'darkMode'
// export const styleKey = 'style'
