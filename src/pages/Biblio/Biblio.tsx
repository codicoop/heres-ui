import { Link } from "react-router-dom";
import { Text, Title } from "../../stories/Typography";
import { GoToSection } from "../../stories/Cards";
import { Icon } from "../../stories/Atoms";
import './library.css'

export default function Biblio (): JSX.Element {
  return (
    <div className="library page">
      <div className="library__container">
        <div className="library__intro">
          <div className="library__img">
            <img src="../../public/imatge_prova.png" alt="" />
          </div>
          <Title>Eina d'autodiagnosi</Title>
          <div className="library__arrow">
            <Icon
              name="arrowRightThick"
              selectedColor="primary"
              hoverColor="primary"
            />
          </div>
        </div>
        <div className="library__content">
          <Title>
            Biblioteca
          </Title>
          <Text>
            Davant l’excés d’informació en l'àmbit de la mesura i avaluació de l’impacte social, hem classificat i organitzat la informació en aquesta Biblioteca. Per facilitar l’aprenentatge i garantir que els conceptes són clars i específics. Per mitjà del nostre cercador, podràs trobar de manera ràpida i senzilla  definicions, articles i publicacions científiques més rellevants sobre la mesura de l’impacte.
            Tota la informació facilitada en aquesta plataforma ha estat contrastada per centres d’investigació i experts en la matèria.
          </Text>
        </div>
        <section className="inici__section">
          <Link to="/app/practiques">
            <GoToSection
              name="Bones pràctiques"
              color="white"
              description="Visita l’apartat de Bones Pràctiques per conèixer quines accions han implementat altres organitzacions."
            />
          </Link>
          <Link to="/app/noticies">
            <GoToSection
              name="Noticies"
              color="gray"
              description="Visita l’apartat de notícies per estar al dia sobre tota l’actualitat en matèria d’impacte social i ambiental."
            />
          </Link>
          <Link to="/app/metodologies" className="grid-two-columns">
            <GoToSection
              name="Metodologies"
              color="primary"
              description="Visita l’apartat de Metodologies per conèixer quines metodologies existeixen i pot implementar la teva organització.."
            />
          </Link>
        </section>
      </div>
    </div>
  )
}
