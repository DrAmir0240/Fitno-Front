# Atomic Design Components

This project follows the Atomic Design methodology, which breaks down components into five distinct levels:

## 🧪 Atoms

Basic building blocks that can't be broken down further without losing their functionality.

**Location:** `src/components/atoms/`

**Components:**

- `Button` - Reusable button component with multiple variants and sizes
- `Input` - Form input component with label and error handling
- `Card` - Flexible card component for displaying content with title and subtitle

**Usage:**

```jsx
import { Button, Input, Card } from '../components/atoms';

<Button variant="primary" size="large">Click me</Button>
<Input label="Email" type="email" required />
<Card title="Card Title" subtitle="Card subtitle">
  <p>Card content goes here</p>
</Card>
```

## 🧬 Molecules

Simple combinations of atoms that work together as a unit.

**Location:** `src/components/molecules/`

**Components:**

- `SearchBar` - Combines Input and Button atoms for search functionality

**Usage:**

```jsx
import { SearchBar } from "../components/molecules";

<SearchBar onSearch={handleSearch} placeholder="Search..." />;
```

## 🦠 Organisms

Complex combinations of molecules and atoms that form distinct sections of an interface.

**Location:** `src/components/organisms/`

**Components:**

- `Header` - Complete header with navigation, search, and authentication

**Usage:**

```jsx
import { Header } from "../components/organisms";

<Header
  onSearch={handleSearch}
  onLogin={handleLogin}
  onSignup={handleSignup}
/>;
```

## 📄 Templates

Page-level layouts that define the structure and placement of organisms.

**Location:** `src/components/templates/`

**Components:**

- `MainLayout` - Defines the overall page structure with header, main content, and footer
- `ProfileLayout` - Specialized layout for profile pages with sidebar navigation

**Usage:**

```jsx
import { MainLayout, ProfileLayout } from "../components/templates";

// For regular pages
<MainLayout
  onSearch={handleSearch}
  onLogin={handleLogin}
  onSignup={handleSignup}
>
  <YourPageContent />
</MainLayout>

// For profile pages
<ProfileLayout
  onSearch={handleSearch}
  onLogin={handleLogin}
  onSignup={handleSignup}
>
  <YourProfileContent />
</ProfileLayout>
```

## 📱 Pages

Complete page components that use templates and provide specific content.

**Location:** `src/components/pages/`

**Components:**

- `HomePage` - Complete home page using MainLayout template
- `ProfilePage` - Complete profile page using ProfileLayout template

**Usage:**

```jsx
import { HomePage, ProfilePage } from "../components/pages";

<HomePage />
<ProfilePage />
```

## 📁 File Structure

```
src/components/
├── atoms/           # Basic building blocks
│   ├── Button.js
│   ├── Input.js
│   ├── Card.js
│   └── index.js
├── molecules/       # Simple combinations
│   ├── SearchBar.js
│   └── index.js
├── organisms/       # Complex sections
│   ├── Header.js
│   └── index.js
├── templates/       # Page layouts
│   ├── MainLayout.js
│   ├── ProfileLayout.js
│   └── index.js
├── pages/          # Complete pages
│   ├── HomePage.js
│   ├── ProfilePage.js
│   └── index.js
├── index.js        # Main export file
└── README.md       # This file
```

## 🚀 Benefits of Atomic Design

1. **Reusability** - Components can be easily reused across different parts of the application
2. **Maintainability** - Changes to atoms automatically propagate to all dependent components
3. **Consistency** - Ensures consistent design patterns throughout the application
4. **Scalability** - Easy to add new components following established patterns
5. **Testing** - Components can be tested in isolation

## 🔧 Adding New Components

When adding new components:

1. **Atoms** - Create basic, single-purpose components
2. **Molecules** - Combine 2-3 atoms for specific functionality
3. **Organisms** - Create complex UI sections using molecules and atoms
4. **Templates** - Define page layouts and structure
5. **Pages** - Build complete pages using templates

Always update the appropriate `index.js` file to export new components.

## 🎨 Styling

This project uses Tailwind CSS for styling. Components are designed to be flexible and accept custom classes through the `className` prop.

## 📝 Best Practices

- Keep atoms simple and focused on a single responsibility
- Use props to make components configurable and reusable
- Maintain consistent prop naming across similar components
- Use TypeScript interfaces for better type safety (when applicable)
- Test components in isolation
- Document complex component logic

## 🌐 Routing

The project includes Next.js routing with the following pages:

- `/` - Home page using HomePage component
- `/profile` - Profile page using ProfilePage component

## 🔄 Layout System

Two main layout templates are available:

1. **MainLayout** - For general pages (home, about, contact)
2. **ProfileLayout** - For user profile pages with sidebar navigation

Each layout includes:

- Header with navigation
- Main content area
- Footer
- Responsive design
- Tailwind CSS styling
