import { Link } from "react-router-dom"
import { roles } from './roles'

export default function Menu (): JSX.Element {
  return (
    <nav>
      <ul className='menu'>
        <li><Link to='/'>Home</Link></li>
        {roles.map(role => (
          <li key={role.param}>
            <Link to={`/app/${role.param}`}>
              {role.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  )
}
