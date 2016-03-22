const prompt = require('prompt')
const contacts = require('./contacts.js')

prompt.start()
prompt.get(['choice'], (err, result) => {
  console.log(result.choice);
  contacts.list('./etc/contacts.json', (err, result) => {
    console.log(parsed);
  });
  // now let's try to make a call to a callback in a module.
})
