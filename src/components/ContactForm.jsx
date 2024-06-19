
import { TextField, MenuItem, Checkbox, FormControlLabel } from '@mui/material';




const topics = [
  { value: 'general', label: 'General Inquiry' },
  { value: 'support', label: 'Support' },
  { value: 'feedback', label: 'Feedback' },
];

const ContactForm = () => {
  return (
      <div className="flex justify-center items-center min-h-screen bg-gray-100">
        <div className="p-8 rounded-lg px-20 w-[900px]">
            <p className='flex justify-center text-slate-500 font-bold pb-5'>Get In Touch</p>
          <h2 className="text-3xl font-bold text-center text-color mb-8">Contact Us</h2>
          <p className="text-center text-gray-600 mb-8">At our medical center, we value your feedback and inquiries. 
          Whether you have questions about our services, need assistance, or want to provide feedback,
           our team is here to help. Please fill out the form below, 
          and one of our representatives will get back to you promptly. We look forward to connecting with you!</p>
          <form>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              <TextField label="First name" variant="outlined" fullWidth />
              <TextField label="Last name" variant="outlined" fullWidth />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              <TextField label="Email" variant="outlined" fullWidth />
              <TextField label="Phone number" variant="outlined" fullWidth />
            </div>
            <div className="mb-4">
              <TextField
                select
                label="Choose a topic"
                variant="outlined"
                fullWidth
              >
                {topics.map((option) => (
                  <MenuItem key={option.value} value={option.value}>
                    {option.label}
                  </MenuItem>
                ))}
              </TextField>
            </div>
            <div className="mb-4">
              <TextField
                label="Message"
                variant="outlined"
                fullWidth
                multiline
                rows={4}
              />
            </div>
            <div className="mb-4">
              <FormControlLabel
                control={<Checkbox />}
                label="I accept the terms"
              />
            </div>
            <div className='flex justify-center'>
            <button type="submit" className="bg-color pr-4 pl-4 pt-2 pb-2 rounded-2xl text-white hover:bg-white hover:text-teal-800 hover:border-2 hover:border-color m-3" >
              Submit
            </button>
            </div>
            
          </form>
        </div>
      </div>
  );
};

export default ContactForm;
