import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Input from '../components/Input'
import Button from '../components/Button'
import AuthCard from '../components/AuthCard'
import Logo from '../components/Logo'

function SignupPage() {
  const [form, setForm] = useState({ fullname: '', email: '', password: '' })

  const handleChange = (e) => setForm((s) => ({ ...s, [e.target.name]: e.target.value }))
  const handleSubmit = (e) => {
    e.preventDefault()
    // placeholder for submit logic
    console.log('signup', form)
  }

  return (
    <div className="min-h-screen w-full flex items-center justify-center p-6 bg-gradient-to-br from-slate-800 via-slate-900 to-indigo-900">
      <div className="w-full max-w-5xl grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <div className="hidden md:flex flex-col gap-6 pl-10 text-white">
          <Logo size="text-3xl" />
          <h1 className="text-4xl font-extrabold">Create your account</h1>
          <p className="text-gray-300 max-w-sm">Join the conversation. Connect with friends and teams instantly — an elegant, fast chat experience.</p>

          <div className="mt-6">
            <svg viewBox="0 0 600 400" className="w-full h-56 opacity-90" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect x="0" y="0" width="600" height="400" rx="24" fill="#0f172a"/>
              <g transform="translate(40,40)" fill="#e6eef8" opacity="0.9">
                <rect x="0" y="0" width="220" height="120" rx="12" fill="#6366f1" opacity="0.12" />
                <circle cx="40" cy="80" r="18" fill="#60a5fa" opacity="0.18"/>
                <rect x="260" y="10" width="260" height="160" rx="12" fill="#38bdf8" opacity="0.08" />
              </g>
            </svg>
          </div>
        </div>

        <div className="flex justify-center">
          <AuthCard title="Get started" subtitle="Create your free account">
            <form onSubmit={handleSubmit} className="mt-2">
              <Input label="Full name" name="fullname" placeholder="Jane Doe" value={form.fullname} onChange={handleChange} />
              <Input label="Email address" name="email" placeholder="you@company.com" type="email" value={form.email} onChange={handleChange} autoComplete="email" />
              <Input label="Password" name="password" placeholder="Create a strong password" type="password" value={form.password} onChange={handleChange} autoComplete="new-password" />

              <Button type="submit" className="mt-3">Create account</Button>

              <p className="text-center text-sm text-slate-300 mt-4">Already have an account? <Link to="/login" className="text-indigo-400 font-medium">Sign in</Link></p>
            </form>
          </AuthCard>
        </div>
      </div>
    </div>
  )
}

export default SignupPage