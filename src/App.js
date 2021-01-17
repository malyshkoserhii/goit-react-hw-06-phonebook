import ContactForm from './components/ContactForm';
import ContactList from './components/ContactList';
import Filter from './components/Filter';

const App = () => {
  // getExistedContact = name => {
  //   const { contacts } = this.state;
  //   return contacts.find(contact => contact.name === name);
  // };

  return (
    <>
      <ContactForm
      // exsisted={this.getExistedContact}
      />
      <Filter />
      <ContactList />
    </>
  );
};

export default App;
