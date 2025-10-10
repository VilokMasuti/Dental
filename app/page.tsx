import { SignUpButton } from '@clerk/nextjs'

const HomePage = () => {
  return (
    <div>
      <h1>
        HOMEPAGE
      </h1>

      <SignUpButton mode='modal'>Git in</SignUpButton>
    </div>
  )
}
export default HomePage
