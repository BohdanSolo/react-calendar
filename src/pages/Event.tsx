import React, { useState } from "react";
import EventCalendar from "../components/EventCalendar";
import { Button, Layout, Modal, Row } from "antd";
import EventForm from "../components/EventForm";

const Event = () => {
  const [modalVisible, setModalVisible] = useState<boolean>(false);

  const showModal = () => setModalVisible(true);
  const handleCancel = () => setModalVisible(false);

  return (
    <Layout>
      <EventCalendar events={[]} />
      <Row justify={"center"}>
          <Button onClick={showModal}>Add event</Button>
      </Row>
      <>
        <Modal
          title={"Create new event"}
          visible={modalVisible}
          footer={null}
          onCancel={handleCancel}
        >
          <EventForm />
        </Modal>
      </>
    </Layout>
  );
};

export default Event;
