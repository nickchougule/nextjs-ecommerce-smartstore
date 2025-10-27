export default function Footer() {
  return (
    <footer className="bg-dark text-light text-center py-3 mt-auto">
      <div className="container">
        <p className="mb-0 small">
          © {new Date().getFullYear()} SmartStore. Built with ❤️ by Nikhil Chougule.
        </p>
      </div>
    </footer>
  );
}
