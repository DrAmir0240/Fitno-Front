import AddButton from "./AddButton";

export const ClubsSection = ({ onAddClub }) => {
  return (
    <div className="grid grid-cols-6 gap-5">
      <AddButton onClick={onAddClub}>
        اضافه کردن
      </AddButton>
    </div>
  );
};

