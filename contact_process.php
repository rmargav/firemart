<?php
// 1. Get and clean the form data
$name = htmlspecialchars(trim($_POST['name']));
$email = filter_var(trim($_POST['email']), FILTER_SANITIZE_EMAIL);
$subject_input = htmlspecialchars(trim($_POST['subject']));
$message = htmlspecialchars(trim($_POST['message']));

// 2. Email Settings
$to = "inquiry@firemart.in"; 
$subject = "Website Inquiry: " . $subject_input;
// IMPORTANT: Keep this as an email address from YOUR domain so the server doesn't block it as spam.

// We use Reply-To so that when you click 'reply' in Gmail, it goes to the customer's email.
$headers = "From: noreply@firemart.in\r\n"; 
$headers .= "Reply-To: $email\r\n";
$headers .= "X-Mailer: PHP/" . phpversion();

// 3. Build the email body message
$body = "You have a new message from your website contact form:\n\n";
$body .= "Name: $name\n";
$body .= "Email: $email\n";
$body .= "Subject: $subject_input\n";
$body .= "Message:\n$message\n";

// 4. Send the email!
if (filter_var($email, FILTER_VALIDATE_EMAIL)) {
    
    $send = mail($to, $subject, $body, $headers);
    
    if ($send) {
        // Success message and auto-redirect back to contact page after 3 seconds
        echo "<div style='font-family: sans-serif; text-align: center; margin-top: 50px;'>";
        echo "<h2 style='color: #3ab54a;'>Success!</h2>";
        echo "<p>Your message was sent successfully. We will be in touch soon.</p>";
        echo "<p><small>Redirecting you back...</small></p>";
        echo "</div>";
        echo "<meta http-equiv='refresh' content='3;url=contact.html'>"; 
    } else {
        // Server failed to send
        echo "<h2 style='color: red; text-align: center; margin-top: 50px;'>Error!</h2>";
        echo "<p style='text-align: center;'>The server failed to send the message. Please try again later.</p>";
    }
    
} else {
    // User put in a bad email
    echo "<h2 style='color: red; text-align: center; margin-top: 50px;'>Invalid Email</h2>";
    echo "<p style='text-align: center;'>Please go back and enter a valid email address.</p>";
}
?>