import { SignedIn, SignedOut, SignInButton, UserButton, UserProfile } from '@clerk/nextjs'
import Link from 'next/link'
import React from 'react'

const Header = () => {
    return (
        <div className='p-4 bg-blue-500 text-white'>
            <Link href={'/'}>Logo</Link>

            <div>
                <SignedIn>
                    <UserButton showName />
                </SignedIn>
                <SignedOut>
                    <SignInButton />
                </SignedOut>
            </div>
        </div>
    )
}

export default Header
