import { Link } from "react-router-dom";
import { JazzyAction } from "../../../stories/Molecules";
import { ContainerWithAside } from "../../../stories/Layouts";
import { ContentBlock, SideSectionInfo } from "../../../stories/Organisms";
import { postContent, postInfo } from "./mock-news";

export default function PostView (): JSX.Element {
  return (
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
      <ContainerWithAside>
        <SideSectionInfo
          generalInfoSection={postInfo.generalInfoSection}
          relatedType={postInfo.relatedType}
          relatedItems={postInfo.relatedItems}
        />
        <main>
          {postContent?.map((content, index) => (
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
