import { Link } from "react-router-dom";
import { Text, Title } from "../../stories/Typography";
import { GoToSection } from "../../stories/Cards";
import { Icon } from "../../stories/Atoms";
import './inici.css'

export default function Inici (): JSX.Element {
  return (
    <div className="inici page">
      <div className="inici__container">
        <div className="inici__intro">
          <div className="inici__img">
            <img src="../../public/imatge_prova.png" alt="" />
          </div>
          <Title>Eina d'Autodiagnosi sobre Impacte</Title>
          <div className="inici__arrow">
            <Icon
              name="arrowRightThick"
              selectedColor="primary"
              hoverColor="primary"
            />
          </div>
        </div>
        <div className="inici__text container">
          <Text>
            A Kamma creiem que el primer pas per poder actuar és conèixer el teu impacte. Kamma és una plataforma especialitzada en la mesura i avaluació de l’impacte social i ambiental. On trobaràs informació rigorosa i contrastada sobre la mesura de l'impacte. Adreçada a qualsevol tipus d’organització, ja sigui a PIME, gran empresa, sense ànim de lucre o entitat pública. Oferim des d’orientació amb la nostra eina d’autodiagnosi, fins a formació o acompanyament professional a mida amb les nostres persones expertes. Amb Kamma, podràs mesurar, actuar i comunicar de forma rigorosa l’impacte de la teva organització.
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
          <Link to="/app/metodologies">
            <GoToSection
              name="Metodologies"
              color="primary"
              description="Visita l’apartat de Metodologies per conèixer quines metodologies existeixen i pot implementar la teva organització."
            />
          </Link>
          <Link to="/app/formacio">
            <GoToSection
              name="Formació"
              color="secondary"
              description="Accedeix al nostre portal Edukamma per conèixer la oferta de formacions online i presencials disponibles."
            />
          </Link>
          <Link to="/app/noticies">
            <GoToSection
              name="Noticies"
              color="gray"
              description="Visita l’apartat de notícies per estar al dia sobre tota l’actualitat en matèria d’impacte social i ambiental."
            />
          </Link>
        </section>
      </div>
    </div>
  )
}
