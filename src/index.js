import { createRoot } from 'react-dom/client'
import GlobalStyle from './styles/global'
import Routes from './Routes/Routes'
import Modal from 'react-modal'

Modal.setAppElement('#root')

const root = createRoot(document.getElementById('root'))
root.render(
  <>
    <Routes />
    <GlobalStyle/>
  </>
)