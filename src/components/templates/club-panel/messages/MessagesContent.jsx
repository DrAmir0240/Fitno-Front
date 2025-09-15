import { ReusableTabs } from "@/components/ui/tabs"

export const MessagesContent =({tabsData})=> {
  return (
    <div className="bg-[#EFEFEF] p-2 py-4 rounded-3xl mt-4">
        <div className="flex w-full justify-start">
          <ReusableTabs 
            tabs={tabsData} 
            defaultValue="all"
            className="w-full px-3"
            tabsListClassName="bg-[#D6D6D6] min-w-[200px] gap-3 mx-auto rounded-full flex-row-reverse" 
          />
        </div>
      </div>
  )
}

