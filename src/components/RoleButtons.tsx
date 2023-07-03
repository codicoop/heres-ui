import { useContext } from "react";
import { Button } from "../stories/Molecules";
import { WireframesContext, role } from "../config/WireframesContext";
import { useNavigate } from "react-router-dom";

export default function RoleButtons (): JSX.Element {
  const { role, setRole } = useContext(WireframesContext)
  const navigate = useNavigate()

  const handleRoleAndGoToApp = (role: role) => {
    setRole(role)
    navigate('/app/inici')
  }

  return (
    <>
      <Button
        label="Organització"
        onClick={() => handleRoleAndGoToApp('org')}
        color="primary"
        relevance={role === 'org' ? 'call' : 'base'}
      />
      <Button
        label="Usuari"
        onClick={() => handleRoleAndGoToApp('user')}
        color="primary"
        relevance={role === 'user' ? 'call' : 'base'}
      />
      <Button
        label="Admin"
        onClick={() => handleRoleAndGoToApp('admin')}
        color="primary"
        relevance={role === 'admin' ? 'call' : 'base'}
      />
    </>
  )
}
