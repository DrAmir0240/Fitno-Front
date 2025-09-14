import { SessionCard } from './SessionCard';

export const SelectedSessions = ({ sessions }) => {
  return (
    <div>
      <h4 className='font-semibold text-base md:text-lg mb-3 px-2'>
        سانس انتخابی:
      </h4>
      
      {sessions.map(session => (
        <SessionCard key={session.id} session={session} />
      ))}
      
      <h2 className='text-xl md:text-2xl text-gray-700 text-center mt-5'>
        قیمت سانس: ۱.۵۶۰.۰۰۰ تومان
      </h2>
    </div>
  );
};