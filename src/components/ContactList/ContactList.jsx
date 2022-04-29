import { ContactListItem } from "components/ContactListItem/ContactListItem"

export const ContactList = ({filteredContacts, onDeleteBtbClick}) => (
    <ul>
        {filteredContacts.map(contact => (
        <ContactListItem onDeleteBtbClick={onDeleteBtbClick} key={contact.id} contact={contact}></ContactListItem>))}
    </ul>
)