import React from 'react'

const AchievementCard = ({ title, event, date }) => {
  return (
    <div className='p-[20px] flex flex-col gap-[5px] bg-cyanOpacity5 rounded-[10px] border-[3px] border-cyanOpacity'>
      <h3 className='font-bold text-[1.5rem]'>{title}</h3>
      <p className='font-light text-[12px]'>{event}</p>
      <p className='font-light text-[12px]'>{date}</p>
    </div>
  )
}

export default AchievementCard