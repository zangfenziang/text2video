import React  from 'react';
import { Form, Input, Button } from 'antd';
import { FormComponentProps } from 'antd/es/form';
const { TextArea } = Input;
class TextInput extends React.Component<FormComponentProps, any> {
  render(){
    const form = this.props.form;
    const { getFieldDecorator } = form;
    const onSubmit = (e:React.FormEvent)=>{
      e.preventDefault();
      const text = form.getFieldValue('text');
      console.log(text);
    }
    return (
      <Form onSubmit={onSubmit} className='TextInput'>
        <Form.Item>
          {getFieldDecorator('text')(
            <TextArea allowClear rows={4} />
          )
          }
          <Button block htmlType="submit">确认</Button>
        </Form.Item>
      </Form>
    )
  }
}

export default Form.create<FormComponentProps>()(TextInput);