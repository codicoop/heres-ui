import { useContext } from "react";
import { Button } from "../stories/Molecules";
import { WireframesContext } from "../config/WireframesContext";

export default function RoleButtons (): JSX.Element {
  const { role, setRole } = useContext(WireframesContext)

  return (
    <>
      <Button
        label="Organització"
        onClick={() => setRole('org')}
        color="primary"
        relevance={role === 'org' ? 'call' : 'base'}
      />
      <Button
        label="Usuari"
        onClick={() => setRole('user')}
        color="primary"
        relevance={role === 'user' ? 'call' : 'base'}
      />
      <Button
        label="Admin"
        onClick={() => setRole('admin')}
        color="primary"
        relevance={role === 'admin' ? 'call' : 'base'}
      />
    </>
  )
}
