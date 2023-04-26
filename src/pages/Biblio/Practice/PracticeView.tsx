import { ContainerWithAside } from "../../../stories/Layouts";
import { SideSectionInfo } from "../../../stories/Organisms";
import { practiceInfo } from "./mock-practice";

export default function PracticeView (): JSX.Element {
  return (
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
  )
}
