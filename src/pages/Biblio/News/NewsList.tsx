import { Link } from "react-router-dom"
import { PostCard } from "../../../stories/Cards"
import { ContainerWithAside } from "../../../stories/Layouts/ContainerWithAside"
import { SideSectionFilter } from "../../../stories/Organisms"
import { infoSideSectionFilter, news } from "./mock-news"
import { useContext } from "react"
import { WireframesContext } from "../../../config/WireframesContext"
import { JazzyAction } from "../../../stories/Molecules"

export default function PracticeList (): JSX.Element {
  const { role, auth } = useContext(WireframesContext)
  return (
    <ContainerWithAside>
      <SideSectionFilter
        title={infoSideSectionFilter.title}
        description={infoSideSectionFilter.description}
        filters={infoSideSectionFilter.filters}
      />
      <main className="news-list">
        {auth && role === "admin" && (
          <Link
            to="/app/noticies/nova"
          >
            <JazzyAction
              text="Afegir un nou post"
              icon="plus"
              color="secondary"
            />
          </Link>
        )}
        {news.map((post) => (
          <Link
            to={`/app/noticies/${post.id}`}
            key={post.id}
          >
            <PostCard
              key={post.id}
              title={post.title}
              summary={post.summary}
            />
          </Link>
        ))}
      </main>
    </ContainerWithAside>
  )
}
