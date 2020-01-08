// declare
export type ShareOptions = { title: string; text: string; url: string }
export type NavigatorShare = (options: ShareOptions) => Promise<{}>

declare global {
  interface Window {
    __theme: string
    __onThemeChange: () => void
    __setPreferredTheme: (theme: string) => void
  }

  interface Navigator {
    share?: NavigatorShare
  }
}
