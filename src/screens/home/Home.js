import './Home.css'
import { Button } from '@material-ui/core'
import { useHistory } from 'react-router-dom'

function Home() {
  const history = useHistory()

  const addChannel = () => {
    history.push('/add/channel')
  }

  return (
    <div className="home">
      <div className="home__container">
        <img src="/logo.png" alt="" />
        <h1>WELCOME TO NU SOCIAL</h1>

        <p>
          Stay updated with the latest news, events and gossip around Northeastern!
        </p>

        <Button onClick={addChannel}>Create Channel</Button>
      </div>
    </div>
  )
}

export default Home
