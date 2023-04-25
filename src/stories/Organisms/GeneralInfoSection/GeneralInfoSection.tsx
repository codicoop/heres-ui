import { InfoSection, JazzyAction } from '../../Molecules'
import './GeneralInfoSection.css'
import { Title } from '../../Typography'

export interface InfoSectionProps {
  category: string
  data: string
}

export interface GeneralInfoSectionProps {
  type: 'practice' | 'methodology' | 'post'
  title: string
  sectionInfo: InfoSectionProps[]
  img?: string
}

export function GeneralInfoSection ({
  type,
  title,
  sectionInfo,
  img,
}: GeneralInfoSectionProps) {
  
  return (
    <section className='general-info-section'>
      <div className='general-info__text'>
        {(type === 'practice') && (
          <JazzyAction
            text="Descarregar"
            icon='trayArrowDown'
          />
        )}
        {(type === 'methodology') && (
          <JazzyAction
            text="Guardar"
            icon='bookmarkOutline'
          />
        )}
        <Title>{title}</Title>
        <ul>
          {sectionInfo.map((info) => (
            <li key={`info-${info.category}`}>
              <InfoSection category={info.category} data={info.data} />
            </li>
          ))}
        </ul>
      </div>
      {img && (
        <div className='general-info__image'>
          <img src={img} alt='general info' />
        </div>
      )}
    </section>
  )
}
