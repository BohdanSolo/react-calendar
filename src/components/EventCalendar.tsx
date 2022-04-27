import React from 'react';
import { Calendar } from 'antd';
import {IEvent} from "../models/IEvent";

interface EventCalendarProps {
    events: IEvent[]
}

const EventCalendar = (events: EventCalendarProps): JSX.Element => {
    return (
        <Calendar/>
    );
};

export default EventCalendar;