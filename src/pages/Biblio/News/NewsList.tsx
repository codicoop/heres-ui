import { Link } from "react-router-dom"
import { PostCard } from "../../../stories/Cards"
import { infoSideSectionFilter, news } from "./mock-news"
import { useContext } from "react"
import { WireframesContext } from "../../../config/WireframesContext"
import { JazzyAction } from "../../../stories/Molecules"
import { LayoutDashboard } from "../../../components"

export default function PracticeList (): JSX.Element {
  const { role, auth } = useContext(WireframesContext)
  return (
    <LayoutDashboard infoSideSectionFilter={infoSideSectionFilter} sectionType="news">
      <>
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
              ambit={post.ambit}
              sector={post.sector}
              methodology={post.methodologyRef}
            />
          </Link>
        ))}
      </>
    </LayoutDashboard>
  )
}
