// Suite
describe('Address Book',function(){

  var addressBook,thisContact;

  // Runs before each spec
  beforeEach(function(){
    addressBook=new AddressBook();
    thisContact=new Contact();
  })

  // Spec-1
  it('Should be able to add a contact',function(){
    addressBook.addContact(thisContact);
    expect(addressBook.getContact(0)).toBe(thisContact);
  })

  // Spec-2
  it('Should be able to delete a contact',function(){
    addressBook.addContact(thisContact);
    addressBook.deleteContact(0);
    expect(addressBook.getContact(0)).not.toBeDefined();
  })

})
// Async test suite
describe('Async Address Book',function(){
  var addressBook=new AddressBook();
  beforeEach(function(done){
    addressBook.getInitialContacts(function(){
      done();
    })
  })
  it('Should grab intital contacts',(done)=>{
    expect(addressBook.initialComplete).toBe(true);
    done();
  })
})