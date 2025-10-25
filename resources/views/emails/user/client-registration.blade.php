<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Appointment Confirmation</title>
    <style>
        body, table, td, a {
            font-family: Arial, sans-serif;
        }
        table {
            width: 100%;
            max-width: 600px;
            margin: 0 auto;
        }
        .email-container {
            background-color: #f4f6f9;
            padding: 20px;
        }
        .email-header {
            background-color: #2d87f0;
            color: #fff;
            text-align: center;
            padding: 20px 0;
        }
        .email-header h1 {
            margin: 0;
        }
        .email-body {
            background-color: #fff;
            padding: 20px;
            border-radius: 8px;
        }
        .email-body h2 {
            color: #333;
        }
        .email-body p {
            color: #666;
        }
        .email-footer {
            text-align: center;
            font-size: 12px;
            color: #777;
            padding-top: 10px;
        }
        .btn {
            display: inline-block;
            background-color: #2d87f0;
            color: white;
            padding: 10px 20px;
            text-decoration: none;
            border-radius: 5px;
            margin-top: 20px;
        }
        .btn:hover {
            background-color: #1a63c3;
        }
    </style>
</head>
<body>
<div class="email-container">
    <table>
        <tr>
            <td class="email-header">
                <h1>Appointment Confirmation</h1>
            </td>
        </tr>
        <tr>
            <td class="email-body">
                <h2>Hello {{ $name }},</h2>
                <p>Thank you for your appointment request! We're happy to confirm the details of your appointment:</p>
                <p><strong>Service:</strong> {{ $service }}</p>
                <p><strong>Your Message:</strong> {{ $message }}</p>
                <p>If you have any questions or need to reschedule, feel free to reply to this email.</p>
                <a href="{{ url('/appointments') }}" class="btn">View Your Appointment</a>
            </td>
        </tr>
    </table>
</div>
</body>
</html>
