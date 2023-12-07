# PicMeUp

![picmeup-high-resolution-logo-transparent](https://github.com/syarwinaaa09/PicMeUp/assets/114587158/f9cc8065-aaca-40a8-a859-2acf8c59a4ac)

PicMeUp is an Instagram-inspired project that demonstrates the power and flexibility of modern web development tools and libraries. 
With a focus on performance, scalability and user experience, this project provides a solid foundation for building social media platforms.

### Features
* User authentication and authorisation using NextAuth.
* Real-time updates with Firebase v9.
* State management with Recoil for seamless and efficient UI updates.
* Responsive design with Tailwind CSS for a visually appealing and mobile-friendly experience.
* Server-side rendering and routing with Next.js for improved performance.

### Technologies Used
* REACT.JS
* Next.js
* Tailwind CSS
* Firebase v9
* NextAuth
* Recoil

### Getting Started
To get started with PicMeUp, follow the steps below:
1. Clone the repository: `git clone https://github.com/syarwinaaa09/PicMeUp.git`
2. Navigate to the project directory: `cd PicMeUp`
3. Install dependencies: `npm install`

### Installation
Once you have cloned the repository and installed the dependencies, you'll need to set up the project environment.
```
# Copy the example environment variables
cp .env.example .env.local
```
Update the `.env.local` file with your Firebase configuration and other necessary variables. 

### Configuration
Configure Firebase by creating a new project on the Firebase console. 
Obtain the Firebase configuration and update the `.env.local` file accordingly.
```
NEXT_PUBLIC_FIREBASE_API_KEY=your-api-key
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=your-auth-domain
NEXT_PUBLIC_FIREBASE_PROJECT_ID=your-project-id
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=your-storage-bucket
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=your-messaging-sender-id
NEXT_PUBLIC_FIREBASE_APP_ID=your-app-id
NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID=your-measurement-id
```

### Usage
Start the development server:
```
npm run dev
```
Visit http://localhost:3000 in your browser to view PicMeUp.

### Contributing
We welcome contributions! If you'd like to contribute to PicMeUp, please follow our Contribution Guidelines.

### License
PicMeUp is open-source software licensed under the MIT License. 
