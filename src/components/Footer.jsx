const Footer = () => {
  return (
    <footer className="py-3 bg-light text-center mt-auto">
      <div className="container">
        <small className="text-muted">
          © {new Date().getFullYear()} Weather App — Built with ❤️ by Divya Mistry
        </small>
      </div>
    </footer>
  );
};

export default Footer;
