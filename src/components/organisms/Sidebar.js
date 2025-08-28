

const Sidebar = ({  className = "" }) => {
  return (
    <aside className={`w-64 flex-shrink-0 hidden ${className}`}>
      <div className="bg-white rounded-lg  p-6 sticky top-8">
      sidebar
      </div>
    </aside>
  );
};

export default Sidebar;
