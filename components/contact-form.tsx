'use client'

import { useState } from 'react'

type Status = 'idle' | 'loading' | 'success' | 'error'

export default function ContactForm() {
  const [status, setStatus] = useState<Status>('idle')
  const [errorMsg, setErrorMsg] = useState('')

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setStatus('loading')
    setErrorMsg('')

    const form = e.currentTarget
    const data = {
      name: (form.elements.namedItem('name') as HTMLInputElement).value.trim(),
      email: (form.elements.namedItem('email') as HTMLInputElement).value.trim(),
      phone: (form.elements.namedItem('phone') as HTMLInputElement).value.trim() || null,
      type: (form.elements.namedItem('type') as HTMLSelectElement).value,
      message: (form.elements.namedItem('message') as HTMLTextAreaElement).value.trim() || null,
      source: 'website',
    }

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      })
      if (res.ok) {
        setStatus('success')
        form.reset()
      } else {
        const json = await res.json().catch(() => ({}))
        setErrorMsg(json.error ?? 'Something went wrong. Please try again.')
        setStatus('error')
      }
    } catch {
      setErrorMsg('Network error. Please try again.')
      setStatus('error')
    }
  }

  if (status === 'success') {
    return (
      <div className="rounded-2xl bg-white/10 px-8 py-10 text-center">
        <p className="text-2xl font-bold text-white">You're in.</p>
        <p className="mt-2 text-sm text-white/70">We'll be in touch within one business day.</p>
      </div>
    )
  }

  const inputClass =
    'w-full rounded-xl bg-white/10 border border-white/20 px-4 py-3 text-sm text-white placeholder:text-white/40 focus:outline-none focus:ring-2 focus:ring-primary'

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4">
      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className="sr-only">Name</label>
          <input id="name" name="name" type="text" required placeholder="Your name" className={inputClass} />
        </div>
        <div>
          <label htmlFor="email" className="sr-only">Email</label>
          <input id="email" name="email" type="email" required placeholder="Email address" className={inputClass} />
        </div>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor="phone" className="sr-only">Phone (optional)</label>
          <input id="phone" name="phone" type="tel" placeholder="Phone (optional)" className={inputClass} />
        </div>
        <div>
          <label htmlFor="type" className="sr-only">I am a…</label>
          <select id="type" name="type" required defaultValue="" className={inputClass + ' appearance-none'}>
            <option value="" disabled>I am a…</option>
            <option value="realtor">Realtor</option>
            <option value="investor">Investor</option>
            <option value="other">Other small business owner</option>
          </select>
        </div>
      </div>

      <div>
        <label htmlFor="message" className="sr-only">What's eating your time? (optional)</label>
        <textarea
          id="message"
          name="message"
          rows={3}
          placeholder="What's eating your time? (optional)"
          className={inputClass + ' resize-none'}
        />
      </div>

      {status === 'error' && (
        <p className="text-sm text-red-400">{errorMsg}</p>
      )}

      <button
        type="submit"
        disabled={status === 'loading'}
        className="inline-flex items-center justify-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground hover:bg-primary/90 transition-colors disabled:opacity-60"
      >
        {status === 'loading' ? 'Sending…' : 'Get in touch →'}
      </button>
    </form>
  )
}
