import { Link } from "react-router-dom";
import { ContainerWithAside } from "../../../stories/Layouts";
import { JazzyAction } from "../../../stories/Molecules";
import { ContentBlock, SideSectionInfo } from "../../../stories/Organisms";
import { practiceContent, practiceInfo } from "./mock-practice";

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
          {practiceContent.map((content, index) => (
            <ContentBlock
              key={`content-${index}`}
              text={content.text}
              img={content.img}
              imgSide={content.imgSide}              
            />
          ))}
        </main>
      </ContainerWithAside>
    </>
  )
}
