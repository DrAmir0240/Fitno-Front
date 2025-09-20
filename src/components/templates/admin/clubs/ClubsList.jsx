import {ClubCard} from "./ClubCard";

export const ClubsList = ({ clubs }) => {
  return (
    <section className="grid sm:grid-cols-2 md:grid-cols-3 gap-10">
      {clubs.map((club, index) => (
        <ClubCard key={index} club={club} />
      ))}
    </section>
  );
};

