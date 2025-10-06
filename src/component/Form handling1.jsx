import React, { useRef } from "react";

function LoginForm() {
  // Refs for email and password inputs
  const emailInputRef = useRef(null);
  const passwordInputRef = useRef(null);

  // Handle form submission
  const handleSubmit = (event) => {
    event.preventDefault();

    // Get values from refs
    const formData = {
      email: emailInputRef.current.value,
      password: passwordInputRef.current.value,
    };

    // Log the form data
    console.log("Email:", formData.email);
    console.log("Password: " , formData.password)

    // Clear fields
    emailInputRef.current.value = "";
    passwordInputRef.current.value = "";

    // Set focus back to email field
    emailInputRef.current.focus();
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>