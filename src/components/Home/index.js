// Write your code here
import {Component} from 'react'
import TeamCard from '../TeamCard'
import './index.css'

class Home extends Component {
  state = {teamsData: []}

  componentDidMount() {
    this.getTeams()
  }

  getTeams = async () => {
    const response = await fetch('https://apis.ccbp.in/ipl')
    const data = await response.json()
    const updatedData = data.teams.map(eachItem => ({
      id: eachItem.id,
      name: eachItem.name,
      teamImageUrl: eachItem.team_image_url,
    }))
    this.setState({teamsData: updatedData})
  }

  render() {
    const {teamsData} = this.state
    console.log(teamsData)
    return (
      <div className="entire-page">
        <div className="title">
          <img
            src="https://assets.ccbp.in/frontend/react-js/ipl-logo-img.png"
            alt="ipl logo"
            className="logo-setting"
          />
          <h1 className="ipl-name">IPL Dashboard</h1>
        </div>
        <ul className="teams-list">
          {teamsData.map(item => (
            <TeamCard teamDetails={item} key={item.id} />
          ))}
        </ul>
      </div>
    )
  }
}
export default Home
