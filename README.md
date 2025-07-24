# Edward Jensen Landing Page - Astro Version

This is the modernized version of the landing page built with Astro, featuring:

- **Event tracking**: URLs like `/event-name` automatically track which event you met someone at
- **Contact form**: Collects visitor information with event attribution
- **Responsive design**: Works great on all devices
- **Dark mode support**: Automatically adapts to user preferences

## Development

```bash
npm install
npm run dev
```

## Building for Production

```bash
npm run build
```

## Deployment

This site is configured for Cloudflare Pages with serverless functions for the contact form and analytics.

### Cloudflare Pages Setup

1. Connect your GitHub repository to Cloudflare Pages
2. Set build command: `npm run build`
3. Set build output directory: `dist`
4. Set Node.js version: `22.x`

### Features

- **Dynamic routing**: `/any-event-name` works automatically
- **Contact collection**: Form submissions are logged (ready for database integration)
- **Analytics tracking**: Page views and events are tracked
- **Performance optimized**: Server-side rendering with edge functions

## Usage

- Main page: `https://hi.edwardjensen.net/`
- Event-specific: `https://hi.edwardjensen.net/conference2024`
- Contact form includes automatic event attribution
EOF < /dev/null