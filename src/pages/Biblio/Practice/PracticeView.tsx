import { Link } from "react-router-dom";
import { ContainerWithAside } from "../../../stories/Layouts";
import { JazzyAction } from "../../../stories/Molecules";
import { SideSectionInfo } from "../../../stories/Organisms";
import { practiceInfo } from "./mock-practice";

export default function PracticeView (): JSX.Element {
  return (
    <>
      <Link
        to="/app/practiques"
      >
        <JazzyAction
          text="Tornar a la llista de pràctiques"
          icon="arrowLeftThick"
          iconSide="left"
        />
      </Link>
      <ContainerWithAside>
        <SideSectionInfo
          generalInfoSection={practiceInfo.generalInfoSection}
          relatedType={practiceInfo.relatedType}
          relatedItems={practiceInfo.relatedItems}
        />
        <main>
          <h1>Practice View</h1>
        </main>
      </ContainerWithAside>
    </>
  )
}
