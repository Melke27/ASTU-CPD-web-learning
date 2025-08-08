import { useForm } from 'react-hook-form';
import { Button } from '@/components/ui/button.jsx';
import { useState } from 'react';

const ContactForm = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    watch
  } = useForm({
    mode: 'onChange', // Validate on change for better UX
    defaultValues: {
      name: '',
      email: '',
      message: ''
    }
  });

  // Watch form values to show real-time validation feedback
  const watchedFields = watch();

  const onSubmit = async (data) => {
    setIsSubmitting(true);
    
    // Simulate API call delay
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    console.log('Form submitted with data:', data);
    
    setIsSubmitted(true);
    setIsSubmitting(false);
    
    // Reset form after successful submission
    reset();
    
    // Hide success message after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false);
    }, 3000);
  };

  const onError = (errors) => {
    console.log('Form validation errors:', errors);
  };

  return (
    <div className="max-w-md mx-auto bg-white p-8 rounded-lg shadow-lg contact-form-container">
      <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">
        Contact Us
      </h2>
      
      {isSubmitted && (
        <div className="mb-4 p-4 bg-green-100 border border-green-400 text-green-700 rounded-md success-message">
          <p className="text-sm font-medium">
            ✓ Thank you! Your message has been sent successfully.
          </p>
        </div>
      )}

      <form onSubmit={handleSubmit(onSubmit, onError)} className="space-y-6">
        {/* Name Field */}
        <div className="form-group">
          <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
            Name *
          </label>
          <input
            id="name"
            type="text"
            className={`w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors ${
              errors.name 
                ? 'border-red-500 bg-red-50' 
                : watchedFields.name 
                  ? 'border-green-500 bg-green-50' 
                  : 'border-gray-300'
            }`}
            placeholder="Enter your full name"
            {...register('name', {
              required: 'Name is required',
              minLength: {
                value: 2,
                message: 'Name must be at least 2 characters long'
              },
              maxLength: {
                value: 50,
                message: 'Name must not exceed 50 characters'
              },
              pattern: {
                value: /^[a-zA-Z\s]+$/,
                message: 'Name can only contain letters and spaces'
              }
            })}
          />
          {errors.name && (
            <p className="mt-1 text-sm text-red-600 flex items-center error-message">
              <span className="mr-1">⚠</span>
              {errors.name.message}
            </p>
          )}
        </div>

        {/* Email Field */}
        <div className="form-group">
          <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
            Email *
          </label>
          <input
            id="email"
            type="email"
            className={`w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors ${
              errors.email 
                ? 'border-red-500 bg-red-50' 
                : watchedFields.email && !errors.email
                  ? 'border-green-500 bg-green-50' 
                  : 'border-gray-300'
            }`}
            placeholder="Enter your email address"
            {...register('email', {
              required: 'Email is required',
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: 'Please enter a valid email address'
              }
            })}
          />
          {errors.email && (
            <p className="mt-1 text-sm text-red-600 flex items-center error-message">
              <span className="mr-1">⚠</span>
              {errors.email.message}
            </p>
          )}
        </div>

        {/* Message Field */}
        <div className="form-group">
          <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
            Message *
          </label>
          <textarea
            id="message"
            rows={4}
            className={`w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors resize-vertical ${
              errors.message 
                ? 'border-red-500 bg-red-50' 
                : watchedFields.message && !errors.message
                  ? 'border-green-500 bg-green-50' 
                  : 'border-gray-300'
            }`}
            placeholder="Enter your message here..."
            {...register('message', {
              required: 'Message is required',
              minLength: {
                value: 10,
                message: 'Message must be at least 10 characters long'
              },
              maxLength: {
                value: 500,
                message: 'Message must not exceed 500 characters'
              }
            })}
          />
          {errors.message && (
            <p className="mt-1 text-sm text-red-600 flex items-center error-message">
              <span className="mr-1">⚠</span>
              {errors.message.message}
            </p>
          )}
          <p className="mt-1 text-xs text-gray-500">
            {watchedFields.message ? watchedFields.message.length : 0}/500 characters
          </p>
        </div>

        {/* Submit Button */}
        <Button
          type="submit"
          disabled={isSubmitting}
          className="w-full bg-blue-600 hover:bg-blue-700 disabled:bg-blue-400 disabled:cursor-not-allowed text-white font-medium py-2 px-4 rounded-md transition-colors duration-200 contact-form-button"
        >
          {isSubmitting ? (
            <span className="flex items-center justify-center">
              <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
              Sending...
            </span>
          ) : (
            'Send Message'
          )}
        </Button>
      </form>

      {/* Form State Debug Info (for development) */}
      {process.env.NODE_ENV === 'development' && (
        <div className="mt-6 p-4 bg-gray-100 rounded-md">
          <h3 className="text-sm font-medium text-gray-700 mb-2">Debug Info:</h3>
          <pre className="text-xs text-gray-600 overflow-auto">
            {JSON.stringify({ 
              formValues: watchedFields, 
              errors: Object.keys(errors),
              isSubmitting,
              isSubmitted 
            }, null, 2)}
          </pre>
        </div>
      )}
    </div>
  );
};

export default ContactForm;

