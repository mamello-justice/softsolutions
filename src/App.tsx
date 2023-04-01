import { ReactComponent as SoftSolutionsLogo } from './assets/logo.svg'
import { ReactComponent as WhatsappLogo } from './assets/whatsapp.svg'

import './App.css'

const App = () => (
  <div className="App">
    <SoftSolutionsLogo className="logo" preserveAspectRatio="xMidYMid meet" />
    <div className="links">
      <a href="https://wa.me/27731363972" className="link">
        <WhatsappLogo className="icon" />
      </a>
    </div>
  </div>
)

export default App
