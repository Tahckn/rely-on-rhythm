import { Sidebar, Content, BottomBar } from './components'

function App() {
  return (
    <>
      <div className="wrapper">
        <Sidebar />
        <Content />
      </div>
      <BottomBar />
    </>
  )
}

export default App
