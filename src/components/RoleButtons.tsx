import { useContext } from "react";
import { Button } from "../stories/Button";
import { WireframesContext } from "../config/WireframesContext";

export default function RoleButtons (): JSX.Element {
  const { role, setRole } = useContext(WireframesContext)

  return (
    <>
      <Button
        label="Organització"
        onClick={() => setRole('org')}
        color="tertiary"
        relevance={role === 'org' ? 'call' : 'shy'}
      />
      <Button
        label="Usuari"
        onClick={() => setRole('user')}
        color="tertiary"
        relevance={role === 'user' ? 'call' : 'shy'}
      />
      <Button
        label="Admin"
        onClick={() => setRole('admin')}
        color="tertiary"
        relevance={role === 'admin' ? 'call' : 'shy'}
      />
    </>
  )
}
