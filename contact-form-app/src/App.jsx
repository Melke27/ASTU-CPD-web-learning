import ContactForm from './components/ContactForm.jsx'
import './App.css'

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            React useForm Hook Demo
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            This is a demonstration of building a contact form using React and the useForm hook 
            from react-hook-form library. The form includes validation, error handling, and 
            responsive design.
          </p>
        </div>

        {/* Contact Form */}
        <ContactForm />

        {/* Features Section */}
        <div className="mt-12 bg-white rounded-lg shadow-lg p-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">
            Features Implemented
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-gray-700">Form Validation</h3>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex items-center">
                  <span className="text-green-500 mr-2">✓</span>
                  Required field validation
                </li>
                <li className="flex items-center">
                  <span className="text-green-500 mr-2">✓</span>
                  Email format validation
                </li>
                <li className="flex items-center">
                  <span className="text-green-500 mr-2">✓</span>
                  Character length limits
                </li>
                <li className="flex items-center">
                  <span className="text-green-500 mr-2">✓</span>
                  Real-time validation feedback
                </li>
              </ul>
            </div>
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-gray-700">User Experience</h3>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex items-center">
                  <span className="text-green-500 mr-2">✓</span>
                  Responsive design
                </li>
                <li className="flex items-center">
                  <span className="text-green-500 mr-2">✓</span>
                  Loading states
                </li>
                <li className="flex items-center">
                  <span className="text-green-500 mr-2">✓</span>
                  Success notifications
                </li>
                <li className="flex items-center">
                  <span className="text-green-500 mr-2">✓</span>
                  Accessible form labels
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Technical Details */}
        <div className="mt-8 bg-gray-50 rounded-lg p-6">
          <h3 className="text-lg font-semibold text-gray-700 mb-4">Technical Implementation</h3>
          <div className="grid md:grid-cols-3 gap-4 text-sm text-gray-600">
            <div className="bg-white p-4 rounded-md feature-card">
              <h4 className="font-medium text-gray-800 mb-2">React Hook Form</h4>
              <p>Efficient form state management with minimal re-renders</p>
            </div>
            <div className="bg-white p-4 rounded-md feature-card">
              <h4 className="font-medium text-gray-800 mb-2">Tailwind CSS</h4>
              <p>Utility-first CSS framework for rapid styling</p>
            </div>
            <div className="bg-white p-4 rounded-md feature-card">
              <h4 className="font-medium text-gray-800 mb-2">Shadcn/UI</h4>
              <p>High-quality, accessible UI components</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App

