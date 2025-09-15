"use client"

import { SessionCard } from "../../profile/services"

function ServicesList({sessions}) {
  return (
     <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-4">
          {sessions?.map((session) => (
            <SessionCard
            key={session.id}
              onEdit={() => console.log("ویرایش سانس")}
              onDelete={() => console.log("حذف سانس")}
              session={session}
            />
          ))}
        </div>
  )
}

export default ServicesList