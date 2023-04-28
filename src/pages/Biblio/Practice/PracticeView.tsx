import { Link } from "react-router-dom";
import { ContainerWithAside } from "../../../stories/Layouts";
import { JazzyAction } from "../../../stories/Molecules";
import { ContentBlock, GeneralInfoSection, SideSectionInfo } from "../../../stories/Organisms";
import { practiceContent, practiceInfo } from "./mock-practice";
import { WireframesContext } from "../../../config/WireframesContext";
import { useContext } from "react";
import { LayoutDashboard } from "../../../components";

export interface ContentProps {
  children?: JSX.Element | JSX.Element[]
}

const Content = ({
  children
}: ContentProps): JSX.Element => (
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
    {children}
    {practiceContent.map((content, index) => (
      <ContentBlock
        key={`content-${index}`}
        text={content.text}
        img={content.img}
        imgSide={content.imgSide}              
      />
    ))}
  </>
)

export default function PracticeView (): JSX.Element {
  const { auth, role } = useContext(WireframesContext)

  if (auth) return (
    <LayoutDashboard sectionType="practice">
      <Content>
        <>
          {role === "org" && (
            <Link
              to="/app/practiques/editar/1"
            >
              <JazzyAction
                text="Editar pràctica"
                icon="pencil"
                color="secondary"
              />
            </Link>
          )}
          <GeneralInfoSection
            title={practiceInfo.generalInfoSection.title}
            type={practiceInfo.generalInfoSection.type}
            sectionInfo={practiceInfo.generalInfoSection.sectionInfo}
            img={practiceInfo.generalInfoSection.img}
          />
        </>
      </Content>
    </LayoutDashboard>
  )

  return (
    <ContainerWithAside>
      <SideSectionInfo
        generalInfoSection={practiceInfo.generalInfoSection}
        relatedType={practiceInfo.relatedType}
        relatedItems={practiceInfo.relatedItems}
      />
      <main>
        <Content />
      </main>
    </ContainerWithAside>
  )
}
