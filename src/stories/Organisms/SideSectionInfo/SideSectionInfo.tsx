import { Text } from '../../Typography'
import { GeneralInfoSection } from '../GeneralInfoSection'
import './SideSectionInfo.css'

export interface SideSectionInfoProps {
  generalInfoSection: {
    type: 'practice' | 'methodology' | 'post'
    title: string
    sectionInfo: {
      category: string
      data: string
    }[]
    img?: string
  }
  relatedType: 'practice' | 'methodology' | 'post' | 'formation'
  relatedItems?: {
    id: string
    title: string
    summary?: string
    img?: string
  }[]
}

export function SideSectionInfo ({
  generalInfoSection,
  relatedType,
  relatedItems,
}: SideSectionInfoProps) {
  const { type, title, sectionInfo, img } = generalInfoSection
  return (
    <aside className='side-section-info'>
      <GeneralInfoSection
        type={type}
        title={title}
        sectionInfo={sectionInfo}
        img={img}
      />
      {relatedType && (
        <div>
          <Text as='h2' variant='subtitle'>
            {relatedType === 'practice' && 'Pràctiques relacionades'}
            {relatedType === 'methodology' && 'Metodologies relacionades'}
            {relatedType === 'post' && 'Articles relacionats'}
            {relatedType === 'formation' && 'Formacions relacionades'}
          </Text>
          <ul>
            {relatedItems?.map((item) => (
              <li key={`related-${item.id}`}>
                <Text as='h3' variant='subtitle'>
                  {item.title}
                </Text>
                <Text as='p' variant='body'>
                  {item.summary}
                </Text>
              </li>
            ))}
          </ul>
        </div>
      )}
    </aside>
  )
}
