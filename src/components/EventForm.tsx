import React from "react";
import { Button, DatePicker, Form, Input, Row, Select } from "antd";
import { rules } from "../utils/rules";

const EventForm = () => {
  return (
    <Form>
      <Form.Item
        name="Write a description of the event"
        rules={[rules.required()]}
      >
        <Input
          placeholder="Write a description of the event"
          /*value={username}
          onChange={handleUserName}*/
        />
      </Form.Item>
      <Form.Item
        name="Select a date"
        rules={[rules.required("Date of the event is required")]}
      >
        <DatePicker style={{ width: 250 }} />
      </Form.Item>
      <Form.Item
        name="Select a date"
        rules={[rules.required("Date of the event is required")]}
      >
        <Select defaultValue="lucy" style={{ width: 250 }}>
          <Select.Option value="jack">Jack</Select.Option>
          <Select.Option value="lucy">Lucy</Select.Option>
          <Select.Option value="disabled" disabled>
            Disabled
          </Select.Option>
          <Select.Option value="Yiminghe">yiminghe</Select.Option>
        </Select>
      </Form.Item>
      <Row justify={"end"}>
        <Form.Item>
          <Button type="primary" htmlType="submit">
            Create
          </Button>
        </Form.Item>
      </Row>
    </Form>
  );
};

export default EventForm;
