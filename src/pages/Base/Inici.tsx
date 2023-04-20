import { Link } from "react-router-dom";
import { Text, Title } from "../../stories/Typography";
import { GoToSection } from "../../stories/Cards";

const sections = [
  {
    name: 'Autodiagnosi',
    color: 'blue',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quae.'
  },
]

export default function Inici (): JSX.Element {
  return (
    <>
      <div>
        <Text as="h2">Eina d'autodiagnosi</Text>
      </div>
      <div>
        <Title>
          Nom de l'aplicació
        </Title>
        <Text>
          Descripció de l'aplicació.
        </Text>
        <Text>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Alias distinctio esse, vel odit cum, optio ipsam ratione eius dolore quas architecto similique autem vitae perferendis culpa?
        </Text>
        <Text>
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
    </>
  )
}
