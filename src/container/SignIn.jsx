import React from 'react'

export default function SignIn() {
  return (
    <div>
      Sign in here
      <form>
        <label htmlFor="email">Email: </label>
        <input
          id="email"
          type="email" 
          required
        />
        <br />

        <label htmlFor="password">Password: </label>
        <input
          id="password"
          type="password" 
          required
        />
        <br />

        <button>Sign in</button>
      </form>
    </div>
  )
}
