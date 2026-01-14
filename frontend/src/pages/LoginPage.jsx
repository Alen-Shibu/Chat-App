import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Input from '../components/Input'
import Button from '../components/Button'
import AuthCard from '../components/AuthCard'
import Logo from '../components/Logo'

function LoginPage() {
  const [form, setForm] = useState({ email: '', password: '' })
  const handleChange = (e) => setForm((s) => ({ ...s, [e.target.name]: e.target.value }))
  const handleSubmit = (e) => {
    e.preventDefault()
    // placeholder for login logic
    console.log('login', form)
  }

  return (
    <div className="min-h-screen w-full flex items-center justify-center p-6 bg-gradient-to-br from-slate-800 via-slate-900 to-indigo-900">
      <div className="w-full max-w-md">
        <AuthCard title={<div className="flex flex-col items-center"><Logo /><span className="mt-3 text-lg font-bold text-white">Welcome back</span></div>} subtitle="Sign in to continue">
          <form onSubmit={handleSubmit} className="mt-2">
            <Input label="Email address" name="email" placeholder="you@company.com" type="email" value={form.email} onChange={handleChange} autoComplete="email" />
            <Input label="Password" name="password" placeholder="Your password" type="password" value={form.password} onChange={handleChange} autoComplete="current-password" />

            <Button type="submit">Sign in</Button>

            <p className="text-center text-sm text-slate-300 mt-4">Don’t have an account? <Link to="/signup" className="text-indigo-400 font-medium">Sign up</Link></p>
          </form>
        </AuthCard>
      </div>
    </div>
  )
}

export default LoginPage