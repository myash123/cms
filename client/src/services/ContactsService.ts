import axios from "axios";

const getContactsEndpoint = import.meta.env.VITE_GET_CONTACTS_URL;

const ContactsService = () => {
    const getContacts = async (username: string) => {
        const query = getContactsEndpoint.concat(`/:${username}`);
        const response = await axios.get(query);
        console.log(response);
    }
    return { getContacts };
}

export default ContactsService;