import type { APIRoute } from 'astro';

export const POST: APIRoute = async ({ request }) => {
  try {
    const formData = await request.formData();
    const name = formData.get('name') as string;
    const email = formData.get('email') as string;
    const message = formData.get('message') as string;
    const event = formData.get('event') as string;

    // Validate required fields
    if (!name || !email) {
      return new Response(JSON.stringify({ error: 'Name and email are required' }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' }
      });
    }

    // Create contact entry
    const contactData = {
      name,
      email,
      message: message || '',
      event: event || 'direct',
      timestamp: new Date().toISOString(),
      userAgent: request.headers.get('user-agent') || '',
      ip: request.headers.get('cf-connecting-ip') || request.headers.get('x-forwarded-for') || ''
    };

    // In a real implementation, you would:
    // 1. Store to Cloudflare D1 database
    // 2. Send notification email
    // 3. Log analytics event
    
    // For now, we'll just log to console (visible in Cloudflare Pages Functions logs)
    console.log('New contact submission:', contactData);

    // Placeholder for future implementation:
    // await env.DB.prepare(
    //   'INSERT INTO contacts (name, email, message, event, timestamp, user_agent, ip) VALUES (?, ?, ?, ?, ?, ?, ?)'
    // ).bind(name, email, message, event, contactData.timestamp, contactData.userAgent, contactData.ip).run();

    return new Response(JSON.stringify({ success: true }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' }
    });

  } catch (error) {
    console.error('Contact form error:', error);
    return new Response(JSON.stringify({ error: 'Internal server error' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' }
    });
  }
};