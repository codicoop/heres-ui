import { LayoutDashboard } from "../../components";
import { FormationCard } from "../../stories/Cards";
import { Text } from "../../stories/Typography";
import { formations } from "./mock-formations";
import './formation.css'
import { Link } from "react-router-dom";
import { useContext } from "react";
import { WireframesContext } from "../../config/WireframesContext";
import { OnlyUserAccess } from "../Base";
import { Login } from "../Auth";

export default function Formation (): JSX.Element {
  const { auth, role } = useContext(WireframesContext)

  if (auth && role !== 'user') return <OnlyUserAccess />
  if (!auth) return <Login />

  return (
    <LayoutDashboard>
      <section className="formation__info">
        <Text variant="title">Formació</Text>
        <Text>
          Per actuar, cal mesurar. El següent pas és conèixer. A Kamma creiem que l’aprenentatge és essencial per seguir millorant l’impacte de les organitzacions.En el nostre portal Edukamma oferim una gran varietat de cursos formatius sobre la mesura i avaluació de l’impacte. On hi trobaràs formacions tant online com presencials, adequades a diferents nivells de dificultat, durada i preu.
        </Text>
      </section>
      <section className="formation__section">
        {formations.map((formation, index) => (
          <Link
            to={auth ? `/app/formacio/view` : `/app/login`}
            className="formation__link"
            key={`formation-${index}`}
          >
            <FormationCard
              title={formation.title}
              summary={formation.summary}
              img={formation.img}
              modality={formation.modality}
              lenguage={formation.lenguage}
              price={formation.price}
              duration={formation.duration}
              methodology={formation.methodology}
              organization={formation.organization}
              startDate={formation.startDate}
              endDate={formation.endDate}
              teachers={formation.teachers}
              level={formation.level}
            />
          </Link>
        ))}
      </section>
    </LayoutDashboard>
  )
}
