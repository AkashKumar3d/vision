import {
  getSession,
  handleAuth,
  handleLogin,
  handleProfile
} from '@auth0/nextjs-auth0';
import { auth0ManagementClient } from '../../../auth0';
// eslint-disable-next-line @next/next/no-server-import-in-page
import { NextResponse } from 'next/server';

const GET = handleAuth({
  async login(req, res) {
    return await handleLogin(req, res, {
      returnTo: '/dashboard'
    });
  },
  onError(req: any, error: Error) {
    if (
      // @ts-ignore
      error.cause?.errorDescription.startsWith('SIGNUP:EMAIL_NOT_VERIFIED:')
    ) {
      // @ts-ignore
      const email = error.cause?.errorDescription.split(':').pop();
      return NextResponse.redirect(
        new URL(
          `/email-verification?email=${encodeURIComponent(email)}`,
          req.nextUrl.origin
        )
      );
    }
    
    return NextResponse.error()
  },
  async profile() {
    const session = await getSession();
    console.log('session', session);

    const { data: userDetails } = await auth0ManagementClient.users.get({
      id: session?.user.sub
    });
    return NextResponse.json(userDetails);
  },
  'refresh-profile': handleProfile({ refetch: true })
});

export default GET