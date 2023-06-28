import { Link } from "react-router-dom";
import { MethodologyCard } from "../../stories/Cards";
import { Text, Title } from "../../stories/Typography";
import { methodologies } from "../Biblio/Methodology/mock-methodology";

export default function ToolOk (): JSX.Element {
  return (
    <div className="tool page">
      <div className="tool__container">
        <Title underline>Aquí tens el teu autodiagnostic</Title>
        <Text>
          A partir de les respostes que has donat, et recomanem que consultis la metodologia següent:
        </Text>
        <Link to={`/app/metodologies/${methodologies[0].id}`}>
          <MethodologyCard
            title={methodologies[0].title}
            summary={methodologies[0].summary}
            saved={methodologies[0].saved}
            ambit={methodologies[0].ambit}
            sectors={methodologies[0].sectors}
          />
        </Link>
      </div>
    </div>
  )
}
