import './Steps.css'

export interface StepsProps {
  steps: number,
  progress: number,
};

export function Steps ({
  steps = 3,
  progress = 0,
}: StepsProps): JSX.Element {
  return (
    <div className="steps">
      <div className="steps--progress">
        <span className="steps--progress--completed" style={{ width: `${
          /* divide space in number of steps, but steps has space between */
          /* this line if progress is on steep 1, is 0 */
          /* this line if progress is on steep 2, is 50 */
          /* this line if progress is on steep 3, is 100 */
          progress > 1 ? (progress * 100 / steps) : 0
        }%` }} />
        <span className="steps--progress--remaining" style={{ width: `${
          /* divide space in number of steps, but steps has space between */
          /* this line if progress is on steep 1, is 100 */
          /* this line if progress is on steep 2, is 50 */
          /* this line if progress is on steep 3, is 0 */
          progress > 1 ? ((steps - progress) * 100 / steps) : 100
        }%` }} />
      </div>

      <div className="steps--items">
        {[...Array(steps)].map((_, index) => (
          <div key={index} className={`steps--item ${index < progress ? 'steps--item--completed' : ''}`}>
            <div className="steps--item--number">{index + 1}</div>
          </div>
        ))}
      </div>
    </div>
  )
}