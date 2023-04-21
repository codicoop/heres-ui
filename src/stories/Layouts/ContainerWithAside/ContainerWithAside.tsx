import './ContainerWithAside.css'

export interface ContainerWithAsideProps {
  children: React.ReactNode
}

export function ContainerWithAside ({
  children,
}: ContainerWithAsideProps) {
  return (
    <div className="container-aside">
      {children}
    </div>
  )
}
