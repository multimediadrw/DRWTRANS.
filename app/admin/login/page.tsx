'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import Image from 'next/image'
import { Lock, User, Eye, EyeOff } from 'lucide-react'

export default function AdminLoginPage() {
  const router = useRouter()
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [showPassword, setShowPassword] = useState(false)
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault()
    setError('')
    setLoading(true)

    // Simple authentication (in production, use proper backend auth)
    if (username === 'admin' && password === 'drwtrans2026') {
      // Store auth token in localStorage
      localStorage.setItem('adminAuth', 'true')
      localStorage.setItem('adminUsername', username)
      
      // Redirect to admin dashboard
      setTimeout(() => {
        router.push('/admin/dashboard')
      }, 500)
    } else {
      setError('Username atau password salah!')
      setLoading(false)
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-royal-purple via-purple-900 to-royal-purple-dark flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        {/* Logo & Title */}
        <div className="text-center mb-8">
          <div className="flex justify-center mb-4">
            <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center shadow-lg">
              <Image 
                src="/logo-drwtrans.png" 
                alt="DRW TRANS" 
                width={60}
                height={60}
                className="object-contain"
              />
            </div>
          </div>
          <h1 className="text-3xl font-bold text-white mb-2">Admin Portal</h1>
          <p className="text-white/80 text-sm">DRW TRANS Management System</p>
        </div>

        {/* Login Card */}
        <div className="bg-white rounded-2xl shadow-2xl p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">Login Admin</h2>

          <form onSubmit={handleLogin} className="space-y-5">
            {/* Username Input */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Username
              </label>
              <div className="relative">
                <div className="absolute left-3 top-1/2 -translate-y-1/2">
                  <User className="w-5 h-5 text-gray-400" />
                </div>
                <input
                  type="text"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  className="w-full pl-11 pr-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-royal-purple focus:border-transparent outline-none transition-all"
                  placeholder="Masukkan username"
                  required
                />
              </div>
            </div>

            {/* Password Input */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Password
              </label>
              <div className="relative">
                <div className="absolute left-3 top-1/2 -translate-y-1/2">
                  <Lock className="w-5 h-5 text-gray-400" />
                </div>
                <input
                  type={showPassword ? 'text' : 'password'}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full pl-11 pr-12 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-royal-purple focus:border-transparent outline-none transition-all"
                  placeholder="Masukkan password"
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
                >
                  {showPassword ? (
                    <EyeOff className="w-5 h-5" />
                  ) : (
                    <Eye className="w-5 h-5" />
                  )}
                </button>
              </div>
            </div>

            {/* Error Message */}
            {error && (
              <div className="bg-red-50 border border-red-200 rounded-xl p-3">
                <p className="text-red-700 text-sm font-medium text-center">{error}</p>
              </div>
            )}

            {/* Login Button */}
            <button
              type="submit"
              disabled={loading}
              className="w-full py-3 bg-gradient-to-r from-royal-purple to-purple-700 hover:from-royal-purple-dark hover:to-purple-800 text-white font-bold rounded-xl shadow-lg active:scale-95 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {loading ? 'Memproses...' : 'Login'}
            </button>
          </form>

          {/* Info */}
          <div className="mt-6 pt-6 border-t border-gray-200">
            <p className="text-xs text-gray-500 text-center">
              Hanya untuk admin DRW TRANS yang berwenang
            </p>
          </div>
        </div>

        {/* Back to Home */}
        <div className="text-center mt-6">
          <button
            onClick={() => router.push('/')}
            className="text-white/80 hover:text-white text-sm font-medium underline"
          >
            ← Kembali ke Homepage
          </button>
        </div>
      </div>
    </div>
  )
}
