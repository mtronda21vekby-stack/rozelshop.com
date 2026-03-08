'use client'

import { useState } from 'react'

export default function AtelierPortalPage() {
  const [entered, setEntered] = useState(false)
  const [password, setPassword] = useState('')

  function handleLogin(e: React.FormEvent) {
    e.preventDefault()

    if (password === 'rozel-admin') {
      setEntered(true)
    }
  }

  if (!entered) {
    return (
      <section className="page-section">
        <div className="container">

          <div className="admin-login">
            <div className="eyebrow">Atelier Portal</div>

            <h1 className="page-title">
              ROZEL Admin
            </h1>

            <p className="page-text">
              Private administrative interface of the house.
            </p>

            <form onSubmit={handleLogin} className="admin-login__form">

              <input
                type="password"
                placeholder="Access key"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="admin-input"
              />

              <button className="btn btn--primary">
                Enter atelier
              </button>

            </form>

          </div>

        </div>
      </section>
    )
  }

  return (
    <section className="page-section">
      <div className="container">

        <div className="eyebrow">Admin</div>

        <h1 className="page-title">
          Atelier Dashboard
        </h1>

        <p className="page-text">
          Product management interface will appear here.
        </p>

        <div className="admin-dashboard">

          <div className="admin-card">
            <h3>Products</h3>
            <p>Manage product catalog</p>
          </div>

          <div className="admin-card">
            <h3>Collections</h3>
            <p>Edit collection structure</p>
          </div>

          <div className="admin-card">
            <h3>Journal</h3>
            <p>Publish editorial entries</p>
          </div>

        </div>

      </div>
    </section>
  )
}
