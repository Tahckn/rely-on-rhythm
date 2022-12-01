import Player from './BottomBar/Player'

function BottomBar() {
  return (
    <div className="h-24 w-full z-20 fixed bottom-0 bg-footer border-t border-white border-opacity-10">
      <Player />
    </div>
  )
}

export default BottomBar
