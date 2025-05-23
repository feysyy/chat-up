import React from 'react'

export default function SignUp() {
  return (
    <div>
      Sign up here
      <form>
        <label htmlFor="email">Email:</label>
        <input 
          id="email"
          type="email" 
          required
        />
        <br />

        <label htmlFor="password">Password:</label>
        <input
          id="password"
          type="passowrd" 
          required
        />
        <br />

        <label htmlFor="confirm-password">Confirm password:</label>
        <input
          id="confirm-password"
          type="passowrd" 
          required
        />
        <br />

        <button>Sign up</button>
      </form>
    </div>
  )
}
