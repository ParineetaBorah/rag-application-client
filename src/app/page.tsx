import { auth } from '@clerk/nextjs/server'
import { redirect } from 'next/navigation';

async function WelcomePage() {

  const { userId } = await auth();
  console.log("User ID:", userId);

  if (userId){
    redirect('/projects');
  } else {
    redirect('/sign-in');
  }
}

export default WelcomePage;