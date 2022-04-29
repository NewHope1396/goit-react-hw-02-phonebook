

export const ContactListItem = ({contact, onDeleteBtbClick}) => (
    <li>
        <p>{contact.name}: {contact.number}</p>
        <button onClick={() => onDeleteBtbClick(contact.id)} type="button">Delete</button>
    </li>
)