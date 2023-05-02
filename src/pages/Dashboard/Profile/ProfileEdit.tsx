import { useContext } from "react";
import { LayoutDashboard } from "../../../components";
import { WireframesContext } from "../../../config/WireframesContext";
import { Input } from "../../../stories/Forms";
import { orgInfo, userInfo } from "./mock-profile";
import { Button } from "../../../stories/Molecules";
import { useNavigate } from "react-router-dom";

const formUser = () => (
  <>
    <Input
      label="Nom"
      name="name"
      value={userInfo["Nom"]}
      required
    />
    <Input
      label="Cognoms"
      name="surname"
      value={userInfo["Cognoms"]}
      required
    />
    <Input
      label="Mail"
      name="email"
      value={userInfo["Mail"]}
      required
    />
    <Input
      label="DNI"
      name="dni"
      value={userInfo["DNI"]}
      required
    />
    <Input
      label="Data de naixement"
      name="birthdate"
      value={userInfo["Data de naixement"]}
      type="date"
      required
    />
    <Input
      label="Municipi de residència"
      name="city"
      value={userInfo["Municipi de residència"]}
      required
    />
    <Input
      label="Codi postal"
      name="postalCode"
      value={userInfo["Codi postal"]}
      required
    />
    <Input
      label="Telèfon de contacte"
      name="phone"
      value={userInfo["Telèfon de contacte"]}
      required
    />
    <Input
      label="Perfil professional"
      name="profile"
      value={userInfo["Perfil professional"]}
      required
    />
    <Input
      label="Organització"
      name="organization"
      value={userInfo["Organització"]}
      required
    />
  </>
)

const formOrg = () => (
  <>
    <Input
      label="Mail"
      name="email"
      value={orgInfo["Mail"]}
      required
    />
    <Input
      label="Correu de contacte"
      name="contactEmail"
      value={orgInfo["Correu de contacte"]}
      required
    />
    <Input
      label="Nom comercial"
      name="commercialName"
      value={orgInfo["Nom comercial"]}
      required
    />
    <Input
      label="Nom fiscal"
      name="fiscalName"
      value={orgInfo["Nom fiscal"]}
      required
    />
    <Input
      label="NIF"
      name="nif"
      value={orgInfo["NIF"]}
      required
    />
    <Input
      label="Adreça de la seu social"
      name="address"
      value={orgInfo["Adreça de la seu social"]}
      required
    />
    <Input
      label="Sector"
      name="sector"
      value={orgInfo["Sector"]}
      required
    />
    <Input
      label="Nombre de persones que treballen a l'organització"
      name="employees"
      value={orgInfo["Nombre de persones que treballen a l'organització"]}
      required
    />
  </>
)

export default function ProfileEdit (): JSX.Element {
  const { role } = useContext(WireframesContext)
  const navigate = useNavigate()

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    navigate("/app/perfil")
  }

  return (
    <LayoutDashboard sectionType="news">
      <form onSubmit={handleSubmit}>
        {role === "user" && formUser()}
        {role === "org" && formOrg()}
        <Button
          type="submit"
          label="Actualitzar informació"
        />
      </form>
    </LayoutDashboard>
  )
}
