import { createRoot } from 'react-dom/client'
import GlobalStyle from './styles/global'
import Routes from './Routes/Routes'
import Modal from 'react-modal'
import { ToastContainer } from 'react-toastify'


Modal.setAppElement('#root')

const root = createRoot(document.getElementById('root'))
root.render(
  <>
    <Routes />
    <GlobalStyle/>
    <ToastContainer autoClose={2000} theme="colored" />
  </>
)