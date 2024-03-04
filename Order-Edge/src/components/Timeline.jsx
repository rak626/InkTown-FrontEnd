import React from 'react';

const TimelineItem = ({ step, content, active }) => {
  return (
    <div
      className={`relative flex items-center p-4 rounded-lg ${
        active ? 'bg-blue-500 text-white' : 'bg-gray-100 text-gray-700'
      }`}
    >
      <div
        className={`absolute -left-5 h-full w-1 rounded-full bg-blue-500 ${
          active ? '' : 'opacity-20'
        }`}
      />
      <div className="ml-4">
        <span className="text-sm font-medium">{step}</span>
        <p className="mt-1 text-gray-600">{content}</p>
      </div>
    </div>
  );
};

const Timeline = ({ datas }) => {
  return (
    <div className="flex flex-col space-y-4">
      {datas.map((data, index) => (
        <TimelineItem
          key={index}
          step={data?.createdAt}
          content={data.updatedBy}
          active={index === data.length - 1} // Assuming the last step is active
        />
      ))}
    </div>
  );
};

export default Timeline;
