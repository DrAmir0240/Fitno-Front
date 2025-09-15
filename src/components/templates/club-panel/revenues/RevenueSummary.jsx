export const RevenueSummary = ({ reports }) => {
  return (
    <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-7'>
      {reports.map(item => (
        <div key={item.id} className='bg-[#F5F6F8] p-4 rounded-xl'>
          <h5 className='text-sm md:text-base'>{item.title} :</h5>
          <p className='text-transparent bg-clip-text bg-gradient-to-b from-[#1DB7C2] to-[#413B89] mt-1 font-medium text-lg md:text-xl'>
            {item.count}
          </p>
        </div>
      ))}
    </div>
  )
}

