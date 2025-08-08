# Contact Form - React useForm Hook Demo

A comprehensive demonstration of building a contact form using React and the `useForm` hook from the react-hook-form library. This project showcases form validation, error handling, responsive design, and modern React development practices.

## 🚀 Live Demo

The application demonstrates a fully functional contact form with real-time validation, smooth animations, and professional styling.

## 📋 Project Overview

This project was built to demonstrate understanding of React hooks, specifically the `useForm` hook, and the ability to create a functional and user-friendly contact form. The implementation includes comprehensive form validation, responsive design, and excellent user experience.

### Key Features

- **Form Validation**: Comprehensive validation for all form fields
- **Real-time Feedback**: Instant validation feedback as users type
- **Responsive Design**: Mobile-first design that works on all devices
- **Accessibility**: Proper ARIA labels and keyboard navigation
- **Loading States**: Visual feedback during form submission
- **Success Notifications**: Clear confirmation when form is submitted
- **Character Counting**: Real-time character count for message field
- **Error Handling**: Graceful error handling with clear error messages

## 🛠️ Technical Stack

- **React 19.1.0**: Modern React with hooks
- **React Hook Form**: Efficient form state management
- **Tailwind CSS**: Utility-first CSS framework
- **Shadcn/UI**: High-quality, accessible UI components
- **Vite**: Fast build tool and development server
- **TypeScript/JavaScript**: Type-safe development

## 📦 Installation

### Prerequisites

- Node.js (version 18 or higher)
- npm or pnpm package manager

### Setup Instructions

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd contact-form-app
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   pnpm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   # or
   pnpm run dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:5173` to view the application.

## 🎯 Usage

### Form Fields

The contact form includes three required fields:

1. **Name** (required)
   - Minimum 2 characters
   - Maximum 50 characters
   - Only letters and spaces allowed

2. **Email** (required)
   - Must be a valid email format
   - Real-time email validation

3. **Message** (required)
   - Minimum 10 characters
   - Maximum 500 characters
   - Character counter displayed

### Form Validation

The form provides comprehensive validation with:

- **Required field validation**: Prevents submission with empty fields
- **Format validation**: Ensures email is in correct format
- **Length validation**: Enforces minimum and maximum character limits
- **Real-time feedback**: Visual indicators for valid/invalid fields
- **Error messages**: Clear, helpful error messages for each validation rule

### User Experience Features

- **Visual Feedback**: Green borders for valid fields, red for invalid
- **Loading States**: Spinner animation during form submission
- **Success Notification**: Confirmation message after successful submission
- **Form Reset**: Automatic form clearing after submission
- **Responsive Design**: Optimized for desktop, tablet, and mobile devices

## 🏗️ Project Structure

```
contact-form-app/
├── public/
├── src/
│   ├── components/
│   │   ├── ui/              # Shadcn/UI components
│   │   └── ContactForm.jsx  # Main contact form component
│   ├── assets/              # Static assets
│   ├── App.jsx              # Main application component
│   ├── App.css              # Global styles and custom CSS
│   ├── index.css            # Base styles
│   └── main.jsx             # Application entry point
├── index.html               # HTML template
├── package.json             # Project dependencies
├── README.md                # Project documentation
├── testing-results.md       # Testing documentation
└── vite.config.js           # Vite configuration
```

## 🧪 Testing

The application has been thoroughly tested for:

- ✅ Form validation functionality
- ✅ User input handling
- ✅ Error message display
- ✅ Success notification
- ✅ Responsive design
- ✅ Accessibility features
- ✅ Browser compatibility

See `testing-results.md` for detailed testing documentation.

## 🎨 Styling and Design

### Design Principles

- **Modern UI**: Clean, professional interface design
- **Responsive Layout**: Mobile-first approach with breakpoints
- **Accessibility**: WCAG compliant with proper contrast ratios
- **Smooth Animations**: CSS transitions for enhanced user experience
- **Visual Hierarchy**: Clear typography and spacing

### CSS Architecture

- **Tailwind CSS**: Utility-first CSS framework for rapid development
- **Custom CSS**: Additional styles for animations and specific components
- **CSS Variables**: Theme-based color system for consistency
- **Responsive Design**: Breakpoint-based responsive utilities

## 🔧 Development

### Available Scripts

- `npm run dev`: Start development server
- `npm run build`: Build for production
- `npm run preview`: Preview production build
- `npm run lint`: Run ESLint

### Development Features

- **Hot Module Replacement**: Instant updates during development
- **Debug Information**: Development-only debug panel showing form state
- **Error Overlay**: Helpful error messages during development
- **Fast Refresh**: Preserves component state during updates

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## 🚀 Deployment

### Build for Production

```bash
npm run build
```

The build artifacts will be stored in the `dist/` directory.

### Deployment Options

- **Vercel**: Automatic deployment from Git repository
- **Netlify**: Drag and drop deployment or Git integration
- **GitHub Pages**: Static site hosting
- **Any static hosting service**: Upload the `dist/` folder

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🙏 Acknowledgments

- React Hook Form team for the excellent form library
- Tailwind CSS team for the utility-first CSS framework
- Shadcn for the beautiful UI components
- Vite team for the fast build tool

## 📞 Contact

For questions or feedback about this project, please use the contact form in the application or reach out through the repository issues.

---

**Built with ❤️ using React and modern web technologies**

