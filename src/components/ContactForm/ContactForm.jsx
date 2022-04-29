import { Formik, Form, Field } from 'formik';
import { nanoid } from 'nanoid';

const nameInputId = nanoid();
const numberInputId = nanoid();

export const ContactForm = ({onFormSubmit}) => (
    <Formik
    initialValues={{
      name: '',
      number: ''
    }}
    onSubmit={onFormSubmit}>
      <Form>
        <label htmlFor={nameInputId}>Name</label>
        <Field
          id={nameInputId}
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />

        <label htmlFor={numberInputId}>Number</label>
        <Field
          id={numberInputId}
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />

        <button type='submit'>Add contact</button>
      </Form>
  </Formik>
)