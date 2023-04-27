import { Link } from "react-router-dom";
import { Text, Title } from "../../stories/Typography";
import { GoToSection } from "../../stories/Cards";
import './inici.css'

export default function Inici (): JSX.Element {
  return (
    <div className="inici page">
      <div className="inici__intro container container--blue">
        <img src="../../public/imatge_prova.png" alt="" />
        <Title>Eina d'Autodiagnosi sobre Impacte</Title>
        <svg className="arrow" width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M4 10.5V14.5H13L9.5 18L11.92 20.42L19.84 12.5L11.92 4.58002L9.5 7.00002L13 10.5H4Z" fill="#4F4F4F"/>
        </svg>
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
  )
}
