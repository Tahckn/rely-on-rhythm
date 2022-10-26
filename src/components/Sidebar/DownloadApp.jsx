import { BsArrowDownCircle } from 'react-icons/bs'

function DownloadApp() {
  return (
    <div>
      <a
        href="#"
        className="text-link font-semibold h-10 border-t border-link/20 text-md gap-2 tracking-tight p-2 flex items-center"
      >
        <BsArrowDownCircle className="mx-2" size="22" />
        <span>Install App </span>
      </a>
    </div>
  )
}

export default DownloadApp
