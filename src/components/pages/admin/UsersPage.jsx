import { SearchBar } from "@/components/navigation";
import PageHeader from "@/components/shared/PageHeader";
import { UserTable } from "@/components/templates/admin/users";
import AdminLayout from "@/layouts/AdminLayout";


const sampleUsers = [
  {
    id: 1,
    name: "علی طارمی",
    status: "فعال",
    phone: "۰۹۲۱۷۷۸۳۵۲۴",
    nationalCode: "۵۰۸۰۱۷۹۸۵۶",
    session: "آزمایشی",
    transactions: "مشاهده",
  },
  {
    id: 2,
    name: "رضا جمالی",
    status: "فعال",
    phone: "۰۹۱۲۳۴۵۶۷۸۹",
    nationalCode: "۰۰۱۲۳۴۵۶۷۸",
    session: "عادی",
    transactions: "مشاهده",
  },
  {
    id: 3,
    name: "سارا محمدی",
    status: "غیرفعال",
    phone: "۰۹۳۵۵۵۶۶۷۷",
    nationalCode: "۰۱۲۳۴۵۶۷۸۹",
    session: "ویژه",
    transactions: "مشاهده",
  },
  {
    id: 4,
    name: "محمد رضایی",
    status: "فعال",
    phone: "۰۹۱۲۱۱۱۲۱۳",
    nationalCode: "۱۲۳۴۵۶۷۸۹۰",
    session: "عادی",
    transactions: "مشاهده",
  },
  {
    id: 5,
    name: "فاطمه حسینی",
    status: "فعال",
    phone: "۰۹۳۰۹۸۷۶۵۴",
    nationalCode: "۵۵۵۴۴۳۳۲۲۱",
    session: "آزمایشی",
    transactions: "مشاهده",
  },
];

function UsersPage() {
  return (
    <AdminLayout>
      <PageHeader
        title="لیست کاربران"
        buttonText="کاربر جدید"
        showButton={true}
      />

      <SearchBar placeholder="جستجو کنید..." />

      <UserTable users={sampleUsers} />
    </AdminLayout>
  );
}

export default UsersPage;