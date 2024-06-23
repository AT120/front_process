import { Button, Form, Input, InputNumber, Modal } from 'antd'

import { useState } from 'react'
export const CreateOrEditVacancy = ({
  onFinish,
  buttonText,
  initialValues,
}: {
  onFinish: (values: { name: string; description: string; amountOfPeople: number }) => void
  buttonText: string
  initialValues?: {
    name: string
    description: string
    amountOfPeople: number
  }
}) => {
  const [open, setOpen] = useState<boolean>(false)
  return (
    <>
      <Modal
        open={open}
        onCancel={() => {
          setOpen(false)
        }}
        footer={null}
      >
        <Form
          onFinish={onFinish}
          initialValues={initialValues}
        >
          <Form.Item
            name='name'
            label='Название'
          >
            <Input />
          </Form.Item>
          <Form.Item
            name='description'
            label='Описание'
          >
            <Input />
          </Form.Item>
          <Form.Item
            name='amountOfPeople'
            label='Количество людей'
          >
            <InputNumber />
          </Form.Item>

          <Form.Item>
            <Button htmlType='submit'>{buttonText}</Button>
          </Form.Item>
        </Form>
      </Modal>
      <Button
        onClick={() => {
          setOpen(true)
        }}
      >
        {buttonText}
      </Button>
    </>
  )
}