import React  from 'react';
import { Form, Input, Button } from 'antd';
import { FormComponentProps } from 'antd/es/form';
const { TextArea } = Input;
interface UserFormProps extends FormComponentProps {
  submit: Function | null
}
class TextInput extends React.Component<UserFormProps, any> {
  render(){
    const form = this.props.form;
    const { getFieldDecorator } = form;
    const onSubmit = (e:React.FormEvent)=>{
      e.preventDefault();
      const text = form.getFieldValue('text');
      if (this.props.submit){
        this.props.submit(text);
      }
    }
    return (
      <Form onSubmit={onSubmit} className='TextInput'>
        <Form.Item>
          {getFieldDecorator('text')(
            <TextArea rows={4} />
          )
          }
          <Button block htmlType="submit">确认</Button>
        </Form.Item>
      </Form>
    )
  }
}

export default Form.create<UserFormProps>()(TextInput);