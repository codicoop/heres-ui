import { PostCard } from "../../../stories/Cards"
import { ContainerWithAside } from "../../../stories/Layouts/ContainerWithAside"
import { SideSectionFilter } from "../../../stories/Organisms"
import { infoSideSectionFilter, news } from "./mock-news"

export default function PracticeList (): JSX.Element {
  return (
    <ContainerWithAside>
      <SideSectionFilter
        title={infoSideSectionFilter.title}
        description={infoSideSectionFilter.description}
        filters={infoSideSectionFilter.filters}
      />
      <main className="news-list">
        {news.map((post) => (
          <PostCard
            key={post.id}
            title={post.title}
            summary={post.summary}
          />
        ))}
      </main>
    </ContainerWithAside>
  )
}
