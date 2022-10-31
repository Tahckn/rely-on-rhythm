import { Sidebar, Content, BottomBar } from './components'

function App() {
  const isMobile = navigator.userAgentData?.mobile

  return (
    <>
      <div className="wrapper">
        {isMobile ? null : <Sidebar />}
        <Content />
      </div>
      <BottomBar />
    </>
  )
}

export default App
