import { Sidebar, Content, BottomBar } from './components'
import browserMobile from './browserDetect'

function App() {
  const mobile = browserMobile()
  return (
    <>
      <div className="wrapper">
        {!mobile && <Sidebar />}
        <Content />
      </div>
      <BottomBar />
    </>
  )
}

export default App
