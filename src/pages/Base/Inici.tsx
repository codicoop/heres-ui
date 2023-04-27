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
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Est natus asperiores, veritatis ullam iste non itaque!
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Est natus asperiores, veritatis ullam iste non itaque!
          </Text>
        </div>
        <section>
          <Link to="/app/practiques">
            <GoToSection
              name="Bones pràctiques"
              color="white"
              description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quae."
            />
          </Link>
          <Link to="/app/metodologies">
            <GoToSection
              name="Metodologies"
              color="primary"
              description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quae."
            />
          </Link>
          <Link to="/app/formacio">
            <GoToSection
              name="Formació"
              color="secondary"
              description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quae."
            />
          </Link>
          <Link to="/app/noticies">
            <GoToSection
              name="Noticies"
              color="gray"
              description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quae."
            />
          </Link>
        </section>
      </div>
    </div>
  )
}
