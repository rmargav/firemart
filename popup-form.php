<?php
// 1. Get and clean the popup form data
$name = htmlspecialchars(trim($_POST['name']));
$contact_info = htmlspecialchars(trim($_POST['contact'])); // Captures Phone OR Email
$category = htmlspecialchars(trim($_POST['category']));
$message = htmlspecialchars(trim($_POST['message']));

// 2. Email Settings
$to = "inquiry@firemart.in"; 
$subject = "New Popup Inquiry: " . $category; // Tells you it came from the popup

$headers = "From: noreply@firemart.in\r\n"; 
// Smart Reply-To: Only add it if they actually typed a valid email address
if (filter_var($contact_info, FILTER_VALIDATE_EMAIL)) {
    $headers .= "Reply-To: $contact_info\r\n";
}
$headers .= "X-Mailer: PHP/" . phpversion();

// 3. Build the email body message
$body = "You have a new QUICK INQUIRY from the homepage popup:\n\n";
$body .= "Name: $name\n";
$body .= "Phone/Email: $contact_info\n";
$body .= "Interested In: $category\n";
$body .= "Message:\n$message\n";

// 4. Send the email! (Checks to make sure they didn't leave contact info blank)
if (!empty($contact_info) && !empty($name)) {
    
    $send = mail($to, $subject, $body, $headers);
    
    if ($send) {
        // Success message and auto-redirect back to INDEX page after 3 seconds
        echo "<div style='font-family: sans-serif; text-align: center; margin-top: 50px;'>";
        echo "<h2 style='color: #e31837;'>Success!</h2>";
        echo "<p>Your inquiry was sent successfully. Our team will contact you shortly.</p>";
        echo "<p><small>Redirecting you back to the home page...</small></p>";
        echo "</div>";
        echo "<meta http-equiv='refresh' content='3;url=index.html'>"; 
    } else {
        // Server failed to send
        echo "<h2 style='color: red; text-align: center; margin-top: 50px;'>Error!</h2>";
        echo "<p style='text-align: center;'>The server failed to send the message. Please try again later.</p>";
    }
    
} else {
    // User left the name or contact blank
    echo "<h2 style='color: red; text-align: center; margin-top: 50px;'>Missing Details</h2>";
    echo "<p style='text-align: center;'>Please go back and provide your name and contact information.</p>";
}
?>