import { useContext } from "react";
import { ContainerWithAside } from "../stories/Layouts";
import { WireframesContext } from "../config/WireframesContext";
import DashboardMenu from "./DashboardMenu";
import { SideSectionFilter } from "../stories/Organisms";
import { SideSectionFilterProps } from "../stories/Organisms/SideSectionFilter/SideSectionFilter";

export interface LayoutDashboardProps {
  infoSideSectionFilter: SideSectionFilterProps
  sectionType: string
  children: JSX.Element | JSX.Element[]
}

export default function LayoutDashboard ({
  infoSideSectionFilter,
  sectionType,
  children,
}: LayoutDashboardProps): JSX.Element {
  const { auth } = useContext(WireframesContext)

  return (
    <ContainerWithAside>
      {auth ? (
        <DashboardMenu />
      ) : (
        <SideSectionFilter
          title={infoSideSectionFilter.title}
          description={infoSideSectionFilter.description}
          filters={infoSideSectionFilter.filters}
        />
      )}
      <main className={`${sectionType}-list`}>
        {children}
      </main>
    </ContainerWithAside>
  )
}
