// app/api/set-token/route.js
import { NextResponse } from 'next/server';

export async function POST(request) {
  const { token } = await request.json();

  return NextResponse.json({ success: true }, {
    headers: {
      'Set-Cookie': `token=${token}; Path=/; HttpOnly; Secure; SameSite=Strict; Max-Age=3600`,
    },
  });
}
