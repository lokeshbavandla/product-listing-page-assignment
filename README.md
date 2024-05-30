## Introduction
This repository contains a Product Listing Page, which is a built on the Next JS framework. This readme file will guide you through the setup process and explain how to run the project locally.

### Project Description:
- Implemented a Search Feature to filter the product based on the Product Title.
- Included animations to make the website user experience smooth.
- Utilized the Image Component of Next Js to better handle the image and optimize the image loading process.
- Made the changes to the next.config.mjs file to accept the images from the third party sites.
- Created a reusable UI components with Tailwind CSS to maintain code and readabilty
- Fetched data from the FakeStore API to showcase the products in the product listing Page using Fetch API
- Implemented a modal pop-up for the Product details, Click on the product to View Details.
- The Whole Site is made responsive across all devices with the media queries to improve and maintain the user experience

## Setup Process

### Prerequisites
Before you begin, make sure you have the following installed on your system:

- Node.js (version 14 or above)
- npm (Node Package Manager) or yarn

### Installation Steps
1. **Clone the repository:**  

```bash
    git clone https://github.com/lokeshbavandla/product-listing-page-assignment.git
```

2. **Navigate to the project directory:** 

```bash
    cd <project-directory>
```

3. **Install dependencies:**

If you're using npm:

```bash
 npm install
```

If you're using yarn:

```bash
 yarn install
```

## Running the Project
Once the dependencies are installed, you can run the Next.js application using the following steps:

### Development Mode
To run the project in development mode:

1. **Start the development server:**  
If you're using npm:

```bash
 npm run dev
```

If you're using yarn:

```bash
 yarn dev
```

2. **Open your browser:**  
Visit `http://localhost:3000` in your web browser. You should see the application running.

## Additional Information
- **Folder Structure:**  
- `src/`: Contains all the source folders of the application.
- `app/`: Contains all the main page and layout files of the application.
- `components/`: Contains reusable React components.
- `public/`: Contains static assets such as images, fonts, etc.

- **Configuration:**  
You can customize various aspects of the Next.js application by modifying configuration files such as `next.config.js`, `package.json`, etc.

- **Deployment:**  
This application can be deployed to various hosting platforms such as Vercel, Netlify, or self-hosted servers.

## Feedback
If you encounter any issues or have feedback/suggestions, please feel free to inform to improve or add additional functionalities to the site.
