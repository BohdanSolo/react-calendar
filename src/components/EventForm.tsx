import React, { useState } from "react";

import { Button, DatePicker, Form, Input, Row, Select } from "antd";

import { rules } from "../utils/rules";
import { useAppSelector } from "../hooks/reduxHooks";
import { IGuest } from "../models/IUser";
import { IEvent } from "../models/IEvent";
import { Moment } from "moment";
import { RootState } from "../redux/store";


interface EventFormProps {
  guests: IGuest[];
  submit: (event: IEvent) => void;
  isLoading: boolean;
}

const stateAuth = (state: RootState) => state.auth;
const EventForm = ({ guests, submit, isLoading }: EventFormProps) => {
  const [event, setEvent] = useState<IEvent>({
    guest: "",
    author: "",
    date: "",
    description: "",
  });
  const { user } = useAppSelector(stateAuth);

  //Event set functions
  const setGuest = (guest: string): void => {
    setEvent({ ...event, guest });
  };
  const setDescription = (e: React.FormEvent<HTMLInputElement>): void => {
    setEvent({ ...event, description: e.currentTarget.value });
  };
  const setDate = (date: Moment | null): void => {
    if (date) {
      const eventDate = date.format().slice(0, 10);
      setEvent({ ...event, date: eventDate });
    }
  };

  const submitForm = () => {
    submit({ ...event, author: user.username });
  };

  return (
    <Form onFinish={submitForm}>
      <Form.Item
        name="Write a description of the event"
        rules={[rules.required()]}
      >
        <Input
          placeholder="Write a description of the event"
          value={event.description}
          onChange={setDescription}
        />
      </Form.Item>
      <Form.Item
        name="Select a date"
        rules={[
          rules.required("Date of the event is required"),
          rules.isDateAfter("You can't create the event in the past"),
        ]}
      >
        <DatePicker style={{ width: 250 }} onChange={setDate} />
      </Form.Item>
      <Form.Item name="Select guest" rules={[rules.required()]}>
        <Select
          style={{ width: 250 }}
          onChange={setGuest}
          placeholder={"Select guests"}
        >
          {guests.map((guest) => (
            <Select.Option value={guest.name} key={guest.name}>
              {guest.name}
            </Select.Option>
          ))}
        </Select>
      </Form.Item>
      <Row justify={"end"}>
        <Form.Item>
          <Button type="primary" htmlType="submit" loading={isLoading}>
            Create
          </Button>
        </Form.Item>
      </Row>
    </Form>
  );
};

export default EventForm;
