import yargs from "yargs";

import * as contactsService from "./contacts.js";

const invokeAction = async ({ action, id, name, email, phone }) => {
  switch (action) {
    case "list":
      const contactsList = await contactsService.listContacts();
      console.table(contactsList);
      break;

    case "get":
      const oneContact = await contactsService.getContactById(id);
      console.log(oneContact);
      break;

    case "add":
      const newContact = await contactsService.addContact({
        name,
        email,
        phone,
      });
      return console.log(newContact);
      break;

    case "remove":
      const deleteContact = await contactsService.removeContact(id);
      console.log(deleteContact);
      break;

    default:
      console.warn("\x1B[31m Unknown action type!");
  }
};

const { argv } = yargs(process.argv.slice(2));
invokeAction(argv);
