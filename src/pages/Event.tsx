import React, { useEffect, useState } from "react";

import { useNavigate } from "react-router-dom";
import { Button, Layout, Modal, Row } from "antd";

import EventCalendar from "../components/EventCalendar";
import EventForm from "../components/EventForm";
import { useActions } from "../hooks/useActions";
import { useAppSelector } from "../hooks/reduxHooks";
import { RootState } from "../redux/store";
import { IEvent } from "../models/IEvent";
import { RouteNames } from "../App";


const eventState = (state: RootState) => state.events;
const authState = (state: RootState) => state.auth;

const Event = () => {
  const [modalVisible, setModalVisible] = useState<boolean>(false);
  const showModal = () => setModalVisible(true);
  const handleCancel = () => setModalVisible(false);
  const navigate = useNavigate();

  const { fetchGuests, createEvent, fetchEvents } = useActions();
  const { guests, events, isLoading } = useAppSelector(eventState);
  const { user, error } = useAppSelector(authState);

  useEffect(() => {
    fetchGuests();
    fetchEvents(user.username);
  }, []);

  const submit = (event: IEvent) => {
    createEvent(event);
    setTimeout(() => setModalVisible(false), 1000);
  };

  if (error) {
    navigate(RouteNames.EVENT);
  }
  return (
    <Layout>
        <Row justify={"center"}>
            <Button onClick={showModal}>Add event</Button>
        </Row>
      <EventCalendar events={events} />
      <Modal
        title={"Create new event"}
        visible={modalVisible}
        footer={null}
        onCancel={handleCancel}
      >
        <EventForm guests={guests} submit={submit} isLoading={isLoading} />
      </Modal>
    </Layout>
  );
};

export default Event;
