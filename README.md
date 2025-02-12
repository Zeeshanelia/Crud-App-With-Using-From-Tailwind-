Crud with Using Form 


issue i facing in this app when i creating this.

<!-- In  handleInput function,   setting the form state in a way that might cause some of your inputs to become uncontrolled. 
Specifically, you're setting the state with only the updated field instead of merging it with the existing state, which results in resetting all other form fields to undefined.   like this  --> 
 
 setFrom ({ [key] : value}) 

 <!-- This causes only the updated field ([key]) to be set, and the other fields are effectively left as undefined, which can lead to the warning you mentioned. -->



 Solution:
<!-- You should spread the previous form state into the new state to avoid resetting the other fields. This will ensure that all form fields retain their current values unless explicitly updated. -->
Here updated handleInput function:

const handleInput = (e) => {
  const input = e.target;
  const value = input.value;
  const key = input.name;
  
  <!-- // Merge the previous form state and only update the changed field -->
  setFrom(prevState => ({
    ...prevState,
    [key]: value
  }));
}

Explanation:
<!-- The setFrom function is now called with a function that takes the previous state (prevState) and merges it with the updated value for the specific key (field). This way, all fields are preserved unless specifically updated. -->


Empty Form Reset:
 <!-- When you reset the form fields after submitting, ensure that form values are properly reset to a valid state (e.g., an empty string "" instead of undefined).
Correct the Initial Form State: Make sure that when you initialize the form state, it has proper default values (e.g., empty strings or valid initial values for all fields). -->

For example :

const [form, setFrom] = useState({
  fullname: '',
  class: '',
  roll: '',
  subject: '',
  dob: ""
});

