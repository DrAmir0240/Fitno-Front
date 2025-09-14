import ClubPanelLayout from "@/layouts/ClubPanelLayout";
import { AttendanceGrid, AttendanceHeader } from "@/components/templates/club-panel/Attendance";


function AttendancePage() {
  const inventoryItems = [
    { id: 1, name: "مریم فتحی", number: "۱", status: "active" },
    { id: 2, name: "مریم فتحی", number: "۲", status: "active" },
    { id: 3, name: "مریم فتحی", number: "۳", status: "active" },
    { id: 4, name: "مریم فتحی", number: "۴", status: "active" },
    { id: 5, name: "مریم فتحی", number: "۵", status: "active" },
    { id: 6, name: "مریم فتحی", number: "۶", status: "active" },
    { id: 7, name: "مریم فتحی", number: "۷", status: "inactive" },
    { id: 8, name: "مریم فتحی", number: "۱", status: "active" },
    { id: 9, name: "مریم فتحی", number: "۲", status: "active" },
    { id: 10, name: "مریم فتحی", number: "۳", status: "active" },
    { id: 11, name: "مریم فتحی", number: "۴", status: "active" },
    { id: 12, name: "مریم فتحی", number: "۵", status: "active" },
    { id: 13, name: "مریم فتحی", number: "۶", status: "active" },
    { id: 14, name: "مریم فتحی", number: "۷", status: "inactive" },
  ];

  return (
    <ClubPanelLayout>
      <div className="max-w-7xl mx-auto">
        <AttendanceHeader />
        <AttendanceGrid items={inventoryItems} />
      </div>
    </ClubPanelLayout>
  );
}

export default AttendancePage;