import React, {useState} from "react";
import EventCalendar from "../components/EventCalendar";
import { Button, Layout, Modal, Row } from "antd";

const Event = ()=> {
  const [modalVisible, setModalVisible] = useState<boolean>(false);

  const showModal = () => setModalVisible(true);
  const handleCancel = () => setModalVisible(false);

  return (
    <Layout>
      <EventCalendar events={[]} />
      <Row>
        <Button onClick={showModal}>Add event</Button>
      </Row>
      <>
        <Modal
          title={"Add new event"}
          visible={modalVisible}
          footer={null}
          onCancel={handleCancel}
        />
      </>
    </Layout>
  );
};

export default Event;
