import React from 'react';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';

const VerticalAltTimeline = ({ data }) => {
  return (
    <VerticalTimeline>
      {data.map((item) => (
        <VerticalTimelineElement
          key={item.id}
          className={`flex items-center space-x-4 ${
            item.currentOrderStatus % 2 === 0 ? 'justify-start border-r border-gray-200' : 'justify-end border-l border-gray-200'
          }`}
        >
          <div
            className={`w-5 h-5 rounded-full ${
              item.currentOrderStatus % 2 === 0 ? 'bg-gray-200' : 'bg-gray-300'
            }`}
          />
          <div className="flex-grow">
            <h4 className="text-sm font-medium">{`Order Status: ${item.currentOrderStatus}`}</h4>
            <p className="text-xs text-gray-500">{`Updated at: ${new Date(item.createdAt).toLocaleString()}`}</p>
          </div>
        </VerticalTimelineElement>
      ))}
    </VerticalTimeline>
  );
};

export default VerticalAltTimeline;
