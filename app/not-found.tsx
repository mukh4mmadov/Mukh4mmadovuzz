import './globals.css'

export default function NotFound() {
  return (
    <html lang="en">
      <body>
        <div className="selvedge" />
        <main className="wrap py-32">
          <h1 className="text-4xl sm:text-6xl">This page does not exist</h1>
          <a href="/en" className="btn btn-solid mt-10">Go to the portfolio</a>
        </main>
      </body>
    </html>
  )
}
