import { Link } from "react-router-dom";
import { Text, Title } from "../../stories/Typography";
import { GoToSection } from "../../stories/Cards";
import { Icon } from "../../stories/Atoms";
import './inici.css'
import { iniciText } from "../mock-text";

export default function Inici (): JSX.Element {
  const { page, biblioInfo } = iniciText

  return (
    <div className="inici page">
      <div className="inici__container">
        <div className="inici__text container">
          <Title>{page.title}</Title>
          <section className="inici__description">
            {page.description.map((paragraph, index) => (
              <Text key={`inici-description-${index}`}>{paragraph}</Text>
            ))}
          </section>
        </div>
        <section className="inici__section">
          {biblioInfo.map((info) => (
            <Link to={info.link} key={`inici-info-${info.link}`}>
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
