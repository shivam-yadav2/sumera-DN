<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>New Appointment Request</title>
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
            background-color: #333;
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
            background-color: #333;
            color: white;
            padding: 10px 20px;
            text-decoration: none;
            border-radius: 5px;
            margin-top: 20px;
        }
        .btn:hover {
            background-color: #555;
        }
    </style>
</head>
<body>
    <div class="email-container">
        <table>
            <tr>
                <td class="email-header">
                    <h1>New Appointment Request</h1>
                </td>
            </tr>
            <tr>
                <td class="email-body">
                    <h2>Hello Admin,</h2>
                    <p>You have received a new appointment request with the following details:</p>
                    <p><strong>Name:</strong> {{ $name }}</p>
                    <p><strong>Service:</strong> {{ $service }}</p>
                    <p><strong>Message:</strong> {{ $message }}</p>
                    <p><strong>Mobile:</strong> {{ $mobile }}</p>
                    <p><strong>Email:</strong> {{ $email }}</p>
                    <p><strong>City:</strong> {{ $city }}</p>
                </td>
            </tr>
        </table>
    </div>
</body>
</html>
