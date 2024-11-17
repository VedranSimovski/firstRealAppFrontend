import { submitFormData } from '@/root/app/actions/serverActions';

const ContentForm = () => {

 const handleSubmit = async (event) => {
   event.preventDefault();

    const formData = {
      content: event.target.content.value,
    };

    try {
      const result = await submitFormData(formData);
      console.log('Form submitted successfully:', result);
    } catch (error) {
      console.error('Error submitting form:', error);
    }
  }


  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="content" placeholder="Content" required />
      <button type="submit">Submit</button>
    </form>
  );
}

export default ContentForm;