const fs = require('fs').promises;
const patch = require('path');

const contactsPath = patch.join('./db/contacts.json')

const listContacts = async () => {
    try {
        const data = await fs.readFile(contactsPath)
        const contacts = JSON.parse(data)
        console.table(contacts)
    } catch (err) {
        console.log(err.message)
    }
}


const getContactById = async (contactId) => {
    try {
        const data = await fs.readFile(contactsPath)
        const contacts = JSON.parse(data)
        const contact = contacts.find(contact => contact.id === contactId)
        console.table(contact)
    } catch (err) {
        console.log(err.message)
    }
}

const removeContact = async (contactId) => {

    try {
        const data = await fs.readFile(contactsPath);
        const contacts = JSON.parse(data);
        const filterData = contacts.filter(item => item.id !== contactId);
        const str = JSON.stringify(filterData)
        await fs.writeFile(contactsPath, str,)
    } catch (err) {
        console.log(err.message)
    }
}

const addContact = async (name, email, phone) => {

    try {
        const data = await fs.readFile(contactsPath);
        const contacts = JSON.parse(data);
        const id = contacts[contacts.length - 1].id + 1;
        const newContact = {
            id, name, email, phone
        }
        contacts.push(newContact);
        const str = JSON.stringify(contacts)
        await fs.writeFile(contactsPath, str,)
    } catch (err) {
        console.log(err.message)
    }

}


module.exports = {
    listContacts,
    getContactById,
    removeContact,
    addContact
} 