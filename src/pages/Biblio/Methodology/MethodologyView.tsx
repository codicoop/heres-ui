import { Link } from "react-router-dom";
import { JazzyAction } from "../../../stories/Molecules";
import { ContainerWithAside } from "../../../stories/Layouts";
import { ContentBlock, GeneralInfoSection, SideSectionInfo } from "../../../stories/Organisms";
import { methodologyContent, methodologyInfo } from "./mock-methodology";
import { useContext } from "react";
import { WireframesContext } from "../../../config/WireframesContext";
import { LayoutDashboard } from "../../../components";

export interface ContentProps {
  children?: JSX.Element | JSX.Element[]
}

const Content = ({
  children
}: ContentProps): JSX.Element => (
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
    {children}
    {methodologyContent.map((content, index) => (
      <ContentBlock
        key={`content-${index}`}
        text={content.text}
        img={content.img}
        imgSide={content.imgSide}              
      />
    ))}
  </>
)

export default function MethodologyView (): JSX.Element {
  const { auth, role } = useContext(WireframesContext)

  if (auth) return (
    <LayoutDashboard sectionType="methodology">
      <Content>
        <>
          {role === "admin" && (
            <Link
              to="/app/metodologies/editar/1"
            >
              <JazzyAction
                text="Editar metodologia"
                icon="pencil"
                color="secondary"
              />
            </Link>
          )}
          <GeneralInfoSection
            title={methodologyInfo.generalInfoSection.title}
            type={methodologyInfo.generalInfoSection.type}
            sectionInfo={methodologyInfo.generalInfoSection.sectionInfo}
            img={methodologyInfo.generalInfoSection.img}
          />
        </>
      </Content>
    </LayoutDashboard>
  )

  return (
    <ContainerWithAside>
      <SideSectionInfo
        generalInfoSection={methodologyInfo.generalInfoSection}
        relatedType={methodologyInfo.relatedType}
        relatedItems={methodologyInfo.relatedItems}
      />
      <main>
        <Content />
      </main>
    </ContainerWithAside>
  )
}
