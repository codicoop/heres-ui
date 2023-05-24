import { Link } from "react-router-dom";
import { Text, Title } from "../../stories/Typography";
import { GoToSection } from "../../stories/Cards";
import { Icon } from "../../stories/Atoms";
import './library.css'
import { biblioText } from "../mock-text";

export default function Biblio (): JSX.Element {
  const { page, biblioInfo } = biblioText
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
          <Title>{page.title}</Title>
          <section className="inici__description">
            {page.description.map((paragraph, index) => (
              <Text key={`inici-description-${index}`}>{paragraph}</Text>
            ))}
          </section>
        </div>
        <section className="inici__section library__section">
          {biblioInfo.map((info) => (
            <Link to={info.link} key={`biblio-info-${info.link}`}>
              <GoToSection
                name={info.name}
                color={info.color}
                description={info.description}
              />
            </Link>
          ))}
        </section>
      </div>
    </div>
  )
}
