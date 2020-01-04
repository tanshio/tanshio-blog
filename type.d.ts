type ShareOptions = { title: string; text: string; url: string }

type NavigatorShare = (options: ShareOptions) => Promise<{}>

interface MyNavigator extends Navigator {
  share?: NavigatorShare
}
declare var navigator: MyNavigator
export default navigator
