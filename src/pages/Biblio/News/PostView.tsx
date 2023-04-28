import { Link } from "react-router-dom";
import { JazzyAction } from "../../../stories/Molecules";
import { ContainerWithAside } from "../../../stories/Layouts";
import { ContentBlock, GeneralInfoSection, SideSectionInfo } from "../../../stories/Organisms";
import { postContent, postInfo } from "./mock-news";
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
      to="/app/noticies"
    >
      <JazzyAction
        text="Tornar a la llista de notícies"
        icon="arrowLeftThick"
        iconSide="left"
      />
    </Link>
    {children}
    {postContent.map((content, index) => (
      <ContentBlock
        key={`content-${index}`}
        text={content.text}
        img={content.img}
        imgSide={content.imgSide}              
      />
    ))}
  </>
)

export default function PostView (): JSX.Element {
  const { auth, role } = useContext(WireframesContext)

  if (auth) return (
    <LayoutDashboard sectionType="post">
      <Content>
        <>
          {role === "admin" && (
            <Link
              to="/app/noticies/editar/1"
            >
              <JazzyAction
                text="Editar notícia"
                icon="pencil"
                color="secondary"
              />
            </Link>
          )}
          <GeneralInfoSection
            title={postInfo.generalInfoSection.title}
            type={postInfo.generalInfoSection.type}
            sectionInfo={postInfo.generalInfoSection.sectionInfo}
            img={postInfo.generalInfoSection.img}
          />
        </>
      </Content>
    </LayoutDashboard>
  )

  return (
    <ContainerWithAside>
      <SideSectionInfo
        generalInfoSection={postInfo.generalInfoSection}
        relatedType={postInfo.relatedType}
        relatedItems={postInfo.relatedItems}
      />
      <main>
        <Content />
      </main>
    </ContainerWithAside>
  )
}
