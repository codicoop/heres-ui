import { Link } from "react-router-dom";
import { ItemNav } from "../stories/ItemNav/ItemNav";
import { Text } from "../stories/Typography/Text/Text";

export default function Header (): JSX.Element {
  return (
    <header>
      <Text>
        <Link to="/app/inici">
          Logo
        </Link>
      </Text>
      <nav>
        <ul>
          <ItemNav>
            <Link to="/app/biblioteca">
              Biblioteca
            </Link>
          </ItemNav>
        </ul>
      </nav>
    </header>
  )
}
