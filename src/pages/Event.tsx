import React, { useEffect, useState } from "react";
import EventCalendar from "../components/EventCalendar";
import { Button, Layout, Modal, Row } from "antd";
import EventForm from "../components/EventForm";
import { useActions } from "../hooks/useActions";
import { useAppSelector } from "../hooks/reduxHooks";
import { RootState } from "../redux/store";
import { IEvent } from "../models/IEvent";

const eventState = (state: RootState) => state.events;
const authState = (state: RootState) => state.auth;

const Event = () => {
  const [modalVisible, setModalVisible] = useState<boolean>(false);
  const showModal = () => setModalVisible(true);
  const handleCancel = () => setModalVisible(false);

  const { fetchGuests, createEvent, fetchEvents } = useActions();
  const { guests, events, isLoading } = useAppSelector(eventState);
  const { user } = useAppSelector(authState);

  useEffect(() => {
    fetchGuests();
    fetchEvents(user.username);
  }, []);

  const submit = (event: IEvent) => {
    createEvent(event);
    setTimeout(() => setModalVisible(false),1000);
  };

  return (
    <Layout>
      <EventCalendar events={events} />
      <Row justify={"center"}>
        <Button onClick={showModal}>Add event</Button>
      </Row>
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
