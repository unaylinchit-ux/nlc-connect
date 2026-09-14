import { useState } from 'react'

const COUNTRIES = [
  { code: '+95', flag: '🇲🇲', name: 'Myanmar' },
  { code: '+66', flag: '🇹🇭', name: 'Thailand' },
  { code: '+1', flag: '🇺🇸', name: 'USA' },
  { code: '+44', flag: '🇬🇧', name: 'UK' },
  { code: '+65', flag: '🇸🇬', name: 'Singapore' },
  { code: '+60', flag: '🇲🇾', name: 'Malaysia' },
  { code: '+81', flag: '🇯🇵', name: 'Japan' },
  { code: '+82', flag: '🇰🇷', name: 'Korea' },
]

export default function App() {
  const [dial, setDial] = useState('+95')
  const [phone, setPhone] = useState('')

  return (
    <div className="min-h-screen bg-black flex items-center justify-center p-4">
      <div className="w-full max-w-sm bg-zinc-900/80 border border-zinc-800 rounded-[30px] p-7 backdrop-blur">
        <h1 className="text-3xl font-black text-center bg-gradient-to-r from-teal-300 to-blue-500 bg-clip-text text-transparent">
          NLC CONNECT
        </h1>
        <p className="text-center text-zinc-400 text-xs tracking-widest mb-7 mt-1">V12 INTERNATIONAL LOGIN EDITION</p>

        <div className="space-y-3">
          <button className="w-full bg-white text-black font-semibold rounded-full py-3.5 flex items-center justify-center gap-2">
            🌐 Continue with Google
          </button>
          <button className="w-full bg-[#1877F2] text-white font-semibold rounded-full py-3.5 flex items-center justify-center gap-2">
            📘 Continue with Facebook
          </button>
          <button className="w-full bg-black border border-zinc-700 text-white font-semibold rounded-full py-3.5 flex items-center justify-center gap-2">
            🍎 Continue with Apple
          </button>

          <div className="flex items-center gap-3 my-4">
            <div className="h-[1px] bg-zinc-800 flex-1" />
            <span className="text-zinc-500 text-xs">OR</span>
            <div className="h-[1px] bg-zinc-800 flex-1" />
          </div>

          {/* International Phone */}
          <div className="flex gap-2">
            <select value={dial} onChange={e=>setDial(e.target.value)} className="bg-zinc-800 text-white rounded-2xl px-3 py-3.5 border border-zinc-700 outline-none text-sm">
              {COUNTRIES.map(c=><option key={c.code} value={c.code}>{c.flag} {c.code}</option>)}
            </select>
            <input
              value={phone} onChange={e=>setPhone(e.target.value)}
              placeholder="9XXXXXXXX" type="tel"
              className="flex-1 bg-zinc-800 text-white rounded-2xl px-4 py-3.5 border border-zinc-700 outline-none"
            />
          </div>
          <button className="w-full bg-gradient-to-r from-blue-500 to-teal-400 text-white font-bold rounded-full py-3.5">
            Continue with Phone {dial}{phone}
          </button>
          <p className="text-center text-zinc-500 text-[11px] mt-3">We will send OTP to {dial} {phone || 'your phone'}</p>
        </div>
      </div>
    </div>
  )
}
