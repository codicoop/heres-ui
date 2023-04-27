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
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Est natus asperiores, veritatis ullam iste non itaque!
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Est natus asperiores, veritatis ullam iste non itaque!
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
          <Link to="/app/noticies">
            <GoToSection
              name="Noticies"
              color="gray"
              description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quae."
            />
          </Link>
          <Link to="/app/metodologies" className="grid-two-columns">
            <GoToSection
              name="Metodologies"
              color="primary"
              description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quae."
            />
          </Link>
        </section>
      </div>
    </div>
  )
}
