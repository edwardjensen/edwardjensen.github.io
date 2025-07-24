import type { APIRoute } from 'astro';

export const POST: APIRoute = async ({ request }) => {
  try {
    const { event, action = 'page_view' } = await request.json();

    const analyticsData = {
      event: event || 'direct',
      action,
      timestamp: new Date().toISOString(),
      userAgent: request.headers.get('user-agent') || '',
      ip: request.headers.get('cf-connecting-ip') || request.headers.get('x-forwarded-for') || '',
      referrer: request.headers.get('referer') || ''
    };

    // Log analytics event
    console.log('Analytics event:', analyticsData);

    // Placeholder for future implementation:
    // await env.DB.prepare(
    //   'INSERT INTO analytics (event, action, timestamp, user_agent, ip, referrer) VALUES (?, ?, ?, ?, ?, ?)'
    // ).bind(event, action, analyticsData.timestamp, analyticsData.userAgent, analyticsData.ip, analyticsData.referrer).run();

    return new Response(JSON.stringify({ success: true }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' }
    });

  } catch (error) {
    console.error('Analytics tracking error:', error);
    return new Response(JSON.stringify({ error: 'Internal server error' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' }
    });
  }
};