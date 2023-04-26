import { Link } from "react-router-dom";
import { JazzyAction } from "../../../stories/Molecules";
import { ContainerWithAside } from "../../../stories/Layouts";
import { ContentBlock, SideSectionInfo } from "../../../stories/Organisms";
import { methodologyContent, methodologyInfo } from "./mock-methodology";

export default function MethodologyView (): JSX.Element {
  return (
    <>
      <Link
        to="/app/metodologies"
      >
        <JazzyAction
          text="Tornar a la llista de metodologies"
          icon="arrowLeftThick"
          iconSide="left"
        />
      </Link>
      <ContainerWithAside>
        <SideSectionInfo
          generalInfoSection={methodologyInfo.generalInfoSection}
          relatedType={methodologyInfo.relatedType}
          relatedItems={methodologyInfo.relatedItems}
        />
        <main>
          {methodologyContent?.map((content, index) => (
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
