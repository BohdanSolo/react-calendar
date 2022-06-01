import React from 'react';

import {Calendar} from 'antd';
import {IEvent} from "../models/IEvent";
import {Moment} from "moment";

interface EventCalendarProps {
    events: IEvent[]
}
1
const EventCalendar = ({events}: EventCalendarProps): JSX.Element => {
    function dateCellRender(value: Moment) {
        const formatedDate = value.format().slice(0, 10);
        const currentDayEvents = events.filter(ev => ev.date === formatedDate)
        return (
            <div>
                {currentDayEvents.map((item, i) => (
                    <div key={i}>{item.description}</div>
                ))
                }
            </div>
        );
    }
    return (
        <Calendar dateCellRender={dateCellRender}/>
    );
};

export default EventCalendar;