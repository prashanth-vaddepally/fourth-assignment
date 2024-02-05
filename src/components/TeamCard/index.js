// Write your code here
import {Link} from 'react-router-dom'
import './index.css'

const TeamCard = props => {
  const {teamDetails} = props
  const {name, teamImageUrl, id} = teamDetails

  return (
    <Link to={`/team-matches/${id}`}>
      <li className="team-item">
        <img src={teamImageUrl} alt={name} className="image-setting" />
        <p className="name-setting">{name}</p>
      </li>
    </Link>
  )
}
export default TeamCard
