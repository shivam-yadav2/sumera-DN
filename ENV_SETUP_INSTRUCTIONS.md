# Environment Configuration Instructions

## Update .env File

To ensure the correct application name appears everywhere, update your `.env` file:

### 1. Open `.env` file in the root directory

### 2. Find and update these lines:

```env
APP_NAME="Sumeera Salon And Academy"
APP_ENV=production
APP_DEBUG=false
APP_URL=https://yourdomain.com
```

### 3. If APP_NAME doesn't exist, add it at the top:

```env
APP_NAME="Sumeera Salon And Academy"
```

### 4. Clear config cache (run in terminal):

```bash
php artisan config:clear
php artisan cache:clear
```

---

## Important Environment Variables

### Application
```env
APP_NAME="Sumeera Salon And Academy"
APP_ENV=production
APP_KEY=your_app_key_here
APP_DEBUG=false
APP_URL=https://yourdomain.com
```

### Database
```env
DB_CONNECTION=mysql
DB_HOST=127.0.0.1
DB_PORT=3306
DB_DATABASE=your_database_name
DB_USERNAME=your_username
DB_PASSWORD=your_password
```

### Mail (if using email features)
```env
MAIL_MAILER=smtp
MAIL_HOST=smtp.gmail.com
MAIL_PORT=587
MAIL_USERNAME=your_email@gmail.com
MAIL_PASSWORD=your_app_password
MAIL_ENCRYPTION=tls
MAIL_FROM_ADDRESS=noreply@yourdomain.com
MAIL_FROM_NAME="Sumeera Salon And Academy"
```

---

## After Updating .env

Always run these commands after changing .env:

```bash
# Clear all caches
php artisan config:clear
php artisan cache:clear
php artisan route:clear
php artisan view:clear

# If using queue
php artisan queue:restart
```

---

## Troubleshooting

### "Laravel" still showing in browser title?
1. Update APP_NAME in .env
2. Run `php artisan config:clear`
3. Hard refresh browser (Ctrl+F5 or Cmd+Shift+R)
4. Clear browser cache

### Changes not reflecting?
1. Make sure you saved the .env file
2. Run config:clear command
3. Restart your development server
4. Clear browser cache

### Config changes not working in production?
In production, config is cached for performance:
```bash
php artisan config:cache
```

Run this after any .env changes in production.

---

## Security Note

- Never commit `.env` file to version control
- Keep `.env.example` updated with structure (but no real values)
- Use strong passwords for database and mail
- Set APP_DEBUG=false in production

---

## Quick Setup Checklist

- [ ] Set APP_NAME in .env
- [ ] Set APP_URL to your domain
- [ ] Configure database credentials
- [ ] Set APP_DEBUG=false for production
- [ ] Run `php artisan config:clear`
- [ ] Test the website title in browser
- [ ] Check meta tags in page source

---

Done! Your application name should now be correctly displayed everywhere! 🎉

