import { PracticeCard } from "../../../stories/Cards"
import { practices } from "./mock-practice"

export default function PracticeList (): JSX.Element {
  return (
    <div className="practice-list">
      {practices.map((practice) => (
        <PracticeCard
          key={practice.id}
          title={practice.title}
          summary={practice.summary}
        />
      ))}
    </div>
  )
}
