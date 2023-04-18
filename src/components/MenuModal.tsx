import { useEffect, useState } from "react";
import { Text } from "../stories/Typography/Text/Text";
// import Menu from "../routes/Menu";
// import { Link } from "react-router-dom";
// import { roles } from "../routes/roles";

export default function MenuModal (): JSX.Element {
  const [modal, setModal] = useState('closed')
  
  useEffect(() => {
    document.addEventListener('keydown', handleKeyDown, true)
  }, [])

  const handleKeyDown = (event: KeyboardEvent) => {
    if (modal === 'closed' && event.key === 'Escape') return setModal('open')
  }
  return (
    <div
      className={`modal modal--${modal}`}
      onClick={() => setModal('closed')}
    >
      <div className='modal--content'>
        <Text variant='title'>
          Here's UI - Canvi de permisos
        </Text>
        {/* <nav>
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
        </nav> */}
        {/* <Menu /> */}
        {/* <Link to='/'>Home</Link> */}
      </div>
    </div>
  )
}
